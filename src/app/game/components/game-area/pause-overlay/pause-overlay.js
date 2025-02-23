import React, { useState, useEffect } from "react";
import "./pause-overlay.css";

export default function PauseOverlay({ isPaused, onTogglePause, onEndGame }) {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const savedMute = localStorage.getItem("isMuted");
    if (savedMute === "true") {
      setIsMuted(true);
      const mediaElements = document.querySelectorAll("audio, video");
      mediaElements.forEach((el) => {
        el.muted = true;
      });
    }
  }, []);

  const handleToggleMute = () => {
    setIsMuted((prev) => {
      const newValue = !prev;
      localStorage.setItem("isMuted", newValue);

      const mediaElements = document.querySelectorAll("audio, video");
      mediaElements.forEach((el) => {
        el.muted = newValue;
      });

      return newValue;
    });
  };

  return (
    <>
      {!isPaused && (
        <button className="pause-overlay-button" onClick={onTogglePause}>
          <img src="/game-icons/pause.png" alt="Pause" />
        </button>
      )}

      {isPaused && (
        <div className="pause-overlay">
          <div className="pause-overlay-content">
            <div className="paused-title">Paused</div>

            <button className="leaderboard-button" onClick={onTogglePause}>
              Continue
            </button>

            <button className="game-button" onClick={onEndGame}>
              End Game
            </button>

            <button className="mute-btn" onClick={handleToggleMute}>
              <img
                src={isMuted ? "/game-icons/no-sound.png" : "/game-icons/sound.png"}
                alt={isMuted ? "Unmute" : "Mute"}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
