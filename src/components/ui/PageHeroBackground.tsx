import Image from "next/image";
import topReflect from "@/assets/top-reflect.png";
import { HeroBlurOverlay } from "@/components/ui/HeroBlurOverlay";
import { cn } from "@/utils/cn";

/** Blends hero reflect into page background — hides the hard edge below the image. */
const HERO_BOTTOM_BLEND =
  "linear-gradient(to bottom, transparent 0%, rgba(21, 32, 47, 0.15) 28%, rgba(21, 32, 47, 0.62) 58%, rgba(21, 32, 47, 0.92) 78%, #15202f 100%)";

type PageHeroBackgroundProps = {
  className?: string;
};

/** Full-viewport hero atmosphere — matches home `HeroSection` reflect + blobs. */
export function PageHeroBackground({ className }: PageHeroBackgroundProps) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 z-0 h-screen overflow-hidden",
          className,
        )}
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.35) 88%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 45%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,0.35) 88%, transparent 100%)",
          }}
        >
          <Image
            src={topReflect}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] h-[120%] w-[120%] atmosphere-blob-tl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%] atmosphere-blob-br" />
        </div>
        <HeroBlurOverlay />
        <div
          className="absolute inset-0 z-[2]"
          style={{ background: HERO_BOTTOM_BLEND }}
        />
      </div>
      {/* Extra seam blend below the hero viewport */}
      <div
        className="pointer-events-none absolute inset-x-0 top-[100vh] z-0 h-40 -translate-y-full"
        style={{
          background:
            "linear-gradient(to bottom, #15202f 0%, rgba(21, 32, 47, 0.85) 35%, transparent 100%)",
        }}
        aria-hidden
      />
    </>
  );
}
