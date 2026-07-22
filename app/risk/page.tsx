import { Metadata } from 'next'
import { LegalLayout, LegalSection } from '@/components/ui/legal-layout'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Risk Disclosure',
  description: 'Significant risks you should understand before using The Juice or any Edison Labs tool.',
  openGraph: {
    title: 'Risk Disclosure | Edison Labs',
    url: `${SITE.url}/risk`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function RiskPage() {
  return (
    <LegalLayout
      title="Risk Disclosure"
      subtitle="Significant risks you should understand before using The Juice or any Edison Labs tool."
      updatedDate="December 4, 2025"
      docType="Risk"
    >
      <LegalSection heading="Overview">
        <p>
          Using The Juice and related tools from Edison Labs LLC involves significant risks. By interacting with our website, smart contracts, or any associated services, you acknowledge and accept the following:
        </p>
      </LegalSection>

      <LegalSection heading="1. Digital Asset Risk">
        <p>
          Digital assets are highly volatile and may lose some or all of their value. You should not use funds you cannot afford to lose.
        </p>
      </LegalSection>

      <LegalSection heading="2. Smart Contract & Technical Risk">
        <p>
          Smart contracts are experimental software. They may contain bugs, vulnerabilities, or behave in unexpected ways. Interacting with them can lead to permanent loss of funds.
        </p>
      </LegalSection>

      <LegalSection heading="3. Irreversible Transactions">
        <p>
          Blockchain transactions are generally irreversible. Once a transaction is broadcast and confirmed, it cannot be undone, reversed, or forcibly refunded.
        </p>
      </LegalSection>

      <LegalSection heading="4. Network & Infrastructure Risk">
        <p>
          Congestion, forks, failed transactions, RPC outages, or chain-level issues can impact your experience and may lead to stuck, delayed, or more expensive transactions.
        </p>
      </LegalSection>

      <LegalSection heading="5. Legal & Regulatory Risk">
        <p>
          Rules related to digital assets, contests, and wagering differ by jurisdiction and may change over time. You are solely responsible for understanding and complying with laws that apply to you.
        </p>
      </LegalSection>

      <LegalSection heading="6. No Guarantees or Insurance">
        <p>
          There is no guarantee of uptime, availability, performance, or security. There is no insurance or guaranteed recovery if funds are lost.
        </p>
      </LegalSection>

      <LegalSection heading="Acknowledgement">
        <p>
          By using The Juice or any tool operated by Edison Labs LLC, you agree that you understand these risks and are using the Service entirely at your own risk and discretion.
        </p>
        <p>
          Questions? Contact us at{' '}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:text-white transition-colors duration-150">
            {SITE.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
