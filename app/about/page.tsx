import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { products } from '@/lib/products'
import { SITE, SOCIAL } from '@/lib/constants'
import {
  ActivityIcon,
  ShieldIcon,
  ZapIcon,
  ArrowRightIcon,
  DiscordIcon,
} from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Edison Labs is an independent software studio in Chicago building practical digital products around blockchain, AI, simulation, and emerging technology.',
  openGraph: {
    title: 'About | Edison Labs',
    description: 'An independent software studio in Chicago.',
    url: `${SITE.url}/about`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Edison Labs' }],
  },
  twitter: { card: 'summary_large_image', title: 'About | Edison Labs' },
}

const pillars = [
  {
    icon: <ZapIcon size={22} />,
    title: 'Ship deliberately.',
    body: 'Build focused products with clear purpose. No bloat, no noise, no feature creep. Every product starts with a specific problem worth solving — and we don\'t ship until we\'ve solved it properly.',
  },
  {
    icon: <ShieldIcon size={22} />,
    title: 'Build independently.',
    body: 'Each product is designed to stand on its own. One studio, many products — but no artificial bundling, no lock-in, no ecosystem dependency. Users choose what they want.',
  },
  {
    icon: <ActivityIcon size={22} />,
    title: 'Keep products focused.',
    body: 'Solve one problem well. Resist scope creep, resist trend-chasing. A tool that does one thing exceptionally is more valuable than a platform that does ten things adequately.',
  },
]

export default function AboutPage() {
  const liveProducts = products.filter((p) => p.status === 'live')

  return (
    <div className="relative z-10 min-h-screen">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-28 pb-20">
        <Container>
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            About Edison Labs
          </p>
          <h1
            className="font-black tracking-[-0.04em] text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            An independent<br />
            software studio.
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-[580px]">
            Based in Chicago. Building practical digital products around blockchain, AI, simulation, and other emerging technology.
          </p>
        </Container>
      </section>

      {/* ── Brand quote ───────────────────────────────────── */}
      <section
        className="py-section border-y border-border-default"
        style={{ background: 'rgba(17,20,24,0.6)' }}
      >
        <Container narrow>
          <FadeIn>
            <blockquote className="relative text-center">
              {/* decorative quote mark */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-[96px] leading-none text-accent opacity-10 select-none font-black"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p
                className="relative font-bold text-white tracking-[-0.025em] leading-tight"
                style={{ fontSize: 'clamp(22px, 3.5vw, 40px)' }}
              >
                Each product begins as an experiment.<br className="hidden sm:block" /> The best experiments become polished products.
              </p>
              <footer className="mt-6 text-text-muted text-sm font-medium">
                — Edison Labs
              </footer>
            </blockquote>
          </FadeIn>
        </Container>
      </section>

      {/* ── What we do ────────────────────────────────────── */}
      <section className="py-section">
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-5">
                  Who we are
                </p>
                <h2
                  className="font-bold tracking-[-0.03em] text-white mb-6 leading-tight"
                  style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
                >
                  We build software<br />for emerging technology.
                </h2>
                <div className="space-y-5">
                  <p className="text-text-muted text-base leading-[1.75]">
                    Edison Labs is an independent software studio focused on building practical digital products. We create focused tools around blockchain, artificial intelligence, simulation, and developer infrastructure.
                  </p>
                  <p className="text-text-muted text-base leading-[1.75]">
                    We don&apos;t position ourselves as a crypto company, an AI company, or a racing analytics company. We&apos;re a software studio that happens to work at the intersection of interesting technology and real user needs.
                  </p>
                  <p className="text-text-muted text-base leading-[1.75]">
                    Every product starts in The Lab — a deliberate space for experimentation before commitment. When an experiment reveals something worth building properly, it becomes a product. When it doesn&apos;t, we learn and move on.
                  </p>
                </div>
              </div>

              {/* Stats + product count */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: liveProducts.length.toString(), label: 'Live products' },
                    { value: '1', label: 'In development' },
                    { value: '5', label: 'Lab experiments' },
                    { value: '2025', label: 'Founded' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-card-bg border border-border-default rounded-btn p-6 text-center"
                    >
                      <div className="text-3xl font-black text-accent mb-1">{s.value}</div>
                      <div className="text-sm text-text-muted">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Location */}
                <div className="bg-card-bg border border-border-default rounded-btn px-6 py-5 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse-badge flex-shrink-0" />
                  <span className="text-text-muted text-sm">
                    Based in <span className="text-white font-medium">Chicago, Illinois</span>
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Philosophy pillars ────────────────────────────── */}
      <section
        className="py-section border-t border-border-default"
        style={{ background: 'rgba(17,20,24,0.6)' }}
      >
        <Container>
          <FadeIn>
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-4">
              Studio philosophy
            </p>
            <h2
              className="font-bold tracking-[-0.03em] text-white mb-14"
              style={{ fontSize: 'clamp(26px, 3.5vw, 42px)' }}
            >
              How we work
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div className="group bg-bg border border-border-default rounded-card p-8 h-full transition-all duration-200 hover:border-[var(--accent-border-hover)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                  <div className="w-12 h-12 flex items-center justify-center rounded-btn bg-[var(--accent-soft)] border border-[var(--accent-border)] text-accent mb-6 transition-all duration-200 group-hover:bg-[rgba(77,163,255,0.14)]">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-[-0.01em]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-[1.75]">
                    {pillar.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Products strip ────────────────────────────────── */}
      <section className="py-section border-t border-border-default">
        <Container>
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-3">
                  What we&apos;ve built
                </p>
                <h2
                  className="font-bold tracking-[-0.03em] text-white"
                  style={{ fontSize: 'clamp(24px, 3vw, 36px)' }}
                >
                  Live products
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-white transition-colors duration-150 focus-ring-offset"
              >
                View all products
                <ArrowRightIcon size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {liveProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group flex items-center gap-3 bg-card-bg border border-border-default rounded-btn px-4 py-3 transition-all duration-200 hover:border-[var(--accent-border-hover)] focus-ring"
                >
                  <span className="text-accent text-xs font-semibold truncate group-hover:text-white transition-colors duration-150">
                    {product.name}
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="pb-section border-t border-border-default pt-section">
        <Container narrow>
          <FadeIn>
            <div className="relative bg-card-bg border border-border-default rounded-card px-8 sm:px-14 py-14 text-center overflow-hidden">
              <div className="community-glow" aria-hidden="true" />
              <h2
                className="relative z-10 font-bold tracking-[-0.03em] text-white mb-4"
                style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
              >
                Want to know what&apos;s next?
              </h2>
              <p className="relative z-10 text-text-muted text-base leading-[1.7] max-w-[440px] mx-auto mb-8">
                Join the Discord to follow the experiments, get early access to new products, and see what&apos;s coming out of The Lab.
              </p>
              <div className="relative z-10 flex flex-wrap gap-4 justify-center">
                <Button
                  href={SOCIAL.discord}
                  variant="discord"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiscordIcon size={20} />
                  Join the Discord
                </Button>
                <Button href="/contact" variant="secondary">
                  Get in touch
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  )
}
