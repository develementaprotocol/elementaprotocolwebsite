/**
 * Elementa Wallet product page — copy aligned with Elementa App UI / ecosystem wallet tile.
 * Figma: Hero Section (1145:398) — wallet landing hero.
 */
export const walletHero = {
  headlineParts: [
    { text: 'The Ultimate ', highlight: false },
    { text: 'Web3 Wallet', highlight: true },
    { text: ' & Cross-Chain Liquidity Protocol', highlight: false },
  ],
  subheadline:
    'Manage digital assets securely with the Elementa Web3 Wallet. Access cross-chain liquidity, decentralized finance (DeFi), Bitcoin Ordinals, Solana, and over 50 blockchain networks through one secure omnichain platform.',
  primaryCta: { label: 'Download Wallet', href: '#' },
  secondaryCta: { label: 'View Documentation', href: '/docs' },
}

export type WalletHeroContent = typeof walletHero

export const walletSecurity = {
  title: 'Uncompromising Security Architecture',
  bullets: [
    'Zero-Knowledge proofs and MPC-based signing flows for absolute privacy.',
    'Hardware wallet integration for institutional-grade asset protection.',
    'Decentralized identity recovery powered by Elementa nodes.',
    'Strictly non-custodial: you maintain complete sovereignty over your keys.',
  ],
}

export const walletFeatures = {
  sectionTitle: 'Built for true interoperability',
  sectionSubtitle: 'Experience the fastest routing engine combined with absolute self-custody. Seamlessly manage assets across 50+ blockchains.',
  items: [
    {
      id: 'wf1',
      title: 'Complete Sovereignty',
      body: 'Your keys, your crypto. The Elementa Wallet utilizes secure enclaves to ensure your assets are impenetrable.',
      iconKey: 'shield',
    },
    {
      id: 'wf2',
      title: 'Biometric Authentication',
      body: 'Frictionless access via FaceID and TouchID, blending Web2 convenience with Web3 security standards.',
      iconKey: 'fingerprint',
    },
    {
      id: 'wf3',
      title: 'Omnichain Swaps',
      body: 'Execute complex cross-chain trades natively. Elementa routes through 100+ DEXs for optimal price execution.',
      iconKey: 'swap',
    },
    {
      id: 'wf4',
      title: 'Transaction Simulation',
      body: 'Advanced smart contract decoding simulates your transaction outcomes before you ever sign.',
      iconKey: 'file',
    },
    {
      id: 'wf5',
      title: 'Unified Dashboard',
      body: 'Track your entire portfolio across L1s, L2s, and AppChains in one cohesive, real-time interface.',
      iconKey: 'chart',
    },
    {
      id: 'wf6',
      title: 'Social Recovery',
      body: 'Mitigate the risk of seed phrase loss with encrypted, decentralized social recovery mechanisms.',
      iconKey: 'key',
    },
  ],
}

/** Wallet-specific FAQ — optional override for HelpFaqSection */
export const walletFaq = {
  sectionLabel: 'Wallet FAQs',
  items: [
    {
      id: 'wfq1',
      question: 'Is the Elementa Wallet fully non-custodial?',
      answer:
        'Absolutely. Elementa operates on a strict zero-knowledge architecture. Your private keys are encrypted locally and never transmitted to our servers.',
      defaultOpen: true,
    },
    {
      id: 'wfq2',
      question: 'Which networks are currently supported?',
      answer:
        'Elementa natively supports Ethereum, Solana, Cosmos, all major EVM L2s (Arbitrum, Optimism, Base), and is continuously integrating new AppChains.',
    },
    {
      id: 'wfq3',
      question: 'Can I connect my hardware wallet?',
      answer:
        'Yes. Elementa provides seamless integration with Ledger, Trezor, and Keystone, allowing you to use our interface while signing offline.',
    },
    {
      id: 'wfq4',
      question: 'How does the wallet calculate cross-chain fees?',
      answer:
        'Our routing engine simulates the transaction across multiple bridges and DEXs, quoting you a unified fee that covers source gas, destination gas, and bridging costs upfront.',
    },
  ],
}

export const coreCapabilities = {
  title: 'Everything You Need to Manage Your Web3 Assets',
  items: [
    {
      id: 'cc1',
      title: 'Swap Instantly',
      description:
        'Swap crypto across multiple blockchain networks using optimized liquidity routing for the best exchange rates with minimal slippage.',
      type: 'large',
      iconAsset: 'coreLogo',
    },
    {
      id: 'cc2',
      title: '50+ Blockchains',
      description:
        'Access Ethereum, Solana, Bitcoin, BNB Chain, Polygon, Avalanche, Base and more from one Web3 wallet.',
      type: 'small',
      iconAsset: 'blockchainLogo',
    },
    {
      id: 'cc3',
      title: 'EVM Pro',
      description:
        'Secure management of Ethereum-compatible assets with native Layer-2 support and advanced transaction controls.',
      tags: ['ETH', 'EVM'],
      type: 'bottom',
      iconAsset: 'evmLogo',
    },
    {
      id: 'cc4',
      title: 'Bitcoin Ordinals',
      description:
        'Safely store, manage and transfer Bitcoin Ordinals, BRC-20 assets and BTC NFTs.',
      tags: ['BTC', 'ORDI'],
      type: 'bottom',
      iconAsset: 'bitcoinLogo',
    },
    {
      id: 'cc5',
      title: 'Solana Native',
      description:
        'Fast and secure Solana wallet with staking, token management and DeFi integrations.',
      tags: ['SOL', 'JUP'],
      type: 'bottom',
      iconAsset: 'solanaLogo',
    },
  ],
}

export const powerWalletData = {
  sectionTitle: 'Why Choose Elementa Wallet?',
  items: [
    {
      id: 'pw1',
      title: 'Omnichain Accessibility',
      description:
        'Connect to 50+ blockchain networks from a single decentralized wallet.',
      iconKey: 'multiChainIcon',
    },
    {
      id: 'pw2',
      title: 'Institutional Security',
      description:
        'Enterprise-grade encryption, smart contract audits and non-custodial key management.',
      iconKey: 'secureInfraIcon',
    },
    {
      id: 'pw3',
      title: 'JIT Liquidity Routing',
      description:
        'Smart liquidity routing automatically finds the best cross-chain trading path.',
      iconKey: 'fastTransactionsIcon',
    },
  ],
}

export const joinWalletData = {
  title: 'Experience the Future of Web3 Wallets',
  description:
    'Take complete control of your digital assets with a secure, decentralized wallet designed for cross-chain liquidity, institutional security and seamless DeFi access.',
  primaryCta: 'Download App',
  secondaryCta: 'Know More',
}

export type JoinWalletData = typeof joinWalletData
export type CoreCapabilities = typeof coreCapabilities
export type CoreCapabilityItem = (typeof coreCapabilities.items)[number]
