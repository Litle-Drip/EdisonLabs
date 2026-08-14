import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'
import { SITE } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: SITE.tagline,
    template: `%s | Edison Labs`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.tagline,
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Edison Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.tagline,
    description: SITE.description,
    images: ['/og-image.png'],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#4AAFE1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="font-sans bg-bg text-text-main min-h-screen overflow-x-hidden">
        {/* Fixed background decorations */}
        <div
          className="fixed top-0 left-0 w-full pointer-events-none z-0"
          style={{
            height: '800px',
            background: 'radial-gradient(circle at 50% 0%, rgba(77,163,255,0.12), transparent 60%)',
          }}
          aria-hidden="true"
        />
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(rgba(148,163,184,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
          aria-hidden="true"
        />

        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
