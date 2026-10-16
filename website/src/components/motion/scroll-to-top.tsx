
"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "motion/react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const updateVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      }}
      className="fixed bottom-5 right-5 z-40 grid size-11 place-items-center rounded-full border border-white/15 bg-[var(--surface-raised)] text-lg shadow-lg hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}
