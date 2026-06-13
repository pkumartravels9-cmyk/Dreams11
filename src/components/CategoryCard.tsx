'use client'

import { motion } from 'framer-motion'

const CategoryCard = ({ title }: { title: string }) => {
  return (
    <motion.div whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(255, 196, 0, 0.12)' }} className="glass rounded-2xl p-6 flex flex-col items-start gap-3 cursor-pointer">
      <div className="w-14 h-14 bg-gradient-gold-orange rounded-full flex items-center justify-center text-dark-900 font-bold">{title.charAt(0)}</div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-400">Explore the best of {title.toLowerCase()}.</p>
    </motion.div>
  )
}

export default CategoryCard
