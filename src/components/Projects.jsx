import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X } from 'lucide-react';

import projectsData from '../data/projects.json'


// ProjectModal Component with proper formatting
const ProjectModal = ({ project, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Function to format the details text with proper structure
  const formatDetails = (text) => {
    const sections = text.split('\n\n');
    return sections.map((section, index) => {
      if (section.includes(':')) {
        const [title, ...content] = section.split(':');
        return (
          <div key={index} className="mb-4">
            <h4 className="font-bold text-lg text-dark-800 dark:text-white mb-2">
              {title.trim()}
            </h4>
            <p className="text-dark-600 dark:text-dark-300">
              {content.join(':').trim()}
            </p>
          </div>
        );
      } else if (section.trim().startsWith('-')) {
        const items = section.split('\n').filter(item => item.trim().startsWith('-'));
        return (
          <div key={index} className="mb-4">
            <ul className="list-disc pl-5 text-dark-600 dark:text-dark-300">
              {items.map((item, i) => (
                <li key={i} className="mb-1">{item.replace('-', '').trim()}</li>
              ))}
            </ul>
          </div>
        );
      }
      return (
        <p key={index} className="text-dark-600 dark:text-dark-300 mb-4">
          {section.trim()}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        onClick={handleOverlayClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-dark-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        >
          <div className="relative">
            <div className="h-48 bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center">
              <div className="text-white text-4xl font-bold">Project {project.id}</div>
            </div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white dark:bg-dark-700 text-dark-800 dark:text-white rounded-full hover:bg-primary-100 dark:hover:bg-dark-600 transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6 overflow-y-auto flex-grow">
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
              {project.title}
            </h3>
            
            <p className="text-dark-600 dark:text-dark-300 mb-6 text-lg">
              {project.description}
            </p>
            
            <div className="mb-6">
              <h4 className="font-bold text-lg text-dark-800 dark:text-white mb-3">Technologies Used</h4>
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
            
            <div className="project-details">
              <h4 className="font-bold text-lg text-dark-800 dark:text-white mb-3">Project Details</h4>
              {formatDetails(project.details)}
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 dark:bg-dark-700 flex justify-between items-center">
            <div className="flex space-x-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-dark-800 text-white rounded-lg hover:bg-dark-700 transition-colors duration-300"
              >
                <Github size={18} className="mr-2" />
                Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
              >
                <ExternalLink size={18} className="mr-2" />
                Live Demo
              </a>
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-200 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-600 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = projectsData.projects; // Use the imported data

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="projects" className="section-container py-16 bg-gray-50 dark:bg-dark-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-dark-800 dark:text-white mb-4">My Projects</h2>
        <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
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
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    // Fallback if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-blue-500 flex items-center justify-center hidden">
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
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 text-sm rounded-full">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;