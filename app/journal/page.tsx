import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { JournalCard } from '@/components/ui/journal-card'
import { journalEntries } from '@/lib/journal'
import { SITE, SOCIAL } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { SubstackIcon } from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'Studio updates from Edison Labs — product launches, experiments, and thoughts on building software for emerging technology.',
  openGraph: {
    title: 'Journal | Edison Labs',
    description: 'Studio updates from Edison Labs.',
    url: `${SITE.url}/journal`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Journal — Edison Labs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Journal | Edison Labs' },
}

export default function JournalPage() {
  // Sort newest first (already ordered in data, but be defensive)
  const sorted = [...journalEntries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const [featured, ...rest] = sorted

  return (
    <div className="relative z-10 min-h-screen">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-28 pb-16">
        <Container>
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Journal
          </p>
          <h1
            className="font-black tracking-[-0.04em] text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            Studio updates.
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-[540px]">
            Product launches, experiments, and occasional thoughts on building software for emerging technology.
          </p>
        </Container>
      </section>

      {/* ── Featured entry ────────────────────────────────── */}
      <section className="pb-10">
        <Container>
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-semibold uppercase tracking-[0.1em] text-text-muted whitespace-nowrap">
                Latest
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-border-default to-transparent" />
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <JournalCard entry={featured} featured />
          </FadeIn>
        </Container>
      </section>

      {/* ── Rest of entries ───────────────────────────────── */}
      {rest.length > 0 && (
        <section className="pb-section">
          <Container>
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm font-semibold uppercase tracking-[0.1em] text-text-muted whitespace-nowrap">
                  Archive
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-border-default to-transparent" />
                <span className="text-sm text-text-muted tabular-nums">
                  {rest.length} more
                </span>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rest.map((entry, i) => (
                <FadeIn key={entry.slug} delay={0.06 + i * 0.06}>
                  <JournalCard entry={entry} />
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── Subscribe CTA ─────────────────────────────────── */}
      <section
        className="py-section border-t border-border-default"
        style={{ background: 'rgba(17,20,24,0.6)' }}
      >
        <Container narrow>
          <FadeIn>
            <div className="text-center">
              <h2
                className="font-bold tracking-[-0.03em] text-white mb-4"
                style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}
              >
                Get updates in your inbox
              </h2>
              <p className="text-text-muted text-base leading-[1.7] max-w-[440px] mx-auto mb-8">
                New entries land on Substack first. No spam — just signal when something worth sharing happens at the studio.
              </p>
              <Button
                href={SOCIAL.substack}
                variant="substack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SubstackIcon size={18} />
                Subscribe on Substack
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  )
}
