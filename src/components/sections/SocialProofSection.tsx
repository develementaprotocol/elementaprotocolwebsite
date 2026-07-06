"use client";

import dynamic from "next/dynamic";
import type { SocialProof } from "@/data/homepage";
import { useIsMdUp } from "@/hooks/useMediaQuery";
import { SocialProofMobile } from "@/components/sections/SocialProofMobile";

const SocialProofDesktop = dynamic(
  () =>
    import("@/components/sections/SocialProofDesktop").then((m) => ({
      default: m.SocialProofDesktop,
    })),
  { loading: () => null },
);

export function SocialProofSection({ socialProof }: { socialProof: SocialProof }) {
  const isMdUp = useIsMdUp();

  if (isMdUp) {
    return <SocialProofDesktop socialProof={socialProof} />;
  }

  return <SocialProofMobile socialProof={socialProof} />;
}
