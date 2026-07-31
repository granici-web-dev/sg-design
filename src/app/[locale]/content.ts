import "server-only";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";
export const hasLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

export const content = {
  de: {
    htmlDescription:
      "Senior UI/UX Designer aus dem Raum Köln/Bonn. Ich verwandle erklärungsbedürftige Produkte — Web3, Enterprise, Pharma — in Interfaces, die man ohne Anleitung versteht.",
    nav: { work: "Arbeiten", about: "Über mich", cv: "CV", contact: "Kontakt", switch: "Sprache wechseln" },
    hero: {
      label: "Offen für neue Rollen · Raum Köln / Bonn",
      h1: "Komplexes bedienbar machen.",
      subPre: "Senior UI/UX Designer, neun Jahre. Ich verwandle erklärungsbedürftige Produkte — ",
      subHl: "Web3, Enterprise, Pharma",
      subPost: " — in Interfaces, die man ohne Anleitung versteht, und bringe sie bis zum funktionierenden Frontend.",
      ctaWork: "Arbeiten ansehen", ctaCv: "CV herunterladen",
    },
    meta: [["Fokus", "Product · UI/UX Design"], ["Erfahrung", "Neun Jahre"], ["Domänen", "Web3 · Enterprise · Pharma"], ["Standort", "Sankt Augustin, DE"]],
    work: { label: "Ausgewählte Arbeiten", h2: "Vier Produkte, ein Prinzip: Klarheit.", sub: "Vom Web3-Netzwerk bis zur Pharma-Seite — jede Arbeit macht etwas Erklärungsbedürftiges einfach bedienbar." },
    lead: { tag: "Web3 · Geo-SocialFi", title: "SmartPlaces", desc: "Ein geolokales Web3-Netzwerk zugänglich machen: digitales Land per Bankkarte kaufen statt per Wallet. In der ersten Woche nach dem Rollout: +771 verkaufte Plots.", more: "Fallstudie lesen" },
    projs: [
      { tag: "B2B SaaS · Fintech", title: "GastroBeleg", desc: "Belege scannen, prüfen und DATEV-konform exportieren (SKR, Pfand, USt.). Eigenes Produktkonzept.", img: "gen-gastrobeleg.jpg", alt: "Check-Scan-Motiv: Smartphone und Belege" },
      { tag: "EdTech · Enterprise", title: "XU", desc: "Plattform für Nachhaltigkeits-Lernen: Dashboard, Kurse und Lernpfade unter einer Navigation.", img: "gen-xu.jpg", alt: "Abstraktes Motiv: Nachhaltigkeit und Lernen" },
      { tag: "Pharma · Landing", title: "Bioverde", desc: "Produktseite für ein Pharma-Präparat: klare Hierarchie, ruhige Typografie, konforme Pflichtangaben.", img: "gen-bioverde.jpg", alt: "Botanisches Motiv: grüne Blätter mit Tropfen" },
    ],
    projMore: "Bald als Fallstudie",
    about: {
      label: "Über mich", h2: "Neun Jahre Design. Jetzt auch Code.",
      p1: "Ich gestalte seit 2014 digitale Produkte — von Web3-Plattformen über Enterprise-SaaS bis zu Pharma-Seiten. Meine Stärke: erklärungsbedürftige Domänen in Interfaces übersetzen, die ohne Anleitung verständlich sind.",
      p2: "Seit 2025 bringe ich meine Entwürfe auch selbst ins Frontend — von der Recherche bis zum funktionierenden Produkt. Kein Fullstack-Versprechen, sondern ein Designer, der weiß, wie Software gebaut wird, und mit der Entwicklung dieselbe Sprache spricht.",
      kv: [["Rolle", "Senior UI/UX Designer"], ["Kann", "User Flows · Wireframes · Prototyping · Design-Systeme"], ["Werkzeuge", "Figma · Claude Code · Git"], ["Frontend", "HTML · CSS · JS/TS · React"], ["Sprachen", "Russisch · Deutsch (fließend) · Englisch"], ["Standort", "Sankt Augustin · Raum Köln / Bonn"]],
    },
    contact: { label: "Kontakt", h2: "Reden wir über Ihre nächste Rolle.", p: "Offen für Senior-Product/UI-UX-Design-Rollen im Raum Köln / Bonn und remote.", cv: "CV (PDF)" },
    footer: "© 2026 Serghei Granici — Senior UI/UX Designer",
  },
  en: {
    htmlDescription:
      "Senior UI/UX Designer from the Cologne/Bonn area. I turn products that need explaining — Web3, Enterprise, Pharma — into interfaces you understand without a manual.",
    nav: { work: "Work", about: "About", cv: "CV", contact: "Contact", switch: "Switch language" },
    hero: {
      label: "Open to new roles · Cologne / Bonn area",
      h1: "Making the complex usable.",
      subPre: "Senior UI/UX Designer, nine years. I turn products that need explaining — ",
      subHl: "Web3, Enterprise, Pharma",
      subPost: " — into interfaces you understand without a manual, and take them all the way to a working frontend.",
      ctaWork: "View work", ctaCv: "Download CV",
    },
    meta: [["Focus", "Product · UI/UX Design"], ["Experience", "Nine years"], ["Domains", "Web3 · Enterprise · Pharma"], ["Location", "Sankt Augustin, DE"]],
    work: { label: "Selected work", h2: "Four products, one principle: clarity.", sub: "From a Web3 network to a pharma page — every project makes something that needs explaining simply usable." },
    lead: { tag: "Web3 · Geo-SocialFi", title: "SmartPlaces", desc: "Making a geo-based Web3 network accessible: buy digital land by card instead of by wallet. In the first week after rollout: +771 plots sold.", more: "Read case study" },
    projs: [
      { tag: "B2B SaaS · Fintech", title: "GastroBeleg", desc: "Scan, verify and export receipts DATEV-compliant (SKR, deposit, VAT). Own product concept.", img: "gen-gastrobeleg.jpg", alt: "Receipt-scan motif: smartphone and receipts" },
      { tag: "EdTech · Enterprise", title: "XU", desc: "Platform for sustainability learning: dashboard, courses and learning paths under one navigation.", img: "gen-xu.jpg", alt: "Abstract motif: sustainability and learning" },
      { tag: "Pharma · Landing", title: "Bioverde", desc: "Product page for a pharma preparation: clear hierarchy, calm typography, compliant mandatory information.", img: "gen-bioverde.jpg", alt: "Botanical motif: green leaves with droplets" },
    ],
    projMore: "Case study soon",
    about: {
      label: "About", h2: "Nine years of design. Now also code.",
      p1: "I have been designing digital products since 2014 — from Web3 platforms and enterprise SaaS to pharma pages. My strength: translating domains that need explaining into interfaces that are understandable without a manual.",
      p2: "Since 2025 I also bring my designs into the frontend myself — from research to a working product. Not a full-stack promise, but a designer who knows how software is built and speaks the same language as engineering.",
      kv: [["Role", "Senior UI/UX Designer"], ["Skills", "User flows · Wireframes · Prototyping · Design systems"], ["Tools", "Figma · Claude Code · Git"], ["Frontend", "HTML · CSS · JS/TS · React"], ["Languages", "Russian · German (fluent) · English"], ["Location", "Sankt Augustin · Cologne / Bonn area"]],
    },
    contact: { label: "Contact", h2: "Let's talk about your next role.", p: "Open to senior product / UI-UX design roles in the Cologne / Bonn area and remote.", cv: "CV (PDF)" },
    footer: "© 2026 Serghei Granici — Senior UI/UX Designer",
  },
} as const;
