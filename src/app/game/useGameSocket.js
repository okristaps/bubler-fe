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
  recentlyPopped: [],
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

  const { isPaused, isFrozen, isDark, gameStatus, score, lives, elapsedTime, connected, bubbles, recentlyPopped } =
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

              const now = Date.now();
              const poppedIdsToSkip = recentlyPopped.filter((p) => now - p.poppedAt < 2000).map((p) => p.id);

              console.log("[Client] poppedIdsToSkip (popped <2s ago):", poppedIdsToSkip);

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

              console.log(
                "[Client] final deduped bubble IDs:",
                updatedBubbles.map((b) => b.id)
              );

              const filteredPopped = recentlyPopped.filter((p) => now - p.poppedAt < 2000);

              mergeState({
                bubbles: updatedBubbles,
                recentlyPopped: filteredPopped,
              });

              console.log(
                "[Client] final local bubble IDs after merge:",
                updatedBubbles.map((b) => b.id)
              );
            } else {
              console.log("[Client] Received 'game-state' but isPaused=true, ignoring.");
            }
          }

          if (data.type === "game-paused") {
            console.log("[Client] 'game-paused' event from server.");
            mergeState({ isPaused: true });
          }
          if (data.type === "game-resumed") {
            console.log("[Client] 'game-resumed' event from server.");
            mergeState({ isPaused: false });
          }
          if (data.type === "freeze-active") {
            console.log("[Client] 'freeze-active' event from server.");
            mergeState({ isFrozen: true });
          }
          if (data.type === "freeze-ended") {
            console.log("[Client] 'freeze-ended' event from server.");
            mergeState({ isFrozen: false });
          }
          if (data.type === "darkness-active") {
            console.log("[Client] 'darkness-active' event from server.");
            mergeState({ isDark: true });
          }
          if (data.type === "darkness-ended") {
            console.log("[Client] 'darkness-ended' event from server.");
            mergeState({ isDark: false });
          }
        } catch (error) {
          console.error("[Client] ❌ Invalid WebSocket message:", event.data);
        }
      };

      ws.onclose = () => {
        console.log("[Client] WebSocket closed by server.");
        mergeState({ connected: false, gameStatus: "finished" });
      };
    },
    [connected, isPaused, recentlyPopped]
  );

  const resetGame = () => {
    console.log("[Client] resetGame called.");
    dispatch({ type: "RESET_GAME" });
  };

  const pauseGame = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      console.log("[Client] Sending 'pause'.");
      socketRef.current.send(JSON.stringify({ type: "pause" }));
      mergeState({ isPaused: true });
    }
  };

  const resumeGame = () => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      console.log("[Client] Sending 'resume'.");
      socketRef.current.send(JSON.stringify({ type: "resume" }));
      mergeState({ isPaused: false });
    }
  };

  const popBubble = useCallback(
    (bubbleId) => {
      if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN && !isPaused) {
        socketRef.current.send(JSON.stringify({ type: "pop", bubbleId }));

        const newBubbles = bubbles.filter((b) => b.id !== bubbleId);
        console.log(
          "[Client] local bubble IDs after removal:",
          newBubbles.map((b) => b.id)
        );

        const now = Date.now();
        const newPopped = [...recentlyPopped, { id: bubbleId, poppedAt: now }];
        if (newPopped.length > 50) {
          newPopped.shift();
        }

        mergeState({ bubbles: newBubbles, recentlyPopped: newPopped });
      }
    },
    [bubbles, isPaused, recentlyPopped]
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
