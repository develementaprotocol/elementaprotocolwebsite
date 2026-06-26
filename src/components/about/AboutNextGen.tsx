"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const ElementaChain = '/assets/generation-of-web3.svg';

const AboutNextGen = () => {
  return (
    <section id="about-next-gen" className="relative site-section overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="section-inner px-8">
          <div className="grid grid-cols-1 items-center gap-12 px-2 lg:grid-cols-2 lg:gap-20">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 flex flex-col lg:order-1"
            >
              <h2 className="mb-8 text-center text-[#24bace] lg:text-left">
                Built for the Next Generation of Web3
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-white md:text-xl">
                  We are a team of engineers, designers, and blockchain innovators focused on removing friction from decentralized finance.
                </p>
                <p className="text-lg leading-relaxed text-white md:text-xl">
                  Elementa was created to bridge the gap between complex blockchain systems and real-world usability delivering tools that are powerful, intuitive, and scalable.
                </p>
                <p className="text-lg leading-relaxed text-white md:text-xl">
                  Whether you're a beginner or a pro, Elementa enables you to interact with Web3 effortlessly.
                </p>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="w-full max-w-[500px] mx-auto lg:ml-auto">
                <div className="relative z-10 flex items-center justify-center overflow-hidden rounded-[16px] after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(rgba(36,186,206,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(36,186,206,0.1)_1px,transparent_1px)] after:bg-[size:40px_40px] after:opacity-30">
                  <Image
                    src={ElementaChain}
                    alt="Elementa Next Gen"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNextGen;
