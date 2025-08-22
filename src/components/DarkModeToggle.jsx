import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-dark-700 dark:text-dark-200 transition-colors duration-300"
      aria-label="Toggle dark mode"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  )
}

export default DarkModeToggle