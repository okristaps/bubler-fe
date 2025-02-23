"use client";
import { useEffect, useRef } from "react";

export default function BackgroundAudio() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.4;
    audioRef.current.play().catch((err) => {
      console.log("Auto-play blocked or error:", err);
    });
  }, []);

  return <audio ref={audioRef} src="/sounds/bg.mp3" loop preload="auto" />;
}
