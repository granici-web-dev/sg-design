"use client";

import { useEffect } from "react";

// Microsoft Clarity (heatmaps + session recordings). Client-only: it needs the
// DOM, so the import is dynamic inside an effect instead of top-level — that
// keeps the library out of the server bundle entirely.
//
// The project id comes from NEXT_PUBLIC_CLARITY_PROJECT_ID. Without it (local
// dev, forks) nothing loads, so development sessions never pollute the data.
const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export default function Clarity() {
  useEffect(() => {
    if (!projectId) return;
    if (process.env.NODE_ENV !== "production") return;

    let cancelled = false;
    import("@microsoft/clarity").then((m) => {
      if (!cancelled) m.default.init(projectId);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
