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
          {/* Back link — above fold, no animation */}
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
            {/* Left: product info — visible on first paint */}
            <div className="flex-1 min-w-0">
              {/* Icon + status */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-[16px] border flex-shrink-0"
                  style={{
                    background: `${product.accentColor}18`,
                    borderColor: `${product.accentColor}55`,
                    color: product.accentColor,
                  }}
                >
                  <span style={{ filter: `drop-shadow(0 0 8px ${product.accentColor}90)` }}>
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
                    Get early access
                    <ArrowRightIcon size={18} />
                  </Button>
                  <span className="text-text-muted text-sm">
                    Updates land in the Discord first
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

            {/* Right: product identity card */}
            <div className="w-full lg:w-[460px] flex-shrink-0">
              <ProductIdentityCard product={product} />
            </div>
          </div>
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
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                {isComingSoon ? 'Get early access' : product.ctaLabel}
                {isComingSoon ? <ArrowRightIcon size={16} /> : <ExternalLinkIcon size={16} />}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  )
}

/**
 * A branded product identity card — deliberate design, not a screenshot placeholder.
 * Shows the product name, icon, tagline, and URL in a polished card.
 */
function ProductIdentityCard({ product }: { product: Product }) {
  const accentHex = product.accentColor

  return (
    <div
      className="relative w-full rounded-card overflow-hidden border bg-surface flex flex-col"
      style={{ borderColor: `${accentHex}40`, minHeight: '280px' }}
    >
      {/* Accent gradient wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 15% 15%, ${accentHex}28, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(rgba(148,163,184,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Browser chrome bar */}
      <div
        className="relative z-10 flex items-center gap-2.5 px-4 py-3 border-b"
        style={{ borderColor: `${accentHex}20`, background: 'rgba(11,13,16,0.5)' }}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
        </div>
        <div
          className="flex-1 mx-2 h-5 rounded flex items-center px-2.5"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <span className="text-[10px] font-mono" style={{ color: `${accentHex}99` }}>
            {product.url.replace('https://', '')}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-10 px-8 text-center">
        {/* Icon */}
        <div
          className="w-[72px] h-[72px] flex items-center justify-center rounded-[18px] border mb-6"
          style={{
            background: `${accentHex}18`,
            borderColor: `${accentHex}45`,
            color: accentHex,
            boxShadow: `0 0 24px ${accentHex}22`,
          }}
        >
          <ProductIcon iconKey={product.icon} size={36} />
        </div>

        {/* Name */}
        <h2
          className="font-black text-white tracking-[-0.03em] mb-2"
          style={{ fontSize: 'clamp(22px, 3vw, 30px)' }}
        >
          {product.name}
        </h2>

        {/* Tag */}
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-badge border mb-4"
          style={{
            color: accentHex,
            borderColor: `${accentHex}35`,
            background: `${accentHex}0f`,
          }}
        >
          {product.tag}
        </span>

        {/* Tagline */}
        <p className="text-sm text-text-muted leading-relaxed max-w-[260px] opacity-80">
          {product.longDescription}
        </p>
      </div>

      {/* Footer bar */}
      <div
        className="relative z-10 px-6 py-3.5 border-t flex items-center justify-between"
        style={{ borderColor: `${accentHex}20`, background: 'rgba(11,13,16,0.4)' }}
      >
        <span className="text-[10px] font-mono" style={{ color: `${accentHex}70` }}>
          {product.status === 'live' ? '● Live' : '◎ Coming soon'}
        </span>
        <span className="text-[10px] uppercase tracking-[0.1em] font-semibold" style={{ color: `${accentHex}70` }}>
          Edison Labs
        </span>
      </div>
    </div>
  )
}
