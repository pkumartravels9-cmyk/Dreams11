# Dreams11 - Backend & Deployment

This repository contains the Dreams11 gaming platform (frontend + backend API). Below are steps to run and deploy.

Local development

1. Install dependencies
   - npm install

2. Environment
   - cp .env.local.example .env.local
   - Set MONGODB_URI, JWT_SECRET, NEXT_PUBLIC_API_URL

3. Seed sample data (requires Node to allow ts-node or compile)
   - npx ts-node scripts/seed.ts

4. Run dev
   - npm run dev

API routes

- POST /api/auth/register - register a new user
- POST /api/auth/login - login
- GET /api/auth/profile - get current user (requires Authorization: Bearer <token>)
- GET /api/games - list games
- GET /api/games/:id - game details
- POST /api/rewards/daily - claim daily reward (requires Authorization)

Deployment

- Vercel is recommended for Next.js app router apps. Add environment variables on Vercel Dashboard and deploy.
- Ensure MONGODB_URI is a production database (Mongo Atlas).

Security

- Use a strong JWT_SECRET in production
- Use HTTPS in production
- Store secrets in environment variables/secrets manager
