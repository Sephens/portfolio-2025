import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Network Infrastructures',
      excerpt: 'Learn how to design and implement network infrastructures that can grow with your business needs.',
      date: '2023-10-15',
      readTime: '5 min read',
      category: 'Networking'
    },
    {
      id: 2,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Practical tips and strategies to optimize the performance of your React applications.',
      date: '2023-09-22',
      readTime: '8 min read',
      category: 'Development'
    },
    {
      id: 3,
      title: 'Securing APIs with JWT and Best Practices',
      excerpt: 'A comprehensive guide to implementing secure authentication in your API endpoints.',
      date: '2023-08-30',
      readTime: '6 min read',
      category: 'Security'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies for Enterprises',
      excerpt: 'Planning and executing a successful migration to cloud infrastructure.',
      date: '2023-07-18',
      readTime: '10 min read',
      category: 'Cloud'
    },
    {
      id: 5,
      title: 'Introduction to Docker and Containerization',
      excerpt: 'Getting started with Docker and understanding the benefits of containerization.',
      date: '2023-06-05',
      readTime: '7 min read',
      category: 'DevOps'
    },
    {
      id: 6,
      title: 'Building Responsive UIs with Tailwind CSS',
      excerpt: 'Creating beautiful and responsive user interfaces using Tailwind CSS utility classes.',
      date: '2023-05-12',
      readTime: '4 min read',
      category: 'Design'
    },
  ]

  return (
    <section id="blog" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="section-title">Blog & Articles</h2>
        <p className="section-subtitle">
          Thoughts, tutorials, and insights about technology and development
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="h-48 bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">Blog {post.id}</div>
            </div>
            
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full mb-4">
                {post.category}
              </span>
              
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-dark-600 dark:text-dark-300 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-4">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
              >
                Read more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-center mt-12"
      >
        <a
          href="#"
          className="btn-secondary"
        >
          View All Articles
        </a>
      </motion.div>
    </section>
  )
}

export default Blog