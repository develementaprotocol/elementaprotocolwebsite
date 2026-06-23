import React from "react";
import footerElementaLogo from "@/assets/footer-Elementa-logo.png";
import logoSrc from "@/assets/footer-logo.svg";

import twitterIcon from "@/assets/twitter.svg";
import telegramLogoAsset from "@/assets/telegram-logo.svg";
import { ArrowUpRight, Send, Disc } from "lucide-react";
import Link from "next/link";
import type { FooterContent } from "@/data/homepage";
import { cn } from "@/utils/cn";

const socialIcons = {
  twitter: twitterIcon,
  discord: Disc,
  telegram: Send,
};

const footerNavLinkClass =
  "font-display text-[12px] font-bold uppercase leading-none text-[#FFFFFF] transition hover:text-[#24bace] tracking-[0.2em] opacity-60 hover:opacity-100";

function isInternalAppPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function SiteFooter({
  footer,
  className,
}: {
  footer: FooterContent;
  className?: string;
}) {
  const copyright =
    footer.copyrightLine?.replace("2024", String(new Date().getFullYear())) ??
    `© ${new Date().getFullYear()} Elementa PROTOCOL. ALL RIGHTS RESERVED.`;

  return (
    <footer
      className={cn(
        "relative z-20 w-full overflow-hidden rounded-t-[16px] border-t border-white/5 bg-[#081421] pb-0 pt-10 md:pt-16 xl:pt-20",
        className,
      )}
    >
      <div className="container-standard relative z-10">
        <div className="section-inner flex flex-col gap-2">
          {/* Middle Row: Brand/Copyright, Links, Socials */}
          <div className="order-2 flex flex-col items-center gap-10 xl:flex-row xl:justify-between xl:items-center w-full px-2">
            {/* Brand & Copyright */}
            <div className="flex flex-col items-center xl:items-start gap-2">
              <Link href="/" className="group">
                <img
                  src={logoSrc.src}
                  alt=""
                  className="h-[18px] object-contain"
                />
              </Link>
              <p className="font-display text-[10px] font-medium uppercase leading-relaxed tracking-[2px] text-[#FFFFFF] text-center xl:text-left opacity-70">
                {copyright}
              </p>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {footer.links.map((l) =>
                isInternalAppPath(l.href) ? (
                  <Link
                    key={l.label}
                    href={l.href}
                    prefetch
                    className={footerNavLinkClass}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    className={footerNavLinkClass}
                  >
                    {l.label}
                  </a>
                ),
              )}
            </nav>
            {/* Social Icons */}
            <div className="flex gap-4 justify-center xl:justify-end">
              {(footer.social ?? []).map((s) => {
                let IconPath: React.ReactNode = null;
                if (s.id === "twitter") {
                  IconPath = (
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  );
                } else if (s.id === "discord") {
                  IconPath = (
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
                  );
                } else if (s.id === "telegram") {
                  return (
                    <a
                      key={s.id}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-[#24bace]/10 hover:border-[#24bace]/20 group"
                    >
                      <svg
                        className="h-5 w-5 fill-white group-hover:fill-[#24bace] transition-colors"
                        viewBox="0 0 19 16"
                      >
                        <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" />
                      </svg>
                    </a>
                  );
                }

                if (!IconPath) return null;

                return (
                  <a
                    key={s.id}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:bg-[#24bace]/10 hover:border-[#24bace]/20 group"
                  >
                    <svg
                      className="h-5 w-5 fill-white group-hover:fill-[#24bace] transition-colors"
                      viewBox="0 0 24 24"
                    >
                      {IconPath}
                    </svg>
                  </a>
                );
              })}
            </div>
          </div>
          {/* Bottom Row: Large Wordmark Logo + Get in Touch */}
          <div className="order-3 relative w-full mt-12 md:mt-20">
            <div className="flex flex-col items-center xl:items-end w-full">              
              {/* Large Wordmark Logo with fade mask */}
              <div className="w-full mt-[-20px] md:mt-[-40px] xl:mt-[-60px]">
                <img
                  src={footerElementaLogo.src}
                  alt="Elementa"
                  className="w-full h-auto object-contain select-none opacity-90"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-[#24bace]/15 to-transparent pointer-events-none" />
    </footer>
  );
}
