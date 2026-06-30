import { HeroBlurOverlay } from "@/components/ui/HeroBlurOverlay";
import { cn } from "@/utils/cn";

type PageHeroBackgroundProps = {
  className?: string;
};

/** Shared hero atmosphere layered over the global RootChrome background. */
export function PageHeroBackground({ className }: PageHeroBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      <div className="absolute top-[-10%] left-[-10%] h-[120%] w-[120%]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[80%] w-[80%]" />
      <HeroBlurOverlay />
    </div>
  );
}
