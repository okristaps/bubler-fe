"use client";
import { useEffect, useState } from "react";
import GameField from "./components/GameField/GameField";
import Hero from "./components/Hero/Hero";
import GameEnd from "./components/GameEnd/GameEnd";
import "./game.css";

export default function App() {
  const [windowSize, setWindowSize] = useState({ innerWidth: 0, innerHeight: 0 });
  const [playing, setPlaying] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const [score, setScore] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [allScores, setAllScores] = useState([]);
  const [bestScore, setBestScore] = useState(JSON.parse(localStorage.getItem("best score")));

  // starting new game
  const handleNewGame = () => {
    setPlaying(true);
    setGameEnd(false);
    setScore(0);
    setFailCount(0);
  };

  useEffect(() => {
    console.log("game playing status", playing);
    console.log("game end status", gameEnd);
  }, [playing, gameEnd]);

  // end the game when fails limit exceeded
  useEffect(() => {
    if (failCount > 2) {
      setAllScores([...allScores, score]);
      setGameEnd(true);
      setPlaying(false);
    }
  }, [failCount]);

  const handleBubbleClick = (event) => {
    event.preventDefault(); // Prevent touch zooming
    setScore((prev) => prev + 10);
    event.target.remove();
  };

  useEffect(() => {
    function getWindowSize() {
      return { innerWidth: window.innerWidth, innerHeight: window.innerHeight };
    }

    setWindowSize(getWindowSize()); // Set initial size on mount

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Inside useEffect, update to support touch events
  useEffect(() => {
    const bubbles = document.querySelectorAll(".bubble");
    bubbles.forEach((bubble) => {
      bubble.addEventListener("click", handleBubbleClick);
      bubble.addEventListener("touchstart", handleBubbleClick); // Support for mobile
    });

    return () => {
      bubbles.forEach((bubble) => {
        bubble.removeEventListener("click", handleBubbleClick);
        bubble.removeEventListener("touchstart", handleBubbleClick);
      });
    };
  }, []);

  // set the best score
  useEffect(() => {
    allScores.length > 0 && setBestScore(Math.max(...allScores));
  }, [allScores]);

  // store the best score in LocalStorage
  useEffect(() => {
    localStorage.setItem("best score", JSON.stringify(bestScore));
  }, [bestScore]);

  // push best score in allScores array on initial load
  useEffect(() => {
    setAllScores([...allScores, bestScore]);
  }, []);

  // getting user screen size
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      {!playing && !gameEnd && <Hero handleNewGame={handleNewGame} />}
      {playing && !gameEnd && (
        <GameField
          windowSize={windowSize}
          setScore={setScore}
          score={score}
          failCount={failCount}
          setFailCount={setFailCount}
        />
      )}
      {gameEnd && !playing && <GameEnd score={score} handleNewGame={handleNewGame} bestScore={bestScore} />}
    </div>
  );
}
