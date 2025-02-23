"use client";
import { useRouter } from "next/navigation";

import "./finished-screen.css";
import BubbleBackground from "@/components/bubble-bg";
import { useEffect, useRef } from "react";

export default function FinishedScreen({ score, elapsedTime, resetGame }) {
  const router = useRouter();
  const audioRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      audioRef.current.currentTime = 0;

      audioRef.current.play().catch((err) => {
        console.log("Failed to play loss audio:", err);
      });
    }
  }, []);

  return (
    <div className="finished-screen">
      <BubbleBackground />
      <audio ref={audioRef} src="/sounds/game-over.mp3" preload="auto" />
      <h1 className="text-[59px] text-center  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-2xl animate-bounce">
        Game over!
      </h1>
      <p className="final-score">🏆 Score: {score}</p>
      <p className="final-time">⏳ Time: {elapsedTime}</p>

      <div className="button-container">
        <button className="game-button" onClick={() => resetGame()}>
          🔄 Play Again
        </button>
        <button className="leaderboard-button" onClick={() => router.push("/game/leaderboard")}>
          📊 View Leaderboard
        </button>
      </div>
    </div>
  );
}
