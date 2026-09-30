import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSitemapUrl = "https://blog.ankan.in/sitemap.xml";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: "https://ankan.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(blogSitemapUrl, { next: { revalidate: 3600 } });
    if (res.ok) {
      const xml = await res.text();
      for (const match of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
        const block = match[1];
        const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];
        if (!loc) continue;
        const lastmod = block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
        blogPages.push({
          url: loc,
          lastModified: lastmod ? new Date(lastmod) : new Date(),
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  } catch {
    // blog sitemap unavailable
  }

  return [...staticRoutes, ...blogPages];
}