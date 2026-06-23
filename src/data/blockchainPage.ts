/** Blockchain product route — coming soon until network explorer ships. */
export const blockchainComingSoon = {
  eyebrow: 'Elementa product',
  headline: 'Blockchain',
  subline: 'Network intelligence and routing — on the way.',
  description:
    'A single place to explore supported chains, bridge status, and liquidity paths across the protocol. We are putting the finishing touches on the experience you expect from Elementa.',
  primaryCta: { label: 'Back to home', href: '/' },
  secondaryCta: { label: 'Elementa Wallet', href: '/wallet' },
} as const

export type BlockchainComingSoonData = typeof blockchainComingSoon
