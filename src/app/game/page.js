"use client";
import React, { useEffect, useState } from "react";
import "./game-page.css";
import usePreventNavigation from "@/hooks/usePreventNavigation";
import useGameWebSocket from "./useGameSocket";
import GameLobby from "./components/lobby/lobby";
import GameArea from "./components/game-area/game-area";
import FinishedScreen from "./components/finished-screen/finished-screen";
import Head from "next/head";
import BackgroundAudio from "../../../components/audio-player";

export default function Game() {
  usePreventNavigation();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Function to toggle fullscreen
  const toggleFullscreen = () => {
    const gameContainer = document.getElementById("game-container");

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (gameContainer.requestFullscreen) {
        gameContainer.requestFullscreen();
      } else if (gameContainer.webkitRequestFullscreen) {
        gameContainer.webkitRequestFullscreen();
      } else if (gameContainer.msRequestFullscreen) {
        gameContainer.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    // Detect fullscreen exit and update state
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement || !!document.webkitFullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  const { gameState, score, lives, elapsedTime, bubbles, startGame, popBubble, resetGame, connected } =
    useGameWebSocket();

  return (
    <>
      <BackgroundAudio />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />
        <meta name="theme-color" content="#ADD8E6" />
      </Head>

      <div id="game-container" className={`game-container ${isFullscreen ? "fullscreen-active" : ""}`}>
        {gameState === "" && <GameLobby startGame={startGame} connected={connected} />}
        {gameState === "playing" && (
          <GameArea score={score} lives={lives} elapsedTime={elapsedTime} bubbles={bubbles} popBubble={popBubble} />
        )}
        {gameState === "finished" && <FinishedScreen score={score} elapsedTime={elapsedTime} resetGame={resetGame} />}

        {/* Fullscreen Button */}
        <button className="fullscreen-button" onClick={toggleFullscreen}>
          {isFullscreen ? "🔳 Exit Fullscreen" : "🔲 Fullscreen"}
        </button>
      </div>
    </>
  );
}
