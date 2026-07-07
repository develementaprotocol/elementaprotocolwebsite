import type { WalletHeroContent } from "@/data/walletPage";

/** Server-rendered wallet hero — reflect/atmosphere comes from RootChrome (same as home). */
export function WalletHeroSection({ hero }: { hero: WalletHeroContent }) {
  return (
    <section
      className="relative wallet-hero-section hero-parallax-wrap flex min-h-dvh flex-col overflow-hidden bg-transparent pt-[var(--site-nav-offset)]"
      aria-labelledby="wallet-hero-heading"
    >
      <div className="container-standard relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center px-3 py-6 sm:px-0 sm:py-8 md:py-10">
        <div className="section-inner flex w-full max-w-4xl flex-col items-center gap-5 text-center sm:gap-6 md:gap-8">
          <h1
            id="wallet-hero-heading"
            className="hero-heading text-balance w-full max-w-[1000px] text-center font-display font-bold text-Elementa-primary max-md:drop-shadow-none md:drop-shadow-[0_4px_48px_rgba(0,0,0,0.45)]"
          >
            {hero.headlineParts.map((part, i) =>
              part.highlight ? (
                <span key={i} className="text-Elementa-accent">
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </h1>

          <p className="hero-subheading text-pretty w-full max-w-[640px] text-center font-body font-light text-Elementa-muted">
            {hero.subheadline}
          </p>

          <div className="flex w-full flex-col items-stretch justify-center gap-3 px-1 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 sm:px-0 sm:pt-2 md:pt-4">
            <button
              type="button"
              id="wallet-download-cta"
              className="btn-primary w-full px-8 py-3 font-body text-base leading-7 sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
            >
              {hero.primaryCta.label}
            </button>
            <a
              href={hero.secondaryCta.href}
              className="btn-secondary w-full px-8 py-3 font-body text-base leading-7 sm:w-auto sm:px-10 sm:py-5 sm:text-xl"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
