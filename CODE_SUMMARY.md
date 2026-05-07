# Codebase Summary: Tanmay Dixit Portfolio

This document provides a high-level overview of the Tanmay Dixit Portfolio project, designed to help new developers quickly understand its structure, key components, and development practices.

## 1. Project Overview

The Tanmay Dixit Portfolio is a personal website built with Next.js and React, leveraging TypeScript for type safety. Its primary purpose is to showcase Tanmay Dixit's professional experience, skills, and projects in business analysis, automation engineering, RPA, Power Platform, Python, and AI/ML.

**Key Technologies:**
- **Framework:** Next.js (React)
- **Language:** TypeScript
- **Styling:** Likely Tailwind CSS (inferred from utility classes like `dark:bg-slate-900`)
- **Deployment:** Vercel

## 2. Project Structure

The project follows a standard Next.js directory structure:

- `public/`: Static assets (images, fonts, etc.).
- `src/`: Contains all source code.
  - `src/app/`: (If using App Router) Contains route-specific components and layouts.
  - `src/components/`: Reusable React components.
  - `src/lib/`: Utility functions, constants, and data definitions.
  - `src/pages/`: (If using Pages Router) Contains page components.
- `node_modules/`: Installed third-party packages.
- `README.md`: Project description, setup instructions, and documentation links.
- `CODE_SUMMARY.md`: This file.
- `CHANGELOG.md`: Tracks all changes made to the codebase.

## 3. Key Files and Components

### `src/lib/profile.ts`

This file is the **single source of truth for all dynamic content** displayed on the portfolio. It exports a `profile` object containing:
- Personal details (name, title, location, contact).
- Professional summary and headline.
- Navigation links.
- Detailed experience history.
- Categorized skill groups.
- Certifications and awards.
- Additional projects.
- Structured project case studies.

It also defines several TypeScript types (`ProfileLink`, `ExperienceItem`, `SkillGroup`, `ProjectCaseStudy`) to ensure data consistency and type safety across the application.

### `src/components/About.tsx`

This React component is responsible for rendering the "About" section of the portfolio. It consumes data directly from `src/lib/profile.ts` to display:
- An introductory text and headline.
- A professional quote.
- Categorized lists for background, specialties, certifications, awards, and additional projects.

The component utilizes a `Reveal` component (likely for scroll-based animations) and applies styling using utility classes.

## 4. Development Workflow

- **Start Development Server:** `npm run dev` (opens on `http://localhost:3000`)
- **Lint Code:** `npm run lint`
- **Type Check:** `npx tsc --noEmit`
- **Build for Production:** `npm run build`

## 5. Deployment

The project is configured for deployment on Vercel. The `NEXT_PUBLIC_SITE_URL` environment variable should be set to the production domain for correct Open Graph metadata. If not set, it falls back to `VERCEL_URL`.

## 6. Documentation and Maintenance

- **`CODE_SUMMARY.md`**: This file provides a high-level overview. It **must be updated** with every significant code change to remain accurate.
- **`CHANGELOG.md`**: This file tracks all modifications. It **must be updated** for every code change, including bug fixes, features, refactorings, and documentation updates.

By adhering to these documentation practices, we ensure the project remains understandable and maintainable for all contributors.