'use client'

import { motion } from 'framer-motion'
import { User, Mail, Award, Settings, LogOut, Edit2 } from 'lucide-react'
import { useState } from 'react'

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)

  const user = {
    name: 'Rajesh Kumar',
    email: 'rajesh@example.com',
    username: '@rajeshkumar',
    level: 'Platinum',
    totalPoints: '125,450',
    joinDate: 'January 15, 2024',
    gamesPlayed: '342',
    achievements: '28',
    avatar: '🎮',
  }

  return (
    <div className="min-h-screen bg-dark-800 pt-24 pb-12">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <h1 className="text-4xl font-bold">
            <span className="gradient-text">My Profile</span>
          </h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="btn-secondary flex items-center gap-2"
          >
            <Edit2 size={18} />
            {isEditing ? 'Done' : 'Edit Profile'}
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-1"
          >
            <div className="card-elevated text-center">
              <div className="text-8xl mb-4">{user.avatar}</div>
              <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
              <p className="text-gold-400 font-semibold mb-4">{user.username}</p>
              <div className="bg-dark-700/50 rounded-lg p-4 mb-4">
                <p className="text-gray-400 text-sm mb-1">Level</p>
                <p className="text-2xl font-bold gradient-text">{user.level}</p>
              </div>
              <button className="w-full btn-outline flex items-center justify-center gap-2">
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </motion.div>

          {/* Profile Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Account Information */}
            <div className="card-elevated">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-gold-400" />
                Account Information
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full bg-dark-700/50 border border-gold-600/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400"
                    />
                  ) : (
                    <p className="text-white">{user.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Username</label>
                  {isEditing ? (
                    <input
                      type="text"
                      defaultValue={user.username}
                      className="w-full bg-dark-700/50 border border-gold-600/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-gold-400"
                    />
                  ) : (
                    <p className="text-white">{user.username}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Member Since</label>
                  <p className="text-white">{user.joinDate}</p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="card-elevated">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-400" />
                Statistics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-700/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Total Points</p>
                  <p className="text-2xl font-bold gradient-text">{user.totalPoints}</p>
                </div>
                <div className="bg-dark-700/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Games Played</p>
                  <p className="text-2xl font-bold text-blue-400">{user.gamesPlayed}</p>
                </div>
                <div className="bg-dark-700/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Achievements</p>
                  <p className="text-2xl font-bold text-purple-400">{user.achievements}</p>
                </div>
                <div className="bg-dark-700/50 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-2">Level</p>
                  <p className="text-2xl font-bold text-green-400">{user.level}</p>
                </div>
              </div>
            </div>

            {/* Settings */}
            <div className="card-elevated">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-gold-400" />
                Preferences
              </h3>
              <div className="space-y-4">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-white">Email Notifications</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-white">Push Notifications</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </label>
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-white">Marketing Emails</span>
                  <input type="checkbox" className="w-5 h-5" />
                </label>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
