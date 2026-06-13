import { Schema, model, models } from 'mongoose'

export interface IReward {
  userId: any
  type: string
  amount: number
  createdAt?: Date
}

const RewardSchema = new Schema<IReward>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
})

const Reward = models.Reward || model<IReward>('Reward', RewardSchema)
export default Reward
