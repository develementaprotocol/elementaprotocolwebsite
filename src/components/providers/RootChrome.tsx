"use client";

import { useState, useEffect, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import Image from "next/image";
import topReflect from "@/assets/top-reflect.png";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { useFooterSuppressed } from "@/components/providers/FooterControl";
import { ScrollTriggerRefresh } from "@/components/providers/ScrollTriggerRefresh";
import Preloader from "@/components/ui/Preloader";
import { navigation, footer } from "@/data/homepage";

/** No global footer on these paths (plus error/404 via FooterControl). */
const PATHS_WITHOUT_FOOTER = ["/blockchain"] as const;

function pathHidesFooter(pathname: string | null) {
  if (!pathname) return false;
  return PATHS_WITHOUT_FOOTER.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

const SpaceBackground = dynamic(
  () =>
    import("@/components/3d/SpaceBackground").then((m) => ({
      default: m.SpaceBackground,
    })),
  { ssr: false },
);


export function RootChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const footerSuppressed = useFooterSuppressed();
  const hideFooter = footerSuppressed || pathHidesFooter(pathname);
  const isHome = pathname === "/";
  /** Routes that mount `ScrollRevealSection` → GSAP ScrollTrigger must refresh on nav. */
  const needsScrollTrigger =
    pathname === "/" ||
    pathname === "/wallet" ||
    (pathname?.startsWith("/wallet/") ?? false);

  return (
    <>
      {mounted && <SpaceBackground />}
      
      {/* Top Reflect Background */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-screen z-0 overflow-hidden" 
        style={{ 
          maskImage: "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)"
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={topReflect}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-90"
          />
        </div>
      </div>

      <div className="relative z-10" id="root-chrome-content">
        {isHome ? <Preloader /> : null}
        {needsScrollTrigger ? <ScrollTriggerRefresh /> : null}
        <ScrollToTop />
        <Navbar navigation={navigation} />
        {/* flex column so footer sits at the bottom of the viewport when page content is short */}
        <div className="flex min-h-dvh flex-col">
          <main className="flex w-full min-h-0 flex-1 flex-col">{children}</main>
          {!hideFooter ? (
            <SiteFooter className="mt-auto shrink-0" footer={footer} />
          ) : null}
        </div>
      </div>
    </>
  );
}
