"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** In-page hash navigation on the homepage (client-only). */
export function HomeClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const scrollToHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const navOffset = 96;
      const top = el.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    };

    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
