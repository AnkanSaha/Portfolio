import { MetadataRoute } from 'next';

const baseUrl = 'https://ankan.in';
const blogSitemapUrl = 'https://blog.ankan.in/sitemap.xml';
const VALID_FREQUENCIES = new Set([
  'always',
  'hourly',
  'daily',
  'weekly',
  'monthly',
  'yearly',
  'never',
]);

const staticRoutes: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/projects', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/skills', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.8 },
];

// Hashnode serves a plain <urlset> (not a sitemap index), so a regex scan is
// enough — pulled out as a pure function so it can be exercised without a fetch.
export function parseBlogSitemap(xml: string): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const match of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const block = match[1];
    const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];
    if (!loc) continue;

    const lastmod = block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    const changefreq = block.match(/<changefreq>(.*?)<\/changefreq>/)?.[1];
    const priority = block.match(/<priority>(.*?)<\/priority>/)?.[1];

    entries.push({
      url: loc,
      lastModified: lastmod ? new Date(lastmod) : new Date(),
      changeFrequency: VALID_FREQUENCIES.has(changefreq ?? '')
        ? (changefreq as MetadataRoute.Sitemap[number]['changeFrequency'])
        : 'daily',
      priority: priority ? parseFloat(priority) : 0.7,
    });
  }

  return entries;
}

async function getBlogSitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(blogSitemapUrl, { cache: 'no-store' });
    if (!res.ok) return [];
    return parseBlogSitemap(await res.text());
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPages = await getBlogSitemap();

  return [...pages, ...blogPages];
}
