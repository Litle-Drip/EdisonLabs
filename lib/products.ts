export type ProductStatus = 'live' | 'coming-soon'

export interface Product {
  name: string
  slug: string
  tag: string
  description: string
  longDescription: string
  about: string[]          // paragraphs for the About section
  status: ProductStatus
  url: string
  linkLabel: string
  ctaLabel: string         // full CTA button text
  icon: string             // SVG path data key
  accentColor: string      // Tailwind arbitrary hex for gradient / glow
  metaDescription: string  // unique <meta description> for the page
}

export interface TeaserProject {
  codename: string
  tag: string
  description: string
  iconKey: string
  url: string
}

export interface LabExperiment {
  label: string
  description: string
  iconKey: string
}

export const products: Product[] = [
  {
    name: 'The Juice',
    slug: 'the-juice',
    tag: 'Blockchain · P2P',
    description: 'Peer-to-peer blockchain challenges.',
    longDescription: 'Trustless peer-to-peer challenges powered by blockchain — no middleman, no house edge.',
    about: [
      'The Juice lets users challenge each other directly on blockchain-verified outcomes. Every match is settled on-chain, removing the need for a trusted third party and ensuring that results are transparent and immutable.',
      'Built for users who want provably fair competition, The Juice combines a clean consumer interface with the security guarantees of decentralised smart contracts. Whether you\'re challenging a friend or competing against the community, the outcome is always verifiable.',
      'The Juice is live and available to users today at thejuiceapp.io.',
    ],
    status: 'live',
    url: 'https://www.thejuiceapp.io/',
    linkLabel: 'thejuiceapp.io',
    ctaLabel: 'Open The Juice',
    icon: 'zap',
    accentColor: '#4DA3FF',
    metaDescription: 'The Juice — peer-to-peer blockchain challenges with on-chain settlement. No middleman, no house edge. Built by Edison Labs.',
  },
  {
    name: 'Predara',
    slug: 'predara',
    tag: 'AI · Markets',
    description: 'Prediction market intelligence tools.',
    longDescription: 'AI-powered intelligence layer for prediction markets — surface signal, cut through noise.',
    about: [
      'Predara gives traders and researchers a smarter lens on prediction market activity. Instead of scrolling through raw market feeds, Predara surfaces the most meaningful signals — highlighting where informed money is moving and why.',
      'The platform uses AI to synthesise market data, news, and community sentiment into actionable intelligence. Whether you\'re trading on Polymarket or researching macro trends, Predara helps you stay ahead of the crowd.',
      'Predara is live at predara.org.',
    ],
    status: 'live',
    url: 'https://www.predara.org/',
    linkLabel: 'predara.org',
    ctaLabel: 'Open Predara',
    icon: 'grid',
    accentColor: '#a78bfa',
    metaDescription: 'Predara — AI-powered prediction market intelligence tools. Surface signal, cut through noise. Built by Edison Labs.',
  },
  {
    name: 'F1SimHub',
    slug: 'f1simhub',
    tag: 'Racing · Sim',
    description: 'Simulation racing analytics and telemetry.',
    longDescription: 'Real-time telemetry and deep analytics for sim racing — built for drivers who want data, not just lap times.',
    about: [
      'F1SimHub connects to your simulator and captures rich telemetry data — throttle, brake, steering, tyre temperatures, sector times, and more. It turns raw numbers into clear, actionable insights that help you find tenths.',
      'Whether you\'re a casual driver looking to improve consistency or a competitive sim racer chasing podiums, F1SimHub gives you the same kind of data analysis used by professional motorsport engineers, packaged into a clean and approachable interface.',
      'F1SimHub supports the major sim titles and is live at f1simhub.com.',
    ],
    status: 'live',
    url: 'https://www.f1simhub.com/',
    linkLabel: 'f1simhub.com',
    ctaLabel: 'Open F1SimHub',
    icon: 'flag',
    accentColor: '#f43f5e',
    metaDescription: 'F1SimHub — simulation racing analytics and real-time telemetry for sim drivers. Built by Edison Labs.',
  },
  {
    name: 'Tarmac',
    slug: 'tarmac',
    tag: 'Travel · Crowdsourced',
    description: 'A crowdsourced TSA wait time app — travelers report live security line times across airports so you can plan smarter before you fly.',
    longDescription: 'Live, crowdsourced TSA wait times — so you know exactly how early to arrive.',
    about: [
      'Tarmac is a crowdsourced app where travellers report real-time TSA security wait times at airports across the US. Instead of guessing when to leave for the airport, you get data from people who just walked through the line.',
      'Reports are timestamped and location-verified, giving you a live picture of current wait conditions at your specific terminal and checkpoint. The more travellers report, the more accurate Tarmac becomes for everyone.',
      'Tarmac is free to use and live at tarmac.live. No account required — just open, check, and go.',
    ],
    status: 'live',
    url: 'https://tarmac.live/',
    linkLabel: 'tarmac.live',
    ctaLabel: 'Open Tarmac',
    icon: 'clock',
    accentColor: '#22c55e',
    metaDescription: 'Tarmac — crowdsourced TSA wait times. Travelers report live security line times so you can plan smarter. Built by Edison Labs.',
  },
  {
    name: 'Atlas',
    slug: 'atlas',
    tag: 'AI · Productivity',
    description: 'Personal AI operating system.',
    longDescription: 'Your personal AI operating system — an intelligent layer that reasons, remembers, and acts on your behalf.',
    about: [
      'Atlas is being built as a personal AI operating system. Rather than a single-purpose chatbot, Atlas is designed to operate across your digital life — connecting context from your work, your calendar, your communication, and your goals into a unified intelligence layer.',
      'The vision is a system that knows you well enough to anticipate what you need, surface the right information at the right time, and take action on your behalf — without you having to prompt it from scratch every time.',
      'Atlas is currently in development. Join the Discord for early access and updates as we get closer to launch.',
    ],
    status: 'coming-soon',
    url: 'https://discord.com/invite/ny5xs2Vxvu',
    linkLabel: 'discord.com/invite/ny5xs2Vxvu',
    ctaLabel: 'Join for early access',
    icon: 'atlas',
    accentColor: '#f59e0b',
    metaDescription: 'Atlas — personal AI operating system by Edison Labs. Coming soon. Join Discord for early access.',
  },
]

export const teaserProjects: TeaserProject[] = [
  {
    codename: 'Project Alpha',
    tag: 'AI · Automation',
    description:
      'A new tool in the intelligence stack — designed to surface signal from noise across real-time data streams. Details dropping to the community first.',
    iconKey: 'sun',
    url: 'https://discord.com/invite/ny5xs2Vxvu',
  },
  {
    codename: 'Project Beta',
    tag: 'Web3 · Analytics',
    description:
      'On-chain analytics reimagined — giving traders and builders a cleaner lens on protocol activity without the custodial overhead. Coming soon.',
    iconKey: 'activity',
    url: 'https://discord.com/invite/ny5xs2Vxvu',
  },
  {
    codename: 'Project Gamma',
    tag: 'Data · Visualization',
    description:
      'A dashboard layer for power users who want their data surfaced, not buried. Built for speed, designed for clarity. More details on the way.',
    iconKey: 'monitor',
    url: 'https://discord.com/invite/ny5xs2Vxvu',
  },
]

export const labExperiments: LabExperiment[] = [
  {
    label: 'AI Systems',
    description: 'Agents and tools that reason, route, and act on your behalf.',
    iconKey: 'ai',
  },
  {
    label: 'Prediction Markets',
    description: 'New interfaces for understanding and trading on uncertainty.',
    iconKey: 'trending-up',
  },
  {
    label: 'Simulation Analytics',
    description: 'Data layers for sim racing and real-time motorsport telemetry.',
    iconKey: 'flag',
  },
  {
    label: 'Developer Tools',
    description: 'Infrastructure and utilities that make building faster and cleaner.',
    iconKey: 'code',
  },
  {
    label: 'Productivity Tools',
    description: 'Personal software for staying organised and thinking clearly.',
    iconKey: 'calendar',
  },
]
