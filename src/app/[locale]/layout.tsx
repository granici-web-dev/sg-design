import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Onest } from "next/font/google";
import "../globals.css";
import { content, hasLocale, locales } from "./content";
import AgentationDev from "../AgentationDev";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = hasLocale(locale) ? content[locale] : content.de;
  return {
    title: "Serghei Granici — Senior UI/UX Designer",
    description: t.htmlDescription,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  return (
    <html lang={locale} className={onest.variable}>
      <body>
        {children}
        <AgentationDev />
      </body>
    </html>
  );
}
