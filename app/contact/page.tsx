import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SITE, SOCIAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Edison Labs.',
}

export default function ContactPage() {
  return (
    <section className="relative z-10 min-h-screen flex items-center pt-24 pb-section">
      <Container>
        <div className="max-w-[560px]">
          <h1 className="text-[clamp(36px,5vw,64px)] font-black tracking-[-0.04em] text-white mb-6 leading-tight">
            Get in Touch
          </h1>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Reach out to discuss experimental tech, partnerships, or just to say hello.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-card-bg border border-[var(--accent-border-hover)] rounded-btn text-white font-semibold hover:border-accent hover:shadow-[0_0_20px_rgba(77,163,255,0.22)] transition-all duration-200"
          >
            {SITE.email}
          </a>
        </div>
      </Container>
    </section>
  )
}
