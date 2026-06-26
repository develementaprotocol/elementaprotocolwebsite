"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";
import {
  Menu,
  X,
  Blocks,
  FileText,
  Wallet,
  ArrowRight,
  Star,
  Info,
  HelpCircle,
  ChevronDown,
  Globe,
  Shield,
  Zap,
  Home,
} from "lucide-react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import type { NavigationContent } from "@/data/homepage";
import { footer } from "@/data/homepage";
import logoSrc from "@/assets/logo.svg";
import twitterIcon from "@/assets/twitter.svg";
import telegramLogoAsset from "@/assets/telegram-logo.svg";

// Removed telegramLogo

function TelegramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 19 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" />
    </svg>
  );
}

const productIcons = {
  blockchains: Blocks,
  "Elementa-wallet": Wallet,
};

function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="6.66667"
        cy="17.5"
        r="0.833"
        stroke="#F5F5F5"
        strokeWidth="1.67"
      />
      <circle
        cx="15.8333"
        cy="17.5"
        r="0.833"
        stroke="#F5F5F5"
        strokeWidth="1.67"
      />
      <path
        d="M1.71 1.71H4.38L6.38 12.43C6.46 12.84 6.68 13.2 7.01 13.46C7.34 13.72 7.75 13.86 8.17 13.85H15.43C15.85 13.86 16.26 13.72 16.59 13.46C16.92 13.2 17.14 12.84 17.22 12.43L18.29 6.71H5.04"
        stroke="#F5F5F5"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon({
  open,
  className = "",
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial={false}
      animate={{
        rotate: open ? 180 : 0,
        scale: open ? 1.08 : 1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={`shrink-0 ${className}`}
    >
      <path
        d="M7 10L12 15L17 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

function AnimatedText({ text, active, isActiveRoute }: { text: string; active?: boolean; isActiveRoute?: boolean }) {
  const chars1Ref = useRef<(HTMLSpanElement | null)[]>([]);
  const chars2Ref = useRef<(HTMLSpanElement | null)[]>([]);

  const textArray = typeof text === "string" ? text.split("") : [];

  const animateIn = useCallback(() => {
    gsap.killTweensOf(chars1Ref.current);
    gsap.killTweensOf(chars2Ref.current);
    const depth = -8;
    const transformOrigin = `50% 50% ${depth}px`;

    gsap.fromTo(
      chars1Ref.current,
      { rotationX: 0, opacity: 1 },
      {
        rotationX: 90,
        opacity: 0,
        duration: 0.4,
        stagger: 0.02,
        ease: "expo.out",
        transformOrigin,
      },
    );

    gsap.fromTo(
      chars2Ref.current,
      { rotationX: -90, opacity: 0 },
      {
        rotationX: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "expo.out",
        transformOrigin,
      },
    );
  }, []);

  const animateOut = useCallback(() => {
    gsap.killTweensOf(chars1Ref.current);
    gsap.killTweensOf(chars2Ref.current);
    const depth = -8;
    const transformOrigin = `50% 50% ${depth}px`;

    gsap.to(chars1Ref.current, {
      rotationX: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.02,
      ease: "expo.out",
      transformOrigin,
    });
    gsap.to(chars2Ref.current, {
      rotationX: -90,
      opacity: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "expo.out",
      transformOrigin,
    });
  }, []);

  useEffect(() => {
    if (active) {
      animateIn();
    } else {
      animateOut();
    }
  }, [active, animateIn, animateOut]);

  return (
    <span
      className="relative inline-flex group-hover:text-transparent transition-colors duration-150"
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      style={{ perspective: "800px", transformStyle: "preserve-3d" }}
    >
      {/* Front text */}
      <span
        className={`flex transform-gpu ${isActiveRoute ? 'text-[#24bace]' : 'text-[#F5F5F5] group-hover:text-white'} transition-colors`}
        aria-hidden="true"
        style={{ transformStyle: "preserve-3d" }}
      >
        {textArray.map((char, i) => (
          <span
            key={`front-${i}`}
            ref={(el) => {
              chars1Ref.current[i] = el;
            }}
            style={{
              display: "inline-block",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              whiteSpace: "pre",
            }}
          >
            {char}
          </span>
        ))}
      </span>
      {/* Back text (rotates into view) */}
      <span
        className="absolute left-0 top-0 flex transform-gpu text-[#24bace]"
        aria-hidden="true"
        style={{ transformStyle: "preserve-3d" }}
      >
        {textArray.map((char, i) => (
          <span
            key={`bottom-${i}`}
            ref={(el) => {
              chars2Ref.current[i] = el;
            }}
            style={{
              display: "inline-block",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              transform: "rotateX(-90deg)",
              whiteSpace: "pre",
            }}
          >
            {char}
          </span>
        ))}
      </span>

      <span className="sr-only">{text}</span>
    </span>
  );
}

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface ProductItem {
  id: string;
  label: string;
  description: string;
  href: string;
}

interface ProductCardProps {
  item: ProductItem;
  onClose: () => void;
  key?: React.Key;
}

function ProductCard({ item, onClose, isActive }: ProductCardProps & { isActive?: boolean }) {
  const Icon = productIcons[item.id] ?? Blocks;
  const className = cn(
    "group flex cursor-pointer items-start gap-4 rounded-[16px] p-3 transition-all duration-300 relative overflow-hidden",
    isActive ? "bg-[#24bace]/20 border border-[#24bace]/30 shadow-[0_0_20px_rgba(36,186,206,0.15)]" : "hover:bg-[#24bace]/10"
  );
  const inner = (
    <>
      {/* Subtle hover background effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-[#24bace]/0 via-[#24bace]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        isActive && "opacity-100"
      )} />
      
      <div className={cn(
        "relative mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-white/10 bg-white/5 transition-all duration-300 group-hover:bg-[#24bace]/20 group-hover:border-[#24bace]/30 group-hover:shadow-[0_0_20px_rgba(36,186,206,0.25)]",
        isActive && "bg-[#24bace]/25 border-[#24bace]/40 shadow-[0_0_20px_rgba(36,186,206,0.3)]"
      )}>
        <Icon className={cn(
          "h-5 w-5 text-[#24bace] transition-all duration-300 group-hover:scale-110 group-hover:text-white",
          isActive && "text-white scale-110"
        )} strokeWidth={1.8} />
      </div>
      <div className="relative flex flex-1 flex-col gap-1">
        <span className={cn(
          "font-display text-[16px] font-semibold tracking-wide text-[#F5F5F5] transition-colors duration-300 group-hover:text-white",
          isActive && "text-white"
        )}>
          {item.label}
        </span>
        <p className={cn(
          "font-body text-[13px] leading-relaxed text-[#c7d6e0] transition-colors duration-300 group-hover:text-[#ffffff]",
          isActive && "text-[#ffffff]"
        )}>
          {item.description}
        </p>
      </div>
    </>
  );
  if (item.href.startsWith("/")) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className={className}
      >
        {inner}
      </Link>
    );
  }
  return (
    <a href={item.href} onClick={onClose} className={className}>
      {inner}
    </a>
  );
}

const iconComponents: Record<string, any> = {
  twitter: () => (
    <Image src={twitterIcon} alt="Twitter" width={20} height={20} />
  ),
  telegram: () => (
    <TelegramIcon className="h-5 w-5" />
  ),
};

export function Navbar({ navigation }: { navigation: NavigationContent }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeDropdownNow = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-8 lg:px-12 pt-3">
      <nav
        className={`mx-auto flex h-16 md:h-20 w-full items-center justify-between rounded-full border px-4 md:px-8 xl:px-12 transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-black/40 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "border-white/5 bg-black/10 backdrop-blur-xl"
        }`}
        aria-label="Main"
      >
        {/* Left — Logo + Wordmark */}
        <Link href="/" className="flex items-center">
          <img
            src={logoSrc.src}
            alt={navigation.logo.alt}
            className="h-[45px] md:h-[60px] w-auto object-contain"
          />
        </Link>

        {/* Center — Nav Links (Visible from XL) */}
        <div className="hidden xl:flex flex-1 justify-center">
          <div className="flex items-center gap-10 text-[#F5F5F5]">
            {navigation.links
              .filter((l) => l.id !== "contact")
              .map((link) =>
                link.children ? (
                  <div
                    key={link.id}
                    ref={activeDropdown === link.id ? dropdownRef : null}
                    className="relative"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={activeDropdown === link.id}
                      aria-haspopup="menu"
                      id={`trigger-${link.id}`}
                      className="group inline-flex items-center gap-1.5 font-display text-[16px] font-medium leading-6 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24bace]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-md"
                      onMouseEnter={() => setActiveDropdown(link.id)}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveDropdown((prev) =>
                          prev === link.id ? null : link.id,
                        );
                      }}
                    >
                      <AnimatedText
                        text={link.label}
                        active={activeDropdown === link.id}
                        isActiveRoute={activeDropdown === link.id}
                      />
                      <ChevronDownIcon
                        open={activeDropdown === link.id}
                        className={`h-[18px] w-[18px] transition-colors duration-300 ${
                          activeDropdown === link.id
                            ? "text-[#24bace] drop-shadow-[0_0_12px_rgba(36,186,206,0.45)]"
                            : "text-[#F5F5F5]/55 group-hover:text-[#24bace] group-hover:drop-shadow-[0_0_10px_rgba(36,186,206,0.35)]"
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.id && (
                        <motion.div
                          className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.12 }}
                        >
                          <motion.div
                            id={`menu-${link.id}`}
                            role="menu"
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{
                               type: "spring",
                               stiffness: 400,
                               damping: 30,
                            }}
                            className="relative overflow-hidden rounded-[16px] border border-white/10 bg-[#15202f]/95 p-3 shadow-[0_40px_80px_-12px_rgba(0,0,0,0.8)] backdrop-blur-3xl"
                          >
                            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#24bace]/10 blur-3xl" />
                            <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#24bace]/10 blur-3xl" />
                            <div className="relative z-10 flex flex-col gap-1">
                              {link.children.map((c) => (
                                <ProductCard
                                  key={c.id}
                                  item={c}
                                  onClose={closeDropdownNow}
                                  isActive={pathname === c.href}
                                />
                              ))}
                            </div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : link.href.startsWith("/") ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="group flex font-display text-[16px] font-medium leading-6 transition-colors"
                  >
                    <AnimatedText text={link.label} isActiveRoute={pathname === link.href} />
                  </Link>
                ) : (
                  <a
                    key={link.id}
                    href={link.href}
                    className="group flex font-display text-[16px] font-medium leading-6 transition-colors"
                  >
                    <AnimatedText text={link.label} />
                  </a>
                ),
              )}
          </div>
        </div>

        {/* Right — Icons + CTA (Visible from XL) */}
        <div className="hidden items-center gap-7 xl:flex">
          <div className="flex items-center gap-5">
            {navigation.iconActions.map((action) => {
              if (action.id === 'telegram') {
                return (
                  <a
                    key={action.id}
                    href={action.href}
                    className="inline-flex h-5 w-5 items-center justify-center text-[#F5F5F5] transition-colors hover:text-Elementa-accent"
                    aria-label={action.label}
                  >
                    <TelegramIcon className="h-5 w-5" />
                  </a>
                )
              }
              const IconComp = iconComponents[action.asset];
              return (
                <a
                  key={action.id}
                  href={action.href}
                  className="inline-flex h-5 w-5 items-center justify-center text-[#F5F5F5] transition-colors hover:text-Elementa-accent"
                  aria-label={action.label}
                >
                  {IconComp && <IconComp />}
                </a>
              );
            })}
          </div>
          {navigation.cta.href.startsWith("/") ? (
            <Link
              href={navigation.cta.href}
              className="btn-primary h-[41px] min-w-[132px] px-6 font-display text-[16px] leading-6"
            >
              {navigation.cta.label}
            </Link>
          ) : (
            <a
              href={navigation.cta.href}
              className="btn-primary h-[41px] min-w-[132px] px-6 font-display text-[16px] leading-6"
            >
              {navigation.cta.label}
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <div className="flex xl:hidden">
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-[#F5F5F5] active:scale-90 transition-transform"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>
      {/* Premium Mobile Side Drawer */}
      <AnimatePresence mode="wait">
        {mobileOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md xl:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Side Drawer — mirrors header nav treatment (glass bar + structure) */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.85 }}
              className="fixed left-0 top-0 z-[70] flex h-full w-[min(100vw-1rem,380px)] flex-col border-r border-white/10 bg-[#15202f]/97 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.55)] xl:hidden"
              style={{ paddingTop: "env(safe-area-inset-top)" }}
            >
              {/* Drawer Content */}
              <div className="relative flex h-full flex-col overflow-hidden">
                {/* Decorative Background Glows */}
                <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[#24bace]/10 blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#24bace]/10 blur-[80px] pointer-events-none" />
                
                <MobileDrawerContent
                  navigation={navigation}
                  onClose={() => setMobileOpen(false)}
                  pathname={pathname}
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileDrawerContent({
  navigation,
  onClose,
  pathname,
}: {
  navigation: NavigationContent;
  onClose: () => void;
  pathname: string;
}) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  
  const productsLink = navigation.links.find((l) => l.children);
  const productsChildren = productsLink?.children ?? [];
  
  const blockchainHref = productsChildren.find((c) => c.id === "blockchains")?.href ?? "/blockchain";
  const walletHref = productsChildren.find((c) => c.id === "Elementa-wallet")?.href ?? "/wallet";
  
  const otherLinks = navigation.links.filter((l) => !l.children);

  return (
    <div className="relative z-10 flex h-full min-h-0 flex-col">
      {/* Header — logo & close */}
      <div className="flex shrink-0 items-center justify-between px-5 pb-3 pt-5 md:px-5">
        <Link href="/" onClick={onClose} className="flex min-w-0 items-center gap-2">
          <img
            src={logoSrc.src}
            alt={navigation.logo.alt}
            className="h-10 w-auto object-contain"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/80 transition-colors hover:text-white"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Scrollable nav */}
      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-4 pt-2">
        <p className="mb-3 px-1 text-[10px] font-black uppercase tracking-[0.28em] text-white/40">
          Navigate
        </p>
        <nav className="flex flex-col gap-2" aria-label="Primary">

          {/* Products Dropdown */}
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className={cn(
                "flex w-full items-center justify-between rounded-[16px] border px-4 py-3 font-display text-[16px] font-bold transition-all",
                pathname === blockchainHref || pathname === walletHref
                  ? "border-[#24bace]/40 bg-[#24bace]/12 text-white"
                  : "border-white/10 bg-white/[0.04] text-white/90 hover:bg-white/[0.07]"
              )}
            >
              <div className="flex items-center gap-3">
                <Blocks className="h-5 w-5 text-[#24bace]" strokeWidth={1.65} />
                Products
              </div>
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", isProductsOpen && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-[#24bace]/20 pl-4 py-2">
                    <Link
                      href={blockchainHref}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-[15px] font-medium transition-colors",
                        pathname === blockchainHref ? "bg-[#24bace]/15 text-[#24bace]" : "text-white/70 hover:text-white"
                      )}
                    >
                      Blockchain
                    </Link>
                    <Link
                      href={walletHref}
                      onClick={onClose}
                      className={cn(
                        "flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-[15px] font-medium transition-colors",
                        pathname === walletHref ? "bg-[#24bace]/15 text-[#24bace]" : "text-white/70 hover:text-white"
                      )}
                    >
                      Wallet
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}
          {otherLinks.map((link) => {
            const active = pathname === link.href;
            const IconComp = link.id === "about" ? Info : HelpCircle;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-[16px] border px-4 py-3 font-display text-[16px] font-bold transition-all",
                  active
                    ? "border-[#24bace]/40 bg-[#24bace]/12 text-white"
                    : "border-white/10 bg-white/[0.04] text-white/90 hover:bg-white/[0.07]"
                )}
              >
                <IconComp className="h-5 w-5 text-[#24bace]" strokeWidth={1.65} />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Social above Get in touch — sticky footer */}
      <div
        className="shrink-0 border-t border-white/10 bg-[#15202f]/90 px-4 pt-4 backdrop-blur-md md:px-5"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <p className="mb-3 text-center text-[10px] font-black uppercase tracking-[0.28em] text-white/40">
          Community
        </p>
        <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
          {(footer.social ?? []).map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/70 transition-all hover:border-[#24bace]/40 hover:bg-[#24bace]/10 hover:text-white"
            >
              {s.id === "twitter" && (
                <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              )}
              {s.id === "discord" && (
                <svg className="h-[18px] w-[18px] fill-current" viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
                </svg>
              )}
              {s.id === "telegram" && (
                <TelegramIcon className="h-[18px] w-[18px] text-current" />
              )}
            </a>
          ))}
        </div>

        <Link
          href={navigation.cta.href}
          onClick={onClose}
          className="btn-primary flex h-14 w-full items-center justify-center rounded-[16px] font-display text-[14px] font-bold uppercase tracking-widest"
        >
          {navigation.cta.label}
        </Link>
      </div>
    </div>
  );
}
