"use client";
import { useEffect, useRef } from "react";
import "./darkness-overlay.css";

export default function DarknessOverlay({ isDark }) {
  const audioContextRef = useRef(null);
  const darknessBufferRef = useRef(null);
  const wasDarkRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

    fetch("/sounds/flashbang.mp3")
      .then((res) => res.arrayBuffer())
      .then((data) => audioContextRef.current.decodeAudioData(data))
      .then((decoded) => {
        darknessBufferRef.current = decoded;
      })
      .catch((err) => console.error("Darkness sound loading error:", err));

    const unlockAudio = async () => {
      if (audioContextRef.current.state === "suspended") {
        try {
          await audioContextRef.current.resume();
        } catch (e) {}
      }
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
    };

    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
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
