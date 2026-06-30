"use client";

import Image, { type StaticImageData } from "next/image";
import appleButton from "@/assets/apple-button.png";
import googleButton from "@/assets/google-export-button.png";
import { DownloadAppButton } from "@/components/ui/DownloadAppButton";
import { cn } from "@/utils/cn";

type StoreButton = {
  label: string;
  image: StaticImageData;
};

type AppStoreButtonsProps = {
  className?: string;
  buttonClassName?: string;
};

const storeButtons = [
  {
    label: "Download on the App Store",
    image: appleButton,
  },
  {
    label: "Get it on Google Play",
    image: googleButton,
  },
] satisfies StoreButton[];

export function AppStoreButtons({
  className,
  buttonClassName,
}: AppStoreButtonsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {storeButtons.map(({ label, image }) => (
        <DownloadAppButton
          key={label}
          aria-label={label}
          className={cn(
            "inline-flex h-12 w-[162px] items-center justify-center overflow-hidden  transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24bace]",
            buttonClassName,
          )}
        >
          <Image
            src={image}
            alt=""
            aria-hidden="true"
            sizes="162px"
            className="h-full w-full object-contain"
          />
        </DownloadAppButton>
      ))}
    </div>
  );
}
