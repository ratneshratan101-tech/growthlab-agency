'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'
import { siteConfig } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl font-bold text-white">
              Growth<span className="gradient-text">Lab</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={cn(
                      'nav-link flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/5',
                      pathname.startsWith('/services') || pathname === '/reels-engagement'
                        ? 'text-white'
                        : ''
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        servicesOpen ? 'rotate-180' : ''
                      )}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-dark-800 border border-white/10 rounded-xl shadow-xl shadow-black/40 py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'nav-link px-3 py-2 rounded-lg hover:bg-white/5',
                    pathname === item.href ? 'text-white' : ''
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
              Get Free Strategy Call
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900/98 backdrop-blur-md border-t border-white/5">
          <div className="container-custom py-4 space-y-1">
            {siteConfig.nav.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <p className="px-4 py-2 text-xs font-semibold tracking-widest uppercase text-gray-500">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-4 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors',
                    pathname === item.href ? 'text-white bg-white/5' : ''
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 pb-1">
              <Link href="/contact" className="btn-primary w-full text-center text-sm">
                Get Free Strategy Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
