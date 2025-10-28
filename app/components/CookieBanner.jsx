"use client"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

const CONSENT_COOKIE = "ttd_cookie_consent";

export default function CookieBanner(){
  const [visible, setVisible] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const c = Cookies.get(CONSENT_COOKIE);
    setConsent(c ?? null);
    if(!c){
      setVisible(true);
    }
  },[]);

  function acceptAll(){
    Cookies.set(CONSENT_COOKIE, "accepted", { expires: 365 });
    setConsent("accepted");
    setVisible(false);
    // place to enable analytics / non-essential features
  }

  function refuseAll(){
    Cookies.set(CONSENT_COOKIE, "rejected", { expires: 365 });
    setConsent("rejected");
    setVisible(false);
    // ensure non-essential cookies are not created
  }

  if(!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 z-50">
      <div className="bg-white text-black rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="flex-1">
          <h3 className="font-semibold text-black">Nous utilisons des cookies</h3>
          <p className="text-sm text-gray-700">Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et proposer des fonctionnalités optionnelles. Vous pouvez accepter tous les cookies ou refuser les cookies non essentiels.</p>
          <p className="mt-2 text-xs text-gray-600">En savoir plus dans notre <Link href="/politique-confidentialite" className="underline">politique de confidentialité</Link>.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button onClick={acceptAll} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Accepter tous</button>
          <button onClick={refuseAll} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Refuser</button>
          <Link href="/politique-confidentialite" className="px-4 py-2 rounded border border-gray-300 text-sm text-gray-700 hover:bg-gray-50">Gérer</Link>
        </div>
      </div>
    </div>
  )
}
