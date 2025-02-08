"use client";
import React, { useState, useEffect } from "react";
import bubblerCanister from "@/utils/canister";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const result = await bubblerCanister.getMessage();

        console.log("Raw parsedMessage", result);

        if (result && result.text) {
          setMessage(result.text);
        } else {
          setMessage("No message found");
        }
      } catch (error) {
        console.error("Error fetching message:", error);
        setMessage("Error fetching message");
      }
    };
    console.log("????");
    fetchMessage();
  }, []);

  return <div>{message}</div>;
}
