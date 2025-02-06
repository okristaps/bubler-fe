"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bublerImage from "../public/image6.png"; // Make sure the path is correct

const AboutBubler = () => {
  return (
    <motion.section
      id="about-bubler"
      className="max-w-5xl mx-auto px-6 sm:px-8 py-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Card Container */}
      <div className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8 border border-gray-700">
        {/* Left Side - Image */}
        <div className="flex justify-center md:justify-start w-full md:w-1/3">
          <Image src={bublerImage} alt="BUBLER Meme" width={400} height={400} className="rounded-xl" />
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-400 drop-shadow-lg">
            What is BUBLER?
          </h2>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            🐸 <span className="font-bold">BUBLER the Meme Catcher</span> isn’t your average token. It’s a meme-powered
            adventure with <span className="text-yellow-300">gameplay utility</span>! Hunt, catch, and collect BUBLER
            tokens in our fast-paced game, where skill meets luck.
          </p>
          <p className="mt-2 text-lg sm:text-xl text-gray-300">
            Every time BUBLER <span className="text-yellow-300">drops in-game</span>,{" "}
            <span className="font-bold">score the highest points</span> and claim your crypto rewards! Built on the
            blazing-fast <span className="text-blue-300">ICP chain</span>, BUBLER combines viral fun with seamless
            transactions.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutBubler;
