"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageHeroBackground } from "@/components/ui/PageHeroBackground";

const AboutHero = () => {
  return (
    <section id="about-hero" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <PageHeroBackground />

      <div className="container-standard relative z-10 flex flex-1 flex-col items-center justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 md:pt-32">
        <div className="section-inner mx-auto flex max-w-4xl flex-col items-center gap-5 text-center sm:gap-6 md:gap-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold leading-[1.02] tracking-[-0.04em] text-balance text-[clamp(2.5rem,6vw,4.75rem)] text-white"
          >
            About{" "}
            <span className="text-[color-mix(in_srgb,var(--btn-primary-bg)_22%,white)]">
              us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-[clamp(1.05rem,2.6vw,1.65rem)] font-bold leading-snug tracking-normal text-balance text-[var(--btn-primary-bg)] sm:text-2xl md:text-[1.75rem]"
          >
            Powering the Future of Multi-Chain Finance
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mb-2 font-body text-base font-normal leading-relaxed text-balance text-white/75 sm:text-lg md:text-xl md:leading-relaxed"
          >
            Elementa is building the infrastructure for a seamless decentralized world where
            assets, identities, and transactions move freely across chains. Our mission is to
            simplify Web3 while maintaining the highest standards of security, speed, and user
            control.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
