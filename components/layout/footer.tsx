import Link from 'next/link'
import Image from 'next/image'
import { SITE, SOCIAL, FOOTER_LINKS } from '@/lib/constants'
import { XIcon, DiscordIcon, SubstackIcon } from '@/components/ui/icons'

export function Footer() {
  return (
    <footer className="relative z-10">
      <div className="max-w-content mx-auto px-6 md:px-12 py-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-text-muted">
        {/* Left: logo + copyright */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Edison Labs"
            width={18}
            height={18}
            className="object-contain grayscale opacity-50 w-[18px] h-[18px]"
          />
          <span>© {SITE.year} Edison Labs LLC · {SITE.location}</span>
        </div>

        {/* Right: social + legal */}
        <div className="flex items-center gap-6 flex-wrap">
          {/* Social icons */}
          <div className="flex items-center gap-2">
            <a
              href={SOCIAL.twitter}
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter / X"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border-default text-text-muted hover:border-accent hover:text-accent transition-colors duration-200 focus-ring"
            >
              <XIcon size={14} />
            </a>
            <a
              href={SOCIAL.discord}
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border-default text-text-muted hover:border-accent hover:text-accent transition-colors duration-200 focus-ring"
            >
              <DiscordIcon size={14} />
            </a>
            <a
              href={SOCIAL.substack}
              target="_blank"
              rel="noopener noreferrer"
              title="Substack"
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border-default text-text-muted hover:border-accent hover:text-accent transition-colors duration-200 focus-ring"
            >
              <SubstackIcon size={14} />
            </a>
          </div>

          {/* Legal links */}
          <div className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-white transition-colors duration-150 focus-ring-offset"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
