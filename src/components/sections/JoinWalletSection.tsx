"use client";

import { motion } from "framer-motion";
import { walletAssets } from "../../data/walletAssets";
import { joinWalletData } from "../../data/walletPage";

export function JoinWalletSection() {
  return (
    <section className="site-section join-wallet-section relative">
      <div className="container-standard">
        <div className="section-inner flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24 xl:gap-32">
          {/* Left Side: Phone Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-[45%] relative flex justify-center md:justify-center"
          >
            <div className="relative w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[287px]">
              {/* Gray Dots Decoration */}
              {walletAssets.grayDots ? (
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  src={walletAssets.grayDots?.src || walletAssets.grayDots}
                  alt=""
                  className="pointer-events-none absolute -right-4 -top-4 z-0 h-16 w-16 select-none object-contain opacity-40 sm:-right-6 sm:-top-6 sm:h-24 sm:w-24 md:-right-8 md:-top-8 md:h-32 md:w-32 lg:-right-10 lg:-top-10 lg:h-36 lg:w-36"
                />
              ) : null}

              {/* Phone Image */}
              <img
                src={
                  walletAssets.joinWalletPhone?.src ||
                  walletAssets.joinWalletPhone
                }
                alt="Elementa Wallet App"
                className="relative z-10 w-full h-auto drop-shadow-[0_48px_80px_rgba(0,0,0,0.6)] select-none"
              />
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-[50%] flex flex-col gap-6 text-left mb-16 md:mb-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-left md:text-left"
            >
              {joinWalletData.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-body text-[clamp(1rem,2.5vw,1.125rem)] leading-relaxed text-[#F5F5F5]"
            >
              {joinWalletData.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex w-full flex-col items-stretch justify-start gap-4 sm:w-auto sm:flex-row sm:items-center"
            >
              <button
                type="button"
                className="btn-primary h-[56px] w-full px-10 font-display text-[14px] font-bold tracking-widest sm:w-auto md:h-[64px] md:px-12 md:text-[15px]"
              >
                {joinWalletData.primaryCta}
              </button>
              <button
                type="button"
                className="btn-secondary h-[56px] w-full px-10 font-display text-[14px] font-bold tracking-widest sm:w-auto md:h-[64px] md:px-12 md:text-[15px]"
              >
                {joinWalletData.secondaryCta}
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
