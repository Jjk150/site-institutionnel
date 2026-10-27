"use client";

import { useEffect, useRef } from "react";

export default function AdsterraBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const adWindow = window as typeof window & {
      atOptions?: {
        key: string;
        format: string;
        height: number;
        width: number;
        params: Record<string, string>;
      };
    };

    adWindow.atOptions = {
      key: "f68cdc663cd9d9e3e234ba67ba9e6482",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    const script = document.createElement("script");
    script.src =
      "https://bicea.org/22/f68cdc663cd9d9e3e234ba67ba9e6482";
    script.async = true;

    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <aside
      aria-label="Publicité"
      className="my-10 flex flex-col items-center gap-3 px-2"
    >
      <p className="text-xs tracking-widest text-slate-500 uppercase">
        Publicité
      </p>

      <div
        ref={containerRef}
        className="w-[300px] min-h-[250px] max-w-full"
      />
    </aside>
  );
}