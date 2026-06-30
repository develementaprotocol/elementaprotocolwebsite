"use client";

import React from "react";
import { motion } from "framer-motion";
import iconBlockchain from "@/assets/blockchain.svg";
import iconMultichain from "@/assets/multichain-power.svg";
import iconSecurity from "@/assets/security.svg";
import type { BlockchainCard } from "@/data/homepage";
import { cn } from "@/utils/cn";
import { threeCardGridClass, threeCardItemClass } from "@/utils/threeCardGrid";

const iconUrlByKey: Record<string, any> = {
  "what-is-blockchain": iconBlockchain,
  multichain: iconMultichain,
  security: iconSecurity,
};

/** Figma 994:2374 / 994:2380 / 994:2386 — icon size presets */
const ICON_SIZE = {
  "what-is-blockchain":
    "h-[30px] w-[31px] sm:h-[32px] sm:w-[33px] md:h-[34.5px] md:w-[36px]",
  multichain: "h-5 w-[26px] sm:h-[22px] sm:w-[28px] md:h-6 md:w-[30px]",
  security: "h-[26px] w-5 sm:h-[28px] sm:w-[22px] md:h-[30px] md:w-6",
};

function CardIcon({ iconKey }: { iconKey: string }) {
  const src = iconUrlByKey[iconKey];
  const size = ICON_SIZE[iconKey as keyof typeof ICON_SIZE] ?? "h-9 w-9";
  return (
    <div
      className={`flex w-full shrink-0 items-center justify-center md:inline-flex md:w-auto md:justify-start ${size}`}
    >
      <img
        src={src?.src || src}
        alt=""
        className="h-full w-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function BlockchainSection({ cards }: { cards: BlockchainCard[] }) {
  return (
    <section
      id="blockchain-section"
      className="site-section relative w-full min-w-0 overflow-hidden"
    >
      <div className="container-standard relative z-10 w-full min-w-0">
        <div className={threeCardGridClass("section-inner gap-6 lg:gap-8 grid-three-cards")}>
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
             className={cn(
               "relative flex min-h-[240px] w-full min-w-0 flex-col overflow-hidden rounded-[24px] border border-white/5 bg-[#18474d]/95 px-6 py-8 shadow-xl backdrop-blur-[12px] sm:min-h-[272px] sm:px-[41px] sm:py-[43px] xl:h-[272px]",
               threeCardItemClass(i, cards.length),
               "max-xl:[&>div:first-child]:flex max-xl:[&>div:first-child]:w-full max-xl:[&>div:first-child]:justify-center",
             )}
            >
              <CardIcon iconKey={card.iconKey} />

              <h3 className="mt-[32px] font-display text-[24px] font-bold leading-tight tracking-tight text-white">
                {card.title}
              </h3>

              <p className="mt-[16px] font-body text-base font-normal leading-relaxed text-[#F5F5F5]">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
