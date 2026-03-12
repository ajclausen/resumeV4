# Andrew Clausen - Portfolio

Personal portfolio site for Andrew Clausen, System Engineer & Network Architect.

## Tech Stack

- **Astro 6** — static HTML, zero client-side framework
- **Tailwind CSS v4** + custom CSS (agency.css)
- **TypeScript**
- **Fonts**: Inter, Space Grotesk, JetBrains Mono via `@fontsource`

No React in the production bundle. All interactivity is vanilla JS custom elements (~3KB total).

## Performance

98 Lighthouse mobile performance score (Slow 4G throttled).

- 23KB HTML (gzipped, all CSS inlined)
- 0 external JS files
- `font-display: swap` on all fonts
- FCP ~1.8s / LCP ~1.9s on emulated Moto G Power

## Features

- Dark/light mode with localStorage persistence and FOUC prevention
- Live accent color switcher (teal, copper, purple, green, rose, blue)
- Direction-aware hover animations on experience section
- Scroll-triggered reveal animations via IntersectionObserver
- Mouse-following glow effect on hero section

## Project Structure

```
src/
├── components/   # Astro components (HeroSection, ExperienceSection, etc.)
├── layouts/      # HTML shell, <head>, font imports
├── pages/        # index.astro (single page)
├── styles/       # agency.css (design system), global.css (Tailwind config)
├── utils/        # parseBold.ts
├── data.ts       # All resume content
└── types.ts      # TypeScript interfaces
```

## Development

```bash
npm install
npm run dev       # localhost:4321
npm run build     # static output to dist/
npm run preview   # serve production build
```

## Deployment

Static output to `dist/`. Works with Cloudflare Pages, Vercel, Netlify, etc.
