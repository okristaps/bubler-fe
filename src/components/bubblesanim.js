import { useMemo } from "react";

export default function BubblesAnimation({ count = 20, children }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const size = Math.random() * 50 + 20;
      const left = Math.random() * 100;
      const bottom = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      return { size, left, bottom, duration, delay };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden  ">
      {bubbles.map((bubble, index) => (
        <img
          key={index}
          src="/bubble1.png"
          alt="Bubble"
          className="bubble absolute opacity-50"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
            bottom: `${bubble.bottom}%`,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
      {children}
    </div>
  );
}
