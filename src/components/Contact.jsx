import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [validationErrors, setValidationErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Strict Email Regex: Checks for anything@anything.anything
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    
    // Clear errors as user types
    if (validationErrors[e.target.name]) {
      setValidationErrors({
        ...validationErrors,
        [e.target.name]: null
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitStatus(null)
    const errors = {}

    // 1. Strict Validation Checks
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"
    
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address (e.g., user@domain.com)"
    }

    // If there are errors, stop here and show them
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      return
    }

    setIsSubmitting(true)

    // 2. LOAD CONFIG
    const config = {
      SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }

    // 3. Generate time
    const currentTime = new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })

    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      time: currentTime
    }

    emailjs.send(config.SERVICE_ID, config.TEMPLATE_ID, templateParams, config.PUBLIC_KEY)
      .then((result) => {
          setIsSubmitting(false)
          setSubmitStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
          setTimeout(() => setSubmitStatus(null), 5000)
      }, (error) => {
          setIsSubmitting(false)
          setSubmitStatus('error')
          console.error('Email error:', error.text)
      })
  }

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I'd love to hear from you
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-8"
        >
          {/* ... (Keep your existing Contact Info JSX here) ... */}
          {/* I am omitting the side content for brevity as it hasn't changed, 
              but make sure you keep the JSX for the sidebar here */}
             <div>
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
              Let's talk about your project
            </h3>
            <p className="text-dark-600 dark:text-dark-300 mb-8">
              I'm available for freelance work, full-time positions, and collaborative projects. 
              Feel free to reach out and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4">
                <Mail size={20} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-dark-500 dark:text-dark-400 text-sm">Email</p>
                <p className="text-dark-800 dark:text-white">ombamstephodhis@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4">
                <Phone size={20} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-dark-500 dark:text-dark-400 text-sm">Phone</p>
                <p className="text-dark-800 dark:text-white">+254 748294085</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-4">
                <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p className="text-dark-500 dark:text-dark-400 text-sm">Location</p>
                <p className="text-dark-800 dark:text-white">Nairobi, KE</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-dark-600 dark:text-dark-300 mb-4">Follow me on</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/steven-adenux/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-100 dark:bg-dark-800 rounded-full flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Sephens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-100 dark:bg-dark-800 rounded-full flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://x.com/_Sephens"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-100 dark:bg-dark-800 rounded-full flex items-center justify-center text-dark-600 dark:text-dark-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact form Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${
                    validationErrors.name ? 'border-red-500' : 'border-dark-200 dark:border-dark-700'
                  }`}
                  placeholder="Your name"
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" /> {validationErrors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Email *
                </label>
                <input
                  type="text" // Changed from 'email' to 'text' to prevent browser tooltip, letting us show our custom error
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${
                    validationErrors.email ? 'border-red-500' : 'border-dark-200 dark:border-dark-700'
                  }`}
                  placeholder="your.email@example.com"
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center">
                    <AlertCircle size={14} className="mr-1" /> {validationErrors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${
                  validationErrors.subject ? 'border-red-500' : 'border-dark-200 dark:border-dark-700'
                }`}
                placeholder="What's this about?"
              />
              {validationErrors.subject && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {validationErrors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 ${
                  validationErrors.message ? 'border-red-500' : 'border-dark-200 dark:border-dark-700'
                }`}
                placeholder="Tell me about your project..."
              />
              {validationErrors.message && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" /> {validationErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg"
              >
                Oops! Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact