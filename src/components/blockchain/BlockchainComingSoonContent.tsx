"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight} from "lucide-react";
const headline = "Blockchain";
const phrase = "Coming Soon";

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.35 },
  },
};

const letterSpring = {
  hidden: { opacity: 0, y: 22, rotateX: -55 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 24 },
  },
};

const letterFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.35 } },
};

export function BlockchainComingSoonContent() {
  const reduced = useReducedMotion();
  const letterVariants = reduced ? letterFade : letterSpring;

  return (
    <main className="relative isolate flex min-h-[calc(100dvh-4.5rem)] flex-col overflow-hidden md:min-h-[calc(100dvh-5rem)]">
      {/* Load-in veil */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 bg-[var(--color-Elementa-bg)]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      />

      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          className="absolute left-1/2 top-[32%] h-[min(92vw,620px)] w-[min(92vw,620px)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--btn-primary-bg) 22%, transparent)",
          }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-[8%] right-[-6%] h-80 w-80 rounded-full blur-[100px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--btn-primary-bg) 18%, transparent)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        />
        <motion.div
          className="absolute left-[-10%] top-[48%] h-64 w-64 rounded-full blur-[90px]"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--btn-primary-bg) 14%, transparent)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
        />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(color-mix(in srgb, var(--btn-primary-bg) 45%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--btn-primary-bg) 45%, transparent) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 42%, black, transparent)",
          }}
        />
      </div>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-16 sm:py-20" aria-label="Blockchain coming soon">
        <motion.div
          className="relative flex w-full max-w-[720px] flex-col items-center rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 text-center shadow-[0_22px_100px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:px-10 sm:py-14"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="mb-3 font-display text-[clamp(1.2rem,2.3vw,1.5rem)] font-bold uppercase tracking-[0.32em] text-[var(--btn-primary-bg)]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            {headline}
          </motion.p>

          {/* Copy — only “Blockchain Coming Soon” */}
          <motion.div
            variants={list}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center justify-center gap-y-1.5 text-center"
          >
            {phrase.split("").map((ch, i) =>
              ch === " " ? (
                <span key={`sp-${i}`} className="w-2 shrink-0 sm:w-2.5" />
              ) : (
                <motion.span
                  key={`ch-${i}`}
                  variants={letterVariants}
                  className="inline-block origin-bottom font-display text-[clamp(1.85rem,7vw,3.25rem)] font-bold tracking-[-0.03em] text-white drop-shadow-[0_2px_32px_rgba(0,0,0,0.45)]"
                  style={{ perspective: 640 }}
                >
                  {ch}
                </motion.span>
              ),
            )}
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 sm:mt-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.5 }}
          >
            <Link
              href="/"
              prefetch
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 transition-[background-color,border-color,transform,box-shadow] hover:border-[color:color-mix(in_srgb,var(--btn-primary-bg)_45%,white)] hover:bg-[color:color-mix(in_srgb,var(--btn-primary-bg)_12%,white_4%)] hover:shadow-[0_0_28px_color-mix(in_srgb,var(--btn-primary-bg)_25%,transparent)] active:scale-[0.98]"
            >
              Back to Home
              <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
