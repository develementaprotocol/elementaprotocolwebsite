"use client";

import { FadeInView } from "@/components/ui/FadeInView";
import type { SeoSectionContent } from "@/data/homepage";

const CARD_GRADIENT =
  "linear-gradient(135deg, rgba(21,111,122, 0.5) 0%, rgba(0, 0, 0, 0) 50%, rgba(21,111,122, 0.5) 100%)";

export function SeoContentSection({
  seoSection,
}: {
  seoSection: SeoSectionContent;
}) {
  return (
    <section
      id="seo-content-section"
      className="site-section relative overflow-hidden"
    >
      <div className="container-standard">
        <div className="section-inner">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {seoSection.blocks.map((block, index) => (
              <FadeInView key={block.id} delayMs={index * 100}>
                <article
                  className="flex h-full flex-col gap-4 rounded-[16px] border border-white/[0.06] p-8 text-center shadow-[0_24px_48px_rgba(0,0,0,0.3)] sm:p-10 md:text-left"
                  style={{ background: CARD_GRADIENT }}
                >
                  <h2 className="font-display text-[clamp(1.5rem,4vw,2rem)] font-bold leading-tight tracking-tight text-white">
                    {block.title}
                  </h2>
                  <p className="font-body text-base leading-relaxed text-[#F5F5F5] sm:text-[15px]">
                    {block.body}
                  </p>
                </article>
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
