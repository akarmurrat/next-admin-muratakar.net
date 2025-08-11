import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/timeline', '/work', '/blog', '/contact', '/cv', '/tesekkurler', '/admin'].map((r) => ({
    url: `https://www.muratakar.net${r}`,
    lastModified: new Date(),
  }))
  return routes
}
