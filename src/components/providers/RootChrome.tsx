"use client";

import { type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { LazySpaceBackground } from "@/components/3d/LazySpaceBackground";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { useFooterSuppressed } from "@/components/providers/FooterControl";
import { MobileHeroAtmosphere } from "@/components/ui/MobileHeroAtmosphere";
import { DesktopHeroReflect } from "@/components/ui/DesktopHeroReflect";
import { navigation, footer } from "@/data/homepage";

const PATHS_WITHOUT_FOOTER = [] as const;

function pathHidesFooter(pathname: string | null) {
  if (!pathname) return false;
  return PATHS_WITHOUT_FOOTER.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
}

export function RootChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const footerSuppressed = useFooterSuppressed();
  const hideFooter = footerSuppressed || pathHidesFooter(pathname);
  const isHome = pathname === "/";

  return (
    <>
      <LazySpaceBackground />

      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-screen z-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
        }}
      >
        <MobileHeroAtmosphere
          opacityClass="opacity-90"
          priorityLoad={isHome}
        />
        <DesktopHeroReflect
          opacityClass="opacity-90"
          priorityLoad={isHome}
        />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col" id="root-chrome-content">
        <ScrollToTop />
        <Navbar navigation={navigation} />
        <main className="flex w-full min-h-0 flex-1 flex-col">{children}</main>
        {!hideFooter ? (
          <SiteFooter className="mt-auto shrink-0" footer={footer} />
        ) : null}
      </div>
    </>
  );
}
