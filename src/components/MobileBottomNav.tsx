'use client'

import Link from 'next/link'
import { Home, Search, Heart, Trophy, User } from 'lucide-react'

const MobileBottomNav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md bg-dark-900/60 glass rounded-full p-2 shadow-glow z-50 md:hidden">
      <div className="flex items-center justify-between">
        <Link href="#" className="flex flex-col items-center gap-1 text-gray-300 text-xs">
          <Home size={18} />
          Home
        </Link>
        <Link href="#games" className="flex flex-col items-center gap-1 text-gray-300 text-xs">
          <Search size={18} />
          Search
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-gray-300 text-xs">
          <Heart size={18} />
          Favorites
        </Link>
        <Link href="/leaderboard" className="flex flex-col items-center gap-1 text-gray-300 text-xs">
          <Trophy size={18} />
          Leaderboard
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-300 text-xs">
          <User size={18} />
          Profile
        </Link>
      </div>
    </div>
  )
}

export default MobileBottomNav
