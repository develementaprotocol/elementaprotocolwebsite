"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { HideFooterWhileMounted } from "@/components/providers/FooterControl";

export default function NotFound() {
  const reduced = useReducedMotion();

  return (
    <>
      <HideFooterWhileMounted />
      <main className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center overflow-hidden px-4 py-20 md:min-h-[calc(100dvh-5rem)]">
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-[#24bace]/15 blur-[100px]" />
        </motion.div>

        <motion.div
          className="relative z-10 flex max-w-md flex-col items-center text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_0_40px_rgba(36,186,206,0.2)] backdrop-blur-md"
            animate={
              reduced
                ? undefined
                : { y: [0, -6, 0] }
            }
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Compass className="h-9 w-9 text-[var(--btn-primary-bg)]" strokeWidth={1.35} aria-hidden />
          </motion.div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-white/45">404</p>
          <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
            Page not found. Refresh OR Head back to explore Elementa.
          </p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.45 }}
          >
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Home
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
