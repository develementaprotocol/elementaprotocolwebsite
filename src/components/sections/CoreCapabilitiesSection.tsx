"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import coreCapabilitiesBg from "@/assets/Elementa-chain.png";
import { walletAssets } from "../../data/walletAssets";
import { coreCapabilities } from "../../data/walletPage";
import type { CoreCapabilityItem } from "../../data/walletPage";

const TAG_BG = "#1b3144";
const CARD_GRADIENT =
  "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)";

function CardLogo({
  src,
  alt,
  iconClassName,
  frameless,
}: {
  src: string | import("next/image").StaticImageData;
  alt: string;
  iconClassName?: string;
  /** Omit frosted circle (Swap Instantly only). */
  frameless?: boolean;
}) {
  /** Outer ring matches other cards’ frosted badge (h-12 → md:h-16). */
  const shellClass = frameless
    ? "flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14 md:h-16 md:w-16"
    : "flex h-12 w-12 items-center justify-center rounded-full border border-[#24bace]/20 bg-[#24bace]/20 backdrop-blur-sm sm:h-14 sm:w-14 md:h-16 md:w-16";

  const innerClass = frameless
    ? "relative h-10 w-10 sm:h-11 sm:w-11 md:h-14 md:w-14"
    : "relative h-6 w-6 sm:h-7 sm:w-7 md:h-6 md:w-6";

  return (
    <div className={shellClass}>
      <div className={`${innerClass} ${iconClassName ?? ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes={frameless ? "(min-width:768px) 56px, 44px" : "32px"}
          unoptimized={typeof src === "string"}
        />
      </div>
    </div>
  );
}

export function CoreCapabilitiesSection() {
  const large = coreCapabilities.items.find((i) => i.type === "large")!;
  const small = coreCapabilities.items.find((i) => i.type === "small")!;
  const bottomItems = coreCapabilities.items.filter((i) => i.type === "bottom");

  return (
    <section className="site-section core-capabilities-section relative overflow-hidden">
      <div className="container-standard">
        <div className="section-inner">
          <div className="section-heading-gap w-full text-center flex flex-col items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 w-full max-w-4xl mx-auto text-center"
            >
              Everything you need to Web3
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch xl:grid-cols-12">
            {/* Swap Instantly — large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex h-full w-full min-h-[300px] flex-col justify-between gap-8 overflow-hidden rounded-[16px] border border-white/[0.06] p-10 opacity-100 shadow-[0_24px_48px_rgba(0,0,0,0.3)] md:min-h-[350px] md:h-full md:col-span-2 xl:col-span-8 xl:h-[300px] xl:min-h-[300px] xl:gap-0 xl:p-12"
              style={{
                background:
                  "linear-gradient(135deg, rgba(21,111,122, 0.92) 0%, rgba(21, 32, 47, 0.96) 50%, rgba(21,111,122, 0.92) 100%)",
              }}
            >
              {/* Asset image + ::after theme tint (see after:* utilities) */}
              {/* <div
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[16px] after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:rounded-[16px] after:content-[''] after:bg-[linear-gradient(135deg,color-mix(in_srgb,var(--btn-primary-bg)_42%,transparent)_0%,color-mix(in_srgb,var(--color-Elementa-bg)_55%,transparent)_45%,color-mix(in_srgb,var(--btn-primary-bg)_28%,transparent)_100%)]"
              >
                <Image
                  src={coreCapabilitiesBg}
                  alt=""
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1440px) 100vw, 1200px"
                />
              </div> */}

              <div className="relative z-[2] flex justify-center md:block md:justify-start">
                <CardLogo src={walletAssets[large.iconAsset]} alt="" />
              </div>

              <div className="relative z-[2] flex max-w-[640px] flex-col gap-4">
                <h3>
                  {large.title}
                </h3>
                <p className="max-w-lg font-body text-base leading-relaxed text-[#F5F5F5] sm:text-lg">
                  {large.description}
                </p>
              </div>
            </motion.div>

            {/* 50+ Blockchains */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative flex min-h-[320px] flex-col gap-8 overflow-hidden rounded-[16px] border border-white/[0.06] p-10 shadow-[0_24px_48px_rgba(0,0,0,0.3)] md:min-h-[360px] md:col-span-2 lg:col-span-1 xl:h-[300px] xl:min-h-[300px] xl:justify-between xl:gap-0 xl:col-span-4 xl:p-12"
              style={{ background: CARD_GRADIENT }}
            >
              <div className="relative z-[2] flex justify-center md:block md:justify-start">
                <CardLogo src={walletAssets.blockchainLogo} alt="" />
              </div>

              <div className="relative z-[2] flex flex-col gap-4">
                <h3>
                  {small.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-[#F5F5F5]">
                  {small.description}
                </p>
              </div>
            </motion.div>

            {/* Bottom row */}
            {bottomItems.map((item: CoreCapabilityItem, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + idx * 0.08 }}
                className="relative flex min-h-[280px] flex-col gap-8 rounded-[16px] border border-white/[0.06] p-10 shadow-[0_24px_48px_rgba(0,0,0,0.3)] md:min-h-[300px] md:col-span-2 lg:col-span-1 xl:col-span-4 xl:h-[300px] xl:min-h-[300px] xl:justify-between xl:gap-0"
                style={{ background: CARD_GRADIENT }}
              >
                <div className="flex justify-center md:justify-start">
                  <CardLogo
                    src={walletAssets[item.iconAsset]}
                    alt={item.title}
                    iconClassName={item.id === "cc3" ? "h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" : undefined}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="font-display text-2xl font-bold leading-none tracking-tight text-white md:text-3xl">
                    {item.title}
                  </h4>
                  <p className="line-clamp-4 font-body text-sm leading-relaxed text-[#F5F5F5] md:text-base">
                    {item.description}
                  </p>

                  {item.tags && item.tags.length > 0 ? (
                    <div className="mt-1 flex flex-wrap justify-center gap-2 md:justify-start">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded px-3 py-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-white"
                          style={{ backgroundColor: TAG_BG }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
