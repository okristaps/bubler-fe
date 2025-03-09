import React, { useEffect, useRef } from "react";
import "./game-area.css";
import BubbleBackground from "../../../../components/bubble-bg";
import GameInfo from "./game-info/game-info";
import usePreventNavigation from "@/hooks/usePreventNavigation";
import BackgroundAudio from "@/components/audio-player";
import PauseOverlay from "./pause-overlay/pause-overlay";
import FrozenOverlay from "../overlays/frozen-overlay/frozen-overlay";
import DarknessOverlay from "../overlays/darkness/darkness-overlay";

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
  isDark,
}) {
  const audioContextRef = useRef(null);
  const popBufferRef = useRef(null);

  usePreventNavigation();

  useEffect(() => {
    const preventZoom = (event) => {
      if (event.ctrlKey || event.metaKey || event.deltaY !== undefined) {
        event.preventDefault();
      }
    };

    const disableKeyZoom = (event) => {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
      }
    };

    document.addEventListener("wheel", preventZoom, { passive: false });
    document.addEventListener("keydown", disableKeyZoom, { passive: false });

    return () => {
      document.removeEventListener("wheel", preventZoom);
      document.removeEventListener("keydown", disableKeyZoom);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

    fetch("/sounds/bubble-pop.mp3")
      .then((res) => res.arrayBuffer())
      .then((data) => audioContextRef.current.decodeAudioData(data))
      .then((decoded) => {
        popBufferRef.current = decoded;
      })
      .catch((err) => console.error("Audio loading error:", err));

    const unlockAudio = async () => {
      if (audioContextRef.current.state === "suspended") {
        try {
          await audioContextRef.current.resume();
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

  const handleBubblePop = (bubbleId) => {
    if (audioContextRef.current && popBufferRef.current) {
      const source = audioContextRef.current.createBufferSource();
      source.buffer = popBufferRef.current;
      source.connect(audioContextRef.current.destination);
      source.start();
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
      <FrozenOverlay isFrozen={isFrozen} />
      <DarknessOverlay isDark={isDark} />

      <div className="game-area">
        <BackgroundAudio />

        <GameInfo score={score} elapsedTime={elapsedTime} lives={lives} />
        {/* <BubbleBackground /> */}
        {/* 
        <div className="background-logo-container z-1">
          <img src="/image6.png" alt="Game Logo" className="background-logo" />
        </div> */}

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
