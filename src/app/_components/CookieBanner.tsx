"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("foncior_cookie_consent");
    if (!consent) {
      setShowBanner(true); 
    } else if (consent === "true") {
      setHasConsent(true); 
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("foncior_cookie_consent", "true");
    setHasConsent(true);
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("foncior_cookie_consent", "false");
    setHasConsent(false);
    setShowBanner(false);
  };

  return (
    <>
      {hasConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-Z88QVP531B"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Configuration de la sonde avec remontée de la page active
              gtag('config', 'G-Z88QVP531B', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {showBanner && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 flex flex-col gap-4 animate-in slide-in-from-bottom-5">
          <div>
            <h3 className="text-lg font-bold text-[#1b5346] mb-2">Respect de votre vie privée</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nous utilisons des cookies (Google Analytics) uniquement pour mesurer l&apos;audience de notre site et l&apos;améliorer. Aucune donnée n&apos;est revendue.
            </p>
          </div>
          
          <div className="flex flex-col mt-2">
            <Button 
              onClick={acceptCookies}
              className="w-full bg-[#1b5346] hover:bg-[#123a31] text-white py-5 text-md font-medium shadow-md transition-all active:scale-95"
            >
              Accepter les cookies
            </Button>
          </div>
          
          <div className="flex justify-between items-center mt-1 px-1">
            <button
              onClick={declineCookies}
              className="text-xs text-gray-400 hover:text-gray-700 underline transition-colors"
            >
              Continuer sans accepter
            </button>
            
            <Link href="/politique-de-confidentialite" className="text-xs text-gray-400 hover:text-[#1b5346] underline">
              En savoir plus
            </Link>
          </div>
        </div>
      )}
    </>
  );
}