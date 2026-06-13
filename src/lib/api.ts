import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth API
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/api/auth/login', { email, password }),
  register: (email: string, password: string, username: string) =>
    api.post('/api/auth/register', { email, password, username }),
  logout: () => api.post('/api/auth/logout'),
  getProfile: () => api.get('/api/auth/profile'),
}

// Games API
export const gamesAPI = {
  getAll: () => api.get('/api/games'),
  getById: (id: string) => api.get(`/api/games/${id}`),
  search: (query: string) => api.get(`/api/games/search?q=${query}`),
  getByCategory: (category: string) => api.get(`/api/games/category/${category}`),
}

// Rewards API
export const rewardsAPI = {
  getBalance: () => api.get('/api/rewards/balance'),
  getDailyReward: () => api.post('/api/rewards/daily'),
  getHistory: () => api.get('/api/rewards/history'),
  redeem: (rewardId: string) => api.post(`/api/rewards/redeem/${rewardId}`),
}

// Leaderboard API
export const leaderboardAPI = {
  getTop: (limit: number = 10) => api.get(`/api/leaderboard/top?limit=${limit}`),
  getUserRank: () => api.get('/api/leaderboard/rank'),
}

export default api
