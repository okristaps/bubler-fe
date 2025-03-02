"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RulesImage from "../../../public/image3.png";

export default function RulesPage() {
  return (
    <div className="h-full">
      <div className="flex justify-center mt-20">
        <motion.div
          className="w-full md:w-1/2 flex justify-center md:ml-16"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Image
            src={RulesImage}
            alt="Game Rules Illustration"
            width={250}
            height={250}
            className="rounded-full sm:w-[350px] w-[150px]"
          />
        </motion.div>
      </div>

      <motion.section
        className="max-w-6xl mx-auto px-6 sm:px-8 mt-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="bg-green-500 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-400 drop-shadow-md">
            Game Rules
          </h2>
          <ul className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed space-y-4">
            <li>🔹 Pop as many bubbles as you can before time runs out.</li>
            <li>🔹 Different bubbles have different scores—aim for the rare ones first!</li>
            <li>🔹 Avoid missing bubbles, or you might lose points.</li>
            <li>🔹 Some bubbles are good, some are bad—choose wisely!</li>
            <li>🔹 Try to beat the highest score on the leaderboard!</li>
            <li>
              ⭐ Every week, the top 3 players will earn bonus $BUBLER tokens:
              <br /> &nbsp;&nbsp;• 1st Place: 700K, 2nd Place: 500K, 3rd Place: 300K. Payouts will occur each monday
              20:00 UTC+2
            </li>
            <li>
              🌟 Additional partner coin rewards:
              <br /> &nbsp;&nbsp;• RETARF: 1st - 250K, 2nd - 100K, 3rd - 50K
              <br /> &nbsp;&nbsp;• RUGGY: 1st - 60K, 2nd - 25K, 3rd - 15K
              <br /> &nbsp;&nbsp;• AC: 1st - 10K, 2nd - 7K, 3rd - 3K
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-white">Coming Soon!</h3>
            <ul className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed space-y-4">
              <li>⭐ Purchase extra features (TIME, LIFE, FREEZE, and MYSTERY BOX) using $BUBLER tokens.</li>
              <li>⭐ All $BUBLER tokens spent on these features will be added to the prize pool.</li>
            </ul>
          </div>
          <a className="game-button" href="/game">
            ▶️ Play
          </a>
          <div className="mt-8">
            <Link href="/" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Back to Home
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
