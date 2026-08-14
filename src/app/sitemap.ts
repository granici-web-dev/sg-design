import type { MetadataRoute } from "next";
import { locales } from "./[locale]/content";
import { languageAlternates, routes, siteUrl } from "./[locale]/seo";

// Both language versions are listed as their own entry, each pointing at the
// other through hreflang — that is what Google asks for on a two-locale site.
// No lastModified: a deploy is not the same thing as a changed page, and a
// date that moves on every build is a signal crawlers learn to ignore.
const priority = (path: string) =>
  path === "" ? 1 : path === "/impressum" || path === "/datenschutz" ? 0.3 : 0.8;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      priority: priority(path),
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languageAlternates(path)).map(([lang, href]) => [
            lang,
            `${siteUrl}${href}`,
          ]),
        ),
      },
    })),
  );
}
