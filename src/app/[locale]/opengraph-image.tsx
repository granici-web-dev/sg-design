import { hasLocale, locales } from "./content";
import { ogCard, siteCard, contentType, size } from "./ogCard";

export { contentType, size };
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = "Serghei Granici — Senior UI/UX Designer";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return ogCard(hasLocale(locale) ? siteCard[locale] : siteCard.de);
}
