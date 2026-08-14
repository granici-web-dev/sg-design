import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteName } from "./seo";

// Shared by every opengraph-image route. Re-export these from the route file
// so Next writes the matching og:image:width / :height / :type tags.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Same palette as the dark .bigcard on the site.
const INK = "#17160F";
const ON_DARK = "#F3F3EC";
const ON_DARK_2 = "#ABAB9F";
const LIME = "#DCFF90";

const font = (file: string) =>
  readFile(join(process.cwd(), "assets", "fonts", file));

// The generic card, used by the homepage and by any route without a card of
// its own. A page that sets `openGraph` in generateMetadata replaces the
// parent's wholesale, so an inherited image would silently disappear — every
// route needs its own opengraph-image file.
export const siteCard = {
  // The role already sits in the card's footer line, so the label carries the
  // one thing a recruiter opening this link wants to know first.
  de: {
    label: "Offen für neue Rollen",
    title: "Komplexes bedienbar machen.",
    sub: "Über zehn Jahre Produktdesign — B2B SaaS, Fintech, EdTech, Web3. Raum Köln / Bonn.",
  },
  en: {
    label: "Open to new roles",
    title: "Making the complex usable.",
    sub: "Ten-plus years of product design — B2B SaaS, fintech, EdTech, Web3. Cologne / Bonn area.",
  },
} as const;

/**
 * The card behind every link preview. Satori supports flexbox only — no grid,
 * no subgrid — so this stays a column of rows.
 */
export async function ogCard({
  label,
  title,
  sub,
}: {
  label: string;
  title: string;
  sub: string;
}) {
  const [regular, bold] = await Promise.all([
    font("Onest-400.woff"),
    font("Onest-700.woff"),
  ]);

  // Long product names would otherwise wrap into the description.
  const titleSize = title.length > 26 ? 76 : title.length > 16 ? 92 : 108;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: INK,
          color: ON_DARK,
          fontFamily: "Onest",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 12,
              background: LIME,
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: LIME,
            }}
          >
            {label}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: -2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: ON_DARK_2,
              maxWidth: 940,
            }}
          >
            {sub}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,.12)",
            paddingTop: 28,
            fontSize: 26,
            color: ON_DARK_2,
          }}
        >
          <div style={{ display: "flex", color: ON_DARK, fontWeight: 700 }}>
            Gránici Design
          </div>
          <div style={{ display: "flex" }}>{siteName}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Onest", data: regular, weight: 400, style: "normal" },
        { name: "Onest", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
