'use client'

import { motion } from 'framer-motion'
import { UserPlus, Gamepad2, CheckCircle, Zap } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Create Account',
      description: 'Sign up quickly and securely to get started.',
      number: '01',
    },
    {
      icon: Gamepad2,
      title: 'Explore Games',
      description: 'Browse through 500+ exciting games and pick your favorites.',
      number: '02',
    },
    {
      icon: CheckCircle,
      title: 'Complete Challenges',
      description: 'Play games and complete daily challenges to earn points.',
      number: '03',
    },
    {
      icon: Zap,
      title: 'Earn Rewards',
      description: 'Collect rewards and unlock exclusive prizes and bonuses.',
      number: '04',
    },
  ]

  return (
    <section className="section-padding bg-dark-800 relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Four simple steps to start your gaming journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-gold-orange opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(255, 184, 0, 0.6)' }}
                    className="absolute -top-4 left-0 w-20 h-20 rounded-full bg-gradient-gold-orange flex items-center justify-center font-bold text-2xl text-dark-900 z-20"
                  >
                    {step.number}
                  </motion.div>

                  {/* Card */}
                  <div className="card-glass pt-20 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-4 bg-gold-900/20 rounded-lg w-fit mx-auto mb-4 inline-block"
                    >
                      <Icon className="w-6 h-6 text-gold-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
