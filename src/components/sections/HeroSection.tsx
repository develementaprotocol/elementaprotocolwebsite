"use client";

import { useRef, useEffect } from "react";
import { animate, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import type { HeroContent, StatMetric } from "@/data/homepage";
import { PageHeroBackground } from "@/components/ui/PageHeroBackground";

function StatCounter({
  stat,
  reduced,
}: {
  stat: StatMetric;
  reduced: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (reduced) {
      if (ref.current) {
        ref.current.textContent = stat.end.toFixed(stat.decimals) + stat.suffix;
      }
      return;
    }

    if (inView) {
      const controls = animate(0, stat.end, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent =
              value.toFixed(stat.decimals) + stat.suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, stat.end, stat.decimals, stat.suffix, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      0{stat.suffix}
    </span>
  );
}

export function HeroSection({
  hero,
  stats,
}: {
  hero: HeroContent;
  stats: StatMetric[];
}) {
  const reduced = usePrefersReducedMotion();

  return (
    <>
      <section
        id="hero-section"
        className="hero-parallax-wrap relative flex min-h-[100svh] flex-col overflow-hidden bg-transparent"
        aria-labelledby="hero-heading"
      >
        <PageHeroBackground />

        <div className="container-standard relative z-10 flex flex-1 flex-col items-center justify-center px-2 sm:px-0">
          <div className="section-inner flex w-full max-w-4xl flex-col items-center gap-8 text-center">
            <div className="flex w-full flex-col items-center">
              <h1
                id="hero-heading"
                className="w-full max-w-[1000px] text-center font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1.05] tracking-tight text-Elementa-primary drop-shadow-[0_4px_48px_rgba(0,0,0,0.45)] xl:tracking-[-0.04em]"
              >
                {hero.headlineParts.map((part, i) =>
                  part.highlight ? (
                    <span key={i} className="text-Elementa-accent">
                      {part.text}
                    </span>
                  ) : (
                    <span key={i}>{part.text}</span>
                  ),
                )}
              </h1>
            </div>

            <div className="flex w-full max-w-[640px] flex-col items-center pt-2">
              <p className="w-full text-center font-body text-[clamp(1rem,3vw,1.25rem)] font-light leading-relaxed text-Elementa-muted sm:text-xl">
                {hero.subheadline}
              </p>
            </div>

            <div className="flex w-full flex-col items-stretch justify-center gap-4 px-2 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:px-0 sm:pt-4">
              <a
                href={hero.primaryCta.href}
                className="btn-primary w-full px-10 py-5 sm:w-auto"
              >
                <span className="font-body text-xl leading-7">
                  {hero.primaryCta.label}
                </span>
              </a>
              <a
                href={hero.secondaryCta.href}
                className="btn-secondary w-full px-10 py-5 sm:w-auto"
              >
                <span className="font-body text-xl leading-7">
                  {hero.secondaryCta.label}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section relative z-10 w-full border-y border-white/5 bg-slate-900/40 backdrop-blur-md">
        <div className="container-standard">
          <div className="section-inner grid grid-cols-2 gap-y-10 py-6 sm:grid-cols-2 md:grid-cols-4 md:py-0">
            {stats.map((s) => (
              <div
                key={s.id}
                className="flex flex-col items-center gap-1 border-r border-white/5 text-center last:border-r-0 max-md:[&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:[&:not(:last-child)]:border-r"
              >
                <span className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-tight tracking-tight text-Elementa-accent">
                  <StatCounter stat={s} reduced={reduced} />
                </span>
                <span className="font-display text-[10px] font-bold uppercase tracking-[2px] text-Elementa-muted">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
