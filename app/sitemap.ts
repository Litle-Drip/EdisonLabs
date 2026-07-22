import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { products } from '@/lib/products'
import { journalEntries } from '@/lib/journal'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/products`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/lab`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/journal`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/risk`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p.status === 'live' ? 0.8 : 0.5,
  }))

  // Journal detail routes omitted until /journal/[slug] pages are implemented

  return [...staticRoutes, ...productRoutes]
}
