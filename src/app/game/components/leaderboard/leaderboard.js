"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { dfxClient } from "@/utils/dfxClient";
import "./leaderboard.css";
import Link from "next/link";
import { motion } from "framer-motion";

const truncateText = (text, maxLength = 15) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const rankEmojis = ["🥇", "🥈", "🥉"];

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [maxScore, setMaxScore] = useState(500);
  const [isWeekly, setIsWeekly] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      let leaderboardData = isWeekly ? await dfxClient.getTop10CurrentWeek() : await dfxClient.getTop10AllTime();

      if (leaderboardData.length > 0) {
        setLeaders(
          leaderboardData.map((el, i) => ({
            id: i + 1,
            name: el[2],
            score: Number(el[4]),
          }))
        );
        setMaxScore(Math.max(...leaderboardData.map((el) => Number(el[4])), 0));
      } else {
        setLeaders([]);
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 180000);
    return () => clearInterval(interval);
  }, [isWeekly]);

  return (
    <div className="min-h-screen  p-4 sm:p-8 mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#0092ff] mb-4">
            LEADERBOARD
          </h1>
          <div className="inline-block bg-[#002929] rounded-full p-1 border border-[#00f2fe]">
            <button disabled={true} className="px-4 sm:px-6 py-2 rounded-full text-[#00e4ff] text-sm font-medium">
              {isWeekly ? "WEEKLY RANKINGS" : "ALL-TIME RANKINGS"}
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-t-[#00f2fe] border-r-transparent border-l-transparent border-b-[#00f2fe] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {leaders.length > 0 ? (
              leaders.map((el, i) => (
                <motion.div
                  key={el.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`relative overflow-hidden rounded-lg ${
                    i < 3 ? "border-2 border-[#00f2fe]" : "border border-[#004444]"
                  }`}
                >
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-[#001a1a]/90 to-[#002929]/90 backdrop-blur-sm gap-2 sm:gap-4">
                    <div className="flex items-center space-x-3 sm:space-x-6">
                      <div
                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 ${
                          i < 3 ? "bg-gradient-to-r from-[#00f2fe] to-[#0092ff]" : "bg-[#002929]"
                        }`}
                      >
                        <span className="text-lg sm:text-xl font-bold text-white">{i < 3 ? rankEmojis[i] : i + 1}</span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-base sm:text-lg font-semibold text-[#00f2fe] truncate">
                          {truncateText(el?.name)}
                        </span>
                        <span className="text-xs sm:text-sm text-[#00e4ff]/70">Player #{el.id}</span>
                      </div>
                    </div>
                    <div className="flex items-center ml-13 sm:ml-0">
                      <div className="w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 bg-[#001a1a] rounded-lg border border-[#00f2fe]/30">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                          <span className="text-xs sm:text-sm font-medium text-[#00e4ff]">SCORE</span>
                          <span className="text-lg sm:text-xl font-bold text-[#00f2fe] font-mono">
                            {el.score.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {i < 3 && <div className="absolute inset-0 bg-gradient-to-r from-[#00f2fe]/10 to-transparent"></div>}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-[#00e4ff]">No data available</div>
            )}
          </div>
        )}

        <div className="mt-8 sm:mt-12 flex flex-col items-center space-y-3 sm:space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-md px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00f2fe] to-[#0092ff] rounded-lg text-white font-bold text-lg shadow-lg shadow-[#00f2fe]/20 hover:shadow-[#00f2fe]/40 transition-all duration-300"
            onClick={() => router.push("/game")}
          >
            PLAY NOW
          </motion.button>

          <Link href="/" passHref className="w-full max-w-md">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-[#002929] text-[#00e4ff] rounded-lg border border-[#00f2fe]/30 hover:border-[#00f2fe] transition-all duration-300"
            >
              Back to Home
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
