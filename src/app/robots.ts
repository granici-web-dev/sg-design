import type { MetadataRoute } from "next";
import { siteUrl } from "./[locale]/seo";

// Nothing here is private, so everything is crawlable. Vercel already sends
// X-Robots-Tag: noindex on preview deployments, which keeps branch builds out
// of the index without a rule of our own.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
