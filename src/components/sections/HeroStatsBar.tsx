"use client";

import { useRef, useEffect } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/hooks/useMediaQuery";
import type { StatMetric } from "@/data/homepage";

function StatCounter({
  stat,
  reduced,
  className = "",
}: {
  stat: StatMetric;
  reduced: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduced) {
      el.textContent = stat.end.toFixed(stat.decimals) + stat.suffix;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 2000;
        const from = 0;
        const to = stat.end;

        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - p) ** 3;
          const value = from + (to - from) * eased;
          el.textContent = value.toFixed(stat.decimals) + stat.suffix;
          if (p < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.2, rootMargin: "-50px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat.end, stat.decimals, stat.suffix, reduced]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`.trim()}>
      0{stat.suffix}
    </span>
  );
}

/** Client-only stats bar — hero background stays server-rendered for LCP. */
export function HeroStatsBar({
  stats,
  heading,
}: {
  stats: StatMetric[];
  heading?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  return (
    <section className="site-section relative z-10 w-full border-y border-white/5 bg-slate-900/40 max-md:backdrop-blur-none md:backdrop-blur-md">
      <div className="container-standard">
        {heading ? (
          <h2 className="section-heading pt-8 text-center text-white md:pt-10">
            {heading}
          </h2>
        ) : null}
        <div
          className={`section-inner grid grid-cols-2 gap-y-10 py-6 sm:grid-cols-2 md:grid-cols-4 md:py-0 ${heading ? "pt-6 md:pt-8" : ""}`}
        >
          {stats.map((s) => (
            <div
              key={s.id}
              className="flex flex-col items-center gap-1 border-r border-white/5 text-center last:border-r-0 max-md:[&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:[&:not(:last-child)]:border-r"
            >
              <StatCounter
                stat={s}
                reduced={reduced || isMobile}
                className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-Elementa-accent"
              />
              <span className="font-display text-[10px] font-bold uppercase tracking-[2px] text-Elementa-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
