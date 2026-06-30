"use client";

import { motion, useInView, animate } from "framer-motion";
import { Activity } from "lucide-react";
import { useRef, useEffect } from "react";

import { walletAssets } from "@/data/walletAssets";
import type { WalletHeroContent } from "@/data/walletPage";
import { DownloadAppButton } from "@/components/ui/DownloadAppButton";
import { HeroBlurOverlay } from "@/components/ui/HeroBlurOverlay";

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

export function WalletHeroSection({ hero }: { hero: WalletHeroContent }) {
  const getSrc = (asset: any) =>
    typeof asset === "string" ? asset : asset?.src || "";

  return (
    <div className="relative">
      <section className="relative wallet-hero-section flex min-h-screen w-full flex-col overflow-hidden bg-transparent pb-6 pt-24 sm:pb-8 sm:pt-28 md:pb-12 md:pt-32 lg:pt-36 xl:h-screen xl:pb-0 xl:pt-0 lg:justify-start">
        <div className="absolute inset-0 z-[-1]" />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] h-[120%] w-[120%] atmosphere-blob-tl" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%] atmosphere-blob-br" />
          </div>
          <HeroBlurOverlay />

          <div className="container-standard relative z-[2] h-full w-full">
            <div className="pointer-events-none absolute z-[5] hidden xl:block xl:bottom-[-18%] xl:left-[4%] xl:h-[62%] xl:w-[30%] 2xl:bottom-[-20%] 2xl:left-[8%] 2xl:h-[70%] 2xl:w-[32%]">
              <img
                src={getSrc(walletAssets.walletHeroLeft)}
                alt=""
                className="h-full w-full object-contain select-none"
                style={{ filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.8))" }}
              />
            </div>

            <div className="pointer-events-none absolute z-[5] hidden origin-center xl:block xl:bottom-[-18%] xl:right-[4%] xl:h-[62%] xl:w-[30%] 2xl:bottom-[-20%] 2xl:right-[8%] 2xl:h-[70%] 2xl:w-[32%]">
              <img
                src={getSrc(walletAssets.walletHeroRight)}
                alt=""
                className="h-full w-full object-contain select-none"
                style={{ filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.8))" }}
              />
            </div>
          </div>
        </div>

        <div className="container-standard relative z-20 flex h-full w-full flex-col items-center justify-start pt-[88px] sm:pt-[96px] md:pt-[108px] xl:pt-[160px]">
          <div className="section-inner relative z-20 flex w-full max-w-[900px] flex-col items-center px-0 text-center">
            <h1 className="w-full font-display text-[clamp(2.25rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-Elementa-primary xl:tracking-[-0.04em]">
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
            <p className="mt-4 max-w-[min(100%,36rem)]  px-1 font-body text-[clamp(0.875rem,3.2vw,1.25rem)] font-light leading-[1.55] text-Elementa-muted sm:mt-5 sm:px-0 md:max-w-[600px] md:leading-relaxed">
              {hero.subheadline}
            </p>

            <div className="relative z-30 mt-8 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:mt-12">
              <DownloadAppButton className="btn-primary relative z-30 flex h-[52px] w-full px-8 font-body text-[15px] sm:w-auto md:h-[56px] md:px-12 md:text-base">
                {hero.primaryCta.label}
              </DownloadAppButton>
              <a
                href={hero.secondaryCta.href}
                className="btn-secondary relative z-30 flex h-[52px] w-full px-8 font-body text-[15px] sm:w-auto md:h-[56px] md:px-12 md:text-base"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Mobile / tablet: single mockup, spaced below CTAs */}
          <div className="relative z-10 mt-10 flex w-full justify-center px-2 sm:mt-12 md:mt-14 xl:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full max-w-[min(72vw,220px)] sm:max-w-[240px] md:max-w-[260px]"
            >
              <img
                src={getSrc(walletAssets.walletHeroLeft)}
                className="h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
                alt="Elementa Wallet app"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="site-section relative z-30 mt-6 w-full sm:mt-8 md:mt-10 xl:-mt-28">
        <div className="container-standard">
          <div className="section-inner">
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
                  <h3 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl">
                    <Counter end={2.4} decimals={1} prefix="$" suffix="B+" />
                  </h3>
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
                  <h4 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-none text-white">
                    <Counter end={99.9} decimals={1} suffix="%" />
                  </h4>
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
                  <h4 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-none text-white">
                    Vault-Grade
                  </h4>
                  <p className="font-body text-xs font-medium text-white sm:text-sm">
                    Security Standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
