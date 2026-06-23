"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Share2,
  ArrowRight,
  Send,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { mockPosts, type BlogPost } from "@/data/blogPosts";
import { BlogCard } from "@/components/blog/BlogCard";


function relatedForPost(current: BlogPost, posts: BlogPost[], limit = 3) {
  const others = posts.filter((p) => p.id !== current.id);
  const sameCategory = others.filter((p) => p.category === current.category);
  const other = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...other].slice(0, limit);
}

import twitterIconAsset from "@/assets/twitter.svg";
import telegramLogoAsset from "@/assets/telegram-logo.svg";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.1626 1.5H14.3679L9.54994 7.00667L15.2179 14.5H10.7799L7.30394 9.95533L3.3266 14.5H1.11994L6.27327 8.61L0.835938 1.5H5.3866L8.5286 5.654L12.1626 1.5ZM11.3886 13.18H12.6106L4.7226 2.75067H3.41127L11.3886 13.18Z" />
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 19 16" fill="currentColor">
    <path d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z" />
  </svg>
);

export default function BlogPostDetail() {
  const { slug } = useParams();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const post = mockPosts.find((p) => p.id === slug);

  const relatedPosts = useMemo(() => {
    if (!post) return [] as BlogPost[];
    return relatedForPost(post, mockPosts, 3);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#15202f] flex items-center justify-center p-6 text-center">
        {/* Background removed, handled by RootChrome */}
        <div className="max-w-md relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Transmission Lost
            </h1>
            <p className="text-[#ffffff] mb-10 text-lg leading-relaxed">
              The requested data could not be retrieved from the cosmic
              archives. It may have been redacted or relocated.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#24bace] to-[#0a6a7e] text-white font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(36,186,206,0.4)] transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
              Return to Base
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen text-white selection:bg-[#24bace]/30 pb-32 overflow-hidden">
      {/* Background removed, handled by RootChrome */}

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#24bace] to-[#0a6a7e] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section — overlays on hero media via ::before / ::after */}
      <section className="relative h-screen min-h-[400px] w-full flex items-end">
        <div className="absolute inset-0 z-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_20%,transparent_100%)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-90"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-20 pb-12 sm:pb-16 md:pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8 mt-24 md:mt-0">
              <span className="px-3 sm:px-4 py-1.5 rounded-full bg-black/40 text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] border border-white/25 backdrop-blur-md">
                {post.category}
              </span>
              <div className="flex items-center gap-4 sm:gap-6 text-[#ffffff] text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#24bace]" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#24bace]" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className="font-display text-[clamp(2rem,6.5vw,5.5rem)] font-bold leading-[1.05] md:leading-[0.95] text-white tracking-tighter mb-8 sm:mb-12">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pt-8 sm:pt-10 border-t border-white/10">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative shrink-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#24bace] to-[#0a6a7e] rounded-full blur opacity-40" />
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 bg-black/50 p-0.5 backdrop-blur-md sm:h-14 sm:w-14">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-base sm:text-lg md:text-xl tracking-tight leading-tight truncate">
                    {post.author}
                  </p>
                  <p className="text-[#ffffff] text-[10px] sm:text-xs md:text-sm font-medium tracking-wide mt-1 truncate">
                    Protocol Researcher • Elementa Finance
                  </p>
                </div>
              </div>

              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleCopyLink();
                  }}
                  className="group flex flex-1 md:flex-initial items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#24bace]/50 transition-all duration-300 relative overflow-hidden"
                >
                  <Share2 className="h-4 w-4 text-[#24bace]" />
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#ffffff] group-hover:text-white transition-colors">
                    {isCopied ? "Link Copied!" : "Share Insight"}
                  </span>
                  {isCopied && (
                    <motion.div
                      layoutId="copy-pulse"
                      className="absolute inset-0 bg-[#24bace]/10 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article + sidebar: sidebar stays in view until article column ends */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-20 pt-12 md:pt-24 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 xl:gap-20">
        <div className="min-w-0 flex-1 max-w-3xl w-full">
          {/* Back Button */}
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 mb-12 text-[#24bace] hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#24bace]/10 flex items-center justify-center group-hover:bg-[#24bace]/20 transition-all">
              <ChevronLeft className="h-4 w-4" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Back to Archives
            </span>
          </Link>

          {/* Custom Article Content Styling */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </div>

        <aside className="w-full lg:w-[300px] xl:w-[320px] shrink-0 lg:fixed lg:top-28 lg:self-start space-y-8 sm:space-y-12 pb-4">
            {/* Enhanced CTA Card */}
            <div className="relative group rounded-[16px] overflow-hidden border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#24bace]/10 blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                Secure Your Galactic Assets
              </h3>
              <p className="text-[#ffffff] text-xs sm:text-sm mb-8 sm:mb-10 leading-relaxed">
                Join 142k+ explorers securing the multi-chain universe with
                Elementa's biometric infrastructure.
              </p>
              <Link
                href="/wallet"
                className="group flex items-center justify-center w-full h-12 sm:h-14 rounded-[16px] bg-white text-black font-black text-[9px] sm:text-[10px] uppercase tracking-[0.3em] hover:bg-[#24bace] hover:text-white transition-all duration-300 shadow-[0_20px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_40px_rgba(36,186,206,0.3)]"
              >
                Get Started
                <ArrowRight className="ml-3 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-[#24bace]">
                Follow the Elementa
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://x.com/Elementa"
                  target="_blank"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-[16px] bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#24bace]/50 hover:bg-white/10 transition-all group/icon"
                >
                  <TwitterIcon className="h-4 w-4 sm:h-5 sm:w-5 fill-white transition-colors group-hover/icon:fill-[#24bace]" />
                </a>
                <a
                  href="https://t.me/Elementa"
                  target="_blank"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-[16px] bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#24bace]/50 hover:bg-white/10 transition-all group/icon"
                >
                  <TelegramIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white transition-colors group-hover/icon:text-[#24bace]" />
                </a>
              </div>
            </div>
        </aside>
      </section>

      {/* Related posts — same cards as blog listing */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12 lg:px-20 mt-20 sm:mt-32 pb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <h2 className="section-heading text-left text-white tracking-tight">
              Related articles
            </h2>
            <p className="section-description text-left mt-2">
              Same category first, then other picks from the archives.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-[#24bace] hover:text-white transition-colors flex items-center gap-2 shrink-0"
          >
            View Archives <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {relatedPosts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </section>


    </main>
  );
}


