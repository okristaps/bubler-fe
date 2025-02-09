"use client";
import { useEffect, useState } from "react";
import "./test.css";

export default function WebSocketClient() {
  const [bubbles, setBubbles] = useState([]);
  const [socket, setSocket] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameState, setGameState] = useState("");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(20);
  const username = "TestPlayer";
  const wallet = "0x1234567890abcdef";

  const startGame = () => {
    const ws = new WebSocket("ws://127.0.0.1:8787");

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "join", username, wallet }));
      setSocket(ws);
    };

    ws.onmessage = (event) => {
      console.log("📩 Received message from server:", event.data);
      try {
        const data = JSON.parse(event.data);

        if (data.type === "game-state") {
          console.log("🫧 Updating bubbles:", data.bubbles);

          if (data.lives) {
            setLives(data.lives);
          }

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

        if (data.type === "bubble-popped") {
          setScore(data.score);
        }
      } catch (error) {
        console.error("❌ Invalid WebSocket message:", event.data);
      }
    };

    ws.onclose = () => console.log("❌ WebSocket disconnected");

    setGameStarted(true);
  };

  const popBubble = (bubbleId) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      console.log(`🎯 Popping bubble: ${bubbleId}`);
      socket.send(JSON.stringify({ type: "pop", bubbleId }));

      setBubbles((prev) => prev.filter((bubble) => bubble.id !== bubbleId));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => {
          return true;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, [socket]);

  return (
    <div>
      {!gameStarted ? (
        <button onClick={startGame}>Start Game</button>
      ) : (
        <div className="game-container pr-12">
          <h2>Bubble Popping Game</h2>
          <h3 className="score-display">
            Score: {score} / {lives}
          </h3>
          <div className="bubble-container">
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="bubble"
                style={{
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  left: `${bubble.x}%`,
                  top: `-50px`,
                  animationDuration: `${bubble.fallTime}s`,
                }}
                onClick={() => popBubble(bubble.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
