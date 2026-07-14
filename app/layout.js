import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Archivo:wght@700;800;900&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;600&display=swap";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Filtration Manufacturing Machinery | PMI America × Southern Coastal Machinery",
    template: "%s | PMI America × Southern Coastal Machinery",
  },
  description:
    "Meltblown cartridge winders, flat web lines, carbon-infused CLIMB™ technology, nylon cartridge machines and string wound winders — engineered and built in Georgia, USA. 50+ lines installed worldwide since 1992.",
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://southerncoastalmachinery.com/wp-content/uploads/2025/12/CCFW-min.png-2-1024x768.webp",
        width: 1024,
        height: 768,
        alt: "CCFW continuous cartridge filter winder — Southern Coastal Machinery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Filtration Manufacturing Machinery | PMI America × SCM",
    description:
      "American-built meltblown machinery — cartridge winders, web lines, patented CLIMB™ carbon infusion. 50+ lines installed worldwide since 1992.",
  },
  robots: { index: true, follow: true },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${site.url}/site-map?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Southern Coastal Machinery / PMI America",
  url: site.url,
  foundingDate: String(site.pmiFounded),
  founder: { "@type": "Person", name: site.founder },
  telephone: site.phone,
  email: site.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: "US",
  },
  description:
    "Manufacturer of meltblown filtration machinery: continuous and batch cartridge filter winders, meltblown web lines, carbon-infused CLIMB technology, nylon cartridge machines and string wound filter winders.",
  knowsAbout: [
    "Meltblown technology",
    "Depth filter cartridges",
    "Filtration machinery",
    "Nonwoven web production",
    "Activated carbon filtration",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
