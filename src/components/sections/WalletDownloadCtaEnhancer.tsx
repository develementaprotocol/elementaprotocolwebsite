"use client";

import { useEffect } from "react";
import { useComingSoon } from "@/components/providers/ComingSoonProvider";

/** Attaches coming-soon modal to the server-rendered hero download button after idle. */
export function WalletDownloadCtaEnhancer() {
  const { openComingSoon } = useComingSoon();

  useEffect(() => {
    const el = document.getElementById("wallet-download-cta");
    if (!el) return;

    const onClick = (event: Event) => {
      event.preventDefault();
      openComingSoon();
    };

    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, [openComingSoon]);

  return null;
}
