import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "./case.css";
import { caseHtmlDe } from "./caseHtml";
import { caseHtmlEn } from "./caseHtml.en";
import { hasLocale, locales } from "../content";
import Reveal from "../Reveal";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const meta = {
  de: {
    title: "SmartPlaces — Fallstudie · Serghei Granici",
    description:
      "Fallstudie SmartPlaces: ein Web3-Geo-Netzwerk zugänglich machen — digitales Land per Bankkarte statt Wallet. +771 verkaufte Plots in der ersten Woche.",
  },
  en: {
    title: "SmartPlaces — Case study · Serghei Granici",
    description:
      "SmartPlaces case study: making a Web3 geo network accessible — digital land by bank card instead of a wallet. +771 plots sold in the first week.",
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

export default async function SmartPlacesCase({
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
