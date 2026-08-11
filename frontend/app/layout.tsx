import type { Metadata } from "next";
import { Cantarell, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { StoreProvider } from "./store/provider";
import { portfolioData } from "./data/portfolioData";

const cantarell = Cantarell({
  variable: "--font-cantarell",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://ankan.in";
const title = `${portfolioData.name} — ${portfolioData.title} | Ankan OS`;
const description = `${portfolioData.subtitle}. A portfolio built as a working Ankan OS desktop.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    portfolioData.name,
    "Full Stack Developer",
    "Backend Engineer",
    "Node.js",
    "TypeScript",
    "Cloudflare Workers",
    "Ankan OS",
  ],
  authors: [{ name: portfolioData.name, url: SITE_URL }],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: portfolioData.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@theankansaha",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.name,
  url: SITE_URL,
  sameAs: [portfolioData.social.github, portfolioData.social.linkedin, portfolioData.social.twitter],
  jobTitle: portfolioData.title,
  description: portfolioData.subtitle,
  email: portfolioData.alternateEmail,
  knowsAbout: portfolioData.skillCategories.flatMap((c) => c.skills),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cantarell.variable} ${notoSansMono.variable}`}>
        <StoreProvider>{children}</StoreProvider>
        <Analytics />
      </body>
    </html>
  );
}
