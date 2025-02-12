import "./game-stats.css";

export default function GameStats({ score, elapsedTime, lives }) {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  console.log("elapsedTime", elapsedTime);

  return (
    <>
      <h1 className="top-middle">BUBLER</h1>
      <div className="top-container">
        <div className="stat-box time top-left">⏳ {formatTime(elapsedTime)}</div>
        <div className="stat-box lives top-right">❤️ {lives}</div>
      </div>
      <div className="stat-box score bottom-center">🏆 {score}</div>
    </>
  );
}
