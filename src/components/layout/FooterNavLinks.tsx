"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";
import type { FooterContent } from "@/data/homepage";

function isInternalAppPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

function isFooterLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const footerNavLinkBase =
  "font-display text-[12px] font-bold uppercase leading-none tracking-[0.2em] transition";

export function FooterNavLinks({ links }: { links: FooterContent["links"] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
      {links.map((l) => {
        const active = isInternalAppPath(l.href) && isFooterLinkActive(pathname, l.href);
        const className = cn(
          footerNavLinkBase,
          active
            ? "text-[#24bace] opacity-100"
            : "text-[#FFFFFF] opacity-60 hover:text-[#24bace] hover:opacity-100",
        );

        return isInternalAppPath(l.href) ? (
          <Link key={l.label} href={l.href} prefetch className={className}>
            {l.label}
          </Link>
        ) : (
          <a key={l.label} href={l.href} className={className}>
            {l.label}
          </a>
        );
      })}
    </nav>
  );
}
