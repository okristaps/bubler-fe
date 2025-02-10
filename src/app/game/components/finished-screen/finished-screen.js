"use client";
import "./finished-screen.css";

export default function FinishedScreen({ score, elapsedTime, resetGame }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  return (
    <div className="finished-screen">
      <h2 className="game-over-title">Game Over!</h2>
      <p className="final-score">🏆 Score: {score}</p>
      <p className="final-time">⏳ Time: {formatTime(elapsedTime)}</p>
      <button className="play-again-btn" onClick={resetGame}>
        🔄 Play Again
      </button>
    </div>
  );
}
