import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'
import Container from '../components/UI/Container'
import Section from '../components/UI/Section'

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB.',
      image: '/assets/portfolio/ecommerce.jpg',
      tags: ['react', 'nodejs', 'mongodb', 'typescript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      image: '/assets/portfolio/taskapp.jpg',
      tags: ['vue', 'firebase', 'pwa'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts.',
      image: '/assets/portfolio/weather.jpg',
      tags: ['react', 'api', 'tailwind'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Blog CMS',
      description: 'A custom content management system for blogging platforms.',
      image: '/assets/portfolio/cms.jpg',
      tags: ['python', 'django', 'postgresql'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Mobile Fitness App',
      description: 'A React Native fitness tracking application with social features.',
      image: '/assets/portfolio/fitness.jpg',
      tags: ['react-native', 'graphql', 'aws'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization dashboard for business analytics.',
      image: '/assets/portfolio/dashboard.jpg',
      tags: ['d3.js', 'react', 'python'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com'
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'react', label: 'React' },
    { key: 'vue', label: 'Vue.js' },
    { key: 'nodejs', label: 'Node.js' },
    { key: 'python', label: 'Python' },
    { key: 'featured', label: 'Featured' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <Section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in 
            web development and software engineering.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <div className="flex items-center text-sm text-gray-600 mr-2">
            <Filter className="h-4 w-4 mr-1" />
            Filter:
          </div>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter.key
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  
                  {/* Project Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4 text-gray-700" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                        aria-label="Source Code"
                      >
                        <Github className="h-4 w-4 text-gray-700" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No projects found for the selected filter.
            </p>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}

export default Portfolio