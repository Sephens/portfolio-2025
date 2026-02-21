import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Search, Filter, Calendar, User, Clock } from 'lucide-react'
import { getAllBlogPosts } from '../utils/blogParser'
import BlogCard from '/src/components/Blog/BlogCard.jsx'

const BlogsPage = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = getAllBlogPosts()
        setPosts(allPosts)
        setFilteredPosts(allPosts)
        
        // Extract unique categories
        const categories = ['All', ...new Set(allPosts.map(post => post.category))]
        setCategories(categories)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchPosts()
  }, [])

  const [categories, setCategories] = useState(['All'])

  useEffect(() => {
    let result = posts
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(post => post.category === selectedCategory)
    }
    
    setFilteredPosts(result)
  }, [searchTerm, selectedCategory, posts])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-dark-600 dark:text-dark-300">Loading articles...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/#blog"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-dark-800 dark:text-white mb-4">
            Blog & Articles
          </h1>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Explore my thoughts, tutorials, and insights on technology, development, and more
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter size={20} className="text-dark-400" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-dark-800 p-4 rounded-lg shadow">
            <div className="flex items-center">
              <Calendar className="text-primary-600 mr-3" size={24} />
              <div>
                <p className="text-sm text-dark-500 dark:text-dark-400">Total Articles</p>
                <p className="text-2xl font-bold text-dark-800 dark:text-white">{posts.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-800 p-4 rounded-lg shadow">
            <div className="flex items-center">
              <User className="text-primary-600 mr-3" size={24} />
              <div>
                <p className="text-sm text-dark-500 dark:text-dark-400">Authors</p>
                <p className="text-2xl font-bold text-dark-800 dark:text-white">
                  {new Set(posts.map(p => p.author)).size}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-dark-800 p-4 rounded-lg shadow">
            <div className="flex items-center">
              <Clock className="text-primary-600 mr-3" size={24} />
              <div>
                <p className="text-sm text-dark-500 dark:text-dark-400">Categories</p>
                <p className="text-2xl font-bold text-dark-800 dark:text-white">{categories.length - 1}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-dark-800 rounded-lg">
            <p className="text-dark-600 dark:text-dark-300 text-lg">
              No articles found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogsPage