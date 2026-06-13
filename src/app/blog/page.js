'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Clock, ArrowRight } from 'lucide-react'
import { blogPosts, categories } from '@/data/blog'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = blogPosts.filter((post) => {
    const matchCat = activeCategory === 'All' || post.category === activeCategory
    const matchSearch =
      query === '' ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchSearch
  })

  const featured = blogPosts[0]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-hero-gradient overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <p className="tag justify-center">
            <span className="w-6 h-px bg-cyan-400 inline-block" />
            The GrowthLab Blog
            <span className="w-6 h-px bg-cyan-400 inline-block" />
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Marketing Insights That{' '}
            <span className="gradient-text">Actually Work</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Actionable strategies from the team managing $12M+ in social media growth.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-field pl-11"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {!query && activeCategory === 'All' && (
        <section className="py-12 bg-dark-900">
          <div className="container-custom">
            <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 card-dark overflow-hidden p-0">
              <div className="relative h-64 lg:h-full min-h-[280px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-800/60 hidden lg:block" />
                <span className="absolute top-4 left-4 text-xs bg-primary-600 text-white px-3 py-1 rounded-full font-semibold">
                  Featured
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs text-cyan-400 font-semibold mb-2">{featured.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-200 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 mb-6">
                  <Image src={featured.author.avatar} alt={featured.author.name} width={32} height={32} className="rounded-full" />
                  <span className="text-sm text-gray-300">{featured.author.name}</span>
                  <span className="text-gray-600">·</span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" /> {featured.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-6 bg-dark-900 sticky top-20 z-30 border-b border-white/5">
        <div className="container-custom flex items-center gap-3 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark-700 text-gray-400 hover:text-white hover:bg-dark-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found for "{query}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="card-dark group overflow-hidden p-0 block">
                  <div className="relative h-48 overflow-hidden">
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
                    <div className="flex items-center gap-3 mb-3">
                      <Image src={post.author.avatar} alt={post.author.name} width={24} height={24} className="rounded-full" />
                      <span className="text-xs text-gray-400">{post.author.name}</span>
                      <span className="text-gray-600">·</span>
                      <span className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-white group-hover:text-primary-400 transition-colors leading-snug mb-2">
                      {post.title}
                    </h2>
                    <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
