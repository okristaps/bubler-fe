"use client";
import React from "react";
import { motion } from "framer-motion";

const WelcomeBUBLER = () => {
  return (
    <motion.section
      className="relative max-w-6xl mx-auto px-6 sm:px-8 py-10 text-center text-white overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="relative z-10 p-6 bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
          Welcome to BUBLER!
        </h2>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
          The playful meme token on the <span className="text-yellow-300">$ICP</span> blockchain that’s here to
          revolutionize crypto gaming! 🚀 Dive into a world where memes aren’t just for laughs—they’re your ticket to
          real rewards.
        </p>
      </div>
    </motion.section>
  );
};

export default WelcomeBUBLER;
