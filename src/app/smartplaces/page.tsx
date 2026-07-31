import type { Metadata } from "next";
import "./case.css";
import { caseHtml } from "./caseHtml";

export const metadata: Metadata = {
  title: "SmartPlaces — Fallstudie · Serghei Granici",
  description:
    "Fallstudie SmartPlaces: ein Web3-Geo-Netzwerk zugänglich machen — digitales Land per Bankkarte statt Wallet. +771 verkaufte Plots in der ersten Woche.",
};

export default function SmartPlacesCase() {
  return <div dangerouslySetInnerHTML={{ __html: caseHtml }} />;
}
