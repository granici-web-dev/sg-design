import { hasLocale, locales } from "../content";
import { ogCard, siteCard, contentType, size } from "../ogCard";

// Legal pages get the generic card: rarely shared, but a page that sets
// openGraph drops any inherited image, so without this they would preview bare.
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
