# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

The Sanity Studio is embedded at `/studio` and runs alongside the Next.js app — no separate process needed.

## Architecture

This is a **Next.js 16 + Sanity v5** academic portfolio site for Soniya Gupta-Rawal (PhD Candidate, Cambridge). All content is managed via Sanity CMS.

### Data Flow

- **`sanity/env.ts`** — exports `projectId`, `dataset`, `apiVersion` (hardcoded fallbacks to `twgqgtz0` / `production`)
- **`sanity/client.ts`** — creates the Sanity client, exports `urlFor()` image URL builder and `hasConfig` guard
- **`lib/queries.ts`** — all GROQ queries in one file (profileQuery, publicationsQuery, projectsQuery, etc.)
- Pages fetch data server-side via `client.fetch()` with `hasConfig` guards that return empty defaults when Sanity is unconfigured

### Pages

- **`app/page.tsx`** — single-page portfolio homepage; fetches all content types in parallel, passes to section components
- **`app/research/[slug]/page.tsx`** — individual project detail pages with `generateStaticParams` via `projectsQuery`
- **`app/teaching/page.tsx`** — teaching history page with hardcoded fallback data if Sanity returns nothing
- **`app/studio/[[...tool]]/page.tsx`** — embedded Sanity Studio

### Components

All section components live in `/components/` and are pure presentational — they receive data as props from pages. Key shared components:
- **`ScrollReveal`** — Framer Motion wrapper for scroll-triggered fade/slide animations; accepts `delay` and `direction` props
- **`SectionHeading`** — reusable styled section header
- **`Navbar`** / **`Footer`** — layout chrome

### Sanity Schema

Schemas are in `sanity/schemas/` and registered in `sanity/schemas/index.ts`. Document types:
- `profile` — singleton; bio, photo, CV file, social links
- `publication` — academic papers with year, authors, DOI, PDF URL, `featured` flag
- `project` — research projects with slug (used for detail pages), portable text `body`, status
- `researchArea` — ordered list with `order` field
- `talk` — conference talks/presentations
- `teamMember` — current/alumni members with `isCurrent` and `order` fields
- `collaborator` — institutional collaborators with optional logo
- `raApplication` — singleton-style (only one with `isActive == true` is shown); RA recruitment notice
- `teaching` — teaching history ordered by `order` field

The `sanity/schemaTypes/` directory contains unused boilerplate (post, author, category, blockContent) from the Next.js Sanity starter — the active schemas are exclusively in `sanity/schemas/`.

### Styling

- **Tailwind CSS v4** with custom theme tokens defined in `app/globals.css` via `@theme inline`
- Custom colors: `cream`, `cream-dark`, `indigo-deep` (#1e1b4b), `indigo-mid`, `indigo-light`, `amber`, `amber-light`, `amber-glow`, `slate-warm`, `slate-light`
- Custom CSS classes: `.dot-grid`, `.dot-grid-light` (background patterns), `.grain` (texture overlay), `.link-underline` (animated underline)
- Fonts: `Playfair Display` (`--font-serif`) for headings, `Inter` (`--font-sans`) for body

### Sanity MCP

The Sanity MCP server is configured and can be used to query/mutate content directly. Project ID: `twgqgtz0`, dataset: `production`.
