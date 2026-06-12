import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, TrendingUp, Users, Star, Play, CheckCircle, Zap, BarChart3, Target, Award, ChevronRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { portfolioItems } from '@/data/portfolio'
import { blogPosts } from '@/data/blog'
import { siteConfig } from '@/lib/utils'

const stats = [
  { value: '500+', label: 'Brands Grown' },
  { value: '$12M+', label: 'Ad Revenue Managed' },
  { value: '4.9Ã¢ÂÂ', label: 'Average Rating' },
  { value: '98%', label: 'Client Retention' },
]

const whyUs = [
  {
    icon: BarChart3,
    title: 'Data-Driven Strategy',
    desc: 'Every decision is backed by analytics. We A/B test constantly, track every KPI, and optimize based on what actually works Ã¢ÂÂ not guesses.',
  },
  {
    icon: Zap,
    title: 'Speed to Results',
    desc: 'We move fast. Most clients see measurable growth within the first 30 days. No endless onboarding cycles.',
  },
  {
    icon: Target,
    title: 'Niche-Specific Approach',
    desc: 'We don\'t apply generic tactics. Your strategy is built around your specific industry, audience, and competitive landscape.',
  },
  {
    icon: Award,
    title: 'Award-Winning Creative',
    desc: 'Our content team has produced viral Reels, campaigns, and brand assets that stop the scroll and drive action.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Team',
    desc: 'You get a senior strategist, content creator, and account manager assigned to your brand Ã¢ÂÂ not a junior assistant.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Reporting',
    desc: 'Live dashboards and monthly reports. You always know exactly where your budget is going and what it\'s producing.',
  },
]

export default function HomePage() {
  const featuredServices = services.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  const featuredPortfolio = portfolioItems.slice(0, 3)
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <>
      {/* Ã¢ÂÂÃ¢ÂÂ HERO Ã¢ÂÂÃ¢ÂÂ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-3xl" />
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-primary-800/15 rounded-full blur-3xl" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="container-custom relative z-10 text-center py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-cyan-300 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Trusted by 500+ Brands Worldwide
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6 animate-slide-up">
            Scale Your Brand.{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">Dominate Social Media.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up animation-delay-200">
            We are a premium digital marketing agency that turns brands into market leaders through
            viral content, paid advertising, and data-driven social media growth strategies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-400">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              Get Free Strategy Call <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/portfolio" className="btn-outline-white text-base px-8 py-4">
              <Play className="w-4 h-4 fill-white" /> See Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in animation-delay-600">
            {stats.map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4">
                <div className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent" />
      </section>

      {/* Ã¢ÂÂÃ¢ÂÂ SERVICES OVERVIEW Ã¢ÂÂÃ¢ÂÂ */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <SectionHeader
            tag="What We Do"
            title="Everything Your Brand Needs to Grow"
            subtitle="From viral Reels to high-ROI ad campaigns Ã¢ÂÂ we handle every aspect of your digital growth."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <Link key={service.id} href={`/services/${service.slug}`} className="card-glow group block">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
                <ul className="space-y-2 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ã¢ÂÂÃ¢ÂÂ WHY CHOOSE US Ã¢ÂÂÃ¢ÂÂ */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            tag="Why GrowthLab"
            title="The Agency That Delivers, Not Just Promises"
            subtitle="Most agencies talk about growth. We show it. Here's what sets us apart."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-dark group hover:border-primary-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary-600/10 flex items-center justify-center mb-4 group-hover:bg-primary-600/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ã¢ÂÂÃ¢ÂÂ PORTFOLIO HIGHLIGHTS Ã¢ÂÂÃ¢ÂÂ */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <SectionHeader
            tag="Case Studies"
            title="Real Brands. Real Results."
            subtitle="Numbers don't lie. Here's a snapshot of what we've achieved for our clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPortfolio.map((item) => (
              <div key={item.id} className="group card-dark overflow-hidden p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.client}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs bg-primary-600/80 text-white px-2 py-1 rounded-md">{item.service}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-1">{item.industry}</p>
                  <h3 className="text-lg font-bold text-white mb-3">{item.client}</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {item.results.map((r) => (
                      <div key={r.label} className="text-center">
                        <div className="text-sm font-bold gradient-text">{r.value}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-secondary">
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ã¢ÂÂÃ¢ÂÂ TESTIMONIALS Ã¢ÂÂÃ¢ÂÂ */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            tag="Client Love"
            title="Don't Take Our Word For It"
            subtitle="Over 500 brands have grown with GrowthLab. Here's what some of them have to say."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((t) => (
              <div key={t.id} className="card-glow flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                  <span className="ml-auto text-xs font-bold gradient-text">{t.metric}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-secondary">
              Read All Reviews <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ã¢ÂÂÃ¢ÂÂ BLOG HIGHLIGHTS Ã¢ÂÂÃ¢ÂÂ */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <SectionHeader
            tag="Free Resources"
            title="Grow Your Knowledge, Grow Your Brand"
            subtitle="Actionable marketing insights from our team of experts. No fluff, just results."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="card-dark group overflow-hidden p-0 block">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs bg-primary-600 text-white px-2 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">{post.date} ÃÂ· {post.readTime}</p>
                  <h3 className="text-base font-bold text-white group-hover:gradient-text transition-all duration-200 leading-snug">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/blog" className="btn-secondary">
              View All Articles <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ã¢ÂÂÃ¢ÂÂ CONTACT CTA Ã¢ÂÂÃ¢ÂÂ */}
      <section className="section-padding bg-gradient-to-br from-primary-900/50 to-dark-900 border-y border-primary-800/30">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <p className="tag justify-center">
              <span className="w-6 h-px bg-cyan-400 inline-block" />
              Ready to Scale?
              <span className="w-6 h-px bg-cyan-400 inline-block" />
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-5">
              Let's Build Your{' '}
              <span className="gradient-text">Growth Engine</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Book a free 30-minute strategy call. We'll audit your current presence, identify your
              biggest opportunities, and show you exactly how we'd grow your brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Book Free Strategy Call <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-outline-white text-base px-8 py-4">
                Explore Services
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No obligation. No credit card. Just a straight-talk strategy session.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
