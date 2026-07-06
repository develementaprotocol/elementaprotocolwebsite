"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const WalletPageSections = dynamic(
  () =>
    import("@/components/home/WalletPageSections").then((m) => ({
      default: m.WalletPageSections,
    })),
  { ssr: false, loading: () => null },
);

const WalletDownloadCtaEnhancer = dynamic(
  () =>
    import("@/components/sections/WalletDownloadCtaEnhancer").then((m) => ({
      default: m.WalletDownloadCtaEnhancer,
    })),
  { ssr: false },
);

/** Client shell — defers below-fold hydration until idle so hero LCP can paint first. */
export function WalletPageClient() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const run = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(run, 1);
    return () => window.clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <>
      <WalletPageSections />
      <WalletDownloadCtaEnhancer />
    </>
  );
}
