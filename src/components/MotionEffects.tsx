"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (
      preference.matches ||
      !("IntersectionObserver" in window) ||
      typeof Element.prototype.animate !== "function"
    ) {
      return;
    }

    const animations = new Map<HTMLElement, Animation>();
    const visibility = new WeakMap<HTMLElement, boolean>();
    const nodes = document.querySelectorAll<HTMLElement>(
      "main > section:not(:first-child), .option-card, .person-card, .video-card",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const node = entry.target as HTMLElement;
          const visible = entry.isIntersecting || node.contains(document.activeElement);

          if (visibility.get(node) === visible) continue;
          visibility.set(node, visible);

          const previous = animations.get(node);
          const appearance = window.getComputedStyle(node);
          const fromOpacity = appearance.opacity;
          const fromTranslate = appearance.translate;
          previous?.cancel();

          // Web Animations API : aucun attribut, style inline ou classe ajouté.
          const animation = node.animate(
            [
              { opacity: fromOpacity, translate: fromTranslate },
              { opacity: visible ? 1 : 0, translate: visible ? "0 0" : "0 24px" },
            ],
            {
              duration: visible ? 550 : 250,
              easing: "cubic-bezier(0.2, 0.65, 0.3, 1)",
              fill: "forwards",
            },
          );

          animations.set(node, animation);
        }
      },
      { threshold: 0, rootMargin: "30px 0px 30px 0px" },
    );

    nodes.forEach((node) => observer.observe(node));

    // Une navigation au clavier doit toujours rendre l'élément lisible.
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      for (const node of nodes) {
        if (node.contains(event.target)) {
          animations.get(node)?.cancel();
          animations.delete(node);
          visibility.delete(node);
        }
      }
    };

    const stop = () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };

    document.addEventListener("focusin", revealFocused);
    preference.addEventListener("change", stop);

    return () => {
      stop();
      document.removeEventListener("focusin", revealFocused);
      preference.removeEventListener("change", stop);
    };
  }, [pathname]);

  return null;
}
