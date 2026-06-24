"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
const guideImg = { src: '/multichain-liquidity.png' };
import type { FeaturedGuide } from "@/data/homepage";

export function FeaturedGuideSection({ guide }: { guide: FeaturedGuide }) {
  return (
    <section
      id="featured-guide-section"
      className="site-section relative overflow-hidden"
    >
      <div className="container-standard">
        <div className="section-inner">
          <motion.div
            className="relative grid grid-cols-1 items-center overflow-hidden rounded-[16px] border border-white/5 p-8 sm:p-12 xl:grid-cols-2 xl:gap-16 xl:p-12"
            style={{ background: "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Content */}
            <div className="relative z-10 order-2 text-center md:text-left xl:order-1">
              <span className="text-[14px] font-black uppercase tracking-[0.2em] text-[#24bace]">
                NEW FEATURE GUIDE
              </span>
               <h2 className="section-heading mt-6 text-white mb-4 text-[2.75rem] font-bold leading-none tracking-tight md:text-left">
                Mastering Elementa Multi Chain Liquidity
              </h2>
              <p className="text-base text-white/90 leading-relaxed md:text-left">
                {guide.description ||
                  "Unlock the full potential of DeFi across all connected ecosystems with our definitive liquidity masterclass."}
              </p>
              <div className="mt-10 flex justify-center md:justify-start">
                <Button
                  href={guide.cta.href}
                  className="inline-flex h-[60px] w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-10 text-base font-bold text-black transition-all hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)] active:opacity-90"
                >
                  Read the Guide
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image */}
            <motion.div
              className="order-1 mt-0 flex w-full justify-center xl:order-2 xl:mt-0 xl:block xl:w-auto xl:justify-start"
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] shadow-2xl after:pointer-events-none after:absolute after:inset-0 after:bg-[rgba(21,111,122,0.5)]">
                <img
                  src={guideImg.src}
                  alt="Elementa Multi Chain Liquidity"
                  className="h-full w-full object-cover transition-all duration-700"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
