"use client";
import { useEffect, useState, useRef } from "react";
import "./game-stats.css";
import Image from "next/image";

export default function GameStats({ score, elapsedTime, lives }) {
  const [displayTime, setDisplayTime] = useState(elapsedTime);
  const oldLivesRef = useRef(lives);
  const audioContextRef = useRef(null);
  const buffersRef = useRef({ livesAdd: null, livesDeduct: null });

  const playBuffer = (buffer) => {
    if (!audioContextRef.current || !buffer) return;
    const source = audioContextRef.current.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContextRef.current.destination);
    source.start();
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioContextRef.current = audioCtx;

    Promise.all([
      fetch("/sounds/lives-add.mp3").then((r) => r.arrayBuffer()),
      fetch("/sounds/lives-deduct.mp3").then((r) => r.arrayBuffer()),
    ])
      .then(([addData, deductData]) =>
        Promise.all([audioCtx.decodeAudioData(addData), audioCtx.decodeAudioData(deductData)])
      )
      .then(([addBuffer, deductBuffer]) => {
        buffersRef.current.livesAdd = addBuffer;
        buffersRef.current.livesDeduct = deductBuffer;
      })
      .catch((err) => console.error("Audio loading error:", err));

    // Resume audio context on first user gesture
    const unlockAudio = async () => {
      if (audioCtx.state === "suspended") {
        try {
          await audioCtx.resume();
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

  useEffect(() => {
    const oldLives = oldLivesRef.current;
    if (!audioContextRef.current) return;
    if (lives > oldLives) {
      playBuffer(buffersRef.current.livesAdd);
    } else if (lives < oldLives) {
      playBuffer(buffersRef.current.livesDeduct);
    }
    oldLivesRef.current = lives;
  }, [lives]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayTime(elapsedTime);
    }, 500);
    return () => clearInterval(interval);
  }, [elapsedTime]);

  return (
    <>
      <h1 className="top-middle">BUBLER</h1>
      <div className="absolute bottom-5 ">
        <Image src="/vectors/scorebg.svg" alt="Score Background" width={300} height={80} objectFit="cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-cyan-700 font-bold text-l drop-shadow-md tracking-wide">{score}</span>
        </div>
      </div>

      <div className="absolute top-0 right-[-80px] ">
        <Image src="/vectors/lives2.svg" alt="Score Background" width={200} height={30} objectFit="cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-white font-bold text-sm mt-3 mr-5  drop-shadow-md tracking-wide">{lives}</span>
        </div>
      </div>

      <div className="absolute top-14 right-[-30px] ">
        <Image src="/vectors/time2.svg" alt="Score Background" width={200} height={30} objectFit="cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-white font-bold text-sm mt-1 ml-8 drop-shadow-md tracking-wide">{displayTime}</span>
        </div>
      </div>
    </>
  );
}
