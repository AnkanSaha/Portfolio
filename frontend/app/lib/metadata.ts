import type { Metadata } from "next";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const base = "https://ankan.in";
  const url = `${base}${opts.path ?? ""}`;
  return {
    title: `${opts.title} | Ankan Saha`,
    description: opts.description,
    authors: [{ name: "Ankan Saha", url: base }],
    keywords: ["Ankan Saha", "Full Stack Developer", "Backend Engineer", "Node.js", "TypeScript", "Cloudflare Workers"],
    openGraph: {
      title: `${opts.title} | Ankan Saha`,
      description: opts.description,
      url,
      siteName: "Ankan Saha",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${opts.title} | Ankan Saha`,
      description: opts.description,
      creator: "@theankansaha",
    },
    alternates: { canonical: url },
  };
}
