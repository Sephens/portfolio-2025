import { motion } from 'framer-motion'
import { Calendar, MapPin, Download } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Data & AI Trainer (Data & AI Track)',
      company: 'Cyber Shujaa',
      period: '2025 – Present',
      location: 'Kenya',
      description:
        'Lead training and mentorship for the Data & AI track of the Cyber Shujaa Programme, an initiative empowering African youth with in-demand digital skills in Data Analytics, Artificial Intelligence, and Machine Learning. Designs and deliveres practical sessions, guides trainee projects, and supported curriculum development to bridge the gap between academic learning and industry practice.',
      technologies: [
        'Data Analytics',
        'Machine Learning',
        'Artificial Intelligence',
        'Python',
        'Data Visualisation',
      ],
    },
    {
      id: 2,
      role: 'ICT Support Intern',
      company: 'Kenya Revenue Authority (Deployed by ICT Authority PDTP Cohort 8)',
      period: 'Dec 2023 – Dec 2024',
      location: 'Kenya',
      description:
        'Provided technical support and troubleshooting for hardware, software, and network issues. Assisted in maintaining IT infrastructure and implemented security protocols. Supported system upgrades and helped reduce technical issues by 25% through proactive maintenance.',
      technologies: [
        'Technical Support',
        'Hardware Maintenance',
        'Network Troubleshooting',
        'System Administration',
        'Security Protocols',
      ],
    },
    {
      id: 3,
      role: 'ISP Technician',
      company: 'Northstar Mandera',
      period: 'May 2023 – Nov 2023',
      location: 'Mandera, Kenya',
      description:
        'Installed, maintained, and repaired internet service provider infrastructure. Conducted customer installations and resolved connectivity issues. Improved network reliability by 30% through optimized configurations and preventive maintenance.',
      technologies: [
        'Network Installation',
        'Fiber Optics',
        'Wireless Technologies',
        'Customer Support',
        'Network Diagnostics',
      ],
    },
    {
      id: 4,
      role: 'Software Developer Attachee',
      company: 'Lakehub Foundation',
      period: 'Aug 2022 – Jan 2023',
      location: 'Kisumu, Kenya',
      description:
        'Developed and maintained web applications using modern frameworks. Collaborated with cross-functional teams to deliver software solutions. Contributed to projects that improved operational efficiency by 20%.',
      technologies: [
        'JavaScript',
        'React',
        'Node.js',
        'API Development',
        'Database Management',
      ],
    },
    {
      id: 5,
      role: 'Frontend Developer Intern',
      company: 'Penni',
      period: 'Mar 2022 – Aug 2022',
      location: 'Remote',
      description:
        'Developed an e-commerce website and created features that improved user experience on smartphones, resulting in increased mobile engagement. Translated designs and wireframes into responsive user interfaces and reusable components using React.js, enhancing application performance and user satisfaction. Connected back-end APIs to display data using custom components, library components, and Redux, improving data accessibility and user interaction.',
      technologies: [
        'JavaScript',
        'React',
        'Node.js',
        'API Development',
        'Database Management',
      ],
    },
    {
      id: 6,
      role: 'Information Technology Degree',
      company: 'Kibabii University',
      period: '2018 – 2023',
      location: 'Bungoma, Kenya',
      description:
        'Bachelor of Science in Information Technology with a focus on networking and security. Graduated with Second Class Upper honours and completed relevant certifications.',
      technologies: ['Networking', 'Security', 'Programming', 'Databases'],
    },
  ]

  const certifications = [
    {
      id: 1,
      name: 'Cyber Shujaa Data & AI',
      issuer: 'Cyber Shujaa',
      date: 'Aug 2025',
    },
    {
      id: 2,
      name: 'AWS Certified Cloud Practitioner (CCP)',
      issuer: 'Amazon Web Services',
      date: 'May 2025',
    },
    {
      id: 3,
      name: 'Kubernetes and Cloud Native Associate (KCNA)',
      issuer: 'Cloud Native Computing Foundation',
      date: 'June 2025',
    },
    {
      id: 4,
      name: 'Cisco DevNet Associate',
      issuer: 'Cisco',
      date: 'Jan 2025',
    },
    {
      id: 5,
      name: 'Cisco Certified CyberOps Associate',
      issuer: 'Cisco',
      date: 'Jan 2025',
    },
    {
      id: 6,
      name: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco',
      date: 'Oct 2024',
    },
    {
      id: 7,
      name: 'Google Project Management',
      issuer: 'Google',
      date: 'Jul 2024',
    },
    {
      id: 8,
      name: 'Google IT Support',
      issuer: 'Google',
      date: 'Jun 2024',
    },
    {
      id: 9,
      name: 'Cisco Junior Cybersecurity Analyst',
      issuer: 'Cisco',
      date: 'Apr 2024',
    },
    {
      id: 10,
      name: 'Google Cybersecurity',
      issuer: 'Google',
      date: 'Mar 2024',
    },
    {
      id: 11,
      name: 'ALX Software Engineering',
      issuer: 'ALX Africa',
      date: 'Dec 2022',
    },
    {
      id: 12,
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2019',
    },
  ]

  // Function to handle PDF download
  const handleDownload = () => {
    const pdfUrl = '/Steven_Odhiambo_CV.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'Steven_Odhiambo_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-800 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="flex md:flex-col items-center md:items-start md:justify-start">
                <div className="w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 z-10" />
                <div className="hidden md:block md:w-24 h-0.5 bg-primary-200 dark:bg-primary-800" />
              </div>

              {/* Content */}
              <div
                className={`flex-1 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                } mt-4 md:mt-0`}
              >
                <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-dark-800 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {exp.company}
                  </p>

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
          <button
            onClick={handleDownload}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
