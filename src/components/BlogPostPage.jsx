import { useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, Bookmark } from "lucide-react"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getBlogPost } from '../utils/blogParser'
import { useEffect, useState } from 'react'

const BlogPostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = getBlogPost(id)
        setPost(postData)
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchPost()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-dark-600 dark:text-dark-300">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
            Blog post not found
          </h1>
          <Link
            to="/#blog"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to all articles
          </Link>
        </div>
      </div>
    )
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.abstract,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link
          to="/blogs"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to all articles
        </Link>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header Image */}
          {post.headerImage && (
            <div className="relative h-64 md:h-96">
              <img 
                src={post.headerImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-4 py-2 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium">
                  {post.category}
                </span>
              </div>
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 dark:text-white mb-6">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-dark-500 dark:text-dark-400">
                    <User size={18} className="mr-2" />
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center text-dark-500 dark:text-dark-400">
                    <Calendar size={18} className="mr-2" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center text-dark-500 dark:text-dark-400">
                    <Clock size={18} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleShare}
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
                  >
                    <Share2 size={18} className="mr-2" />
                    Share
                  </button>
                  <button className="flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-300">
                    <Bookmark size={18} className="mr-2" />
                    Save
                  </button>
                </div>
              </div>

              {/* Abstract */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">TL;DR</h3>
                <p className="text-blue-700 dark:text-blue-300">
                  {post.abstract}
                </p>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
                <div className="flex items-center mb-4">
                  <Tag size={20} className="mr-2 text-dark-500 dark:text-dark-400" />
                  <h3 className="text-lg font-semibold text-dark-800 dark:text-white">Tags</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-300 cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-700">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                  <User size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-dark-800 dark:text-white mb-2">
                    About {post.author}
                  </h4>
                  <p className="text-dark-600 dark:text-dark-300">
                    Developer sharing insights and tutorials on modern web technologies.
                    Passionate about clean code, best practices, and helping others learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Articles or Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            to="/blogs"
            className="inline-flex items-center px-6 py-3 bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300 shadow"
          >
            <ArrowLeft size={18} className="mr-2" />
            View All Articles
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow hover:shadow-lg"
          >
            Back to Top
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogPostPage