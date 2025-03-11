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
    href: "https://odin.fun/token/29ed",
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
            className={`${extraClass} px-4 py-2 bg-gradient-to-r from-[#00f2fe] to-[#0092ff] text-white font-bold rounded-full shadow-md hover:from-[#00e4ff] hover:to-[#0092ff] transition text-center neon-glow`}
          >
            {link.label}
          </a>
        );
      }
      return (
        <a
          key={index}
          href={link.href}
          className={`${extraClass} text-base sm:text-lg mt-1 font-medium text-gray-300 text-center hover:text-[#00f2fe] hover:text-glow transition`}
        >
          {link.label}
        </a>
      );
    });

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-6 sm:px-8 bg-gradient-to-b from-[#002929] to-[#001a1a] text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:mx-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] drop-shadow-lg text-glow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ODINCASH
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
            className="fixed top-0 right-0 h-full w-2/3 bg-[#001a1a] shadow-md sm:hidden flex flex-col items-center py-8 space-y-6 z-50"
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
