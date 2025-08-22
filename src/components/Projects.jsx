import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '/project-1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
      githubUrl: 'https://github.com/username/project-1',
      liveUrl: 'https://project-1-demo.netlify.app',
      details: 'This project is a complete e-commerce platform with user authentication, product management, shopping cart, and payment processing. It features a responsive design and admin dashboard for managing products and orders.'
    },
    {
      id: 2,
      title: 'Network Monitoring Tool',
      description: 'A real-time network monitoring dashboard for IT infrastructure',
      image: '/project-2.jpg',
      technologies: ['Python', 'React', 'WebSockets', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/username/project-2',
      liveUrl: 'https://project-2-demo.netlify.app',
      details: 'A comprehensive network monitoring solution that provides real-time insights into network performance, device status, and security alerts. Features include customizable dashboards, alert systems, and historical data analysis.'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '/project-3.jpg',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Vuex'],
      githubUrl: 'https://github.com/username/project-3',
      liveUrl: 'https://project-3-demo.netlify.app',
      details: 'A Kanban-style task management application that allows teams to collaborate on projects in real-time. Features include drag-and-drop functionality, user assignments, due dates, and progress tracking.'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS',
      image: '/project-4.jpg',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      githubUrl: 'https://github.com/username/project-4',
      liveUrl: 'https://project-4-demo.netlify.app',
      details: 'A modern, responsive portfolio website featuring smooth animations, dark mode toggle, and a clean design. Built with performance and accessibility in mind.'
    },
    {
      id: 5,
      title: 'API Gateway',
      description: 'A microservices API gateway with authentication and rate limiting',
      image: '/project-5.jpg',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
      githubUrl: 'https://github.com/username/project-5',
      liveUrl: 'https://project-5-demo.netlify.app',
      details: 'An API gateway that routes requests to appropriate microservices, handles authentication, implements rate limiting, and provides logging and monitoring capabilities.'
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      description: 'A weather application with 5-day forecasts and location search',
      image: '/project-6.jpg',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
      githubUrl: 'https://github.com/username/project-6',
      liveUrl: 'https://project-6-demo.netlify.app',
      details: 'A weather dashboard that displays current conditions and 5-day forecasts for any location. Features include interactive charts, location search, and temperature unit conversion.'
    },
  ]

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of projects that showcase my skills and experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">Project {project.id}</div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button
                  onClick={() => openModal(project)}
                  className="p-3 bg-white text-dark-800 rounded-full hover:bg-primary-100 transition-colors duration-300"
                  aria-label="View project details"
                >
                  <Eye size={20} />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-dark-800 rounded-full hover:bg-primary-100 transition-colors duration-300"
                  aria-label="View GitHub repository"
                >
                  <Github size={20} />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-dark-800 rounded-full hover:bg-primary-100 transition-colors duration-300"
                  aria-label="View live demo"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  )
}

export default Projects