import { hasLocale, locales } from "../content";
import { ogCard, contentType, size } from "../ogCard";

export { contentType, size };
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = "GastroBeleg — Fallstudie · Serghei Granici";

const card = {
  de: {
    label: "Fallstudie · B2B SaaS",
    title: "GastroBeleg",
    sub: "Der Wareneinkauf steigt um 15 % — aber niemand kann sagen, welche Position teurer wurde. Eigenes Produktkonzept.",
  },
  en: {
    label: "Case study · B2B SaaS",
    title: "GastroBeleg",
    sub: "Food costs are up 15% — and nobody can say which line item got more expensive. Own product concept.",
  },
} as const;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return ogCard(hasLocale(locale) ? card[locale] : card.de);
}
