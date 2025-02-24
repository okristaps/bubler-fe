"use client";
import { useEffect, useRef } from "react";
import "./frozen-overlay.css";

export default function FrozenOverlay({ isFrozen }) {
  const audioContextRef = useRef(null);
  const frostBufferRef = useRef(null);
  const wasFrozenRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

    fetch("/sounds/frost-sound.mp3")
      .then((res) => res.arrayBuffer())
      .then((data) => audioContextRef.current.decodeAudioData(data))
      .then((decoded) => {
        frostBufferRef.current = decoded;
      })
      .catch((err) => console.error("Frost sound loading error:", err));

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
