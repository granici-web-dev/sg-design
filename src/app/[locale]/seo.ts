import type { Metadata } from "next";
import type { Locale } from "./content";

// Every absolute URL on the site — canonical links, hreflang, Open Graph tags,
// the sitemap, robots.txt — is derived from this one value. Moving to the
// custom domain is therefore a single change: set NEXT_PUBLIC_SITE_URL in the
// Vercel project and redeploy. Nothing else references a host.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sg-design-opal.vercel.app"
).replace(/\/+$/, "");

export const siteName = "Serghei Granici — Senior UI/UX Designer";

// Locale-prefix-free paths, in the order they matter for crawlers.
export const routes = [
  "",
  "/smartplaces",
  "/gastrobeleg",
  "/xu",
  "/smartplaces-app",
  "/impressum",
  "/datenschutz",
] as const;

const ogLocale: Record<Locale, string> = { de: "de_DE", en: "en_US" };
const otherLocale: Record<Locale, Locale> = { de: "en", en: "de" };

// German is what the proxy falls back to when Accept-Language says nothing
// useful, so it is also the honest x-default.
export function languageAlternates(path: string) {
  return {
    de: `/de${path}`,
    en: `/en${path}`,
    "x-default": `/de${path}`,
  };
}

/**
 * Title, description and every URL-shaped tag for one page in one locale.
 * Metadata merges shallowly in Next, so a page that sets `openGraph` replaces
 * the parent's wholesale — which is why each page builds a complete object
 * here instead of inheriting parts of one from the layout.
 */
export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const url = `/${locale}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type: "website",
      url,
      siteName,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: ogLocale[otherLocale[locale]],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
