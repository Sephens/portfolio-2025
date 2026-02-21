import { useState, useEffect } from 'react'

// Parses YAML-like frontmatter from markdown string
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { meta: {}, content: raw }

  const metaRaw = match[1]
  const content = match[2]
  const meta = {}

  metaRaw.split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 1).trim()
    meta[key] = val
  })

  // Parse tags string into array
  if (meta.Tags) meta.Tags = meta.Tags.split(' ').filter(Boolean)

  return { meta, content }
}

// Estimate read time based on word count (~200 wpm)
export function calcReadTime(content) {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function useBlogPost(id) {
  const [state, setState] = useState({ meta: null, content: '', readTime: 0, loading: true, error: null })

  useEffect(() => {
    if (!id) return
    setState({ meta: null, content: '', readTime: 0, loading: true, error: null })

    fetch(`/blogs/${id}.md`)
      .then((res) => {
        if (!res.ok) throw new Error(`Post not found (${res.status})`)
        return res.text()
      })
      .then((raw) => {
        const { meta, content } = parseFrontmatter(raw)
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
