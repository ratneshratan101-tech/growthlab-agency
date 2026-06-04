import Link from 'next/link'
import { CheckCircle, ArrowRight, TrendingUp } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/data/services'

export const metadata = {
  title: 'Our Services',
  description:
    'Explore GrowthLab Agency\'s full range of digital marketing services — social media management, Reels production, paid ads, SEO, influencer marketing, and brand strategy.',
}

const iconMap = {
  Share2: TrendingUp,
  Video: TrendingUp,
  TrendingUp: TrendingUp,
  Search: TrendingUp,
  Users: TrendingUp,
  Layers: TrendingUp,
}

export default function ServicesPage() {
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
            What We Offer
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Services That <span className="gradient-text">Drive Growth</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every service we offer is designed with one goal in mind: measurable, sustainable growth for your brand.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="card-dark group hover:border-primary-500/40 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-white mb-2">{service.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-3">Includes</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    Get started with this service
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a free strategy call. We'll assess your brand and recommend exactly what will move the needle for your specific goals.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Book Free Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
