# Andrew Clausen - Portfolio

Professional portfolio and resume for Andrew Clausen, a **System Engineer & Network Architect**. This project bridges the gap between physical infrastructure and modern software, showcasing experience, skills, and projects in a high-performance web application.

## 🚀 Tech Stack

Built with a focus on performance, type safety, and modern design patterns:

-   **Framework**: [Astro 5.15](https://astro.build) (Static Site Generation)
-   **UI Library**: [React 19](https://react.dev)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com)
-   **Language**: [TypeScript](https://www.typescriptlang.org)
-   **Icons**: [Lucide React](https://lucide.dev)
-   **Bundler**: [Vite](https://vitejs.dev)

## ⚡ Key Features & Optimizations

This project has been rigorously optimized for performance and accessibility, achieving **100/100 Lighthouse scores**.

### Performance
-   **Static Site Generation (SSG)**: Pre-rendered HTML for instant time-to-first-byte (TTFB).
-   **Zero-JS by Default**: Astro strips unnecessary JavaScript, hydrating only interactive components (`client:visible`).
-   **Self-Hosted Fonts**: Google Fonts (Inter & JetBrains Mono) are self-hosted via `@fontsource` to eliminate render-blocking CDN requests.
-   **Inlined CSS**: Critical CSS is inlined into the HTML to prevent render-blocking network requests.
-   **Asset Optimization**: Images and assets are optimized at build time.

### Accessibility (a11y)
-   **Semantic HTML**: Proper use of `<main>`, `<section>`, `<nav>`, and heading hierarchy.
-   **Screen Reader Support**: `aria-label` attributes on all icon-only buttons and links.
-   **Keyboard Navigation**: Full focus management and skip links.
-   **Reduced Motion**: Respects user motion preferences.

### Design
-   **Dark/Light Mode**: System-aware theme switching with persistent local storage state and FOUC prevention.
-   **Bento Grid Layout**: Modern, responsive grid layout for the Education section.
-   **Responsive**: Mobile-first design that scales perfectly to desktop.

## 📂 Project Structure

```
src/
├── components/   # React UI components (Hero, Experience, etc.)
├── layouts/      # Astro layouts (HTML shell, <head> config)
├── pages/        # File-based routing (index.astro)
├── styles/       # Global CSS and Tailwind directives
├── hooks/        # Custom React hooks (useTheme, useOnScreen)
└── data.ts       # Centralized content data (Resume, Projects)
public/
├── robots.txt    # SEO configuration
└── favicon.svg   # Site icon
```

## 🛠️ Local Development

**Prerequisites**: Node.js v18+

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

4.  **Preview production build**:
    ```bash
    npm run preview
    ```

## 🌍 Deployment

This project is configured for static deployment (e.g., Cloudflare Pages, Vercel, Netlify).

-   **Output**: `dist/` directory
-   **Build Command**: `npm run build`

---

© 2025 Andrew Clausen. All rights reserved.
