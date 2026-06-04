import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/utils'

const footerLinks = {
  Services: [
    { label: 'Social Media Management', href: '/services' },
    { label: 'Reels & Video Production', href: '/reels-engagement' },
    { label: 'Paid Advertising', href: '/services' },
    { label: 'SEO & Content Marketing', href: '/services' },
    { label: 'Influencer Marketing', href: '/services' },
    { label: 'Brand Strategy', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
  { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark-800 border-t border-white/5">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Growth<span className="gradient-text">Lab</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium digital marketing & social media growth agency. We turn brands into market leaders.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600/20 hover:border-primary-500/50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                  <span className="text-sm">{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary-400 flex-shrink-0" />
                  <span className="text-sm">{siteConfig.address}</span>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Get free growth tips weekly:</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 bg-dark-700 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
