"use client";
import { motion } from "framer-motion";

const GameplayHighlights = () => {
  return (
    <motion.section id="gameplay-highlights" className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
      <motion.div
        className="bg-[#002c2e] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-transparent"></div>

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00f2fe] tracking-wider uppercase mb-8 text-right">
            Gameplay Highlights
          </h2>

          <div className="space-y-6">
            <div className="bg-[#003e42] rounded-xl p-6 relative">
              <div className="text-right">
                <h3 className="text-xl sm:text-2xl text-[#00f2fe] font-bold uppercase tracking-wide mb-2">
                  Catch the Drop, Win Big
                </h3>
                <p className="text-[#00f2fe]/90 text-lg">
                  When ODINCASH falls, grab it fast! The meme catcher who snags ODINCASH mid-drop earns{" "}
                  <span className="font-bold">maximum points</span> and unlocks exclusive rewards.
                </p>
              </div>
            </div>

            <div className="bg-[#003e42] rounded-xl p-6 relative">
              <div className="text-right">
                <h3 className="text-xl sm:text-2xl text-[#00f2fe] font-bold uppercase tracking-wide mb-2">
                  Play-to-Earn Redefined
                </h3>
                <p className="text-[#00f2fe]/90 text-lg">
                  Turn your gaming prowess into amazing rewards.{" "}
                  <span className="font-bold">More ODINCASH catches = bigger prizes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GameplayHighlights;
