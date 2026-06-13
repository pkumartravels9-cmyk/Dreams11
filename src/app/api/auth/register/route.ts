import dbConnect from '@/lib/mongoose'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()
  const { email, password, username } = body
  if (!email || !password || !username) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const existing = await User.findOne({ email }).lean()
  if (existing) {
    return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
  }

  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ email, password: hashed, username })

  const token = signToken({ id: user._id, email: user.email, role: user.role })

  return NextResponse.json({ token, user: { id: user._id, email: user.email, username: user.username } })
}
