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
      subPre: "Ich verwandle erklärungsbedürftige Produkte in ",
      subHl: "Interfaces, die man ohne Anleitung versteht",
      subPost: " — und baue sie bis zur funktionierenden App.",
      ctaWork: "Arbeiten ansehen", ctaCv: "CV herunterladen",
    },
    meta: [["Fokus", "Product · UI/UX Design"], ["Erfahrung", "Über 10 Jahre"], ["Domänen", "B2B SaaS · E-Commerce · Fintech · EdTech · Web3"], ["Standort", "Sankt Augustin, DE"]],
    work: { label: "Ausgewählte Arbeiten", h2: "Vier Produkte, ein Prinzip: Klarheit.", sub: "Vier Fallstudien mit Entscheidungen, Hypothesen — und dem, was sich nicht belegen lässt." },
    lead: { tag: "Web3 · Geo-SocialFi", title: "SmartPlaces", desc: "Digitales Land kaufen — bisher nur mit Krypto-Wallet. Nach dem Umbau auf Kartenzahlung: +771 verkaufte Plots in der ersten Woche.", more: "Fallstudie lesen" },
    projs: [
      { tag: "B2B SaaS · Fintech", title: "GastroBeleg", desc: "Der Wareneinkauf steigt um 15 % — aber niemand kann sagen, welche Position teurer wurde. Eigenes Produktkonzept.", img: "gen-gastrobeleg.jpg", alt: "Check-Scan-Motiv: Smartphone und Belege", slug: "gastrobeleg" },
      { tag: "EdTech · Design System", title: "XU", desc: "Vier Kunden-Marken, dasselbe Layout: ein Farb-Token-System, das jede Corporate Identity trägt.", img: "xu-card.jpg", alt: "XU-Lernplattform in vier Kunden-Themes — dasselbe Layout, verschiedene Marken-Farben", slug: "xu" },
      { tag: "Web3 · Geo-Social · AR", title: "SmartPlaces App", desc: "Karte, AR, Token, Governance — alles in eine App, bedienbar ohne Krypto-Wissen. 107 Screens.", img: "sp-app-hero-poster.jpg", alt: "SmartPlaces App — interaktiver Prototyp-Flow", slug: "smartplaces-app" },
    ],
    projMore: "Bald als Fallstudie",
    about: {
      label: "Über mich", h2: "Über zehn Jahre Design. Jetzt auch Code.",
      p1: "Ich gestalte seit 2014 digitale Produkte. Meine Stärke: erklärungsbedürftige Domänen in Interfaces übersetzen, die ohne Anleitung verständlich sind.",
      p2: "Seit 2025 bringe ich meine Entwürfe auch selbst ins Frontend — von der Recherche bis zum funktionierenden Produkt. 2026 habe ich eine Weiterbildung zum Fullstack-Entwickler abgeschlossen: ein Designer, der weiß, wie Software gebaut wird, und mit der Entwicklung dieselbe Sprache spricht.",
      kv: [["Rolle", "Senior UI/UX Designer"], ["Kann", "Design-Systeme · Informationsarchitektur · Prototyping · Accessibility"], ["Werkzeuge", "Figma (inkl. MCP) · Claude Code · Git / GitHub"], ["Stack", "TypeScript · React · Tailwind · Node.js · REST"], ["Sprachen", "Russisch · Deutsch (fließend) · Englisch"], ["Standort", "Sankt Augustin · Raum Köln / Bonn"]],
    },
    contact: { label: "Kontakt", h2: "Reden wir über Ihre nächste Rolle.", p: "Offen für Senior-Product/UI-UX-Design-Rollen im Raum Köln / Bonn und remote.", cv: "CV (PDF)" },
    footer: "© 2026 Serghei Granici — Senior UI/UX Designer",
    legalNav: { impressum: "Impressum", privacy: "Datenschutz" },
    consent: {
      title: "Cookies & Analyse",
      privacy: "Datenschutzerklärung",
      body: "Diese Seite nutzt Google Analytics und Microsoft Clarity, um zu verstehen, welche Arbeiten gelesen werden. Ohne Ihre Zustimmung werden keine Cookies gesetzt und keine Sitzungen aufgezeichnet — Google erhält lediglich anonyme Signale ohne Cookies. Mit Ihrer Zustimmung wird die Nutzung vollständig gemessen.",
      accept: "Akzeptieren",
      decline: "Ablehnen",
      manage: "Cookies",
    },
  },
  en: {
    htmlDescription:
      "Senior UI/UX Designer from the Cologne/Bonn area. I turn products that need explaining — B2B SaaS, E-Commerce, Fintech, EdTech, Web3 — into interfaces you understand without a manual.",
    nav: { work: "Work", about: "About", cv: "CV", contact: "Contact", switch: "Switch language" },
    hero: {
      label: "Open to new roles · Cologne / Bonn area",
      h1: "Making the complex usable.",
      subPre: "I turn products that need explaining into ",
      subHl: "interfaces you understand without a manual",
      subPost: " — and build them into a working app.",
      ctaWork: "View work", ctaCv: "Download CV",
    },
    meta: [["Focus", "Product · UI/UX Design"], ["Experience", "10+ years"], ["Domains", "B2B SaaS · E-Commerce · Fintech · EdTech · Web3"], ["Location", "Sankt Augustin, DE"]],
    work: { label: "Selected work", h2: "Four products, one principle: clarity.", sub: "Four case studies with the decisions, the bets — and what could not be proven." },
    lead: { tag: "Web3 · Geo-SocialFi", title: "SmartPlaces", desc: "Buying digital land used to require a crypto wallet. After the switch to card payment: +771 plots sold in the first week.", more: "Read case study" },
    projs: [
      { tag: "B2B SaaS · Fintech", title: "GastroBeleg", desc: "Purchasing costs climb 15 % — but nobody can say which item got more expensive. Own product concept.", img: "gen-gastrobeleg.jpg", alt: "Receipt-scan motif: smartphone and receipts", slug: "gastrobeleg" },
      { tag: "EdTech · Design System", title: "XU", desc: "Four client brands, one layout: a colour-token system that carries any corporate identity.", img: "xu-card.jpg", alt: "XU learning platform in four client themes — same layout, different brand colours", slug: "xu" },
      { tag: "Web3 · Geo-Social · AR", title: "SmartPlaces App", desc: "Map, AR, tokens, governance — all in one app, usable without crypto knowledge. 107 screens.", img: "sp-app-hero-poster.jpg", alt: "SmartPlaces App — interactive prototype flow", slug: "smartplaces-app" },
    ],
    projMore: "Case study soon",
    about: {
      label: "About", h2: "Over ten years of design. Now also code.",
      p1: "I have been designing digital products since 2014. My strength: translating domains that need explaining into interfaces that are understandable without a manual.",
      p2: "Since 2025 I also bring my designs into the frontend myself — from research to a working product. In 2026 I completed a full-stack developer certification: a designer who knows how software is built and speaks the same language as engineering.",
      kv: [["Role", "Senior UI/UX Designer"], ["Skills", "Design systems · Information architecture · Prototyping · Accessibility"], ["Tools", "Figma (incl. MCP) · Claude Code · Git / GitHub"], ["Stack", "TypeScript · React · Tailwind · Node.js · REST"], ["Languages", "Russian · German (fluent) · English"], ["Location", "Sankt Augustin · Cologne / Bonn area"]],
    },
    contact: { label: "Contact", h2: "Let's talk about your next role.", p: "Open to senior product / UI-UX design roles in the Cologne / Bonn area and remote.", cv: "CV (PDF)" },
    footer: "© 2026 Serghei Granici — Senior UI/UX Designer",
    legalNav: { impressum: "Legal notice", privacy: "Privacy" },
    consent: {
      title: "Cookies & analytics",
      privacy: "Privacy policy",
      body: "This site uses Google Analytics and Microsoft Clarity to understand which work gets read. Without your consent no cookies are set and no sessions are recorded — Google only receives anonymous, cookieless signals. Agree and usage is measured in full.",
      accept: "Accept",
      decline: "Decline",
      manage: "Cookies",
    },
  },
} as const;
