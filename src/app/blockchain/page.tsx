import type { Metadata } from "next";
import { BlockchainComingSoonContent } from "@/components/blockchain/BlockchainComingSoonContent";

export const metadata: Metadata = {
  title: "Blockchain",
  description:
    "The Elementa blockchain overview and network explorer coming soon. Cross-chain infrastructure built for clarity and control.",
};

export default function BlockchainPage() {
  return <BlockchainComingSoonContent />;
}
