import { useMemo } from "react";

export default function BubblesAnimation({ count = 20 }) {
  const bubbles = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const size = Math.random() * 50 + 20; // Random size between 20px and 70px
      const left = Math.random() * 100; // Random horizontal position (in percentage)
      const bottom = Math.random() * -200; // Random vertical position (in percentage)
      const duration = Math.random() * 10 + 10; // Random duration between 10s and 20s
      const delay = Math.random() * 5; // Random delay between 0s and 5s
      return { size, left, bottom, duration, delay };
    });
  }, [count]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden w-full h-full">
      {bubbles.map((bubble, index) => (
        <img
          key={index}
          src="/bubble1.png"
          alt="Bubble"
          className="bubble absolute opacity-50"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`, // Random horizontal position
            bottom: `${bubble.bottom}%`, // Random vertical position as percentage of the screen height
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
