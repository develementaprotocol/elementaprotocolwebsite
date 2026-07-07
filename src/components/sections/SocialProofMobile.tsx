"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { SocialProof } from "@/data/homepage";
import { useIsMobile } from "@/hooks/useMediaQuery";

import stratusLogo from "@/assets/stratus.png";
import blockhausLogo from "@/assets/blockhaus.png";
import nexusLogo from "@/assets/nexus.png";
import synapseLogo from "@/assets/synapse.png";
import stacksLogo from "@/assets/stacks.png";
import person1 from "@/assets/person.png";
import person2 from "@/assets/person2.png";
import person3 from "@/assets/person3.png";

const partnerLogos: Record<string, (typeof stratusLogo)> = {
  p1: stratusLogo,
  p2: blockhausLogo,
  p3: nexusLogo,
  p4: synapseLogo,
  p5: stacksLogo,
};

const localAvatars = [person1, person2, person3];

/** Mobile layout — CSS marquee + scroll-snap carousel; no Framer, ResizeObserver, or timers. */
export function SocialProofMobile({
  socialProof,
}: {
  socialProof: SocialProof;
}) {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const partners = socialProof.partners.map((p) => ({
    ...p,
    asset: partnerLogos[p.id],
  }));

  const marqueePartners = [...partners, ...partners];
  const marqueeItems = isMobile ? partners : marqueePartners;

  const testimonials = socialProof.testimonials.map((t, idx) => ({
    ...t,
    avatarLocal: localAvatars[idx % localAvatars.length],
  }));

  const scrollToIndex = useCallback((nextIndex: number) => {
    const count = testimonials.length;
    const wrapped = ((nextIndex % count) + count) % count;
    const container = scrollRef.current;
    const card = container?.children[wrapped] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveIndex(wrapped);
  }, [testimonials.length]);

  const goPrev = useCallback(() => {
    scrollToIndex(activeIndex - 1);
  }, [activeIndex, scrollToIndex]);

  const goNext = useCallback(() => {
    scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  const onScrollPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container || (e.pointerType === "mouse" && e.button !== 0)) return;

    const startX = e.clientX;
    const startScrollLeft = container.scrollLeft;
    let dragging = true;

    const onMove = (ev: PointerEvent) => {
      if (!dragging || !scrollRef.current) return;
      scrollRef.current.scrollLeft = startScrollLeft - (ev.clientX - startX);
    };

    const onUp = () => {
      dragging = false;
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointercancel", onUp);
    };

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
    document.addEventListener("pointercancel", onUp);
    e.preventDefault();
  }, []);

  return (
    <section
      id="social-proof-section"
      className="site-section relative overflow-hidden"
      style={{ backgroundColor: "#24bace" }}
    >
      <div className="container-standard section-inner section-heading-gap relative z-10 mx-auto max-w-2xl rounded-2xl px-6 py-5 text-center">
          <h2 className="w-full text-center mx-auto text-white">
            {socialProof.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white">
            Global partners securing the Elementa network
          </p>
      </div>

      <div className="relative z-10 mt-0 overflow-hidden bg-black/5 border-y border-white/10 py-12">
        <div className="animate-marquee">
          {marqueeItems.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex shrink-0 items-center gap-4 px-6 opacity-70 grayscale sm:gap-20 sm:px-10"
            >
              <Image
                src={p.asset}
                alt={p.name}
                height={32}
                width={128}
                className="h-6 w-auto object-contain opacity-80"
              />
              <span className="rounded bg-transparent px-2 py-0.5 font-display text-sm font-bold uppercase tracking-widest text-[#081421]">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full px-0 py-12">
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto px-5 pb-2 select-none touch-pan-x cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Customer testimonials"
          style={{ touchAction: "pan-x" }}
          onPointerDown={onScrollPointerDown}
          onScroll={(e) => {
            const container = e.currentTarget;
            const cards = Array.from(container.children) as HTMLElement[];
            if (!cards.length) return;
            const center = container.scrollLeft + container.clientWidth / 2;
            let nearest = 0;
            let nearestDist = Number.POSITIVE_INFINITY;
            cards.forEach((card, i) => {
              const cardCenter = card.offsetLeft + card.offsetWidth / 2;
              const dist = Math.abs(center - cardCenter);
              if (dist < nearestDist) {
                nearestDist = dist;
                nearest = i;
              }
            });
            setActiveIndex(nearest);
          }}
        >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="relative flex w-[min(calc(100vw-2.5rem),340px)] shrink-0 snap-center flex-col-reverse gap-6 overflow-hidden rounded-[16px] border border-white/5 p-8"
                style={{ background: "rgba(0, 0, 0, 0.7)" }}
              >
                <Quote
                  className="absolute -right-4 -top-4 h-24 w-24 rotate-12 text-white/[0.05]"
                  aria-hidden
                />
                <p className="relative z-10 font-manrope text-base font-medium leading-relaxed tracking-tight text-[#F5F5F5]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#24bace]/20 to-transparent" />
                    <Image
                      src={t.avatarLocal}
                      alt={t.author}
                      width={56}
                      height={56}
                      className="relative h-12 w-12 shrink-0 rounded-full border border-white/20 object-cover"
                    />
                  </div>
                  <p className="truncate text-base font-bold text-white">
                    {t.author}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#24bace]">
                    {t.role}
                  </p>
                </footer>
              </article>
            ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="sr-only" aria-live="polite">
            Viewing testimonial {activeIndex + 1} of {testimonials.length}
          </p>
          <div
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#15202f]/85 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
            role="group"
            aria-label="Testimonial navigation"
          >
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={goPrev}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-[#24bace]/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#24bace]"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={goNext}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-[#24bace]/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#24bace]"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={2} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
