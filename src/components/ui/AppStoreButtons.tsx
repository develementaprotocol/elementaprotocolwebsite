"use client";

import Image from "next/image";
import appleBadge from "@/assets/apple-button.png";
import googleBadge from "@/assets/google-export-button.png";
import { useComingSoon } from "@/components/providers/ComingSoonProvider";
import { cn } from "@/utils/cn";

type AppStoreButtonsProps = {
  className?: string;
  buttonClassName?: string;
};

export function AppStoreButtons({
  className,
  buttonClassName,
}: AppStoreButtonsProps) {
  const { openComingSoon } = useComingSoon();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openComingSoon();
  };

  return (
    <div className={cn("flex flex-wrap gap-4 sm:gap-6", className)}>
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "group relative flex h-[48px] w-[140px] items-center justify-center transition-all hover:shadow-[0_0_24px_rgba(36,186,206,0.35)] active:opacity-90 md:h-[52px] md:w-[160px]",
          buttonClassName,
        )}
      >
        <Image
          src={appleBadge}
          alt="Download on the App Store"
          className="h-full w-full object-contain"
        />
      </button>
      <button
        type="button"
        onClick={handleClick}
        className={cn(
          "group relative flex h-[48px] w-[140px] items-center justify-center transition-all hover:shadow-[0_0_24px_rgba(36,186,206,0.35)] active:opacity-90 md:h-[52px] md:w-[160px]",
          buttonClassName,
        )}
      >
        <Image
          src={googleBadge}
          alt="Get it on Google Play"
          className="h-full w-full object-contain"
        />
      </button>
    </div>
  );
}
