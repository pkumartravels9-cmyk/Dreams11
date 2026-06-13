'use client'

import { motion } from 'framer-motion'
import { Trophy, Medal, TrendingUp } from 'lucide-react'

const Leaderboard = () => {
  const leaderboard = [
    { rank: 1, name: 'Rajesh Kumar', points: '125,450', level: 'Platinum', icon: '🥇' },
    { rank: 2, name: 'Priya Sharma', points: '118,320', level: 'Gold', icon: '🥈' },
    { rank: 3, name: 'Arjun Patel', points: '105,680', level: 'Gold', icon: '🥉' },
    { rank: 4, name: 'Neha Singh', points: '98,450', level: 'Silver', icon: '4️⃣' },
    { rank: 5, name: 'Vikram Desai', points: '95,230', level: 'Silver', icon: '5️⃣' },
  ]

  return (
    <div className="min-h-screen bg-dark-800 pt-24 pb-12">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Trophy className="w-10 h-10 text-gold-400" />
            <span className="gradient-text">Global Leaderboard</span>
          </h1>
          <p className="text-gray-400">Top players and their achievements</p>
        </motion.div>

        {/* Leaderboard */}
        <div className="space-y-4">
          {leaderboard.map((player, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ x: 10 }}
              className="card-elevated flex items-center justify-between p-6 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl w-16 text-center">{player.icon}</div>
                <div>
                  <h3 className="text-lg font-bold">{player.name}</h3>
                  <p className="text-gold-400 text-sm">{player.level} Level</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold gradient-text">{player.points}</p>
                <p className="text-gray-400 text-sm flex items-center justify-end gap-1">
                  <TrendingUp size={14} />
                  Points
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
