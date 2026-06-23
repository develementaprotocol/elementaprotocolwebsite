"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutVisionMission = () => {
  return (
    <section id="vision-mission" className="relative site-section overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card relative overflow-hidden rounded-[16px] p-10 text-center after:absolute after:inset-0 after:z-[-1] after:bg-[linear-gradient(135deg,rgba(21,111,122,0.5)_0%,rgba(0,0,0,0)_50%,rgba(21,111,122,0.5)_100%)] md:text-left"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#24bace] mb-6">Vision</h3>
              <p className="text-[#ffffff] text-lg md:text-xl leading-relaxed">
                To become the backbone of a fully interconnected decentralized ecosystem where users have complete control over their digital assets and identity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card group relative overflow-hidden rounded-[16px] p-10 text-center after:absolute after:inset-0 after:z-[-1] after:bg-[linear-gradient(135deg,rgba(21,111,122,0.5)_0%,rgba(0,0,0,0)_50%,rgba(21,111,122,0.5)_100%)] md:text-left"
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#24bace] mb-6">Mission</h3>
              <p className="text-[#ffffff] text-lg md:text-xl leading-relaxed">
                To build secure, scalable, and intuitive tools that simplify Web3 adoption and unlock the true potential of blockchain technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutVisionMission;
