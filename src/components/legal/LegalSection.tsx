import type { ReactNode } from "react";
import { sectionAnchorFromTitle } from "@/utils/sectionAnchor";

export function LegalSection({
  title,
  id,
  children,
}: {
  title: string;
  /** Override auto id when needed */
  id?: string;
  children: ReactNode;
}) {
  const anchor = id ?? sectionAnchorFromTitle(title);
  return (
    <section
      id={anchor}
      className="scroll-mt-28 border-b border-white/[0.06] pb-14 last:border-b-0 last:pb-0 md:pb-16"
    >
      <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-[var(--btn-primary-bg)] sm:text-xl md:text-2xl md:leading-tight">
        {title}
      </h2>
      <div className="prose-docs">{children}</div>
    </section>
  );
}
