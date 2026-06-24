"use client";

import { motion } from "framer-motion";
import {
  type ComponentProps,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import stratusLogo from "@/assets/stratus.png";
import blockhausLogo from "@/assets/blockhaus.png";
import nexusLogo from "@/assets/nexus.png";
import synapseLogo from "@/assets/synapse.png";
import stacksLogo from "@/assets/stacks.png";
import person1 from "@/assets/person.png";
import person2 from "@/assets/person2.png";
import person3 from "@/assets/person3.png";

const GAP_PX = 32;
const IMAGE_PLACEHOLDER_SRC =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' rx='24' fill='%23141c28'/%3E%3Cpath d='M64 176l36-44 28 32 20-24 44 36H64z' fill='%2330465d'/%3E%3Ccircle cx='98' cy='96' r='16' fill='%23455f7b'/%3E%3C/svg%3E";

function ImageWithFallback({
  src,
  alt,
  className,
  ...rest
}: ComponentProps<typeof Image>) {
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...rest}
      src={hasError ? IMAGE_PLACEHOLDER_SRC : src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      placeholder="blur"
      blurDataURL={IMAGE_PLACEHOLDER_SRC}
      unoptimized={hasError}
    />
  );
}

export function SocialProofSection({ socialProof }) {
  const reduced = usePrefersReducedMotion();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportW, setViewportW] = useState(0);
  const [index, setIndex] = useState(socialProof.testimonials.length);
  const [isPaused, setIsPaused] = useState(false);
  const isResetting = useRef(false);

  useEffect(() => {
    if (isResetting.current) {
      isResetting.current = false;
    }
  });

  // Local Avatars mapping
  const localAvatars = [person1, person2, person3];

  const partnerLogos: Record<string, any> = {
    p1: stratusLogo,
    p2: blockhausLogo,
    p3: nexusLogo,
    p4: synapseLogo,
    p5: stacksLogo,
  };

  const partners = socialProof.partners.map((p) => ({
    ...p,
    asset: partnerLogos[p.id],
  }));

  const marqueePartners = [...partners, ...partners, ...partners, ...partners];

  const testimonials = socialProof.testimonials.map((t, idx) => ({
    ...t,
    avatarLocal: localAvatars[idx % localAvatars.length],
  }));

  const loopedTestimonials = [
    ...testimonials.map(t => ({ ...t, loopId: `set1-${t.id}` })),
    ...testimonials.map(t => ({ ...t, loopId: `set2-${t.id}` })),
    ...testimonials.map(t => ({ ...t, loopId: `set3-${t.id}` })),
  ];

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setViewportW(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const count = testimonials.length;
  const contentPadding = viewportW >= 1024 ? 80 : 20;
  const viewableW = Math.max(0, viewportW - contentPadding * 2);

  const visibleCount =
    viewportW <= 0
      ? 1
      : viewportW >= 1280
        ? Math.min(3, count)
        : viewportW >= 768
          ? Math.min(2, count)
          : 1;

  const maxIndex = count * 3 - visibleCount;

  const cardW =
    viewableW > 0
      ? (viewableW - (visibleCount - 1) * GAP_PX) / visibleCount
      : 0;
  const step = cardW + GAP_PX;

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(i - 1, 0));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(i + 1, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const handleAnimationComplete = () => {
    const middle = maxIndex / 2;
    if (index > middle + count / 2) {
      isResetting.current = true;
      setIndex(index - count);
    } else if (index < middle - count / 2) {
      isResetting.current = true;
      setIndex(index + count);
    }
  };

  const x = viewportW > 0 ? contentPadding - index * step : 0;

  return (
    <section
      id="social-proof-section"
      className="site-section relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ backgroundColor: "#24bace" }}
    >
      <div className="container-standard relative z-10 text-center">
        <div className="section-inner text-center">
          <div className="section-heading-gap w-full flex flex-col items-center justify-center text-center">
            <motion.h2
              className="w-full text-center mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Trusted by the best in DeFi
            </motion.h2>
            <motion.p
              className="mx-auto mt-6 max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Global partners securing the Elementa network
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-0 overflow-hidden bg-black/5 border-y border-white/10 py-12 pause-on-hover">
        <div className="animate-marquee">
          {[...marqueePartners, ...marqueePartners].map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex shrink-0 items-center gap-12 px-6 opacity-70 grayscale transition-all duration-500 sm:gap-20 sm:px-10 md:gap-32 md:px-16"
            >
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={p.asset}
                  alt={p.name}
                  height={32}
                  width={128}
                  className="h-6 w-auto object-contain opacity-80 sm:h-8"
                />
                <span className="font-display text-sm font-bold uppercase tracking-widest text-black sm:text-base">
                  {p.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full px-0">
        <div className="pb-12 pt-12">
          <div
            ref={viewportRef}
            className="w-full min-w-0 overflow-hidden min-h-[min(280px,50vh)]"
          >
            {viewportW > 0 ? (
              <motion.div
                className="flex items-stretch cursor-grab active:cursor-grabbing"
                style={{ gap: GAP_PX }}
                animate={{ x }}
                drag="x"
                dragConstraints={{
                  left: contentPadding - maxIndex * step,
                  right: contentPadding,
                }}
                dragElastic={0.1}
                onDragEnd={(e, { offset }) => {
                  const swipe = offset.x;
                  const swipedSteps = Math.round(-swipe / step);
                  
                  if (Math.abs(swipedSteps) > 0) {
                    setIndex((i) => Math.max(0, Math.min(i + swipedSteps, maxIndex)));
                  } else {
                    if (swipe < -50) goNext();
                    else if (swipe > 50) goPrev();
                  }
                }}
                onAnimationComplete={handleAnimationComplete}
                transition={
                  isResetting.current || reduced
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        damping: 30,
                        stiffness: 150,
                        mass: 0.8,
                      }
                }
              >
                {loopedTestimonials.map((t) => (
                  <div
                    key={t.loopId}
                    className="relative flex shrink-0 flex-col-reverse gap-6 overflow-hidden rounded-[16px] border border-white/5 p-8 md:flex-col md:justify-between md:gap-0"
                    style={{ width: cardW, background: "rgba(0, 0, 0, 0.7)" }}
                  >
                    <Quote className="absolute -right-4 -top-4 h-24 w-24 rotate-12 text-white/[0.05]" />

                    <div className="relative z-10">
                      <p className="font-manrope text-base font-medium leading-relaxed tracking-tight text-[#F5F5F5] sm:text-lg lg:text-[1.125rem] md:text-left">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    <footer className="relative z-10 flex flex-col items-center gap-4 md:mt-10 md:flex-row md:items-center">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#24bace]/20 to-transparent" />
                        <ImageWithFallback
                          src={t.avatarLocal}
                          alt={t.author}
                          width={56}
                          height={56}
                          className="relative h-12 w-12 shrink-0 rounded-full border border-white/20 object-cover sm:h-14 sm:w-14"
                        />
                      </div>
                      <div className="min-w-0 text-center md:text-left">
                        <p className="truncate text-base font-bold text-white sm:text-lg">
                          {t.author}
                        </p>
                        <p className="mt-0.5 line-clamp-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#24bace]">
                          {t.role}
                        </p>
                      </div>
                    </footer>
                  </div>
                ))}
              </motion.div>
            ) : null}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:mt-12">
            <p className="sr-only" aria-live="polite">
              Viewing testimonial group {(index % count) + 1} of {count}
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
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-[#24bace]/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#24bace] sm:h-14 sm:w-14"
              >
                <ChevronLeft className="h-6 w-6" strokeWidth={2} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Next testimonials"
                onClick={goNext}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-[#24bace]/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#24bace] sm:h-14 sm:w-14"
              >
                <ChevronRight className="h-6 w-6" strokeWidth={2} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}