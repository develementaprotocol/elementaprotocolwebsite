import Image from "next/image";
import { cn } from "@/utils/cn";

/** Matches home/page hero reflect fade — keeps the hard edge soft at the bottom. */
const HERO_REFLECT_MASK =
  "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.35) 88%, transparent 100%)";

/** Mobile hero reflect — lightweight WebP; only one instance should use `priorityLoad`. */
export function MobileHeroAtmosphere({
  className = "",
  opacityClass = "opacity-60",
  priorityLoad = false,
}: {
  className?: string;
  opacityClass?: string;
  /** Set on the in-hero instance so Lighthouse can discover the LCP image eagerly. */
  priorityLoad?: boolean;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 md:hidden",
        className,
      )}
      aria-hidden
      style={{
        WebkitMaskImage: HERO_REFLECT_MASK,
        maskImage: HERO_REFLECT_MASK,
      }}
    >
      <Image
          src="/assets/top-reflect-mobile.webp"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className={cn("object-cover", opacityClass)}
          priority={priorityLoad}
          fetchPriority={priorityLoad ? "high" : "low"}
          loading={priorityLoad ? "eager" : "lazy"}
        />
    </div>
  );
}
