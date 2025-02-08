import React, { useEffect, useState, useRef } from "react";
import Bubble from "../Bubble/Bubble";
import { motion, useAnimation } from "framer-motion";
import bubblerCanister from "@/utils/canister";

const GameField = ({ windowSize, score, setScore, failCount, setFailCount }) => {
  const [bubbles, setBubbles] = useState([]);
  const [time, setTime] = useState({ max: 3000, min: 100 });
  const controls = useAnimation();
  const gameFieldRef = useRef(null);

  useEffect(() => {
    async function fetchBubbles() {
      try {
        const fetchedBubbles = await bubblerCanister.getBubbles();
        setBubbles(fetchedBubbles);
      } catch (error) {
        console.error("Error fetching bubbles:", error);
      }
    }

    fetchBubbles();
  }, []);

  console.log("bubbles", bubbles);

  const createBubble = async () => {
    const maxSize = Math.floor(windowSize.innerWidth / 7);
    const minSize = Math.floor(maxSize / 2);
    const size = Math.floor(Math.random() * (maxSize - minSize) + minSize);

    const x = Math.floor(Math.random() * (windowSize.innerWidth - size));
    const y = 0;
    const newBubble = { size: BigInt(size), x: BigInt(x), y: BigInt(y) };

    try {
      const createdBubble = await bubblerCanister.addBubble(newBubble);

      setBubbles((prevBubbles) => [...prevBubbles, createdBubble]);
    } catch (error) {
      console.error("Error creating bubble:", error);
    }
  };

  const popBubble = async (id) => {
    setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.id !== id));
    setScore((prev) => prev + 1);

    await bubblerCanister.removeBubble(id);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createBubble();
    }, Math.random() * (time.max - time.min) + time.min);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <motion.div
      style={{
        overflow: "hidden",
        height: "100vh",
        position: "relative",
      }}
      animate={controls}
      ref={gameFieldRef}
    >
      <h1>Score: {score}</h1>
      {bubbles.map((bubble) => (
        <Bubble key={bubble.id} id={bubble.id} popBubble={popBubble} bubble={bubble} />
      ))}
    </motion.div>
  );
};

export default GameField;
