import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const siteConfig = {
  name: 'GrowthLab Agency',
  tagline: 'Scale Your Brand. Dominate Social Media.',
  description:
    'GrowthLab Agency is a premium digital marketing & social media growth agency helping brands explode their online presence with data-driven strategies, viral reels, and performance marketing.',
  url: 'https://www.growthlabagency.com',
  email: 'hello@growthlabagency.com',
  phone: '+1 (555) 000-0000',
  address: 'New York, NY 10001, United States',
  social: {
    instagram: 'https://instagram.com/growthlabagency',
    twitter: 'https://twitter.com/growthlabagency',
    linkedin: 'https://linkedin.com/company/growthlabagency',
    youtube: 'https://youtube.com/@growthlabagency',
    facebook: 'https://facebook.com/growthlabagency',
  },
  nav: [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'All Services', href: '/services' },
        { label: 'Social Media Management', href: '/services/social-media-management' },
        { label: 'Reels & Video Production', href: '/services/reels-video-production' },
        { label: 'Paid Advertising', href: '/services/paid-advertising' },
        { label: 'SEO & Content Marketing', href: '/services/seo-content' },
        { label: 'Influencer Marketing', href: '/services/influencer-marketing' },
        { label: 'Brand Strategy & Identity', href: '/services/brand-strategy' },
      ],
    },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
}
