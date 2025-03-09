"use client";
import React, { useState, useEffect } from "react";
import "./pause-overlay.css";
import { Howler } from "howler";

export default function PauseOverlay({ isPaused, onTogglePause, onEndGame }) {
  const [isMuted, setIsMuted] = useState(false);

  // Load saved mute state on mount
  useEffect(() => {
    const savedMute = localStorage.getItem("isMuted");
    if (savedMute === "true") {
      setIsMuted(true);
    }
  }, []);

  // Mute all HTMLMediaElements (audio and video)
  useEffect(() => {
    const mediaElements = document.querySelectorAll("audio, video");
    mediaElements.forEach((el) => {
      el.muted = isMuted;
    });
  }, [isMuted]);

  // Mute sounds played via Howler
  useEffect(() => {
    Howler.mute(isMuted);
  }, [isMuted]);

  // Suspend or resume the Web Audio API context if available
  useEffect(() => {
    if (window.myAudioContext) {
      if (isMuted) {
        window.myAudioContext.suspend();
      } else {
        window.myAudioContext.resume();
      }
    }
  }, [isMuted]);

  const handleToggleMute = () => {
    setIsMuted((prev) => {
      const newValue = !prev;
      localStorage.setItem("isMuted", newValue);
      return newValue;
    });
  };

  return (
    <>
      {!isPaused && (
        <button className="pause-overlay-button" onClick={onTogglePause}>
          <img src="/vectors/BluePause.svg" alt="Pause" />
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
