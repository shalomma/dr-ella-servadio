# Ella Personal Website

## Project Overview

A personal website for **Dr. Ella Servadio** — a family medicine specialist practicing in Givataim, Israel. A single-page marketing/info site that reflects trust, warmth, and medical credibility. Mobile-friendly; copy is currently English (Hebrew bilingual support is a future goal).

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build
npm start        # Serve the production build
npm run lint     # ESLint (next core-web-vitals + typescript)
```

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** — configured in `app/globals.css` via `@import "tailwindcss"` and `@theme`; there is **no `tailwind.config.js`**
- **framer-motion** for animation, **lucide-react** for icons
- Fonts via `next/font/google`: Bricolage Grotesque (display) + Plus Jakarta Sans (body)
- Deployed on **Vercel** (project `dr-ella-servadio`)

> ⚠️ This is Next.js 16, which has breaking changes vs. older versions (see `AGENTS.md`). Check `node_modules/next/dist/docs/` before writing Next-specific code.

## Architecture

App Router, no `src/` directory. The entire site is one page composed of section components.

```
app/
  layout.tsx     # <html lang="en">, font setup, <body> base classes, SEO metadata
  page.tsx       # composes the page: Navbar → Hero → About → Services → HowToBook → Location → Contact → Footer
  globals.css    # design tokens (@theme), base styles, keyframe animations
  components/    # all UI: one component per page section + shared primitives
  lib/           # reserved (currently empty)
```

Shared primitives in `components/`:
- `FadeIn.tsx` — scroll-triggered fade/slide wrapper (`direction`, `delay` props)
- `Pulse.tsx` — the signature animated ECG/heartbeat SVG line (reused as hero underline, booking connector, section divider)
- `Eyebrow.tsx` — small section label

## Design System

Aqua-forward identity with a coral family accent and a signature **ECG/pulse heartbeat motif**. All tokens live in `app/globals.css` under `@theme` — use the semantic names, don't hardcode hex values:

- **Brand:** `aqua`, `aqua-deep`, `aqua-ink` (AA-safe for text), `coral`/`coral-ink`, `amber`
- **Surfaces/text:** `ink`, `ink-soft`, `sand` (page bg), `mist`/`mist-deep`, `slate` (body copy), `line`
- **Fonts:** `font-display` (Bricolage) for headings; default `font-sans` (Jakarta) for body
- **Motion:** utilities `float-soft`, `blob-drift`, and the `aura` radial wash; all motion respects `prefers-reduced-motion`

## Conventions

- Components using framer-motion or React hooks need `"use client"`; section components are otherwise server components.
- Imports between components are **relative** (`./FadeIn`), though an `@/*` → repo-root alias is available in `tsconfig.json`.
- Stick to the design tokens above for colors and fonts rather than literal values.

## About Dr. Ella Servadio

- **Specialty:** Family Medicine (משפחה, פנימית וכללית)
- **License:** 1-145645
- **Languages:** Hebrew, English
- **Clinic:** Maccabi Health Services — Givataim clinic
- **Address:** Derech Yitzhak Rabin 53, Givataim, Floor 5
- **Phone:** 03-5050066
- **Email:** mishpaha.giv@gmail.com

### Clinic Hours

| Day       | Hours       |
|-----------|-------------|
| Sunday    | 09:00–14:00 |
| Monday    | 09:00–15:00 |
| Tuesday   | Closed      |
| Wednesday | 09:00–15:00 |
| Thursday  | 13:00–18:00 |
| Friday    | Closed      |
| Saturday  | Closed      |
