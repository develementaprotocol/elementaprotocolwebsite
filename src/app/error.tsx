"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { HideFooterWhileMounted } from "@/components/providers/FooterControl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <HideFooterWhileMounted />
      <main className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col items-center justify-center overflow-hidden px-4 py-20 md:min-h-[calc(100dvh-5rem)]">
        <motion.div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-[min(75vw,440px)] w-[min(75vw,440px)] rounded-full bg-red-500/10 blur-[110px]" />
          <div className="absolute h-[min(55vw,320px)] w-[min(55vw,320px)] rounded-full bg-[#24bace]/12 blur-[90px]" />
        </motion.div>

        <motion.div
          className="relative z-10 flex max-w-lg flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/25 bg-red-500/[0.08] shadow-[0_0_36px_rgba(239,68,68,0.15)] backdrop-blur-md"
            animate={
              reduced
                ? undefined
                : { scale: [1, 1.03, 1] }
            }
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <AlertTriangle className="h-9 w-9 text-red-400/95" strokeWidth={1.35} aria-hidden />
          </motion.div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-white/40">
            Something went wrong
          </p>

          <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
            We could not finish loading this view. You can retry, or return home while we stabilize things.
          </p>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45 }}
          >
            <button
              type="button"
              onClick={() => reset()}
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.16em]"
            >
              <RotateCcw className="h-4 w-4" aria-hidden />
              Try again
            </button>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
