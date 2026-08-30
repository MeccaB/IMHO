# My Two Sense

A responsive, PWA-ready nationwide business-review MVP built with Next.js, TypeScript, Tailwind, Prisma, and PostgreSQL.

## Run locally

1. Copy `.env.example` to `.env.local` and provide a Neon PostgreSQL connection URL plus Auth.js/OAuth and Vercel Blob credentials.
2. Install dependencies: `npm install`
3. Create the database: `npx prisma db push`
4. Start: `npm run dev`

## Production integrations

- Use **Neon via the Vercel Marketplace** for PostgreSQL. Vercel Postgres is no longer first-party; existing databases migrated to Neon in December 2024.
- Use **Vercel Blob** for review and business photos.
- Configure Google and Apple OAuth, `AUTH_SECRET`, and `DATABASE_URL` as environment variables before enabling authentication.
- The included schema enforces one review per user/business and models voting, moderation, owner responses, threaded comments, and future expansion paths.

The UI ships with representative discovery content. Connect the Prisma-backed queries, Auth.js session enforcement, Blob upload route, and Redis-backed submission limits before accepting public contributions.
