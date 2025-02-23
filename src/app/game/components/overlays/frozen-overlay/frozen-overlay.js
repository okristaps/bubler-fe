"use client";
import { useEffect, useRef } from "react";
import "./frozen-overlay.css";

export default function FrozenOverlay({ isFrozen }) {
  const audioContextRef = useRef(null);
  const frostBufferRef = useRef(null);
  const wasFrozenRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

      fetch("/sounds/frost-sound.mp3")
        .then((res) => res.arrayBuffer())
        .then((arrayBuffer) => audioContextRef.current.decodeAudioData(arrayBuffer))
        .then((decodedData) => {
          frostBufferRef.current = decodedData;
        })
        .catch((err) => console.error("Frost sound loading error:", err));

      const unlockAudio = () => {
        if (frostBufferRef.current) {
          const source = audioContextRef.current.createBufferSource();
          source.buffer = frostBufferRef.current;
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
    if (isFrozen && !wasFrozenRef.current) {
      if (audioContextRef.current && frostBufferRef.current) {
        const source = audioContextRef.current.createBufferSource();
        source.buffer = frostBufferRef.current;
        source.connect(audioContextRef.current.destination);
        source.start();
      }
    }
    wasFrozenRef.current = isFrozen;
  }, [isFrozen]);

  if (!isFrozen) return null;
  return <div className="frozen-overlay" />;
}
