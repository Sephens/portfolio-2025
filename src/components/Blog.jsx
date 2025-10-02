import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
  {
    "id": 1,
    "title": "What is Git?",
    "excerpt": "Git is a version control system which is maintained on your local system. Git gives us a...",
    "date": "2025-01-01",
    "readTime": "2 min read",
    "category": "General"
  },
  {
    "id": 2,
    "title": "Understanding Client Side Rendering (CSR)",
    "excerpt": "When we talk about client side rendering, the browser downloads a minimal HTML page...",
    "date": "2025-01-01",
    "readTime": "4 min read",
    "category": "General"
  },
  {
    "id": 3,
    "title": "Why Use React.js?",
    "excerpt": "React provides a component-based structure. Each component can be reused...",
    "date": "2025-01-01",
    "readTime": "10 min read",
    "category": "General"
  },
  // {
  //   "id": 4,
  //   "title": "JavaScript Scope, Async/Defer & Event Handling",
  //   "excerpt": "Explore global vs local scope, async vs defer, event bubbling, throttling and debouncing...",
  //   "date": "2025-01-01",
  //   "readTime": "1 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 5,
  //   "title": "JavaScript Promises Explained",
  //   "excerpt": "A Promise is a special JavaScript object that produces a single value sometime in the future...",
  //   "date": "2025-01-01",
  //   "readTime": "3 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 6,
  //   "title": "New Features in ES6",
  //   "excerpt": "Some of the new features of JavaScript introduced in ES6 are let/const, arrow functions, template literals...",
  //   "date": "2025-01-01",
  //   "readTime": "12 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 7,
  //   "title": "JavaScript Hoisting Explained",
  //   "excerpt": "Hoisting is JavaScript's default behavior of moving declarations to the top of the scope...",
  //   "date": "2025-01-01",
  //   "readTime": "11 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 8,
  //   "title": "Understanding the JavaScript Event Loop",
  //   "excerpt": "Browser JavaScript execution flow, as well as in Node.js, is based on an event loop...",
  //   "date": "2025-01-01",
  //   "readTime": "5 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 9,
  //   "title": "JavaScript Prototypes Explained",
  //   "excerpt": "The prototype is an object that is associated with every function and object in JavaScript...",
  //   "date": "2025-01-01",
  //   "readTime": "3 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 10,
  //   "title": "React Component Lifecycle",
  //   "excerpt": "A visual overview of the React component lifecycle and its different phases...",
  //   "date": "2025-01-01",
  //   "readTime": "5 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 11,
  //   "title": "What is Google Firebase?",
  //   "excerpt": "Google Firebase is a Google-backed application development software platform...",
  //   "date": "2025-01-01",
  //   "readTime": "9 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 12,
  //   "title": "Getting Started with Tailwind CSS",
  //   "excerpt": "Tailwind CSS works by scanning all of your HTML files for class names and generating styles...",
  //   "date": "2025-01-01",
  //   "readTime": "1 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 13,
  //   "title": "Introduction to Amazon EC2",
  //   "excerpt": "Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity...",
  //   "date": "2025-01-01",
  //   "readTime": "10 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 14,
  //   "title": "Understanding Amazon Machine Images (AMI)",
  //   "excerpt": "An Amazon Machine Image (AMI) is a template that contains a software configuration...",
  //   "date": "2025-01-01",
  //   "readTime": "4 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 15,
  //   "title": "Introduction to Linux",
  //   "excerpt": "Linux is an open-source, Unix-like operating system based on the Linux kernel...",
  //   "date": "2025-01-01",
  //   "readTime": "5 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 16,
  //   "title": "Why Learn the Linux Command Line?",
  //   "excerpt": "Before diving into the specifics, it’s important to understand why learning the command line matters...",
  //   "date": "2025-01-01",
  //   "readTime": "4 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 17,
  //   "title": "Static vs Dynamic IP Addresses",
  //   "excerpt": "A static IP address does not change, while a dynamic IP address is assigned temporarily...",
  //   "date": "2025-01-01",
  //   "readTime": "6 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 18,
  //   "title": "Creating Subnets and Allocating IPs in AWS VPC",
  //   "excerpt": "Learn how to create subnets and allocate IP addresses in an Amazon Virtual Private Cloud...",
  //   "date": "2025-01-01",
  //   "readTime": "9 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 19,
  //   "title": "Introduction to Amazon Inspector",
  //   "excerpt": "In today’s cloud-first world, security is non-negotiable. Amazon Inspector is AWS’s automated security assessment service...",
  //   "date": "2025-01-01",
  //   "readTime": "3 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 20,
  //   "title": "What is AWS IAM?",
  //   "excerpt": "IAM is a service that helps securely control access to AWS resources...",
  //   "date": "2025-01-01",
  //   "readTime": "6 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 21,
  //   "title": "Cloud Computing in Modern Business",
  //   "excerpt": "In today’s rapidly evolving digital landscape, cloud computing has become the backbone of modern businesses...",
  //   "date": "2025-01-01",
  //   "readTime": "4 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 22,
  //   "title": "AWS Resource Management and Monitoring",
  //   "excerpt": "Management and monitoring the resources on AWS is important to ensure performance and availability...",
  //   "date": "2025-01-01",
  //   "readTime": "12 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 23,
  //   "title": "Efficient Workload Administration on AWS",
  //   "excerpt": "As part of your day-to-day administrative task in maintaining workloads, you need to effectively manage resources...",
  //   "date": "2025-01-01",
  //   "readTime": "13 min read",
  //   "category": "General"
  // },
  // {
  //   "id": 24,
  //   "title": "Amazon Key Management Service (KMS): A Comprehensive Guide",
  //   "excerpt": "Cryptography is the practice of converting information into secure formats. AWS KMS helps you manage encryption keys...",
  //   "date": "2025-01-01",
  //   "readTime": "11 min read",
  //   "category": "General"
  // }
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
          href="https://code-crumbs.vercel.app/"
          className="btn-secondary"
        >
          View All Articles
        </a>
      </motion.div>
    </section>
  )
}

export default Blog