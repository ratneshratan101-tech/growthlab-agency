import { blogPosts } from '@/data/blog'
import { siteConfig } from '@/lib/utils'

export default function sitemap() {
  const staticPages = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteConfig.url}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/reels-engagement`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.url}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteConfig.url}/testimonials`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteConfig.url}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ]

  const blogPages = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
