import dbConnect from '@/lib/mongoose'
import User from '@/models/User'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  await dbConnect()
  const body = await req.json()
  const { email, password } = body
  if (!email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const user = await User.findOne({ email })
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = signToken({ id: user._id, email: user.email, role: user.role })

  return NextResponse.json({ token, user: { id: user._id, email: user.email, username: user.username } })
}
