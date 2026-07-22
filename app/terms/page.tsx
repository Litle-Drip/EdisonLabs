import { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Edison Labs Terms of Service.',
}

export default function TermsPage() {
  return (
    <section className="relative z-10 pt-28 pb-section">
      <Container>
        <div className="max-w-[720px] prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-text-muted">
            Full terms content coming soon. Please refer to our{' '}
            <a href="/terms.html" className="text-accent hover:underline">legacy terms page</a>{' '}
            in the meantime.
          </p>
        </div>
      </Container>
    </section>
  )
}
