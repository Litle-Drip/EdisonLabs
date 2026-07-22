import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href: string
  variant?: 'primary' | 'secondary' | 'discord' | 'substack'
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}

export function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  target,
  rel,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-8 py-3.5 min-h-[48px] font-bold text-[15px] rounded-btn no-underline transition-all duration-200 focus-ring'

  const variants = {
    primary: 'bg-accent text-black hover:bg-accent-hover hover:shadow-[0_0_28px_rgba(77,163,255,0.35)]',
    secondary:
      'bg-transparent text-white border border-border-default backdrop-blur-sm hover:border-accent hover:text-accent hover:bg-[rgba(77,163,255,0.05)]',
    discord:
      'bg-discord text-white hover:bg-discord-hover hover:shadow-[0_0_28px_rgba(88,101,242,0.45)]',
    substack:
      'bg-transparent text-white border border-border-default backdrop-blur-sm hover:border-[#ff6719] hover:text-[#ff6719] hover:bg-[rgba(255,103,25,0.06)]',
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </a>
  )
}
