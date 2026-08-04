import "server-only";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";
export const hasLocale = (v: string): v is Locale =>
  (locales as readonly string[]).includes(v);

export const content = {
  de: {
    htmlDescription:
      "Senior UI/UX Designer aus dem Raum Köln/Bonn. Ich verwandle erklärungsbedürftige Produkte — B2B SaaS, E-Commerce, Fintech, EdTech, Web3 — in Interfaces, die man ohne Anleitung versteht.",
    nav: { work: "Arbeiten", about: "Über mich", cv: "CV", contact: "Kontakt", switch: "Sprache wechseln" },
    hero: {
      label: "Offen für neue Rollen · Raum Köln / Bonn",
      h1: "Komplexes bedienbar machen.",
      subPre: "Senior UI/UX Designer, über zehn Jahre. Ich verwandle erklärungsbedürftige Produkte — ",
      subHl: "B2B SaaS, E-Commerce, Fintech, EdTech, Web3",
      subPost: " — in Interfaces, die man ohne Anleitung versteht, und bringe sie bis zur funktionierenden Fullstack-App.",
      ctaWork: "Arbeiten ansehen", ctaCv: "CV herunterladen",
    },
    meta: [["Fokus", "Product · UI/UX Design"], ["Erfahrung", "Über 10 Jahre"], ["Domänen", "B2B SaaS · E-Commerce · Fintech · EdTech · Web3"], ["Standort", "Sankt Augustin, DE"]],
    work: { label: "Ausgewählte Arbeiten", h2: "Vier Produkte, ein Prinzip: Klarheit.", sub: "Von der Fintech-SaaS bis zum Web3-Netzwerk — jede Arbeit macht etwas Erklärungsbedürftiges einfach bedienbar." },
    lead: { tag: "Web3 · Geo-SocialFi", title: "SmartPlaces", desc: "Ein geolokales Web3-Netzwerk zugänglich machen: digitales Land per Bankkarte kaufen statt per Wallet. In der ersten Woche nach dem Rollout: +771 verkaufte Plots.", more: "Fallstudie lesen" },
    projs: [
      { tag: "B2B SaaS · Fintech", title: "GastroBeleg", desc: "Belege scannen, prüfen und DATEV-konform exportieren (SKR, Pfand, USt.). Eigenes Produktkonzept.", img: "gen-gastrobeleg.jpg", alt: "Check-Scan-Motiv: Smartphone und Belege", slug: "gastrobeleg" },
      { tag: "EdTech · Design System", title: "XU", desc: "White-label-Lernplattform: eine Farb-Architektur, die sich in jede Kunden-CI einfügt — plus konsistente Content-Karten und ein fokussierter Checkout.", img: "xu-card.jpg", alt: "XU-Lernplattform in vier Kunden-Themes — dasselbe Layout, verschiedene Marken-Farben", slug: "xu" },
      { tag: "Web3 · Geo-Social · AR", title: "SmartPlaces App", desc: "Mobile-App-Konzept: die reale Welt als soziale Karte — Cluster, Radius, Broadcasts und AR-Belohnungen.", img: "sp-app-hero-poster.jpg", alt: "SmartPlaces App — interaktiver Prototyp-Flow", slug: "smartplaces-app" },
    ],
    projMore: "Bald als Fallstudie",
    about: {
      label: "Über mich", h2: "Über zehn Jahre Design. Jetzt auch Code.",
      p1: "Ich gestalte seit 2014 digitale Produkte — von Web3-Plattformen über B2B-SaaS und E-Commerce bis zu EdTech- und Fintech-Produkten. Meine Stärke: erklärungsbedürftige Domänen in Interfaces übersetzen, die ohne Anleitung verständlich sind.",
      p2: "Seit 2025 bringe ich meine Entwürfe auch selbst ins Frontend — von der Recherche bis zum funktionierenden Produkt. 2026 habe ich eine Weiterbildung zum Fullstack-Entwickler abgeschlossen: ein Designer, der weiß, wie Software gebaut wird, und mit der Entwicklung dieselbe Sprache spricht.",
      kv: [["Rolle", "Senior UI/UX Designer"], ["Kann", "User Flows · Wireframes · Prototyping · Usability-Reviews · Design-Systeme · Informationsarchitektur · Accessibility · Design-Handoff"], ["Werkzeuge", "Figma (inkl. MCP) · Claude Code · Codex · GitHub Copilot · Git / GitHub"], ["Stack", "HTML · CSS / SASS · Tailwind · JavaScript / TypeScript · React · Redux · Vite · Node.js / Express · MySQL / MongoDB · REST · Docker"], ["Sprachen", "Russisch · Deutsch (fließend) · Englisch"], ["Standort", "Sankt Augustin · Raum Köln / Bonn"]],
    },
    contact: { label: "Kontakt", h2: "Reden wir über Ihre nächste Rolle.", p: "Offen für Senior-Product/UI-UX-Design-Rollen im Raum Köln / Bonn und remote.", cv: "CV (PDF)" },
    footer: "© 2026 Serghei Granici — Senior UI/UX Designer",
  },
  en: {
    htmlDescription:
      "Senior UI/UX Designer from the Cologne/Bonn area. I turn products that need explaining — B2B SaaS, E-Commerce, Fintech, EdTech, Web3 — into interfaces you understand without a manual.",
    nav: { work: "Work", about: "About", cv: "CV", contact: "Contact", switch: "Switch language" },
    hero: {
      label: "Open to new roles · Cologne / Bonn area",
      h1: "Making the complex usable.",
      subPre: "Senior UI/UX Designer, over ten years. I turn products that need explaining — ",
      subHl: "B2B SaaS, E-Commerce, Fintech, EdTech, Web3",
      subPost: " — into interfaces you understand without a manual, and take them all the way to a working full-stack app.",
      ctaWork: "View work", ctaCv: "Download CV",
    },
    meta: [["Focus", "Product · UI/UX Design"], ["Experience", "10+ years"], ["Domains", "B2B SaaS · E-Commerce · Fintech · EdTech · Web3"], ["Location", "Sankt Augustin, DE"]],
    work: { label: "Selected work", h2: "Four products, one principle: clarity.", sub: "From a fintech SaaS to a Web3 network — every project makes something that needs explaining simply usable." },
    lead: { tag: "Web3 · Geo-SocialFi", title: "SmartPlaces", desc: "Making a geo-based Web3 network accessible: buy digital land by card instead of by wallet. In the first week after rollout: +771 plots sold.", more: "Read case study" },
    projs: [
      { tag: "B2B SaaS · Fintech", title: "GastroBeleg", desc: "Scan, verify and export receipts DATEV-compliant (SKR, deposit, VAT). Own product concept.", img: "gen-gastrobeleg.jpg", alt: "Receipt-scan motif: smartphone and receipts", slug: "gastrobeleg" },
      { tag: "EdTech · Design System", title: "XU", desc: "White-label learning platform: a colour architecture that adapts to any client's brand — plus consistent content cards and a focused checkout.", img: "xu-card.jpg", alt: "XU learning platform in four client themes — same layout, different brand colours", slug: "xu" },
      { tag: "Web3 · Geo-Social · AR", title: "SmartPlaces App", desc: "Mobile app concept: the real world as a social map — clusters, radius, broadcasts and AR rewards.", img: "sp-app-hero-poster.jpg", alt: "SmartPlaces App — interactive prototype flow", slug: "smartplaces-app" },
    ],
    projMore: "Case study soon",
    about: {
      label: "About", h2: "Over ten years of design. Now also code.",
      p1: "I have been designing digital products since 2014 — from Web3 platforms and B2B SaaS to e-commerce, EdTech and fintech products. My strength: translating domains that need explaining into interfaces that are understandable without a manual.",
      p2: "Since 2025 I also bring my designs into the frontend myself — from research to a working product. In 2026 I completed a full-stack developer certification: a designer who knows how software is built and speaks the same language as engineering.",
      kv: [["Role", "Senior UI/UX Designer"], ["Skills", "User flows · Wireframes · Prototyping · Usability reviews · Design systems · IA · Accessibility · Design handoff"], ["Tools", "Figma (incl. MCP) · Claude Code · Codex · GitHub Copilot · Git / GitHub"], ["Stack", "HTML · CSS / SASS · Tailwind · JavaScript / TypeScript · React · Redux · Vite · Node.js / Express · MySQL / MongoDB · REST · Docker"], ["Languages", "Russian · German (fluent) · English"], ["Location", "Sankt Augustin · Cologne / Bonn area"]],
    },
    contact: { label: "Contact", h2: "Let's talk about your next role.", p: "Open to senior product / UI-UX design roles in the Cologne / Bonn area and remote.", cv: "CV (PDF)" },
    footer: "© 2026 Serghei Granici — Senior UI/UX Designer",
  },
} as const;
