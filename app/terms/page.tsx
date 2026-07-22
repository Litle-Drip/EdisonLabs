import { Metadata } from 'next'
import { LegalLayout, LegalSection, LegalList } from '@/components/ui/legal-layout'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Your access to and use of Edison Labs websites, applications, and smart contracts is governed by these terms.',
  openGraph: {
    title: 'Terms of Use | Edison Labs',
    url: `${SITE.url}/terms`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      subtitle="Your access to and use of Edison Labs websites, applications, and smart contracts is governed by these terms."
      updatedDate="December 4, 2025"
      docType="Terms"
    >
      <LegalSection heading="Overview">
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the websites, applications, and smart contracts operated by Edison Labs LLC, including thejuiceapp.io and any related interfaces (collectively, the &ldquo;Service&rdquo;).
        </p>
        <p>
          By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
        </p>
      </LegalSection>

      <LegalSection heading="1. Who We Are">
        <p>
          The Service is operated by Edison Labs LLC (&ldquo;Edison Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a software development and innovation studio that develops software and digital tools, including blockchain-based applications, digital asset operations, and experimental technology projects.
        </p>
      </LegalSection>

      <LegalSection heading="2. Eligibility">
        <p>You may use the Service only if:</p>
        <LegalList items={[
          'you are at least 18 years old (or the age of majority in your jurisdiction), and',
          'you are legally permitted to use the Service under the laws of your jurisdiction.',
        ]} />
        <p>
          You are solely responsible for determining whether your use of the Service is legal in your location, including any rules relating to contests, wagers, or games of skill/chance.
        </p>
      </LegalSection>

      <LegalSection heading="3. No Financial, Legal, or Gambling Advice">
        <p>Nothing on the Service constitutes:</p>
        <LegalList items={[
          'financial, investment, or trading advice,',
          'legal or tax advice, or',
          'a recommendation to engage in any transaction.',
        ]} />
        <p>
          Edison Labs does not operate as a sportsbook, casino, or traditional betting operator. The Service provides experimental tools that allow users to interact with blockchain-based smart contracts they control at their own risk.
        </p>
      </LegalSection>

      <LegalSection heading="4. User Responsibilities">
        <p>You understand and agree that:</p>
        <LegalList items={[
          'You are solely responsible for all actions taken using your wallet and devices.',
          'You will not use the Service in any manner that violates applicable law or regulation.',
          'You will not attempt to circumvent technical or security measures, or interfere with the proper operation of the Service.',
        ]} />
      </LegalSection>

      <LegalSection heading="5. Blockchain Interactions">
        <p>
          The Service allows you to interact directly with smart contracts deployed on public blockchain networks. By using the Service, you acknowledge that:
        </p>
        <LegalList items={[
          'Transactions are generally irreversible.',
          'Digital assets may be volatile and can lose value.',
          'Smart contracts may contain bugs or vulnerabilities.',
          'Network congestion, forks, or other issues may impact your experience.',
        ]} />
        <p>
          Edison Labs does not custody your assets and does not control the underlying blockchain networks.
        </p>
      </LegalSection>

      <LegalSection heading="6. Fees">
        <p>
          Certain smart contracts may charge protocol fees that are transferred to a designated treasury address. Any applicable fees will be displayed in the interface or encoded in the contract logic. By interacting with these smart contracts, you consent to the deduction and transfer of such fees.
        </p>
      </LegalSection>

      <LegalSection heading="7. Experimental Nature; No Guarantees">
        <p>
          The Service and its smart contracts are experimental and provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; without warranties of any kind. We do not guarantee:
        </p>
        <LegalList items={[
          'error-free operation,',
          'uninterrupted access,',
          'security or durability of smart contracts or networks, or',
          'any particular outcome from your use of the Service.',
        ]} />
      </LegalSection>

      <LegalSection heading="8. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Edison Labs and its members, officers, employees, and contractors shall not be liable for any indirect, incidental, consequential, special, or punitive damages, or any loss of profits, digital assets, data, or goodwill arising out of or related to your use of the Service.
        </p>
        <p>
          Where liability cannot be excluded, it is limited to the amount you have directly paid to Edison Labs (if any) in connection with your use of the Service in the twelve (12) months preceding the event giving rise to the claim.
        </p>
      </LegalSection>

      <LegalSection heading="9. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Edison Labs from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys&apos; fees, arising out of or related to:
        </p>
        <LegalList items={[
          'your use of the Service,',
          'your violation of these Terms, or',
          'your violation of any applicable law or third-party rights.',
        ]} />
      </LegalSection>

      <LegalSection heading="10. Changes to the Service and Terms">
        <p>
          We may update the Service or these Terms from time to time. If we make material changes, we will update the &ldquo;Last updated&rdquo; date above and may provide additional notice. Your continued use of the Service after any changes become effective constitutes your acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="11. Third-Party Services">
        <p>
          The Service may integrate or rely on third-party services (e.g., wallets, RPC providers, oracles, analytics). We do not control and are not responsible for those services. Your use of them is governed by their own terms and policies.
        </p>
      </LegalSection>

      <LegalSection heading="12. Governing Law">
        <p>
          These Terms are governed by the laws of the State of Illinois, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the state or federal courts located in Illinois, and you consent to such jurisdiction.
        </p>
      </LegalSection>

      <LegalSection heading="13. Contact">
        <p>
          If you have questions about these Terms, contact us at:{' '}
          <a href={`mailto:${SITE.email}`} className="text-accent hover:text-white transition-colors duration-150">
            {SITE.email}
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  )
}
