"use client";

import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  FileText,
  Fingerprint,
  KeyRound,
  LineChart,
  Shield,
} from "lucide-react";

const iconMap = {
  shield: Shield,
  fingerprint: Fingerprint,
  swap: ArrowLeftRight,
  file: FileText,
  chart: LineChart,
  key: KeyRound,
};

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-8%" },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

export function WalletFeaturesSection({ features }) {
  return (
    <section
      id="wallet-features"
      className="relative w-full border-t border-white/5 bg-transparent py-10"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-6 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[720px] flex-col gap-4 text-center">
          <h2>
            {features.sectionTitle}
          </h2>
          <p>
            {features.sectionSubtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {features.items.map((item, i) => {
            const Icon = iconMap[item.iconKey] ?? Shield;
            return (
              <motion.div
                key={item.id}
                {...cardMotion}
                transition={{ ...cardMotion.transition, delay: i * 0.05 }}
                className="flex flex-col gap-4 rounded-[16px] border border-white/[0.08] bg-[#081421]/80 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[16px] border border-[#24bace]/25 bg-[#24bace]/10 md:mx-0">
                  <Icon className="h-6 w-6 text-[#24bace]" strokeWidth={1.5} />
                </div>
                <h3>
                  {item.title}
                </h3>
                <p className="font-manrope text-[15px] leading-relaxed text-[#c7d6e0]">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
