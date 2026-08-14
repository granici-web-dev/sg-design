import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../site.css";
import "../legal.css";
import { hasLocale, locales } from "../content";
import { pageMetadata } from "../seo";
import { privacy } from "../legalContent";
import LegalPageView from "../LegalPageView";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = hasLocale(locale) ? locale : "de";
  const page = privacy[l];
  return pageMetadata({
    locale: l,
    path: "/datenschutz",
    title: `${page.title} · Serghei Granici`,
    description: page.lead,
  });
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return <LegalPageView locale={locale} page={privacy[locale]} />;
}
