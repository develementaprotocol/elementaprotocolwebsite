"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { ComingSoonModal } from "@/components/ui/ComingSoonModal";

type ComingSoonContextValue = {
  openComingSoon: () => void;
  closeComingSoon: () => void;
};

const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function ComingSoonProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openComingSoon = useCallback(() => setOpen(true), []);
  const closeComingSoon = useCallback(() => setOpen(false), []);

  return (
    <ComingSoonContext.Provider value={{ openComingSoon, closeComingSoon }}>
      {children}
      <ComingSoonModal open={open} onClose={closeComingSoon} />
    </ComingSoonContext.Provider>
  );
}

export function useComingSoon() {
  const ctx = useContext(ComingSoonContext);
  if (!ctx) {
    throw new Error("useComingSoon must be used within ComingSoonProvider");
  }
  return ctx;
}
