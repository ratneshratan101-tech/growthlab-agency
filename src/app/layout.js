import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { siteConfig } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'digital marketing agency',
    'social media growth',
    'Instagram growth',
    'TikTok marketing',
    'reels production',
    'paid advertising',
    'SEO agency',
    'influencer marketing',
    'brand strategy',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ['/og-image.jpg'],
    creator: '@growthlabagency',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Analytics — replace G-XXXXXXXXXX with your tracking ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        {/* Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MarketingAgency',
              name: siteConfig.name,
              url: siteConfig.url,
              description: siteConfig.description,
              email: siteConfig.email,
              telephone: siteConfig.phone,
              address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
              sameAs: Object.values(siteConfig.social),
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-dark-900 text-gray-100 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
