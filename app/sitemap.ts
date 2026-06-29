import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://goodbotai.tech'
  const now = new Date()

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/brewbot`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}