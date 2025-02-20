"use client";
import React from "react";
import AboutBUBLER from "../components/about-bubble";
import GameplayHighlights from "../components/gameplay-highlights";
import FutureVision from "../components/future-vision";
import LegalDisclaimer from "../components/legal-disclaimer";
import SocialsSection from "../components/socials";
import RoadmapAndTokenomics from "../components/roadmap";
import Landing from "@/components/landing";
import HeaderBUBLER from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <HeaderBUBLER />
      <div className="mt-20">
        <Landing />
        <AboutBUBLER />
        <RoadmapAndTokenomics />
        <GameplayHighlights />
        <FutureVision />
        <SocialsSection />
        <LegalDisclaimer />
      </div>
      <Footer />
    </>
  );
}
