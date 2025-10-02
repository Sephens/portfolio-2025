// pages/BlogPostPage.jsx
import { useParams } from 'react-router-dom'
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getBlogPost } from '../utils/blogParser'

const BlogPostPage = () => {
  const { id } = useParams()
  const post = getBlogPost(id)

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

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Back button */}
      <Link
        to="/#blog"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-300"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to all articles
      </Link>

      {/* Header */}
      <header className="mb-8">
        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full mb-4">
          {post.category}
        </span>

        <h1 className="text-3xl md:text-4xl font-bold text-dark-800 dark:text-white mb-4">
          {post.title}
        </h1>

        <div className="flex items-center text-sm text-dark-500 dark:text-dark-400">
          <div className="flex items-center mr-4">
            <Calendar size={16} className="mr-1" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {post.author && (
          <div className="mt-2 text-sm text-dark-500 dark:text-dark-400">
            By {post.author}
          </div>
        )}
      </header>

      {/* Featured image */}
      {post.headerImage && (
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={post.headerImage} 
            alt={post.title}
            className="w-full h-64 object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  )
}

export default BlogPostPage