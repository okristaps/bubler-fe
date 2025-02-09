"use client";
import { useEffect } from "react";

export default function usePreventNavigation() {
  useEffect(() => {
    const blockBackNavigation = () => {
      history.pushState(null, "", location.href);
    };

    window.addEventListener("popstate", blockBackNavigation);
    history.pushState(null, "", location.href);

    const preventSwipeBack = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchstart", preventSwipeBack, { passive: false });

    const preventKeys = (event) => {
      if (
        (event.key === "Backspace" && !["INPUT", "TEXTAREA"].includes(event.target.tagName)) ||
        (event.altKey && event.key === "ArrowLeft")
      ) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", preventKeys);

    const warnBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "Are you sure you want to leave?";
    };

    window.addEventListener("beforeunload", warnBeforeUnload);

    document.body.style.overscrollBehaviorX = "none";

    return () => {
      window.removeEventListener("popstate", blockBackNavigation);
      document.removeEventListener("touchstart", preventSwipeBack);
      window.removeEventListener("keydown", preventKeys);
      window.removeEventListener("beforeunload", warnBeforeUnload);
      document.body.style.overscrollBehaviorX = "auto";
    };
  }, []);
}
