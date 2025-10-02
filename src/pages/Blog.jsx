import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/UI/Container'
import Section from '../components/UI/Section'
import BlogList from '../components/Blog/BlogList'
import { getAllPosts, getAllTags } from '../utils/blog'
import { Search, Filter } from 'lucide-react'

function Blog() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const [postsData, tagsData] = await Promise.all([
          getAllPosts(),
          getAllTags()
        ])
        setPosts(postsData)
        setFilteredPosts(postsData)
        setTags(tagsData)
      } catch (error) {
        console.error('Error loading posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  useEffect(() => {
    let filtered = posts

    if (selectedTag) {
      filtered = filtered.filter(post =>
        post.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      )
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }, [posts, selectedTag, searchQuery])

  if (loading) {
    return (
      <Section>
        <Container>
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading posts...</p>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, programming, 
            and technology.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <div className="flex items-center text-sm text-gray-600">
              <Filter className="h-4 w-4 mr-1" />
              Filter by:
            </div>
            <button
              onClick={() => setSelectedTag('')}
              className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                selectedTag === ''
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                  selectedTag === tag
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredPosts.length} of {posts.length} posts
            {selectedTag && ` filtered by "${selectedTag}"`}
          </p>
        </div>

        <BlogList posts={filteredPosts} />
      </Container>
    </Section>
  )
}

export default Blog