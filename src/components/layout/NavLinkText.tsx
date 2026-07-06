"use client";

import dynamic from "next/dynamic";
import { useIsDesktopNav } from "@/hooks/useMediaQuery";
import { NavbarPlainText } from "@/components/layout/NavbarAnimatedText";

const NavbarAnimatedTextDesktop = dynamic(
  () =>
    import("@/components/layout/NavbarAnimatedText").then((m) => ({
      default: m.NavbarAnimatedTextDesktop,
    })),
  { ssr: false, loading: () => null },
);

export function NavLinkText({
  text,
  active,
  isActiveRoute,
}: {
  text: string;
  active?: boolean;
  isActiveRoute?: boolean;
}) {
  const isDesktopNav = useIsDesktopNav();
  if (!isDesktopNav) {
    return <NavbarPlainText text={text} isActiveRoute={isActiveRoute} />;
  }
  return (
    <NavbarAnimatedTextDesktop
      text={text}
      active={active}
      isActiveRoute={isActiveRoute}
    />
  );
}
