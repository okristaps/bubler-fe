"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutBubler = () => {
  return (
    <>
      <motion.section
        id="about-bubler"
        className="max-w-4xl mx-auto px-6 sm:px-8 py-10 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
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
      </motion.section>
    </>
  );
};

export default AboutBubler;
