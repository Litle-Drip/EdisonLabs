import { Metadata } from 'next'
import { Container } from '@/components/ui/container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Edison Labs Privacy Policy.',
}

export default function PrivacyPage() {
  return (
    <section className="relative z-10 pt-28 pb-section">
      <Container>
        <div className="max-w-[720px]">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-text-muted">
            Full privacy policy coming soon. Please refer to our{' '}
            <a href="/privacy.html" className="text-accent hover:underline">legacy privacy page</a>{' '}
            in the meantime.
          </p>
        </div>
      </Container>
    </section>
  )
}
