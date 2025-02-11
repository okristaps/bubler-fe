"use client";
import "./test.css";
import usePreventNavigation from "@/hooks/usePreventNavigation";
import useGameWebSocket from "./useGameSocket";
import GameLobby from "./components/lobby/lobby";
import GameArea from "./components/game-area/game-area";
import FinishedScreen from "./components/finished-screen/finished-screen";

export default function Game() {
  usePreventNavigation();

  const { gameState, score, lives, elapsedTime, bubbles, startGame, popBubble, resetGame, connected } =
    useGameWebSocket();

  return (
    <>
      {gameState === "" && <GameLobby startGame={startGame} connected={connected} />}
      {gameState === "playing" && (
        <GameArea score={score} lives={lives} elapsedTime={elapsedTime} bubbles={bubbles} popBubble={popBubble} />
      )}
      {gameState === "finished" && <FinishedScreen score={score} elapsedTime={elapsedTime} resetGame={resetGame} />}
    </>
  );
}
