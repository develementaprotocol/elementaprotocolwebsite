"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useComingSoon } from "@/components/providers/ComingSoonProvider";
import { cn } from "@/utils/cn";

type DownloadAppButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

/** Text CTA that opens the global “Coming Soon” app-download modal. */
export function DownloadAppButton({
  children,
  className,
  onClick,
  type = "button",
  ...rest
}: DownloadAppButtonProps) {
  const { openComingSoon } = useComingSoon();

  return (
    <button
      type={type}
      className={cn(className)}
      onClick={(e) => {
        onClick?.(e);
        if (!e.defaultPrevented) {
          openComingSoon();
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
