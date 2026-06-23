"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import phoneL from "@/assets/wallet-hero-left.png";
import phoneR from "@/assets/right-phone-hero.png";
import walletFlowBg from "@/assets/Elementa-walletcard-bottom-background.png";
import chainLock from "@/assets/lock.svg";
import ElementaChainBg from "@/assets/Elementa-chain.png";
import type { EcosystemContent } from "@/data/homepage";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

/** Sequential dot elementa — suggests “loading / chain incoming” */
function ComingSoonDots({ className = "" }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>...</span>;
  }

  return (
    <span
      className={`inline-flex items-baseline gap-0.5 ${className}`}
      aria-hidden
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="inline-block w-[0.35em] text-center font-bold"
          animate={{
            opacity: [0.25, 1, 0.25],
            y: [0, -3, 0],
          }}
          transition={{
            duration: 1.15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.22,
          }}
        >
          .
        </motion.span>
      ))}
    </span>
  );
}

function SectionHeading({ title }) {
  return (
    <h2 className="section-heading text-white">
      {title}
    </h2>
  );
}

/** Phones: one-time rise from below when scrolled into view (no looping motion) */
function PhoneShowcase() {
  const reduceMotion = useReducedMotion();

  const phoneMotion = reduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 80 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="relative flex h-full min-h-[220px] w-full items-start justify-center overflow-hidden px-4 pt-6 sm:min-h-[256px] sm:pt-8 sm:px-6">
      <div className="relative flex w-full max-w-[538px] items-start justify-center max-md:mx-auto md:mx-0">
        {/* Left Phone (Dashboard) */}
        <motion.div
          {...phoneMotion}
          transition={{ ...phoneMotion.transition, delay: 0.06 }}
          className="relative z-[1] -mr-[28%] w-[78%] sm:-mr-[149px] sm:w-[422px] mt-[4.5%] sm:mt-[25px]"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full"
          >
            <Image
              src={phoneL}
              alt="Ecosystem Dashboard"
              className="w-full h-auto select-none drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
              draggable={false}
              sizes="(max-width: 640px) 78vw, 422px"
            />
          </motion.div>
        </motion.div>

        {/* Right Phone (App View) */}
        <motion.div
          {...phoneMotion}
          transition={{ ...phoneMotion.transition, delay: 0.14 }}
          className="relative z-[2] w-[49%] sm:w-[265px]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="relative w-full"
          >
            <Image
              src={phoneR}
              alt="Ecosystem Integrations"
              className="w-full h-auto select-none drop-shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
              draggable={false}
              sizes="(max-width: 640px) 49vw, 265px"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export function EcosystemSection({
  ecosystem,
}: {
  ecosystem: EcosystemContent;
}) {
  const statusText = ecosystem.chain?.status ?? "COMING SOON";

  return (
    <section
      id="ecosystem-section"
      className="site-section relative overflow-hidden"
    >
      <div className="container-standard relative z-10">
        <div className="section-inner flex flex-col">
          <motion.div {...fadeUp(0)} className="section-heading-gap text-center">
            <SectionHeading title={ecosystem.sectionTitle} />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-12 xl:gap-6">
            <motion.div
              {...fadeUp(0.06)}
              className="flex min-h-[480px] flex-col-reverse overflow-hidden rounded-[16px] border border-[rgba(65,71,91,0.15)] shadow-none backdrop-blur-[24px] xl:col-span-8 xl:flex-col xl:min-h-0 xl:h-[518px]"
              style={{ background: "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)" }}
            >
              <div className="flex min-h-0 flex-1 flex-col items-center gap-4 px-8 py-10 text-center xl:items-start xl:text-left">
                <h3 className="font-display text-[30px] font-bold leading-[36px] text-white">
                  {ecosystem.wallet.title}
                </h3>
                <p className="max-w-[448px] font-body text-[16px] font-normal leading-6 text-[#F5F5F5]">
                  {ecosystem.wallet.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4 xl:justify-start">
                  {ecosystem.wallet.tags.map((tag) => (
                    <div
                      key={tag}
                      className="rounded-lg bg-[#1d304a] px-4 py-2 font-body text-[12px] font-semibold leading-4 text-[#c7d6e0]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-auto min-h-[220px] w-full shrink-0 overflow-hidden bg-[#1d304a] sm:min-h-[256px] lg:h-[256px] lg:min-h-[256px]">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={walletFlowBg}
                    alt=""
                    fill
                    className="object-cover mix-blend-soft-light opacity-90"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 800px"
                  />
                  <div className="absolute inset-0 bg-[rgba(21,111,122,0.5)] z-10" />
                </div>
                <PhoneShowcase />
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.12)}
              className="flex min-h-[420px] flex-col-reverse overflow-hidden rounded-[16px] border border-[rgba(65,71,91,0.15)] shadow-none backdrop-blur-[14px] xl:col-span-4 xl:flex-col xl:min-h-0 xl:h-[518px]"
              style={{ background: "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)" }}
            >
              <div className="flex shrink-0 flex-col items-center gap-[19px] px-8 pb-4 pt-10 text-center sm:px-10 sm:pt-10 xl:items-start xl:text-left">
                <h3 className="font-display text-[30px] font-bold leading-9 text-white sm:text-[32px] sm:leading-[38px]">
                  {ecosystem.chain.title}
                </h3>
                <p className="font-body text-[15px] font-normal leading-6 text-[#F5F5F5] sm:text-[16px] sm:leading-[26px]">
                  {ecosystem.chain.description}
                </p>
              </div>

              <div className="flex min-h-0 flex-1 flex-col justify-end px-6 pb-8 pt-2 sm:px-10 sm:pb-10">
                <div className="relative flex min-h-[240px] flex-1 flex-col items-center justify-center overflow-hidden rounded-[16px] border border-white/[0.06]">
                  <Image
                    src={ElementaChainBg}
                    alt=""
                    fill
                    className="object-cover opacity-20"
                    sizes="(max-width: 1280px) 100vw, 400px"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-black/35"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[#24bace]/[0.03]"
                  />

                  <div className="relative z-10 flex w-full flex-col items-center gap-5 px-6 py-10 xl:items-start">
                    <div className="relative flex h-[88px] w-20 items-center justify-center self-center sm:h-[96px] sm:w-24">
                      <div className="absolute inset-0 scale-125 rounded-full bg-[#24bace]/20 blur-3xl" />
                      <div className="absolute inset-0 scale-75 rounded-full bg-[#24bace]/30 blur-2xl" />
                      <Image
                        src={chainLock}
                        alt="Chain Lock"
                        fill
                        className="object-contain drop-shadow-[0_0_24px_rgba(36,186,206,0.45)]"
                        sizes="(max-width: 640px) 80px, 96px"
                      />
                    </div>
                    <p className="flex w-full flex-wrap items-center justify-center gap-x-1 text-center font-body text-[13px] font-semibold uppercase leading-5 tracking-[0.2em] text-[#24bace] sm:text-sm sm:tracking-[0.18em]">
                      <span>
                        {statusText.replace(/\s*\.{1,3}\s*$/u, "").trim()}
                      </span>
                      <ComingSoonDots />
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
