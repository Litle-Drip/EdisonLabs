import Link from 'next/link'
import { Product } from '@/lib/products'
import { StatusBadge } from './status-badge'
import { ProductIcon, ExternalLinkIcon } from './icons'

interface ProductCardProps {
  product: Product
  /** When set, an overlay link covers the card surface linking to this URL */
  detailHref?: string
}

export function ProductCard({ product, detailHref }: ProductCardProps) {
  return (
    <div className="relative flex flex-col bg-card-bg border border-border-default rounded-card p-8 overflow-hidden transition-all duration-200 ease-out product-card-hover group">
      {/* Overlay link — sits at z-0 so all z-10 elements stay interactive */}
      {detailHref && (
        <Link
          href={detailHref}
          className="absolute inset-0 z-0 rounded-card focus-ring"
          aria-label={`View ${product.name} details`}
          tabIndex={0}
        />
      )}
      {/* corner glow */}
      <div className="card-glow-el absolute top-0 right-0 w-32 h-32 rounded-bl-full bg-[rgba(77,163,255,0.05)] blur-3xl transition-colors duration-300 pointer-events-none" />

      {/* top row */}
      <div className="relative z-10 flex justify-between items-start mb-8">
        <div className="w-14 h-14 flex items-center justify-center rounded-btn bg-[rgba(77,163,255,0.10)] border border-[var(--accent-border-hover)] text-accent">
          <span className="drop-shadow-[0_0_6px_rgba(77,163,255,0.7)]">
            <ProductIcon iconKey={product.icon} size={28} />
          </span>
        </div>
        <StatusBadge status={product.status} />
      </div>

      {/* name + tag */}
      <div className="relative z-10 flex items-center gap-2.5 mb-3.5">
        <span className="text-[22px] font-bold text-white">{product.name}</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-tag bg-[var(--accent-soft)] text-accent border border-[var(--accent-border)]">
          {product.tag}
        </span>
      </div>

      {/* description */}
      <p className="relative z-10 text-sm text-text-muted leading-[1.7] flex-1 mb-10">
        {product.description}
      </p>

      {/* link */}
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-white transition-colors duration-150 focus-ring"
      >
        {product.linkLabel}
        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150">
          <ExternalLinkIcon size={16} />
        </span>
      </a>
    </div>
  )
}
