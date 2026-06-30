"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
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

/** Main documentation content box — fixed 780px with internal scroll. */
const docPanelHeightClass = "h-[780px] max-h-[780px]";

const docScrollHeightClass = "min-h-0 flex-1";

/** Sidebar should fit its nav content, then scroll only when the nav is taller than the viewport. */
const sidebarPanelHeightClass =
  "md:max-h-[calc(100dvh-var(--docs-reader-chrome))]";

const sidebarScrollHeightClass =
  "md:max-h-[calc(100dvh-var(--docs-reader-chrome)-5.75rem)]";

const sidebarShellClass =
  "flex w-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#15202f]/82 p-5 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl";

const mainShellClass =
  "flex w-full flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#1b3144]/80 px-5 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:px-6";

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
  return v
    .replace(/[=+\-*/^%()]/g, "")
    .replace(/\s+/g, " ")
    .trimStart();
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
  const [openGroupNames, setOpenGroupNames] = useState<Set<string>>(
    () => new Set(navGroups.slice(0, 1).map((group) => group.group)),
  );
  const mainScrollRef = useRef<HTMLDivElement>(null);
  const sidebarScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionLabel = tocItems.find((item) => item.id === activeId)?.label;
    document.title = sectionLabel
      ? `${sectionLabel} | Elementa`
      : `${title} | Elementa`;
  }, [activeId, title, tocItems]);

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
            item.label.toLowerCase().includes(q) ||
            item.id.toLowerCase().includes(q),
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

  useEffect(() => {
    const activeGroup = filteredNavGroups.find((group) =>
      group.items.some((item) => item.id === activeId),
    );
    if (!activeGroup) return;

    setOpenGroupNames((current) => {
      if (current.has(activeGroup.group)) return current;
      const next = new Set(current);
      next.add(activeGroup.group);
      return next;
    });
  }, [activeId, filteredNavGroups]);

  useEffect(() => {
    if (!searchQuery.trim()) return;
    setOpenGroupNames(new Set(filteredNavGroups.map((group) => group.group)));
  }, [filteredNavGroups, searchQuery]);

  const selectSection = (id: string) => {
    setActiveId(id);
    setNavOpen(false);
    mainScrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    sidebarScrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleGroup = (groupName: string) => {
    setOpenGroupNames((current) => {
      const next = new Set(current);
      if (next.has(groupName)) {
        next.delete(groupName);
      } else {
        next.add(groupName);
      }
      return next;
    });
  };

  /** Cypress-style grouped rail with expandable headings and compact nested rows. */
  const SectionsRail = () => (
    <nav aria-label="Page sections">
      {filteredNavGroups.length === 0 ? (
        <p className="py-6 text-center font-body text-sm text-white/45">
          No sections match.
        </p>
      ) : (
        filteredNavGroups.map((g) => {
          const isOpen = openGroupNames.has(g.group);
          const isActiveGroup = g.items.some((item) => item.id === activeId);

          return (
            <div key={g.group} className="mb-4 last:mb-0">
              <button
                type="button"
                onClick={() => toggleGroup(g.group)}
                aria-expanded={isOpen}
                className={cn(
                  "group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left font-display text-[13px] font-bold uppercase tracking-[0.14em] transition-[background-color,color,box-shadow]",
                  isActiveGroup || isOpen
                    ? "bg-[#24bace]/10 text-[color-mix(in_srgb,var(--btn-primary-bg)_86%,white)] shadow-[inset_0_0_0_1px_rgba(36,186,206,0.16)]"
                    : "text-white/62 hover:bg-white/[0.045] hover:text-white",
                )}
              >
                <span className="min-w-0 truncate">{g.group}</span>
                <ChevronRight
                  className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:text-[var(--btn-primary-bg)]",
                    isOpen && "rotate-90",
                  )}
                  strokeWidth={1.9}
                  aria-hidden
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="ml-4 mt-2 flex flex-col gap-1.5 overflow-hidden border-l border-white/10 pl-3"
                  >
                    {g.items.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => selectSection(item.id)}
                          className={cn(
                            "block w-full rounded-md px-2 py-2 text-left font-body text-[14px] font-medium leading-snug transition-[background-color,color,box-shadow]",
                            activeId === item.id
                              ? "bg-[#24bace]/12 text-[color-mix(in_srgb,var(--btn-primary-bg)_82%,white)] shadow-[inset_2px_0_0_var(--btn-primary-bg)]"
                              : "text-white/78 hover:bg-white/[0.04] hover:text-white",
                          )}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })
      )}
    </nav>
  );

  // Main reading pane uses matched height with sidebar on desktop (see doc-panel-height).

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-x-clip bg-[var(--color-Elementa-bg)] pb-12 pt-[calc(var(--docs-reader-top)+env(safe-area-inset-top,0px))] [--docs-reader-chrome:calc(var(--docs-reader-top)+1.5rem)] [--docs-reader-top:6rem] md:pb-16 md:[--docs-reader-top:9rem] xl:[--docs-reader-top:9.5rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[620px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_58%,transparent_100%)]">
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

        <div className="">
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

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:items-stretch md:gap-10 lg:gap-12">
          <Sidebar
            aria-label="Section navigation"
            className={cn(
              "hidden min-w-0 self-start md:flex md:flex-col",
              sidebarPanelHeightClass,
            )}
          >
            <div className={cn(sidebarShellClass, "min-h-0", sidebarPanelHeightClass)}>
              <p className="mb-8 shrink-0 text-left font-display text-[24px] font-semibold text-[var(--btn-primary-bg)]">
                {title}:
              </p>
              <div
                ref={sidebarScrollRef}
                className={cn("doc-scroll min-h-0 flex-1 pr-1", sidebarScrollHeightClass)}
              >
                <SectionsRail />
              </div>
            </div>
          </Sidebar>

          <article className={cn("flex min-w-0 self-start flex-col", docPanelHeightClass)}>
            <div className={cn(mainShellClass, "h-full min-h-0")}>
              <div
                ref={mainScrollRef}
                className={cn("doc-scroll min-h-0", docScrollHeightClass)}
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
                      (contentMap[activeId] ?? (
                        <p className="text-sm text-white">
                          This section could not be loaded. Choose another
                          section from the list.
                        </p>
                      ))
                    ) : (
                      <DocsArticleBody activeId={activeId} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </article>
        </div>
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
              transition={{
                type: "spring",
                damping: 32,
                stiffness: 320,
                mass: 0.85,
              }}
              className="absolute left-0 top-0 flex h-full w-[min(100vw-1rem,380px)] flex-col border-r border-white/10 bg-[#15202f]/97 shadow-[0_0_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
              style={{ paddingTop: "65px" }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 pb-3 pt-5">
                <p className="text-left font-display text-[20px] font-semibold text-[var(--btn-primary-bg)]">
                  {title}
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
                className="doc-scroll min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 pb-4 pt-4"
                style={{
                  paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
                }}
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
