"use client";

import { motion, useInView, animate } from "framer-motion";
import { Activity } from "lucide-react";
import { useRef, useEffect } from "react";

function Counter({
  end,
  decimals = 0,
  suffix = "",
  prefix = "",
}: {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = prefix + value.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, end, decimals, suffix, prefix]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}0{suffix}
    </span>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#24bace"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-shield-check"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Below-fold metrics — loaded after hero paint to keep Framer off the LCP path. */
export function WalletHeroMetrics() {
  return (
    <section className="site-section relative z-30 mt-6 w-full sm:mt-8 md:mt-10 xl:-mt-28">
      <div className="container-standard">
        <div className="section-inner">
          <h2 className="sr-only">Wallet performance metrics</h2>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[16px] p-6 shadow-2xl backdrop-blur-3xl sm:p-8 md:col-span-2 md:p-10 xl:col-span-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
                border: "1px solid rgba(171, 173, 174, 0.1)",
              }}
            >
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                <span className="font-display text-[10px] font-black uppercase tracking-[0.4em] text-[#24bace] sm:text-[12px]">
                  Total Volume
                </span>
                <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
                  <Counter end={2.4} decimals={1} prefix="$" suffix="B+" />
                </p>
              </div>
              <p className="mt-6 max-w-[400px] font-body text-sm font-normal leading-relaxed text-white sm:mt-8 sm:text-base md:mt-12">
                Processed through Elementa&apos;s autonomous nodes in the last
                quarter.
              </p>
            </div>

            <div
              className="flex h-full flex-col items-center justify-between rounded-[16px] border border-white/10 p-6 shadow-2xl backdrop-blur-3xl sm:p-8 md:col-span-1 md:items-start md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#24bace]/10 md:h-16 md:w-16">
                <Activity
                  className="h-8 w-8 text-[#24bace] md:h-9 md:w-9"
                  strokeWidth={1.75}
                  aria-hidden
                />
              </div>
              <div className="mt-8 flex flex-col gap-2 md:mt-16">
                <p className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-none text-white">
                  <Counter end={99.9} decimals={1} suffix="%" />
                </p>
                <p className="font-body text-xs font-medium text-white sm:text-sm">
                  AI Uptime
                </p>
              </div>
            </div>

            <div
              className="flex h-full flex-col items-center justify-between rounded-[16px] border border-white/10 p-6 shadow-2xl backdrop-blur-3xl sm:p-8 md:col-span-1 md:items-start md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white/5 md:h-16 md:w-16">
                <ShieldIcon />
              </div>
              <div className="mt-8 flex flex-col gap-2 md:mt-16">
                <p className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-none text-white">
                  Vault-Grade
                </p>
                <p className="font-body text-xs font-medium text-white sm:text-sm">
                  Security Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Static shell shown until metrics chunk hydrates — preserves layout without Framer. */
export function WalletHeroMetricsFallback() {
  return (
    <section className="site-section relative z-30 mt-6 w-full sm:mt-8 md:mt-10 xl:-mt-28">
      <div className="container-standard">
        <div className="section-inner">
          <h2 className="sr-only">Wallet performance metrics</h2>
          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-[16px] p-6 shadow-2xl backdrop-blur-3xl sm:p-8 md:col-span-2 md:p-10 xl:col-span-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
                border: "1px solid rgba(171, 173, 174, 0.1)",
              }}
            >
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                <span className="font-display text-[10px] font-black uppercase tracking-[0.4em] text-[#24bace] sm:text-[12px]">
                  Total Volume
                </span>
                <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl tabular-nums">
                  $0B+
                </p>
              </div>
              <p className="mt-6 max-w-[400px] font-body text-sm font-normal leading-relaxed text-white sm:mt-8 sm:text-base md:mt-12">
                Processed through Elementa&apos;s autonomous nodes in the last
                quarter.
              </p>
            </div>

            <div
              className="flex h-full flex-col items-center justify-between rounded-[16px] border border-white/10 p-6 shadow-2xl backdrop-blur-3xl sm:p-8 md:col-span-1 md:items-start md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#24bace]/10 md:h-16 md:w-16" />
              <div className="mt-8 flex flex-col gap-2 md:mt-16">
                <p className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-none text-white tabular-nums">
                  0%
                </p>
                <p className="font-body text-xs font-medium text-white sm:text-sm">
                  AI Uptime
                </p>
              </div>
            </div>

            <div
              className="flex h-full flex-col items-center justify-between rounded-[16px] border border-white/10 p-6 shadow-2xl backdrop-blur-3xl sm:p-8 md:col-span-1 md:items-start md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white/5 md:h-16 md:w-16" />
              <div className="mt-8 flex flex-col gap-2 md:mt-16">
                <p className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-none text-white">
                  Vault-Grade
                </p>
                <p className="font-body text-xs font-medium text-white sm:text-sm">
                  Security Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
