"use client";
import React from "react";
import AboutBUBLER from "../components/about-bubble";
import GameplayHighlights from "../components/gameplay-highlights";
import FutureVision from "../components/future-vision";
import LegalDisclaimer from "../components/legal-disclaimer";
import Footer from "../components/footer";
import SocialsSection from "../components/socials";
import RoadmapAndTokenomics from "../components/roadmap";
import WelcomeBUBLER from "@/components/welcome";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <div className="mt-20">
      <Landing />
      <AboutBUBLER />
      <RoadmapAndTokenomics />
      <GameplayHighlights />
      <FutureVision />
      <SocialsSection />
      <LegalDisclaimer />
    </div>
  );
}
