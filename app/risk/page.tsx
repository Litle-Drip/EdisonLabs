import { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Risk Disclosure',
  description: 'Edison Labs Risk Disclosure.',
}

export default function RiskPage() {
  return (
    <section className="relative z-10 pt-28 pb-section">
      <Container>
        <div className="max-w-[720px]">
          <h1 className="text-4xl font-bold text-white mb-4">Risk Disclosure</h1>
          <p className="text-text-muted">
            Full risk disclosure coming soon. Please refer to our{' '}
            <a href="/risk.html" className="text-accent hover:underline">legacy risk disclosure page</a>{' '}
            in the meantime.
          </p>
        </div>
      </Container>
    </section>
  )
}
