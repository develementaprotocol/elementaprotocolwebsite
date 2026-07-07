"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Mount children only when near the viewport — avoids loading all section chunks at once. */
export function LazyOnView({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  return <div ref={ref} className={visible ? undefined : "min-h-[40vh]"}>{visible ? children : null}</div>;
}
