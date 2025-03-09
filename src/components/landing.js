"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BUBLERImage from "../../public/byb.jpg";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <div className=" relative overflow-hidden">
      <motion.section
        className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center text-white flex flex-col md:flex-row-reverse items-center justify-between gap-8 sm:gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="w-full md:w-1/2 flex justify-center relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[#00f2fe] rounded-full blur-2xl opacity-20 animate-pulse"></div>

          <div className="relative">
            <Image
              src={BUBLERImage}
              alt="BUBLER Meme"
              width={450}
              height={450}
              className="rounded-full sm:w-[400px] w-[280px] border-2 border-[#00f2fe]/30 relative z-10"
              priority
            />

            {/* <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/20 to-[#0092ff]/20 rounded-full z-0 animate-pulse"></div> */}
          </div>
        </motion.div>

        <div className="w-full md:w-1/2 text-center md:text-left relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] relative">
                BUBLER!
                <div className="absolute inset-0 bg-[#00f2fe] blur-xl opacity-20"></div>
              </span>
            </h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl text-[#00e4ff]/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              The playful meme token on the <span className="text-[#00f2fe] font-semibold">$ICP</span> blockchain that's
              here to revolutionize crypto gaming! 🚀
            </motion.p>

            <motion.p
              className="mt-3 text-lg sm:text-xl text-[#00e4ff]/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Dive into a world where memes aren't just for laughs—they're your ticket to{" "}
              <span className="text-[#00f2fe] font-semibold">real rewards</span>.
            </motion.p>

            <motion.div
              className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                onClick={() => router.push("/game")}
              >
                <div className="absolute inset-0 bg-[#00f2fe] rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-[#00f2fe] to-[#0092ff] rounded-lg text-white font-bold text-lg shadow-lg shadow-[#00f2fe]/20 hover:shadow-[#00f2fe]/40 transition-all duration-300">
                  PLAY NOW 🎮
                </div>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=2zq2x-miaaa-aaaam-qdfia-cai"
                target="_blank"
              >
                <div className="absolute inset-0 bg-[#002929] rounded-lg blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative px-8 py-4 bg-[#002929] text-[#00e4ff] rounded-lg font-bold text-lg border border-[#00f2fe]/30 hover:border-[#00f2fe] transition-all duration-300">
                  BUY NOW 💰
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Landing;
