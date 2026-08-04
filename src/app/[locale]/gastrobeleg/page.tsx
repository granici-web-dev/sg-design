import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../smartplaces/case.css";
import { caseHtmlDe } from "./caseHtml";
import { caseHtmlEn } from "./caseHtml.en";
import { hasLocale, locales } from "../content";
import Reveal from "../Reveal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const meta = {
  de: {
    title: "GastroBeleg — Fallstudie · Serghei Granici",
    description:
      "Fallstudie GastroBeleg: KI-Belegerfassung für unabhängige Restaurants in Deutschland — Lieferschein fotografieren, Positionen prüfen, DATEV-fertig exportieren. Eigenes Produktkonzept in der Design-Phase.",
  },
  en: {
    title: "GastroBeleg — Case study · Serghei Granici",
    description:
      "GastroBeleg case study: AI invoice capture for independent restaurants in Germany — photograph a delivery note, verify line items, export DATEV-ready. Own product concept in the design phase.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return hasLocale(locale) ? meta[locale] : meta.de;
}

export default async function GastroBelegCase({
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
