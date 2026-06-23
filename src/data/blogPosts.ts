import person1 from '@/assets/person.png';
import person2 from '@/assets/person2.png';
import person3 from '@/assets/person3.png';

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  content?: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  isFeatured?: boolean;
}

export const mockPosts: BlogPost[] = [
  {
    id: 'featured-1',
    category: 'Innovation',
    title: 'The Elementa Wallet V3: Redefining Self-Custody',
    description: 'Discover how the latest version of Elementa Wallet combines MPC technology with an intuitive UI to provide the most secure and simple wallet experience.',
    content: `
      <p className="lead">Self-custody used to be difficult. Seed phrases, hardware wallet setups, and complex gas management made it a barrier for most. Elementa V3 changes that.</p>
      <h3>The End of the Seed Phrase</h3>
      <p>By implementing Multi-Party Computation (MPC), Elementa allows users to secure their assets without the single point of failure that is a 12-word seed phrase. Your keys are split into multiple shares, ensuring that even if one device is lost, your funds remain safe.</p>
      <div className="content-image-wrapper">
        <img src="https://images.unsplash.com/photo-1633158829556-993d5f9984e1?q=80&w=2000&auto=format&fit=crop" alt="Digital security representation" />
      </div>
      <p>This isn't just about security; it's about accessibility. We've built the V3 to feel like a modern banking app while maintaining the absolute decentralization that Web3 demands.</p>
    `,
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000&auto=format&fit=crop',
    author: 'Elementa Team',
    authorImage: person1.src,
    date: 'May 12, 2024',
    readTime: '8 min read',
    isFeatured: true,
  },
  {
    id: '1',
    category: 'Security',
    title: 'MPC vs. Multi-Sig: Why We Chose MPC',
    description: 'A technical deep dive into why Multi-Party Computation is the superior choice for modern mobile wallets.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop',
    author: 'Sarah Jenkins',
    authorImage: person2.src,
    date: 'May 10, 2024',
    readTime: '5 min read',
  },
  {
    id: '2',
    category: 'Product',
    title: 'Mastering the One-Tap Cross-Chain Swap',
    description: 'Learn how to move assets between Ethereum, Solana, and Bitcoin with a single tap in the Elementa Wallet.',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop',
    author: 'David Sun',
    authorImage: person3.src,
    date: 'May 8, 2024',
    readTime: '6 min read',
  },
  {
    id: '3',
    category: 'Guides',
    title: 'How to Recover Your Wallet Without a Seed Phrase',
    description: 'Step-by-step guide on using Elementa’s decentralized social recovery to regain access to your funds.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop',
    author: 'Elena Route',
    authorImage: person1.src,
    date: 'May 5, 2024',
    readTime: '10 min read',
  },
  {
    id: '4',
    category: 'Interface',
    title: 'See the Future: Transaction Simulation Explained',
    description: 'Never sign a malicious transaction again. Our simulator shows exactly what will leave and enter your wallet.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop',
    author: 'Marcus Token',
    authorImage: person2.src,
    date: 'May 1, 2024',
    readTime: '7 min read',
  },
  {
    id: '5',
    category: 'Ecosystem',
    title: 'Connecting to 50+ Blockchains with Elementa',
    description: 'Our unified interface abstracts away the complexity of RPC nodes and bridge logic.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop',
    author: 'Elementa Engineering',
    authorImage: person3.src,
    date: 'April 28, 2024',
    readTime: '15 min read',
  },
  {
    id: '6',
    category: 'Privacy',
    title: 'Zero-Knowledge Identity in Your Pocket',
    description: 'How Elementa uses zk-proofs to keep your on-chain activity private while complying with regulations.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop',
    author: 'Dr. Orion',
    authorImage: person1.src,
    date: 'April 25, 2024',
    readTime: '12 min read',
  },
  {
    id: '7',
    category: 'Guides',
    title: 'Hardware Wallet Support: Ledger & Elementa',
    description: 'The best of both worlds: use the Elementa interface with the security of your Ledger device.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2000&auto=format&fit=crop',
    author: 'Terminal Fox',
    authorImage: person2.src,
    date: 'April 20, 2024',
    readTime: '9 min read',
  },
  {
    id: '8',
    category: 'DeFi',
    title: 'Tracking Your Portfolio Across L2s',
    description: 'A unified view of your assets on Arbitrum, Optimism, Base, and more, all in real-time.',
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=2000&auto=format&fit=crop',
    author: 'Cap Master',
    authorImage: person3.src,
    date: 'April 15, 2024',
    readTime: '11 min read',
  },
  {
    id: '9',
    category: 'Security',
    title: 'Anti-Phishing Shield: How It Works',
    description: 'Elementa Wallet proactively blocks known malicious dApps and flagging suspicious URLs.',
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2000&auto=format&fit=crop',
    author: 'Pixel Nova',
    authorImage: person1.src,
    date: 'April 10, 2024',
    readTime: '6 min read',
  },
];
