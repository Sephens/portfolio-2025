import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, X, BookOpen } from 'lucide-react'
import blogs from '../data/blogIndex'
import BlogCard from '../components/BlogCard'

// Collect all unique tags across all posts
const ALL_TAGS = [...new Set(blogs.flatMap((b) => b.tags))].sort()

export default function Blog() {
  const [query, setQuery] = useState('')
  const [activeTag, setActiveTag] = useState(null)

  const featured = blogs.find((b) => b.isFeatured)

  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchesQuery =
        !query ||
        b.title.toLowerCase().includes(query.toLowerCase()) ||
        b.abstract.toLowerCase().includes(query.toLowerCase()) ||
        b.topic.toLowerCase().includes(query.toLowerCase())

      const matchesTag = !activeTag || b.tags.includes(activeTag)

      return matchesQuery && matchesTag
    })
  }, [query, activeTag])

  // Separate featured from the rest in filtered results
  const featuredInResults = featured && filtered.find((b) => b.id === featured.id)
  const rest = filtered.filter((b) => !b.isFeatured)

  return (
    <section id="blog" className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Blog</h2>
        <p className="section-subtitle">
          Thoughts, tutorials, and deep dives on data science, engineering, and more
        </p>
      </motion.div>
      {/* Search + Tag filters */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-4xl mx-auto mb-10 space-y-4"
      >
        {/* Search bar */}
        <div className="relative">
          <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-dark-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-dark-800 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 hover:text-dark-700"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Tag filter pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
              !activeTag
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-400 border-dark-200 dark:border-dark-700 hover:border-primary-400'
            }`}
          >
            All
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                activeTag === tag
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white dark:bg-dark-800 text-dark-500 dark:text-dark-400 border-dark-200 dark:border-dark-700 hover:border-primary-400'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Results count */}
      <div className="max-w-6xl mx-auto mb-6 flex items-center gap-2 text-sm text-dark-400 dark:text-dark-500">
        <BookOpen size={14} />
        {filtered.length} {filtered.length === 1 ? 'post' : 'posts'} found
      </div>

      {/* Blog grid */}
      <div className="max-w-6xl mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-dark-400 dark:text-dark-500">
            <BookOpen size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">No posts match your search.</p>
            <button
              onClick={() => { setQuery(''); setActiveTag(null) }}
              className="mt-4 text-primary-600 dark:text-primary-400 text-sm underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured post spans full width if in results */}
            {featuredInResults && (
              <BlogCard blog={featuredInResults} index={0} featured={true} />
            )}
            {rest.map((blog, i) => (
              <BlogCard key={blog.id} blog={blog} index={featuredInResults ? i + 1 : i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
