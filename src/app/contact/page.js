import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react'
import ContactForm from '@/components/ui/ContactForm'
import { siteConfig } from '@/lib/utils'

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with GrowthLab Agency. Book a free strategy call or send us a message — we respond within 24 hours.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    desc: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    desc: 'Mon–Fri, 9am–6pm EST',
  },
  {
    icon: MapPin,
    label: 'Our Office',
    value: siteConfig.address,
    href: '#',
    desc: 'By appointment only',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon – Fri: 9am – 6pm EST',
    href: null,
    desc: 'Emergency support available',
  },
]

const reasons = [
  { icon: MessageSquare, title: 'Quick Response', desc: 'We reply to every inquiry within 24 hours, guaranteed.' },
  { icon: Calendar, title: 'Free Strategy Call', desc: '30-minute consultation — no sales pressure, real advice.' },
  { icon: Clock, title: 'Fast Onboarding', desc: 'Most clients are live within 5 business days of signing.' },
]

export default function ContactPage() {
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
            Let's Connect
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Start Your <span className="gradient-text">Growth Journey</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Book a free strategy call or send us a message. Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Whether you're ready to get started or just exploring your options, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href, desc }) => (
                  <div key={label} className="flex items-start gap-4 card-dark py-4 px-5">
                    <div className="w-10 h-10 bg-primary-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
                      {href && href !== '#' ? (
                        <a href={href} className="text-white font-medium text-sm hover:text-primary-400 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-white font-medium text-sm">{value}</p>
                      )}
                      <p className="text-xs text-gray-600 mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Contact Us */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Why Reach Out?</h3>
                {reasons.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{title}</p>
                      <p className="text-gray-500 text-xs">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="card-dark">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-1">Send Us a Message</h2>
                  <p className="text-gray-400 text-sm">Fill out the form and we'll be in touch within 24 hours.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
