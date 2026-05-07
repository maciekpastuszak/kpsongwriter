"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Akceptuję"
      declineButtonText="Odrzuć"
      enableDeclineButton
      cookieName="kmp_cookie_consent"
      style={{
        background: "#111",
      }}
      buttonStyle={{
        background: "#d4af37",
        color: "#000",
        borderRadius: "8px",
      }}
      declineButtonStyle={{
        background: "#333",
        color: "#fff",
        borderRadius: "8px",
      }}
    >
      Ta strona używa plików cookies do analityki i poprawnego działania
      serwisu.
    </CookieConsent>
  );
}
