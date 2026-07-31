import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "./case.css";
import { caseHtml } from "./caseHtml";
import { hasLocale, locales } from "../content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "SmartPlaces — Fallstudie · Serghei Granici",
  description:
    "Fallstudie SmartPlaces: ein Web3-Geo-Netzwerk zugänglich machen — digitales Land per Bankkarte statt Wallet. +771 verkaufte Plots in der ersten Woche.",
};

export default async function SmartPlacesCase({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return <div dangerouslySetInnerHTML={{ __html: caseHtml }} />;
}
