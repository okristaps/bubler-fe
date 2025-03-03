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

const colors = ["#FFD700", "#C0C0C0", "#CD7F32", "#0078D7", "#0099BC"];

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
    <div>
      <div className="leaderboard ">
        <h1 className="leaderboard-title">Leaderboard</h1>
        <button
          disabled={true}
          className={`toggle-button ${isWeekly ? "weekly" : "all-time"}`} onClick={() => setIsWeekly(!isWeekly)}>
          {isWeekly ? "📅 Weekly Leaderboard" : "🏆 All-Time Leaderboard"}
        </button>
        {loading ? (
          <div className="spinner mt-24"></div>
        ) : (
          <div className="leaders">
            {leaders.length > 0 ? (
              leaders.map((el, i) => (
                <div key={el.id} className={`leader ${i < 3 ? "top-leader" : ""}`}>
                  <div className="leader-wrap">
                    <div className="leader-rank" style={{ backgroundColor: i < 3 ? colors[i] : "transparent" }}>
                      {i + 1}
                    </div>
                    <div className="leader-name">{truncateText(el?.name)}</div>
                  </div>
                  <div className="leader-score">
                    🏆 <span className="leader-score_title">{el.score}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="empty">No data available</div>
            )}
          </div>
        )}
      </div>
      <button className="game-button" onClick={() => router.push("/game")}>
        ▶️ Play
      </button>
      <div className="mt-8 flex flex-row justify-center">
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
  );
};

export default Leaderboard;
