"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wallet, RefreshCcw, BarChart3, Key } from "lucide-react";

const features = [
  { icon: <Wallet className="w-5 h-5 text-[#24bace]" />, title: "Multi-chain wallet" },
  { icon: <RefreshCcw className="w-5 h-5 text-[#24bace]" />, title: "Instant swaps" },
  { icon: <BarChart3 className="w-5 h-5 text-[#24bace]" />, title: "DeFi integrations" },
  { icon: <Key className="w-5 h-5 text-[#24bace]" />, title: "Secure identity layer" },
];

const AboutMoreThanWallet = () => {
  return (
    <section id="more-than-wallet" className="relative site-section overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="section-inner">
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="mb-6">
                More Than a Wallet
              </h2>
              <p className="mx-auto max-w-3xl">
                Elementa connects wallets, chains, and financial tools into one unified experience. From asset management to cross-chain swaps, everything you need is integrated into a single platform.
              </p>
            </motion.div>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card flex flex-col items-center gap-4 px-6 py-5 text-center transition-all sm:flex-row sm:items-center sm:text-left relative overflow-hidden rounded-[16px] after:absolute after:inset-0 after:z-[-1] after:bg-[linear-gradient(135deg,rgba(21,111,122,0.3)_0%,rgba(0,0,0,0)_50%,rgba(21,111,122,0.3)_100%)]"
              >
                <div className="w-10 h-10 rounded-[16px] bg-[#24bace]/10 flex items-center justify-center shrink-0 transition-transform">
                  {feature.icon}
                </div>
                <span className="font-medium text-white">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMoreThanWallet;
