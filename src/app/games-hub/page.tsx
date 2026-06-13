'use client'

import GameCard from '@/components/GameCard'
import CategoryCard from '@/components/CategoryCard'
import TrendingGrid from '@/components/TrendingGrid'
import MobileBottomNav from '@/components/MobileBottomNav'
import LoadingSkeleton from '@/components/LoadingSkeleton'
import { motion } from 'framer-motion'

const GamesHubPage = () => {
  const categories = [
    'Popular Games',
    'Arcade Games',
    'Puzzle Games',
    'Strategy Games',
    'Action Games',
    'Casual Games',
    'Multiplayer Games',
    'New Releases',
  ]

  const games = [
    { id: 1, title: 'Cosmic Quest', rating: 4.9, players: '250K', description: 'An epic space adventure full of thrills.', imageClass: 'bg-gradient-purple-orange', trending: true },
    { id: 2, title: 'Chain Blast', rating: 4.8, players: '180K', description: 'Fast-paced puzzler with explosive combos.', imageClass: 'bg-gradient-gold-orange', trending: true },
    { id: 3, title: 'Puzzle Paradise', rating: 4.7, players: '120K', description: 'Relaxing puzzles with beautiful visuals.', imageClass: 'bg-gradient-purple-orange' },
    { id: 4, title: 'Arcade Legend', rating: 4.6, players: '95K', description: 'Retro arcade action for high-score chasers.', imageClass: 'bg-gradient-gold-orange' },
    { id: 5, title: 'Mystery Match', rating: 4.9, players: '75K', description: 'Match-3 gameplay with a mysterious twist.', imageClass: 'bg-gradient-purple-orange', trending: true },
    { id: 6, title: 'Sky Runner', rating: 4.5, players: '110K', description: 'Endless runner across floating islands.', imageClass: 'bg-gradient-gold-orange' },
  ]

  return (
    <div className="min-h-screen bg-dark-800 pt-24 pb-24">
      <div className="section-container">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 gradient-text">Explore Exciting Games</h1>
          <p className="text-gray-400">Find your favorite game instantly</p>
          {/* Search Bar */}
          <div className="mt-6 max-w-xl mx-auto relative">
            <input type="search" placeholder="Search Games" className="w-full py-3 px-4 rounded-full bg-dark-700/50 border border-gold-600/20 placeholder-gray-400 focus:outline-none focus:border-gold-400" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['All','Popular','New','Arcade','Puzzle'].map((c) => (
              <button key={c} className="px-4 py-2 glass rounded-full text-sm">{c}</button>
            ))}
          </div>
        </motion.div>

        {/* Featured Slider placeholder */}
        <div className="mb-10">
          <div className="w-full h-56 bg-gradient-gold-orange rounded-xl flex items-center justify-center text-2xl font-bold">Featured Games Slider (Auto)</div>
        </div>

        {/* Categories Grid */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {categories.map((cat) => (
            <CategoryCard key={cat} title={cat} />
          ))}
        </motion.div>

        {/* Trending Bento Grid */}
        <TrendingGrid />

        {/* Games Grid */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {games.length === 0 ? (
            Array.from({ length: 6 }).map((_, i) => <LoadingSkeleton key={i} />)
          ) : (
            games.map((g) => <GameCard key={g.id} game={g} />)
          )}
        </motion.div>
      </div>

      {/* Mobile Bottom Nav */}
      <MobileBottomNav />
    </div>
  )
}

export default GamesHubPage
