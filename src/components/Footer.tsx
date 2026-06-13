'use client'

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const sections = [
    {
      title: 'Company',
      links: [{ label: 'About Us', href: '#' }, { label: 'Careers', href: '#' }, { label: 'Blog', href: '#' }],
    },
    {
      title: 'Support',
      links: [{ label: 'Help Center', href: '#' }, { label: 'Contact Us', href: '#' }, { label: 'Status', href: '#' }],
    },
    {
      title: 'Legal',
      links: [{ label: 'Privacy Policy', href: '#' }, { label: 'Terms & Conditions', href: '#' }, { label: 'Cookie Policy', href: '#' }],
    },
  ]

  const socials = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ]

  return (
    <footer className="bg-dark-900/50 border-t border-gold-600/20 backdrop-blur-xl">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">Dreams11</h3>
            <p className="text-gray-400 text-sm mb-4">Premium gaming platform with rewards and community engagement.</p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold-400" />
                <span>support@dreams11.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gold-400 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-gold-400 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gold-600/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {currentYear} Dreams11. All rights reserved.</p>
            <div className="flex gap-4">
              {socials.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 rounded-lg glass hover:bg-gold-900/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={18} className="text-gold-400" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
