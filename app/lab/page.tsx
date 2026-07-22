import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { ExperimentCard } from '@/components/ui/experiment-card'
import { labExperiments } from '@/lib/products'
import { SITE, SOCIAL } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { DiscordIcon, ArrowRightIcon } from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'The Lab',
  description:
    'Where Edison Labs experiments live before they become products. Five active areas of exploration: AI systems, prediction markets, simulation analytics, developer tools, and productivity software.',
  openGraph: {
    title: 'The Lab | Edison Labs',
    description: 'Where experiments live before they become products.',
    url: `${SITE.url}/lab`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'The Lab — Edison Labs' }],
  },
  twitter: { card: 'summary_large_image', title: 'The Lab | Edison Labs' },
}

export default function LabPage() {
  return (
    <div className="relative z-10 min-h-screen">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-28 pb-16">
        <Container>
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            The Lab
          </p>
          <h1
            className="font-black tracking-[-0.04em] text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            Where experiments live.
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-[600px] mb-6">
            Not everything we build ships as a product — and that&apos;s intentional. The Lab is where we invest time in areas we&apos;re curious about before we know whether they&apos;ll become products. The exploration itself is valuable.
          </p>
          <p className="text-text-muted text-base leading-relaxed max-w-[560px]">
            Each area below represents active research and prototyping happening at Edison Labs right now. Some will ship. Some won&apos;t. All of them are teaching us something.
          </p>
        </Container>
      </section>

      {/* ── Experiments grid ──────────────────────────────── */}
      <section className="pb-section">
        <Container>
          {/* Section divider */}
          <FadeIn>
            <div className="flex items-center gap-4 mb-10">
              <span className="text-sm font-semibold uppercase tracking-[0.1em] text-text-muted whitespace-nowrap">
                Active Areas
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-border-default to-transparent" />
              <span className="text-sm text-text-muted tabular-nums">
                {labExperiments.length} experiments
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labExperiments.map((experiment, i) => (
              <FadeIn key={experiment.label} delay={i * 0.07}>
                <ExperimentCard experiment={experiment} index={i} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Philosophy ────────────────────────────────────── */}
      <section
        className="py-section border-t border-border-default"
        style={{ background: 'rgba(17,20,24,0.6)' }}
      >
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2
                  className="font-bold tracking-[-0.03em] text-white mb-6"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
                >
                  How experiments become products
                </h2>
                <div className="space-y-5">
                  <p className="text-text-muted text-base leading-[1.75]">
                    Every product at Edison Labs started as a question. The Juice began as an experiment in on-chain P2P settlement. F1SimHub started as a personal dashboard built out of frustration with existing sim racing tools.
                  </p>
                  <p className="text-text-muted text-base leading-[1.75]">
                    The Lab is where those questions get answered — or where we learn they were the wrong questions. We don&apos;t commit to shipping something until we understand it well enough to ship it properly.
                  </p>
                  <p className="text-text-muted text-base leading-[1.75]">
                    If you&apos;re interested in what&apos;s coming next, the Discord is where early access and experiment updates land first.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '5', label: 'Active areas', sub: 'Currently exploring' },
                  { value: '4', label: 'Live products', sub: 'Shipped from the lab' },
                  { value: '1', label: 'In development', sub: 'Atlas — coming soon' },
                  { value: '∞', label: 'Questions', sub: 'Worth asking' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-bg border border-border-default rounded-btn p-6 text-center"
                  >
                    <div className="text-3xl font-black text-accent mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
                    <div className="text-xs text-text-muted">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-section">
        <Container narrow>
          <FadeIn>
            <div className="relative bg-card-bg border border-border-default rounded-card px-8 sm:px-14 py-14 text-center overflow-hidden">
              <div className="community-glow" aria-hidden="true" />
              <h2
                className="relative z-10 font-bold tracking-[-0.03em] text-white mb-4"
                style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}
              >
                Follow the experiments
              </h2>
              <p className="relative z-10 text-text-muted text-base leading-[1.7] max-w-[460px] mx-auto mb-8">
                Early access to new experiments, updates from the lab, and previews of upcoming products — all in the Discord.
              </p>
              <Button
                href={SOCIAL.discord}
                variant="discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordIcon size={20} />
                Join the Discord
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  )
}
