"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { BentoContent } from "@/data/homepage";
import secureWalletImg from "@/assets/secure-wallet.svg";
const instantSwapBgImg = { src: '/assets/bento-grid-instant-swap.svg' };
import bentoBgImg from "@/assets/Elementa-walletcard-bottom-background.png";

const GRADIENT_WALLET =
  "linear-gradient(112.61355053830833deg, #15202f 0.73551%, #1b3144 99.264%)";
const GRADIENT_STAT = "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)";
const GRADIENT_MISSION =
  "linear-gradient(131.2605950638361deg, #24bace 5.5081%, #0a6a7e 118.72%)";

/** Figma 1074:2592 — chart container #1d304a, bars with exact heights */
function SwapBarChart() {
  const bars = [
    { h: "h-[32px]", bg: "bg-[rgba(36,186,206,0.2)]" },
    { h: "h-[42.66px]", bg: "bg-[rgba(36,186,206,0.4)]" },
    { h: "h-12", bg: "bg-[rgba(36,186,206,0.6)]" },
    { h: "h-full", bg: "bg-[#24bace]" },
  ];
  return (
    <div className="mx-auto flex h-[80px] w-[160px] shrink-0 items-end gap-1 rounded-[16px] bg-[#1d304a] p-3 sm:mx-0">
      {bars.map((bar, i) => (
        <div
          key={i}
          className={`min-h-px min-w-px flex-1 rounded-t-[2px] ${bar.h} ${bar.bg}`}
        />
      ))}
    </div>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="section-heading text-white">
      {title}
    </h2>
  );
}

export function BentoSection({ bento }: { bento: BentoContent }) {
  const large = bento.tiles.find((t) => t.id === "swap")!;
  const wallet = bento.tiles.find((t) => t.id === "wallet")!;
  const chains = bento.tiles.find((t) => t.id === "chains")!;
  const fees = bento.tiles.find((t) => t.id === "fees")!;

  const statCardClass =
    "rounded-[16px] border border-transparent p-8 shadow-xl backdrop-blur-[12px] xl:p-[40px]";

  return (
    <section
      id="bento-section"
      className="site-section relative overflow-hidden"
    >
      <div className="container-standard relative z-10">
        <div className="section-inner flex flex-col">
          <div className="section-heading-gap text-center">
            <SectionHeading title={bento.sectionTitle} />
          </div>

          {/* Grid: Stack -> 2 col until xl -> 4 col at xl */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:h-[600px] xl:grid-cols-4 xl:grid-rows-2 lg:gap-8">
            {/* Instant Swaps — col 1–2, row 1–2 (texture PNG → SVG pattern → readability overlays) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex min-h-[480px] flex-col overflow-hidden rounded-[16px] border border-white/10 md:col-span-2 xl:row-span-2 xl:min-h-0"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[16px] bg-[#1d304a]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[16px] bg-cover bg-center opacity-[0.42]"
                style={{
                  backgroundImage: `url(${bentoBgImg.src})`,
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[16px] bg-cover bg-center opacity-[0.38] mix-blend-soft-light"
                style={{ backgroundImage: `url(${instantSwapBgImg.src})` }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[16px] bg-gradient-to-br from-[#081421]/88 via-[#1b3144]/45 to-[#15202f]/94"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[16px] bg-[linear-gradient(135deg,rgba(21,111,122,0.42)_0%,rgba(0,0,0,0)_52%,rgba(21,111,122,0.35)_100%)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[16px] shadow-[inset_0_0_100px_rgba(36,186,206,0.12)]"
              />
              <div className="relative z-10 flex h-full flex-col-reverse justify-between gap-12 p-8 sm:p-10 md:flex-col xl:p-12">
                <div className="flex flex-col gap-4">
                  <h3 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold leading-tight text-white">
                    {large.title}
                  </h3>
                  <p className="max-w-[320px] mx-auto font-body text-base font-normal leading-relaxed text-[#F5F5F5] md:mx-0">
                    {large.description}
                  </p>
                </div>

                <div className="w-full shrink-0 pt-0 sm:pt-[32px] md:pt-8">
                  <div className="flex w-full flex-col items-center gap-8 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex flex-col items-center gap-1 sm:items-end">
                      <span className="font-display text-[clamp(3.5rem,8vw,4.5rem)] font-bold leading-none text-[#24bace]">
                        {large.metric?.value}
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#ffffff]">
                        {large.metric?.label}
                      </span>
                    </div>
                    <SwapBarChart />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secure Wallet — col 3–4, row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="relative flex h-full w-full flex-col-reverse sm:flex-row items-center justify-between gap-6 sm:gap-0 overflow-hidden rounded-[32px] border border-white/5 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.3)] sm:px-12 sm:py-10 md:col-span-2 xl:col-start-3 xl:row-start-1"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)",
              }}
            >
              {/* Background Glows */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#24bace]/10 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-[#24bace]/5 blur-3xl rounded-full" />

              <div className="relative z-10 flex flex-col gap-3 text-center sm:text-left items-center sm:items-start">
                <h3 className="font-display text-[26px] sm:text-[32px] font-bold leading-tight text-white tracking-tight">
                  {wallet.title}
                </h3>
                <p className="max-w-[280px] font-body text-[15px] sm:text-[16px] font-normal leading-relaxed text-[#F5F5F5]">
                  {wallet.description}
                </p>
              </div>

              {/* Secure Wallet Asset */}
              <div className="relative z-10 mr-0 flex w-full shrink-0 items-center justify-center sm:mr-4 sm:w-auto">
                <div className="relative">
                  <Image
                    src={secureWalletImg}
                    alt="Secure Wallet Icon"
                    className="relative z-10 w-[70px] h-[70px] sm:w-[95px] sm:h-[95px] object-contain"
                    draggable={false}
                    sizes="(max-width: 640px) 70px, 95px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Multi-Chain — col 3, row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`${statCardClass} flex flex-col justify-center md:col-span-1 xl:col-start-3 xl:row-start-2`}
              style={{ backgroundImage: GRADIENT_STAT }}
            >
              <div className="pb-2 text-center">
                <p className="font-body text-[11px] font-black uppercase tracking-[0.2em] text-[#ffffff]">
                  {chains.title}
                </p>
              </div>
              <p className="font-display text-center text-[clamp(2rem,5vw,2.5rem)] font-bold leading-none text-[#24bace]">
                {chains.stat}
              </p>
              <div className="pt-2 text-center">
                <p className="font-body text-sm font-normal leading-relaxed text-[#F5F5F5]">
                  {chains.caption}
                </p>
              </div>
            </motion.div>

            {/* Low Fees — col 4, row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
              className={`${statCardClass} flex flex-col justify-center md:col-span-1 xl:col-start-4 xl:row-start-2`}
              style={{ backgroundImage: GRADIENT_STAT }}
            >
              <div className="pb-2 text-center">
                <p className="font-body text-[11px] font-black uppercase tracking-[0.2em] text-[#ffffff]">
                  {fees.title}
                </p>
              </div>
              <p className="font-display text-center text-[clamp(2rem,5vw,2.5rem)] font-bold leading-none text-[#24bace]">
                {fees.stat}
              </p>
              <div className="pt-2 text-center">
                <p className="font-body text-sm font-normal leading-relaxed text-[#F5F5F5]">
                  {fees.caption}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
