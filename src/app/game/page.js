"use client";
import { useEffect, useState } from "react";
import "./test.css";
import usePreventNavigation from "@/hooks/usePreventNavigation";

export default function WebSocketClient() {
  usePreventNavigation();
  const [bubbles, setBubbles] = useState([]);
  const [socket, setSocket] = useState(null);
  const [gameState, setGameState] = useState("");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(20);
  const [elapsedTime, setElapsedTime] = useState(0);
  const username = "TestPlayer";
  const wallet = "0x1234567890abcdef";

  const startGame = () => {
    const ws = new WebSocket("wss://bubler-ws.okristaps1.workers.dev");

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "join", username, wallet }));
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === "game-state") {
          if (data.lives !== undefined) setLives(data.lives);
          if (data.score !== undefined) setScore(data.score);
          if (data.currentState) setGameState(data.currentState);
          if (data.elapsedTime !== undefined) setElapsedTime(data.elapsedTime);

          setBubbles((prevBubbles) => {
            const existingBubbles = new Map(prevBubbles.map((b) => [b.id, b]));

            data.bubbles.forEach((bubble) => {
              if (!existingBubbles.has(bubble.id)) {
                existingBubbles.set(bubble.id, {
                  ...bubble,
                  createdAt: Date.now(),
                  fallTime: 10 - bubble.speed + 4,
                });
              }
            });

            return Array.from(existingBubbles.values());
          });
        }
      } catch (error) {
        console.error("❌ Invalid WebSocket message:", event.data);
      }
    };

    ws.onclose = () => console.log("❌ WebSocket disconnected");
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  useEffect(() => {
    if (gameState === "playing") {
      const interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1000);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  return (
    <div>
      {!gameState && <button onClick={startGame}>Start Game</button>}
      {gameState === "playing" && (
        <>
          <div className="game-container mr-24" style={{ paddingRight: 25 }}>
            <h2>Bubble Popping Game</h2>
            <h3 className="score-display">
              Score: {score} / Lives: {lives}
            </h3>
            <h3 className="timer-display">⏳ Time: {formatTime(elapsedTime)}</h3> {/* ✅ Show timer */}
            <div className="bubble-container">
              {bubbles.map((bubble) => (
                <div
                  key={bubble.id}
                  className="bubble"
                  style={{
                    backgroundColor: bubble.color,
                    width: `${bubble.size}px`,
                    height: `${bubble.size}px`,
                    left: `${bubble.x}%`,
                    top: `-50px`,
                    animationDuration: `${bubble.fallTime}s`,
                  }}
                  onClick={() => {
                    if (socket && socket.readyState === WebSocket.OPEN) {
                      socket.send(JSON.stringify({ type: "pop", bubbleId: bubble.id }));
                      setBubbles((prev) => prev.filter((b) => b.id !== bubble.id));
                    }
                  }}
                >
                  <span className="bubble-text">{bubble.type}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {gameState === "finished" && (
        <div className="bubble-container">
          Game over! Score: {score} | Time: {formatTime(elapsedTime)}
        </div>
      )}
    </div>
  );
}
