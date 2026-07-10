# Bijaya Computer — Website

Official website for **Bijaya Computer**, a computer, laptop, printer, networking &amp; CCTV sales and service center in Mohana, Gajapati, Odisha.

Live at: **https://bijaycomputers.epabitra.com**

## Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [lucide-react](https://lucide.dev/) for icons

Frontend-only — all content is served from static data files in `src/data/`, structured so backend APIs can be integrated later without restructuring the UI.

## Project Structure

```
src/
  assets/images/   Organized business photography (hero, services, repairs, products, etc.)
  components/      Reusable UI components (layout, common, home, services, contact, ...)
  data/            Static content — services, pricing, testimonials, FAQs, nav, site config
  hooks/           Custom hooks (scroll-to-top, count-up animation, in-view)
  layouts/         Page shell (Navbar + Footer + Outlet)
  pages/           One component per route
  routes/          Route definitions
  utils/           Small shared helpers
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## SEO

- **`src/components/seo/SEO.jsx`** — sets a unique, keyword-optimized `document.title`, meta description, keywords, canonical URL, and Open Graph/Twitter tags per route.
- **`src/components/seo/*Schema.jsx`** — JSON-LD structured data: `LocalBusinessSchema` (sitewide `ElectronicsStore`), `BreadcrumbSchema` (auto-generated from `PageHeader`'s breadcrumb props), `ServiceSchema` (per service page), `FAQPageSchema`, `BlogPostingSchema`.
- **`public/sitemap.xml`** — auto-generated from live route data (services, blog posts) by `scripts/generate-sitemap.mjs`, which runs automatically before every build via the `prebuild` npm script. Run `npm run sitemap` to regenerate it manually.
- **`public/robots.txt`** — allows all crawlers, points to the sitemap.
- Target keywords center on local intent: "computer repair Mohana", "laptop service Mohana Odisha", "CCTV installation Gajapati", etc. — see `siteConfig.coreKeywords` and each page's `<SEO keywords={...} />` call.

Note: since this is a client-rendered SPA with no server/prerendering, only JS-executing crawlers (Googlebot) see the per-page meta tags from `SEO.jsx`. Non-JS crawlers (most social share bots — WhatsApp, Facebook, Twitter/X link previews) only see the static defaults in `index.html`, so shared links currently show the same homepage preview regardless of which page was shared. Prerendering (e.g. `vite-plugin-ssg`) would fix this if accurate social previews per page become important.

## Deployment (GitHub Pages)

This repo deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`:

1. Installs dependencies and runs `npm run build`.
2. Publishes `dist/` to GitHub Pages via `actions/deploy-pages`.

The custom domain is configured via `public/CNAME` (copied into `dist/` on build) and `public/404.html` implements the [SPA fallback trick](https://github.com/rafgraph/spa-github-pages) so client-side routes (e.g. `/services/laptop-repair`) work on direct load/refresh, since GitHub Pages has no server-side rewrites.

**One-time repo setup:** Settings → Pages → Source → "GitHub Actions". See `DEPLOYMENT.md` for the full step-by-step setup, including DNS configuration for the custom domain.
