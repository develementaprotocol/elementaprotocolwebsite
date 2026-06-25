"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import topReflect from "@/assets/top-reflect.png";

const AboutHero = () => {
  return (
    <section id="about-hero" className="relative flex h-screen flex-col overflow-hidden">
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

      <div className="container-standard relative z-10 flex flex-1 flex-col items-center justify-center px-2 pt-20 pb-10 sm:px-0 sm:pt-24 md:pt-28">
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
