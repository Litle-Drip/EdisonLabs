export type ProductStatus = 'live' | 'coming-soon'

export interface Product {
  name: string
  slug: string
  tag: string
  description: string
  status: ProductStatus
  url: string
  linkLabel: string
  icon: string // SVG path data key
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
    status: 'live',
    url: 'https://www.thejuiceapp.io/',
    linkLabel: 'thejuiceapp.io',
    icon: 'zap',
  },
  {
    name: 'Predara',
    slug: 'predara',
    tag: 'AI · Markets',
    description: 'Prediction market intelligence tools.',
    status: 'live',
    url: 'https://www.predara.org/',
    linkLabel: 'predara.org',
    icon: 'grid',
  },
  {
    name: 'F1SimHub',
    slug: 'f1simhub',
    tag: 'Racing · Sim',
    description: 'Simulation racing analytics and telemetry.',
    status: 'live',
    url: 'https://www.f1simhub.com/',
    linkLabel: 'f1simhub.com',
    icon: 'flag',
  },
  {
    name: 'Tarmac',
    slug: 'tarmac',
    tag: 'Travel · Crowdsourced',
    description: 'A crowdsourced TSA wait time app — travelers report live security line times across airports so you can plan smarter before you fly.',
    status: 'live',
    url: 'https://tarmac.live/',
    linkLabel: 'tarmac.live',
    icon: 'clock',
  },
  {
    name: 'Atlas',
    slug: 'atlas',
    tag: 'AI · Productivity',
    description: 'Personal AI operating system.',
    status: 'coming-soon',
    url: 'https://discord.com/invite/ny5xs2Vxvu',
    linkLabel: 'Join for early access',
    icon: 'atlas',
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
