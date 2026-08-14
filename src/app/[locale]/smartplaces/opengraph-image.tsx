import { hasLocale, locales } from "../content";
import { ogCard, contentType, size } from "../ogCard";

export { contentType, size };
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = "SmartPlaces — Fallstudie · Serghei Granici";

const card = {
  de: {
    label: "Fallstudie · Web3",
    title: "SmartPlaces",
    sub: "Digitales Land kaufen, ohne Krypto-Wallet. Nach dem Umbau auf Kartenzahlung: +771 Plots in der ersten Woche.",
  },
  en: {
    label: "Case study · Web3",
    title: "SmartPlaces",
    sub: "Buying digital land without a crypto wallet. After the switch to card payment: +771 plots in the first week.",
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
