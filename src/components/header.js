"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const HeaderBUBLER = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 sm:px-8 bg-gradient-to-b from-[#0B0F19] to-[#121826] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:mx-6  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          BUBLER
        </motion.h1>

        <button className="sm:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden sm:flex mr-10 space-x-6">
          <a
            href="/"
            className="text-base sm:text-lg mt-1 font-medium text-gray-300 text-center hover:text-white transition"
          >
            Home
          </a>
          <a
            href="/game"
            className="text-base mt-1 text-center sm:text-lg font-medium text-gray-300 hover:text-white transition"
          >
            Game
          </a>
          <a
            href="/rules"
            className="text-base mt-1 text-center sm:text-lg font-medium text-gray-300 hover:text-white transition"
          >
            Game Rules
          </a>
          <a
            href="/buy"
            className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-full shadow-md hover:bg-yellow-500 transition text-center"
          >
            Buy
          </a>
        </nav>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 right-0 h-full w-2/3 bg-[#0B0F19] shadow-md sm:hidden flex flex-col items-center py-8 space-y-6 z-50"
        >
          <button className="absolute top-4 right-4 text-white" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>

          <a
            href="/"
            className="text-base sm:text-lg mt-1 font-medium text-gray-300 text-center hover:text-white transition"
          >
            Home
          </a>
          <a href="/game" className="text-lg text-gray-300 hover:text-white transition">
            Game
          </a>
          <a
<<<<<<< HEAD
            target="_blank"
            href="https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=2zq2x-miaaa-aaaam-qdfia-cai"
=======
            href="/rules"
            className="text-base mt-1 text-center sm:text-lg font-medium text-gray-300 hover:text-white transition"
          >
            Game Rules
          </a>
          <a
            href="/buy"
>>>>>>> 26d6f1e (rules btn)
            className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-full shadow-md hover:bg-yellow-500 transition"
          >
            Buy
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default HeaderBUBLER;
