'use client'

import { motion } from 'framer-motion'

const LoadingSkeleton = () => {
  return (
    <div className="card-elevated animate-pulse">
      <div className="w-full h-44 bg-dark-700/30 rounded-lg mb-4" />
      <div className="h-4 bg-dark-700/30 rounded w-3/4 mb-2" />
      <div className="h-3 bg-dark-700/30 rounded w-1/2 mb-4" />
      <div className="h-10 bg-dark-700/30 rounded" />
    </div>
  )
}

export default LoadingSkeleton
