"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BUBLERImage from "../../public/image2.png";

const FutureVision = () => {
  return (
    <motion.section id="future-vision" className="max-w-6xl mx-auto px-6 sm:px-8 mt-10">
      <motion.div
        className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700 flex flex-col md:flex-row items-center gap-8 md:text-left text-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
            Future Vision: AI Token Launch
          </h2>
          <div className="mt-6 space-y-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            <p>
              🤖 <span className="font-bold">Coming soon:</span> A <span className="font-bold">dedicated AI token</span>{" "}
              will join the ecosystem as a separate in-game currency, enhancing gameplay strategy and rewards.
            </p>
            <p>Stay tuned for a smarter, sharper adventure!</p>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <Image src={BUBLERImage} alt="BUBLER Meme" width={400} height={400} className="rounded-xl" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default FutureVision;
