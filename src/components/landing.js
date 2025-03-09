"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BUBLERImage from "../../public/byb.jpg";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <motion.section
      className="relative max-w-6xl mx-auto text-center text-white flex flex-col md:flex-row-reverse items-center justify-between sm:px-8 sm:py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 md:ml-16"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      >
        <Image
          src={BUBLERImage}
          alt="BUBLER Meme"
          width={350}
          height={350}
          className="rounded-full sm:w-[450px] w-[250px] border-4 border-[#00f2fe] shadow-lg"
          style={{
            boxShadow: "0 0 30px rgba(0, 242, 254, 0.3)",
          }}
        />
      </motion.div>

      <div className="w-full md:w-1/2 text-center md:text-left p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] text-glow">
            BUBLER!
          </span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          The playful meme token on the <span className="text-[#00e4ff] text-glow">$ICP</span> blockchain that's here to
          revolutionize crypto gaming! 🚀 Dive into a world where memes aren't just for laughs—they're your ticket to{" "}
          <span className="text-[#00f2fe] text-glow">real rewards</span>.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <button
            onClick={() => router.push("/game")}
            className="px-5 py-3 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#00f2fe] to-[#0092ff] hover:from-[#00e4ff] hover:to-[#0092ff] rounded-full shadow-lg hover:scale-105 transition-all duration-300 neon-glow"
          >
            Play Now 🎮
          </button>

          <a
            className="px-5 py-3 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#9333ea] to-[#4f46e5] hover:from-[#a855f7] hover:to-[#6366f1] rounded-full shadow-lg hover:scale-105 transition-all duration-300"
            target="_blank"
            href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=2zq2x-miaaa-aaaam-qdfia-cai"
            style={{
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)",
            }}
          >
            Buy Now 💰
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Landing;
