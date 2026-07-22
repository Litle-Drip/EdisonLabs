import { Metadata } from 'next'
import { LegalLayout, LegalSection, LegalSubSection, LegalList } from '@/components/ui/legal-layout'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Edison Labs collects, uses, and protects information in connection with its services.',
  alternates: { canonical: `${SITE.url}/privacy` },
  openGraph: {
    title: 'Privacy Policy | Edison Labs',
    url: `${SITE.url}/privacy`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Edison Labs collects, uses, and protects information in connection with its services."
      updatedDate="December 4, 2025"
      docType="Privacy"
    >
      <LegalSection heading="Overview">
        <p>
          This Privacy Policy explains how Edison Labs LLC (&ldquo;Edison Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, and protects information in connection with thejuiceapp.io and related services (the &ldquo;Service&rdquo;).
        </p>
      </LegalSection>

      <LegalSection heading="1. Information We Collect">
        <p>We aim to collect as little personal information as reasonably possible.</p>

        <LegalSubSection heading="a) Information you provide directly">
          <LegalList items={[
            'Contact information if you email us or fill out a form (e.g., name, email, message content).'
          ]} />
        </LegalSubSection>

        <LegalSubSection heading="b) Information collected automatically">
          <LegalList items={[
            'Standard web logs (IP address, browser type, pages viewed, timestamps).',
            'Device and usage information (e.g., referring URLs, approximate location based on IP).',
            'If enabled, aggregated analytics data from third-party tools (e.g., page views, session duration).',
          ]} />
        </LegalSubSection>

        <LegalSubSection heading="c) Blockchain and wallet data">
          <p>When you connect a wallet or interact with smart contracts:</p>
          <LegalList items={[
            'We may see your public wallet address and transaction details on-chain.',
            'We do not control or store your private keys.',
          ]} />
        </LegalSubSection>
      </LegalSection>

      <LegalSection heading="2. How We Use Information">
        <p>We use collected information to:</p>
        <LegalList items={[
          'operate, maintain, and improve the Service,',
          'understand usage patterns and performance,',
          'communicate with you if you contact us,',
          'detect, prevent, or investigate potential abuse or security issues,',
          'comply with legal obligations when required.',
        ]} />
        <p>We do not sell your personal data.</p>
      </LegalSection>

      <LegalSection heading="3. Cookies and Similar Technologies">
        <p>We may use cookies or similar technologies to:</p>
        <LegalList items={[
          'remember basic preferences,',
          'perform analytics, or',
          'improve the user experience.',
        ]} />
        <p>You can usually control cookies through your browser settings.</p>
      </LegalSection>

      <LegalSection heading="4. Third-Party Services">
        <p>We may use third-party providers for:</p>
        <LegalList items={[
          'analytics,',
          'error tracking,',
          'infrastructure (e.g., hosting, RPC providers).',
        ]} />
        <p>
          These providers may collect information in accordance with their own privacy policies. We encourage you to review those policies.
        </p>
      </LegalSection>

      <LegalSection heading="5. Data Security">
        <p>We take reasonable measures to protect information we control. However:</p>
        <LegalList items={[
          'no system is perfectly secure,',
          'blockchain transactions are public and irrevocable,',
          'transmission of data over the internet carries inherent risks.',
        ]} />
      </LegalSection>

      <LegalSection heading="6. Your Choices">
        <p>You may:</p>
        <LegalList items={[
          'choose not to provide certain information (though this may limit some features),',
          'configure cookie or tracking preferences in your browser,',
          'disconnect your wallet at any time.',
        ]} />
      </LegalSection>

      <LegalSection heading="7. Children's Privacy">
        <p>
          The Service is not directed to individuals under 18. We do not knowingly collect personal data from children. If you believe a child has provided us information, contact us and we will take appropriate steps.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. If we make material changes, we will update the &ldquo;Last updated&rdquo; date and may provide additional notice. Your continued use of the Service means you accept the updated Policy.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact">
        <p>
          For privacy-related questions, you can reach us at:{' '}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:text-white transition-colors duration-150">
            {SITE.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
