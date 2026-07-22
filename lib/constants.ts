export const SITE = {
  name: 'Edison Labs',
  tagline: 'Edison Labs LLC — Software Studio',
  description:
    'Edison Labs develops independent digital products across blockchain, artificial intelligence, simulation, and emerging technology.',
  url: 'https://edison-labs.com',
  email: 'edisonlabschicago@gmail.com',
  location: 'Chicago, IL',
  year: '2025',
} as const

export const SOCIAL = {
  twitter: 'https://x.com/Edison_Labs',
  discord: 'https://discord.com/invite/ny5xs2Vxvu',
  substack: 'https://edisonlabs.substack.com/',
} as const

export const NAV_LINKS = [
  { href: '/#products', label: 'Products' },
  { href: '/lab', label: 'Lab' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export const FOOTER_LINKS = [
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/risk', label: 'Risk Disclosure' },
] as const
