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
              alt="ODINCASH Meme"
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
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#00f2fe] mb-6 tracking-wider uppercase text-glow">
                ODINCASH
              </h1>
              <p className="text-xl sm:text-2xl text-[#00f2fe]/90 mb-8">
                The playful meme game that's here to revolutionize gaming with epic rewards and endless fun!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/game"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00f2fe] to-[#0092ff] hover:from-[#00e4ff] hover:to-[#0092ff] rounded-xl text-white font-bold text-lg sm:text-xl tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Play Now 🎮
                </a>
                <a
                  href="https://odin.fun/token/29ed"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#9333ea] to-[#4f46e5] hover:from-[#a855f7] hover:to-[#6366f1] rounded-xl text-white font-bold text-lg sm:text-xl tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Buy Now 💰
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Landing;
