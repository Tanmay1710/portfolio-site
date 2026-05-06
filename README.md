# Tanmay Dixit Portfolio

A Next.js portfolio site for Tanmay Dixit, focused on business analysis,
automation engineering, RPA, Power Platform, Python, and AI/ML experience.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content

Most portfolio copy and structured data lives in `src/lib/profile.ts`.

## Deployment

This project is ready for Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production
domain when available so Open Graph metadata resolves to the canonical URL.

If `NEXT_PUBLIC_SITE_URL` is not set, Vercel builds fall back to `VERCEL_URL`.
