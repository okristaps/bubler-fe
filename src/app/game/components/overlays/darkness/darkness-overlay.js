"use client";
import { useEffect, useRef } from "react";
import "./darkness-overlay.css";

export default function DarknessOverlay({ isDark }) {
  const audioContextRef = useRef(null);
  const darknessBufferRef = useRef(null);
  const wasDarkRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

      fetch("/sounds/flashbang.mp3")
        .then((res) => res.arrayBuffer())
        .then((arrayBuffer) => audioContextRef.current.decodeAudioData(arrayBuffer))
        .then((decodedData) => {
          darknessBufferRef.current = decodedData;
        })
        .catch((err) => console.error("Darkness sound loading error:", err));

      const unlockAudio = () => {
        if (darknessBufferRef.current && audioContextRef.current) {
          const source = audioContextRef.current.createBufferSource();
          source.buffer = darknessBufferRef.current;
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
    if (isDark && !wasDarkRef.current) {
      if (audioContextRef.current && darknessBufferRef.current) {
        const source = audioContextRef.current.createBufferSource();
        source.buffer = darknessBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.start();
      }
    }
    wasDarkRef.current = isDark;
  }, [isDark]);

  if (!isDark) return null;
  return <div className="darkness-overlay" />;
}
