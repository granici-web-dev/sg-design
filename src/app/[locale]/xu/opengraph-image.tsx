import { hasLocale, locales } from "../content";
import { ogCard, contentType, size } from "../ogCard";

export { contentType, size };
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = "XU – School of Sustainability — Fallstudie · Serghei Granici";

const card = {
  de: {
    label: "Fallstudie · EdTech",
    title: "Eine Plattform, jede Marke.",
    sub: "Ein Farb-Token-System, das jede Kunden-CI trägt — ohne die Lernplattform pro Kunde neu zu gestalten.",
  },
  en: {
    label: "Case study · EdTech",
    title: "One platform, every brand.",
    sub: "A colour-token system that carries any client's CI — without redesigning the learning platform per client.",
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
