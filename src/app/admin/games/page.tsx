'use client'

import { motion } from 'framer-motion'
import { Search, Plus, Edit2, Trash2, Trophy, Users } from 'lucide-react'
import { useState } from 'react'

const GamesManagement = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const games = [
    { id: 1, name: 'Cosmic Quest', category: 'Action', players: '250K', rating: 4.9, status: 'Active' },
    { id: 2, name: 'Chain Blast', category: 'Puzzle', players: '180K', rating: 4.8, status: 'Active' },
    { id: 3, name: 'Puzzle Paradise', category: 'Puzzle', players: '120K', rating: 4.7, status: 'Active' },
    { id: 4, name: 'Arcade Legend', category: 'Arcade', players: '95K', rating: 4.6, status: 'Inactive' },
    { id: 5, name: 'Mystery Match', category: 'Puzzle', players: '75K', rating: 4.9, status: 'Active' },
  ]

  return (
    <div className="min-h-screen bg-dark-800 pt-24 pb-12">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="gradient-text">Games Management</span>
            </h1>
            <p className="text-gray-400">Manage and monitor all games</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Add New Game
          </button>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-dark-700/50 border border-gold-600/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold-400"
            />
          </div>
        </motion.div>

        {/* Games Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card-elevated overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold-600/20">
                  <th className="px-6 py-4 text-left text-gold-400 font-semibold">Game Name</th>
                  <th className="px-6 py-4 text-left text-gold-400 font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-gold-400 font-semibold">Players</th>
                  <th className="px-6 py-4 text-left text-gold-400 font-semibold">Rating</th>
                  <th className="px-6 py-4 text-left text-gold-400 font-semibold">Status</th>
                  <th className="px-6 py-4 text-left text-gold-400 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {games.map((game) => (
                  <motion.tr
                    key={game.id}
                    whileHover={{ backgroundColor: 'rgba(255, 196, 0, 0.05)' }}
                    className="border-b border-gold-600/10 hover:bg-gold-900/10 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{game.name}</td>
                    <td className="px-6 py-4 text-gray-400">{game.category}</td>
                    <td className="px-6 py-4 flex items-center gap-1 text-gray-300">
                      <Users size={16} className="text-gold-400" />
                      {game.players}
                    </td>
                    <td className="px-6 py-4 text-gold-400 font-semibold">{game.rating}⭐</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        game.status === 'Active'
                          ? 'bg-green-900/30 text-green-400'
                          : 'bg-red-900/30 text-red-400'
                      }`}>
                        {game.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="p-2 hover:bg-gold-900/20 rounded-lg transition-colors">
                        <Edit2 size={18} className="text-gold-400" />
                      </button>
                      <button className="p-2 hover:bg-red-900/20 rounded-lg transition-colors">
                        <Trash2 size={18} className="text-red-400" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default GamesManagement
