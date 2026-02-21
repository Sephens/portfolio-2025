import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Function to get all blog posts
export function getAllBlogPosts() {
  try {
    // Adjust the path to your blog directory
    const blogDir = path.join(process.cwd(), 'public/blogs');
    
    if (!fs.existsSync(blogDir)) {
      console.warn('Blog directory not found:', blogDir);
      return [];
    }
    
    const fileNames = fs.readdirSync(blogDir);
    
    const allPosts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const filePath = path.join(blogDir, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Calculate read time
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);
        
        return {
          id: data.Id,
          title: data.Title,
          author: data.Author,
          tags: data.Tags ? data.Tags.split(' ') : [],
          category: data.Topic,
          abstract: data.Abstract,
          headerImage: data.HeaderImage,
          isPublished: data.isPublished,
          date: data.Date || new Date().toISOString().split('T')[0],
          readTime: `${readTime} min read`,
          content: content
        };
      })
      .filter(post => post.isPublished)
      .sort((a, b) => b.id - a.id); // Sort by ID descending
    
    return allPosts;
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

// Function to get a single blog post by ID
export function getBlogPost(id) {
  try {
    const posts = getAllBlogPosts();
    return posts.find(post => post.id === parseInt(id));
  } catch (error) {
    console.error('Error getting blog post:', error);
    return null;
  }
}

// Function to get featured/pinned posts (first 5)
export function getFeaturedPosts() {
  const posts = getAllBlogPosts();
  return posts.slice(0, 5); // Get first 5 posts
}