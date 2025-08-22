import { motion } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-blue-50/30 dark:from-dark-800 dark:via-dark-900 dark:to-blue-900/20 z-0" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl animate-pulse-slow dark:bg-primary-900/20" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow delay-1000 dark:bg-blue-900/20" />
      
      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-dark-800 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Hi, I'm <span className="text-primary-600">Steven</span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="font-medium">IT Professional</span> | 
              <span className="font-medium"> Network Engineer</span> | 
              <span className="font-medium"> Developer</span>
            </motion.div>
            
            <motion.p 
              className="text-lg text-dark-500 dark:text-dark-400 mb-10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              I create seamless digital experiences and robust network infrastructures. 
              Passionate about technology, innovation, and solving complex problems.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <button 
                onClick={() => scrollToSection('#projects')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                View My Work
                <ChevronDown size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Contact Me
                <Mail size={20} />
              </button>
            </motion.div>
          </motion.div>
          
          {/* Centered Image Container */}
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-2xl">
                {/* Solution 1: Use object-cover with adjusted positioning */}
                <img 
                  src="/headshot.jpg" 
                  alt="Steven" 
                  className="w-full h-full object-cover object-top" // Added object-center
                />
                
                {/* Solution 2: Alternatively, use a background image approach */}
                {/* <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url('/headshot.jpg')" }}
                /> */}
              </div>
              <div className="absolute -bottom-4 -right-4 glass-effect p-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium text-dark-700 dark:text-dark-200">Available for work</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <button 
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ChevronDown size={24} className="animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero