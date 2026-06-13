import { Schema, model, models } from 'mongoose'

export interface IUser {
  email: string
  username: string
  password: string
  role?: 'user' | 'admin'
  balance?: number
  level?: string
  createdAt?: Date
}

const UserSchema = new Schema<IUser>({
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  balance: { type: Number, default: 0 },
  level: { type: String, default: 'Bronze' },
  createdAt: { type: Date, default: Date.now },
})

const User = models.User || model<IUser>('User', UserSchema)
export default User
