import { useReducer, useRef, useCallback } from "react";

const initialState = {
  isPaused: false,
  isFrozen: false,
  isDark: false,
  gameStatus: "",
  score: 0,
  lives: 5,
  elapsedTime: "0:00 / 5:00",
  connected: false,
  bubbles: [],
  recentlyPoppedIds: [],
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

  const { isPaused, isFrozen, isDark, gameStatus, score, lives, elapsedTime, connected, bubbles, recentlyPoppedIds } =
    state;

  const mergeState = (partial) => {
    dispatch({ type: "MERGE_STATE", payload: partial });
  };

  const startGame = useCallback(
    (username, wallet) => {
      if (!username || !wallet || connected) return;

      const WS_URL =
        process.env.NODE_ENV === "development" ? "ws://127.0.0.1:8787" : "wss://bubler-ws.okristaps1.workers.dev";

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

              // filter out recently popped to avoid duplicates on bubble gen
              const updatedBubbles = [];
              data.bubbles.forEach((bubble) => {
                if (!recentlyPoppedIds.includes(bubble.id)) {
                  updatedBubbles.push({
                    ...bubble,
                    createdAt: Date.now(),
                    fallTime: 10 - bubble.speed + 4,
                  });
                }
              });
              mergeState({ bubbles: updatedBubbles });
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
          console.error("❌ Invalid WebSocket message:", event.data);
        }
      };

      ws.onclose = () => {
        mergeState({ connected: false, gameStatus: "finished" });
      };
    },
    [connected, isPaused, recentlyPoppedIds]
  );

  const resetGame = () => {
    dispatch({ type: "RESET_GAME" });
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

        const newIds = [...recentlyPoppedIds, bubbleId];
        if (newIds.length > 10) newIds.shift();

        mergeState({ bubbles: newBubbles, recentlyPoppedIds: newIds });
      }
    },
    [bubbles, isPaused, recentlyPoppedIds]
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
