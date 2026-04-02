"use client";

import { useState, useEffect } from "react";
import * as gtag from "../lib/gtag";
import Image from "next/image";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie.includes("cookie_consent=");
    if (!consent) setVisible(true);
    else if (document.cookie.includes("cookie_consent=accepted")) {
      initGA();
    }
  }, []);

  // Bloquer le scroll quand visible
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Nettoyage quand le composant se démonte
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const initGA = () => {
    if (typeof window.gtag === "function") return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtagFunc() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtagFunc;

    gtagFunc("consent", "update", { analytics_storage: "granted" });
    gtagFunc("js", new Date());
    gtagFunc("config", gtag.GA_MEASUREMENT_ID, { anonymize_ip: true });
  };

  const handleAccept = () => {
    document.cookie = "cookie_consent=accepted; max-age=31536000; path=/";
    initGA();
    setVisible(false);
  };

  const handleDecline = () => {
    document.cookie = "cookie_consent=denied; max-age=31536000; path=/";
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden">
        <div className="bg-[#0C529E] flex items-center gap-4 px-6 py-4">
          <Image src="/Cookie.png" alt="Cookie Icon" width={40} height={40} />
          <h2 className="text-white text-xl font-bold">Cookie Consent</h2>
        </div>
        <div className="p-4 text-left text-gray-800 space-y-2 text-sm">
          <p>
            We use cookies to analyze website traffic and improve your experience. 
            The data controller is AMS Groupe.
          </p>
          <p>
            We use Google Analytics 4 for audience measurement and performance analysis, based on your consent. 
            Data is retained for 14 months.
          </p>
          <p>
            You have the right to access, modify, or request deletion of your personal data at any time. 
            For more information, please see our Privacy Policy or contact us at your @email.com.
          </p>
        </div>
        <div className="flex justify-end gap-4 px-6 py-4 border-t border-gray-200">
          <button
            onClick={handleDecline}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
