import { useState, useRef, useCallback } from "react";

export default function useGameWebSocket() {
  const [isPaused, setIsPaused] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [gameState, setGameState] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [elapsedTime, setElapsedTime] = useState("0:00 / 5:00");
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
            if (!isPaused) {
              setScore(data.score);
              setLives(data.lives);
              setGameState(data.currentState || "playing");
              setElapsedTime(`${data.elapsedTime} / ${data?.timeLimit}`);

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
          }

          if (data.type === "game-paused") {
            setIsPaused(true);
          }

          if (data.type === "game-resumed") {
            setIsPaused(false);
          }
          if (data.type === "freeze-active") {
            setIsFrozen(true);
          }
          if (data.type === "freeze-ended") {
            setIsFrozen(false);
          }

          if (data.type === "darkness-active") {
            setIsDark(true);
          }
          if (data.type === "darkness-ended") {
            setIsDark(false);
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
    [connected, isPaused]
  );

  const resetGame = () => {
    setGameState("");
    setScore(0);
    setConnected(false);
    setLives(5);
    setElapsedTime("0:00 / 5:00");
    setBubbles([]);
    setIsPaused(false);
    setIsDark(false);
    setIsFrozen(false);
  };

  const pauseGame = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: "pause" }));
      setIsPaused(true);
    }
  };

  const resumeGame = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: "resume" }));
      setIsPaused(false);
    }
  };

  const popBubble = useCallback(
    (bubbleId) => {
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN && !isPaused) {
        socketRef.current.send(JSON.stringify({ type: "pop", bubbleId }));
        setBubbles((prev) => prev.filter((b) => b.id !== bubbleId));
      }
    },
    [isPaused]
  );

  return {
    gameState,
    score,
    lives,
    elapsedTime,
    bubbles,
    startGame,
    popBubble,
    connected,
    resetGame,
    isPaused,
    pauseGame,
    resumeGame,
    isDark,
    isFrozen,
  };
}
