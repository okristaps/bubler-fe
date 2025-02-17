"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { dfxClient } from "@/utils/dfxClient";
import "./leaderboard.css";

const colors = ["#FFD700", "#C0C0C0", "#CD7F32", "#0078D7", "#0099BC"];

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [maxScore, setMaxScore] = useState(500);
  const [isWeekly, setIsWeekly] = useState(false);
  const router = useRouter();

  const fetchLeaderboard = async () => {
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
  };

  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 180000);
    return () => clearInterval(interval);
  }, [isWeekly]);

  return (
    <>
      <div className="leaderboard">
        <h1 className="leaderboard-title">Leaderboard</h1>
        <button className="toggle-button" onClick={() => setIsWeekly(!isWeekly)}>
          {isWeekly ? "Show All-Time" : "Show Weekly"}
        </button>
        <div className="leaders">
          {leaders.length > 0 ? (
            leaders.map((el, i) => (
              <div key={el.id} className={`leader ${i < 3 ? "top-leader" : ""}`}>
                <div className="leader-wrap">
                  <div className="leader-rank" style={{ backgroundColor: i < 3 ? colors[i] : "transparent" }}>
                    {i + 1}
                  </div>
                  <div className="leader-name">{el.name}</div>
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
      </div>
      <button className="game-button" onClick={() => router.push("/game")}>
        ▶️ Play
      </button>
    </>
  );
};

export default Leaderboard;
