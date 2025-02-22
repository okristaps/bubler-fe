"use client";
import React from "react";
import "./rules-modal.css";

const RulesModal = ({ onClose }) => {
  return (
    <div className="rules-modal-overlay">
      <div className="rules-modal">
        <h3 className="modal-title">📜 Game Rules</h3>
        <p>🔹 Pop as many bubbles as you can before time runs out.</p>
        <p>🔹 Different bubbles have different scores—aim for the rare ones first!</p>
        <p>🔹 Avoid missing bubbles, or you might lose points.</p>
        <p>🔹 Some bubbles are good, some are bad, choose wisely!</p>
        <p>🔹 Try to beat the highest score on the leaderboard!</p>
        <button className="close-button" onClick={onClose}>
          ❌ Close
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
