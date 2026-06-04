import { cn } from '@/lib/utils'

export default function SectionHeader({ tag, title, subtitle, className, light = false, center = true }) {
  return (
    <div className={cn('section-header', !center && 'text-left', className)}>
      {tag && (
        <p className="tag">
          <span className="w-6 h-px bg-cyan-400 inline-block" />
          {tag}
          <span className="w-6 h-px bg-cyan-400 inline-block" />
        </p>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance',
          light ? 'text-dark-900' : 'text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg max-w-2xl leading-relaxed',
            center && 'mx-auto',
            light ? 'text-gray-600' : 'text-gray-400'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
