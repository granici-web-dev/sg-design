import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["de", "en"] as const;
const defaultLocale = "de";

function pickLocale(request: NextRequest): string {
  const header = (request.headers.get("accept-language") || "").toLowerCase();
  // Prefer the first language tag the browser lists.
  const first = header.split(",")[0]?.trim() ?? "";
  if (first.startsWith("en")) return "en";
  if (first.startsWith("de")) return "de";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const locale = pickLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Run on everything except Next internals and files with an extension
  // (e.g. /screens/*.jpg, /Lebenslauf_*.pdf, /favicon.ico).
  matcher: ["/((?!_next|.*\\.).*)"],
};
