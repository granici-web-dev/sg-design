"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  CONSENT_DENIED,
  CONSENT_GRANTED,
  CONSENT_STORAGE_KEY as STORAGE_KEY,
} from "./consent-config";

declare global {
  interface Window {
    // Defined by the beforeInteractive consent script in the layout.
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConsentTexts = {
  title: string;
  body: string;
  accept: string;
  decline: string;
};

type Choice = "granted" | "denied";

const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

// Same production gate as before: the ids exist in every environment, but the
// trackers themselves only run on the deployed site. The banner still renders
// in dev so its design can be worked on.
const isProd = process.env.NODE_ENV === "production";

/* ---------- the stored choice, as an external store ----------
   localStorage is not React state, so it is read through useSyncExternalStore:
   that keeps the server render and the hydrating client render in agreement,
   and picks up a decision made in another tab via the `storage` event. */

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getChoice(): Choice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function storeChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Private mode with storage blocked: the choice holds for this page view.
  }
  for (const l of listeners) l();
}

// Cookies already dropped by GA/Clarity outlive a withdrawn consent, so a
// "decline" that follows an earlier "accept" has to remove them by hand.
function clearAnalyticsCookies() {
  const prefixes = ["_ga", "_gid", "_gat", "_clck", "_clsk"];
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const entry of document.cookie.split(";")) {
    const name = entry.split("=")[0]?.trim();
    if (!name || !prefixes.some((p) => name.startsWith(p))) continue;
    for (const d of domains) {
      document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${
        d ? `; domain=${d}` : ""
      }`;
    }
  }
}

export default function Consent({ texts }: { texts: ConsentTexts }) {
  const choice = useSyncExternalStore(subscribe, getChoice, () => null);
  // The server cannot know what this visitor chose, so nothing renders until
  // hydration — otherwise the prerendered HTML would flash the banner at
  // people who decided long ago.
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);

  // null = follow the stored choice, "open" = reopened from the footer,
  // "closed" = answered or dismissed in this page view.
  const [override, setOverride] = useState<null | "open" | "closed">(null);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const clarityStarted = useRef(false);

  const open =
    hydrated && (override === "open" || (override === null && choice === null));

  // Any element marked [data-cookie-settings] — the footer links — reopens the
  // banner, so consent can be withdrawn as easily as it was given.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target?.closest("[data-cookie-settings]")) return;
      e.preventDefault();
      setOverride("open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    // Focus only when the visitor asked for the banner; taking focus on page
    // load would be intrusive.
    if (override === "open") acceptRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      // Dismissing without choosing stores nothing, so nothing loads and the
      // banner returns on the next visit.
      if (e.key === "Escape") setOverride("closed");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, override]);

  // Drop the analytics cookies unless consent actually stands — an undecided
  // visitor counts as "no", which also clears cookies left over from before
  // this banner existed. It runs after mount, and after the reload below when
  // consent was just withdrawn, so gtag is no longer alive to write its
  // session cookie straight back.
  useEffect(() => {
    if (choice === "granted") return;
    clearAnalyticsCookies();
  }, [choice]);

  // Clarity is imported only after consent, so the library is never even
  // downloaded for visitors who decline. consentV2 mirrors the Consent Mode
  // signals: measurement yes, advertising no.
  useEffect(() => {
    if (!isProd || choice !== "granted" || !clarityId) return;
    if (clarityStarted.current) return;
    clarityStarted.current = true;
    import("@microsoft/clarity").then((m) => {
      m.default.init(clarityId);
      m.default.consentV2({ ad_Storage: "denied", analytics_Storage: "granted" });
    });
  }, [choice]);

  function decide(next: Choice) {
    setOverride("closed");
    storeChoice(next);
    // The consent update is what actually switches gtag's storage on or off;
    // it is sent on both answers so the tag never sits on the default.
    window.gtag?.("consent", "update", next === "granted" ? CONSENT_GRANTED : CONSENT_DENIED);
    // Clarity, unlike gtag, cannot be told to stand down once it is running —
    // withdrawing consent therefore reloads the page to unload it.
    if (next === "denied" && choice === "granted") location.reload();
  }

  return (
    <>
      {open && (
        <div
          className="cc"
          role="dialog"
          aria-modal="false"
          aria-labelledby="cc-title"
          aria-describedby="cc-body"
        >
          <p className="cc-title" id="cc-title">
            {texts.title}
          </p>
          <p className="cc-body" id="cc-body">
            {texts.body}
          </p>
          <div className="cc-row">
            <button
              ref={acceptRef}
              type="button"
              className="cc-btn cc-solid"
              onClick={() => decide("granted")}
            >
              {texts.accept}
            </button>
            <button
              type="button"
              className="cc-btn cc-ghost"
              onClick={() => decide("denied")}
            >
              {texts.decline}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
