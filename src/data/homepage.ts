/**
 * Single source of truth for homepage content — swap for CMS/API later.
 * Copy aligned with Figma file "Elementa-App-UI" (Website Design canvas).
 */
export const site = {
  name: 'Elementa Protocol',
  tagline: 'The unified liquidity and interoperability protocol for the decentralized web.',
}


export const navigation = {
  logo: { alt: 'Elementa', src: '/favicon.svg' },
  wordmark: 'Elementa',
  links: [
    { id: 'home', label: 'Home', href: '/' },
    {
      id: 'products',
      label: 'Products',
      href: '#blockchain-section',
      children: [
        {
          id: 'blockchains',
          label: 'Blockchains',
          description: 'Explore supported networks and cross-chain bridges.',
          href: '/blockchain',
        },
        {
          id: 'Elementa-wallet',
          label: 'Elementa Wallet',
          description: 'Self-custodial multi-chain wallet with biometric security.',
          href: '/wallet',
        },
      ],
    },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'docs', label: 'Docs', href: '/docs' },
    { id: 'contact', label: 'Contact Us', href: '/contact' },
  ],
  iconActions: [] as Array<{ id: string; label: string; href: string; asset: string }>,
  cta: { label: 'Get in touch', href: '/contact' },
}

export const hero = {
  headlineParts: [
    { text: 'The Leading Cross Chain ', highlight: false },
    { text: 'Liquidity Protocol', highlight: true },
    { text: ' for DeFi', highlight: false },
  ],
  subheadline:
    'Elementa Protocol is a cross chain liquidity protocol delivering instant asset transfers, zero slippage swaps, omnichain liquidity access, and institutional-grade security',
  primaryCta: { label: 'Launch Wallet', href: '/wallet' },
  secondaryCta: { label: 'Read Documentation', href: '/docs' },
}

export const statsHeading = 'Trusted Cross Chain Liquidity Infrastructure'

export const stats = [
  { id: 'volume', end: 12.4, suffix: 'B+', decimals: 1, label: 'TOTAL VOLUME (USD)' },
  { id: 'tvl', end: 850, suffix: 'M+', decimals: 0, label: 'TOTAL VALUE LOCKED' },
  { id: 'chains', end: 45, suffix: '+', decimals: 0, label: 'SUPPORTED NETWORKS' },
  { id: 'uptime', end: 99.99, suffix: '%', decimals: 2, label: 'PROTOCOL UPTIME' },
]

export const blockchainCards = [
  {
    id: 'bc1',
    title: 'Omnichain Liquidity',
    body: 'Access deep cross chain liquidity across leading blockchain ecosystems with optimized routing and efficient asset movement.',
    iconKey: 'what-is-blockchain',
  },
  {
    id: 'bc2',
    title: 'Zero Slippage Swaps',
    body: 'Execute cross chain swaps with minimal latency and zero slippage through intelligent liquidity aggregation.',
    iconKey: 'multichain',
  },
  {
    id: 'bc3',
    title: 'Institutional Security',
    body: 'Enterprise-grade security architecture designed for institutional DeFi applications and large-scale liquidity operations.',
    iconKey: 'security',
  },
]

export const bento = {
  sectionTitle: 'Scalable Cross Chain Infrastructure for DeFi',
  tiles: [
    {
      id: 'swap',
      colSpan: 2,
      rowSpan: 2,
      title: 'Universal Routing Engine',
      description:
        'Our advanced routing engine discovers the fastest and most efficient path for cross chain transactions across multiple blockchain networks.',
      metric: { value: '15ms', label: 'LATENCY' },
      variant: 'large',
    },
    {
      id: 'wallet',
      colSpan: 2,
      title: 'Smart Contract Abstraction',
      description:
        'Simplify blockchain interoperability through smart contract abstraction that enables seamless multi-chain interactions.',
      icon: 'wallet',
    },
    {
      id: 'chains',
      title: 'Integrations',
      stat: '250+',
      caption: 'Active dApps',
    },
    {
      id: 'fees',
      title: 'Gas Optimized',
      stat: '-40%',
      caption: 'Cheaper Transactions',
    },
  ],
}

export const featuredGuide = {
  kicker: 'NEW FEATURE GUIDE',
  title: 'Cross Chain Liquidity Guide for DeFi Builders',
  description:
    'Learn how to leverage omnichain liquidity, optimize cross chain swaps, and build scalable DeFi applications using Elementa Protocol.',
  cta: { label: 'Read the Guide', href: '/docs' },
}

export const seoSection = {
  blocks: [
    {
      id: 'what-is',
      title: 'What is Cross Chain Liquidity?',
      body: 'Cross chain liquidity allows users and decentralized applications to move assets seamlessly between multiple blockchain networks. Elementa Protocol provides a secure and scalable cross chain liquidity infrastructure that enables instant transfers, liquidity aggregation, and efficient cross chain swaps across the DeFi ecosystem.',
    },
    {
      id: 'why-elementa',
      title: 'Why Choose Elementa Protocol?',
      body: 'Elementa Protocol combines omnichain liquidity, intelligent routing, zero-slippage execution, and institutional-grade security to create a powerful cross chain infrastructure for traders, developers, and enterprises.',
    },
  ],
}

export const socialProof = {
  title: 'Trusted Cross Chain Liquidity Network',
  subtitle: 'Secured and verified by top infrastructure providers',
  partners: [
    { id: 'p1', name: 'A16Z CRYPTO' },
    { id: 'p2', name: 'FRAMEWORK' },
    { id: 'p3', name: 'PARADIGM' },
    { id: 'p4', name: 'SEQUOIA' },
    { id: 'p5', name: 'PANTERA' },
  ],
  testimonials: [
    {
      id: 't1',
      quote:
        "Elementa's liquidity aggregation is unmatched. We integrated their API in days, instantly unlocking cross-chain deposits for our users with zero extra overhead.",
      author: 'David Sun',
      role: 'CTO, Radiant Capital',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    },
    {
      id: 't2',
      quote:
        "The most reliable interoperability infrastructure we've ever used. Since moving to Elementa, our cross-chain failure rate has essentially dropped to zero.",
      author: 'Sarah Jenkins',
      role: 'Head of Product, GMX',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    },
    {
      id: 't3',
      quote:
        'Their smart contract abstraction is a game changer. Users can interact with our dApp from Ethereum without even realizing we are deployed on Arbitrum.',
      author: 'Michael Osei',
      role: 'Co-founder, Camelot DEX',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
    },
    {
      id: 't4',
      quote:
        'Elementa solved the liquidity fragmentation problem perfectly. It operates silently in the background, offering exactly the routing efficiency our institutional clients demand.',
      author: 'Liam Fitzgerald',
      role: 'Director of Trading, Wintermute',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam',
    },
    {
      id: 't5',
      quote:
        'Security audits and the wallet UX are best-in-class. We recommend Elementa to every builder in our accelerator.',
      author: 'Priya Nandakumar',
      role: 'Partner, Lattice Ventures',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Priya',
    },
    {
      id: 't6',
      quote:
        'The developer experience is exceptional. The Elementa SDK makes cross-chain state management feel like working on a single chain.',
      author: 'Chen Wei',
      role: 'Lead Architect, Hashflow',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chen',
    },
    {
      id: 't7',
      quote:
        'As an institutional player, uptime and security are our top priorities. Elementa has consistently delivered on both fronts during peak volatility.',
      author: 'Jameson Lopp',
      role: 'Security Engineer, Casa',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jameson',
    },
    {
      id: 't8',
      quote:
        'The speed of asset transfers via Elementa is noticeably faster than legacy bridges. It is the bridge we actually enjoy using.',
      author: 'Elena Rossi',
      role: 'DeFi Strategist, Aave',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
    },
  ],
}

export const helpSection = {
  titleLead: 'Developer & User ',
  titleAccent: 'Support',
  titleTrail: ' Center',
  subtitleBeforeBreak: "Access our comprehensive knowledge base, API documentation, and technical support to build on the Elementa Protocol.",
  searchPlaceholder: 'Search docs, API references, or tutorials...',
}

export const faq = {
  sectionLabel: 'Technical FAQ',
  items: [
    {
      id: 'faq1',
      question: 'How does Elementa achieve zero-slippage cross-chain swaps?',
      answer:
        'Elementa utilizes a proprietary Just-In-Time (JIT) liquidity routing algorithm. By aggregating liquidity across 100+ DEXs and employing intent-based execution, the protocol guarantees price execution before the transaction is finalized.',
      defaultOpen: true,
    },
    {
      id: 'faq2',
      question: 'How do I integrate the Elementa Widget?',
      answer:
        'The Elementa Widget can be integrated into any React or Next.js application using our npm package. It requires less than 10 lines of code and provides out-of-the-box UI for cross-chain deposits and swaps.',
    },
    {
      id: 'faq3',
      question: 'What happens if a destination chain experiences downtime?',
      answer:
        'If the destination network is congested or halts, the transaction is safely reverted on the source chain through our decentralized oracle network. Funds are never stuck in transit.',
    },
    {
      id: 'faq4',
      question: 'Is the protocol fully audited?',
      answer:
        'Yes. Elementa Protocol undergoes continuous auditing by Trail of Bits and OpenZeppelin. Furthermore, our smart contracts are covered by a $5M bug bounty program on Immunefi.',
    },
  ],
}

export const community = {
  headline: 'Join the Elementa Developer Network',
  subheadline:
    "Connect with over 150,000+ developers, node operators, and DeFi enthusiasts shaping the omnichain future.",
  discord: {
    title: 'Discord',
    description: 'Our primary hub for governance, developer support, and real-time kinetic updates.',
    cta: 'Join server',
    href: 'https://discord.gg/elementapro',
    members: ['person', 'person2', 'person3'],
    memberCount: '+12k',
  },
  twitter: {
    title: 'Twitter',
    description: 'Follow @Elementapro for breaking news and technical milestones.',
    cta: 'Follow Updates',
    href: 'https://x.com/ElementaPro',
  },
  telegram: {
    title: 'Telegram',
    description: 'Community discussions and regional channels.',
    cta: 'Join Channel',
    href: 'https://t.me/Elementa',
  },
  newsletter: {
    kicker: 'WEEKLY DIGEST',
    title: 'Kinetic Review',
    description: 'Deep dives into protocol architecture and ecosystem growth.',
    placeholder: 'elementaprotocol.com',
    cta: 'Subscribe',
  },
}
export const ecosystem = {
  sectionTitle: 'Cross Chain DeFi Ecosystem',
  wallet: {
    title: 'Elementa Wallet',
    description:
      'Securely manage assets and access cross chain liquidity from a single unified interface.',
    tags: ['Buy', 'Sell', 'Swap'],
  },
  chain: {
    title: 'Elementa Chain',
    description:
      'A blockchain interoperability layer designed for fast, secure, and scalable cross chain communication.',
    status: 'COMING SOON',
  },
}



export const footer = {
  brand: 'Elementa',
  copyrightLine: '© 2026 Elementa GLOBAL INC. ALL RIGHTS RESERVED.',
  links: [
    { label: 'TERMS & CONDITION', href: '/terms' },
    { label: 'PRIVACY POLICY', href: '/privacy' },
    { label: 'SUPPORT', href: '/contact' },
  ],
  social: [
    { id: 'twitter', label: 'Twitter', href: 'https://x.com/ElementaPro', asset: 'twitter' },
    { id: 'discord', label: 'Discord', href: 'https://discord.gg/Elementa', asset: 'discord' },
    { id: 'telegram', label: 'Telegram', href: 'https://t.me/Elementa', asset: 'telegram' },
  ],
  cta: { label: 'Get in touch', href: '/contact' },
}


export type HeroContent = typeof hero
export type StatMetric = (typeof stats)[number]
export type BlockchainCard = (typeof blockchainCards)[number]
export type BentoContent = typeof bento
export type FeaturedGuide = typeof featuredGuide
export type SeoSectionContent = typeof seoSection
export type SocialProof = typeof socialProof
export type CommunityContent = typeof community
export type EcosystemContent = typeof ecosystem
export type FooterContent = typeof footer
export type NavigationContent = typeof navigation



