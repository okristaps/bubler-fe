import React from "react";
import AboutBubler from "../../components/about-bubble";
import GameplayHighlights from "../../components/gameplay-highlights";
import FutureVision from "../../components/future-vision";
import LegalDisclaimer from "../../components/legal-disclaimer";
import TopSection from "../../components/top-section";

export default function Home() {
  return (
    <div>
      <section className="relative flex flex-col items-center justify-start pt-10 sm:pt-12 md:pt-16  text-white p-6 sm:p-8 rounded-xl mx-auto max-w-4xl">
        <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-400 blur-3xl opacity-30 animate-pulse"></div>

        <div className="text-center">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
            The Meme Catcher on <span className="text-yellow-300">ICP Chain</span>
          </p>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-gray-200 italic">
            Where Memes Meet Gameplay Rewards! 🚀🎮
          </p>
          <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-bold text-black bg-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Start Catching Memes
          </button>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 sm:px-8 py-10 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-400 drop-shadow-lg">
          Welcome to BUBBLER!
        </h2>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
          The playful meme token on the <span className="text-yellow-300">$ICP</span> blockchain that’s here to
          revolutionize crypto gaming! 🚀 Dive into a world where memes aren’t just for laughs—they’re your ticket to
          real rewards.
        </p>
      </section>
      <AboutBubler />
      <GameplayHighlights />
      <FutureVision />
      <LegalDisclaimer />
    </div>
  );
}
