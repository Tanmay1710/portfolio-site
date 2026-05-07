# Tanmay Dixit Portfolio

A Next.js portfolio site for Tanmay Dixit, focused on business analysis,
automation engineering, RPA, Power Platform, Python, and AI/ML experience.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
The production domain is https://tanmaydixit-portfolio.vercel.app/

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

## Documentation

For a comprehensive overview of the codebase, its structure, and key components,
please refer to the CODE_SUMMARY.md file.

**Maintenance Note:** This summary file must be reviewed and updated with every
significant code change to ensure it accurately reflects the current state of the project.

## Changelog

All notable changes to this project are documented in the CHANGELOG.md file.
This file adheres to the Keep a Changelog format.

**Maintenance Note:** The changelog must be updated for every code change, no matter how small,
to maintain a clear and auditable history of modifications. This includes bug fixes,
feature additions, refactorings, and documentation updates.
