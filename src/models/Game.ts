import { Schema, model, models } from 'mongoose'

export interface IGame {
  title: string
  description?: string
  category?: string
  rating?: number
  players?: number
  trending?: boolean
  thumbnail?: string
  createdAt?: Date
}

const GameSchema = new Schema<IGame>({
  title: { type: String, required: true, index: true },
  description: { type: String },
  category: { type: String, index: true },
  rating: { type: Number, default: 0 },
  players: { type: Number, default: 0 },
  trending: { type: Boolean, default: false },
  thumbnail: { type: String },
  createdAt: { type: Date, default: Date.now },
})

const Game = models.Game || model<IGame>('Game', GameSchema)
export default Game
