"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "en,es,fr,de,it,pt,ar,ja,ko,ru,hi,nl,tr,pl,sv,fi,no,da,cs,el,ro,hu,bg,uk,id,ms,vi,th,fa,he,sw,zu",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
          multilanguagePage: true,
        },
        "google_translate_element"
      );
    };

    addScript();

    // Additional fix for the banner
    const checkAndHideBanner = setInterval(() => {
      const banner = document.querySelector(".goog-te-banner-frame");
      if (banner) {
        (banner as HTMLElement).style.display = "none";
        document.body.style.top = "0";
      }
    }, 100);

    return () => clearInterval(checkAndHideBanner);
  }, []);

  return (
    <div
      id="google_translate_element"
      className="google-translate-container bg-black w-full"
    ></div>
  );
}
