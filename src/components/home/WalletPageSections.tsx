"use client";

import dynamic from "next/dynamic";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { LazyOnView } from "@/components/LazyOnView";
import { walletFaq } from "@/data/walletPage";
import { helpSection, community } from "@/data/homepage";
import { WalletHeroMetricsFallback } from "@/components/sections/WalletHeroMetrics";

const WalletHeroMetrics = dynamic(
  () =>
    import("@/components/sections/WalletHeroMetrics").then((m) => ({
      default: m.WalletHeroMetrics,
    })),
  { loading: () => <WalletHeroMetricsFallback />, ssr: false },
);

const CoreCapabilitiesSection = dynamic(
  () =>
    import("@/components/sections/CoreCapabilitiesSection").then((m) => ({
      default: m.CoreCapabilitiesSection,
    })),
  { loading: () => null, ssr: false },
);

const PowerYourWalletSection = dynamic(
  () =>
    import("@/components/sections/PowerYourWalletSection").then((m) => ({
      default: m.PowerYourWalletSection,
    })),
  { loading: () => null, ssr: false },
);

const JoinWalletSection = dynamic(
  () =>
    import("@/components/sections/JoinWalletSection").then((m) => ({
      default: m.JoinWalletSection,
    })),
  { loading: () => null, ssr: false },
);

const HelpFaqSection = dynamic(
  () =>
    import("@/components/sections/HelpFaqSection").then((m) => ({
      default: m.HelpFaqSection,
    })),
  { loading: () => null, ssr: false },
);

const DownloadAppSection = dynamic(
  () =>
    import("@/components/sections/DownloadAppSection").then((m) => ({
      default: m.DownloadAppSection,
    })),
  { loading: () => null, ssr: false },
);

const CommunitySection = dynamic(
  () =>
    import("@/components/sections/CommunitySection").then((m) => ({
      default: m.CommunitySection,
    })),
  { loading: () => null, ssr: false },
);

/** Below-fold wallet sections — chunks load on approach, not at hydration. */
export function WalletPageSections() {
  return (
    <>
      <LazyOnView>
        <WalletHeroMetrics />
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <CoreCapabilitiesSection />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <PowerYourWalletSection />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <JoinWalletSection />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <HelpFaqSection help={helpSection} faq={walletFaq} />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <DownloadAppSection />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <CommunitySection community={community} />
      </LazyOnView>
    </>
  );
}
