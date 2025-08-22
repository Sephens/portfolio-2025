import { motion } from 'framer-motion'
import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillsData = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 70 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Express.js', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
    networking: [
      { name: 'Cisco Networking', level: 90 },
      { name: 'Network Security', level: 85 },
      { name: 'TCP/IP', level: 95 },
      { name: 'Firewall Configuration', level: 80 },
      { name: 'VPN Setup', level: 85 },
      { name: 'Wireless Networking', level: 75 },
    ],
    tools: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
      { name: 'Jira', level: 80 },
      { name: 'VS Code', level: 95 },
    ],
  }

  const categories = [
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'networking', name: 'Networking' },
    { id: 'tools', name: 'Tools' },
  ]

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and technologies I use to bring ideas to life
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white/50 dark:bg-dark-800/50 text-dark-700 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-dark-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills list */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6"
        >
          {skillsData[activeCategory].map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-dark-800 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-sm text-dark-500 dark:text-dark-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-dark-100 dark:bg-dark-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills