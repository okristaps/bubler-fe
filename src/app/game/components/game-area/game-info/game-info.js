"use client";
import { useEffect, useState, useRef } from "react";
import "./game-stats.css";

export default function GameStats({ score, elapsedTime, lives }) {
  const [displayTime, setDisplayTime] = useState(elapsedTime);
  const oldLivesRef = useRef(lives);

  const audioContextRef = useRef(null);
  const livesDeductBufferRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

      fetch("/sounds/lives-deduct.mp3")
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => audioContextRef.current.decodeAudioData(arrayBuffer))
        .then((decodedData) => {
          livesDeductBufferRef.current = decodedData;
        })
        .catch((err) => console.error("Lives deduction sound loading error:", err));

      const unlockAudio = () => {
        if (livesDeductBufferRef.current) {
          const source = audioContextRef.current.createBufferSource();
          source.buffer = livesDeductBufferRef.current;
          source.connect(audioContextRef.current.destination);
          source.start(0, 0, 0.01);
        }
        window.removeEventListener("click", unlockAudio);
        window.removeEventListener("touchstart", unlockAudio);
      };

      window.addEventListener("click", unlockAudio, { once: true });
      window.addEventListener("touchstart", unlockAudio, { once: true });
    }
  }, []);

  useEffect(() => {
    if (lives < oldLivesRef.current) {
      if (audioContextRef.current && livesDeductBufferRef.current) {
        const source = audioContextRef.current.createBufferSource();
        source.buffer = livesDeductBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.start();
      }
    }

    oldLivesRef.current = lives;
  }, [lives]);

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
