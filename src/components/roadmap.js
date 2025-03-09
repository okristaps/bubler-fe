"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const RoadmapAndTokenomics = () => {
  return (
    <motion.section
      id="roadmap-tokenomics"
      className="max-w-6xl mx-auto px-6 sm:px-8 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ✅ Added gap-10 for mobile & gap-16 for desktop */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        {/* ✅ Made Tokenomics wider (md:w-3/5) */}
        <motion.div
          className="bg-[#001a1a] bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-[#00f2fe] text-center w-full neon-glow"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] drop-shadow-md text-glow">
            Tokenomics
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-gray-300 font-bold">
            Total Supply: <span className="text-[#00f2fe] text-glow">1 Billion (Fair Launch)</span>
          </p>

          <div className="space-y-4 mt-6">
            <div className="bg-[#002929] bg-opacity-70 p-4 rounded-xl border border-[#00f2fe] shadow-md">
              <span className="text-[#00f2fe] font-bold text-glow">💧 Liquidity:</span> 50M
            </div>
            <div className="bg-[#002929] bg-opacity-70 p-4 rounded-xl border border-[#00f2fe] shadow-md">
              <span className="text-[#00e4ff] font-bold text-glow">🎮 Treasury (Game Rewards):</span> 75M
            </div>
            <div className="bg-[#002929] bg-opacity-70 p-4 rounded-xl border border-[#00f2fe] shadow-md">
              <span className="text-[#00f2fe] font-bold text-glow">👥 Treasury (Team):</span> 25M
            </div>
            <div className="bg-[#002929] bg-opacity-70 p-4 rounded-xl border border-[#00f2fe] shadow-md">
              <span className="text-[#00e4ff] font-bold text-glow">📈 Free Market:</span> 850M
            </div>
          </div>
        </motion.div>

        {/* ✅ Made Roadmap smaller (md:w-2/5) */}
        {/* <motion.div
          className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700 text-center w-full md:w-2/5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
            Our Roadmap
          </h2>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200">
            🚀 <span className="font-bold">BUBLER is just getting started!</span> Our mission is to create a meme-fueled
            gaming revolution with real crypto utility.
          </p>
          <p className="mt-2 text-lg sm:text-xl text-gray-300">
            Stay tuned for exciting updates, token integration, NFT rewards, and much more! The future of play-to-earn
            is here. 🐸🔥
          </p>

          <div className="mt-6 flex justify-center">
            <a href="/pdf/roadmap.pdf" download="BUBLER_Roadmap.pdf">
              <button className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 active:scale-95">
                <Download size={24} />
                Download Roadmap
              </button>
            </a>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default RoadmapAndTokenomics;
