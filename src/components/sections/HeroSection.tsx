'use client'

import { motion } from 'framer-motion'
import { Download, ArrowRight, Zap } from 'lucide-react'

const HeroSection = () => {
  const floatingElements = [
    { id: 1, size: 60, left: '10%', top: '20%', delay: 0 },
    { id: 2, size: 40, left: '80%', top: '30%', delay: 0.5 },
    { id: 3, size: 50, left: '15%', top: '70%', delay: 1 },
    { id: 4, size: 35, left: '75%', top: '75%', delay: 1.5 },
  ]

  return (
    <section className="relative min-h-screen pt-20 pb-20 overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      {floatingElements.map((elem) => (
        <motion.div
          key={elem.id}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4 + elem.delay, repeat: Infinity }}
          className="absolute rounded-full bg-gradient-gold-orange/10 blur-3xl"
          style={{
            width: elem.size,
            height: elem.size,
            left: elem.left,
            top: elem.top,
          }}
        />
      ))}

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,196,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-900/20 border border-gold-600/40 rounded-full mb-6 glass"
          >
            <Zap size={16} className="text-gold-400" />
            <span className="text-sm font-semibold text-gold-400">Welcome to Premium Gaming</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="gradient-text">Play, Earn & Enjoy</span>
            <br />
            <span className="text-white">with Dreams11</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Experience the ultimate gaming and rewards platform. Play exciting games, complete challenges, earn rewards, and join a thriving community of gamers worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="btn-primary flex items-center gap-2 group">
              <Download size={20} />
              <span>Download App</span>
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-block"
              >
                <ArrowRight size={20} />
              </motion.div>
            </button>
            <button className="btn-secondary flex items-center gap-2 group">
              <span>Learn More</span>
              <motion.div
                whileHover={{ x: 5 }}
                className="inline-block"
              >
                <ArrowRight size={20} />
              </motion.div>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-12 border-t border-gold-600/20"
          >
            {[
              { value: '1M+', label: 'Active Players' },
              { value: '500+', label: 'Games' },
              { value: '4.9★', label: 'Rating' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <motion.p
                  animate={{ opacity: [0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl sm:text-4xl font-bold gradient-text"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
