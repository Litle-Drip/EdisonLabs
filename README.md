# Edison Labs — Marketing Site

The Edison Labs marketing site, built with Next.js 15 App Router, TypeScript, and Tailwind CSS 3.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styles | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## Local development

```bash
# Install dependencies
npm install

# Start the dev server on port 5000
npm run dev
```

The app runs at `http://localhost:5000`.

> **Note:** Port 5000 is required for the Replit preview pane. In standard local dev you can change the `--port 5000` flag in `package.json` to 3000.

## Project structure

```
app/                   # Next.js App Router pages
  page.tsx             # Homepage
  about/page.tsx
  contact/page.tsx
  journal/page.tsx
  lab/page.tsx
  products/
    page.tsx           # Products overview
    [slug]/page.tsx    # Dynamic product detail pages
  privacy/page.tsx
  terms/page.tsx
  risk/page.tsx
  layout.tsx           # Root layout (Header, Footer, Analytics)
  globals.css          # CSS custom properties + global styles
  sitemap.ts           # Auto-generated /sitemap.xml (static routes + product pages)
  robots.ts            # Auto-generated /robots.txt

components/
  layout/
    header.tsx         # Scroll-aware nav, mobile hamburger
    footer.tsx
  ui/                  # Shared UI primitives
    button.tsx
    container.tsx
    contact-form.tsx   # Client-side form with validation + mailto fallback
    experiment-card.tsx
    fade-in.tsx        # Framer Motion whileInView wrapper
    icons.tsx          # All inline SVG icons
    journal-card.tsx
    json-ld.tsx        # JSON-LD structured data helper
    legal-layout.tsx   # Shared layout for legal pages
    product-card.tsx
    product-page-layout.tsx
    section-header.tsx
    status-badge.tsx

lib/
  constants.ts         # SITE, SOCIAL, NAV_LINKS, FOOTER_LINKS
  journal.ts           # Static journal entry data
  products.ts          # Product + teaser + lab experiment data
  utils.ts             # cn() classname helper

public/
  favicon.ico
  logo.png
  og-image.png         # Open Graph share image (1200×630)
```

## Content updates

All content is static — no CMS. To update:

- **Products**: edit `lib/products.ts`
- **Journal entries**: edit `lib/journal.ts`
- **Navigation / social links**: edit `lib/constants.ts`
- **Legal copy**: edit the page files in `app/privacy/`, `app/terms/`, `app/risk/`

## Contact form

The `/contact` page uses a client-side form with two submission strategies:

1. **Formspree** (preferred) — set `NEXT_PUBLIC_FORMSPREE_ID` to your form ID and submissions go directly to your inbox without opening the mail client.
2. **Mailto fallback** — if no Formspree ID is set, the form opens the visitor's email client with the message pre-filled.

To enable Formspree:
1. Create a free form at [formspree.io](https://formspree.io)
2. Add `NEXT_PUBLIC_FORMSPREE_ID=your_form_id` to your Vercel environment variables

## Deployment (Vercel)

### First-time setup

1. Push the repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no build configuration needed
4. Add environment variables if using Formspree (see above)
5. Connect your custom domain in **Project → Settings → Domains**

### Environment variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_FORMSPREE_ID` | No | Formspree form ID for the contact form |

### Automatic deployments

Every push to `main` triggers a production deployment. Pull request branches get preview URLs automatically.

## SEO

- `app/sitemap.ts` generates `/sitemap.xml` covering all static routes, product pages, and journal entries
- `app/robots.ts` generates `/robots.txt`
- JSON-LD Organization schema is present on the homepage
- JSON-LD SoftwareApplication schema is on each product detail page
- `metadataBase` is set in `app/layout.tsx` — all relative OG image URLs resolve correctly
- Canonical URLs are set per-page via `alternates.canonical`

## Analytics

Vercel Analytics is included via `<Analytics />` in the root layout. It activates automatically in production on Vercel — no configuration needed.

## Design tokens

| Token | Value |
|---|---|
| Background | `#0B0D10` |
| Surface / card | `#111418` |
| Border | `#222831` |
| Accent | `#4DA3FF` |
| Text muted | `#B3BAC5` |
| Card radius | `24px` |
| Button radius | `12px` |
