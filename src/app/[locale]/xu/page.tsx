import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../smartplaces/case.css";
import { caseHtmlDe } from "./caseHtml";
import { caseHtmlEn } from "./caseHtml.en";
import { hasLocale, locales } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const meta = {
  de: {
    title: "XU – School of Sustainability — Fallstudie · Serghei Granici",
    description:
      "Fallstudie XU – School of Sustainability: eine semantische Farb-Architektur für eine White-label-Lernplattform, die sich in jede Kunden-CI einfügt — plus konsistente Content-Komponenten und ein fokussierter Checkout. Agentur-seitig, 2021–2022.",
  },
  en: {
    title: "XU – School of Sustainability — Case study · Serghei Granici",
    description:
      "XU – School of Sustainability case study: a semantic colour architecture for a white-label learning platform that adapts to any client's brand — plus consistent content components and a focused checkout. Agency-side, 2021–2022.",
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

export default async function XuCase({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const html = locale === "en" ? caseHtmlEn : caseHtmlDe;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
