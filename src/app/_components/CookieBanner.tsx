"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("foncior_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("foncior_cookie_consent", "true");
    setShowBanner(false);
    // activer ghoogle analitics
    window.dispatchEvent(new Event("cookiesAccepted"));
  };

  const declineCookies = () => {
    localStorage.setItem("foncior_cookie_consent", "false");
    setShowBanner(false);
    // blok google analitics
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-4 animate-in slide-in-from-bottom-5">
      <div>
        <h3 className="text-lg font-bold text-[#1b5346] mb-2">Respect de votre vie privée</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Nous utilisons des cookies (Google Analytics) uniquement pour mesurer l'audience de notre site et l'améliorer. Aucune donnée n'est revendue.
        </p>
      </div>
      
      <div className="flex gap-3 mt-2">
        <Button 
          variant="outline" 
          onClick={declineCookies}
          className="flex-1 text-gray-600 border-gray-200 hover:bg-gray-50"
        >
          Refuser
        </Button>
        <Button 
          onClick={acceptCookies}
          className="flex-1 bg-[#1b5346] hover:bg-[#123a31] text-white"
        >
          Accepter
        </Button>
      </div>
      
      <div className="text-center mt-1">
        <Link href="/politique-de-confidentialite" className="text-xs text-gray-400 hover:text-[#1b5346] underline">
          En savoir plus
        </Link>
      </div>
    </div>
  );
}