"use client";

import dynamic from "next/dynamic";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import { LazyOnView } from "@/components/LazyOnView";
import {
  stats,
  statsHeading,
  blockchainCards,
  bento,
  featuredGuide,
  seoSection,
  socialProof,
  helpSection,
  faq,
  community,
  ecosystem,
} from "@/data/homepage";

const HeroStatsBar = dynamic(
  () =>
    import("@/components/sections/HeroStatsBar").then((m) => ({
      default: m.HeroStatsBar,
    })),
  { loading: () => null, ssr: false },
);

const BlockchainSection = dynamic(
  () =>
    import("@/components/sections/BlockchainSection").then((m) => ({
      default: m.BlockchainSection,
    })),
  { loading: () => null, ssr: false },
);

const BentoSection = dynamic(
  () =>
    import("@/components/sections/BentoSection").then((m) => ({
      default: m.BentoSection,
    })),
  { loading: () => null, ssr: false },
);

const FeaturedGuideSection = dynamic(
  () =>
    import("@/components/sections/FeaturedGuideSection").then((m) => ({
      default: m.FeaturedGuideSection,
    })),
  { loading: () => null, ssr: false },
);

const EcosystemSection = dynamic(
  () =>
    import("@/components/sections/EcosystemSection").then((m) => ({
      default: m.EcosystemSection,
    })),
  { loading: () => null, ssr: false },
);

const SocialProofSection = dynamic(
  () =>
    import("@/components/sections/SocialProofSection").then((m) => ({
      default: m.SocialProofSection,
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

const SeoContentSection = dynamic(
  () =>
    import("@/components/sections/SeoContentSection").then((m) => ({
      default: m.SeoContentSection,
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

/** Below-fold homepage sections — chunks load on approach, not at hydration. */
export function HomePageSections() {
  return (
    <>
      <LazyOnView>
        <HeroStatsBar stats={stats} heading={statsHeading} />
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <BlockchainSection cards={blockchainCards} />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <BentoSection bento={bento} />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <FeaturedGuideSection guide={featuredGuide} />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <EcosystemSection ecosystem={ecosystem} />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <SocialProofSection socialProof={socialProof} />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <SeoContentSection seoSection={seoSection} />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <ScrollRevealSection>
          <HelpFaqSection help={helpSection} faq={faq} />
        </ScrollRevealSection>
      </LazyOnView>

      <LazyOnView>
        <CommunitySection community={community} />
      </LazyOnView>
    </>
  );
}
