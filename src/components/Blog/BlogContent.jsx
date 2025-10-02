import React from 'react'

function BlogContent({ content, className = '' }) {
  return (
    <article
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default BlogContent