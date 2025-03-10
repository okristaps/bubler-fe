"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import RulesImage from "../../../public/byb.jpg";
import { useRouter } from "next/navigation";

export default function RulesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#001a1a] py-8 sm:py-12 mt-20">
      <div className="flex justify-center">
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-[#00f2fe] rounded-full blur-xl opacity-20 animate-pulse"></div>
            <Image
              src={RulesImage}
              alt="Game Rules Illustration"
              width={250}
              height={250}
              className="relative rounded-full sm:w-[300px] w-[200px] border-2 border-[#00f2fe]/30"
            />
          </div>
        </motion.div>
      </div>

      <motion.section
        className="max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-[#00f2fe] bg-gradient-to-b from-[#001a1a]/90 to-[#002929]/90 backdrop-blur-sm p-6 sm:p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/5 to-transparent"></div>

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] mb-8">
              GAME RULES
            </h2>

            <div className="space-y-8">
              <div className="space-y-4">
                <ul className="space-y-4 text-base sm:text-lg text-[#00e4ff]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00f2fe]">⬢</span>
                    <span>Pop as many bubbles as you can before time runs out.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00f2fe]">⬢</span>
                    <span>Different bubbles have different scores—aim for the rare ones first!</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00f2fe]">⬢</span>
                    <span>Avoid missing bubbles, or you might lose points.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00f2fe]">⬢</span>
                    <span>Some bubbles are good, some are bad—choose wisely!</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00f2fe]">⬢</span>
                    <span>Try to beat the highest score on the leaderboard!</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#001a1a] rounded-xl border border-[#00f2fe]/30 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#00f2fe] mb-4">Weekly Rewards</h3>
                <p className="text-[#00e4ff]/90 mb-4">Every week, the top 3 players will earn bonus $BUBLER tokens:</p>
                <ul className="space-y-2 text-[#00e4ff]/80">
                  <li>
                    • 1st Place: <span className="text-[#00f2fe] font-semibold">700K</span>
                  </li>
                  <li>
                    • 2nd Place: <span className="text-[#00f2fe] font-semibold">500K</span>
                  </li>
                  <li>
                    • 3rd Place: <span className="text-[#00f2fe] font-semibold">300K</span>
                  </li>
                </ul>
                <p className="text-sm text-[#00e4ff]/60 mt-2">Payouts will occur each Monday 20:00 UTC+2</p>
              </div>

              <div className="bg-[#001a1a] rounded-xl border border-[#00f2fe]/30 p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#00f2fe] mb-4">Coming Soon!</h3>
                <ul className="space-y-3 text-[#00e4ff]/90">
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00f2fe]">★</span>
                    <span>Purchase extra features (TIME, LIFE, FREEZE, and MYSTERY BOX) using $BUBLER tokens.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-[#00f2fe]">★</span>
                    <span>All $BUBLER tokens spent on these features will be added to the prize pool.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col items-center space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-md px-8 py-4 bg-gradient-to-r from-[#00f2fe] to-[#0092ff] rounded-lg text-white font-bold text-lg shadow-lg shadow-[#00f2fe]/20 hover:shadow-[#00f2fe]/40 transition-all duration-300"
                onClick={() => router.push("/game")}
              >
                PLAY NOW
              </motion.button>

              <Link href="/" passHref className="w-full max-w-md">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-[#002929] text-[#00e4ff] rounded-lg border border-[#00f2fe]/30 hover:border-[#00f2fe] transition-all duration-300"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
