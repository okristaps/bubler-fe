import { useReducer, useRef, useCallback } from "react";

const initialState = {
  isPaused: false,
  isFrozen: false,
  isDark: false,
  gameStatus: "",
  score: 0,
  lives: 10,
  elapsedTime: "0:00 / 5:00",
  connected: false,
  bubbles: [],
};

function gameReducer(state, action) {
  switch (action.type) {
    case "MERGE_STATE":
      return { ...state, ...action.payload };
    case "RESET_GAME":
      return { ...initialState };
    default:
      return state;
  }
}

export default function useGameWebSocket() {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const socketRef = useRef(null);
  //  ref to track recently popped bubbles for immediate updates
  const recentlyPoppedRef = useRef([]);

  const { isPaused, isFrozen, isDark, gameStatus, score, lives, elapsedTime, connected, bubbles } = state;

  const mergeState = (partial) => {
    dispatch({ type: "MERGE_STATE", payload: partial });
  };

  const startGame = useCallback(
    (username, wallet) => {
      if (!username || !wallet || connected) return;

      const WS_URL =
        process.env.NODE_ENV === "development" ? "ws://127.0.0.1:8787" : "wss://odincash-ws.okristaps1.workers.dev";

      const ws = new WebSocket(WS_URL);
      socketRef.current = ws;

      ws.onopen = () => {
        ws.send(JSON.stringify({ type: "join", username, wallet }));
        mergeState({ connected: true, gameStatus: "playing" });
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === "game-state") {
            if (!isPaused) {
              mergeState({
                score: data.score,
                lives: data.lives,
                gameStatus: data.currentState || "playing",
                elapsedTime: `${data.elapsedTime} / ${data.timeLimit ?? ""}`,
              });

              const now = Date.now();
              const poppedIdsToSkip = recentlyPoppedRef.current.filter((p) => now - p.poppedAt < 2000).map((p) => p.id);

              const updatedBubblesMap = new Map();
              data.bubbles.forEach((bubble) => {
                if (poppedIdsToSkip.includes(bubble.id)) {
                  return;
                }
                updatedBubblesMap.set(bubble.id, {
                  ...bubble,
                  createdAt: now,
                  fallTime: 10 - bubble.speed + 4,
                });
              });

              const updatedBubbles = Array.from(updatedBubblesMap.values());

              recentlyPoppedRef.current = recentlyPoppedRef.current.filter((p) => now - p.poppedAt < 2000);

              mergeState({
                bubbles: updatedBubbles,
              });
            }
          }

          if (data.type === "game-paused") {
            mergeState({ isPaused: true });
          }
          if (data.type === "game-resumed") {
            mergeState({ isPaused: false });
          }
          if (data.type === "freeze-active") {
            mergeState({ isFrozen: true });
          }
          if (data.type === "freeze-ended") {
            mergeState({ isFrozen: false });
          }
          if (data.type === "darkness-active") {
            mergeState({ isDark: true });
          }
          if (data.type === "darkness-ended") {
            mergeState({ isDark: false });
          }
        } catch (error) {
          console.error("[Client] ❌ Invalid WebSocket message:", event.data);
        }
      };

      ws.onclose = () => {
        mergeState({ connected: false, gameStatus: "finished" });
      };
    },
    [connected, isPaused]
  );

  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
    recentlyPoppedRef.current = [];
  };

  const pauseGame = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: "pause" }));
      mergeState({ isPaused: true });
    }
  };

  const resumeGame = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(JSON.stringify({ type: "resume" }));
      mergeState({ isPaused: false });
    }
  };

  const popBubble = useCallback(
    (bubbleId) => {
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN && !isPaused) {
        socketRef.current.send(JSON.stringify({ type: "pop", bubbleId }));

        const newBubbles = bubbles.filter((b) => b.id !== bubbleId);
        const now = Date.now();
        recentlyPoppedRef.current.push({ id: bubbleId, poppedAt: now });
        if (recentlyPoppedRef.current.length > 50) {
          recentlyPoppedRef.current.shift();
        }

        mergeState({ bubbles: newBubbles });
      }
    },
    [bubbles, isPaused]
  );

  return {
    gameState: gameStatus,
    score,
    lives,
    elapsedTime,
    bubbles,
    connected,
    isPaused,
    isDark,
    isFrozen,
    startGame,
    popBubble,
    resetGame,
    pauseGame,
    resumeGame,
  };
}
