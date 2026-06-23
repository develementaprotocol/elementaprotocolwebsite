"use client";

import { lazy, Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ScrollRevealSection } from "@/components/ScrollRevealSection";
import {
  hero,
  stats,
  blockchainCards,
  bento,
  featuredGuide,
  socialProof,
  helpSection,
  faq,
  community,
  ecosystem,
} from "@/data/homepage";

const BlockchainSection = lazy(() =>
  import("@/components/sections/BlockchainSection").then((m) => ({
    default: m.BlockchainSection,
  })),
);
const BentoSection = lazy(() =>
  import("@/components/sections/BentoSection").then((m) => ({
    default: m.BentoSection,
  })),
);
const FeaturedGuideSection = lazy(() =>
  import("@/components/sections/FeaturedGuideSection").then((m) => ({
    default: m.FeaturedGuideSection,
  })),
);
const EcosystemSection = lazy(() =>
  import("@/components/sections/EcosystemSection").then((m) => ({
    default: m.EcosystemSection,
  })),
);
const SocialProofSection = lazy(() =>
  import("@/components/sections/SocialProofSection").then((m) => ({
    default: m.SocialProofSection,
  })),
);
const HelpFaqSection = lazy(() =>
  import("@/components/sections/HelpFaqSection").then((m) => ({
    default: m.HelpFaqSection,
  })),
);
const CommunitySection = lazy(() =>
  import("@/components/sections/CommunitySection").then((m) => ({
    default: m.CommunitySection,
  })),
);

function SectionFallback() {
  return (
    <div className="flex min-h-[12rem] items-center justify-center border-t border-white/5 py-16">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-Elementa-accent border-t-transparent" />
    </div>
  );
}

function useScrollToHashOnHome() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const scrollToHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const navOffset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };

    // Only react to in-page hash updates (e.g. footer/CTA anchors). Do not run
    // on mount — that was overriding route scroll-to-top and opening mid-page.
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);
}

export function HomePage() {
  useScrollToHashOnHome();

  return (
    <main>
      <HeroSection hero={hero} stats={stats} />
      <Suspense fallback={<SectionFallback />}>
        <ScrollRevealSection>
          <BlockchainSection cards={blockchainCards} />
        </ScrollRevealSection>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ScrollRevealSection>
          <BentoSection bento={bento} />
        </ScrollRevealSection>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ScrollRevealSection>
          <FeaturedGuideSection guide={featuredGuide} />
        </ScrollRevealSection>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ScrollRevealSection>
          <EcosystemSection ecosystem={ecosystem} />
        </ScrollRevealSection>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ScrollRevealSection>
          <SocialProofSection socialProof={socialProof} />
        </ScrollRevealSection>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ScrollRevealSection>
          <HelpFaqSection help={helpSection} faq={faq} />
        </ScrollRevealSection>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CommunitySection community={community} />
      </Suspense>
    </main>
  );
}
