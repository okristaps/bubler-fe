"use client";

import { useState, useEffect } from "react";
import { Share, PlusSquare } from "lucide-react";
import "./pwa.css";

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
    setIsAndroid(/Android/i.test(navigator.userAgent));
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  if (isStandalone || !isMobile) {
    return null;
  }

  return (
    <div className="rules-modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-120 overflow-hidden">
      <div className="rules-modal relative z-50">
        <h2 className="modal-title">Install Bubler</h2>
        <span className="   space-y-4 text-white">To install Bubler on your device:</span>
        <ol className="   space-y-4 text-lg">
          {isIOS ? (
            <>
              <li className="flex items-center justify-center space-x-3  text-white ">
                <span className="text-white text-center">Tap the "Share" button</span>
              </li>
              <li className="flex items-center  space-x-3  text-white text-center">
                <span className="text-white text-center">Select "Add to Home Screen"</span>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center space-x-3  text-white">
                <Share className="w-6 h-6 text-white" />
                <span>Tap the "Settings" button</span>
              </li>
              <li className="flex items-center space-x-3  text-white">
                <PlusSquare className="w-6 h-6 text-white" />
                <span>Select "Add to Home Screen"</span>
              </li>
            </>
          )}
        </ol>
      </div>
    </div>
  );
}

export default InstallPrompt;
