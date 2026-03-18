import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { StoreProvider } from "./store/provider";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ankan Saha | Full Stack Developer",
    template: "%s | Ankan Saha",
  },
  description:
    "Full Stack Developer & Backend Engineering Specialist. Building scalable infrastructure, microservices, and open-source tools.",
  keywords: [
    "Ankan Saha", "Full Stack Developer", "Backend Engineer",
    "Node.js", "TypeScript", "Cloudflare Workers", "Ankan Saha",
  ],
  authors: [{ name: "Ankan Saha", url: "https://ankan.in" }],
  openGraph: {
    type: "website",
    url: "https://ankan.in",
    siteName: "Ankan Saha",
    title: "Ankan Saha | Full Stack Developer",
    description:
      "Full Stack Developer & Backend Engineering Specialist. Building scalable infrastructure for 10M+ users.",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@theankansaha",
    title: "Ankan Saha | Full Stack Developer",
    description:
      "Full Stack Developer & Backend Engineering Specialist. Building scalable infrastructure for 10M+ users.",
  },
  metadataBase: new URL("https://ankan.in"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ankan Saha",
  url: "https://ankan.in",
  sameAs: [
    "https://github.com/AnkanSaha",
    "https://linkedin.com/in/theankansaha",
    "https://twitter.com/theankansaha",
  ],
  jobTitle: "Full Stack Developer",
  description: "Backend Engineering Specialist | System Design & Infrastructure Optimization Expert",
  email: "connect@ankan.in",
  knowsAbout: ["Node.js", "TypeScript", "Golang", "Docker", "Cloudflare Workers", "Microservices"],
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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
          <Navbar />
          <main style={{ paddingTop: "60px" }}>{children}</main>
          <Footer />
        </StoreProvider>
        <Analytics />
      </body>
    </html>
  );
}
