import type { ReactNode } from "react";
import { PageHeroBackground } from "@/components/ui/PageHeroBackground";
import { cn } from "@/utils/cn";

/** Page chrome — top offset matches navbar; 100px bottom gap below the container. */
const legalPageVars =
  "[--legal-reader-top:6rem] [--legal-reader-bottom:100px] md:[--legal-reader-top:9rem] xl:[--legal-reader-top:9.5rem]";

/** Fixed 500px scroll container height. */
const legalShellHeightClass = "h-[1000px] max-h-[1100px]";

const mainShellClass =
  "flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#1b3144]/80 px-5 py-8 backdrop-blur-xl md:px-6";

type LegalPageLayoutProps = {
  title: string;
  titleAccent?: string;
  subtitle: string;
  lastUpdated?: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  titleAccent,
  subtitle,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div
      className={cn(
        "relative overflow-x-clip bg-transparent pt-[calc(var(--legal-reader-top)+env(safe-area-inset-top,0px))] pb-[calc(var(--legal-reader-bottom)+env(safe-area-inset-bottom,0px))]",
        legalPageVars,
      )}
    >
      <PageHeroBackground />

      <div className="container-standard relative z-10 w-full min-w-0">
        <article className="w-full min-w-0 text-center">
            <header className="shrink-0 pb-6 text-center md:pb-8">
              <h1 className="mx-auto max-w-3xl font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-tight tracking-normal text-white">
                {title}
                {titleAccent ? (
                  <>
                    {" "}
                    <span className="text-[var(--btn-primary-bg)]">
                      {titleAccent}
                    </span>
                  </>
                ) : null}
              </h1>
              <p className="mx-auto mt-5 max-w-3xl font-body text-base font-normal leading-relaxed text-[#c7d6e0] md:text-lg">
                {subtitle}
              </p>
              {lastUpdated ? (
                <p className="mt-4 font-body text-sm font-normal leading-relaxed text-white/58">
                  Last updated: {lastUpdated}
                </p>
              ) : null}
            </header>

            <div
              className={cn(
                "mt-7 min-h-0 overflow-hidden text-left md:mt-8",
                legalShellHeightClass,
              )}
            >
              <div className={mainShellClass}>
                <div className="doc-scroll h-full min-h-0 overflow-y-auto">
                  <div className="flex flex-col gap-7 md:gap-8">{children}</div>
                </div>
              </div>
            </div>
          </article>
      </div>
    </div>
  );
}
