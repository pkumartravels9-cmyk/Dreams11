'use client'

import { motion } from 'framer-motion'
import { Gift, Award, Users, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

const RewardsSection = () => {
  const [counts, setCounts] = useState({
    dailyBonus: 0,
    achievements: 0,
    loyalty: 0,
    referral: 0,
  })

  useEffect(() => {
    const targets = { dailyBonus: 500, achievements: 1000, loyalty: 5000, referral: 2000 }
    const counters = setInterval(() => {
      setCounts((prev) => ({
        dailyBonus: Math.min(prev.dailyBonus + 50, targets.dailyBonus),
        achievements: Math.min(prev.achievements + 100, targets.achievements),
        loyalty: Math.min(prev.loyalty + 500, targets.loyalty),
        referral: Math.min(prev.referral + 200, targets.referral),
      }))
    }, 50)
    return () => clearInterval(counters)
  }, [])

  const rewards = [
    {
      icon: Gift,
      title: 'Daily Bonuses',
      description: 'Get rewards every day just by logging in',
      value: `₹${counts.dailyBonus}+`,
    },
    {
      icon: Award,
      title: 'Achievement Rewards',
      description: 'Earn points by completing challenges',
      value: `₹${counts.achievements}+`,
    },
    {
      icon: Zap,
      title: 'Loyalty Levels',
      description: 'Level up and unlock exclusive rewards',
      value: `₹${counts.loyalty}+`,
    },
    {
      icon: Users,
      title: 'Referral Bonuses',
      description: 'Invite friends and earn together',
      value: `₹${counts.referral}+`,
    },
  ]

  return (
    <section id="rewards" className="section-padding bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
        />
      </div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Rewards & Benefits</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Multiple ways to earn and unlock exclusive rewards
          </p>
        </motion.div>

        {/* Rewards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rewards.map((reward, idx) => {
            const Icon = reward.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -15, boxShadow: '0 0 40px rgba(255, 184, 0, 0.3)' }}
                className="card-elevated text-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="p-4 bg-gradient-gold-orange rounded-lg w-fit mx-auto mb-4 inline-block"
                >
                  <Icon className="w-6 h-6 text-dark-900" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2">{reward.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{reward.description}</p>
                <motion.p
                  animate={{ opacity: [0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-2xl font-bold gradient-text"
                >
                  {reward.value}
                </motion.p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <button className="btn-primary inline-block">Start Earning Now</button>
        </motion.div>
      </div>
    </section>
  )
}

export default RewardsSection
