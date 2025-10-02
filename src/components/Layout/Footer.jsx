import React from 'react'
import { Link } from 'react-router-dom'
import { Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:john@example.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary-400" />
              <span className="font-heading font-bold text-xl">John Doe</span>
            </Link>
            <p className="text-gray-300 max-w-md">
              Full-stack developer passionate about creating beautiful, functional, 
              and user-centered digital experiences. Let's build something amazing together.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Get in Touch</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>📍 New York, NY</p>
              <p>
                <a
                  href="mailto:john@example.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  📧 john@example.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors duration-200"
                >
                  📞 +1 (234) 567-890
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer