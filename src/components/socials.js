"use client";
import { motion } from "framer-motion";

const SocialsSection = () => {
  return (
    <motion.section id="socials" className="max-w-6xl mx-auto px-6 sm:px-8 mt-10">
      <motion.div
        className="bg-lime-500 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700 text-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
          Join Our Community
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-200">
          Stay connected and get the latest updates by joining our social media channels.
        </p>
        <div className="mt-6 flex flex-col items-center space-y-4">
          <a
            href="http://t.me/BUBLER_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg text-white font-semibold text-lg hover:scale-105 shadow-md hover:shadow-lg flex justify-center items-center gap-2"
          >
            🔹 Join Telegram
          </a>
          <a
            href="http://X.com/BUBLER_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs px-6 py-3 bg-gray-800 hover:bg-gray-900 transition-all duration-300 rounded-lg text-white font-semibold text-lg hover:scale-105 shadow-md hover:shadow-lg flex justify-center items-center gap-2"
          >
            ❌ Follow on X
          </a>
          <a
            href="https://oc.app/community/4dyju-4aaaa-aaaac-ajnga-cai"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs px-6 py-3 bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-lg text-white font-semibold text-lg hover:scale-105 shadow-md hover:shadow-lg flex justify-center items-center gap-2"
          >
            💬 Join OpenChat
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SocialsSection;
