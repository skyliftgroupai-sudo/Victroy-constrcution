# Victory Construction Services — Website

Marketing website for Victory Construction Services, LLC — a custom home builder
and remodeler serving Northeast Florida. Built with React, Vite, and Tailwind CSS.

## Tech stack

- **React 18** with **React Router** for client-side routing
- **Vite** for fast dev and production builds
- **Tailwind CSS** for styling (brand tokens live in `tailwind.config.js`)
- **Framer Motion** for tasteful scroll and page animations
- **React Icons** for iconography
- **React Helmet Async** for per-page SEO (title, meta, Open Graph, JSON-LD)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to /dist
npm run preview  # preview the production build locally
```

## Project structure

```
public/
  images/            Logo and photography
  robots.txt
src/
  components/
    layout/          Navbar, Footer, Layout shell, ScrollToTop
    sections/        Reusable page sections (hero, process, CTA, ...)
      home/          Sections specific to the home page
    ui/              Small building blocks (Button, Accordion, Reveal, ...)
    Seo.jsx          Per-page SEO via React Helmet Async
  data/              Content lives here, kept out of the markup
  pages/             One file per route (Home, Services, Our Process, ...)
    services/        Individual service pages
  App.jsx            Route definitions
  main.jsx           App entry
```

Content is intentionally kept in `src/data/*` so copy can be updated without
touching component logic.

## Deploying to Vercel

The repo includes a `vercel.json` with an SPA rewrite so client-side routes
resolve correctly. Import the project in Vercel and it builds with zero config
(Framework preset: **Vite**).

## Editing content

- **Company details** (phone, email, address, license): `src/data/site.js`
- **Services list**: `src/data/services.js`
- **Process steps**: `src/data/process.js`
- **Projects gallery**: `src/data/projects.js`
- **Service page copy**: `src/data/serviceContent.js`, `customHomes.js`, `adus.js`
- **Brand colors & fonts**: `tailwind.config.js`
```
