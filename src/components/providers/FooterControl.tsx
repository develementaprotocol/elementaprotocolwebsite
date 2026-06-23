"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type FooterControlValue = {
  suppressCount: number;
  suppressFooter: () => void;
  releaseFooter: () => void;
};

const FooterControlContext = createContext<FooterControlValue | null>(null);

export function FooterControlProvider({ children }: { children: ReactNode }) {
  const [suppressCount, setSuppressCount] = useState(0);

  const suppressFooter = useCallback(() => {
    setSuppressCount((c) => c + 1);
  }, []);

  const releaseFooter = useCallback(() => {
    setSuppressCount((c) => Math.max(0, c - 1));
  }, []);

  const value = useMemo(
    () => ({ suppressCount, suppressFooter, releaseFooter }),
    [suppressCount, suppressFooter, releaseFooter],
  );

  return (
    <FooterControlContext.Provider value={value}>
      {children}
    </FooterControlContext.Provider>
  );
}

export function useFooterSuppressed() {
  const ctx = useContext(FooterControlContext);
  return ctx ? ctx.suppressCount > 0 : false;
}

function useFooterControl() {
  const ctx = useContext(FooterControlContext);
  if (!ctx) {
    throw new Error("FooterControlProvider is required for HideFooterWhileMounted");
  }
  return ctx;
}

/** Hides the site footer while this route is shown (404, error boundary, etc.). */
export function HideFooterWhileMounted() {
  const { suppressFooter, releaseFooter } = useFooterControl();
  useEffect(() => {
    suppressFooter();
    return () => {
      releaseFooter();
    };
  }, [suppressFooter, releaseFooter]);
  return null;
}
