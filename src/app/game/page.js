"use client";
import React, { useEffect } from "react";
import "./game-page.css";
import useGameWebSocket from "../../hooks/useGameSocket";
import GameLobby from "./components/lobby/lobby";
import GameArea from "./components/game-area/game-area";
import FinishedScreen from "./components/finished-screen/finished-screen";
import Head from "next/head";
import InstallPrompt from "./components/pwa/pwa-wrapper";
import useGlobalAudio from "@/hooks/useGlobalAudio";

export default function Game() {
  const {
    gameState,
    score,
    lives,
    elapsedTime,
    bubbles,
    startGame,
    popBubble,
    resetGame,
    connected,
    isPaused,
    pauseGame,
    resumeGame,
    isFrozen,
    isDark,
  } = useGameWebSocket();

  const { unlockAudio } = useGlobalAudio();

  const handleStart = async (username, wallet) => {
    await unlockAudio();
    await startGame(username, wallet);
  };

  return (
    <>
      {process.env.NODE_ENV !== "development" && <InstallPrompt />}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />
        <meta name="theme-color" content="#ADD8E6" />
      </Head>
      //
      <div className="game-container">
        {gameState === "" && <GameLobby startGame={handleStart} connected={connected} />}
        {gameState === "playing" && (
          <GameArea
            isDark={isDark}
            isFrozen={isFrozen}
            score={score}
            lives={lives}
            elapsedTime={elapsedTime}
            bubbles={bubbles}
            popBubble={popBubble}
            isPaused={isPaused}
            resumeGame={resumeGame}
            pauseGame={pauseGame}
          />
        )}
        {gameState === "finished" && <FinishedScreen score={score} elapsedTime={elapsedTime} resetGame={resetGame} />}
      </div>
    </>
  );
}
