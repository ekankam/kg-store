import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://www.kgafricanmarket.com";

/* ─── Page metadata ──────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "K&G African and Caribbean Market | Murfreesboro, TN",
    template: "%s | K&G African and Caribbean Market",
  },

  description:
    "Family-owned African and Caribbean grocery store in Murfreesboro, TN. Authentic foods, spices, fufu mix, plantain, frozen goods, and specialty imports. Serving Nashville, Smyrna, and surrounding areas. Open 7 days a week.",

  // Keywords are largely ignored by modern search engines.
  // The terms below are kept minimal and support the page copy.
  keywords: [
    "African grocery store Murfreesboro TN",
    "Caribbean grocery store Murfreesboro TN",
    "African market Nashville TN",
    "Caribbean market Nashville TN",
    "African grocery Smyrna TN",
    "African food store Tennessee",
    "international grocery Murfreesboro",
    "fufu mix plantain stockfish Tennessee",
  ],

  authors: [{ name: "K&G African and Caribbean Market" }],
  creator: "K&G African and Caribbean Market",

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "K&G African and Caribbean Market",
    title: "K&G African and Caribbean Market | Murfreesboro, TN",
    description:
      "Family-owned African and Caribbean grocery store in Murfreesboro, TN. Authentic foods, spices, and specialty imports. Open Mon–Sat 8:30 AM–8 PM, Sun 3–7 PM.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "K&G African and Caribbean Market | Murfreesboro, TN",
    description:
      "Authentic African and Caribbean groceries in Murfreesboro, TN. Serving Nashville, Smyrna, and surrounding areas. Open 7 days a week.",
  },
};

/* ─── JSON-LD structured data (GroceryStore) ────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  "@id": SITE_URL,
  name: "K&G African and Caribbean Market",
  // Single string is correct per schema.org spec
  alternateName: "K and G African and Caribbean Market",
  description:
    "A family-owned grocery store bringing the rich flavors and cultural traditions of Africa and the Caribbean to the Murfreesboro community.",
  url: SITE_URL,
  // schema.org telephone expects a single string; list primary number
  telephone: "+16292510000",
  email: "kgafricanmarket@gmail.com",
  image: `${SITE_URL}/store/hero.webp`,
  // TODO: add social profile URLs when available (Facebook, Instagram, etc.)
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    streetAddress: "2705 Old Fort Pkwy",
    addressLocality: "Murfreesboro",
    addressRegion: "TN",
    postalCode: "37128",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.8293,
    longitude: -86.4559,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:30",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "15:00",
      closes: "19:00",
    },
  ],
  // Flat strings are valid and simpler than nested City objects
  areaServed: ["Murfreesboro, TN", "Nashville, TN", "Smyrna, TN", "La Vergne, TN"],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  hasMap: "https://maps.google.com/?q=2705+Old+Fort+Pkwy+Murfreesboro+TN+37128",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Geographic meta tags — supported by Bing and local directories */}
        <meta name="geo.region" content="US-TN" />
        <meta name="geo.placename" content="Murfreesboro, Tennessee" />
        <meta name="geo.position" content="35.8293;-86.4559" />
        <meta name="ICBM" content="35.8293, -86.4559" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
