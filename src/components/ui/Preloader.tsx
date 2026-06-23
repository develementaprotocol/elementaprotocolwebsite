"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * After the first completed run, repeat full page visits skip the preloader.
 * Clearing site data/cache removes this key → first-visit behavior again.
 * Full reload (F5 / hard refresh) always shows the preloader again for that load.
 */
const STORAGE_KEY = "elementa_preloader_seen_v1";
/** Matches opacity transition (0.55s) plus buffer so exit animation completes */
const EXIT_ANIMATION_MS = 600;

function hasCompletedPreloader(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

/** True when this document load was triggered by a reload (soft or hard). */
function isReloadNavigation(): boolean {
  if (typeof window === "undefined") return false;
  const nav = performance.getEntriesByType(
    "navigation",
  )[0] as PerformanceNavigationTiming | undefined;
  return nav?.type === "reload";
}

function shouldSkipPreloader(): boolean {
  if (typeof window === "undefined") return false;
  if (isReloadNavigation()) return false;
  return hasCompletedPreloader();
}

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const displayProgressRef = useRef(0);
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    displayProgressRef.current = 100;
    setProgress(100);
    setLeaving(true);

    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* quota / private mode */
    }

    window.setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, EXIT_ANIMATION_MS);
  }, []);

  useEffect(() => {
    // Simulated progress increment for better UX
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 200);

    const onWindowLoad = () => {
      clearInterval(interval);
      finish();
    };

    if (document.readyState === "complete") {
      onWindowLoad();
    } else {
      window.addEventListener("load", onWindowLoad, { once: true });
      // Fallback timeout to ensure loader disappears even if some assets are slow
      const fallback = window.setTimeout(onWindowLoad, 3000);
      return () => {
        clearInterval(interval);
        window.removeEventListener("load", onWindowLoad);
        window.clearTimeout(fallback);
      };
    }
  }, [finish]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#15202f] overflow-hidden"
      style={{
        opacity: leaving ? 0 : 1,
        transition: leaving ? "opacity 0.55s ease-in-out" : "none",
        pointerEvents: leaving ? "none" : "auto",
      }}
    >
      <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
        <div
          className="absolute rounded-full border border-[#24bace]/30"
          style={{
            width: 180,
            height: 180,
            animation: leaving ? "none" : "elementa-spin-cw 8s linear infinite",
          }}
        >
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#24bace] shadow-[0_0_12px_4px_#24bace]" />
        </div>

        <div
          className="absolute rounded-full border border-white/20"
          style={{
            width: 130,
            height: 130,
            animation: leaving ? "none" : "elementa-spin-ccw 6s linear infinite",
            transform: "rotate(45deg)",
          }}
        >
          <div className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/70 shadow-[0_0_8px_2px_rgba(255,255,255,0.5)]" />
        </div>

        <div
          className="absolute rounded-full border border-[#24bace]/15"
          style={{
            width: 90,
            height: 90,
            animation: leaving ? "none" : "elementa-spin-cw 4s linear infinite",
            transform: "rotate(-30deg)",
          }}
        >
          <div className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#24bace]/80" />
        </div>

        <div
          className="absolute rounded-full bg-[#24bace]"
          style={{
            width: 14,
            height: 14,
            boxShadow:
              "0 0 24px 8px rgba(36,186,206,0.5), 0 0 48px 16px rgba(36,186,206,0.15)",
            animation: leaving ? "none" : "elementa-elementa 2s ease-in-out infinite",
          }}
        />
      </div>

      <p
        className="mt-10 font-display text-lg font-bold tracking-[0.35em] text-white uppercase"
        style={{ letterSpacing: "0.35em" }}
      >
        ELEMENTA PROTOCOL
      </p>

      <div className="mt-8 w-[220px]">
        <div className="h-[1px] w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#24bace] to-[#0a6a7e]"
            style={{
              width: `${progress}%`,
              transition: "width 0.18s ease-out",
              boxShadow: "0 0 8px 2px rgba(36,186,206,0.6)",
            }}
          />
        </div>
        <p className="mt-3 text-center font-mono text-[10px] tracking-[0.2em] text-[#24bace]/60">
          {progress}%
        </p>
      </div>

      <style>{`
        @keyframes elementa-spin-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes elementa-spin-ccw {
          from { transform: rotate(45deg); }
          to   { transform: rotate(-315deg); }
        }
        @keyframes elementa-elementa {
          0%, 100% { transform: scale(1);   opacity: 1;   }
          50%       { transform: scale(1.4); opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
