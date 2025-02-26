"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BUBLERImage from "../../public/image3.png";
import { useRouter } from "next/navigation";

const Landing = () => {
  const router = useRouter();

  return (
    <motion.section
      className="relative max-w-6xl mx-auto text-center text-white flex flex-col md:flex-row-reverse items-center justify-between  sm:px-8  sm:py-8"
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
          className="rounded-full sm:w-[450px] w-[250px]"
        />
      </motion.div>

      <div className="w-full md:w-1/2 text-center md:text-left p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
          Welcome to <span className="text-yellow-400">BUBLER!</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          The playful meme token on the <span className="text-yellow-300">$ICP</span> blockchain that’s here to
          revolutionize crypto gaming! 🚀 Dive into a world where memes aren’t just for laughs—they’re your ticket to
          real rewards.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <button
            onClick={() => router.push("/game")}
            className="px-5 py-3 text-base sm:text-lg font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Play
          </button>

          <a
            className="px-5 py-3 text-base sm:text-lg font-bold text-black bg-yellow-400 hover:bg-yellow-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            target="_blank"
            href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=2zq2x-miaaa-aaaam-qdfia-cai"
          >
            Buy Here
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Landing;
