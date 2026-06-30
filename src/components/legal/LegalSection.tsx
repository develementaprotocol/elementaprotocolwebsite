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
      className="scroll-mt-28 pb-7 text-left last:pb-0 md:pb-8"
    >
      <h2 className="mb-4 font-display text-xl font-semibold tracking-normal text-[var(--btn-primary-bg)] md:text-2xl md:leading-tight">
        {title}
      </h2>
      <div className="prose-docs">{children}</div>
    </section>
  );
}
