'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useState } from 'react'

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Professional Gamer',
      avatar: '🎮',
      rating: 5,
      text: 'Dreams11 is the best gaming platform I\'ve ever used. The games are amazing and the rewards system is very generous!',
    },
    {
      name: 'Priya Sharma',
      role: 'Mobile Gamer',
      avatar: '👩‍💻',
      rating: 5,
      text: 'I love how easy it is to use. The daily bonuses and challenges keep me engaged every single day.',
    },
    {
      name: 'Arjun Patel',
      role: 'Casual Player',
      avatar: '🏆',
      rating: 5,
      text: 'The referral program is fantastic. I\'ve earned so much by inviting my friends. Highly recommended!',
    },
    {
      name: 'Neha Singh',
      role: 'Student',
      avatar: '⭐',
      rating: 5,
      text: 'Perfect for casual gaming. The interface is intuitive and the game selection is incredible.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">What Our Users Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thousands of happy gamers enjoying Dreams11 every day
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="card-glass text-center"
          >
            <div className="text-5xl mb-4">{testimonials[activeIndex].avatar}</div>
            <div className="flex justify-center gap-1 mb-4">
              {Array(testimonials[activeIndex].rating).fill(0).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>
            <p className="text-xl mb-6 leading-relaxed">{testimonials[activeIndex].text}</p>
            <div>
              <h3 className="font-bold text-lg">{testimonials[activeIndex].name}</h3>
              <p className="text-gold-400 text-sm">{testimonials[activeIndex].role}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.2 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === activeIndex
                    ? 'bg-gradient-gold-orange w-8'
                    : 'bg-gold-600/30 hover:bg-gold-600/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
