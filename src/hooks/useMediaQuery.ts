"use client";

import { useEffect, useState } from "react";

/** SSR-safe media query hook — defaults to `defaultMatches` until hydrated. */
export function useMediaQuery(query: string, defaultMatches = false) {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 767px)", true);
}

export function useIsMdUp() {
  return useMediaQuery("(min-width: 768px)", false);
}

export function useIsDesktopNav() {
  return useMediaQuery("(min-width: 1280px)", false);
}
