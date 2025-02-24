"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TokenLiveData = () => {
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTokenData = async () => {
    try {
      const response = await fetch("https://api.icexplorer.io/api/token/detail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ledgerId: "2zq2x-miaaa-aaaam-qdfia-cai" }),
      });
      const json = await response.json();
      if (json && json.data) {
        setTokenData(json.data);
      }
    } catch (error) {
      console.error("Error fetching token data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTokenData();
    const interval = setInterval(fetchTokenData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="token-live-data"
      className="max-w-6xl mx-auto px-6 sm:px-8 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {loading && (
        <div className="flex justify-center items-center py-10">
          <svg
            className="animate-spin h-10 w-10 text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
        </div>
      )}

      {!loading && tokenData && (
        <div className="bg-pink-600 bg-opacity-80 rounded-2xl shadow-2xl p-6 sm:p-10 border border-gray-700 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
                {tokenData.name} Live Data
              </h2>

              <div className="mt-4 text-sm sm:text-lg text-gray-300 font-bold space-y-2">
                <p>
                  <span className="text-white">Ledger ID:</span> {tokenData.ledgerId}
                </p>
                <p>
                  <span className="text-white">Price:</span> {tokenData.price}
                </p>
                <p>
                  <span className="text-white">Price Change (24h):</span> {tokenData.priceChange24}%
                </p>
                <p>
                  <span className="text-white">Total Supply:</span> {tokenData.totalSupply}
                </p>
                <p>
                  <span className="text-white">Supply Cap:</span> {tokenData.supplyCap}
                </p>
                <p>
                  <span className="text-white">Market Cap:</span> {tokenData.marketCap}
                </p>
                <p>
                  <span className="text-white">Token Decimal:</span> {tokenData.tokenDecimal}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && !tokenData && (
        <div className="text-center text-gray-300">
          <p>Error loading token data.</p>
        </div>
      )}
    </motion.section>
  );
};

export default TokenLiveData;
