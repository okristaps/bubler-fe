"use client";
import { motion } from "framer-motion";

const FutureVision = () => {
  return (
    <motion.section
      id="future-vision"
      className="max-w-4xl mx-auto px-6 sm:px-8 py-10 text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-500 drop-shadow-lg">
        Future Vision: AI Token Launch
      </h2>
      <div className="mt-6 space-y-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
        <p>
          🤖 <span className="font-bold">Coming soon:</span> A <span className="font-bold">dedicated AI token</span>{" "}
          will join the ecosystem as a separate in-game currency, enhancing gameplay strategy and rewards.
        </p>
        <p>Stay tuned for a smarter, sharper adventure!</p>
      </div>
    </motion.section>
  );
};

export default FutureVision;
