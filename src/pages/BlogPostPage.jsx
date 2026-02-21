import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react'
import { useBlogPost } from '../hooks/useBlogPost'
import { useEffect } from 'react'

// Very lightweight markdown → HTML renderer (no external dep needed)
// Handles: headings, bold, italic, code blocks, inline code, images, links, lists, blockquotes, hr
function renderMarkdown(md) {
  let html = md
    // Escape HTML entities first
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

    // Fenced code blocks
    .replace(/```[\w]*\n([\s\S]*?)```/g, (_, code) =>
      `<pre class="blog-pre"><code>${code.trim()}</code></pre>`
    )

    // Headings
    .replace(/^###### (.+)$/gm, '<h6 class="blog-h6">$1</h6>')
    .replace(/^##### (.+)$/gm, '<h5 class="blog-h5">$1</h5>')
    .replace(/^#### (.+)$/gm, '<h4 class="blog-h4">$1</h4>')
    .replace(/^### (.+)$/gm, '<h3 class="blog-h3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="blog-h2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="blog-h1">$1</h1>')

    // Blockquote
    .replace(/^&gt; (.+)$/gm, '<blockquote class="blog-quote">$1</blockquote>')

    // HR
    .replace(/^---$/gm, '<hr class="blog-hr" />')

    // Images  ![alt](/src)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" class="blog-img" />')

    // Links  [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="blog-link">$1</a>')

    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')

    // Inline code
    .replace(/`([^`]+)`/g, '<code class="blog-code">$1</code>')

    // Unordered lists
    .replace(/^\s*[-*] (.+)$/gm, '<li class="blog-li">$1</li>')

    // Ordered lists
    .replace(/^\d+\. (.+)$/gm, '<li class="blog-oli">$1</li>')

    // Wrap consecutive <li> in <ul>
    .replace(/(<li class="blog-li">[\s\S]*?<\/li>\n?)+/g, (m) => `<ul class="blog-ul">${m}</ul>`)
    .replace(/(<li class="blog-oli">[\s\S]*?<\/li>\n?)+/g, (m) => `<ol class="blog-ol">${m}</ol>`)

    // Paragraphs — wrap lines that aren't already HTML tags
    .replace(/^(?!<[a-z]).+$/gm, (line) => line.trim() ? `<p class="blog-p">${line}</p>` : '')

    // Clean up extra blank lines
    .replace(/\n{3,}/g, '\n\n')

  return html
}

const topicGradients = {
  'Git':             'from-orange-500 to-amber-400',
  'Python':          'from-blue-500 to-cyan-400',
  'Machine Learning':'from-purple-600 to-pink-500',
  'Data Science':    'from-teal-500 to-emerald-400',
  'React':           'from-cyan-500 to-blue-400',
  'Backend':         'from-slate-600 to-slate-400',
  'DevOps':          'from-green-600 to-lime-400',
  'CSS':             'from-pink-500 to-rose-400',
  'Database':        'from-yellow-600 to-orange-400',
  'TypeScript':      'from-blue-600 to-indigo-400',
  'Security':        'from-red-600 to-orange-400',
  'Linux':           'from-slate-700 to-slate-500',
}
const getGradient = (topic) => topicGradients[topic] || 'from-primary-600 to-primary-400'

export default function BlogPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { meta, content, readTime, loading, error } = useBlogPost(id)

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-dark-500">
        <p className="text-xl">Post not found.</p>
        <button onClick={() => navigate('/blogs')} className="btn-primary">
          ← Back to Blog
        </button>
      </div>
    )
  }

  const topic = meta?.Topic || ''
  const tags = meta?.Tags || []
  const gradient = getGradient(topic)

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950">
      {/* Gradient hero banner */}
      <div className={`w-full bg-gradient-to-br ${gradient} pt-24 pb-16 px-6`}>
        <div className="max-w-3xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/blogs')}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </motion.button>

          {/* Topic pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
              {topic}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4"
          >
            {meta?.Title}
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 text-white/75 text-sm"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {readTime} min read
            </span>
            <span className="flex items-center gap-1.5">
              <Tag size={14} />
              {Array.isArray(tags) ? tags.join(', ') : tags}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 py-14"
      >
        {/* Abstract callout */}
        {meta?.Abstract && (
          <div className="mb-10 p-5 rounded-xl bg-dark-50 dark:bg-dark-800 border-l-4 border-primary-500 text-dark-600 dark:text-dark-300 italic text-sm leading-relaxed">
            {meta.Abstract}
          </div>
        )}

        {/* Rendered markdown */}
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
        />

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-dark-100 dark:border-dark-800 flex items-center justify-between">
          <button
            onClick={() => navigate('/blogs')}
            className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm hover:gap-3 transition-all"
          >
            <ArrowLeft size={15} /> All posts
          </button>
          <span className="text-xs text-dark-400">Written by {meta?.Author}</span>
        </div>
      </motion.div>

      {/* Global blog content styles */}
      <style>{`
        .blog-content { color: inherit; }
        .blog-h1 { font-size: 2rem; font-weight: 800; margin: 2.5rem 0 1rem; color: var(--color-dark-800); line-height: 1.2; }
        .blog-h2 { font-size: 1.5rem; font-weight: 700; margin: 2.2rem 0 0.8rem; color: var(--color-dark-800); border-bottom: 2px solid #e5e7eb; padding-bottom: 0.4rem; }
        .blog-h3 { font-size: 1.2rem; font-weight: 700; margin: 1.8rem 0 0.6rem; color: var(--color-dark-700); }
        .blog-h4, .blog-h5, .blog-h6 { font-size: 1rem; font-weight: 600; margin: 1.4rem 0 0.4rem; }
        .dark .blog-h1, .dark .blog-h2, .dark .blog-h3 { color: #f1f5f9; }
        .blog-p { margin: 0.9rem 0; line-height: 1.8; color: #374151; font-size: 1rem; }
        .dark .blog-p { color: #cbd5e1; }
        .blog-ul, .blog-ol { margin: 0.8rem 0 0.8rem 1.5rem; }
        .blog-ul { list-style: disc; }
        .blog-ol { list-style: decimal; }
        .blog-li, .blog-oli { margin: 0.3rem 0; line-height: 1.7; color: #374151; }
        .dark .blog-li, .dark .blog-oli { color: #cbd5e1; }
        .blog-img { max-width: 100%; border-radius: 10px; margin: 1.5rem 0; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        .blog-link { color: #6366f1; text-decoration: underline; }
        .blog-link:hover { color: #4f46e5; }
        .blog-code { background: #f1f5f9; color: #be185d; padding: 0.15em 0.45em; border-radius: 4px; font-size: 0.875em; font-family: monospace; }
        .dark .blog-code { background: #1e293b; color: #f472b6; }
        .blog-pre { background: #1e293b; color: #e2e8f0; padding: 1.25rem 1.5rem; border-radius: 10px; overflow-x: auto; margin: 1.5rem 0; font-size: 0.9rem; line-height: 1.6; }
        .blog-pre code { background: none; color: inherit; padding: 0; }
        .blog-quote { border-left: 4px solid #6366f1; padding: 0.5rem 1.25rem; margin: 1.5rem 0; background: #f8f8fc; color: #4b5563; font-style: italic; border-radius: 0 8px 8px 0; }
        .dark .blog-quote { background: #1e293b; color: #94a3b8; }
        .blog-hr { border: none; border-top: 1px solid #e5e7eb; margin: 2.5rem 0; }
        .dark .blog-hr { border-color: #334155; }
      `}</style>
    </div>
  )
}
