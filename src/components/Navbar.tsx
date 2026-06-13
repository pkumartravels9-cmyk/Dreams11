'use client'

import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#games', label: 'Games' },
    { href: '#rewards', label: 'Rewards' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-gold-600/20">
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 bg-gradient-gold-orange rounded-lg"
            >
              <Zap className="w-6 h-6 text-dark-900" />
            </motion.div>
            <span className="text-2xl font-bold gradient-text">Dreams11</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Download App</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gold-900/20 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <button className="btn-secondary w-full">Sign In</button>
              <button className="btn-primary w-full">Download App</button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
