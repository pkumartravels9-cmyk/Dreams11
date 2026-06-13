'use client'

import { motion } from 'framer-motion'
import { BarChart3, Users, Gamepad2, TrendingUp, Activity, Award } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const AdminDashboard = () => {
  const stats = [
    {
      icon: Users,
      label: 'Total Users',
      value: '1,245,890',
      change: '+12.5%',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
    },
    {
      icon: Gamepad2,
      label: 'Active Games',
      value: '542',
      change: '+8.2%',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
    },
    {
      icon: Activity,
      label: 'Daily Active',
      value: '456,123',
      change: '+5.3%',
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
    },
    {
      icon: TrendingUp,
      label: 'Revenue',
      value: '₹2.3M',
      change: '+18.7%',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/20',
    },
  ]

  const chartData = [
    { date: 'Mon', users: 4000, revenue: 2400 },
    { date: 'Tue', users: 3000, revenue: 1398 },
    { date: 'Wed', users: 2000, revenue: 9800 },
    { date: 'Thu', users: 2780, revenue: 3908 },
    { date: 'Fri', users: 1890, revenue: 4800 },
    { date: 'Sat', users: 2390, revenue: 3800 },
    { date: 'Sun', users: 3490, revenue: 4300 },
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
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Admin Dashboard</span>
          </h1>
          <p className="text-gray-400">Manage your gaming platform and track performance</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="card-elevated"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <span className="text-green-400 text-sm font-semibold">{stat.change}</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-elevated"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-gold-400" />
              User Growth
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,196,0,0.1)" />
                <XAxis stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(11, 11, 15, 0.8)',
                    border: '1px solid rgba(255, 196, 0, 0.2)',
                    borderRadius: '8px',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#ffc400"
                  strokeWidth={2}
                  dot={{ fill: '#ffc400', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card-elevated"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-gold-400" />
              Revenue
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,196,0,0.1)" />
                <XAxis stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(11, 11, 15, 0.8)',
                    border: '1px solid rgba(255, 196, 0, 0.2)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="revenue" fill="#ff8c00" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
