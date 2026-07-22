import Link from 'next/link'
import { Product } from '@/lib/products'
import { StatusBadge } from './status-badge'
import { Button } from './button'
import { FadeIn } from './fade-in'
import { Container } from './container'
import { ProductIcon, ExternalLinkIcon, ArrowRightIcon } from './icons'

interface ProductPageLayoutProps {
  product: Product
}

export function ProductPageLayout({ product }: ProductPageLayoutProps) {
  const isComingSoon = product.status === 'coming-soon'

  return (
    <div className="relative z-10">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Per-product accent glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none blur-[120px] opacity-20 rounded-full"
          style={{ background: product.accentColor }}
          aria-hidden="true"
        />

        <Container>
          <FadeIn>
            {/* Back link */}
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-text-muted hover:text-accent text-sm mb-8 transition-colors duration-150 focus-ring-offset"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              All Products
            </Link>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Left: product info */}
              <div className="flex-1 min-w-0">
                {/* Icon + status */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-[16px] bg-[var(--accent-soft)] border border-[var(--accent-border-hover)] text-accent flex-shrink-0">
                    <span className="drop-shadow-[0_0_8px_rgba(77,163,255,0.6)]">
                      <ProductIcon iconKey={product.icon} size={32} />
                    </span>
                  </div>
                  <StatusBadge status={product.status} />
                </div>

                {/* Name + tag */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h1
                    className="font-black tracking-[-0.04em] text-white leading-tight"
                    style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
                  >
                    {product.name}
                  </h1>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-tag bg-[var(--accent-soft)] text-accent border border-[var(--accent-border)]">
                    {product.tag}
                  </span>
                </div>

                {/* Tagline */}
                <p
                  className="text-text-muted font-light leading-relaxed mb-8 max-w-[520px]"
                  style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
                >
                  {product.longDescription}
                </p>

                {/* CTA */}
                {isComingSoon ? (
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button
                      href={product.url}
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.ctaLabel}
                      <ArrowRightIcon size={18} />
                    </Button>
                    <span className="text-text-muted text-sm">
                      Get early access on Discord
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4">
                    <Button
                      href={product.url}
                      variant="primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {product.ctaLabel}
                      <ExternalLinkIcon size={18} />
                    </Button>
                    <Button href="/products" variant="secondary">
                      All Products
                    </Button>
                  </div>
                )}
              </div>

              {/* Right: placeholder screenshot */}
              <div className="w-full lg:w-[480px] flex-shrink-0">
                <ScreenshotPlaceholder product={product} />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section className="py-section border-t border-border-default" style={{ background: 'rgba(17,20,24,0.6)' }}>
        <Container>
          <FadeIn>
            <div className="max-w-[720px]">
              <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-6">
                About {product.name}
              </p>
              <h2
                className="font-bold tracking-[-0.03em] text-white mb-8"
                style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
              >
                What it does
              </h2>
              <div className="space-y-5">
                {product.about.map((para, i) => (
                  <p key={i} className="text-text-muted text-base leading-[1.75]">
                    {para}
                  </p>
                ))}
              </div>

              {!isComingSoon && (
                <div className="mt-10">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors duration-150 focus-ring-offset"
                  >
                    Visit {product.linkLabel}
                    <ExternalLinkIcon size={16} />
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────── */}
      <section className="py-section">
        <Container>
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-card-bg border border-border-default rounded-card px-8 py-8">
              <div>
                <p className="text-white font-semibold text-lg mb-1">
                  {isComingSoon ? `${product.name} is coming soon` : `Ready to try ${product.name}?`}
                </p>
                <p className="text-text-muted text-sm">
                  {isComingSoon
                    ? 'Join the Discord to get early access when it launches.'
                    : `Visit ${product.linkLabel} to get started.`}
                </p>
              </div>
              <Button
                href={product.url}
                variant={isComingSoon ? 'primary' : 'primary'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                {product.ctaLabel}
                {isComingSoon ? <ArrowRightIcon size={16} /> : <ExternalLinkIcon size={16} />}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  )
}

// Placeholder screenshot component — styled gradient stand-in
function ScreenshotPlaceholder({ product }: { product: Product }) {
  return (
    <div
      className="relative w-full aspect-[4/3] rounded-card overflow-hidden border border-border-default bg-surface"
      aria-label={`${product.name} screenshot placeholder`}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at 30% 30%, ${product.accentColor}, transparent 70%)`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(148,163,184,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Centre icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="w-20 h-20 flex items-center justify-center rounded-[20px] bg-[var(--accent-soft)] border border-[var(--accent-border-hover)] text-accent opacity-60">
          <ProductIcon iconKey={product.icon} size={40} />
        </div>
        <p className="text-text-muted text-sm font-medium opacity-60">
          {product.name}
        </p>
      </div>

      {/* Bottom bar — mimics a browser chrome */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-surface to-transparent" />
    </div>
  )
}
