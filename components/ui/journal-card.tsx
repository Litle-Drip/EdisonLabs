import { JournalEntry } from '@/lib/journal'

interface JournalCardProps {
  entry: JournalEntry
  featured?: boolean
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function JournalCard({ entry, featured = false }: JournalCardProps) {
  if (featured) {
    return (
      <article className="group relative bg-card-bg border border-border-default rounded-card p-10 overflow-hidden transition-all duration-200 ease-out hover:border-[var(--accent-border-hover)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        {/* Gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-[rgba(77,163,255,0.4)] to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-bl-full bg-[rgba(77,163,255,0.05)] blur-3xl pointer-events-none" />

        {/* Category + date */}
        <div className="relative z-10 flex items-center gap-3 mb-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-badge bg-[var(--accent-soft)] text-accent border border-[var(--accent-border)]">
            {entry.category}
          </span>
          <time
            dateTime={entry.date}
            className="text-[12px] text-text-muted font-medium"
          >
            {formatDate(entry.date)}
          </time>
        </div>

        {/* Title */}
        <h2 className="relative z-10 text-[clamp(22px,2.5vw,30px)] font-bold text-white tracking-[-0.025em] leading-tight mb-4">
          {entry.title}
        </h2>

        {/* Excerpt */}
        <p className="relative z-10 text-base text-text-muted leading-[1.75] mb-8 max-w-[640px]">
          {entry.excerpt}
        </p>

        {/* Body preview — first paragraph only */}
        <p className="relative z-10 text-sm text-text-muted leading-[1.8] opacity-70 max-w-[600px] line-clamp-3">
          {entry.body[1] ?? entry.body[0]}
        </p>

        {/* Tags */}
        <div className="relative z-10 mt-8 flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-text-muted uppercase tracking-[0.08em] px-2.5 py-1 rounded-badge border border-border-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    )
  }

  return (
    <article className="group relative bg-card-bg border border-border-default rounded-card p-8 overflow-hidden transition-all duration-200 ease-out hover:border-[var(--accent-border-hover)] hover:-translate-y-0.5 hover:shadow-[0_6px_28px_rgba(0,0,0,0.4)]">
      {/* Category + date */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-0.5 rounded-badge bg-[var(--accent-soft)] text-accent border border-[var(--accent-border)]">
          {entry.category}
        </span>
        <time dateTime={entry.date} className="text-[11px] text-text-muted font-medium">
          {formatDate(entry.date)}
        </time>
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-bold text-white tracking-[-0.015em] leading-snug mb-3">
        {entry.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-text-muted leading-[1.75] line-clamp-3">
        {entry.excerpt}
      </p>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-1.5">
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium text-text-muted uppercase tracking-[0.08em] px-2 py-0.5 rounded-badge border border-border-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
