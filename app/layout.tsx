import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.kgafricanmarket.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "K&G African and Caribbean Market | African & Caribbean Grocery Store in Murfreesboro, TN",
    template: "%s | K&G African and Caribbean Market",
  },
  description:
    "K&G African and Caribbean Market is a family-owned grocery store in Murfreesboro, TN serving Nashville, Smyrna, and surrounding areas. Shop authentic African and Caribbean foods, spices, fufu mix, plantain, stockfish, canned goods, frozen foods, and specialty imports. Open 7 days a week on Old Fort Pkwy.",
  keywords: [
    // Core identity
    "African market Murfreesboro TN",
    "Caribbean market Murfreesboro TN",
    "African grocery store Murfreesboro",
    "Caribbean grocery store Murfreesboro",
    "K&G African Market",
    "KG African Market",
    // Nashville searches
    "African store Nashville TN",
    "Caribbean store Nashville TN",
    "African grocery Nashville",
    "African food store Nashville Tennessee",
    "Caribbean food Nashville",
    // Smyrna searches
    "African market Smyrna TN",
    "African grocery Smyrna Tennessee",
    "Caribbean grocery Smyrna TN",
    // Product-level
    "African food store Tennessee",
    "fufu mix Murfreesboro",
    "plantain Murfreesboro",
    "stockfish Nashville",
    "African spices Tennessee",
    "Caribbean spices Tennessee",
    "jerk seasoning Murfreesboro",
    "palm oil Murfreesboro",
    "suya spice Nashville",
    "egusi Nashville",
    "Titus sardines Tennessee",
    "Golden Morn Tennessee",
    "Peak milk Tennessee",
    "Lucozade Nashville",
    "African import store Tennessee",
    "Caribbean import store Tennessee",
    "West African groceries Tennessee",
    "Nigerian grocery store Tennessee",
    "Ghanaian grocery store Tennessee",
    "Jamaican grocery store Tennessee",
    "African store near me Murfreesboro",
    "Caribbean store near me Nashville",
    "ethnic grocery store Murfreesboro",
    "international grocery Murfreesboro TN",
    "2705 Old Fort Pkwy Murfreesboro",
  ],
  authors: [{ name: "K&G African and Caribbean Market" }],
  creator: "K&G African and Caribbean Market",
  publisher: "K&G African and Caribbean Market",
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
    title:
      "K&G African and Caribbean Market — Murfreesboro, TN | Serving Nashville & Smyrna",
    description:
      "Family-owned African and Caribbean grocery store in Murfreesboro, TN. Authentic foods, spices, fufu mix, plantain, frozen foods, and specialty imports. Open Mon–Sat 8:30 AM–8 PM, Sun 3–7 PM.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "K&G African and Caribbean Market | Murfreesboro, TN",
    description:
      "Authentic African and Caribbean groceries near Nashville & Smyrna. Open 7 days a week at 2705 Old Fort Pkwy, Murfreesboro TN.",
  },
  category: "Grocery Store",
};

/* ─── JSON-LD structured data (LocalBusiness) ───────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  "@id": SITE_URL,
  name: "K&G African and Caribbean Market",
  alternateName: ["KG African Market", "K&G African Market", "K and G African Market"],
  description:
    "A family-owned grocery store dedicated to bringing the rich flavors and cultural traditions of Africa and the Caribbean to the Murfreesboro community. Authentic foods, spices, and specialty items.",
  url: SITE_URL,
  telephone: ["+16292510000", "+13473503899"],
  email: "kgafricanmarket@gmail.com",
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
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
  areaServed: [
    { "@type": "City", name: "Murfreesboro", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Nashville", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Smyrna", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "La Vergne", containedInPlace: { "@type": "State", name: "Tennessee" } },
    { "@type": "City", name: "Antioch", containedInPlace: { "@type": "State", name: "Tennessee" } },
  ],
  servesCuisine: ["African", "West African", "Caribbean", "Nigerian", "Ghanaian", "Jamaican"],
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
    <html lang="en">
      <head>
        {/* Geographic meta tags for local search */}
        <meta name="geo.region" content="US-TN" />
        <meta name="geo.placename" content="Murfreesboro, Tennessee" />
        <meta name="geo.position" content="35.8293;-86.4559" />
        <meta name="ICBM" content="35.8293, -86.4559" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
