import { hasLocale, locales } from "../content";
import { ogCard, contentType, size } from "../ogCard";

export { contentType, size };
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = "SmartPlaces App — Fallstudie · Serghei Granici";

const card = {
  de: {
    label: "Fallstudie · Mobile · AR",
    title: "SmartPlaces App",
    sub: "Karte, Broadcasts, AR-Belohnungen und Token in einer App — bedienbar ohne Krypto-Wissen. 107 Screens, ein Design-System.",
  },
  en: {
    label: "Case study · Mobile · AR",
    title: "SmartPlaces App",
    sub: "Map, broadcasts, AR rewards and tokens in one app — usable without crypto knowledge. 107 screens, one design system.",
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
