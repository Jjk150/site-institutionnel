"use client";

import { useEffect } from "react";

const SCRIPT_ID = "google-adsense-loader";
const SCRIPT_URL =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3596384386383833";

export default function AdSenseLoader() {
  useEffect(() => {
    let idleId: number | undefined;
    let timerId: number | undefined;
    let disposed = false;

    const loadScript = () => {
      if (
        disposed ||
        document.getElementById(SCRIPT_ID) ||
        document.querySelector(
          'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]',
        )
      ) {
        return;
      }

      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = SCRIPT_URL;
      document.head.appendChild(script);
    };

    const schedule = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(loadScript);
      } else {
        timerId = window.setTimeout(loadScript, 0);
      }
    };

    if (document.readyState === "complete") {
      schedule();
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      disposed = true;
      window.removeEventListener("load", schedule);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
      // Le script déjà exécuté reste unique pendant la navigation.
    };
  }, []);

  return null;
}
