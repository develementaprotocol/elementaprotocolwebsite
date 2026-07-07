"use client";

import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-20">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center error-page-glow-enter">
          <div className="h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-[#24bace]/15 blur-[100px]" />
        </div>

        <div className="relative z-10 flex max-w-md flex-col items-center text-center error-page-content-enter">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_0_40px_rgba(36,186,206,0.2)] backdrop-blur-md not-found-icon-float motion-reduce:animate-none">
            <Compass className="h-9 w-9 text-[var(--btn-primary-bg)]" strokeWidth={1.35} aria-hidden />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-white/45">404</p>
          <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
            Page not found. Refresh OR Head back to explore Elementa.
          </p>

          <div className="mt-10 error-page-actions-enter">
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Home
            </Link>
          </div>
        </div>
      </main>
  );
}
