"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const ElementaChain = '/assets/generation-of-web3.svg';

const AboutNextGen = () => {
  return (
    <section id="about-next-gen" className="relative site-section overflow-hidden">
      <div className="container-standard relative z-10">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 flex flex-col lg:order-1"
            >
              <h2 className="mb-8 text-[#24bace] md:text-left">
                Built for the Next Generation of Web3
              </h2>
              
              <div className="space-y-6">
                <p className="text-[#ffffff] text-lg md:text-xl leading-relaxed">
                  We are a team of engineers, designers, and blockchain innovators focused on removing friction from decentralized finance.
                </p>
                <p className="text-[#ffffff] text-lg md:text-xl leading-relaxed">
                  Elementa was created to bridge the gap between complex blockchain systems and real-world usability delivering tools that are powerful, intuitive, and scalable.
                </p>
                <p className="text-[#ffffff] text-lg md:text-xl leading-relaxed">
                  Whether you're a beginner or a pro, Pulsar enables you to interact with Web3 effortlessly.
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
                <div className="z-10 flex items-center justify-center rounded-[16px] overflow-hidden after:absolute after:inset-0 after:opacity-30 after:pointer-events-none after:bg-[linear-gradient(rgba(36,186,206,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(36,186,206,0.1)_1px,transparent_1px)] after:bg-[size:40px_40px]">
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
