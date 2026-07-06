"use client";

import Image from "next/image";
import { useIsMdUp } from "@/hooks/useMediaQuery";

/** Desktop-only hero reflect — priority preload only when viewport is md+. */
export function DesktopHeroReflect({
  className = "object-cover opacity-60",
  opacityClass = "opacity-60",
  priorityLoad = true,
}: {
  className?: string;
  opacityClass?: string;
  /** Disable on routes with their own LCP image (e.g. /wallet). */
  priorityLoad?: boolean;
}) {
  const isDesktop = useIsMdUp();

  if (!isDesktop) return null;

  return (
    <div className="absolute inset-0 hidden md:block">
      <Image
        src="/assets/top-reflect-desktop.webp"
        alt=""
        fill
        priority={priorityLoad}
        fetchPriority={priorityLoad ? "high" : "low"}
        loading={priorityLoad ? "eager" : "lazy"}
        sizes="100vw"
        className={`object-cover ${opacityClass} ${className}`.trim()}
      />
    </div>
  );
}
