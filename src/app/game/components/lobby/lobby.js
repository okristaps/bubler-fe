"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import BubbleBackground from "@/components/bubble-bg";
import "./game-lobby.css";

export default function GameLobby({ startGame, connected }) {
  const router = useRouter();
  const [showRules, setShowRules] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedWallet = localStorage.getItem("wallet");

    if (storedUsername) {
      setValue("username", storedUsername);
    }
    if (storedWallet) {
      setValue("wallet", storedWallet);
    }
  }, [setValue]);

  const onSubmit = (data) => {
    if (data.username && data.wallet) {
      localStorage.setItem("username", data.username);
      localStorage.setItem("wallet", data.wallet);

      startGame(data.username, data.wallet);

      const bgAudio = document.getElementById("bg-audio");
      if (bgAudio) {
        bgAudio.muted = false;
        bgAudio.volume = 0.4;
        bgAudio.play().catch((err) => console.log("bg audio play error:", err));
      }
    }
  };

  return (
    <div>
      <div className="game-lobby-container">
        <h1 className="text-[59px] text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-2xl animate-bounce">
          ODINCASH
        </h1>
        <p className="game-subtitle">Enter your player details to start!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="game-form">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Nickname"
              {...register("username", {
                required: "Nickname is required",
                minLength: {
                  value: 3,
                  message: "Nickname must be at least 3 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Nickname must be at most 10 characters",
                },
              })}
              className={`game-input ${errors.username ? "input-error" : ""}`}
            />
            {errors.username && <p className="error-text">{errors.username.message}</p>}
          </div>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Public Wallet Address"
              {...register("wallet", {
                required: "Wallet is required",
                pattern: {
                  value: /^(?:[a-zA-Z0-9-]{10,}|[a-fA-F0-9]{64})$/,
                  message: "Enter a valid public wallet address",
                },
              })}
              className={`game-input ${errors.wallet ? "input-error" : ""}`}
            />
            {errors.wallet && <p className="error-text">{errors.wallet.message}</p>}
            <p className="wallet-warning">
              ⚠️ Only enter your public wallet address. This is needed to send rewards for playing.
            </p>
          </div>

          <button type="submit" disabled={connected} className="game-button">
            {"🚀 Start Game"}
          </button>
        </form>

        <button
          className="leaderboard-button"
          style={{ marginTop: 20, marginBottom: 20 }}
          onClick={() => router.push("/leaderboard")}
        >
          📊 View Leaderboard
        </button>

        <a className="rules-button" href="/rules">
          📜 View Rules
        </a>

        <p className="internet-warning">Ensure a stable internet connection while playing to avoid disconnections.</p>

        <a style={{ marginTop: 20, marginBottom: 20 }} className="back-to-home" href="/">
          Back to home
        </a>
      </div>

      <BubbleBackground />

      {showRules && <RulesModal onClose={() => setShowRules(false)} />}
    </div>
  );
}
