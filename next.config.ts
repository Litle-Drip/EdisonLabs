import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Allow the old static HTML files to be served as-is
  // They live in the root but Next.js won't conflict since
  // app router routes take priority for /
}

export default nextConfig
