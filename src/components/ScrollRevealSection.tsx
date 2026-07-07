"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/utils/cn";

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollRevealSection({
  children,
  className = "",
}: ScrollRevealSectionProps) {
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
