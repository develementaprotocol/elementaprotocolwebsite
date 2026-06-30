import React from "react";
import { cn } from "@/utils/cn";

/** Subtle glass layer over hero backgrounds for readability. */
export function HeroBlurOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[1] bg-[#081421]/25 backdrop-blur-[3px]",
        className,
      )}
    />
  );
}
