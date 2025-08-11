import type { MetadataRoute } from 'next'
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: '*', allow: '/' }], sitemap: 'https://www.muratakar.net/sitemap.xml', host: 'https://www.muratakar.net' }
}
