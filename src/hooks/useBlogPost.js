import { useState, useEffect } from 'react'

// Pre-processes raw file content — removes blank lines inside ``` code blocks
// This fixes the formatting issue where each line of code has an extra blank line
function cleanCodeBlocks(raw) {
  const lines = raw.split('\n')
  const result = []
  let insideCodeBlock = false

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // Toggle code block state on ``` lines
    if (trimmed.startsWith('```')) {
      insideCodeBlock = !insideCodeBlock
      result.push(line)
      continue
    }

    // Inside a code block — skip blank lines
    if (insideCodeBlock && trimmed === '') {
      continue
    }

    result.push(line)
  }

  return result.join('\n')
}

// Parses the plain-text frontmatter format used in Steve's blog files:
//
//   Id: 1006
//   Title: Javascript Concepts - Part1
//   Author: Steve
//   Tags: Javascript Interview
//   Topic: Javascript
//   Abstract: ...
//   HeaderImage: /BL-1006/header.png
//   isPublished: true
//
// Also handles proper --- delimited frontmatter for any newer posts.
function parseFrontmatter(raw) {
  // ── Format A: proper markdown frontmatter (--- delimited) ──────────────
  const fencedMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (fencedMatch) {
    const metaRaw = fencedMatch[1]
    const content = fencedMatch[2]
    const meta = {}
    metaRaw.split('\n').forEach((line) => {
      const colonIdx = line.indexOf(':')
      if (colonIdx === -1) return
      const key = line.slice(0, colonIdx).trim()
      const val = line.slice(colonIdx + 1).trim()
      meta[key] = val
    })
    if (meta.Tags) meta.Tags = meta.Tags.split(' ').filter(Boolean)
    return { meta, content }
  }

  // ── Format B: plain-text frontmatter (Steve's existing format) ─────────
  const KNOWN_KEYS = ['Id', 'Title', 'Author', 'Tags', 'Topic', 'Abstract', 'HeaderImage', 'isPublished', 'date']
  const lines = raw.split('\n')
  const meta = {}
  let contentStartIndex = 0
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (line === '') { i++; continue }

    const colonIdx = line.indexOf(':')
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim()
      if (KNOWN_KEYS.includes(key)) {
        const val = line.slice(colonIdx + 1).trim()
        meta[key] = val
        i++
        continue
      }
    }

    contentStartIndex = i
    break
  }

  if (meta.Tags) meta.Tags = meta.Tags.split(' ').filter(Boolean)

  const content = lines.slice(contentStartIndex).join('\n').trim()
  return { meta, content }
}

// Estimate read time (~200 wpm)
export function calcReadTime(content) {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function useBlogPost(id) {
  const [state, setState] = useState({
    meta: null,
    content: '',
    readTime: 0,
    loading: true,
    error: null,
  })

  useEffect(() => {
    if (!id) return
    setState({ meta: null, content: '', readTime: 0, loading: true, error: null })

    fetch(`/blogs/${id}.md`)
      .then((res) => {
        if (!res.ok) throw new Error(`Post not found (${res.status})`)
        return res.text()
      })
      .then((raw) => {
        const cleaned = cleanCodeBlocks(raw)         // ← fix blank lines in code blocks
        const { meta, content } = parseFrontmatter(cleaned)
        setState({
          meta,
          content,
          readTime: calcReadTime(content),
          loading: false,
          error: null,
        })
      })
      .catch((err) => {
        setState({ meta: null, content: '', readTime: 0, loading: false, error: err.message })
      })
  }, [id])

  return state
}
