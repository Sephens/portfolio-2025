import React from 'react'
import { motion } from 'framer-motion'

function Section({ children, className = '', id, ...props }) {
  return (
    <motion.section
      id={id}
      className={`section-padding ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export default Section