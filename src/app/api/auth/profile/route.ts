import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongoose'
import User from '@/models/User'
import { verifyToken } from '@/lib/auth'

export async function GET(req: Request) {
  await dbConnect()
  const auth = req.headers.get('authorization') || ''
  const token = auth.replace('Bearer ', '')
  const decoded: any = verifyToken(token)
  if (!decoded) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const user = await User.findById(decoded.id).select('-password').lean()
  if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })

  return NextResponse.json({ user })
}
