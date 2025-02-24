"use client";

import { useState, useEffect } from "react";
import { Share, PlusSquare } from "lucide-react";
import "./pwa.css";

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
    setIsAndroid(/Android/i.test(navigator.userAgent));
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  if (isStandalone || !isMobile || !showPrompt) {
    return null;
  }

  return (
    <div className="rules-modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-120 overflow-hidden">
      <div className="rules-modal relative z-50 p-4 bg-gray-800 rounded-lg">
        <button
          className="close-button absolute top-2 right-2 text-white text-xl"
          onClick={() => setShowPrompt(false)}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="modal-title text-white text-center text-2xl mb-4">Install Bubler</h2>
        <span className="block text-white mb-2 text-center">To install Bubler on your device:</span>
        <ol className="space-y-4 text-lg">
          {isIOS ? (
            <>
              <li className="flex items-center justify-center space-x-3 text-white">
                <span>Tap the "Share" button</span>
              </li>
              <li className="flex items-center justify-center space-x-3 text-white">
                <span>Select "Add to Home Screen"</span>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center justify-center space-x-3 text-white">
                <Share className="w-6 h-6" />
                <span>Tap the "Settings" button</span>
              </li>
              <li className="flex items-center justify-center space-x-3 text-white">
                <PlusSquare className="w-6 h-6" />
                <span>Select "Add to Home Screen"</span>
              </li>
            </>
          )}
        </ol>
        <p className="mt-4 text-white text-center">
          For best gaming experience, we suggest adding the app to your home screen.
        </p>
      </div>
    </div>
  );
}

export default InstallPrompt;
