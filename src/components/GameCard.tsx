'use client'

import { motion } from 'framer-motion'
import { Star, Users, Heart } from 'lucide-react'

type Props = {
  game: {
    id: number | string
    title: string
    description?: string
    rating: number
    players: string
    imageClass?: string
    trending?: boolean
  }
}

const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card-elevated group overflow-hidden cursor-pointer"
    >
      <div className={`w-full h-44 ${game.imageClass || 'bg-gradient-gold-orange'} rounded-lg mb-4 relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="p-3 bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3v18l15-9L5 3z" fill="white" />
            </svg>
          </button>
        </div>
        {game.trending && (
          <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 bg-red-500 rounded-full text-xs font-bold">
            🔥 Trending
          </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
            <span className="font-semibold">{game.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Users size={14} />
            <span className="text-xs">{game.players}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold">{game.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2">{game.description}</p>

        <div className="flex items-center gap-2 mt-4">
          <button className="btn-primary flex-1 flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3v18l15-9L5 3z" fill="white" />
            </svg>
            Play Now
          </button>
          <button className="p-3 bg-dark-700/50 rounded-lg hover:bg-gold-900/20 transition-colors">
            <Heart size={16} className="text-gold-400" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default GameCard
