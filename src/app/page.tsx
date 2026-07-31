"use client";

import "./site.css";
import { useState, type MouseEvent } from "react";

function playHover(e: MouseEvent<HTMLAnchorElement>) {
  const v = e.currentTarget.querySelector("video");
  if (v) { v.currentTime = 0; v.play().catch(() => {}); }
}
function stopHover(e: MouseEvent<HTMLAnchorElement>) {
  const v = e.currentTarget.querySelector("video");
  if (v) { v.pause(); v.load(); }
}

type Lang = "de" | "en";

const T = {
  de: {
    nav: { work: "Arbeiten", about: "Über mich", cv: "CV", contact: "Kontakt" },
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
    nav: { work: "Work", about: "About", cv: "CV", contact: "Contact" },
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

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");
  const t = T[lang];
  const other: Lang = lang === "de" ? "en" : "de";
  return (
    <>
      <header className="site" id="top">
        <div className="wrap row">
          <a className="brand" href="#top"><span className="mk"></span>Serghei Granici</a>
          <nav className="nav">
            <a className="hide-sm" href="#arbeiten">{t.nav.work}</a>
            <a className="hide-sm" href="#ueber">{t.nav.about}</a>
            <a href="/Lebenslauf_Serghei_Granici_2026.pdf">{t.nav.cv}</a>
            <button type="button" className="btn ghost" onClick={() => setLang(other)} aria-label="Sprache wechseln">{other.toUpperCase()}</button>
            <a className="btn solid" href="#kontakt">{t.nav.contact}</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="chero wrap">
          <div className="herocard">
            <div className="htext">
              <span className="hlabel"><span className="dot"></span> {t.hero.label}</span>
              <h1>{t.hero.h1}</h1>
              <p className="subt">{t.hero.subPre}<span className="hl">{t.hero.subHl}</span>{t.hero.subPost}</p>
              <div className="pill">
                <a className="btn light" href="#arbeiten">{t.hero.ctaWork} <span className="arw">↓</span></a>
                <a className="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf" style={{ borderColor: "rgba(255,255,255,.22)", color: "#EDEEEF" }}>{t.hero.ctaCv}</a>
              </div>
            </div>
            <div className="himg">
              <img className="slotimg" src="/screens/gen-portrait-blur.jpg" width={2304} height={1856} alt="Serghei Granici" decoding="async" />
            </div>
          </div>
          <div className="meta">
            {t.meta.map(([k, v]) => (<div className="c" key={k}><div className="k">{k}</div><div className="v">{v}</div></div>))}
          </div>
        </section>

        <section id="arbeiten" className="wrap">
          <div className="shead">
            <span className="slabel">{t.work.label}</span>
            <h2>{t.work.h2}</h2>
            <p className="sub">{t.work.sub}</p>
          </div>
          <div className="work">
            <a className="projlead" href="/smartplaces" onMouseEnter={playHover} onMouseLeave={stopHover}>
              <div className="pcover">
                <video className="pvid" muted loop playsInline preload="metadata" width={3840} height={2400} poster="/screens/sp-hero-poster.jpg" aria-label="SmartPlaces Screencast">
                  <source src="/screens/sp-screencast.mp4" type="video/mp4" />
                  <source src="/screens/sp-screencast.webm" type="video/webm" />
                </video>
              </div>
              <div className="lbody">
                <span className="ptag">{t.lead.tag}</span>
                <h3>{t.lead.title}</h3>
                <p>{t.lead.desc}</p>
                <span className="pmore">{t.lead.more} <span className="arw">→</span></span>
              </div>
            </a>
            <div className="projgrid">
              {t.projs.map((p) => (
                <a className="proj" href="#kontakt" key={p.title}>
                  <div className="pcover"><img className="slotimg" src={`/screens/${p.img}`} width={2304} height={1856} alt={p.alt} decoding="async" loading="lazy" /><span className="corner">↗</span></div>
                  <div className="pbody">
                    <span className="ptag2">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <span className="pmore">{t.projMore} <span className="arw">→</span></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="ueber" className="wrap">
          <div className="bigcard dark">
            <div className="about2">
              <div>
                <span className="slabel g clabel">{t.about.label}</span>
                <h2>{t.about.h2}</h2>
                <div className="prose"><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
              </div>
              <div className="aimg"><img className="slotimg" src="/screens/gen-hero.jpg" width={1856} height={2304} alt="Editorial 3D sculpture with lime light" decoding="async" loading="lazy" /></div>
            </div>
            <div className="kvgrid">
              {t.about.kv.map(([k, v]) => (<div className="kvtile" key={k}><div className="kk">{k}</div><div className="kvv">{v}</div></div>))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="contact wrap">
          <span className="slabel" style={{ justifyContent: "center" }}>{t.contact.label}</span>
          <h2>{t.contact.h2}</h2>
          <p>{t.contact.p}</p>
          <div className="cta">
            <a className="btn solid" href="mailto:granici.design@gmail.com">granici.design@gmail.com</a>
            <a className="btn ghost" href="https://linkedin.com/in/serghei-granici">LinkedIn</a>
            <a className="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf">{t.contact.cv}</a>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap row">
          <span>{t.footer}</span>
          <span className="links">
            <a href="mailto:granici.design@gmail.com">E-Mail</a>
            <a href="https://linkedin.com/in/serghei-granici">LinkedIn</a>
            <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
          </span>
        </div>
      </footer>
    </>
  );
}
