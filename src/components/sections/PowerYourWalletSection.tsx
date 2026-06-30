"use client";

import { motion } from "framer-motion";
import { walletAssets } from "../../data/walletAssets";
import { powerWalletData } from "../../data/walletPage";
import { cn } from "@/utils/cn";
import { threeCardGridClass, threeCardItemClass } from "@/utils/threeCardGrid";

export function PowerYourWalletSection() {
  return (
    <section className="site-section power-your-wallet-section relative overflow-hidden">
      <div className="container-standard">
        <div className="section-inner">
          <div className="section-heading-gap w-full text-center flex flex-col items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="w-full text-center mx-auto"
            >
              Empower Your Digital Economy
            </motion.h2>
          </div>

          <div className={threeCardGridClass("gap-8 mt-12 justify-center grid-three-cards")}>
            {powerWalletData.items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.6,
                  ease: [0.215, 0.61, 0.355, 1.0],
                }}
                className={cn(
                  "flex flex-col items-center gap-8 rounded-[16px] border border-white/[0.06] p-8 text-center shadow-[0_24px_48px_rgba(0,0,0,0.3)] sm:p-10 md:items-start md:text-left",
                  threeCardItemClass(idx, powerWalletData.items.length),
                )}
                style={{
                  background: "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)",
                }}
              >
                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#24bace]/20 bg-[#24bace]/20 backdrop-blur-sm sm:h-14 sm:w-14 md:mx-0 md:h-16 md:w-16">
                  <div className="relative h-6 w-6 sm:h-7 sm:w-7 md:h-6 md:w-6">
                    <img
                      src={
                        typeof walletAssets[item.iconKey] === "string"
                          ? walletAssets[item.iconKey]
                          : walletAssets[item.iconKey]?.src || ""
                      }
                      alt=""
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex w-full flex-col gap-4">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="font-body text-[15px] font-normal leading-relaxed text-[#F5F5F5]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
