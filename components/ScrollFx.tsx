"use client";

import { useEffect } from "react";

/**
 * Drives scroll parallax for any element carrying `data-parallax="<speed>"`.
 * Uses the independent CSS `translate` property so it never fights an
 * element's `transform` (used for tilt) or the Reveal transition.
 * A single rAF loop, scheduled on scroll/resize. No-op under reduced motion.
 */
export function ScrollFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    // single-column phones: keep it calm, no parallax offsets
    if (window.innerWidth < 760) return;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    if (nodes.length === 0) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const mid = window.innerHeight / 2;
      for (const el of nodes) {
        const speed = parseFloat(el.dataset.parallax || "0");
        if (!speed) continue;
        const rect = el.getBoundingClientRect();
        // skip far-offscreen elements
        if (rect.bottom < -200 || rect.top > window.innerHeight + 200) continue;
        const center = rect.top + rect.height / 2;
        const offset = (center - mid) * speed * -1;
        el.style.translate = `0 ${offset.toFixed(1)}px`;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
