"use client";
import { motion } from "framer-motion";

const GameplayHighlights = () => {
  return (
    <motion.section id="gameplay-highlights" className="max-w-6xl mx-auto px-6 sm:px-8 mt-10">
      <motion.div
        className="bg-[#001a1a] bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-[#00f2fe] text-center neon-glow"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] drop-shadow-lg text-glow">
          Gameplay Highlights
        </h2>

        <div className="mt-6 space-y-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
          <p>
            🌟 <span className="font-bold text-[#00e4ff] text-glow">Catch the Drop, Win Big:</span> When BUBLER falls,
            grab it fast! The meme catcher who snags BUBLER mid-drop earns{" "}
            <span className="text-[#00f2fe] font-bold text-glow">maximum points</span>, convertible into{" "}
            <span className="text-[#00e4ff] text-glow">$ICP</span> or other rewards.
          </p>
          <p>
            🎯 <span className="font-bold text-[#00e4ff] text-glow">Play-to-Earn Redefined:</span> Turn your gaming
            prowess into tangible crypto payouts.{" "}
            <span className="text-[#00f2fe] text-glow">More BUBLER catches = bigger rewards!</span>
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GameplayHighlights;
