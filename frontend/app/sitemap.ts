import { MetadataRoute } from 'next';

/**
 * Generate a sitemap for the website
 * @returns Sitemap configuration
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Get domain dynamically from environment or default to localhost
  const baseUrl = 'http://ankan.site';

  // Current date
  const currentDate = new Date().toISOString();

  // Define routes
  // You can add more routes as needed
  return [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];
}
