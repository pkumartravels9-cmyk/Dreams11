import dbConnect from '@/lib/mongoose'
import Game from '@/models/Game'
import User from '@/models/User'

async function seed() {
  await dbConnect()
  const games = [
    { title: 'Cosmic Quest', description: 'An epic space adventure full of thrills.', category: 'Action', rating: 4.9, players: 250000, trending: true },
    { title: 'Chain Blast', description: 'Fast-paced puzzler with explosive combos.', category: 'Puzzle', rating: 4.8, players: 180000, trending: true },
    { title: 'Puzzle Paradise', description: 'Relaxing puzzles with beautiful visuals.', category: 'Puzzle', rating: 4.7, players: 120000 },
    { title: 'Arcade Legend', description: 'Retro arcade action for high-score chasers.', category: 'Arcade', rating: 4.6, players: 95000 },
    { title: 'Mystery Match', description: 'Match-3 gameplay with a mysterious twist.', category: 'Puzzle', rating: 4.9, players: 75000, trending: true },
    { title: 'Sky Runner', description: 'Endless runner across floating islands.', category: 'Arcade', rating: 4.5, players: 110000 },
  ]

  await Game.deleteMany({})
  await Game.insertMany(games)

  // Create admin user if not exists
  const adminEmail = process.env.SEED_ADMIN_EMAIL || 'admin@dreams11.test'
  const adminPassword = process.env.SEED_ADMIN_PASSWORD || 'password123'
  const existing = await User.findOne({ email: adminEmail })
  if (!existing) {
    const bcrypt = await import('bcryptjs')
    const hashed = await bcrypt.hash(adminPassword, 10)
    await User.create({ email: adminEmail, username: 'admin', password: hashed, role: 'admin', balance: 0 })
    console.log('Admin user created:', adminEmail)
  }

  console.log('Seed complete')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
