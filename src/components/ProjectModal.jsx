import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-dark-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-dark-800 p-6 border-b border-dark-200 dark:border-dark-700 flex justify-between items-center rounded-t-xl">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-full transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Project image */}
            <div className="mb-6 rounded-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">Project {project.id}</div>
              </div>
            </div>

            {/* Project details */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-2">
                <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">
                  Description
                </h4>
                <p className="text-dark-600 dark:text-dark-300">
                  {project.details}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-3">
                  Technologies
                </h4>
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
            </div>

            {/* Links */}
            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <Github size={20} />
                View Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal