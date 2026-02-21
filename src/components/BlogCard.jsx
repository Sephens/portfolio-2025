import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Clock, ArrowRight, Star } from 'lucide-react'

// Approximate read time from abstract word count (full article ~10x longer)
function estimateReadTime(abstract = '') {
  const estimated = abstract.split(' ').length * 10
  return Math.max(3, Math.ceil(estimated / 200))
}

// Topic → gradient map
const topicGradients = {
  'Git':            'from-orange-500 to-amber-400',
  'Python':         'from-blue-500 to-cyan-400',
  'Machine Learning':'from-purple-600 to-pink-500',
  'Data Science':   'from-teal-500 to-emerald-400',
  'React':          'from-cyan-500 to-blue-400',
  'Backend':        'from-slate-600 to-slate-400',
  'DevOps':         'from-green-600 to-lime-400',
  'CSS':            'from-pink-500 to-rose-400',
  'Database':       'from-yellow-600 to-orange-400',
  'TypeScript':     'from-blue-600 to-indigo-400',
  'Security':       'from-red-600 to-orange-400',
  'Linux':          'from-slate-700 to-slate-500',
  'NLP':            'from-violet-600 to-purple-400',
  'MLOps':          'from-indigo-600 to-blue-400',
}

const getGradient = (topic) =>
  topicGradients[topic] || 'from-primary-600 to-primary-400'

export default function BlogCard({ blog, index = 0, featured = false }) {
  const navigate = useNavigate()
  const readTime = estimateReadTime(blog.abstract)
  const gradient = getGradient(blog.topic)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      onClick={() => navigate(`/blog/${blog.id}`)}
      className={`group relative cursor-pointer rounded-2xl overflow-hidden border border-dark-100 dark:border-dark-800 bg-white dark:bg-dark-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Colored top bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradient}`} />

      {/* Featured banner */}
      {featured && (
        <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full z-10">
          <Star size={11} fill="currentColor" />
          Featured
        </div>
      )}

      <div className={`p-6 flex flex-col gap-4 ${featured ? 'md:flex-row md:items-start' : ''}`}>
        {/* Topic pill */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${gradient} text-white`}>
            {blog.topic}
          </span>
          <span className="flex items-center gap-1 text-xs text-dark-400 dark:text-dark-500">
            <Clock size={11} />
            {readTime} min read
          </span>
        </div>

        <div className={`flex flex-col gap-3 ${featured ? 'md:flex-1' : ''}`}>
          {/* Title */}
          <h3 className={`font-bold text-dark-800 dark:text-white leading-snug group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors ${
            featured ? 'text-2xl' : 'text-lg'
          }`}>
            {blog.title}
          </h3>

          {/* Abstract */}
          <p className="text-sm text-dark-500 dark:text-dark-400 leading-relaxed line-clamp-3">
            {blog.abstract}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-1">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-0.5 rounded-md bg-dark-50 dark:bg-dark-800 text-dark-500 dark:text-dark-400 border border-dark-100 dark:border-dark-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-2 pt-3 border-t border-dark-100 dark:border-dark-800">
            <span className="text-xs text-dark-400 dark:text-dark-500">
              {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-primary-600 dark:text-primary-400 group-hover:gap-2 transition-all">
              Read post <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
