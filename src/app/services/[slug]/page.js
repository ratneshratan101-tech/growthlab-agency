import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, ArrowLeft, TrendingUp } from 'lucide-react'
import VideoEmbed from '@/components/ui/VideoEmbed'
import { services } from '@/data/services'
import { siteConfig } from '@/lib/utils'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.description,
    },
  }
}

export default function ServiceDetailPage({ params }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const { theme } = service

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${theme.gradient} overflow-hidden`}>
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] ${theme.glowColor} rounded-full blur-3xl`} />
        </div>
        <div className="container-custom relative z-10">
          <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to All Services
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase ${theme.badgeText} border ${theme.badgeBorder} rounded-full px-4 py-2 mb-6`}>
                <TrendingUp className="w-3 h-3" />
                GrowthLab Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
                {service.title}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className={`btn-primary bg-gradient-to-r ${theme.btnGradient} text-base px-8 py-4`}>
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="btn-outline-white text-base px-8 py-4">
                  See Case Studies
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {service.heroStats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-5 text-center">
                  <div className={`text-2xl md:text-3xl font-black ${theme.statColor} mb-1`}>{stat.value}</div>
                  <div className="text-xs text-gray-400 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES + VIDEOS */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className={`tag justify-center ${theme.badgeText}`}>
              <span className="w-6 h-px bg-current inline-block opacity-60" />
              What&apos;s Included
              <span className="w-6 h-px bg-current inline-block opacity-60" />
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Everything Inside <span className="gradient-text">{service.title}</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Watch exactly how we work on each component of this service.
            </p>
          </div>
          <div className="space-y-16">
            {service.detailedFeatures.map((feature, idx) => (
              <div key={feature.title} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase ${theme.badgeText} mb-4`}>
                    <span className="w-8 h-px bg-current inline-block opacity-60" />
                    Feature {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{feature.desc}</p>
                  <ul className="space-y-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-gray-300 text-sm">
                        <div className={`w-5 h-5 rounded-full ${theme.iconBg} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className={`w-3 h-3 ${theme.iconText}`} />
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <VideoEmbed youtubeId={feature.videoId} title={feature.videoTitle} />
                  <p className="text-xs text-gray-600 mt-3 text-center">
                    {feature.videoId === 'PLACEHOLDER'
                      ? 'Upload your video to YouTube and replace PLACEHOLDER with your video ID'
                      : feature.videoTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className={`tag justify-center ${theme.badgeText}`}>
              <span className="w-6 h-px bg-current inline-block opacity-40" />
              Our Process
              <span className="w-6 h-px bg-current inline-block opacity-40" />
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              How We Deliver <span className="gradient-text">Results</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary-600/60 via-cyan-500/40 to-transparent" />
            <div className="space-y-5">
              {service.process.map((step) => (
                <div key={step.step} className="relative flex gap-6 md:gap-10">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${theme.btnGradient} flex items-center justify-center text-white font-black text-lg z-10`}>
                    {step.step}
                  </div>
                  <div className="card-dark flex-1 py-4 px-6">
                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Also Explore Our Other Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card-glow group">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.shortDesc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-400 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section-padding bg-gradient-to-br ${theme.gradient} border-y border-white/5`}>
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Get Started with <span className="gradient-text">{service.title}?</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Book a free strategy call and we&apos;ll show you exactly how we&apos;d approach this for your brand.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Book Free Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
