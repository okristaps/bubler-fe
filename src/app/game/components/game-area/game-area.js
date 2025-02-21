import React, { useEffect, useRef } from "react";
import "./game-area.css";
import BubbleBackground from "../../../../components/bubble-bg";
import GameInfo from "./game-info/game-info";
import usePreventNavigation from "@/hooks/usePreventNavigation";
import BackgroundAudio from "@/components/audio-player";
import PauseOverlay from "./pause-overlay/pause-overlay";

export default function GameArea({
  score,
  lives,
  elapsedTime,
  bubbles,
  popBubble,
  isPaused,
  pauseGame,
  resumeGame,
  isFrozen,
}) {
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
        if (popBufferRef.current) {
          const bufferSource = audioContextRef.current.createBufferSource();
          bufferSource.buffer = popBufferRef.current;
          bufferSource.connect(audioContextRef.current.destination);
          bufferSource.start();
          window.removeEventListener("touchstart", unlockAudio);
          window.removeEventListener("click", unlockAudio);
        }
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
    <>
      <PauseOverlay
        isPaused={isPaused}
        onTogglePause={() => (isPaused ? resumeGame() : pauseGame())}
        onEndGame={() => window.location.reload()}
      />
      {isFrozen && <div className="frozen-overlay" />}

      <div className="game-area">
        <BackgroundAudio />
        <GameInfo score={score} elapsedTime={elapsedTime} lives={lives} />
        <BubbleBackground />

        <div className="background-logo-container z-1">
          <img src="/image6.png" alt="Game Logo" className="background-logo" />
        </div>

        <div className="bubble-container">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              id={`bubble-${bubble.id}`}
              className="bubble"
              data-type={bubble.type}
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.x}%`,
                animation: `fall ${bubble.fallTime}s linear infinite`,
                // Freeze or pause sets animation to paused
                animationPlayState: isPaused || isFrozen ? "paused" : "running",
              }}
              onClick={() => handleBubblePop(bubble.id)}
            >
              <img src={`/game-bubbles/${bubble.image}.png`} alt={bubble.type} className="bubble-image" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
