import matter from "gray-matter"

// Vite's glob import to grab all markdown files
const markdownFiles = import.meta.glob("/src/_content/*.md", { eager: true, as: "raw" })

export const blogs = Object.keys(markdownFiles).map((path) => {
  const raw = markdownFiles[path]
  const { data, content } = matter(raw)

  return {
    id: data.Id,
    title: data.Title,
    author: data.Author,
    tags: data.Tags,
    topic: data.Topic,
    abstract: data.Abstract,
    headerImage: data.HeaderImage,
    isPublished: data.isPublished,
    content, // actual markdown body
  }
})
