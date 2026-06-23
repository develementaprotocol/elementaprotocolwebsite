"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({
  end,
  decimals = 0,
  suffix = "",
  prefix = "",
}: {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const node = ref.current;
      if (!node) return;

      const controls = animate(0, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = prefix + value.toFixed(decimals) + suffix;
        },
      });

      return () => controls.stop();
    }
  }, [inView, end, decimals, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const stats = [
  { label: "Transactions Processed", end: 12, suffix: "M+" },
  { label: "Volume Secured", end: 2.4, prefix: "$", suffix: "B+", decimals: 1 },
  { label: "Uptime", end: 99.9, suffix: "%", decimals: 1 },
  { label: "Active Users", end: 140, suffix: "K+" },
];

const AboutTrustedEcosystem = () => {
  return (
    <section id="trusted-ecosystem" className="relative site-section overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="section-inner">
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="mb-6">
                Trusted Across the Ecosystem
              </h2>
              <p className="section-description mx-auto max-w-2xl">
                Elementa is trusted by users and builders worldwide to power their decentralized journey.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-[16px] text-center flex flex-col items-center justify-center min-h-[160px] relative overflow-hidden after:absolute after:inset-0 after:z-[-1] after:bg-[linear-gradient(135deg,rgba(21,111,122,0.5)_0%,rgba(0,0,0,0)_50%,rgba(21,111,122,0.5)_100%)]"
              >
                <div className="text-[clamp(2.5rem,5vw,3.5rem)] font-display font-bold text-[#ffffff] mb-2 leading-none">
                  <Counter 
                    end={stat.end} 
                    decimals={stat.decimals} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix} 
                  />
                </div>
                <span className="text-[#94A3B8] font-medium tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrustedEcosystem;
