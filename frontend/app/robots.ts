import { MetadataRoute } from 'next';

/**
 * Generate robots.txt file
 * @returns Robots.txt configuration
 */
export default function robots(): MetadataRoute.Robots {
  // Get domain dynamically from environment or default to localhost
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
    'http://ankan.site';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
