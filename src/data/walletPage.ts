/**
 * Elementa Wallet product page — copy aligned with Elementa App UI / ecosystem wallet tile.
 * Figma: Hero Section (1145:398) — wallet landing hero.
 */
export const walletHero = {
  headlineParts: [
    { text: 'The Ultimate Gateway to ', highlight: false },
    { text: 'Web3', highlight: true },
    { text: ' Liquidity', highlight: false },
  ],
  subheadline: 'Your unified access point to decentralized finance, omnichain assets, and institutional-grade security.',
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
  title: 'Master the Elementa Ecosystem',
  items: [
    {
      id: 'cc1',
      title: 'Swap Instantly',
      description:
        'Access deep liquidity pools across 200+ DEXs for the best prices on every trade.',
      type: 'large',
      iconAsset: 'coreLogo',
    },
    {
      id: 'cc2',
      title: '50+ Blockchains',
      description:
        'One wallet, infinite possibilities. Seamless cross-chain transfers.',
      type: 'small',
      iconAsset: 'blockchainLogo',
    },
    {
      id: 'cc3',
      title: 'EVM Pro',
      description:
        'Secure EVM account management with native L2 support and transaction flows.',
      tags: ['ETH', 'EVM'],
      type: 'bottom',
      iconAsset: 'evmLogo',
    },
    {
      id: 'cc4',
      title: 'Bitcoin Ordinals',
      description:
        'Secure UTXO management and inscription gallery. Taproot-ready architecture.',
      tags: ['BTC', 'ORDI'],
      type: 'bottom',
      iconAsset: 'bitcoinLogo',
    },
    {
      id: 'cc5',
      title: 'Solana Native',
      description:
        'High-frequency trading interface with sub-second finality. Direct RPC integration.',
      tags: ['SOL', 'JUP'],
      type: 'bottom',
      iconAsset: 'solanaLogo',
    },
  ],
}

export const powerWalletData = {
  title: 'Elevate Your ',
  titleHighlight: 'Web3 Experience',
  items: [
    {
      id: 'pw1',
      title: 'Omnichain Accessibility',
      description: 'Connect to any decentralized application across any network without manually switching RPCs.',
      iconKey: 'multiChainIcon',
    },
    {
      id: 'pw2',
      title: 'Institutional Security',
      description: 'Audited smart contracts, biometric locks, and decentralized key recovery mechanisms.',
      iconKey: 'secureInfraIcon',
    },
    {
      id: 'pw3',
      title: 'JIT Liquidity Routing',
      description: 'Our proprietary engine guarantees your swaps execute at the absolute best market rate.',
      iconKey: 'fastTransactionsIcon',
    },
  ],
}

export const joinWalletData = {
  title: 'Join Elementa Protocol and experience the future of decentralized liquidity today.',
  description: 'We prioritize true ownership, transparency, and interoperability. With the Elementa Wallet, you can navigate the entire Web3 ecosystem with absolute confidence and unparalleled speed.',
  primaryCta: 'Download App',
  secondaryCta: 'Read the Documentation'
}

export type JoinWalletData = typeof joinWalletData
export type CoreCapabilities = typeof coreCapabilities
export type CoreCapabilityItem = (typeof coreCapabilities.items)[number]
