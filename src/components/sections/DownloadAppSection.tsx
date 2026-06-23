import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, QrCode, Apple, Play } from "lucide-react";
import Image from "next/image";
import phoneMockup from "@/assets/wallet-hero-left.png";
import appleBadge from "@/assets/apple-button.png";
import googleBadge from "@/assets/google-export-button.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});
export function DownloadAppSection() {
  const [activeModal, setActiveModal] = useState<"apple" | "google" | null>(
    null,
  );
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const handleDownloadClick = (
    platform: "apple" | "google",
    e: React.MouseEvent,
  ) => {
    if (isDesktop) {
      e.preventDefault();
      setActiveModal(platform);
    }
  };

  return (
    <section className="site-section relative w-full overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="section-inner">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* Left Content Side */}
          <div className="relative z-10 flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            <motion.h2
              {...fadeUp(0)}
              className="font-display text-[clamp(2.5rem,5vw,4.25rem)] font-bold leading-[1.1] tracking-[-0.04em] text-white"
            >
              Download our app and <br className="hidden md:block" />
              get most out of it
            </motion.h2>

            <motion.p
              {...fadeUp(0.1)}
              className="mt-6 w-full max-w-[540px] mx-auto font-body text-lg leading-relaxed text-Elementa-muted md:text-xl lg:mx-0"
            >
              Get Elementa Wallet: Your Gateway to a Vibrant{" "}
              <br className="hidden sm:block" /> Digital Ecosystem
            </motion.p>

            <motion.div
              {...fadeUp(0.2)}
              className="mt-10 flex flex-nowrap justify-center gap-6 lg:justify-start"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleDownloadClick("apple", e)}
                className="group relative h-[48px] w-[140px] md:h-[52px] md:w-[160px] transition-all hover:shadow-[0_0_24px_rgba(36,186,206,0.35)] active:opacity-90 flex items-center justify-center"
              >
                <Image
                  src={appleBadge}
                  alt="Download on the App Store"
                  className="h-full w-full object-contain"
                />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleDownloadClick("google", e)}
                className="group relative h-[48px] w-[140px] md:h-[52px] md:w-[160px] transition-all hover:shadow-[0_0_24px_rgba(36,186,206,0.35)] active:opacity-90 flex items-center justify-center"
              >
                <Image
                  src={googleBadge}
                  alt="Get it on Google Play"
                  className="h-full w-full object-contain"
                />
              </a>
            </motion.div>
          </div>

          {/* Right Visual Side */}
          <div className="relative flex flex-1 items-center justify-center pt-10 lg:justify-end lg:pt-0">
            <div className="relative h-[450px] w-full max-w-[500px] sm:h-[600px] lg:h-[700px]">
              {/* Phone Mockup with Floating Animation */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotateY: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-20 flex h-full w-full items-center justify-center p-4"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative h-full w-full max-w-[320px] sm:max-w-[400px]"
                >
                  <Image
                    src={phoneMockup}
                    alt="Elementa Wallet App"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                  />
                </motion.div>

                {/* Visual Polish - Subtle Bottom Fade */}
                </motion.div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Barcode Modals */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="relative w-full max-w-sm rounded-[16px] border border-white/10 bg-[#0a0f1d]/95 p-12 text-left shadow-[0_40px_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute right-8 top-8 text-white hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-8 flex justify-start">
                <div className="relative">
                  <div className="relative rounded-[16px] bg-white p-6 shadow-2xl">
                    <div className="h-44 w-44 bg-black flex items-center justify-center rounded-[16px]">
                      <QrCode className="h-36 w-36 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-start gap-3">
                  {activeModal === "apple" ? (
                    <Apple className="h-5 w-5 text-[#24BACE]" />
                  ) : (
                    <Play
                      className="h-5 w-5 text-[#24BACE]"
                      fill="currentColor"
                    />
                  )}
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    {activeModal === "apple" ? "App Store" : "Google Play"}
                  </h3>
                </div>

                <p className="font-body text-sm leading-relaxed text-[#ffffff] pr-4">
                  Scan this code with your{" "}
                  {activeModal === "apple" ? "iPhone" : "Android device"} to
                  download Elementa instantly.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-start">
                <Image
                  src={activeModal === "apple" ? appleBadge : googleBadge}
                  alt={activeModal === "apple" ? "App Store" : "Google Play"}
                  className="h-[50px] w-auto object-contain opacity-60"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
