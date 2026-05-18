# Acoustic Gaurav — Music Portfolio

A premium cinematic music portfolio website for Acoustic Gaurav — Singer, Songwriter, Music Producer, Mixing & Mastering Engineer, and Music Arranger.

## Run & Operate

- `pnpm --filter @workspace/acoustic-gaurav run dev` — run the portfolio frontend (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion
- Fonts: Playfair Display (headings), Inter (body) via Google Fonts
- Icons: lucide-react (general), react-icons/si (platform logos)
- Forms: react-hook-form + zod

## Where things live

- `artifacts/acoustic-gaurav/src/` — main frontend source
- `artifacts/acoustic-gaurav/src/components/` — all page sections
- `artifacts/acoustic-gaurav/src/assets/images/` — generated portfolio & studio images
- `artifacts/acoustic-gaurav/src/index.css` — global theme (dark premium palette, glassmorphism utilities, waveform keyframes)

## Architecture decisions

- Single-page app (no backend) — all content is static, no API or DB needed
- Dark-mode-only: `document.documentElement.classList.add('dark')` applied globally in App.tsx
- CSS custom properties define the entire dark premium palette: `--background: 0 0% 4%` (matte black), `--primary: 44 54% 54%` (warm gold)
- Glassmorphism via utility class `.glass` (backdrop-blur, rgba background, subtle border)
- Animated waveform via CSS `@keyframes waveform` + `.animate-waveform` utility

## Product

Full portfolio site with: cinematic loading screen, sticky glassmorphism navbar, full-screen hero with animated waveform, stats counter, about section with rotating rings, 9 service cards, portfolio discography with album art, streaming platforms player, testimonials, studio setup, contact form with validation, footer. WhatsApp floating button included.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Google Fonts `@import url(...)` MUST be the very first line of `index.css` — before all other imports
- `Piano` and `Guitar` icons do not exist in lucide-react — use `Music2` and `AudioLines` instead
- `LoopIcon` does not exist in lucide-react — use `Repeat` instead

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
