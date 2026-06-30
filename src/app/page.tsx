import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Elementa Protocol multi-chain liquidity and DeFi infrastructure for builders and users.",
};

export default function Page() {
  return <HomePage />;
}
