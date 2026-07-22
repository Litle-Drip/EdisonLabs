import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { ProductCard } from '@/components/ui/product-card'
import { products } from '@/lib/products'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Products',
  description: `All five Edison Labs products — ${products.map((p) => p.name).join(', ')}. Independent software built around blockchain, AI, simulation, and emerging tech.`,
  alternates: { canonical: `${SITE.url}/products` },
  openGraph: {
    title: `Products | Edison Labs`,
    description: `The full Edison Labs product portfolio.`,
    url: `${SITE.url}/products`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Edison Labs Products' }],
  },
  twitter: { card: 'summary_large_image', title: 'Products | Edison Labs' },
}

export default function ProductsPage() {
  const liveProducts = products.filter((p) => p.status === 'live')
  const comingSoon = products.filter((p) => p.status === 'coming-soon')

  return (
    <section className="relative z-10 pt-28 pb-section min-h-screen">
      <Container>
        {/* Header */}
        <FadeIn>
          <div className="mb-16">
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-4">
              Product Portfolio
            </p>
            <h1
              className="font-black tracking-[-0.04em] text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
            >
              What We Build
            </h1>
            <p className="text-text-muted text-lg leading-relaxed max-w-[560px]">
              Independent products. Each one solves a specific problem with clarity, precision, and thoughtful engineering.
            </p>
          </div>
        </FadeIn>

        {/* Live products */}
        <FadeIn delay={0.05}>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-text-muted whitespace-nowrap">
              Live
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-border-default to-transparent" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {liveProducts.map((product, i) => (
            <FadeIn key={product.slug} delay={0.07 + i * 0.06}>
              <ProductCard product={product} detailHref={`/products/${product.slug}`} />
            </FadeIn>
          ))}
        </div>

        {/* Coming soon */}
        {comingSoon.length > 0 && (
          <>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-text-muted whitespace-nowrap">
                  Coming Soon
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-border-default to-transparent" />
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoon.map((product, i) => (
                <FadeIn key={product.slug} delay={0.12 + i * 0.06}>
                  <ProductCard product={product} detailHref={`/products/${product.slug}`} />
                </FadeIn>
              ))}
            </div>
          </>
        )}
      </Container>
    </section>
  )
}
