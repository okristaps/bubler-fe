"use client";
import { useEffect, useRef } from "react";

let globalAudioContext = null;
let gameOverBuffer = null;
let unlocked = false;
let hasPlayedGameOver = false;

export default function useGlobalAudio() {
  const initializedRef = useRef(false);

  const unlockAudio = async () => {
    if (!globalAudioContext) return;
    if (globalAudioContext.state === "suspended") {
      try {
        await globalAudioContext.resume();
        unlocked = true;
      } catch (e) {
        console.log("AudioContext resume failed:", e);
      }
    } else {
      unlocked = true;
    }
  };

  const playGameOverSound = () => {
    if (!unlocked || !globalAudioContext || !gameOverBuffer) {
      console.log("Game Over sound blocked or not loaded yet.");
      return;
    }
    // Prevent double-play
    if (hasPlayedGameOver) {
      console.log("Game Over sound already played once.");
      return;
    }
    hasPlayedGameOver = true;

    const source = globalAudioContext.createBufferSource();
    source.buffer = gameOverBuffer;
    source.connect(globalAudioContext.destination);
    source.start();
  };

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    if (!globalAudioContext) {
      globalAudioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    fetch("/sounds/game-over.mp3")
      .then((res) => res.arrayBuffer())
      .then((data) => globalAudioContext.decodeAudioData(data))
      .then((decoded) => {
        gameOverBuffer = decoded;
      })
      .catch((err) => console.log("Game Over sound loading error:", err));
  }, []);

  return { unlockAudio, playGameOverSound };
}
