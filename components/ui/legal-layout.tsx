import Link from 'next/link'
import { ReactNode } from 'react'
import { Container } from './container'

interface LegalLayoutProps {
  title: string
  subtitle: string
  updatedDate: string
  docType: string
  children: ReactNode
}

interface LegalSection {
  heading: string
  content: ReactNode
}

export function LegalLayout({ title, subtitle, updatedDate, docType, children }: LegalLayoutProps) {
  return (
    <div className="relative z-10 min-h-screen pt-24 pb-section">
      <Container>
        <div className="max-w-[780px] mx-auto">
          {/* Header */}
          <div className="mb-10 pb-8 border-b border-border-default">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-badge border border-[var(--accent-border)] bg-[var(--accent-soft)] text-accent">
                Edison Labs LLC — Legal
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-badge border border-border-default text-text-muted">
                {docType}
              </span>
            </div>

            <h1
              className="font-black tracking-[-0.03em] text-white mb-4"
              style={{ fontSize: 'clamp(32px, 5vw, 52px)' }}
            >
              {title}
            </h1>

            <p className="text-text-muted text-base leading-relaxed max-w-[560px] mb-5">
              {subtitle}
            </p>

            <p className="text-xs text-text-muted">
              Last updated: <time>{updatedDate}</time>
            </p>
          </div>

          {/* Content */}
          <div className="legal-content space-y-8">
            {children}
          </div>

          {/* Related documents */}
          <div className="mt-12 p-5 rounded-btn border border-dashed border-border-default bg-card-bg">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-muted mb-3">
              Related documents
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { href: '/terms', label: 'Terms of Use' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/risk', label: 'Risk Disclosure' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-accent hover:text-white transition-colors duration-150 focus-ring-offset"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

// Convenience sub-components for content structure
export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent mb-3">
        {heading}
      </h2>
      <div className="space-y-3 text-text-muted text-[15px] leading-[1.8]">
        {children}
      </div>
    </section>
  )
}

export function LegalSubSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-white mb-2">{heading}</h3>
      <div className="text-text-muted text-[15px] leading-[1.8]">{children}</div>
    </div>
  )
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1.5 text-[15px] text-text-muted leading-[1.8]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}
