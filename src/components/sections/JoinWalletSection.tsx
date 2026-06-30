"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import joinWalletPhone from "@/assets/1 (1).png";
import grayDots from "@/assets/gray-dots.png (1).png";
import { joinWalletData } from "../../data/walletPage";
import { DownloadAppButton } from "@/components/ui/DownloadAppButton";

export function JoinWalletSection() {
  return (
    <section className="site-section join-wallet-section relative">
      <div className="container-standard">
        <div className="section-inner flex flex-col items-center justify-between gap-16 md:flex-row md:gap-24 xl:gap-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex w-full justify-center md:w-[45%] md:justify-center"
          >
            <div className="relative w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[287px]">
              <Image
                src={grayDots}
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-3 -top-3 z-0 h-[72px] w-[72px] select-none object-contain opacity-45 sm:-right-4 sm:-top-4 sm:h-[88px] sm:w-[88px] md:-right-5 md:-top-5 md:h-[104px] md:w-[104px] lg:h-[120px] lg:w-[120px]"
              />
              <img
                src={joinWalletPhone.src}
                alt="Elementa Wallet App"
                className="relative z-10 h-auto w-full select-none drop-shadow-[0_48px_80px_rgba(0,0,0,0.6)]"
              />
            </div>
          </motion.div>

          <div className="relative mb-16 flex w-full flex-col gap-6 text-left md:mb-0 md:w-[50%]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {joinWalletData.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10 font-body text-[clamp(1rem,2.5vw,1.125rem)] leading-relaxed text-[#F5F5F5]"
            >
              {joinWalletData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex w-full flex-col items-stretch justify-start gap-4 sm:flex-col sm:items-normal lg:flex-row xl:flex-row"
            >
              <DownloadAppButton className="btn-primary h-[56px] w-full px-10 font-display text-[14px] font-bold tracking-widest sm:w-auto md:h-[64px] md:px-12 md:text-[15px]">
                {joinWalletData.primaryCta}
              </DownloadAppButton>
              <Link
                href="/docs"
                className="btn-secondary inline-flex h-[56px] w-full items-center justify-center px-10 font-display text-[14px] font-bold tracking-widest sm:w-auto md:h-[64px] md:px-12 md:text-[15px]"
              >
                {joinWalletData.secondaryCta}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
