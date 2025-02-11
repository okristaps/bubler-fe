"use client";
import { useForm } from "react-hook-form";
import "./game-lobby.css";
import BubbleBackground from "../../../../../components/bubble-bg";

export default function GameLobby({ startGame, connected }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.username && data.wallet) {
      startGame(data.username, data.wallet);
    }
  };

  return (
    <div>
      <BubbleBackground />

      <h1 className="text-[59px] text-center mt-10  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-2xl animate-bounce">
        BUBLER
      </h1>

      <div className="game-lobby-container">
        <p className="game-subtitle">Enter your player details to start!</p>

        <form onSubmit={handleSubmit(onSubmit)} className="game-form">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter Nickname"
              {...register("username", { required: "Nickname is required", minLength: 3 })}
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
                  value: /^[a-zA-Z0-9]{10,}$/,
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
            {connected ? "Connecting..." : "🚀 Start Game"}
          </button>
        </form>

        <p className="internet-warning">Ensure a stable internet connection while playing to avoid disconnections.</p>
      </div>
    </div>
  );
}
