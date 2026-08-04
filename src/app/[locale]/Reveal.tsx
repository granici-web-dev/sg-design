"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal (xu.de-style entrance). Three ways to opt an element in:
 *  - [data-reveal]        — the element fades/lifts itself in.
 *  - [data-reveal-group]  — just gets `.in` in view; masked children (.rv/.rvi,
 *                           .rvup) cascade via their own transition-delays.
 *  - [data-reveal-auto]   — the whole page shortcut: its children are auto-tagged
 *                           as fade-up items, and items inside a grid are staggered.
 *
 * Gated behind `html.reveal-on` so content stays visible if JS is off, and
 * skipped for users who prefer reduced motion. Elements already in the viewport
 * on load are shown instantly (no hidden frame → no flash).
 */
const GRID_SEL =
  ".cardfacts, .sources, .facts, .rolegrid, .cta, .wtiles, .hyps, .meta, .kvgrid, .projgrid, .phrow";

// In `auto` mode, reveal each major content block of a case page as a unit —
// no per-section markup needed. Hero blocks are excluded (they have their own
// CSS load animation and sit above the fold).
const AUTO_SEL =
  "main section > .bigcard, main .wtile, main .result, main section > .slabel, main section > .prose, " +
  // home page blocks
  "main .shead, main .projlead, main .projgrid > .proj, " +
  "main section.contact > h2, main section.contact > p, main section.contact > .cta";

export default function Reveal({ auto = false }: { auto?: boolean } = {}) {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (auto) {
      document
        .querySelectorAll<HTMLElement>(AUTO_SEL)
        .forEach((el) => el.classList.add("rva"));
    }

    // Expand every [data-reveal-auto] container into individually-revealed items.
    document.querySelectorAll<HTMLElement>("[data-reveal-auto]").forEach((c) => {
      Array.from(c.children).forEach((child) => {
        const el = child as HTMLElement;
        if (el.matches(GRID_SEL)) {
          Array.from(el.children).forEach((g, i) => {
            const gi = g as HTMLElement;
            gi.classList.add("rva");
            gi.style.transitionDelay = `${i * 0.07}s`;
          });
        } else {
          el.classList.add("rva");
        }
      });
    });

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal], [data-reveal-group], .rva",
      ),
    );
    if (!targets.length) return;

    if (reduce || !("IntersectionObserver" in window)) {
      root.classList.add("reveal-on");
      targets.forEach((el) => el.classList.add("in"));
      return;
    }

    root.classList.add("reveal-on");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0.12 },
    );

    const vh = window.innerHeight;
    for (const el of targets) {
      const r = el.getBoundingClientRect();
      // Already visible on load → reveal instantly (same tick, no hidden frame).
      if (r.top < vh && r.bottom > 0) el.classList.add("in");
      else io.observe(el);
    }

    return () => io.disconnect();
  }, [auto]);

  return null;
}
