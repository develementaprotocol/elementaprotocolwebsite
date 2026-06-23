"use client";

import { motion, useInView, animate } from "framer-motion";
import { Activity } from "lucide-react";
import { useRef, useEffect } from "react";

import { walletAssets } from "@/data/walletAssets";
import type { WalletHeroContent } from "@/data/walletPage";

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
      <section className="relative wallet-hero-section flex min-h-screen w-full flex-col overflow-hidden bg-transparent pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:h-screen xl:pt-0 lg:justify-start">
        {/* Background Layer (Managed globally by RootChrome) */}
        <div className="absolute inset-0 z-[-1]" />
        
        <div className="absolute inset-0 z-0">
          {/* Theme Atmospheric Gradient — top reflect is provided globally by RootChrome */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] h-[120%] w-[120%] atmosphere-blob-tl" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%] atmosphere-blob-br" />
          </div>
          
          <div className="container-standard relative z-[2] h-full w-full">
            {/* Dashboard Phone (Left, Desktop) — Precise Positioning from Image */}
            <div className="pointer-events-none absolute z-10 hidden xl:block xl:bottom-[-22%] xl:left-[10%] xl:h-[70%] xl:w-[35%] 2xl:bottom-[-24%] 2xl:left-[14%] 2xl:h-[78%] 2xl:w-[38%]">
              <img
                src={getSrc(walletAssets.walletHeroLeft)}
                alt=""
                className="h-full w-full object-contain select-none"
                style={{ filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.8))" }}
              />
            </div>

            {/* Wallet App Phone (Right, Desktop) — Precise Positioning from Image */}
            <div className="pointer-events-none absolute z-10 hidden origin-center xl:block xl:bottom-[-22%] xl:right-[10%] xl:h-[70%] xl:w-[35%] 2xl:bottom-[-24%] 2xl:right-[14%] 2xl:h-[78%] 2xl:w-[38%]">
              <img
                src={getSrc(walletAssets.walletHeroRight)}
                alt=""
                className="h-full w-full object-contain select-none"
                style={{ filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.8))" }}
              />
            </div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="container-standard relative z-20 flex h-full w-full flex-col items-center justify-start pt-[92px] sm:pt-[104px] md:pt-[120px] xl:pt-[160px]">
          <div className="section-inner flex w-full max-w-[900px] flex-col items-center text-center">
            <h1 className="w-full font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-Elementa-primary xl:tracking-[-0.04em]">
              {hero.headlineParts.map((part, i) =>
                part.highlight ? (
                  <span
                    key={i}
                    className="text-Elementa-accent"
                  >
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h1>
            <p className="mt-6 max-w-[700px] font-body text-[clamp(1rem,2.5vw,1.35rem)] font-light text-Elementa-muted">
              {hero.subheadline}
            </p>

            <div className="mt-12 md:mt-20 flex w-full flex-col items-stretch justify-center gap-4 px-4 sm:flex-row sm:items-center sm:justify-center sm:px-0">
              <a
                href={hero.primaryCta.href}
                className="btn-primary flex h-[56px] w-full px-10 font-body text-[16px] sm:w-auto md:h-[64px] md:px-14 md:text-lg"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="btn-secondary flex h-[56px] w-full px-10 font-body text-[16px] sm:w-auto md:h-[64px] md:px-14 md:text-lg"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          {/* Phones for Mobile/Tablet — Refined for better tablet sizing and overlap */}
          <div className="relative flex w-full flex-row items-center justify-center overflow-visible px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-24 xl:hidden">
            <motion.div 
              initial={{ opacity: 0, x: -30, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 w-[80%] max-w-[230px] -mr-[22%] sm:w-[50%] sm:max-w-[240px] md:w-[45%] md:max-w-[300px] lg:w-[40%] lg:max-w-[340px]"
            >
              <div className="absolute inset-0 bg-[#24bace]/10 rounded-full scale-90" />
              <img
                src={getSrc(walletAssets.walletHeroLeft)}
                className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative z-10"
                alt="Elementa Dashboard"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30, rotate: 15 }}
              whileInView={{ opacity: 1, x: 0, rotate: 11 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="relative z-10 mt-10 w-[55%] max-w-[200px] origin-center sm:w-[50%] sm:max-w-[240px] md:w-[45%] md:max-w-[300px] lg:w-[40%] lg:max-w-[340px]"
            >
              <div className="absolute inset-0 bg-[#24bace]/10 rounded-full scale-90" />
              <img
                src={getSrc(walletAssets.walletHeroRight)}
                className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative z-10"
                alt="Elementa Wallet onboarding"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cards Layer — Overlaying the Hero Section */}
      <section className="site-section relative z-30 -mt-20 w-full xl:-mt-40">
        <div className="container-standard">
          <div className="section-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              {/* Large Total Volume Card (50% on desktop, 100% on tablet) */}
              <div
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-[16px] p-6 shadow-2xl backdrop-blur-3xl sm:p-8 md:col-span-2 md:p-10 xl:col-span-2"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
                  border: "1px solid rgba(171, 173, 174, 0.1)",
                }}
              >
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
                  <span className="font-display text-[10px] sm:text-[12px] font-black uppercase tracking-[0.4em] text-[#24bace]">
                    Total Volume
                  </span>
                  <h3 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight">
                    <Counter end={2.4} decimals={1} prefix="$" suffix="B+" />
                  </h3>
                </div>
                <p className="text-white mt-8 max-w-[400px] font-body text-sm font-normal leading-relaxed md:mt-16 sm:text-base">
                  Processed through Elementa's autonomous nodes in the last
                  quarter.
                </p>
              </div>

              {/* AI Uptime Card (25%) */}
              <div
                className="flex h-full flex-col items-center justify-between rounded-[16px] border border-white/10 p-8 shadow-2xl backdrop-blur-3xl md:col-span-1 md:items-start md:p-10"
                style={{ background: "#2d4669" }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-[#24bace]/10 md:h-16 md:w-16">
                  <Activity
                    className="h-8 w-8 text-[#24bace] md:h-9 md:w-9"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <div className="mt-12 flex flex-col gap-2 md:mt-20">
                  <h4 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-none text-white">
                    <Counter end={99.9} decimals={1} suffix="%" />
                  </h4>
                  <h4 className="font-body text-xs sm:text-sm font-medium text-white">
                    AI Uptime
                  </h4>
                </div>
              </div>

              {/* Vault-Grade Card (25%) */}
              <div
                className="flex h-full flex-col items-center justify-between rounded-[16px] border border-white/10 p-8 shadow-2xl backdrop-blur-3xl md:col-span-1 md:items-start md:p-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
                }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-white/5 md:h-16 md:w-16">
                  <ShieldIcon />
                </div>
                <div className="mt-12 flex flex-col gap-2 md:mt-20">
                  <h4 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-none text-white">
                    Vault-Grade
                  </h4>
                  <p className="font-body text-xs sm:text-sm font-medium text-white">
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


