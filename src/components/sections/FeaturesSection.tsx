'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, Gift, Users, Smartphone, Headphones } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Fast Registration',
      description: 'Sign up in seconds with our streamlined registration process.',
    },
    {
      icon: Shield,
      title: 'Secure Account System',
      description: 'Bank-level security and encryption to protect your data.',
    },
    {
      icon: Gift,
      title: 'Daily Rewards',
      description: 'Earn rewards every day through gameplay and challenges.',
    },
    {
      icon: Users,
      title: 'Referral Program',
      description: 'Invite friends and earn exclusive bonuses together.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Optimized for all devices with seamless experience.',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs.',
    },
  ]

  return (
    <section id="features" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need for an amazing gaming experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-elevated group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-gold-orange rounded-lg w-fit mb-4 group-hover:shadow-glow-lg"
                >
                  <Icon className="w-6 h-6 text-dark-900" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
