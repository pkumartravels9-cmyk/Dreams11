'use client'

import { motion } from 'framer-motion'
import GameCard from '@/components/GameCard'

const TrendingGrid = () => {
  const large = { id: 't1', title: 'Cosmic Quest', rating: 4.9, players: '250K', description: 'A massive space adventure.', imageClass: 'bg-gradient-purple-orange', trending: true }
  const small = [
    { id: 't2', title: 'Chain Blast', rating: 4.8, players: '180K', description: 'Explosive puzzle action.', imageClass: 'bg-gradient-gold-orange' },
    { id: 't3', title: 'Mystery Match', rating: 4.9, players: '75K', description: 'Match 3 with twists.', imageClass: 'bg-gradient-purple-orange' },
  ]

  return (
    <div className="grid lg:grid-cols-3 gap-6 mb-8">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
        <div className="card-elevated h-full p-6 flex flex-col justify-between">
          <h3 className="text-2xl font-bold mb-4">Trending Now</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <GameCard game={large} />
            <div className="space-y-4">
              {small.map((g) => (
                <GameCard key={g.id} game={g} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
        <div className="card-elevated p-6 space-y-4">
          <h4 className="text-xl font-bold">Live Players</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Cosmic Quest</p>
                <p className="text-sm text-gray-400">25K live players</p>
              </div>
              <div className="text-gold-400 font-bold">4.9★</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Chain Blast</p>
                <p className="text-sm text-gray-400">18K live players</p>
              </div>
              <div className="text-gold-400 font-bold">4.8★</div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">Mystery Match</p>
                <p className="text-sm text-gray-400">7.5K live players</p>
              </div>
              <div className="text-gold-400 font-bold">4.9★</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TrendingGrid
