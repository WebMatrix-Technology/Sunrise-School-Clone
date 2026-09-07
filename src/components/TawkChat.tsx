"use client";

import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    if (document.getElementById("tawk-script")) return;

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.id = "tawk-script";
    s1.async = true;
    s1.src = "https://embed.tawk.to/6214d094a34c245641278ec6/1fsgkthio";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    return () => {
      const el = document.getElementById("tawk-script");
      if (el) el.remove();
      
      // Clean up Tawk.to generated DOM nodes if they exist
      const tawkEmbed = document.querySelector('div[id^="tawk-"]');
      if (tawkEmbed) tawkEmbed.remove();
      
      const tawkContainer = document.getElementById("tawkchat-iframe-container");
      if (tawkContainer) tawkContainer.remove();

      // Clear global variables to prevent React state collision on reload
      if (typeof window !== "undefined") {
        (window as any).Tawk_API = undefined;
        (window as any).Tawk_LoadStart = undefined;
      }
    };
  }, []);

  return null;
}
