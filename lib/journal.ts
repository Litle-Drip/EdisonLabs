export interface JournalEntry {
  slug: string
  date: string          // ISO-8601 date
  category: string
  title: string
  excerpt: string
  body: string[]        // paragraphs
  tags: string[]
}

export const journalEntries: JournalEntry[] = [
  {
    slug: 'introducing-tarmac',
    date: '2026-06-18',
    category: 'Product Launch',
    title: 'Introducing Tarmac — Live TSA Wait Times, Crowdsourced',
    excerpt:
      'Tarmac is our newest live product. It solves one of the most annoying parts of air travel: not knowing how long the security line is before you leave for the airport.',
    body: [
      'Tarmac is our newest live product. It solves one of the most annoying parts of air travel: not knowing how long the security line is before you leave for the airport.',
      "The idea is simple. Travelers report live TSA security wait times at airports across the US as they move through the checkpoint. Those reports are timestamped and surfaced to other travelers who are still planning their trip.",
      "The result is a real-time, community-powered picture of what's happening at any given airport. The more people who report, the more useful it becomes for everyone. It's the kind of product that gets better the more it's used.",
      "Tarmac is free to use, requires no account, and works on any device. We built it because we wanted it ourselves — and it turns out a lot of other travelers did too. Give it a try at tarmac.live.",
    ],
    tags: ['Travel', 'Crowdsourced', 'Product'],
  },
  {
    slug: 'predara-ai-prediction-markets',
    date: '2026-04-02',
    category: 'Product Update',
    title: 'Predara: Building a Smarter Lens on Prediction Markets',
    excerpt:
      'Prediction markets have a signal problem. The raw data is there — but surfacing what matters, and when, is hard. Predara is our answer.',
    body: [
      'Prediction markets have a signal problem. The raw data is there — price movements, volume, sentiment shifts — but surfacing what actually matters, and when, is genuinely hard.',
      "Predara started as an internal tool we built to track markets we were personally interested in. Over time it evolved into something broader: an intelligence layer that uses AI to synthesise market data, news context, and community activity into a cleaner picture of where informed money is moving.",
      "We launched publicly earlier this year at predara.org. Since then we've added new market categories, improved the AI summarisation layer, and started building out the alerting system so you can be notified when a market you're watching crosses a meaningful threshold.",
      'Prediction markets are one of the most interesting areas in tech right now — they sit at the intersection of AI, finance, and collective intelligence. We think the tooling layer is still wide open, and Predara is our stake in the ground.',
    ],
    tags: ['AI', 'Markets', 'Product'],
  },
  {
    slug: 'design-system',
    date: '2026-02-14',
    category: 'Studio',
    title: 'Building a Design System for Edison Labs',
    excerpt:
      "We spent a few weeks building a unified design language across all Edison Labs properties. Here's what we landed on and why.",
    body: [
      "We spent a few weeks late last year auditing the visual design across all our products and properties. Each product had evolved independently, and while they all looked decent in isolation, there was no coherent thread tying them together.",
      "The goal of the design system was to fix that — not by forcing all products to look identical, but by establishing a shared vocabulary: colours, spacing, typography, and interaction patterns that make everything feel like it came from the same studio.",
      "We landed on a dark-first palette anchored by #0B0D10 backgrounds and #4DA3FF accents, with a tight type scale using Inter. Cards use 24px border radius, buttons 12px. Every interactive element has a defined focus-visible ring for accessibility.",
      "The system lives in our component library and is already applied across the marketing site and several products. It's not a design system that tries to solve everything — it solves the things we actually needed to solve, and leaves room for each product to express its own personality within the shared language.",
    ],
    tags: ['Design', 'Studio', 'Engineering'],
  },
  {
    slug: 'the-lab',
    date: '2025-11-30',
    category: 'Studio',
    title: "What's in The Lab",
    excerpt:
      'The Lab is where experiments live before they become products. Not everything ships — but everything teaches us something.',
    body: [
      "Every product at Edison Labs started as an experiment. The Juice began as a question about whether on-chain P2P challenges could be made simple enough for non-crypto-native users. F1SimHub started as a personal project to get better data out of our sim racing sessions.",
      "The Lab is where that experimentation happens in the open. It's a deliberate part of how we work — we invest time in areas we're curious about before we know whether they'll become products, because the exploration itself is valuable.",
      "Right now The Lab is active across five areas: AI systems and agents, prediction market tooling, simulation analytics, developer infrastructure, and personal productivity software. Some of these will ship as products. Some won't. All of them are teaching us things we can apply elsewhere.",
      "We're making The Lab a first-class part of the Edison Labs site because we want to be more transparent about the work that happens before a product is ready to launch. Building in public — even in the pre-product phase — keeps us honest and occasionally surfaces collaborators or early users we wouldn't have found otherwise.",
    ],
    tags: ['Lab', 'Studio', 'Experiments'],
  },
  {
    slug: 'f1simhub-launch',
    date: '2025-09-10',
    category: 'Product Launch',
    title: 'F1SimHub Is Live',
    excerpt:
      'We built F1SimHub because we wanted better data from our own sim racing sessions. It turns out a lot of other sim racers did too.',
    body: [
      "F1SimHub came out of a simple frustration: sim racing games generate enormous amounts of telemetry data, but most of the tooling for analysing that data is either too technical, too expensive, or aimed at real motorsport rather than sim racing.",
      "We built the first version for ourselves — a clean dashboard that connected to our simulator and displayed the metrics that actually helped us improve: brake points, throttle traces, tyre temperatures, sector splits. The kind of data that real F1 engineers have been using for decades, packaged in a way that made sense for a sim racer trying to find two tenths a lap.",
      "After a few months of using it privately we shared it with some friends in the sim racing community. The feedback was immediate and clear: other drivers wanted this too. So we cleaned it up, added support for additional simulator titles, and launched publicly.",
      "F1SimHub is live at f1simhub.com. It connects to your simulator, captures telemetry in real time, and surfaces the insights that actually make you faster.",
    ],
    tags: ['Racing', 'Sim', 'Product'],
  },
]
