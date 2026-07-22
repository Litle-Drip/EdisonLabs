import { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { ProductCard } from '@/components/ui/product-card'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import {
  ArrowRightIcon,
  TeaserIcon,
  LabIcon,
  ActivityIcon,
  UsersIcon,
  MailIcon,
  XIcon,
  DiscordIcon,
  SubstackIcon,
  ChevronRightIcon,
  ZapIcon,
  ShieldIcon,
  InfoIcon,
} from '@/components/ui/icons'
import { products, teaserProjects, labExperiments } from '@/lib/products'
import { SITE, SOCIAL } from '@/lib/constants'

export const metadata: Metadata = {
  title: SITE.tagline,
  description: SITE.description,
}

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden z-10"
      >
        <div className="max-w-content mx-auto px-6 md:px-12 w-full relative z-20">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-badge border border-[var(--accent-border-hover)] bg-[var(--accent-soft)] text-accent text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-badge" />
            Chicago · Software Studio
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-[1.05] tracking-[-0.04em] text-white mb-8"
            style={{ fontSize: 'clamp(52px, 8vw, 96px)' }}
          >
            Building
            <br />
            <span className="grad-text">practical software</span>
            <br />
            <span className="accent-glow">for emerging tech.</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-text-muted font-light leading-relaxed max-w-[620px] mb-12"
            style={{ fontSize: 'clamp(16px, 2.2vw, 22px)' }}
          >
            Independent products. Thoughtfully engineered.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5">
            <Button href="#products" variant="primary">
              Explore Products
              <ArrowRightIcon size={18} />
            </Button>
            <Button href="#about" variant="secondary">
              About Edison Labs
            </Button>
          </div>
        </div>

        {/* Decorative orbit rings */}
        <div
          className="orbit"
          style={{ width: 600, height: 600 }}
          aria-hidden="true"
        />
        <div
          className="orbit"
          style={{
            width: 400,
            height: 400,
            borderColor: 'rgba(77,163,255,0.15)',
            opacity: 0.35,
          }}
          aria-hidden="true"
        />
      </section>

      {/* ── Products ─────────────────────────────────────── */}
      <section id="products" className="relative z-10 py-section">
        <Container>
          <FadeIn>
            <SectionHeader title="Our Products" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <FadeIn key={product.slug} delay={i * 0.07}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Coming Soon / Teasers ─────────────────────────── */}
      <section id="coming-soon" className="relative z-10 pb-section">
        <Container>
          <FadeIn>
            <SectionHeader title="What's Coming" />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teaserProjects.map((teaser, i) => (
              <FadeIn key={teaser.codename} delay={i * 0.08}>
                <a
                  href={SOCIAL.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col bg-card-bg border border-[var(--warning-border)] rounded-card p-7 overflow-hidden transition-all duration-200 ease-out teaser-card-hover group no-underline cursor-pointer focus-ring"
                >
                  {/* corner glow */}
                  <div className="teaser-glow-el absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-[rgba(255,183,77,0.04)] blur-2xl transition-colors duration-300 pointer-events-none" />

                  {/* top row */}
                  <div className="relative z-10 flex justify-between items-start mb-5">
                    <div className="w-12 h-12 flex items-center justify-center rounded-btn bg-[rgba(255,183,77,0.07)] border border-[var(--warning-border)] text-[#fbbf24] drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]">
                      <TeaserIcon iconKey={teaser.iconKey} size={24} />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-badge bg-[rgba(255,183,77,0.08)] border border-[var(--warning-border-hover)] text-[#fbbf24] text-[11px] font-medium whitespace-nowrap">
                      <span className="w-[7px] h-[7px] rounded-full bg-[#f59e0b] animate-pulse-dev" />
                      In Development
                    </div>
                  </div>

                  {/* name + tag */}
                  <div className="relative z-10 flex items-center gap-2.5 mb-3">
                    <span className="text-xl font-bold text-white blur-[6px] select-none">
                      {teaser.codename}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] px-2 py-0.5 rounded-tag bg-[rgba(255,183,77,0.08)] text-[#fbbf24] border border-[var(--warning-border)]">
                      {teaser.tag}
                    </span>
                  </div>

                  {/* description */}
                  <p className="relative z-10 text-[13px] text-text-muted leading-[1.7] flex-1 mb-6">
                    {teaser.description}
                  </p>

                  {/* CTA */}
                  <span className="relative z-10 inline-flex items-center gap-1.5 text-[#fbbf24] text-[13px] font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-150">
                    Get early access on Discord
                    <span className="group-hover:translate-x-1 transition-transform duration-150">
                      <ArrowRightIcon size={14} />
                    </span>
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── The Lab ───────────────────────────────────────── */}
      <section id="lab" className="relative z-10 pb-section">
        <Container>
          <FadeIn>
            <SectionHeader title="The Lab" />
          </FadeIn>

          <FadeIn className="max-w-[560px] mb-12">
            <p className="text-text-muted text-[15px] leading-[1.7]">
              Where experiments live before they become products. These are the areas we&apos;re actively exploring — some will ship, some won&apos;t, all are worth building.
            </p>
          </FadeIn>

          <div className="flex flex-wrap gap-4">
            {labExperiments.map((exp, i) => (
              <FadeIn key={exp.label} delay={i * 0.06} className="flex-1 min-w-[220px]">
                <div className="flex items-start gap-3.5 p-[18px_22px] border border-[var(--accent-border)] rounded-btn bg-[var(--accent-soft)] transition-all duration-200 lab-tile-hover h-full">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-[rgba(77,163,255,0.08)] border border-[var(--accent-border)] text-accent opacity-80 group-hover:opacity-100 transition-opacity duration-200">
                    <LabIcon iconKey={exp.iconKey} size={18} />
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-text-main mb-1">
                      {exp.label}
                    </div>
                    <div className="text-[12px] text-text-muted leading-[1.5]">
                      {exp.description}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section
        id="about"
        className="relative z-10 py-section border-y border-border-default"
        style={{ background: 'rgba(17,20,24,0.6)' }}
      >
        <Container>
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-6">
                  <ActivityIcon size={16} />
                  Studio Philosophy
                </div>
                <h2
                  className="font-bold tracking-[-0.03em] text-white mb-8"
                  style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
                >
                  How We Build
                </h2>
                <blockquote className="text-lg font-medium text-text-main border-l-2 border-accent pl-6 py-2 mb-6">
                  Each product begins as an experiment. The best experiments become polished products.
                </blockquote>
                <p className="text-text-muted text-base leading-[1.7] mb-4">
                  Edison Labs is an independent software studio focused on building practical digital products. We create focused tools around emerging technology, including blockchain, artificial intelligence, simulation, and developer infrastructure.
                </p>
                <p className="text-text-muted text-base leading-[1.7]">
                  We don&apos;t position ourselves as a crypto company or chase buzzwords. We build software that solves specific problems with clarity, precision, and thoughtful engineering.
                </p>
              </div>

              {/* Right: pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
                {[
                  {
                    icon: <ActivityIcon size={24} />,
                    title: 'Ship deliberately.',
                    body: 'Build focused products with clear purpose. No bloat, no noise.',
                  },
                  {
                    icon: <ShieldIcon size={24} />,
                    title: 'Build independently.',
                    body: 'Each product can stand on its own. One studio, many products.',
                  },
                  {
                    icon: <InfoIcon size={24} />,
                    title: 'Keep products focused.',
                    body: 'Solve one problem well. Clarity over complexity, always.',
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="bg-bg border border-border-default rounded-btn p-6 transition-colors duration-200 hover:border-[var(--accent-border-hover)] group"
                  >
                    <div className="text-accent opacity-70 group-hover:opacity-100 transition-opacity duration-200 mb-4">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-text-muted leading-relaxed">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Community ─────────────────────────────────────── */}
      <section id="community" className="relative z-10 py-section">
        <Container narrow>
          <FadeIn>
            <div className="relative bg-card-bg border border-border-default rounded-card px-8 sm:px-16 py-16 text-center overflow-hidden">
              <div className="community-glow" aria-hidden="true" />

              <div className="relative z-10 inline-flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-[0.12em] mb-5">
                <UsersIcon size={14} />
                Community
              </div>

              <h2
                className="relative z-10 font-bold tracking-[-0.03em] text-white mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                Stay in the Loop
              </h2>

              <p className="relative z-10 text-text-muted text-base leading-[1.7] max-w-[520px] mx-auto mb-10">
                Follow along as we ship new products, share what we&apos;re learning, and build in public. Join the community or subscribe to the newsletter — no spam, just signal.
              </p>

              <div className="relative z-10 flex items-center justify-center gap-4 flex-wrap">
                <Button href={SOCIAL.discord} variant="discord" target="_blank" rel="noopener noreferrer">
                  <DiscordIcon size={20} />
                  Join the Discord
                </Button>
                <Button href={SOCIAL.substack} variant="substack" target="_blank" rel="noopener noreferrer">
                  <SubstackIcon size={18} />
                  Subscribe on Substack
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="relative z-10 pt-section pb-12">
        <FadeIn>
          <div className="relative z-10 max-w-[720px] mx-auto px-6 text-center mb-section">
            {/* Contact icon */}
            <div
              className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-full bg-[rgba(77,163,255,0.10)] border border-[var(--accent-border-hover)] text-accent"
              style={{ boxShadow: '0 0 28px rgba(77,163,255,0.18)' }}
            >
              <MailIcon size={32} />
            </div>

            <h2
              className="font-bold tracking-[-0.03em] text-white mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
            >
              Get in Touch
            </h2>

            <p className="text-text-muted text-[17px] leading-relaxed max-w-[500px] mx-auto mb-10">
              Interested in what we&apos;re building? Reach out to discuss experimental tech, partnerships, or just to say hello.
            </p>

            {/* Email button */}
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-3 px-8 py-3.5 min-h-[48px] bg-card-bg border border-[var(--accent-border-hover)] rounded-btn text-white text-[15px] font-semibold transition-all duration-200 hover:border-accent hover:shadow-[0_0_20px_rgba(77,163,255,0.22)] focus-ring"
            >
              {SITE.email}
              <span className="text-accent">
                <ChevronRightIcon size={18} />
              </span>
            </a>

            {/* Social links */}
            <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
              {[
                { href: SOCIAL.twitter, icon: <XIcon size={15} />, label: 'Twitter / X' },
                { href: SOCIAL.discord, icon: <DiscordIcon size={15} />, label: 'Discord' },
                { href: SOCIAL.substack, icon: <SubstackIcon size={15} />, label: 'Substack' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-[18px] py-2.5 bg-transparent border border-border-default rounded-btn text-text-muted text-[13px] font-medium transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[var(--accent-soft)] whitespace-nowrap focus-ring"
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Footer glow + spacer for footer-glow positioning */}
        <div className="relative h-0">
          <div className="footer-glow" aria-hidden="true" />
        </div>
      </section>
    </>
  )
}
