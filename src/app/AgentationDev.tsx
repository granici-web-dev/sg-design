"use client";

import dynamic from "next/dynamic";

// Agentation is a dev-only, client-side UI annotation overlay. The NODE_ENV
// guard lets the production build dead-code-eliminate the import so the package
// never ships to visitors; ssr:false because it needs the DOM.
const Agentation =
  process.env.NODE_ENV === "development"
    ? dynamic(() => import("agentation").then((m) => m.Agentation), { ssr: false })
    : () => null;

export default function AgentationDev() {
  return <Agentation />;
}
