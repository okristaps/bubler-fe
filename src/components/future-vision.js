"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BUBLERImage from "../../public/image2.png";

const FutureVision = () => {
  return (
    <motion.section id="future-vision" className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
      <motion.div
        className="bg-[#002c2e] rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00f2fe] tracking-wider uppercase mb-8">
            Future Vision: AI Token Launch
          </h2>
          <div className="bg-[#003e42] rounded-xl p-6 relative max-w-2xl">
            <div className="space-y-6">
              <p className="text-[#00f2fe]/90 text-lg">
                🤖 <span className="font-bold">Coming soon:</span> A{" "}
                <span className="font-bold">dedicated AI token</span> will join the ecosystem as a separate in-game
                currency, enhancing gameplay strategy and rewards.
              </p>
              <p className="text-[#00f2fe]/90 text-lg">Stay tuned for a smarter, sharper adventure!</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FutureVision;
