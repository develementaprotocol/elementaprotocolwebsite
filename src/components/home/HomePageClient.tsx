"use client";

import dynamic from "next/dynamic";
import { HomeClientEffects } from "@/components/home/HomeClientEffects";

const HomePageSections = dynamic(
  () =>
    import("@/components/home/HomePageSections").then((m) => ({
      default: m.HomePageSections,
    })),
  { ssr: false, loading: () => null },
);

/** Below-fold homepage sections — loads in the normal React tree so the page scrolls. */
export function HomePageClient() {
  return (
    <>
      <HomePageSections />
      <HomeClientEffects />
    </>
  );
}
