import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getFeaturedPosts } from '../utils/blogParser'

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = getFeaturedPosts()
        setBlogPosts(posts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section id="blog" className="section-container">
        <div className="text-center">
          <h2 className="section-title">Blog & Articles</h2>
          <p className="section-subtitle">
            Loading articles...
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="section-title">Blog & Articles</h2>
        <p className="section-subtitle">
          Thoughts, tutorials, and insights about technology and development
        </p>
      </motion.div>

      {blogPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-dark-600 dark:text-dark-300">
            No blog posts available at the moment.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Blog Image */}
                <div className="h-48 relative overflow-hidden">
                  {post.headerImage ? (
                    <img 
                      src={post.headerImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">Blog {post.id}</div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm text-primary-700 dark:text-primary-300 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Author */}
                  <div className="flex items-center text-sm text-dark-500 dark:text-dark-400 mb-3">
                    <User size={14} className="mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={14} className="mr-1" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  {/* Abstract */}
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                    {post.abstract}
                  </p>
                  
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Read time and Read More button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-dark-500 dark:text-dark-400">
                      <Clock size={16} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 group"
                    >
                      Read more
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Blogs Button */}
          {blogPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/blogs"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                View All Articles
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          )}
        </>
      )}
    </section>
  )
}

export default Blog