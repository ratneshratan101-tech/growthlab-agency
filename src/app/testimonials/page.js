import Link from 'next/link'
import Image from 'next/image'
import { Star, ArrowRight, Quote } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { testimonials } from '@/data/testimonials'

export const metadata = {
  title: 'Client Testimonials',
  description:
    'Read what GrowthLab Agency clients say about their results. Real reviews from brands that have grown their social media and revenue with us.',
}

const aggregateStats = [
  { value: '4.9/5', label: 'Average Rating' },
  { value: '500+', label: 'Happy Clients' },
  { value: '98%', label: 'Would Recommend' },
  { value: '4.2 yr', label: 'Avg. Client Tenure' },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-600/5 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <p className="tag justify-center">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            Social Proof
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Our Clients <span className="gradient-text">Say It Best</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Don't take our word for it. These are real stories from real brands we've helped grow.
          </p>
          {/* Stars */}
          <div className="flex items-center justify-center gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-white font-bold">4.9</span>
            <span className="text-gray-500 text-sm">(500+ reviews)</span>
          </div>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="py-10 bg-dark-800 border-y border-white/5">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {aggregateStats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="card-glow flex flex-col">
                <Quote className="w-8 h-8 text-primary-600/40 mb-4" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 flex-1">"{t.text}"</p>
                <div className="pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full" />
                      <div>
                        <p className="text-white font-semibold text-sm">{t.name}</p>
                        <p className="text-gray-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-600 mb-0.5">Result</p>
                      <p className="text-sm font-bold gradient-text">{t.metric}</p>
                    </div>
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join 500+ brands that have trusted GrowthLab to build their digital presence. Book your free strategy call today.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
