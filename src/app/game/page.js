"use client";
import React from "react";
import { useRouter } from "next/navigation";
import SocialsSection from "../../../components/socials";
import Footer from "../../../components/footer";

export default function GamePage() {
  const router = useRouter();

  return (
    <div>
      <section className="w-full mx-auto px-6 sm:px-8 py-10 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-300 drop-shadow-md">
          The Game is Coming Soon!
        </h2>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed">
          We're working hard to bring you an exciting and fun-filled meme game! 🚀
        </p>
        <p className="mt-6 text-lg sm:text-xl text-gray-200">
          Stay tuned for updates and be the first to know when we launch! Follow us and join the community.
        </p>
      </section>

      {/* Back to Home Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => router.push("/")} // Navigating to home page
          className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </button>
      </div>

      {/* Socials Section */}
      <SocialsSection />

      <Footer />
    </div>
  );
}
