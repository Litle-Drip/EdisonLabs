import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { ContactForm } from '@/components/ui/contact-form'
import { SITE, SOCIAL } from '@/lib/constants'
import { XIcon, DiscordIcon, SubstackIcon, MailIcon } from '@/components/ui/icons'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Edison Labs. Reach us at edisonlabschicago@gmail.com or connect on X, Discord, or Substack.',
  openGraph: {
    title: 'Contact | Edison Labs',
    description: 'Get in touch with Edison Labs.',
    url: `${SITE.url}/contact`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Edison Labs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Contact | Edison Labs' },
}

const socials = [
  {
    href: SOCIAL.twitter,
    icon: <XIcon size={18} />,
    label: 'X (Twitter)',
    handle: '@Edison_Labs',
    description: 'Follow for product updates',
  },
  {
    href: SOCIAL.discord,
    icon: <DiscordIcon size={18} />,
    label: 'Discord',
    handle: 'Edison Labs',
    description: 'Join the community',
  },
  {
    href: SOCIAL.substack,
    icon: <SubstackIcon size={18} />,
    label: 'Substack',
    handle: 'Edison Labs',
    description: 'Subscribe to the journal',
  },
]

export default function ContactPage() {
  return (
    <div className="relative z-10 min-h-screen">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-28 pb-16">
        <Container>
          <p className="text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-4">
            Contact
          </p>
          <h1
            className="font-black tracking-[-0.04em] text-white leading-tight mb-5"
            style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
          >
            Get in touch.
          </h1>
          <p className="text-text-muted text-lg leading-relaxed max-w-[520px]">
            Interested in what we&apos;re building? Have a question about a product? Want to collaborate? We&apos;d love to hear from you.
          </p>
        </Container>
      </section>

      {/* ── Main content ──────────────────────────────────── */}
      <section className="pb-section">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: contact info + socials */}
            <FadeIn>
              <div className="space-y-10">
                {/* Direct email */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-muted mb-4">
                    Email us directly
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group inline-flex items-center gap-3 px-6 py-4 bg-card-bg border border-border-default rounded-btn text-white font-medium transition-all duration-200 hover:border-[var(--accent-border-hover)] hover:shadow-[0_0_20px_rgba(77,163,255,0.18)] focus-ring"
                  >
                    <span className="text-accent group-hover:text-white transition-colors duration-150">
                      <MailIcon size={18} />
                    </span>
                    {SITE.email}
                  </a>
                </div>

                {/* Socials */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-muted mb-4">
                    Find us online
                  </p>
                  <div className="space-y-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 px-5 py-4 bg-card-bg border border-border-default rounded-btn transition-all duration-200 hover:border-[var(--accent-border-hover)] focus-ring"
                      >
                        <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-border)] text-accent transition-all duration-200 group-hover:bg-[rgba(77,163,255,0.14)]">
                          {s.icon}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-white">{s.label}</div>
                          <div className="text-xs text-text-muted">{s.description}</div>
                        </div>
                        <span className="text-text-muted text-xs opacity-60 group-hover:opacity-100 group-hover:text-accent transition-all duration-150">
                          →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="bg-card-bg border border-border-default rounded-btn px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-muted mb-2">
                    Location
                  </p>
                  <p className="text-white font-medium">{SITE.location}</p>
                  <p className="text-text-muted text-sm">Independent software studio</p>
                </div>
              </div>
            </FadeIn>

            {/* Right: contact form */}
            <FadeIn delay={0.08}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-text-muted mb-6">
                  Send a message
                </p>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </div>
  )
}
