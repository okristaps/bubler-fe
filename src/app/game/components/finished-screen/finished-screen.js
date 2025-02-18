"use client";
import { useRouter } from "next/navigation";
import BubbleBackground from "../../../../../components/bubble-bg";
import "./finished-screen.css";

export default function FinishedScreen({ score, elapsedTime, resetGame }) {
  const router = useRouter();
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  return (
    <div className="finished-screen">
      <BubbleBackground />
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
