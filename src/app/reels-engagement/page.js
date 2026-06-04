import Link from 'next/link'
import { ArrowRight, Play, TrendingUp, Eye, Heart, Share2, CheckCircle, Zap } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Reels & Engagement Services',
  description:
    'GrowthLab Agency creates viral-ready Reels and short-form video content that explodes your reach, engagement, and follower growth on Instagram and TikTok.',
}

const packages = [
  {
    name: 'Starter Reels',
    price: '$797',
    period: '/month',
    desc: 'Perfect for brands just starting with short-form video.',
    features: [
      '8 Reels per month',
      'Script writing included',
      'Professional editing',
      'Caption + hashtag strategy',
      'Monthly performance report',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Growth Package',
    price: '$1,497',
    period: '/month',
    desc: 'Our most popular — for brands ready to go viral consistently.',
    features: [
      '16 Reels per month',
      'Trend monitoring & alerts',
      'A/B testing hooks',
      'Story content included',
      'Engagement management',
      'Bi-weekly strategy calls',
    ],
    cta: 'Get Started',
    highlight: true,
  },
  {
    name: 'Domination',
    price: '$2,997',
    period: '/month',
    desc: 'For established brands that want to own their niche.',
    features: [
      '30 Reels per month',
      'TikTok + Instagram + YouTube Shorts',
      'Custom motion graphics',
      'Influencer collaboration',
      'Dedicated content strategist',
      'Weekly performance reviews',
    ],
    cta: 'Get Started',
    highlight: false,
  },
]

const process = [
  {
    step: '01',
    title: 'Brand Deep Dive',
    desc: 'We audit your current content, analyze your audience, and identify what your competitors are doing right (and wrong).',
  },
  {
    step: '02',
    title: 'Content Strategy',
    desc: 'We build a 30-day content calendar with hooks, formats, trending audio selections, and CTAs tailored to your goals.',
  },
  {
    step: '03',
    title: 'Production & Editing',
    desc: 'Our creative team scripts, edits, and polishes every Reel. You review and approve before anything goes live.',
  },
  {
    step: '04',
    title: 'Publishing & Optimization',
    desc: 'We post at optimal times, monitor early engagement signals, and adjust distribution strategy in real time.',
  },
  {
    step: '05',
    title: 'Analyze & Scale',
    desc: 'Monthly reports track your key metrics. We double down on what\'s working and evolve what\'s not.',
  },
]

const metrics = [
  { icon: Eye, label: 'Avg. Views Per Reel', value: '180K+' },
  { icon: Heart, label: 'Avg. Engagement Rate', value: '7.8%' },
  { icon: TrendingUp, label: 'Follower Growth (90 Days)', value: '+340%' },
  { icon: Share2, label: 'Shares Per Viral Reel', value: '12K+' },
]

export default function ReelsEngagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/8 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-cyan-300 mb-8">
            <Play className="w-4 h-4 fill-cyan-400 text-cyan-400" />
            Viral Content That Converts
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Reels & Short-Form Video{' '}
            <span className="gradient-text">That Go Viral</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            We produce scroll-stopping Reels and TikToks with proven hooks, trending audio, and
            strategic CTAs. Our average client sees 4× their engagement within 60 days.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Start Growing with Reels <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-dark-800 border-y border-white/5">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <div className="w-10 h-10 bg-primary-600/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-2xl md:text-3xl font-black gradient-text mb-1">{value}</div>
                <div className="text-xs text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <SectionHeader
            tag="How It Works"
            title="Our 5-Step Reels Growth System"
            subtitle="We don't just make videos. We engineer growth through a proven content framework."
          />
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-primary-600 via-cyan-500 to-transparent" />
            <div className="space-y-6">
              {process.map((step, i) => (
                <div key={step.step} className="relative flex gap-6 md:gap-10">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center text-white font-black text-lg z-10">
                    {step.step}
                  </div>
                  <div className="card-dark flex-1 py-5 px-6">
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            tag="Pricing"
            title="Reels Packages for Every Stage"
            subtitle="Transparent, no-surprises pricing. Cancel anytime after 3 months."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 border flex flex-col ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-primary-600/20 to-cyan-600/10 border-primary-500/50 shadow-xl shadow-primary-600/10'
                    : 'bg-dark-700 border-white/5'
                }`}
              >
                {pkg.highlight && (
                  <div className="inline-flex items-center gap-1 text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
                    <Zap className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-5">{pkg.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-white">{pkg.price}</span>
                  <span className="text-gray-500 text-sm">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={pkg.highlight ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Need a custom package? <Link href="/contact" className="text-primary-400 hover:text-cyan-400 transition-colors">Let's talk →</Link>
          </p>
        </div>
      </section>
    </>
  )
}
