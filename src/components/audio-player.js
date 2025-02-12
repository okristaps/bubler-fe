"use client";
import { useEffect, useRef } from "react";

export default function BackgroundAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch((err) => console.error("Audio play error:", err));
      }

      window.removeEventListener("click", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };

    window.addEventListener("click", enableAudio, { once: true });
    window.addEventListener("touchstart", enableAudio, { once: true });
  }, []);

  return <audio ref={audioRef} src="/sounds/bg.mp3" loop autoPlay preload="auto" />;
}
