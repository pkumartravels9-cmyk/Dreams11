'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      question: 'How do I create an account?',
      answer: 'Simply click on "Download App" or "Sign Up", enter your email, create a password, and you\'ll be ready to play in seconds!',
    },
    {
      question: 'How does the rewards system work?',
      answer: 'You earn rewards by playing games, completing daily challenges, and reaching milestones. Your rewards can be withdrawn or used for in-game purchases.',
    },
    {
      question: 'Is my account secure?',
      answer: 'Yes! We use bank-level encryption and security protocols. Your data is protected with SSL certificates and regular security audits.',
    },
    {
      question: 'How do I withdraw my earnings?',
      answer: 'You can withdraw your earnings directly to your bank account or digital wallet. Minimum withdrawal is ₹100.',
    },
    {
      question: 'What is the referral program?',
      answer: 'Invite friends using your referral link and earn bonuses when they join and start playing.',
    },
    {
      question: 'Is the app available on iOS and Android?',
      answer: 'Yes! Dreams11 is available on both iOS and Android with the same features and functionality.',
    },
  ]

  return (
    <section id="faq" className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get answers to common questions about Dreams11
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="card-glass"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
                className="w-full flex items-center justify-between py-2"
              >
                <h3 className="text-lg font-bold text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gold-400" />
                </motion.div>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === idx ? 'auto' : 0,
                  opacity: activeIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 pt-4 border-t border-gold-600/20">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
