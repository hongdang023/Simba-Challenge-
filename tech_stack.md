# Tech Stack — My Personal Website Challenge

## Overview

This document defines the technology stack for the competition information website.

---

## Build Tool

- **Vite 6.x** — Fast development server and optimized production builds
- Mode: Vanilla JavaScript (no framework)
- Entry: `src/main.js`

## Language & Markup

- **HTML5** — Semantic structure with accessible headings and landmarks
- **CSS3** — Vanilla CSS with CSS custom properties for design tokens
- **JavaScript** — ES modules, no TypeScript

## Styling

- Vanilla CSS only (no Tailwind, no preprocessors)
- CSS custom properties (`--color-*`, `--font-*`, `--spacing-*`) for the design system
- Responsive via `@media` queries at 768px and 1024px breakpoints

## Typography

- **Be Vietnam Pro** (Google Fonts) — matches the Sư Tử Con brand font family
- Fallback: `Montserrat, Poppins, Helvetica Neue, Arial, sans-serif`

## Internationalisation (i18n)

- Custom lightweight solution (no external library)
- JSON-based translation objects for Vietnamese and English
- `data-i18n` attributes on DOM elements
- Language preference persisted in `localStorage`

## Assets

- SVG logos from the [sutucon-brand-kit](file:///Users/danghong/Documents/Simba%20Challenge/sutucon-brand-kit)
- Favicon: SVG format

## Hosting & Deployment

- **Cloudflare Pages** — static site deployment
- Deploy command: `npx wrangler pages deploy dist/`
- Initial domain: `*.pages.dev` (custom domain to be configured later)
- Build output directory: `dist/`

## Version Control

- **Git** → GitHub
- Repository: `https://github.com/hongdang023/Simba-Challenge-.git`

## Dependencies

| Package | Purpose |
|---|---|
| `vite` | Build tool and dev server |

No other runtime or build dependencies. The site is intentionally lightweight.

## Analytics

Not in scope for this version.
