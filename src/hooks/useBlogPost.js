import { useState, useEffect } from 'react'

// Normalise Windows \r\n → \n so all regex works on both platforms
function normaliseLineEndings(raw) {
  return raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n')
}

// Remove blank lines inside fenced code blocks
function cleanCodeBlocks(raw) {
  const lines = raw.split('\n')
  const result = []
  let insideCodeBlock = false

  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('```')) {
      insideCodeBlock = !insideCodeBlock
      result.push(line)
      continue
    }
    if (insideCodeBlock && trimmed === '') continue
    result.push(line)
  }

  return result.join('\n')
}

// Parse frontmatter from --- fenced blocks (all files use this format)
function parseFrontmatter(raw) {
  // Match --- ... --- fence, tolerating optional trailing whitespace on fence lines
  const fencedMatch = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/)

  if (fencedMatch) {
    const metaRaw = fencedMatch[1]
    const content = fencedMatch[2].trim()
    const meta = {}

    metaRaw.split('\n').forEach((line) => {
      const colonIdx = line.indexOf(':')
      if (colonIdx === -1) return
      const key = line.slice(0, colonIdx).trim()
      const val = line.slice(colonIdx + 1).trim()
      if (key) meta[key] = val
    })

    if (meta.Tags) meta.Tags = meta.Tags.split(/\s+/).filter(Boolean)
    return { meta, content }
  }

  // Fallback: no frontmatter found — return raw as content
  return { meta: {}, content: raw.trim() }
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
        const normalised = normaliseLineEndings(raw)
        const cleaned    = cleanCodeBlocks(normalised)
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