import { create } from 'zustand'

interface User {
  id: string
  email: string
  username: string
  avatar?: string
  balance: number
  level: number
  joinedAt: Date
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  register: (email: string, password: string, username: string) => Promise<void>
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  login: async (email: string, password: string) => {
    // API call will be implemented
    console.log('Login attempt:', email)
  },
  logout: () => set({ user: null, isAuthenticated: false }),
  register: async (email: string, password: string, username: string) => {
    // API call will be implemented
    console.log('Register attempt:', email, username)
  },
}))

interface GamesStore {
  games: any[]
  favorites: string[]
  toggleFavorite: (gameId: string) => void
  setGames: (games: any[]) => void
}

export const useGamesStore = create<GamesStore>((set) => ({
  games: [],
  favorites: [],
  toggleFavorite: (gameId: string) =>
    set((state) => ({
      favorites: state.favorites.includes(gameId)
        ? state.favorites.filter((id) => id !== gameId)
        : [...state.favorites, gameId],
    })),
  setGames: (games) => set({ games }),
}))
