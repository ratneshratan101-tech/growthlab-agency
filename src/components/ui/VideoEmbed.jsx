'use client'
import { useState } from 'react'
import { Play, Youtube } from 'lucide-react'

/**
 * VideoEmbed — drop-in YouTube embed with a polished placeholder.
 *
 * Usage:
 *   <VideoEmbed
 *     youtubeId="dQw4w9WgXcQ"   ← replace with your YouTube video ID
 *     title="How we build Content Calendars"
 *   />
 *
 * To get the YouTube ID: open your video → the ID is the part after "v=" in the URL
 * e.g. https://youtube.com/watch?v=ABC123  →  youtubeId="ABC123"
 *
 * If youtubeId is left as "PLACEHOLDER", a styled placeholder card is shown instead.
 */
export default function VideoEmbed({ youtubeId = 'PLACEHOLDER', title = 'Watch how we do it' }) {
  const [playing, setPlaying] = useState(false)
  const isPlaceholder = !youtubeId || youtubeId === 'PLACEHOLDER'

  if (isPlaceholder) {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden bg-dark-700 border border-white/10 aspect-video flex flex-col items-center justify-center gap-4 group">
        {/* Animated glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-cyan-600/5" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 text-center px-6">
          <div className="w-16 h-16 rounded-full bg-primary-600/20 border border-primary-500/30 flex items-center justify-center mx-auto mb-4">
            <Youtube className="w-8 h-8 text-primary-400" />
          </div>
          <p className="text-white font-semibold text-sm mb-1">{title}</p>
          <p className="text-gray-500 text-xs max-w-xs">
            Video coming soon — upload your video to YouTube and replace the placeholder ID in this component.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full rounded-2xl overflow-hidden aspect-video bg-black shadow-2xl shadow-black/40">
      {!playing ? (
        <button
          onClick={() => setPlaying(true)}
          className="absolute inset-0 w-full h-full group"
          aria-label={`Play: ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-18 h-18 w-16 h-16 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-xl shadow-red-600/40 transition-all group-hover:scale-110">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </div>
            <p className="text-white font-semibold text-sm drop-shadow-lg">{title}</p>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  )
}
