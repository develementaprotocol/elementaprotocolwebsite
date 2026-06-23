import type { Metadata } from "next";
import { WalletBodyClass } from "@/components/providers/WalletBodyClass";

export const metadata: Metadata = {
  title: "Elementa Wallet",
  description:
    "Self-custodial multi-chain wallet — security, speed, and clarity for daily Web3 flows.",
  openGraph: {
    title: "Elementa Wallet",
    description: "One place for crypto, NFTs, and Web3 access.",
  },
};

export default function WalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WalletBodyClass />
      {children}
    </>
  );
}
