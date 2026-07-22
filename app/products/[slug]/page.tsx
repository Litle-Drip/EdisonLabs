import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products } from '@/lib/products'
import { ProductPageLayout } from '@/components/ui/product-page-layout'
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

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Edison Labs`,
      description,
      url: `${SITE.url}/products/${product.slug}`,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: `${product.name} by Edison Labs`,
        },
      ],
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

  return <ProductPageLayout product={product} />
}
