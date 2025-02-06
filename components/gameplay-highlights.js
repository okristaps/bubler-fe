"use client";
import { motion } from "framer-motion";

const GameplayHighlights = () => {
  return (
    <motion.section
      id="gameplay-highlights"
      className="max-w-4xl mx-auto px-6 sm:px-8 py-10 text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400 drop-shadow-lg">
        Gameplay Highlights
      </h2>
      <div className="mt-6 space-y-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
        <p>
          🌟 <span className="font-bold">Catch the Drop, Win Big:</span> When BUBLER falls, grab it fast! The meme
          catcher who snags BUBLER mid-drop earns <span className="text-yellow-300 font-bold">maximum points</span>,
          convertible into
          <span className="text-blue-300"> $ICP</span> or other rewards.
        </p>
        <p>
          🎯 <span className="font-bold">Play-to-Earn Redefined:</span> Turn your gaming prowess into tangible crypto
          payouts. More BUBLER catches = bigger rewards!
        </p>
      </div>
    </motion.section>
  );
};

export default GameplayHighlights;
