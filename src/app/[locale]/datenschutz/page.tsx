import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../site.css";
import "../legal.css";
import { hasLocale, locales } from "../content";
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
  const page = hasLocale(locale) ? privacy[locale] : privacy.de;
  return { title: `${page.title} · Serghei Granici`, description: page.lead };
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
