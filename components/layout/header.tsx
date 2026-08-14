'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'
import { MenuIcon, CloseIcon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

function isActive(href: string, pathname: string): boolean {
  // Products uses a hash anchor on homepage; treat /products/* as the active section
  if (href === '/#products') {
    return pathname === '/products' || pathname.startsWith('/products/')
  }
  return pathname === href || (href.length > 1 && pathname.startsWith(href + '/'))
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile nav whenever the route changes
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('mobile-nav-open')
    } else {
      document.body.classList.remove('mobile-nav-open')
    }
    return () => document.body.classList.remove('mobile-nav-open')
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[rgba(11,13,16,0.88)] backdrop-blur-nav border-b border-border-default py-4'
          : 'py-6'
      )}
    >
      <div className="max-w-content mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 no-underline focus-ring-offset rounded"
          aria-label="Edison Labs home"
        >
          <Image
            src="/logo.png"
            alt="Edison Labs"
            width={32}
            height={32}
            className="object-contain w-8 h-8"
            priority
          />
          <span className="text-xl font-bold tracking-[-0.02em] text-white">
            Edison Labs
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href, pathname)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-xs font-medium uppercase tracking-[0.1em] transition-colors duration-150 py-3 px-1 min-h-[44px] inline-flex items-center focus-ring-offset',
                  active ? 'text-accent' : 'text-text-muted hover:text-accent'
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-1.5 left-1 right-1 h-px bg-accent rounded-full opacity-60" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 text-text-muted hover:text-white transition-colors rounded focus-ring"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[rgba(11,13,16,0.97)] backdrop-blur-nav border-t border-border-default">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href, pathname)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-150 py-4 min-h-[48px] flex items-center border-b border-border-default last:border-0 focus-ring',
                    active ? 'text-accent' : 'text-text-muted hover:text-accent'
                  )}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
