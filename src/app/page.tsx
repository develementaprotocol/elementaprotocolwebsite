import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomePageClient } from "@/components/home/HomePageClient";
import { hero } from "@/data/homepage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Elementa Protocol multi-chain liquidity and DeFi infrastructure for builders and users.",
};

export default function Page() {
  return (
    <>
      <HeroSection hero={hero} />
      <HomePageClient />
    </>
  );
}
