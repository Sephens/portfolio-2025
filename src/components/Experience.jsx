import { motion } from 'framer-motion'
import { Calendar, MapPin, Download } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Network Engineer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      description: 'Lead network infrastructure projects, design and implement secure network solutions, and mentor junior engineers. Reduced network downtime by 30% through proactive monitoring and optimization.',
      technologies: ['Cisco', 'Juniper', 'Python', 'Ansible', 'AWS']
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Innovations LLC',
      period: '2019 - 2021',
      location: 'Remote',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker']
    },
    {
      id: 3,
      role: 'IT Support Specialist',
      company: 'Global Services Corp',
      period: '2017 - 2019',
      location: 'New York, NY',
      description: 'Provided technical support to employees, managed IT infrastructure, and implemented security protocols. Reduced support tickets by 25% through documentation and training.',
      technologies: ['Windows Server', 'Active Directory', 'VMware', 'Office 365']
    },
    {
      id: 4,
      role: 'Computer Science Degree',
      company: 'University of Technology',
      period: '2013 - 2017',
      location: 'Boston, MA',
      description: 'Bachelor of Science in Computer Science with a focus on networking and security. Graduated with honors and completed relevant certifications.',
      technologies: ['Networking', 'Security', 'Programming', 'Databases']
    },
  ]

  const certifications = [
    {
      id: 1,
      name: 'Cisco Certified Network Professional (CCNP)',
      issuer: 'Cisco',
      date: '2022'
    },
    {
      id: 2,
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2021'
    },
    {
      id: 3,
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      date: '2020'
    },
    {
      id: 4,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2019'
    },
  ]

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">
          My professional journey and qualifications
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800 transform -translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline dot */}
              <div className="flex md:flex-col items-center md:items-start md:justify-start">
                <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10" />
                <div className="hidden md:block md:w-24 h-0.5 bg-primary-200 dark:bg-primary-800" />
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mt-4 md:mt-0`}>
                <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">{exp.company}</p>
                  
                  <div className="flex items-center text-sm text-dark-500 dark:text-dark-400 mb-4">
                    <Calendar size={16} className="mr-1" />
                    <span className="mr-4">{exp.period}</span>
                    <MapPin size={16} className="mr-1" />
                    <span>{exp.location}</span>
                  </div>
                  
                  <p className="text-dark-600 dark:text-dark-300 mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
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
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-dark-800 dark:text-white mb-8">
            Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg"
              >
                <h4 className="text-lg font-bold text-dark-800 dark:text-white">
                  {cert.name}
                </h4>
                <p className="text-primary-600 mb-2">{cert.issuer}</p>
                <p className="text-sm text-dark-500 dark:text-dark-400">
                  Issued {cert.date}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Download CV button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/resume-placeholder.pdf"
            download
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience