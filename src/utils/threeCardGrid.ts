import { cn } from "@/utils/cn";

/** Grid for exactly three cards: 1 col → 2 col (tablet) → 3 col (desktop). */
export function threeCardGridClass(className?: string) {
  return cn(
    "grid w-full min-w-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3",
    className,
  );
}

/**
 * When three cards sit in a 2-column tablet grid, the third spans full width
 * with centered content until the xl three-column layout kicks in.
 */
export function threeCardItemClass(index: number, total: number) {
  if (total !== 3 || index !== 2) return "";
  return cn(
    "max-xl:col-span-full max-xl:items-center max-xl:text-center",
    "max-xl:[&>div:first-child]:mx-auto",
    "max-xl:[&>div:first-child]:justify-center",
  );
}
