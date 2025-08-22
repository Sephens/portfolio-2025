import { useParams } from 'react-router-dom'
import BlogPost from '../components/BlogPost'

const BlogPostPage = () => {
  const { id } = useParams()
  
  // In a real app, you would fetch the blog post based on the ID
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable Network Infrastructures',
      excerpt: 'Learn how to design and implement network infrastructures that can grow with your business needs.',
      date: '2023-10-15',
      readTime: '5 min read',
      category: 'Networking'
    },
    // ... other posts
  ]
  
  const post = blogPosts.find(p => p.id === parseInt(id))

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 pt-20">
      {post ? (
        <BlogPost post={post} />
      ) : (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
            Post not found
          </h1>
          <p className="text-dark-600 dark:text-dark-300">
            The blog post you're looking for doesn't exist.
          </p>
        </div>
      )}
    </div>
  )
}

export default BlogPostPage