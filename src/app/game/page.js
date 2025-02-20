"use client";
import React, { useEffect } from "react";
import "./game-page.css";
import useGameWebSocket from "./useGameSocket";
import GameLobby from "./components/lobby/lobby";
import GameArea from "./components/game-area/game-area";
import FinishedScreen from "./components/finished-screen/finished-screen";
import Head from "next/head";
import BackgroundAudio from "@/components/audio-player";
import InstallPrompt from "./components/pwa/pwa-wrapper";

export default function Game() {
  const { gameState, score, lives, elapsedTime, bubbles, startGame, popBubble, resetGame, connected } =
    useGameWebSocket();

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

  return (
    <>
      <InstallPrompt />
      <BackgroundAudio />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />
        <meta name="theme-color" content="#ADD8E6" />
      </Head>

      <div className="game-container">
        {gameState === "" && <GameLobby startGame={startGame} connected={connected} />}
        {gameState === "playing" && (
          <GameArea score={score} lives={lives} elapsedTime={elapsedTime} bubbles={bubbles} popBubble={popBubble} />
        )}
        {gameState === "finished" && <FinishedScreen score={score} elapsedTime={elapsedTime} resetGame={resetGame} />}
      </div>
    </>
  );
}
