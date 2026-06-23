"use client";

import { WalletHeroSection } from "@/components/sections/WalletHeroSection";
import { CoreCapabilitiesSection } from "@/components/sections/CoreCapabilitiesSection";
import { PowerYourWalletSection } from "@/components/sections/PowerYourWalletSection";
import { JoinWalletSection } from "@/components/sections/JoinWalletSection";
import { HelpFaqSection } from "@/components/sections/HelpFaqSection";
import { DownloadAppSection } from "@/components/sections/DownloadAppSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { walletHero, walletFaq } from "@/data/walletPage";
import { helpSection, community } from "@/data/homepage";

export function WalletPage() {
  return (
    <div className="wallet-page bg-transparent">
      <WalletHeroSection hero={walletHero} />

      <ScrollRevealSection>
        <CoreCapabilitiesSection />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <PowerYourWalletSection />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <JoinWalletSection />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <HelpFaqSection help={helpSection} faq={walletFaq} />
      </ScrollRevealSection>

      <ScrollRevealSection>
        <DownloadAppSection />
      </ScrollRevealSection>

      <CommunitySection community={community} />
    </div>
  );
}
