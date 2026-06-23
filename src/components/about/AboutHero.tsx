"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import topReflect from "@/assets/top-reflect.png";

const AboutHero = () => {
  return (
    <section id="about-hero" className="relative h-screen flex items-center justify-center overflow-hidden site-section">
      <div className="absolute inset-0 z-0">
        <Image
          src={topReflect}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        
        {/* Theme Atmospheric Gradient */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[120%] w-[120%] atmosphere-blob-tl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%] atmosphere-blob-br" />
        </div>
        
      </div>

      <div className="container-standard relative z-10">
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

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-display text-[clamp(1.05rem,2.6vw,1.65rem)] font-bold leading-snug tracking-normal text-balance text-[var(--btn-primary-bg)] sm:text-2xl md:text-[1.75rem]"
          >
            Powering the Future of Multi-Chain Finance
          </motion.h2>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex w-full flex-col items-stretch justify-center gap-4 px-2 sm:flex-row sm:items-center sm:px-4"
          >
            <Link
              href="/wallet"
              className="btn-primary w-full px-10 py-5 sm:w-auto [box-shadow:var(--btn-primary-shadow),0_0_36px_color-mix(in_srgb,var(--btn-primary-bg)_42%,transparent)] hover:[box-shadow:var(--btn-primary-shadow-hover),0_0_44px_color-mix(in_srgb,var(--btn-primary-bg)_48%,transparent)]"
            >
              <span className="font-body text-base font-bold leading-tight sm:text-lg">
                Install Wallet
              </span>
            </Link>
            <Link
              href="/wallet"
              className="btn-secondary w-full px-10 py-5 sm:w-auto"
            >
              <span className="font-body text-base font-bold leading-tight sm:text-lg">
                Explore Wallet
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
