"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import phoneMockup from "@/assets/wallet-hero-left.png";
import dotGridBg from "@/assets/Group 1261155213.png";
import ellipseGlow from "@/assets/Ellipse 4.png";
import { AppStoreButtons } from "@/components/ui/AppStoreButtons";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function DownloadAppSection() {
  return (
    <section className="site-section relative w-full overflow-hidden bg-transparent">
      <div className="container-standard relative z-10">
        <div className="section-inner">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="logo-align-inset relative z-10 flex flex-1 flex-col items-start text-left">
              <motion.h2
                {...fadeUp(0)}
                className="font-display text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
              >
                Download our app and <br className="hidden md:block" />
                get most out of it
              </motion.h2>

              <motion.p
                {...fadeUp(0.1)}
                className="mt-6 w-full max-w-[540px] font-body text-lg leading-relaxed text-Elementa-muted md:text-xl"
              >
                Get Elementa Wallet: Your Gateway to a Vibrant{" "}
                <br className="hidden sm:block" /> Digital Ecosystem
              </motion.p>

              <motion.div {...fadeUp(0.2)} className="relative z-20 mt-10">
                <AppStoreButtons className="justify-start" />
              </motion.div>
            </div>

            {/* Figma mock scene — static, single shared anchor */}
            <div className="relative flex flex-1 items-end justify-center overflow-hidden lg:justify-end">
              <div className="relative h-[min(440px,82vw)] w-full max-w-[440px] overflow-hidden sm:h-[480px] lg:ml-auto lg:h-[520px]">
                <div className="absolute bottom-0 left-1/2 h-full w-full max-w-[400px] -translate-x-1/2 overflow-hidden bg-transparent">
                  {/* Arc + dot grid — centered behind phone */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-1/2 z-0 aspect-square w-[min(100%,380px)] -translate-x-1/2 translate-y-[4%]"
                  >
                    <div className="absolute bottom-[2%] left-1/2 h-[42%] w-[92%] -translate-x-1/2">
                      <Image
                        src={dotGridBg}
                        alt=""
                        fill
                        quality={100}
                        sizes="250px"
                        className="object-cover object-center"
                      />
                    </div>
                    <Image
                      src={ellipseGlow}
                      alt=""
                      fill
                      quality={100}
                      sizes="380px"
                      className="object-contain object-bottom mix-blend-screen"
                    />
                  </div>

                  {/* Static phone — mobile: 15% lower; desktop layout unchanged */}
                  <div
                    className="absolute bottom-0 left-[55%] z-10 w-[68%] max-w-[270px] bg-transparent max-lg:left-1/2 [--mock-translate-y:30%] max-lg:[--mock-translate-y:45%]"
                    style={{
                      transform:
                        "translateX(-50%) translateY(var(--mock-translate-y)) rotate(-5deg)",
                      transformOrigin: "50% 92%",
                    }}
                  >
                    <div className="relative aspect-[9/19.5] w-full overflow-hidden">
                      <Image
                        src={phoneMockup}
                        alt="Elementa Wallet App"
                        fill
                        priority
                        quality={100}
                        sizes="(max-width: 640px) 260px, 270px"
                        className="object-contain object-top "
                      />
                    </div>
                  </div>

                  {/* Bottom fade — blends mock into page bg (#15202F → transparent) */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[34%]"
                    style={{
                      background:
                        "linear-gradient(to top, #15202F 0%, #15202F00 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
