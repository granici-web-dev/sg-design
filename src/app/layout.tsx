import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Serghei Granici — Senior UI/UX Designer",
  description:
    "Senior UI/UX Designer aus dem Raum Köln/Bonn. Ich verwandle erklärungsbedürftige Produkte — Web3, Enterprise, Pharma — in Interfaces, die man ohne Anleitung versteht.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={onest.variable}>
      <body>{children}</body>
    </html>
  );
}
