"use client";
import { useEffect, useRef } from "react";
import "./game-area.css";
import BubbleBackground from "../../../../components/bubble-bg";
import GameInfo from "./game-info/game-info";
import usePreventNavigation from "@/hooks/usePreventNavigation";

export default function GameArea({ score, lives, elapsedTime, bubbles, popBubble }) {
  const audioContextRef = useRef(null);
  const popBufferRef = useRef(null);

  usePreventNavigation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

      fetch("/sounds/bubble-pop.mp3")
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => audioContextRef.current.decodeAudioData(arrayBuffer))
        .then((buffer) => {
          popBufferRef.current = buffer;
        })
        .catch((err) => console.error("Audio loading error:", err));

      const unlockAudio = () => {
        const bufferSource = audioContextRef.current.createBufferSource();
        bufferSource.buffer = popBufferRef.current;
        bufferSource.connect(audioContextRef.current.destination);
        bufferSource.start();
        window.removeEventListener("touchstart", unlockAudio);
        window.removeEventListener("click", unlockAudio);
      };

      window.addEventListener("touchstart", unlockAudio, { once: true });
      window.addEventListener("click", unlockAudio, { once: true });
    }
  }, []);

  const handleBubblePop = (bubbleId) => {
    if (audioContextRef.current && popBufferRef.current) {
      const bufferSource = audioContextRef.current.createBufferSource();
      bufferSource.buffer = popBufferRef.current;
      bufferSource.connect(audioContextRef.current.destination);
      bufferSource.start();
    }

    popBubble(bubbleId);
  };

  return (
    <div className="game-area">
      <GameInfo score={score} elapsedTime={elapsedTime} lives={lives} />
      <BubbleBackground />
      <div className="background-logo-container z-100">
        <img src="/image6.png" alt="Game Logo" className="background-logo" />
      </div>
      <div className="bubble-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            data-type={bubble.type}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              animationDuration: `${bubble.fallTime}s`,
            }}
            onClick={() => handleBubblePop(bubble.id)}
          >
            <img src={`/game-bubbles/${bubble.image}.png`} alt={bubble.type} className="bubble-image" />
          </div>
        ))}
      </div>
      <GameInfo score={score} elapsedTime={elapsedTime} lives={lives} />
    </div>
  );
}
