import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/lib/products'
import { ProductPageLayout } from '@/components/ui/product-page-layout'
import { JsonLd } from '@/components/ui/json-ld'
import { SITE } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}

  const title = `${product.name} — ${product.tag}`
  const description = product.metaDescription
  const canonicalUrl = `${SITE.url}/products/${product.slug}`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${title} | Edison Labs`,
      description,
      url: canonicalUrl,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${product.name} by Edison Labs` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Edison Labs`,
      description,
      images: ['/og-image.png'],
    },
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.metaDescription,
    url: product.url,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Edison Labs',
      url: SITE.url,
    },
  }

  return (
    <>
      <JsonLd data={productSchema} />
      <ProductPageLayout product={product} />
    </>
  )
}
