# K&G African and Caribbean Market

A modern single-page marketing website for **K&G African and Caribbean Market**, a family-owned grocery store in Murfreesboro, Tennessee. The site is designed to give the business a strong online presence, highlight its cultural identity, and make it easy for customers to find the store, contact the business, and understand what products are available.

## Website Purpose

This webpage was built to:

- introduce the store and brand in a polished, modern way
- showcase the store's atmosphere using real in-store photography
- highlight African and Caribbean grocery offerings
- make the address, phone numbers, email, and business hours easy to find
- improve local search visibility for users searching in Murfreesboro, Nashville, Smyrna, and nearby areas

## Store Information

- **Store name:** K&G African and Caribbean Market
- **Address:** 2705 Old Fort Pkwy, Murfreesboro, TN 37128
- **Phone:** 629-251-0000
- **Phone:** 347-350-3899
- **Email:** kgafricanmarket@gmail.com
- **Hours:** Mon - Sat, 8:30 AM - 8:00 PM
- **Hours:** Sun, 3:00 PM - 7:00 PM

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Custom CSS in `app/globals.css`
- **Images:** Local image assets stored in `public/store`
- **SEO:** Next.js metadata API plus JSON-LD structured data for local search

## Main Files

- `app/page.tsx`
  The full landing page content and section structure.

- `app/layout.tsx`
  Global metadata, SEO configuration, JSON-LD local business schema, and shared font setup.

- `app/globals.css`
  All custom styling, spacing, typography, colors, layout, and responsive rules.

- `app/icon.svg`
  The site favicon using the store's brand colors.

- `public/store`
  Real store photography used across the website.

## Website Sections

The page currently includes:

- **Sticky navigation**
  Brand name, section links, and a direct call button.

- **Hero section**
  Large branded opening section with headline, location, and CTA buttons.

- **Scrolling product ticker**
  A visual strip highlighting product categories and store variety.

- **About section**
  The store's story, values, and community-focused messaging.

- **Offerings section**
  Featured grocery categories such as produce, pantry staples, canned goods, and grains.

- **Gallery strip**
  Real images from inside the market.

- **Visit section**
  Address, phone numbers, email, business hours, and embedded map.

- **Footer**
  Final contact information and business summary.

## Brand And Design Notes

The visual direction is intentionally warm, modern, and editorial rather than generic. The site uses:

- deep brown, amber, gold, cream, and linen tones
- elegant serif display typography paired with a clean sans-serif body font
- real store photography instead of generic stock imagery
- layered compositions, subtle motion, and strong spacing for a premium feel

## SEO Setup

The site includes local SEO improvements intended to help the business appear for relevant searches such as:

- african market in Murfreesboro
- african store in Nashville
- african grocery in Smyrna
- Caribbean grocery near Murfreesboro

SEO work already added:

- expanded page title and meta description
- local keyword targeting for Murfreesboro, Nashville, Smyrna, and surrounding areas
- Open Graph and Twitter metadata
- canonical URL support
- robots settings for indexing
- geographic meta tags
- JSON-LD `GroceryStore` schema with:
  - address
  - phone numbers
  - email
  - business hours
  - service area
  - map link
  - local business classification

## Local Image Assets

Selected real store images were added under `public/store` with clean filenames:

- `hero.png`
- `produce.png`
- `shelves.png`
- `frozen.png`
- `tea-pantry.png`
- `canned.png`
- `beans.png`
- `fufu.png`

These are used instead of placeholder stock images so the site better reflects the actual store.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Content Updates

If you need to update store information later, the main places to edit are:

- `app/page.tsx` for visible text on the page
- `app/layout.tsx` for SEO metadata and structured data
- `public/store` for replacing or adding store photos
- `app/globals.css` for styling changes

## Recommended Next Steps

For best real-world SEO results after deployment:

- connect the live domain in `app/layout.tsx` if it changes
- submit the site to Google Search Console
- create or claim the store's Google Business Profile
- add the live site URL to social and business listings
- optionally add analytics and a contact form in the future
