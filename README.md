# Junry Gallego — Portfolio

A Next.js portfolio for web and mobile app development, admin and server-side systems, and Shopify ecommerce. Includes a searchable work library and 16 project detail pages.

## Run locally

```bash
npm install
npm run dev -- --hostname 127.0.0.1
```

Open http://localhost:3000. Development and production builds use Webpack to avoid the excessive PostCSS worker processes observed with Turbopack on this Windows workspace. Build concurrency is limited to two workers.

## Update content

- `src/data/portfolio.ts`: profile, project descriptions, verified links, services, and FAQs.
- `src/app/page.tsx`: homepage sections.
- `src/app/work/`: searchable library and individual project pages.
- `src/components/`: shared navigation, project previews, and contact form.
- `src/components/tool-logo.tsx` and `src/data/tool-logos.ts`: shared brand logos for project badges, contribution details, and the toolkit.
- `src/app/globals.css`: responsive visual system.
- `public/projects/`: project artwork and PetMate design exports.
- `public/tool-logos/`: local brand assets and their source URLs.

Read `CONTENT-NOTES.md` before changing project claims or previews. Private system illustrations are labeled; prototype and ongoing work statuses are explicit.

The contact form prepares an email draft and opens it through the visitor's email app. It does not send messages or store submissions. The email, WhatsApp, résumé, and available project links are connected through the central content file.

Manrope and IBM Plex Mono are bundled in `src/app/fonts/` with their licenses. Builds do not need to fetch fonts from Google.

## Verify

```bash
npm run lint
npx tsc --noEmit
npm run build
```

With the local server running:

```bash
node scripts/verify-portfolio.mjs
```

The route check validates all project pages, internal destinations, image assets, missing-page behavior, and content exclusions. Reports are written to the ignored `qa-results/` directory. Browser checks should cover desktop and mobile layout, work filters and search, menu keyboard behavior, and preparing a contact draft.

This redesign is intended for local review; no deployment is configured or performed by these commands.
