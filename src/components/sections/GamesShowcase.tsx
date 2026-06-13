'use client'

import { motion } from 'framer-motion'
import { Star, Users, Play, Flame } from 'lucide-react'
import { useState } from 'react'

const GamesShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['All', 'Popular', 'New', 'Arcade', 'Puzzle']

  const games = [
    {
      id: 1,
      title: 'Cosmic Quest',
      category: 'popular',
      rating: 4.9,
      players: '250K',
      image: 'bg-gradient-purple-orange',
      trending: true,
    },
    {
      id: 2,
      title: 'Chain Blast',
      category: 'popular',
      rating: 4.8,
      players: '180K',
      image: 'bg-gradient-gold-orange',
      trending: true,
    },
    {
      id: 3,
      title: 'Puzzle Paradise',
      category: 'puzzle',
      rating: 4.7,
      players: '120K',
      image: 'bg-gradient-purple-orange',
      trending: false,
    },
    {
      id: 4,
      title: 'Arcade Legend',
      category: 'arcade',
      rating: 4.6,
      players: '95K',
      image: 'bg-gradient-gold-orange',
      trending: false,
    },
    {
      id: 5,
      title: 'Mystery Match',
      category: 'new',
      rating: 4.9,
      players: '75K',
      image: 'bg-gradient-purple-orange',
      trending: true,
    },
    {
      id: 6,
      title: 'Sky Runner',
      category: 'arcade',
      rating: 4.5,
      players: '110K',
      image: 'bg-gradient-gold-orange',
      trending: false,
    },
  ]

  return (
    <section id="games" className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Explore Exciting Games</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Find your favorite game instantly from our collection of 500+ premium games
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat.toLowerCase())}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat.toLowerCase()
                  ? 'bg-gradient-gold-orange text-dark-900 shadow-glow-lg'
                  : 'glass hover:bg-gold-900/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Games Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, idx) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="card-elevated group overflow-hidden cursor-pointer"
            >
              {/* Game Image */}
              <div className={`w-full h-40 ${game.image} rounded-lg mb-4 relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                {game.trending && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 bg-red-500 rounded-full text-xs font-bold">
                    <Flame size={12} />
                    Trending
                  </div>
                )}
              </div>

              {/* Game Info */}
              <div className="space-y-3">
                {/* Rating and Players */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                    <span className="font-semibold">{game.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Users size={14} />
                    {game.players}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold">{game.title}</h3>

                {/* Button */}
                <button className="w-full btn-primary mt-4 flex items-center justify-center gap-2">
                  <Play size={16} />
                  Play Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GamesShowcase
