'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ArrowRight, MessageSquare } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import { faqs } from '@/data/faq'

export default function FAQPage() {
  const [openItem, setOpenItem] = useState(null)

  const toggle = (key) => setOpenItem(openItem === key ? null : key)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-hero-gradient overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <p className="tag justify-center">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            Got Questions?
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything you need to know about working with GrowthLab Agency. Can't find your answer?
            <Link href="/contact" className="text-primary-400 hover:text-cyan-400 transition-colors ml-1">
              Just ask us →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="text-lg font-bold text-cyan-400 tracking-wider uppercase mb-5 flex items-center gap-2">
                  <span className="w-8 h-px bg-cyan-400 inline-block" />
                  {section.category}
                </h2>
                <div className="space-y-3">
                  {section.questions.map((item, i) => {
                    const key = `${section.category}-${i}`
                    const isOpen = openItem === key
                    return (
                      <div
                        key={key}
                        className={`card-dark transition-all duration-300 ${isOpen ? 'border-primary-500/40' : ''}`}
                      >
                        <button
                          onClick={() => toggle(key)}
                          className="w-full text-left flex items-start justify-between gap-4"
                          aria-expanded={isOpen}
                        >
                          <span className="text-white font-semibold text-base leading-snug pr-2">
                            {item.q}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                              isOpen ? 'rotate-180 text-primary-400' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="mt-4 pt-4 border-t border-white/5">
                            <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 card-dark bg-gradient-to-br from-primary-600/10 to-cyan-600/5 border-primary-500/30 text-center py-10">
            <MessageSquare className="w-10 h-10 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
              We're happy to answer any question — no matter how specific. Reach out and a real human will respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Send Us a Message <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
