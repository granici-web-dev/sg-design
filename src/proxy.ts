import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["de", "en"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "de";

// Remembers the visitor's language choice so the root redirect can honor it.
// A cookie (not localStorage) is used deliberately: the redirect runs on the
// server before any page JS, and only cookies are sent with the request.
const COOKIE = "NEXT_LOCALE";
const ONE_YEAR = 60 * 60 * 24 * 365;

function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

// The locale a path already carries (`/en`, `/en/smartplaces`), or null for `/`.
function localeFromPath(pathname: string): Locale | null {
  return (
    locales.find((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)) ??
    null
  );
}

// Saved choice wins; otherwise fall back to the first Accept-Language tag.
function pickLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(COOKIE)?.value;
  if (isLocale(saved)) return saved;

  const first = (request.headers.get("accept-language") || "")
    .toLowerCase()
    .split(",")[0]
    ?.trim() ?? "";
  if (first.startsWith("en")) return "en";
  if (first.startsWith("de")) return "de";
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const current = localeFromPath(pathname);

  // Path already localized: let it through, but remember this locale as the
  // choice. Only write when it changed, so most responses stay cacheable.
  if (current) {
    if (request.cookies.get(COOKIE)?.value !== current) {
      const res = NextResponse.next();
      res.cookies.set(COOKIE, current, {
        path: "/",
        maxAge: ONE_YEAR,
        sameSite: "lax",
      });
      return res;
    }
    return;
  }

  // No locale in the path (`/`, `/smartplaces`, …): redirect to the remembered
  // or detected locale and persist the choice.
  const locale = pickLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(request.nextUrl);
  res.cookies.set(COOKIE, locale, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
  });
  return res;
}

export const config = {
  // Run on everything except Next internals and files with an extension
  // (e.g. /screens/*.jpg, /Lebenslauf_*.pdf, /favicon.ico).
  matcher: ["/((?!_next|.*\\.).*)"],
};
