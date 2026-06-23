"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import topReflect from "@/assets/top-reflect.png";
import { DocsArticleBody } from "@/components/docs/DocsArticleBody";
import { cn } from "@/utils/cn";

export type DocNavGroup = {
  group: string;
  items: readonly { id: string; label: string; href: string }[];
};

export type DocTocItem = { id: string; label: string };

type Props = {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  breadcrumb?: { label: string; href: string }[];
  navGroups: readonly DocNavGroup[];
  tocItems: readonly DocTocItem[];
  /** When set, one section is shown at a time (docs + legal). */
  contentMap?: Record<string, React.ReactNode>;
  /** Docs: filter sections. Legal pages use `false`. */
  enableNavSearch?: boolean;
};

/** Fixed panel: `w-[260px]` matches grid column — avoid `w-full` on `fixed` (resolves to viewport). */
const sidebarPanelClass =
  "sticky top-32 z-20 w-[260px] overflow-hidden rounded-[16px] border border-white/10 bg-[#15202f]/82 p-4 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl " +
  "left-[max(1.25rem,calc((100vw-min(100vw,1440px))/2+1.25rem))] " +
  "sm:left-[max(1.5rem,calc((100vw-min(100vw,1440px))/2+1.5rem))] " +
  "md:left-[max(2rem,calc((100vw-min(100vw,1440px))/2+2rem))] " +
  "lg:left-[max(3rem,calc((100vw-min(100vw,1440px))/2+3rem))]";

function Sidebar({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div role="complementary" className={cn(className)} {...rest}>
      {children}
    </div>
  );
}

function normalizeSearchInput(v: string) {
  // Keep free-text search broad while ignoring calculator-like operators.
  return v.replace(/[=+\-*/^%()]/g, "").replace(/\s+/g, " ").trimStart();
}

export function DocReaderLayout({
  title,
  subtitle,
  lastUpdated,
  breadcrumb = [{ label: "Home", href: "/" }],
  navGroups,
  tocItems,
  contentMap,
  enableNavSearch = true,
}: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeId, setActiveId] = useState<string>(() => tocItems[0]?.id ?? "");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (!navOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [navOpen]);

  const filteredNavGroups = useMemo(() => {
    if (!enableNavSearch || !searchQuery.trim()) return [...navGroups];
    const q = normalizeSearchInput(searchQuery).toLowerCase().trim();
    return navGroups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (item) =>
            item.label.toLowerCase().includes(q) || item.id.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [navGroups, searchQuery, enableNavSearch]);

  useEffect(() => {
    const flat = filteredNavGroups.flatMap((g) => g.items);
    if (flat.length === 0) return;
    if (!flat.some((i) => i.id === activeId)) {
      setActiveId(flat[0].id);
    }
  }, [filteredNavGroups, activeId]);

  const selectSection = (id: string) => {
    setActiveId(id);
    setNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** TOC-style rail (border-left + compact rows) — same visual language as the old right sidebar. */
  const SectionsRail = () => (
    <nav aria-label="Page sections">
      {filteredNavGroups.length === 0 ? (
        <p className="py-6 text-center font-body text-sm text-white/45">No sections match.</p>
      ) : (
        filteredNavGroups.map((g) => (
          <div key={g.group} className="mb-6 last:mb-0">
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-[0.16em] text-[var(--btn-primary-bg)] text-left">
              {g.group}
            </p>
            <ul className="flex flex-col gap-1 border-l border-white/10">
              {g.items.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => selectSection(item.id)}
                    className={cn(
                      "block w-full border-l-2 border-transparent py-1.5 pl-3 text-left font-body text-[14px] font-normal leading-snug transition-colors",
                      activeId === item.id
                        ? "border-[var(--btn-primary-bg)] text-[color-mix(in_srgb,var(--btn-primary-bg)_82%,white)]"
                        : "text-white hover:text-white",
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </nav>
  );

  // Main search inlined below

  /** Docs hub: keep a comfortable reading pane. Legal (contentMap): height follows section content only. */
  const readingPaneMinHeight = !contentMap;

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-x-clip pb-12 pt-[calc(5.5rem+env(safe-area-inset-top,0px))] md:pb-16 md:pt-32">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Image
          src={topReflect}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 overflow-hidden">
          <div className="atmosphere-blob-tl absolute -left-[20%] top-0 h-[70%] w-[70%] opacity-70" />
        </div>
      </div>

      <div className="container-standard relative z-10">
        {/* Breadcrumb removed as requested */}

        {/* Mobile: sections drawer trigger only */}
        <div className="mb-5 flex justify-start md:hidden">
          <button
            type="button"
            onClick={() => setNavOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2.5 text-xs font-bold uppercase tracking-widest text-white/90 backdrop-blur-md transition-transform active:scale-95"
            aria-expanded={navOpen}
            aria-label="Toggle sections menu"
          >
            <Menu className="h-4 w-4" aria-hidden />
            More
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:items-start md:gap-10 lg:gap-12">
          {/* Reserve column width; fixed panel overlays this track at full width */}
          <Sidebar
            aria-label="Section navigation"
            className="sticky top-[100px] right-0 pointer-events-none hidden min-h-0 w-full min-w-0 md:block md:w-full md:max-w-[260px]"
          >
            <div className={cn(sidebarPanelClass, "pointer-events-auto")}>
              <p className="mb-8 text-left font-display text-[24px] font-semibold text-[var(--btn-primary-bg)]">
                Documentation:
              </p>
              <SectionsRail />
            </div>
          </Sidebar>

          <article className="min-w-0">
            {/* Search bar removed as requested */}

            <div
              className={cn(
                "rounded-[20px] border border-white/[0.08] bg-[#1b3144]/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8 md:p-10",
                readingPaneMinHeight && "min-h-[min(60vh,720px)]",
              )}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {contentMap ? (
                    contentMap[activeId] ?? (
                      <p className="text-sm text-white">
                        This section could not be loaded. Choose another section from the list.
                      </p>
                    )
                  ) : (
                    <DocsArticleBody activeId={activeId} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </article>
        </div>
      </div>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="fixed inset-0 z-[120] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              aria-label="Close menu"
              onClick={() => setNavOpen(false)}
            />
            <motion.div
              role="complementary"
              aria-label="Section navigation"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.85 }}
              className="absolute left-0 top-0 flex h-full w-[min(100vw-1rem,380px)] flex-col border-r border-white/10 bg-[#15202f]/97 shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
              style={{ paddingTop: "65px" }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 pb-3 pt-5">
                <p className="text-left font-display text-[20px] font-semibold text-[var(--btn-primary-bg)]">
                  Documentation
                </p>
                <button
                  type="button"
                  onClick={() => setNavOpen(false)}
                  className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/80 transition-colors hover:text-white active:opacity-80"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" strokeWidth={1.75} />
                </button>
              </div>
              <div
                className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-4 pt-4"
                style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
              >
                <SectionsRail />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
