import type { Metadata } from "next";
import { WalletHeroSection } from "@/components/sections/WalletHeroSection";
import { WalletPageClient } from "@/components/home/WalletPageClient";
import { walletHero } from "@/data/walletPage";

export const metadata: Metadata = {
  title: "Elementa Wallet",
  description:
    "Self-custodial multi-chain wallet — security, speed, and clarity for daily Web3 flows.",
  openGraph: {
    title: "Elementa Wallet",
    description: "One place for crypto, NFTs, and Web3 access.",
  },
};

export default function Page() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/assets/wallet-hero-left-mobile.webp"
        fetchPriority="high"
      />
      <WalletHeroSection hero={walletHero} />
      <WalletPageClient />
    </>
  );
}
