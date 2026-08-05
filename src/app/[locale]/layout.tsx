import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Onest } from "next/font/google";
import "../globals.css";
import { content, hasLocale, locales } from "./content";
import AgentationDev from "../AgentationDev";
import Consent from "../Consent";
import { consentDefaultScript } from "../consent-config";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Google Consent Mode, advanced implementation: the tag loads for everyone,
// but starts with every signal denied, so nothing is stored until the banner
// says otherwise. Before consent it can still send cookieless pings — that is
// what the advanced mode buys, and what makes GA4's modelling work.
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
      {gaEnabled && (
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: consentDefaultScript }}
        />
      )}
      <body>
        {children}
        {/* Owns the banner, the consent updates sent to gtag, and Clarity —
            which stays fully gated, since a session recorder has no
            equivalent of a cookieless ping. */}
        <Consent
          texts={content[locale].consent}
          privacyHref={`/${locale}/datenschutz`}
        />
        <AgentationDev />
      </body>
      {gaEnabled && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
