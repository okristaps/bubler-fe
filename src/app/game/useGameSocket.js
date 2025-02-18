import { useState, useRef, useCallback } from "react";

export default function useGameWebSocket() {
  const [gameState, setGameState] = useState("");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef(null);

  const startGame = useCallback(
    (username, wallet) => {
      if (!username || !wallet || connected) return;

      const WS_URL =
        process.env.NODE_ENV === "development" ? "ws://127.0.0.1:8787" : "wss://bubler-ws.okristaps1.workers.dev";

      const ws = new WebSocket(WS_URL);
      socketRef.current = ws;

      ws.onopen = () => {
        ws.send(JSON.stringify({ type: "join", username, wallet }));
        setConnected(true);
        setGameState("playing");
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === "game-state") {
            setScore(data.score);
            setLives(data.lives);
            setGameState(data.currentState || "playing");
            setElapsedTime(data.elapsedTime);

            setBubbles((prevBubbles) => {
              const updatedBubbles = new Map(prevBubbles.map((b) => [b.id, b]));

              data.bubbles.forEach((bubble) => {
                if (!updatedBubbles.has(bubble.id)) {
                  updatedBubbles.set(bubble.id, {
                    ...bubble,
                    createdAt: Date.now(),
                    fallTime: 10 - bubble.speed + 4,
                  });
                }
              });

              return Array.from(updatedBubbles.values());
            });
          }
        } catch (error) {
          console.error("❌ Invalid WebSocket message:", event.data);
        }
      };

      ws.onclose = () => {
        setConnected(false);
        setGameState("finished");
      };
    },
    [connected]
  );

  const resetGame = () => {
    setGameState("");
    setScore(0);
    setConnected(false);
    setLives(5);
    setElapsedTime(0);
    setBubbles([]);
  };

  const popBubble = useCallback((bubbleId) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: "pop", bubbleId }));
      setBubbles((prev) => prev.filter((b) => b.id !== bubbleId));
    }
  }, []);

  return { gameState, score, lives, elapsedTime, bubbles, startGame, popBubble, connected, resetGame };
}
