"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./leaderboard.css";

const colors = ["#FFD700", "#C0C0C0", "#CD7F32", "#0078D7", "#0099BC"];

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const [maxScore, setMaxScore] = useState(500);
  const router = useRouter();

  const getData = () => {
    let data = {
      success: true,
      leaders: [
        { id: 1, name: "Uenify", score: 350 },
        { id: 2, name: "Kekland", score: 275 },
        { id: 3, name: "Madopew", score: 220 },
        { id: 4, name: "Yussend", score: 200 },
        { id: 5, name: "Admin", score: 175 },
      ],
      maxScore: 500,
    };
    setLeaders(data.leaders);
    setMaxScore(data.maxScore);
  };

  useEffect(() => {
    getData();
    const interval = setInterval(getData, 180000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="leaderboard">
        <h1 className="leaderboard-title">Leaderboard</h1>
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
