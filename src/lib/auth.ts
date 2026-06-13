import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'change-me'
const JWT_EXPIRES = '7d'

export function signToken(payload: Record<string, any>) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES })
}

export function verifyToken(token?: string) {
  if (!token) return null
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (err) {
    return null
  }
}
