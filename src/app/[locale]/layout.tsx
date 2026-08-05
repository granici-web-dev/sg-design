import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Onest } from "next/font/google";
import "../globals.css";
import { content, hasLocale, locales } from "./content";
import AgentationDev from "../AgentationDev";
import Clarity from "../Clarity";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// GA4 via @next/third-parties: it loads gtag.js after hydration and tracks
// client-side route changes on its own. Same gating as Clarity — production
// only, and only when the measurement id is set.
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const gaEnabled = !!gaId && process.env.NODE_ENV === "production";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = hasLocale(locale) ? content[locale] : content.de;
  return {
    title: "Serghei Granici — Senior UI/UX Designer",
    description: t.htmlDescription,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return (
    <html lang={locale} className={onest.variable}>
      <body>
        {children}
        <Clarity />
        <AgentationDev />
      </body>
      {gaEnabled && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
