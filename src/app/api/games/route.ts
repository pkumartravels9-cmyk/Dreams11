import dbConnect from '@/lib/mongoose'
import Game from '@/models/Game'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  await dbConnect()
  const url = new URL(req.url)
  const q = url.searchParams.get('q') || ''
  const category = url.searchParams.get('category') || ''
  const filter: any = {}
  if (q) filter.title = { $regex: q, $options: 'i' }
  if (category) filter.category = category

  const games = await Game.find(filter).sort({ trending: -1, rating: -1 }).limit(100).lean()
  return NextResponse.json({ games })
}
