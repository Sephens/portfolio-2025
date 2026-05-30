#!/usr/bin/env node
/**
 * convert-blogs.js
 *
 * Converts every published blog .md file into a styled HTML file
 * that matches the BigQuery writeup design language.
 *
 * Usage (run from your project root):
 *   node convert-blogs.js
 *
 * Input:  public/blogs/*.md
 * Output: public/blogs/*.html   (one HTML file per md, same base name)
 *
 * After running this script, the BlogPostPage component will serve
 * the HTML files instead of rendering markdown on the fly.
 */

import fs   from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

// ── Config ────────────────────────────────────────────────────────────────────
const INPUT_DIR  = path.join(__dirname, 'public', 'blogs')
const OUTPUT_DIR = path.join(__dirname, 'public', 'blogs')

// ── Topic accent colours (mirrors BlogPostPage) ───────────────────────────────
const TOPIC_ACCENTS = {
  'Git':              { accent: '#d6500a', accentBg: '#fff3eb' },
  'React':            { accent: '#0284c7', accentBg: '#e0f2fe' },
  'Javascript':       { accent: '#b45309', accentBg: '#fffbeb' },
  'Python':           { accent: '#2563eb', accentBg: '#eff6ff' },
  'Machine Learning': { accent: '#7c3aed', accentBg: '#f5f3ff' },
  'Data Science':     { accent: '#0f766e', accentBg: '#f0fdfa' },
  'Firebase':         { accent: '#dc2626', accentBg: '#fef2f2' },
  'Tailwind CSS':     { accent: '#0891b2', accentBg: '#ecfeff' },
  'Amazon EC2':       { accent: '#d97706', accentBg: '#fffbeb' },
  'Amazon Machine Image (AMI)': { accent: '#d97706', accentBg: '#fffbeb' },
  'Linux in AWS':     { accent: '#374151', accentBg: '#f9fafb' },
  'Networking in AWS':{ accent: '#0f766e', accentBg: '#f0fdfa' },
  'Security in AWS':  { accent: '#b91c1c', accentBg: '#fef2f2' },
  'Data Engineering': { accent: '#1a6bb5', accentBg: '#e8f2fc' },
  'Database':         { accent: '#92400e', accentBg: '#fef9c3' },
  'TypeScript':       { accent: '#1d4ed8', accentBg: '#eff6ff' },
  'DevOps':           { accent: '#166534', accentBg: '#f0fdf4' },
}
const DEFAULT_ACCENT = { accent: '#1a6bb5', accentBg: '#e8f2fc' }

// ── Frontmatter parser ────────────────────────────────────────────────────────
function parseFrontmatter(raw) {
  const text = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const match = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: text.trim() }

  const meta = {}
  match[1].split('\n').forEach(line => {
    const colon = line.indexOf(':')
    if (colon === -1) return
    const key = line.slice(0, colon).trim()
    const val = line.slice(colon + 1).trim()
    if (key) meta[key] = val
  })
  if (meta.Tags) meta.Tags = meta.Tags.split(/\s+/).filter(Boolean)

  return { meta, content: match[2].trim() }
}

// ── Inline formatter ──────────────────────────────────────────────────────────
function inlineFmt(text) {
  return text
    // Inline image
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" style="max-width:100%;border-radius:6px;margin:4px 0">')
    // Links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="bw-link">$1</a>')
    // Bold+italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bw-ic">$1</code>')
}

// ── Markdown → HTML body ─────────────────────────────────────────────────────
function mdToHtml(md) {
  let text = md.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim()

  // 1. Store raw <a> tags before escaping
  const aTags = []
  text = text.replace(/<a\s[^>]*>[\s\S]*?<\/a>/gi, m => {
    aTags.push(m); return `%%A${aTags.length - 1}%%`
  })

  // 2. Store code blocks before escaping
  const codeBlocks = []
  text = text.replace(/```([\w\s.-]*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const label = lang.trim()
    const esc   = code.trim()
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    const hdr = label
      ? `<div class="bw-ch"><span class="bw-cl">${label.toUpperCase()}</span></div>`
      : ''
    codeBlocks.push(`<div class="bw-cb">${hdr}<pre><code>${esc}</code></pre></div>`)
    return `%%CODE${codeBlocks.length - 1}%%`
  })

  // 3. Escape remaining HTML
  text = text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')

  // 4. Line-by-line parse
  const lines = text.split('\n')
  const out   = []
  let i = 0

  while (i < lines.length) {
    const raw  = lines[i]
    const line = raw.trim()

    if (!line) { i++; continue }

    // Headings (strip {#anchor} suffix)
    const hm = line.match(/^(#{1,6})\s+(.+?)(?:\s*\{#[^}]+\})?$/)
    if (hm) {
      const lvl = hm[1].length
      const cls = lvl <= 2 ? `bw-h${lvl}` : `bw-h${lvl}`
      out.push(`<h${lvl} class="${cls}">${inlineFmt(hm[2])}</h${lvl}>`)
      i++; continue
    }

    // Blockquote → insight box
    if (line.startsWith('&gt; ')) {
      out.push(`<blockquote class="bw-insight">${inlineFmt(line.slice(5))}</blockquote>`)
      i++; continue
    }

    // HR
    if (line === '---') { out.push('<hr class="bw-hr">'); i++; continue }

    // Code block placeholder
    if (/^%%CODE\d+%%$/.test(line)) { out.push(line); i++; continue }

    // Standalone image
    const im = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (im) {
      const caption = im[1] ? `<figcaption class="bw-cap">${im[1]}</figcaption>` : ''
      out.push(`<figure class="bw-fig"><img src="${im[2]}" alt="${im[1]}" class="bw-img">${caption}</figure>`)
      i++; continue
    }

    // Unordered list
    if (/^\s*[-*•]\s/.test(line)) {
      const items = []
      while (i < lines.length && /^\s*[-*•]\s/.test(lines[i].trim())) {
        items.push(`<li>${inlineFmt(lines[i].trim().replace(/^\s*[-*•]\s+?/, ''))}</li>`)
        i++
      }
      out.push(`<ul class="bw-ul">${items.join('')}</ul>`)
      continue
    }

    // Ordered list
    if (/^\d+\.\s/.test(line)) {
      const items = []
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        items.push(`<li>${inlineFmt(lines[i].trim().replace(/^\d+\.\s+/, ''))}</li>`)
        i++
      }
      out.push(`<ol class="bw-ol">${items.join('')}</ol>`)
      continue
    }

    // Paragraph — gather consecutive body lines
    const pLines = []
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^#{1,6}\s/.test(lines[i].trim()) &&
      !/^\s*[-*•]\s/.test(lines[i].trim()) &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      lines[i].trim() !== '---' &&
      !/^!\[[^\]]*\]\([^)]+\)$/.test(lines[i].trim()) &&
      !/^%%CODE\d+%%$/.test(lines[i].trim()) &&
      !/^&gt;\s/.test(lines[i].trim())
    ) { pLines.push(lines[i].trim()); i++ }

    if (pLines.length)
      out.push(`<p class="bw-p">${inlineFmt(pLines.join(' '))}</p>`)
  }

  // 5. Restore placeholders
  let html = out.join('\n')
  codeBlocks.forEach((b, idx) => { html = html.replace(`%%CODE${idx}%%`, b) })
  aTags.forEach((t, idx)      => { html = html.replace(`%%A${idx}%%`, t) })

  return html
}

// ── Estimate read time ────────────────────────────────────────────────────────
function readTime(content) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))
}

// ── Full HTML page template ───────────────────────────────────────────────────
function buildPage({ meta, bodyHtml }) {
  const topic  = meta.Topic  || ''
  const title  = meta.Title  || 'Blog Post'
  const author = meta.Author || 'Steve'
  const tags   = Array.isArray(meta.Tags) ? meta.Tags : (meta.Tags || '').split(/\s+/).filter(Boolean)
  const rt     = readTime(bodyHtml.replace(/<[^>]+>/g, ''))
  const { accent, accentBg } = TOPIC_ACCENTS[topic] || DEFAULT_ACCENT

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${title}</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --ink:#12121e;--ink-mid:#2e2e4e;--ink-light:#6b6b8a;
  --accent:${accent};--accent-bg:${accentBg};
  --gold:#c9963a;--gold-bg:#fdf6e8;
  --border:#e2e2ef;--surface:#f8f8fc;
  --code-bg:#0f1b2d;--code-fg:#cdd9f0;
}
html{font-size:16px}
body{font-family:'Source Serif 4',Georgia,serif;font-weight:300;color:var(--ink-mid);background:#fff;line-height:1.85}

/* ── Nav ── */
.bw-nav{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--border);padding:.65rem 1.5rem}
.bw-nav-inner{max-width:760px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.bw-back{display:inline-flex;align-items:center;gap:6px;font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:var(--ink-light);text-decoration:none;transition:color .15s}
.bw-back:hover{color:var(--ink)}
.bw-back svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.bw-pill{font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;padding:3px 12px;border-radius:20px;background:var(--accent-bg);color:var(--accent)}

/* ── Hero ── */
.bw-hero{padding:3.5rem 1.5rem 2.5rem;border-bottom:1px solid var(--border)}
.bw-hero-inner{max-width:760px;margin:0 auto}
.bw-cat{display:flex;align-items:center;gap:10px;font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:1.1rem}
.bw-cat-rule{display:inline-block;width:22px;height:1px;background:var(--accent);flex-shrink:0}
.bw-title{font-family:'Playfair Display',Georgia,serif;font-weight:700;font-size:clamp(1.75rem,3.8vw,2.6rem);line-height:1.18;color:var(--ink);margin-bottom:1rem;max-width:680px}
.bw-abstract{font-size:1.05rem;font-weight:300;line-height:1.75;color:var(--ink-mid);max-width:620px;margin-bottom:1.75rem}
.bw-meta{display:flex;flex-wrap:wrap;gap:1.1rem;align-items:stretch}
.bw-mi{display:flex;flex-direction:column;gap:3px}
.bw-ml{font-family:'DM Mono',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-light)}
.bw-mv{font-family:'DM Mono',monospace;font-size:12px;font-weight:500;color:var(--ink)}
.bw-ms{width:1px;background:var(--border);align-self:stretch;margin:2px 0}

/* ── Body ── */
.bw-body{max-width:760px;margin:0 auto;padding:3rem 1.5rem 5rem}

/* ── Typography ── */
.bw-h1{font-family:'Playfair Display',serif;font-weight:700;font-size:1.9rem;line-height:1.2;color:var(--ink);margin:2.75rem 0 .9rem}
.bw-h2{font-family:'Playfair Display',serif;font-weight:700;font-size:1.45rem;color:var(--ink);margin:2.75rem 0 .85rem;padding-bottom:.5rem;border-bottom:2px solid var(--ink)}
.bw-h3{font-family:'Source Serif 4',serif;font-weight:600;font-size:1.08rem;color:var(--ink);margin:2rem 0 .45rem}
.bw-h4{font-family:'Source Serif 4',serif;font-weight:600;font-size:1rem;color:var(--ink);margin:1.5rem 0 .35rem}
.bw-h5,.bw-h6{font-family:'DM Mono',monospace;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-light);margin:1.25rem 0 .3rem}
.bw-p{margin:.85rem 0}
strong{color:var(--ink);font-weight:600}
.bw-ul{list-style:disc;margin:.75rem 0 .75rem 1.5rem}
.bw-ol{list-style:decimal;margin:.75rem 0 .75rem 1.5rem}
.bw-ul li,.bw-ol li{margin:.35rem 0;line-height:1.78}
.bw-fig{margin:1.75rem 0}
.bw-img{width:100%;border-radius:8px;display:block;box-shadow:0 2px 20px rgba(0,0,0,.07)}
.bw-cap{font-family:'DM Mono',monospace;font-size:11px;color:var(--ink-light);text-align:center;margin-top:8px}
.bw-link{color:var(--accent);text-decoration:underline;text-underline-offset:3px}
.bw-link:hover{opacity:.75}
.bw-ic{font-family:'DM Mono',monospace;font-size:.83em;background:#f0f0f8;color:#bf1650;padding:.12em .42em;border-radius:4px}
.bw-cb{background:var(--code-bg);border-radius:8px;overflow:hidden;margin:1.5rem 0}
.bw-ch{padding:7px 14px;background:rgba(255,255,255,.04);border-bottom:1px solid rgba(255,255,255,.07)}
.bw-cl{font-family:'DM Mono',monospace;font-size:10px;color:#64b5f6;letter-spacing:.1em}
.bw-cb pre{font-family:'DM Mono',monospace;font-size:.82rem;color:var(--code-fg);padding:1.2rem 1.4rem;margin:0;overflow-x:auto;line-height:1.7;white-space:pre}
.bw-cb pre code{background:none;color:inherit;padding:0;font-size:inherit}
.bw-insight{background:var(--gold-bg);border-left:3px solid var(--gold);border-radius:0 7px 7px 0;padding:1rem 1.35rem;margin:1.5rem 0;font-style:italic;font-size:.98rem;color:#7a5a1a;line-height:1.72}
.bw-hr{border:none;border-top:1px solid var(--border);margin:2.25rem 0}

/* ── Footer ── */
.bw-footer{display:flex;align-items:center;justify-content:space-between;margin-top:4rem;padding-top:1.5rem;border-top:1px solid var(--border);font-family:'DM Mono',monospace;font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--ink-light)}
.bw-footer a{color:var(--accent);text-decoration:none;display:inline-flex;align-items:center;gap:5px}
.bw-footer a:hover{opacity:.7}
.bw-footer a svg{width:13px;height:13px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}

@media(max-width:600px){
  .bw-title{font-size:1.6rem}
  .bw-ms{display:none}
  .bw-hero{padding:2.25rem 1rem 1.75rem}
  .bw-body{padding:2rem 1rem 3.5rem}
  .bw-h2{font-size:1.25rem}
}
</style>
</head>
<body>

<nav class="bw-nav">
  <div class="bw-nav-inner">
    <a href="javascript:history.back()" class="bw-back">
      <svg viewBox="0 0 16 16"><path d="M10 3L5 8l5 5"/></svg>
      Back
    </a>
    ${topic ? `<span class="bw-pill">${topic}</span>` : ''}
  </div>
</nav>

<div class="bw-hero">
  <div class="bw-hero-inner">
    ${tags.length ? `<div class="bw-cat"><span class="bw-cat-rule"></span>${tags.join(' · ')}</div>` : ''}
    <h1 class="bw-title">${title}</h1>
    ${meta.Abstract ? `<p class="bw-abstract">${meta.Abstract}</p>` : ''}
    <div class="bw-meta">
      <div class="bw-mi"><span class="bw-ml">Author</span><span class="bw-mv">${author}</span></div>
      <div class="bw-ms"></div>
      <div class="bw-mi"><span class="bw-ml">Read time</span><span class="bw-mv">${rt} min</span></div>
      ${topic ? `<div class="bw-ms"></div><div class="bw-mi"><span class="bw-ml">Topic</span><span class="bw-mv">${topic}</span></div>` : ''}
    </div>
  </div>
</div>

<div class="bw-body">
  ${bodyHtml}

  <footer class="bw-footer">
    <span>Written by ${author}</span>
    <a href="javascript:history.back()">
      <svg viewBox="0 0 16 16"><path d="M10 3L5 8l5 5"/></svg>
      All posts
    </a>
  </footer>
</div>

</body>
</html>`
}

// ── Main ──────────────────────────────────────────────────────────────────────
const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.md'))
let converted = 0, skipped = 0

files.forEach(file => {
  const raw  = fs.readFileSync(path.join(INPUT_DIR, file), 'utf8')
  const { meta, content } = parseFrontmatter(raw)

  if (meta.isPublished === 'false') {
    console.log(`  ⏭  skipped  ${file}  (isPublished: false)`)
    skipped++; return
  }

  const bodyHtml  = mdToHtml(content)
  const pageHtml  = buildPage({ meta, bodyHtml })
  const outFile   = file.replace(/\.md$/, '.html')
  fs.writeFileSync(path.join(OUTPUT_DIR, outFile), pageHtml, 'utf8')
  console.log(`  ✓  ${outFile}  —  ${meta.Title}`)
  converted++
})

console.log(`\nDone. ${converted} converted, ${skipped} skipped.\n`)