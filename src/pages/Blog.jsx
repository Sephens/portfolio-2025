import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getAllBlogs } from "../utils/blogParser";

const Blog = () => {
  const blogPosts = getAllBlogs().slice(0, 5); // show only first 5

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

      {/* Blog grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={post.headerImage}
              alt={post.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full mb-3">
                {post.topic}
              </span>

              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">
                {post.title}
              </h3>

              <p className="text-dark-600 dark:text-dark-300 mb-4">
                {post.abstract}
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
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
              >
                Read more
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View all */}
      <div className="text-center mt-12">
        <Link to="/blogs" className="btn-secondary">
          View All Articles
        </Link>
      </div>
    </section>
  );
};

export default Blog;
