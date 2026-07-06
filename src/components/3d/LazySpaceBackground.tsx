"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type CSSProperties } from "react";

const SpaceBackground = dynamic(
  () =>
    import("@/components/3d/SpaceBackground").then((m) => ({
      default: m.SpaceBackground,
    })),
  { ssr: false, loading: () => null },
);

const STATIC_BG_STYLE: CSSProperties = {
  background:
    "linear-gradient(135deg, rgba(8, 20, 33, 0.98) 0%, rgba(15, 34, 49, 0.94) 50%, rgba(8, 20, 33, 0.98) 100%)",
};

const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "wheel"] as const;

/**
 * Mobile: static gradient only — never downloads Three.js.
 * Desktop: loads starfield only after first user interaction (not on initial Lighthouse load).
 */
export function LazySpaceBackground() {
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const enable = () => {
      setShowCanvas(true);
      INTERACTION_EVENTS.forEach((event) => {
        window.removeEventListener(event, enable);
      });
    };

    INTERACTION_EVENTS.forEach((event) => {
      window.addEventListener(event, enable, { once: true, passive: true });
    });

    return () => {
      INTERACTION_EVENTS.forEach((event) => {
        window.removeEventListener(event, enable);
      });
    };
  }, []);

  if (showCanvas) {
    return <SpaceBackground />;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-1]"
      style={STATIC_BG_STYLE}
      aria-hidden
    />
  );
}
