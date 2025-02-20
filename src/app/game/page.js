"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SocialsSection from "../../components/socials";

export default function GamePage() {
  const router = useRouter();

  return (
    <>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-10 mt-28">
        <motion.section
          className="max-w-6xl  sm:px-8 bg-gray-900 bg-opacity-80  rounded-2xl shadow-2xl p-8 sm:p-12 border border-gray-700 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
            The Game is Coming Soon!
          </h2>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
            We're working hard to bring you an exciting and fun-filled meme game! 🚀
          </p>
          <p className="mt-6 text-lg sm:text-xl text-gray-200">
            Stay tuned for updates and be the first to know when we launch! Follow us and join the community.
          </p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={() => router.push("/")}
              className="px-8 py-4 text-lg font-semibold bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Back to Home
            </button>
          </motion.div>
        </motion.section>
      </div>

      <SocialsSection />
    </>
  );
}
