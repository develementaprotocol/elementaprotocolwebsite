"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import twitterLogo from "@/assets/twitter.svg";
import telegramLogo from "@/assets/telegram-logo.svg";
import newsletterBg from "@/assets/social-link-cardbackground.png";
import personIcon from "@/assets/person.png";
import person1Icon from "@/assets/person2.png";
import person2Icon from "@/assets/person3.png";

const avatarMap = {
  person: personIcon,
  person2: person1Icon,
  person3: person2Icon,
};

/** Bento cards: centered on mobile; desktop aligns with reference layout */
const cardBase =
  "flex flex-col items-center justify-center rounded-[16px] p-6 text-center max-md:px-5 sm:px-8 md:items-start md:justify-between md:p-10 md:text-left min-h-[320px] md:min-h-[360px]";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

/** Icon + title — no link (card is a div) */
function CardIconTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex w-full max-w-full flex-row flex-nowrap items-center justify-center gap-3 md:flex-col md:items-start">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] bg-white/10">
        {icon}
      </span>
      <h3 className="mt-0 min-w-0 shrink text-center font-display text-[clamp(1.35rem,5vw,2.5rem)] font-bold leading-tight text-white md:mt-8 md:text-left md:text-[2.5rem]">
        {title}
      </h3>
    </div>
  );
}

export function CommunitySection({ community }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState<string | null>(null);
  const [newsletterSuccess, setNewsletterSuccess] = useState<string | null>(null);
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);

  const handleNewsletterSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (newsletterSubmitting) return;

      const v = newsletterEmail.trim();
      if (!v) {
        setNewsletterError("Please enter your email.");
        setNewsletterSuccess(null);
        return;
      }
      if (!isValidEmail(v)) {
        setNewsletterError("Please enter a valid email address.");
        setNewsletterSuccess(null);
        return;
      }

      setNewsletterError(null);
      setNewsletterSuccess(null);
      setNewsletterSubmitting(true);
      try {
        const res = await fetch("/api/community-subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: v }),
        });
        const data = (await res.json().catch(() => ({}))) as {
          error?: string;
          success?: boolean;
        };
        if (!res.ok || data.success === false) {
          setNewsletterError(
            data.error ?? "Subscription failed. Please try again.",
          );
          return;
        }

        setNewsletterEmail("");
        setNewsletterSuccess("Thanks! We received your email.");
      } catch {
        setNewsletterError("Network error. Please try again.");
      } finally {
        setNewsletterSubmitting(false);
      }
    },
    [newsletterEmail, newsletterSubmitting],
  );

  const discordHref = community.discord.href;

  return (
    <section id="community-section" className="site-section">
      <div className="container-standard">
        <div className="section-inner">
          <div className="section-heading-gap mx-auto max-w-3xl text-center">
            <h2 className="font-display font-semibold leading-tight">
              {community.headline}
            </h2>
            <p className="mt-4 text-[clamp(1rem,2.5vw,1.125rem)] text-white">
              {community.subheadline}
            </p>
          </div>

          {/* Desktop: row1 = Discord (8) + Twitter (4); row2 = Telegram (4) + Newsletter (8) */}
          <div className="grid gap-8 xl:grid-cols-12 xl:gap-[32px]">
            {/* Discord — card is div; only ACTIVE NOW links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden border border-white/10 backdrop-blur-xl xl:col-span-8 ${cardBase}`}
              style={{
                background:
                  "linear-gradient(0deg, #1b3144, #1b3144), radial-gradient(106.03% 300.79% at 100% 0%, rgba(36, 186, 206, 0.12) 0%, rgba(36, 186, 206, 0) 60%)",
              }}
            >
              <div className="relative z-10 flex min-h-0 w-full flex-1 flex-col items-center md:items-start justify-center">
                <CardIconTitle
                  title={community.discord.title}
                  icon={
                    <svg
                      className="h-6 w-6 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.8-.58-1.21a18.1 18.1 0 0 0-4.59 1.44c-3.1 4.64-3.95 9.17-3.55 13.62a18.88 18.88 0 0 0 5.4 2.74c.45-.61.85-1.28 1.2-1.98a12.07 12.07 0 0 1-1.89-.9c.15-.11.3-.22.44-.33a11.57 11.57 0 0 0 10.98 0c.14.11.29.22.44.33a12.3 12.3 0 0 1-1.89.9 14.8 14.8 0 0 0 1.2 1.98 18.78 18.78 0 0 0 5.41-2.74c.46-5.1-.79-9.59-3.56-13.62ZM8.33 14.02c-1.06 0-1.93-.97-1.93-2.17 0-1.2.85-2.18 1.93-2.18 1.09 0 1.95.98 1.93 2.18 0 1.2-.84 2.17-1.93 2.17Zm7.34 0c-1.06 0-1.93-.97-1.93-2.17 0-1.2.85-2.18 1.93-2.18 1.08 0 1.95.98 1.93 2.18 0 1.2-.84 2.17-1.93 2.17Z" />
                    </svg>
                  }
                />
                <p className="mt-4 max-w-sm text-center text-base leading-relaxed text-zinc-300 md:text-left">
                  {community.discord.description}
                </p>

                <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-4 md:mt-auto md:justify-start md:pt-10">
                  <div className="flex items-center justify-center">
                    <div className="flex -space-x-3">
                      {community.discord.members.map((id) => (
                        <img
                          key={id}
                          src={avatarMap[id].src}
                          alt=""
                          className="h-10 w-10 rounded-full border-2 border-[#1B5259] bg-zinc-800 object-cover shadow-xl"
                        />
                      ))}
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1B5259] bg-white text-[10px] font-bold text-black">
                        {community.discord.memberCount}
                      </div>
                    </div>
                  </div>
                  <a
                    href={discordHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-20 rounded-md border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white/90 outline-none ring-[#24bace]/40 transition-all hover:bg-white/10 hover:text-white focus-visible:ring-2"
                  >
                    ACTIVE NOW
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute -right-10 -top-10 opacity-[0.03]">
                <svg className="h-64 w-64" viewBox="0 0 24 24" fill="white" aria-hidden>
                  <path d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.8-.58-1.21a18.1 18.1 0 0 0-4.59 1.44c-3.1 4.64-3.95 9.17-3.55 13.62a18.88 18.88 0 0 0 5.4 2.74c.45-.61.85-1.28 1.2-1.98a12.07 12.07 0 0 1-1.89-.9c.15-.11.3-.22.44-.33a11.57 11.57 0 0 0 10.98 0c.14.11.29.22.44.33a12.3 12.3 0 0 1-1.89.9 14.8 14.8 0 0 0 1.2 1.98 18.78 18.78 0 0 0 5.41-2.74c.46-5.1-.79-9.59-3.56-13.62ZM8.33 14.02c-1.06 0-1.93-.97-1.93-2.17 0-1.2.85-2.18 1.93-2.18 1.09 0 1.95.98 1.93 2.18 0 1.2-.84 2.17-1.93 2.17Zm7.34 0c-1.06 0-1.93-.97-1.93-2.17 0-1.2.85-2.18 1.93-2.18 1.08 0 1.95.98 1.93 2.18 0 1.2-.84 2.17-1.93 2.17Z" />
                </svg>
              </div>
            </motion.div>

            {/* Twitter — card is div; Follow Updates is the link */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`rounded-[16px] bg-black xl:col-span-4 ${cardBase}`}
            >
              <div className="flex min-h-0 w-full flex-1 flex-col items-center md:items-stretch justify-center">
                <CardIconTitle
                  title={community.twitter.title}
                  icon={
                    <img
                      src={twitterLogo.src}
                      alt=""
                      className="h-6 w-6 object-contain brightness-0 invert"
                    />
                  }
                />
                <p className="mt-4 text-center text-base italic text-zinc-400 md:text-left">
                  {community.twitter.description}
                </p>
                <div className="mt-12 w-full pt-0 md:mt-auto md:pt-8">
                  <motion.a
                    href={community.twitter.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ opacity: 0.92 }}
                    className="mx-auto flex h-14 w-full max-w-xs items-center justify-center rounded-[16px] bg-white text-sm font-bold text-black transition-colors hover:bg-zinc-200 md:mx-0 md:max-w-none"
                  >
                    {community.twitter.cta}
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Telegram — card is div; Join Channel is the link */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`xl:col-span-4 ${cardBase}`}
              style={{
                background:
                  "linear-gradient(0deg, #1b3144, #1b3144), radial-gradient(106.03% 300.79% at 100% 0%, rgba(36, 186, 206, 0.12) 0%, rgba(36, 186, 206, 0) 60%)",
              }}
            >
              <div className="flex min-h-0 w-full flex-1 flex-col items-center md:items-stretch justify-center">
                <CardIconTitle
                  title={community.telegram.title}
                  icon={
                    <img
                      src={telegramLogo.src}
                      alt=""
                      className="h-6 w-6 object-contain brightness-0 invert"
                    />
                  }
                />
                <p className="mt-4 text-center text-base text-zinc-300 md:text-left">
                  {community.telegram.description}
                </p>
                <div className="mt-12 flex w-full justify-center md:mt-auto md:justify-start md:pt-6">
                  <a
                    href={community.telegram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-Elementa-accent transition-opacity hover:opacity-90"
                  >
                    <span>{community.telegram.cta}</span>
                    <span className="text-xl" aria-hidden>
                      →
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex min-h-[360px] flex-col items-center justify-end overflow-hidden rounded-[16px] border border-white/10 p-6 text-center max-md:px-5 sm:px-8 md:items-stretch md:p-10 md:text-left xl:col-span-8"
            >
              <img
                src={newsletterBg.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

              <div className="relative z-10 flex w-full max-w-lg flex-col items-center md:max-w-none md:items-start">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white">
                  {community.newsletter.kicker}
                </span>
                <h3 className="mt-4 font-display text-[2.75rem] font-bold leading-none tracking-tight text-white">
                  {community.newsletter.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-200/90 md:max-w-lg">
                  {community.newsletter.description}
                </p>
                <div className="mt-10 flex w-full max-w-md flex-col items-center sm:max-w-lg md:max-w-lg md:items-stretch">
                  <form
                    className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:items-stretch sm:gap-2"
                    onSubmit={handleNewsletterSubmit}
                    noValidate
                  >
                    <div
                      className={`flex min-h-[52px] min-w-0 flex-1 flex-col justify-center rounded-[16px] border border-white/35 bg-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-[border-color,box-shadow] duration-200 ${
                        newsletterError ? "border-red-400/70 ring-1 ring-red-400/30" : ""
                      }`}
                    >
                      <input
                        type="email"
                        name="newsletter-email"
                        placeholder={community.newsletter.placeholder}
                        value={newsletterEmail}
                        onChange={(e) => {
                          setNewsletterEmail(e.target.value);
                          setNewsletterError(null);
                          setNewsletterSuccess(null);
                        }}
                        autoComplete="email"
                        disabled={newsletterSubmitting}
                        required
                        aria-invalid={Boolean(newsletterError)}
                        aria-describedby={newsletterError ? "newsletter-error" : undefined}
                        className="min-h-[52px] w-full rounded-[16px] border-0 bg-transparent px-4 py-3 text-center text-sm text-white outline-none placeholder:text-zinc-400/90 focus-visible:ring-2 focus-visible:ring-[#24bace]/45 sm:text-left md:text-left"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={newsletterSubmitting}
                      className="btn-primary !rounded-[16px] min-h-[52px] w-full shrink-0 px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] sm:w-auto sm:min-w-[148px]"
                    >
                      {newsletterSubmitting ? "Sending..." : community.newsletter.cta}
                    </button>
                  </form>
                  {newsletterError ? (
                    <p
                      id="newsletter-error"
                      className="mt-2 w-full text-center text-xs font-medium text-red-400 md:text-left"
                    >
                      {newsletterError}
                    </p>
                  ) : null}
                  {newsletterSuccess ? (
                    <p className="mt-2 w-full text-center text-xs font-medium text-emerald-400 md:text-left">
                      {newsletterSuccess}
                    </p>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
