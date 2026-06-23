"use client";

import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import zainImg from "@/assets/zain.png";
import hassamImg from "@/assets/hassam.png";
import kashanImg from "@/assets/kashan.png";
import alexisImg from "@/assets/Alexis.png";
import uzairImg from "@/assets/uzair.png";

const team = [
  {
    name: "Abdullah Zain",
    role: "Product Lead",
    image: zainImg,
  },
  {
    name: "Hassam Ud Din Khan",
    role: "Developer",
    image: hassamImg,
  },
  {
    name: "Kashan Ahmed",
    role: "Developer",
    image: kashanImg,
  },
  {
    name: "Sikandar Iqbal",
    role: "Developer",
    image: alexisImg,
  },
  {
    name: "Uzair Nazir",
    role: "Developer",
    image: uzairImg,
  },
];

const GAP_PX = 32;

const AboutTeam = () => {
  const reduced = usePrefersReducedMotion();
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportW, setViewportW] = useState(0);
  const [index, setIndex] = useState(0);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setViewportW(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const count = team.length;
  const visibleCount =
    viewportW <= 0
      ? 1
      : viewportW >= 1280
        ? Math.min(4, count)
        : viewportW >= 1024
          ? Math.min(3, count)
          : viewportW >= 640
            ? Math.min(2, count)
            : 1;

  const cardW =
    viewportW > 0
      ? (viewportW - (visibleCount - 1) * GAP_PX) / visibleCount
      : 0;
  const step = cardW + GAP_PX;
  const maxIndex = Math.max(0, count - visibleCount);
  const slideCount = maxIndex + 1;

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const x = viewportW > 0 ? -index * step : 0;

  return (
    <section 
      id="about-team"
      className="relative site-section overflow-hidden"
    >
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
                Built by Innovators
              </h2>
              <p className="mx-auto max-w-3xl">
                Our team combines deep expertise in blockchain, security, and user experience design focused on delivering products that define the future of Web3.
              </p>
            </motion.div>
          </div>

          <div className="relative w-full overflow-hidden" ref={viewportRef}>
            {viewportW > 0 ? (
              <motion.div
                className="flex items-stretch cursor-grab active:cursor-grabbing"
                style={{ gap: GAP_PX }}
                animate={{ x }}
                drag="x"
                dragConstraints={{ left: -maxIndex * step, right: 0 }}
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
                transition={
                  reduced
                    ? { duration: 0 }
                    : {
                        type: "spring",
                        damping: 30,
                        stiffness: 150,
                        mass: 0.8,
                      }
                }
              >
                {team.map((member, i) => (
                  <div
                    key={i}
                    className="glass-card rounded-[16px] overflow-hidden group relative flex flex-col shrink-0 bg-[#15202f] border-white/5"
                    style={{ width: cardW }}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[3/5] w-full overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#0a6a7e]/90 after:via-[#0a6a7e]/40 after:to-transparent after:opacity-90">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                      
                      {/* Content Overlayed on Image Bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-center flex flex-col items-center z-10">
                        <h3>
                          {member.name}
                        </h3>
                        <p className="text-white/70 text-sm font-medium uppercase tracking-widest">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : null}
          </div>

          {/* Navigation Controls */}
          {maxIndex > 0 && (
            <div className="mt-12 flex justify-center items-center gap-4">
              <button
                onClick={goPrev}
                disabled={index === 0}
                className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all ${
                  index === 0 
                    ? "opacity-50 cursor-not-allowed text-white/50" 
                    : "text-white hover:bg-[#24bace]/20 hover:border-[#24bace]/50 active:scale-95"
                }`}
                aria-label="Previous team member"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: slideCount }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === i ? "w-8 bg-[#24bace]" : "w-2 bg-white/20"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goNext}
                disabled={index === maxIndex}
                className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all ${
                  index === maxIndex 
                    ? "opacity-50 cursor-not-allowed text-white/50" 
                    : "text-white hover:bg-[#24bace]/20 hover:border-[#24bace]/50 active:scale-95"
                }`}
                aria-label="Next team member"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
