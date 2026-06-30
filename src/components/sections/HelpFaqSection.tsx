"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import { formInputClass } from "@/components/ui/formInputClass";
import { cn } from "@/utils/cn";


export function HelpFaqSection({ help, faq }) {
  const [q, setQ] = useState("");
  const [openId, setOpenId] = useState(
    faq.items.find((i) => i.defaultOpen)?.id ?? faq.items[0]?.id,
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return faq.items;
    return faq.items.filter(
      (i) =>
        i.question.toLowerCase().includes(s) ||
        i.answer.toLowerCase().includes(s),
    );
  }, [faq.items, q]);

  return (
    <section
      id="help-faq-section"
      className="site-section faq-section relative overflow-hidden pb-32 md:pb-48"
    style={{ background: "linear-gradient(135deg, rgba(8, 20, 33, 0.98) 0%, rgba(15, 34, 49, 0.94) 50%, rgba(8, 20, 33, 0.98) 100%)" }}
    >
      <div className="container-standard relative">
        <div className="section-inner flex flex-col items-center gap-8 xl:gap-12">
          {/* Header + search — Figma: gap-[80px] column; title 56px / 60px lh, -3px tracking */}
          <div className="flex w-full max-w-3xl flex-col items-center gap-10">
            <div className="section-heading-gap flex w-full flex-col items-center gap-6 px-1">
              <h2 className="w-full text-center font-display text-[clamp(1.75rem,6.5vw,3rem)] font-bold leading-[1.15] tracking-[-0.04em] text-Elementa-primary sm:tracking-[-2.4px]">
                <span>{help.titleLead}</span>
                <span>{help.titleAccent}</span>
                <span>{help.titleTrail}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[672px] px-1 text-center text-[clamp(1rem,2.5vw,1.125rem)] leading-relaxed text-white">
                {help.subtitleBeforeBreak}
                {help.subtitleAfterBreak}
              </p>
            </div>

            <div className="relative w-full max-w-[600px] mx-auto">
              <div className="relative group">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 z-[1] h-5 w-5 -translate-y-1/2 text-white/35 transition-colors group-focus-within:text-Elementa-primary"
                  strokeWidth={2}
                  aria-hidden
                />
                <input
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder={help.searchPlaceholder}
                  className={`${formInputClass} font-manrope font-medium`}
                  aria-label="Search help"
                />
              </div>
            </div>
          </div>

          {/* FAQ list — height follows open items so the section grows naturally */}
          <div className="mx-auto w-full md:w-[90%] xl:w-[75%]">
            <div className="flex flex-col gap-6 overflow-x-hidden px-4 py-6">
              <div className="flex w-full items-center gap-4">
                <span className="shrink-0 whitespace-nowrap font-display text-base font-normal uppercase leading-6 tracking-widest">
                  {faq.sectionLabel}
                </span>
                <div className="h-px flex-1 bg-zinc-400/20" />
              </div>

              <div className="flex flex-col gap-4">
                {filtered.map((item) => {
                  const open = openId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-[16px] border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(open ? null : item.id)}
                        className="flex w-full min-w-0 items-center gap-3 p-3 text-left md:p-6"
                      >
                        <span
                          className={cn(
                            "min-w-0 flex-1 font-display text-[18px] font-bold leading-7 text-black",
                          )}
                        >
                          {item.question}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-black/50 transition-transform duration-200",
                            open && "rotate-180",
                          )}
                          strokeWidth={2}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="px-3 pb-3 font-manrope text-sm font-normal leading-6 text-black/70 md:px-6 md:pb-6">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {filtered.length === 0 && (
                <p className="py-8 text-center font-manrope text-sm text-neutral-200/50">
                  No matches. Try another query.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
