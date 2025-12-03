"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    lingojs?: {
      initialize?: (config: Record<string, any>) => void;
    };
  }
}

export default function LingoLoader() {
  useEffect(() => {
    // Load script dynamically
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/Flowcodelab/LingoJs@main/lingo-snippet.obf.js";
    script.async = true;

    script.onload = () => {
      if (window.lingojs?.initialize) {
        window.lingojs.initialize({
          projectKey: "f1f61f8927",
          baseLanguage: "en",
          targetLanguage: "de",
          showWidget: true,
          rememberLanguage: true,
        });
      } else {
        console.warn("LingoJS failed to initialize");
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}
