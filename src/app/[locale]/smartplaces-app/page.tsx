import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../smartplaces/case.css";
import { caseHtmlDe } from "./caseHtml";
import { caseHtmlEn } from "./caseHtml.en";
import { hasLocale, locales } from "../content";
import { pageMetadata } from "../seo";
import Reveal from "../Reveal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const meta = {
  de: {
    title: "SmartPlaces App — Fallstudie · Serghei Granici",
    description:
      "Fallstudie SmartPlaces Mobile App: ein geolokales Web3-Netzwerk — Karte, Broadcasts, AR-Belohnungen und Token — als bedienbare Consumer-App. 107 Screens, ein Design-System. Design-Konzept.",
  },
  en: {
    title: "SmartPlaces App — Case study · Serghei Granici",
    description:
      "SmartPlaces Mobile App case study: a location-based Web3 network — map, broadcasts, AR rewards and tokens — as a usable consumer app. 107 screens, one design system. Design concept.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = hasLocale(locale) ? locale : "de";
  return pageMetadata({ locale: l, path: "/smartplaces-app", ...meta[l] });
}

export default async function SmartPlacesAppCase({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const html = locale === "en" ? caseHtmlEn : caseHtmlDe;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Reveal auto />
    </>
  );
}
