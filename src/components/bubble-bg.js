"use client";
import React from "react";
import "./bubble-background.css";

const BubbleBackground = () => {
  return (
    <div className="wrapper">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="bubble">
          <span className="dot"></span>
        </div>
      ))}
    </div>
  );
};

export default BubbleBackground;
