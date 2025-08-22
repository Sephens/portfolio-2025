import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const BlogPost = ({ post }) => {
  if (!post) return null

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
      </header>

      {/* Featured image */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <div className="h-64 bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
          <div className="text-white text-4xl font-bold">Blog {post.id}</div>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead">
          {post.excerpt}
        </p>
        
        <h2>Introduction</h2>
        <p>
          This is a sample blog post demonstrating how content would be structured. In a real implementation,
          this would be replaced with actual Markdown content from your blog posts.
        </p>
        
        <h2>Main Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        
        <pre className="bg-dark-100 dark:bg-dark-800 p-4 rounded-lg">
          <code className="language-javascript">
            {`// Sample code block
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`}
          </code>
        </pre>
        
        <h2>Conclusion</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </motion.article>
  )
}

export default BlogPost