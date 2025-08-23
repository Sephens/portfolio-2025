import { motion } from 'framer-motion'
import { Award, Users, Code, Server } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Clients', value: '20+' },
    { icon: Code, label: 'Projects', value: '20+' },
    { icon: Server, label: 'Networks Built', value: '15+' },
  ]

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Learn more about my background, skills, and what drives me in the world of technology
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-dark-800 dark:to-dark-700 rounded-2xl overflow-hidden">
              <img 
                src="/coding.svg" 
                alt="Steven" 
                className="w-full h-full object-fit"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-effect p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-primary-600">5+ Years</div>
              <div className="text-sm text-dark-600 dark:text-dark-300">Experience</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-dark-800 dark:text-white">
            Passionate IT Professional & Developer
          </h3>
          
          <p className="text-dark-600 dark:text-dark-300">
            I combine academic training in IT with hands-on skills earned through a wide range of global certifications:
            <br />
             <ui>
                <br></br>
                <i>📊 Data & AI: Python for automation, ML (Scikit-learn, TensorFlow), and analytics, Power BI & Tableau for crafting interactive, boardroom-ready dashboards.</i><br />
                <i>☁️ Cloud & DevOPs: AWS Certified Cloud Practioner, KCNA, DevNet Associate.</i><br />
                <i>🌐 Software & Development: ALX Software Engineering, Python, (HTML/CSS/JS + React) to design pixel-perfect UIs.</i><br />
                <i>📡 Networking & Securit: CCNA, HCIA, Cisco Cybersecurity Analyst.</i><br />
                <i>🐍 Professional Skills: Google IT Support, Google Project Management.</i><br />
              </ui>

          </p>
          
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center p-4 rounded-lg bg-white/50 dark:bg-dark-800/50 border border-dark-100 dark:border-dark-700"
              >
                <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-dark-800 dark:text-white">{stat.value}</div>
                <div className="text-sm text-dark-500 dark:text-dark-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About