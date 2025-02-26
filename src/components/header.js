"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Game", href: "/game" },
  { label: "Rules", href: "/rules" },
  { label: "Leaderboard", href: "/leaderboard" },
  {
    label: "Buy",
    href: "https://app.icpswap.com/swap/pro?input=ryjl3-tyaaa-aaaaa-aaaba-cai&output=2zq2x-miaaa-aaaam-qdfia-cai",
    special: true,
  },
];

const HeaderBUBLER = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderLinks = (extraClass = "") =>
    navLinks.map((link, index) => {
      if (link.special) {
        return (
          <a
            target="_blank"
            key={index}
            href={link.href}
            className={`${extraClass} px-4 py-2 bg-yellow-400 text-black font-bold rounded-full shadow-md hover:bg-yellow-500 transition text-center`}
          >
            {link.label}
          </a>
        );
      }
      return (
        <a
          key={index}
          href={link.href}
          className={`${extraClass} text-base sm:text-lg mt-1 font-medium text-gray-300 text-center hover:text-white transition`}
        >
          {link.label}
        </a>
      );
    });

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 sm:px-8 bg-gradient-to-b from-[#0B0F19] to-[#121826] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:mx-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          BUBLER
        </motion.h1>
        <button className="sm:hidden text-white focus:outline-none" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className="hidden sm:flex mr-10 space-x-6">{renderLinks()}</nav>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-2/3 bg-[#0B0F19] shadow-md sm:hidden flex flex-col items-center py-8 space-y-6 z-50"
          >
            <button className="absolute top-4 right-4 text-white focus:outline-none" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>
            {renderLinks("text-base sm:text-lg")}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderBUBLER;
