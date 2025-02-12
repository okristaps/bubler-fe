"use client";
import { useEffect, useState } from "react";
import "./game-stats.css";

export default function GameStats({ score, elapsedTime, lives }) {
  const [displayTime, setDisplayTime] = useState(elapsedTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayTime(elapsedTime);
    }, 500);

    return () => clearInterval(interval);
  }, [elapsedTime]);

  return (
    <>
      <h1 className="top-middle">BUBLER</h1>
      <div className="top-container">
        <div className="stat-box time top-left">⏳ {displayTime}</div>
        <div className="stat-box lives top-right">❤️ {lives}</div>
      </div>
      <div className="stat-box score bottom-center">🏆 {score}</div>
    </>
  );
}
