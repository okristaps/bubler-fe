"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const RoadmapAndTokenomics = () => {
  return (
    <motion.section
      id="roadmap-tokenomics"
      className="max-w-6xl mx-auto px-4 sm:px-6 pb-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        <motion.div
          className="bg-[#012e2f] rounded-2xl p-6 sm:p-8 w-full relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/5 to-transparent"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#00f2fe] tracking-wider uppercase mb-8">Tokenomics</h2>

            <div className="flex flex-col gap-2">
              <div className="bg-[#014d4e] rounded-xl p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl text-[#00f2fe] uppercase tracking-wide">Total Supply</span>
                  <span className="text-xl sm:text-2xl text-[#00f2fe] font-bold">21M</span>
                </div>
                <div className="text-sm text-[#00f2fe]/70 mt-1">Fair Launch</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {/* <div className="bg-[#014d4e] rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-[#00f2fe] text-sm uppercase tracking-wider opacity-70">Liquidity</span>
                    <span className="text-[#00f2fe] text-xl font-bold mt-1">50M</span>
                  </div>
                </div>

                
                <div className="bg-[#014d4e] rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-[#00f2fe] text-sm uppercase tracking-wider opacity-70">Game Rewards</span>
                    <span className="text-[#00f2fe] text-xl font-bold mt-1">75M</span>
                  </div>
                </div> */}

                <div className="bg-[#014d4e] rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-[#00f2fe] text-sm uppercase tracking-wider opacity-70">Team Treasury</span>
                    <span className="text-[#00f2fe] text-xl font-bold mt-1">20%</span>
                  </div>
                </div>

                <div className="bg-[#014d4e] rounded-xl p-4">
                  <div className="flex flex-col">
                    <span className="text-[#00f2fe] text-sm uppercase tracking-wider opacity-70">Free Market</span>
                    <span className="text-[#00f2fe] text-xl font-bold mt-1">850M</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-sm text-[#00f2fe]/50 uppercase tracking-wider">// Distribution Details</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RoadmapAndTokenomics;
