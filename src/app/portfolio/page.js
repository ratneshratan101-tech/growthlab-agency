import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { portfolioItems } from '@/data/portfolio'

export const metadata = {
  title: 'Portfolio & Case Studies',
  description:
    'See real results from GrowthLab Agency\'s clients. Case studies across social media growth, paid ads, SEO, and influencer marketing.',
}

const stats = [
  { value: '500+', label: 'Brands Grown' },
  { value: '$12M+', label: 'Ad Spend Managed' },
  { value: '2B+', label: 'Content Impressions' },
  { value: '98%', label: 'Client Retention Rate' },
]

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="tag justify-center">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            Our Work
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Results We're{' '}
            <span className="gradient-text">Proud Of</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real brands. Real budgets. Real results. These case studies show exactly what we've achieved — no cherry-picking.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-dark-800 border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group card-dark overflow-hidden p-0 flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.client}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs bg-primary-600/90 text-white px-2.5 py-1 rounded-md font-medium">
                      {item.service}
                    </span>
                    <span className="text-xs text-gray-400 bg-dark-900/80 px-2.5 py-1 rounded-md">
                      {item.industry}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{item.client}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{item.summary}</p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                    {item.results.map((r) => (
                      <div key={r.label} className="text-center">
                        <div className="text-sm font-bold gradient-text">{r.value}</div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-dark-700 text-gray-500 px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom text-center">
          <TrendingUp className="w-12 h-12 text-primary-400 mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Your Brand Could Be Next
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a free strategy call and let us show you exactly how we'd grow your brand based on your specific goals and budget.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get Your Free Growth Plan <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
