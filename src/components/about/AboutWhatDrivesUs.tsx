"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Link2 } from "lucide-react";

const driveItems = [
  {
    icon: <Shield className="h-6 w-6 text-Elementa-primary" />,
    title: "Security First",
    description: "Vault-grade protection with zero compromise on user control.",
  },
  {
    icon: <Zap className="h-6 w-6 text-Elementa-primary" />,
    title: "Performance",
    description: "Ultra-fast transactions powered by optimized multi-chain infrastructure.",
  },
  {
    icon: <Globe className="h-6 w-6 text-Elementa-primary" />,
    title: "Accessibility",
    description: "Making decentralized finance usable for everyone, everywhere.",
  },
  {
    icon: <Link2 className="h-6 w-6 text-Elementa-primary" />,
    title: "Interoperability",
    description: "Seamless interaction across multiple blockchains in one ecosystem.",
  },
];

const AboutWhatDrivesUs = () => {
  return (
    <section id="what-drives-us" className="relative site-section overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="section-inner">
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-center">
                What Drives Us
              </h2>
            </motion.div>
          </div>

          {/* Small Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {driveItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group relative flex flex-col items-center overflow-hidden rounded-[16px] p-6 text-center transition-all duration-300 hover:border-white/25 hover:shadow-[0_20px_45px_-28px_rgba(21,111,122,0.9)] sm:p-8 md:items-start md:text-left"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/20 bg-white/10 mx-auto md:mx-0">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-[24px] leading-tight text-Elementa-primary break-words">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-white/80">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhatDrivesUs;
