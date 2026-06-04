import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Target, Heart, Lightbulb, TrendingUp } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'About Us',
  description:
    'Learn about GrowthLab Agency — our story, mission, values, and the expert team behind 500+ brand growth stories.',
}

const values = [
  { icon: Target, title: 'Results First', desc: 'We measure everything. Vanity metrics mean nothing. We focus on revenue, leads, and real business outcomes.' },
  { icon: Heart, title: 'Client Partnership', desc: 'We treat your brand like our own. Your growth is our success, and we\'re invested in the long game with you.' },
  { icon: Lightbulb, title: 'Creative Excellence', desc: 'Every piece of content we produce reflects our obsession with quality, creativity, and staying ahead of trends.' },
  { icon: TrendingUp, title: 'Continuous Learning', desc: 'Digital marketing evolves daily. We invest heavily in staying on the cutting edge so your brand always has an advantage.' },
]

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Chief Strategy Officer',
    bio: 'Former Head of Growth at two Y Combinator startups. Alex has managed $20M+ in digital ad spend and built social media audiences totaling 10M+ followers for client brands.',
    avatar: 'https://ui-avatars.com/api/?name=Alex+Rivera&background=2563eb&color=fff&size=200',
  },
  {
    name: 'Maya Thompson',
    role: 'Head of Paid Media',
    bio: 'Meta Certified Media Buyer and Google Ads specialist with 7 years of experience. Maya has generated over $30M in tracked ad revenue across e-commerce, SaaS, and service brands.',
    avatar: 'https://ui-avatars.com/api/?name=Maya+Thompson&background=0891b2&color=fff&size=200',
  },
  {
    name: 'Jordan Lee',
    role: 'Head of Content & Reels',
    bio: 'Former TikTok creator with 2M+ personal followers. Jordan leads our content team and has produced 50+ viral Reels for client brands with millions of cumulative views.',
    avatar: 'https://ui-avatars.com/api/?name=Jordan+Lee&background=7c3aed&color=fff&size=200',
  },
  {
    name: 'Sam Parker',
    role: 'SEO Director',
    bio: 'Technical SEO expert with a decade of experience ranking competitive keywords. Sam has helped clients build organic traffic channels that drive 60%+ of their revenue.',
    avatar: 'https://ui-avatars.com/api/?name=Sam+Parker&background=059669&color=fff&size=200',
  },
]

const milestones = [
  { year: '2019', event: 'GrowthLab founded with 3 clients and a big dream.' },
  { year: '2020', event: 'Grew to 50 clients. Launched our Reels production service.' },
  { year: '2021', event: 'Hit $1M in client ad spend managed. Expanded team to 12.' },
  { year: '2022', event: 'Named Top 10 Social Media Agency by DigitalMarketer Magazine.' },
  { year: '2023', event: '300 active clients. $8M+ ad spend managed. Team of 25.' },
  { year: '2024', event: '500+ brands grown. $12M+ ad revenue managed. Going global.' },
]

export default function AboutPage() {
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
            Our Story
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Built by Marketers,{' '}
            <span className="gradient-text">for Brands That Want to Win</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            GrowthLab was founded with one belief: every brand deserves a marketing partner that
            treats their growth like their own.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="tag">
                <span className="w-6 h-px bg-cyan-400 inline-block" />
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5">
                We Exist to Turn Your Brand into a Market Leader
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                In 2019, our founder Alex Rivera was frustrated. He'd seen too many brilliant brands fail
                because their marketing agency was more interested in retainers than results. Agencies
                that over-promised, under-delivered, and hid behind jargon.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                GrowthLab was built to be the opposite. We started with three clients and a simple
                promise: we will treat your brand like our own, move fast, and only stay if we're
                delivering real results.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Five years later, we've helped over 500 brands build lasting digital presences, generated
                $12M+ in ad revenue for our clients, and built a team of 25 specialists who genuinely
                love what they do.
              </p>
              <Link href="/contact" className="btn-primary">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              {/* Timeline */}
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-5 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {m.year}
                      </div>
                      {i < milestones.length - 1 && <div className="w-px h-4 bg-primary-800 mt-1" />}
                    </div>
                    <div className="card-dark flex-1 py-3 px-4 text-sm text-gray-300">{m.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom">
          <SectionHeader
            tag="Our Values"
            title="What We Stand For"
            subtitle="These aren't corporate buzzwords. They're the principles every team member lives by."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-glow text-center">
                <div className="w-12 h-12 bg-primary-600/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <SectionHeader
            tag="Meet the Team"
            title="The People Behind Your Growth"
            subtitle="Senior specialists, not junior assistants. Every GrowthLab client gets experienced professionals."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card-glow text-center">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="rounded-2xl mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-xs text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's have a conversation about your brand's goals and how we can help you achieve them faster than you thought possible.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Book Your Free Strategy Call <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
