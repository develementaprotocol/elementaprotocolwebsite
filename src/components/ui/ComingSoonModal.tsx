"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
};

export function ComingSoonModal({
  open,
  onClose,
  title = "Coming Soon",
  message = "Elementa Wallet will be available on the App Store and Google Play shortly.",
}: Props) {
  return (
    <AnimatePresence>
      {open ? (
        <div
          className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
        >
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            aria-label="Close dialog"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: "spring", damping: 26, stiffness: 340, mass: 0.85 }}
            className="relative w-full max-w-md rounded-[20px] border border-white/10 bg-[#0a0f1d]/95 p-8 text-center shadow-[0_40px_100px_rgba(0,0,0,0.65)] backdrop-blur-2xl sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-lg p-2 text-white/60 transition-colors hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#24bace]">
              Elementa Wallet
            </p>
            <h3
              id="coming-soon-title"
              className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl"
            >
              {title}
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/75 sm:text-base">
              {message}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn-primary mt-8 w-full py-3.5 text-sm font-bold uppercase tracking-widest"
            >
              Got it
            </button>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
