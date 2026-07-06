"use client";



import {

  createContext,

  useCallback,

  useContext,

  useEffect,

  useState,

  type ComponentType,

  type ReactNode,

} from "react";



type ComingSoonModalProps = {

  open: boolean;

  onClose: () => void;

};



type ComingSoonContextValue = {

  openComingSoon: () => void;

  closeComingSoon: () => void;

};



const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);



export function ComingSoonProvider({ children }: { children: ReactNode }) {

  const [open, setOpen] = useState(false);

  const [Modal, setModal] = useState<ComponentType<ComingSoonModalProps> | null>(

    null,

  );

  const openComingSoon = useCallback(() => setOpen(true), []);

  const closeComingSoon = useCallback(() => setOpen(false), []);



  useEffect(() => {

    if (!open || Modal) return;

    let cancelled = false;

    import("@/components/ui/ComingSoonModal").then((m) => {

      if (!cancelled) setModal(() => m.ComingSoonModal);

    });

    return () => {

      cancelled = true;

    };

  }, [open, Modal]);



  return (

    <ComingSoonContext.Provider value={{ openComingSoon, closeComingSoon }}>

      {children}

      {open && Modal ? <Modal open={open} onClose={closeComingSoon} /> : null}

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

