"use client";
import { useState } from "react";
import "./game-lobby.css";

export default function GameLobby({ startGame, connected }) {
  const [username, setUsername] = useState("");
  const [wallet, setWallet] = useState("");

  const handleStart = () => {
    if (username.trim() && wallet.trim()) {
      startGame(username, wallet);
    }
  };

  return (
    <div className="lobby-container">
      <h2 className="lobby-title">🎈 Welcome to Bubble Pop!</h2>
      <p className="lobby-subtitle">Enter your details to start playing.</p>

      <input
        type="text"
        placeholder="Enter Nickname"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="lobby-input"
      />
      <input
        type="text"
        placeholder="Enter Public Wallet"
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        className="lobby-input"
      />
      <button onClick={handleStart} disabled={!username.trim() || !wallet.trim() || connected} className="lobby-button">
        {connected ? "Connecting..." : "Start Game"}
      </button>
    </div>
  );
}
