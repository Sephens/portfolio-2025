import React from 'react'
import { motion } from 'framer-motion'
import { Download, Calendar, MapPin } from 'lucide-react'
import Container from '../components/UI/Container'
import Section from '../components/UI/Section'

function Resume() {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      location: 'New York, NY',
      description: 'Lead development of enterprise web applications using React, Node.js, and cloud technologies. Mentor junior developers and implement best practices.',
      achievements: [
        'Reduced application load time by 40% through performance optimization',
        'Led a team of 5 developers on a major product launch',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'San Francisco, CA',
      description: 'Developed and maintained multiple web applications using modern JavaScript frameworks and REST APIs.',
      achievements: [
        'Built a scalable microservices architecture serving 10k+ users',
        'Improved code quality by implementing comprehensive testing',
        'Collaborated with design team to create responsive UI components'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'DigitalAgency Co.',
      period: '2019 - 2020',
      location: 'Boston, MA',
      description: 'Created interactive user interfaces for various clients using React and Vue.js frameworks.',
      achievements: [
        'Developed 15+ client websites with modern frontend technologies',
        'Implemented accessibility features improving WCAG compliance',
        'Reduced bundle size by 30% through code splitting optimization'
      ]
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2015 - 2019',
      location: 'Boston, MA',
      description: 'Graduated Magna Cum Laude with focus on Software Engineering and Web Technologies.'
    }
  ]

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'SASS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Express', 'GraphQL', 'REST APIs', 'MongoDB']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'Jest', 'Figma', 'Agile/Scrum']
    }
  ]

  return (
    <Section>
      <Container className="max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
            Resume
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            My professional journey, skills, and accomplishments in the world of technology.
          </p>
          <button className="btn-primary inline-flex items-center">
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                Work Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-primary-500"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary-600 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-heading font-semibold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-green-600 font-medium">
                          {edu.school}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{edu.location}</span>
                    </div>

                    <p className="text-gray-600">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {skills.map((skillCategory, index) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-primary-100 text-primary-800 text-sm rounded-lg font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900">AWS Certified Developer</h4>
                  <p className="text-sm text-gray-600">Amazon Web Services • 2023</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">React Professional Certificate</h4>
                  <p className="text-sm text-gray-600">Meta • 2022</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Scrum Master Certified</h4>
                  <p className="text-sm text-gray-600">Scrum Alliance • 2021</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default Resume