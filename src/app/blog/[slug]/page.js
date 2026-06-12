import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Tag, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/data/blog'
import { siteConfig } from '@/lib/utils'

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2)
  const otherRelated = blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category).slice(0, 2 - related.length)
  const relatedPosts = [...related, ...otherRelated].slice(0, 2)

  // Article schema markup
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }

  function renderInline(text) {
    const parts = text.split(/\*\*(.*?)\*\*/g)
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="font-semibold text-white">{part}</strong> : part
    )
  }

  function renderContent(content) {
    const lines = content.split('\n').filter(line => line.trim())
    const elements = []
    let buffer = []
    let listType = null
    const flush = () => {
      if (!buffer.length) return
      const ulCls = 'list-disc pl-6 mb-5 space-y-2 text-gray-300 text-sm leading-relaxed'
      const olCls = 'list-decimal pl-6 mb-5 space-y-2 text-gray-300 text-sm leading-relaxed'
      elements.push(listType === 'ul'
        ? <ul key={'l'+elements.length} className={ulCls}>{[...buffer]}</ul>
        : <ol key={'l'+elements.length} className={olCls}>{[...buffer]}</ol>)
      buffer = []; listType = null
    }
    lines.forEach((line, i) => {
      if (line.startsWith('## ')) {
        flush()
        elements.push(<h2 key={i} className="text-2xl font-bold text-white mt-10 mb-4">{renderInline(line.replace('## ', ''))}</h2>)
      } else if (line.startsWith('### ')) {
        flush()
        elements.push(<h3 key={i} className="text-xl font-semibold text-white mt-8 mb-3">{renderInline(line.replace('### ', ''))}</h3>)
      } else if (line.startsWith('- ')) {
        if (listType !== 'ul') { flush(); listType = 'ul' }
        buffer.push(<li key={i}>{renderInline(line.slice(2))}</li>)
      } else if (/^\d+\./.test(line)) {
        if (listType !== 'ol') { flush(); listType = 'ol' }
        buffer.push(<li key={i}>{renderInline(line.replace(/^\d+\.\s/, ''))}</li>)
      } else {
        flush()
        elements.push(<p key={i} className="text-gray-300 leading-relaxed mb-4">{renderInline(line)}</p>)
      }
    })
    flush()
    return elements
  }

  const contentParagraphs = renderContent(post.content)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-hero-gradient overflow-hidden">
        <div className="container-custom relative z-10 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs bg-primary-600 text-white px-3 py-1 rounded-full font-semibold">{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="text-xs text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">{post.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <Image src={post.authorAvatar} alt={post.author} width={44} height={44} className="rounded-full" />
            <div>
              <p className="text-white font-semibold text-sm">{post.author}</p>
              <p className="text-gray-500 text-xs">{post.authorRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="container-custom max-w-4xl -mt-4 mb-0">
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article Body */}
            <article className="lg:col-span-2 prose prose-invert max-w-none">
              <div className="space-y-1">{contentParagraphs}</div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Box */}
              <div className="card-dark bg-gradient-to-br from-primary-600/10 to-cyan-600/5 border-primary-500/30">
                <h3 className="text-lg font-bold text-white mb-2">Ready to Apply This?</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Book a free strategy call and let our team implement this for your brand.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                  Book Free Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Tags */}
              <div className="card-dark">
                <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-cyan-400" /> Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-dark-700 border border-white/10 text-gray-400 px-3 py-1 rounded-full hover:border-primary-500/50 hover:text-white transition-colors cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="card-dark">
                  <h3 className="text-sm font-semibold text-white mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link key={related.id} href={`/blog/${related.slug}`} className="flex gap-3 group">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={related.image} alt={related.title} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug line-clamp-2">
                            {related.title}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">{related.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
