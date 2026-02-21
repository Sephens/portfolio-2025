import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

function BlogCard({ post }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
    >
      {/* Image */}
      <div className="h-48 relative overflow-hidden">
        {post.headerImage ? (
          <img
            src={post.headerImage}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Blog</span>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm text-primary-700 dark:text-primary-300 text-sm rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-sm text-dark-500 dark:text-dark-400 mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric',
              year: 'numeric'
            })}</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-dark-800 dark:text-white mb-3 line-clamp-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300">
          {post.title}
        </h2>

        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3 flex-1">
          {post.abstract}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
              >
                <Tag size={10} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Button */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-dark-700">
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200 group"
          >
            Read Full Article
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogCard