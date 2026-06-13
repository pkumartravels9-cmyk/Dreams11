import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import Reward from '@/models/Reward'
import User from '@/models/User'
import { verifyToken } from '@/lib/auth'

export async function POST(req: Request) {
  await dbConnect()
  const auth = req.headers.get('authorization') || ''
  const token = auth.replace('Bearer ', '')
  const decoded: any = verifyToken(token)
  if (!decoded) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const user = await User.findById(decoded.id)
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  // Simple daily reward logic: grant fixed amount and record
  const amount = 50
  user.balance = (user.balance || 0) + amount
  await user.save()

  await Reward.create({ userId: user._id, type: 'daily', amount })

  return NextResponse.json({ success: true, balance: user.balance })
}
