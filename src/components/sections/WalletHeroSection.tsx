import Image from "next/image";

import walletHeroLeft from "@/assets/wallet-hero-left.png";
import walletHeroRight from "@/assets/right-phone-hero.png";
import type { WalletHeroContent } from "@/data/walletPage";
import { HeroBlurOverlay } from "@/components/ui/HeroBlurOverlay";

export function WalletHeroSection({ hero }: { hero: WalletHeroContent }) {
  return (
    <div className="relative">
      <section className="relative wallet-hero-section flex min-h-dvh w-full flex-col overflow-hidden bg-transparent pb-6 pt-[var(--site-nav-offset)] sm:pb-8 md:pb-12 xl:min-h-screen xl:pb-0">
        <div className="absolute inset-0 z-[-1]" />

        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] h-[120%] w-[120%] atmosphere-blob-tl" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%] atmosphere-blob-br" />
          </div>
          <HeroBlurOverlay />

          <div className="container-standard relative z-[2] h-full w-full">
            <div className="pointer-events-none absolute z-[5] hidden xl:block xl:bottom-[-18%] xl:left-[4%] xl:h-[62%] xl:w-[30%] 2xl:bottom-[-20%] 2xl:left-[8%] 2xl:h-[70%] 2xl:w-[32%]">
              <Image
                src={walletHeroLeft}
                alt=""
                fill
                sizes="(min-width: 1536px) 32vw, 30vw"
                className="object-contain select-none"
                style={{ filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.8))" }}
                loading="lazy"
              />
            </div>

            <div className="pointer-events-none absolute z-[5] hidden origin-center xl:block xl:bottom-[-18%] xl:right-[4%] xl:h-[62%] xl:w-[30%] 2xl:bottom-[-20%] 2xl:right-[8%] 2xl:h-[70%] 2xl:w-[32%]">
              <Image
                src={walletHeroRight}
                alt=""
                fill
                sizes="(min-width: 1536px) 32vw, 30vw"
                className="object-contain select-none"
                style={{ filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.8))" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="container-standard relative z-20 flex w-full flex-1 flex-col items-center justify-start px-2 pt-4 sm:pt-6 md:pt-8 xl:justify-center xl:pt-10">
          {/* Mobile / tablet LCP — first in DOM; flex order keeps visual stack unchanged */}
          <div className="relative z-10 order-2 mt-10 flex w-full justify-center px-2 sm:mt-12 md:mt-14 xl:hidden">
            <div className="w-full max-w-[min(72vw,220px)] sm:max-w-[240px] md:max-w-[260px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/wallet-hero-left-mobile.webp"
                alt="Elementa Wallet app"
                width={520}
                height={896}
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                className="h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          <div className="section-inner relative z-20 order-1 flex w-full max-w-[900px] flex-col items-center px-1 text-center sm:px-0">
            <h1 className="hero-heading text-balance w-full font-display font-bold text-Elementa-primary">
              {hero.headlineParts.map((part, i) =>
                part.highlight ? (
                  <span key={i} className="text-Elementa-accent">
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                ),
              )}
            </h1>
            <p className="hero-subheading text-pretty mt-3 max-w-[min(100%,36rem)] px-0.5 font-body font-light text-Elementa-muted sm:mt-4 md:mt-5 md:max-w-[600px]">
              {hero.subheadline}
            </p>

            <div className="relative z-30 mt-6 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:mt-10">
              <button
                type="button"
                id="wallet-download-cta"
                className="btn-primary relative z-30 flex h-[52px] w-full px-8 font-body text-[15px] sm:w-auto md:h-[56px] md:px-12 md:text-base"
              >
                {hero.primaryCta.label}
              </button>
              <a
                href={hero.secondaryCta.href}
                className="btn-secondary relative z-30 flex h-[52px] w-full px-8 font-body text-[15px] sm:w-auto md:h-[56px] md:px-12 md:text-base"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
