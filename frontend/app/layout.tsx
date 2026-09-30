import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { StoreProvider } from "./store/provider";
import { portfolioData } from "./data/portfolioData";

const SITE_URL = "https://ankan.in";
const d = portfolioData;
const title = `${d.name} — ${d.title}`;
const description = d.summary;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${d.name}`,
  },
  description,
  keywords: [
    d.name,
    "Backend Engineer",
    "Open Source Maintainer",
    "Node.js",
    "TypeScript",
    "Go",
    "Cloudflare Workers",
    "AxioDB",
    "NexoralDNS",
    "EdgeBalancer",
    "Nexoral",
    "Embedded Database",
    "DNS Server",
    "Load Balancer",
    "System Design",
    "Kolkata",
    "India",
  ],
  authors: [{ name: d.name, url: SITE_URL }],
  creator: d.name,
  publisher: d.name,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: d.name,
    title,
    description,
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: `${d.name} — ${d.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theankansaha",
    creator: "@theankansaha",
    title,
    description,
    images: [`${SITE_URL}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: d.name,
  url: SITE_URL,
  image: `${SITE_URL}/photo.jpg`,
  jobTitle: d.title,
  description: d.summary,
  email: d.alternateEmail,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  sameAs: Object.values(d.social),
  knowsAbout: d.skillCategories.flatMap((c) => c.skills),
  alumniOf: {
    "@type": "EducationalOrganization",
    name: d.education.university,
  },
  hasCredential: d.github.achievements.map((a) => ({
    "@type": "EducationalOccupationalCredential",
    name: a,
    credentialCategory: "GitHub Achievement",
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${d.name} — Portfolio`,
  url: SITE_URL,
  author: { "@type": "Person", name: d.name },
  description: d.summary,
};

const softwareSchemas = d.projects.filter((p) => p.featured).map((p) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: p.name,
  description: p.tagline,
  url: p.live || p.github,
  codeRepository: p.github,
  programmingLanguage: p.technologies,
  author: {
    "@type": "Person",
    name: d.name,
    url: SITE_URL,
  },
}));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {softwareSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>
        <StoreProvider>{children}</StoreProvider>
        <Analytics />
      </body>
    </html>
  );
}