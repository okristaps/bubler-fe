"use client";
import { useEffect, useState, useRef } from "react";
import "./game-stats.css";

export default function GameStats({ score, elapsedTime, lives }) {
  const [displayTime, setDisplayTime] = useState(elapsedTime);
  const oldLivesRef = useRef(lives);
  const audioContextRef = useRef(null);
  const buffersRef = useRef({ livesAdd: null, livesDeduct: null });

  const playBuffer = (buffer) => {
    if (!audioContextRef.current || !buffer) return;
    const source = audioContextRef.current.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContextRef.current.destination);
    source.start();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioContextRef.current = audioCtx;

    Promise.all([
      fetch("/sounds/lives-add.mp3").then((r) => r.arrayBuffer()),
      fetch("/sounds/lives-deduct.mp3").then((r) => r.arrayBuffer()),
    ])
      .then(([addData, deductData]) =>
        Promise.all([audioCtx.decodeAudioData(addData), audioCtx.decodeAudioData(deductData)])
      )
      .then(([addBuffer, deductBuffer]) => {
        buffersRef.current.livesAdd = addBuffer;
        buffersRef.current.livesDeduct = deductBuffer;
      })
      .catch((err) => console.error("Audio loading error:", err));

    // Resume audio context on first user gesture
    const unlockAudio = async () => {
      if (audioCtx.state === "suspended") {
        try {
          await audioCtx.resume();
        } catch (e) {
          console.log("AudioContext resume failed:", e);
        }
      }
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
  }, []);

  useEffect(() => {
    const oldLives = oldLivesRef.current;
    if (!audioContextRef.current) return;
    if (lives > oldLives) {
      playBuffer(buffersRef.current.livesAdd);
    } else if (lives < oldLives) {
      playBuffer(buffersRef.current.livesDeduct);
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
