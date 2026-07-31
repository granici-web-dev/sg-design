"use client";

import "./site.css";

import type { MouseEvent } from "react";

function playHover(e: MouseEvent<HTMLAnchorElement>) {
  const v = e.currentTarget.querySelector("video");
  if (v) {
    v.currentTime = 0;
    v.play().catch(() => {});
  }
}
function stopHover(e: MouseEvent<HTMLAnchorElement>) {
  const v = e.currentTarget.querySelector("video");
  if (v) {
    v.pause();
    v.load();
  }
}

export default function Home() {
  return (
    <>
      <header className="site" id="top">
        <div className="wrap row">
          <a className="brand" href="#top">
            <span className="mk"></span>Serghei Granici
          </a>
          <nav className="nav">
            <a className="hide-sm" href="#arbeiten">Arbeiten</a>
            <a className="hide-sm" href="#ueber">Über mich</a>
            <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
            <a className="btn solid" href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="chero wrap">
          <div className="herocard">
            <div className="htext">
              <span className="hlabel"><span className="dot"></span> Offen für neue Rollen · Raum Köln / Bonn</span>
              <h1>Komplexes bedienbar machen.</h1>
              <p className="subt">Senior UI/UX Designer, neun Jahre. Ich verwandle erklärungsbedürftige Produkte — <span className="hl">Web3, Enterprise, Pharma</span> — in Interfaces, die man ohne Anleitung versteht, und bringe sie bis zum funktionierenden Frontend.</p>
              <div className="pill">
                <a className="btn light" href="#arbeiten">Arbeiten ansehen <span className="arw">↓</span></a>
                <a className="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf" style={{ borderColor: "rgba(255,255,255,.22)", color: "#EDEEEF" }}>CV herunterladen</a>
              </div>
            </div>
            <div className="himg">
              <img className="slotimg" src="/screens/gen-portrait-blur.jpg" width={2304} height={1856} alt="Serghei Granici — Porträt mit Motion-Blur" decoding="async" />
            </div>
          </div>

          <div className="meta">
            <div className="c"><div className="k">Fokus</div><div className="v">Product · UI/UX Design</div></div>
            <div className="c"><div className="k">Erfahrung</div><div className="v">Neun Jahre</div></div>
            <div className="c"><div className="k">Domänen</div><div className="v">Web3 · Enterprise · Pharma</div></div>
            <div className="c"><div className="k">Standort</div><div className="v">Sankt Augustin, DE</div></div>
          </div>
        </section>

        {/* WORK */}
        <section id="arbeiten" className="wrap">
          <div className="shead">
            <span className="slabel">Ausgewählte Arbeiten</span>
            <h2>Vier Produkte, ein Prinzip: Klarheit.</h2>
            <p className="sub">Vom Web3-Netzwerk bis zur Pharma-Seite — jede Arbeit macht etwas Erklärungsbedürftiges einfach bedienbar.</p>
          </div>

          <div className="work">
            <a className="projlead" href="/smartplaces" onMouseEnter={playHover} onMouseLeave={stopHover}>
              <div className="pcover">
                <video className="pvid" muted loop playsInline preload="metadata" width={3840} height={2400} poster="/screens/sp-hero-poster.jpg" aria-label="SmartPlaces — Screencast: die App baut sich auf, ein Plot wird gewählt und per Karte gekauft">
                  <source src="/screens/sp-screencast.mp4" type="video/mp4" />
                  <source src="/screens/sp-screencast.webm" type="video/webm" />
                </video>
              </div>
              <div className="lbody">
                <span className="ptag">Web3 · Geo-SocialFi</span>
                <h3>SmartPlaces</h3>
                <p>Ein geolokales Web3-Netzwerk zugänglich machen: digitales Land per Bankkarte kaufen statt per Wallet. In der ersten Woche nach dem Rollout: +771 verkaufte Plots.</p>
                <span className="pmore">Fallstudie lesen <span className="arw">→</span></span>
              </div>
            </a>

            <div className="projgrid">
              <a className="proj" href="#kontakt">
                <div className="pcover"><img className="slotimg" src="/screens/gen-gastrobeleg.jpg" width={2304} height={1856} alt="Check-Scan-Motiv: Smartphone und Belege" decoding="async" loading="lazy" /><span className="corner">↗</span></div>
                <div className="pbody">
                  <span className="ptag2">B2B SaaS · Fintech</span>
                  <h3>GastroBeleg</h3>
                  <p>Belege scannen, prüfen und DATEV-konform exportieren (SKR, Pfand, USt.). Eigenes Produktkonzept.</p>
                  <span className="pmore">Bald als Fallstudie <span className="arw">→</span></span>
                </div>
              </a>
              <a className="proj" href="#kontakt">
                <div className="pcover"><img className="slotimg" src="/screens/gen-xu.jpg" width={2304} height={1856} alt="Abstraktes Motiv: Nachhaltigkeit und Lernen" decoding="async" loading="lazy" /><span className="corner">↗</span></div>
                <div className="pbody">
                  <span className="ptag2">EdTech · Enterprise</span>
                  <h3>XU</h3>
                  <p>Plattform für Nachhaltigkeits-Lernen: Dashboard, Kurse und Lernpfade unter einer Navigation.</p>
                  <span className="pmore">Bald als Fallstudie <span className="arw">→</span></span>
                </div>
              </a>
              <a className="proj" href="#kontakt">
                <div className="pcover"><img className="slotimg" src="/screens/gen-bioverde.jpg" width={2304} height={1856} alt="Botanisches Motiv: grüne Blätter mit Tropfen" decoding="async" loading="lazy" /><span className="corner">↗</span></div>
                <div className="pbody">
                  <span className="ptag2">Pharma · Landing</span>
                  <h3>Bioverde</h3>
                  <p>Produktseite für ein Pharma-Präparat: klare Hierarchie, ruhige Typografie, konforme Pflichtangaben.</p>
                  <span className="pmore">Bald als Fallstudie <span className="arw">→</span></span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="ueber" className="wrap">
          <div className="bigcard dark">
            <div className="about2">
              <div>
                <span className="slabel g clabel">Über mich</span>
                <h2>Neun Jahre Design. Jetzt auch Code.</h2>
                <div className="prose">
                  <p>Ich gestalte seit 2014 digitale Produkte — von Web3-Plattformen über Enterprise-SaaS bis zu Pharma-Seiten. Meine Stärke: erklärungsbedürftige Domänen in Interfaces übersetzen, die ohne Anleitung verständlich sind.</p>
                  <p>Seit 2025 bringe ich meine Entwürfe auch selbst ins Frontend — von der Recherche bis zum funktionierenden Produkt. Kein Fullstack-Versprechen, sondern ein Designer, der weiß, wie Software gebaut wird, und mit der Entwicklung dieselbe Sprache spricht.</p>
                </div>
              </div>
              <div className="aimg"><img className="slotimg" src="/screens/gen-hero.jpg" width={1856} height={2304} alt="Abstrakte editoriale 3D-Skulptur mit lime-grünem Licht" decoding="async" loading="lazy" /></div>
            </div>
            <div className="kvgrid">
              <div className="kvtile"><div className="kk">Rolle</div><div className="kvv">Senior UI/UX Designer</div></div>
              <div className="kvtile"><div className="kk">Kann</div><div className="kvv">User Flows · Wireframes · Prototyping · Design-Systeme</div></div>
              <div className="kvtile"><div className="kk">Werkzeuge</div><div className="kvv">Figma · Claude Code · Git</div></div>
              <div className="kvtile"><div className="kk">Frontend</div><div className="kvv">HTML · CSS · JS/TS · React</div></div>
              <div className="kvtile"><div className="kk">Sprachen</div><div className="kvv">Russisch · Deutsch (fließend) · Englisch</div></div>
              <div className="kvtile"><div className="kk">Standort</div><div className="kvv">Sankt Augustin · Raum Köln / Bonn</div></div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="kontakt" className="contact wrap">
          <span className="slabel" style={{ justifyContent: "center" }}>Kontakt</span>
          <h2>Reden wir über Ihre nächste Rolle.</h2>
          <p>Offen für Senior-Product/UI-UX-Design-Rollen im Raum Köln / Bonn und remote.</p>
          <div className="cta">
            <a className="btn solid" href="mailto:granici.design@gmail.com">granici.design@gmail.com</a>
            <a className="btn ghost" href="https://linkedin.com/in/serghei-granici">LinkedIn</a>
            <a className="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf">CV (PDF)</a>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap row">
          <span>© 2026 Serghei Granici — Senior UI/UX Designer</span>
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
