import React from "react";
import AboutBubler from "../../components/about-bubble";
import GameplayHighlights from "../../components/gameplay-highlights";
import FutureVision from "../../components/future-vision";
import LegalDisclaimer from "../../components/legal-disclaimer";
import TopSection from "../../components/top-section";

export default function Home() {
  return (
    <div>
      <TopSection />
      <AboutBubler />
      <GameplayHighlights />
      <FutureVision />
      <LegalDisclaimer />
    </div>
  );
}
