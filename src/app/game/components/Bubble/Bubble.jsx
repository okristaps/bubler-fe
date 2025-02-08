import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Bubble = ({ bubble, popBubble, id, failBubble, setFailCount }) => {
  const bubbleRef = useRef();
  const { size, position } = bubble;

  const bubbleSize = Number(size) || 50;
  const bubbleX = Number(position?.x) || Math.floor(Math.random() * window.innerWidth);

  const fallDuration = Math.random() * 5 + 3;

  useEffect(() => {
    if (bubbleRef.current) {
      bubbleRef.current.style.width = `${bubbleSize}px`;
      bubbleRef.current.style.height = `${bubbleSize}px`;
      bubbleRef.current.style.left = `${bubbleX}px`;
    }
  }, [bubbleSize, bubbleX]);

  return (
    <motion.div
      whileTap={{
        scale: [1.1, 0],
        boxShadow: [
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          "none",
        ],
      }}
      onClick={() => popBubble(id)}
      ref={bubbleRef}
      initial={{ y: "-10%" }}
      animate={{ y: "100vh" }}
      transition={{
        duration: fallDuration,
        ease: "linear",
      }}
      onAnimationComplete={() => {
        console.log(`Bubble ${id} fell down!`);
        setFailCount((prev) => prev + 1);
        failBubble(id);
      }}
      className="bubble"
      style={{
        position: "absolute",
        left: `${bubbleX}px`,
        width: `${bubbleSize}px`,
        height: `${bubbleSize}px`,
      }}
    />
  );
};

export default Bubble;
