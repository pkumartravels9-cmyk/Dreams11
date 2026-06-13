import dbConnect from '@/lib/mongoose'
import Game from '@/models/Game'
import { NextResponse } from 'next/server'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  await dbConnect()
  const id = params.id
  const game = await Game.findById(id).lean()
  if (!game) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ game })
}
