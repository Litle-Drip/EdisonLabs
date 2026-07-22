import { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'About',
  description: 'Edison Labs — an independent software studio in Chicago.',
}

export default function AboutPage() {
  return (
    <section className="relative z-10 min-h-screen flex items-center pt-24 pb-section">
      <Container>
        <div className="max-w-[560px]">
          <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-6">
            Coming soon
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-black tracking-[-0.04em] text-white mb-6 leading-tight">
            About Edison Labs
          </h1>
          <p className="text-text-muted text-lg leading-relaxed">
            An independent software studio focused on building practical digital products. Full page coming soon.
          </p>
        </div>
      </Container>
    </section>
  )
}
