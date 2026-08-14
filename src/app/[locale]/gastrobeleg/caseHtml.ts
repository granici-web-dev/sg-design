export const caseHtmlDe = `

<header class="site">
  <div class="wrap"><div class="row">
    <a class="brand" href="/de"><img src="/granici-logo.svg" alt="Gránici Design" width="112" height="31" /></a>
    <nav class="nav">
      <a class="hide-sm" href="/de/#arbeiten">Arbeiten</a>
      <a class="hide-sm" href="/de/#ueber">Über mich</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      <div class="langtog"><a href="/de/gastrobeleg" class="on">DE</a><a href="/en/gastrobeleg" hreflang="en" aria-label="Switch to English">EN</a></div>
      <a class="btn solid" href="/de/#kontakt">Kontakt</a>
    </nav>
  </div>
  </div>
</header>

<main>

  <!-- BACK -->
  <div class="wrap back"><a href="/de/#arbeiten"><span class="arw">←</span> Alle Arbeiten</a></div>

  <!-- 1 · HERO -->
  <section class="chero wrap">
    <div class="hcenter">
      <span class="hlabel">Eigenes Produktkonzept · Design-Phase</span>
      <h1>GastroBeleg — Lieferschein<br><span class="mk">fotografieren. Fertig.</span></h1>
      <p class="subt">Der Wareneinkauf ist um 15 % gestiegen — <span class="hl">welche Position, welcher Lieferant?</span> Steht nirgends. Die Preise stecken in Papier-Lieferscheinen.</p>
      <div class="pill"><a class="btn solid" href="#kontext">Fallstudie lesen <span class="arw">↓</span></a></div>
    </div>

    <div class="dashwrap">
      <video class="dashimg" autoplay loop muted playsinline preload="auto"
        width="1920" height="1366" poster="/screens/gb-uebersicht-poster.jpg"
        aria-label="Screencast: das GastroBeleg-Übersicht-Dashboard baut sich Panel für Panel auf — Kennzahlen, Diagramme und die Beleg-Liste erscheinen nacheinander">
        <source src="/screens/gb-uebersicht-cast.mp4" type="video/mp4">
        <source src="/screens/gb-uebersicht-cast.webm" type="video/webm">
      </video>
    </div>

    <div class="meta">
      <div class="c"><div class="k">Rolle</div><div class="v">Alleiniger UI/UX- &amp; Product-Designer</div></div>
      <div class="c"><div class="k">Zeitraum</div><div class="v">2025</div></div>
      <div class="c"><div class="k">Plattform</div><div class="v">Web-App · PWA-Scan<br><span style="color:var(--ink-3)">Mobile-Intake</span></div></div>
      <div class="c"><div class="k">Markt</div><div class="v">Unabhängige Gastronomie<br><span style="color:var(--ink-3)">Deutschland · 1–3 Standorte</span></div></div>
      <div class="c"><div class="k">Domäne</div><div class="v">Belegerfassung · Food-Cost · DATEV</div></div>
      <div class="c"><div class="k">Status</div><div class="v">Konzept · Design-Phase<br><span style="color:var(--ink-3)">Nächster Schritt: Entwicklung</span></div></div>
    </div>
  </section>

  <!-- 2 · CHARACTER + SETTING -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">Der Wirt und sein blinder Fleck</span>
      <p class="prose" style="max-width:none">Ein Inhaber mit ein bis drei Standorten und gemischtem Lieferantenpool: Metro-Selbstabholung, Metzger, Bäcker, Getränkehändler. Eine Kasse, keine Warenwirtschaft, ein Steuerberater in DATEV. <strong>Seine Einkaufsrechnungen sind in sechs Monaten um 15 % gestiegen — aber er kann nicht sagen, welche Position bei welchem Lieferanten teurer wurde.</strong> Wer die Belege per <strong>DATEV Upload mobil</strong> abfotografiert, überträgt nur Belegköpfe und Summen — keine Artikel, keine Kilopreise. Die Buchhaltung stimmt, der Einkauf bleibt blind.</p>
      <div class="cardfacts">
        <div><div class="cfn">Preis-Blindheit</div><div class="cfc">Einkauf +15 % in sechs Monaten. Welche Position, welcher Lieferant? Steht nirgends.</div></div>
        <div><div class="cfn">Lücke 25 € ↔ 175 €</div><div class="cfc">Billige Belegerfassung sieht keine Positionen; teure Plattformen verlangen Rezepturen und Monate Einführung.</div></div>
        <div><div class="cfn accent">Ziel</div><div class="cfc">Einkauf transparent, Buchhaltung fertig — ohne WaWi, ohne Systemwechsel, ab 39 €.</div></div>
      </div>
    </div>
  </section>

  <!-- 3 · LÖSUNG + WETTE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel g clabel">Der Ansatz</span>
      <div class="duo">
        <figure class="fig hoverable">
          <div class="shot"><img src="/screens/gb-pruefen.png" width="1440" height="1024" alt="Beleg prüfen: gescannter Lieferschein links, erkannte Positionen mit Menge, Preis und USt rechts, ein Feld als ‚USt?' markiert" decoding="async" loading="lazy"></div>
          <figcaption><b>Prüfen:</b> Beleg links, erkannte Positionen rechts. Unsichere Felder hervorgehoben, das Original daneben — Bestätigen in einem Tap.</figcaption>
        </figure>
        <div class="body">
          <h2 class="lead-h">Foto → Prüfen → Fertig.</h2>
          <p>Die Küche fotografiert den Lieferschein bei der Warenannahme. Die KI erkennt Lieferant, Positionen, Mengen, Preise und USt-Sätze; der Inhaber bestätigt morgens nur, was das System unsicher gelesen hat.</p>
          <p><strong>Die Wette dahinter:</strong> Fallen Preis-Sprünge von selbst auf, reagiert der Inhaber vor der nächsten Bestellung — statt es Monate später ungefähr zu bemerken. Nicht die Automatisierung entscheidet, sondern die Sichtbarkeit auf Positionsebene.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4 · DREI WIDERSTÄNDE -->
  <section class="wrap">
    <span class="slabel clabel">Drei Widerstände</span>
    <div class="wtiles">
      <div class="bigcard light wtile">
        <div class="row2">
          <figure class="fig hoverable" style="max-width:250px;width:100%;margin-inline:auto">
            <div class="shot" style="border-radius:28px"><img src="/screens/gb-scan.png" width="750" height="1624" alt="Küchen-Intake als PWA: Kamera-Ansicht, Lieferschein im Rahmen, ‚Beleg erkannt', Aufnahme erfolgt automatisch" decoding="async" loading="lazy"></div>
          </figure>
          <div class="body">
            <span class="role">Widerstand 1 · Küche</span>
            <h3>15 Sekunden am Wareneingang</h3>
            <p>Am Hintereingang, mit vollen Händen, bei Personalwechsel alle zwei Monate — Store-Installationen und Passwörter überstehen das nicht. Deshalb ist der Intake eine <strong>PWA mit Standort-PIN</strong>, dazu Offline-Warteschlange und Schärfe-Prüfung auf dem Gerät, solange der Beleg noch in der Hand ist. Fünf Minuten später liegt er im Müll.</p>
          </div>
        </div>
      </div>
      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Widerstand 2 · Kaltstart</span>
            <h3>Der erste Metro-Beleg mit 60 Zeilen darf das Onboarding nicht töten</h3>
            <p>Manuelles Mapping bei Null ist der häufigste Absprungpunkt der Plattform-Konkurrenz. Deshalb liefert das Produkt einen <strong>vorbefüllten Katalog</strong> typischer deutscher Gastro-Produkte: Die KI schlägt „Lieferanten-Zeile → Katalog-Position“ vor, der Inhaber bestätigt im Stapel — einmal. Danach gilt die Zuordnung samt Einheiten-Umrechnung („1 Kiste = 24 × 0,33 l“) automatisch weiter.</p>
          </div>
          <figure class="fig hoverable">
            <div class="shot"><img src="/screens/gb-katalog-mapping.png" width="1440" height="1024" alt="Katalog-Mapping: Modal ‚Artikel zuordnen' mit KI-Vorschlägen aus dem Katalog und Übereinstimmung in Prozent (96 %)" decoding="async" loading="lazy"></div>
          </figure>
        </div>
      </div>
      <div class="bigcard light wtile">
        <div class="row2">
          <figure class="fig hoverable">
            <div class="shot"><img src="/screens/gb-datev.png" width="1440" height="1024" alt="DATEV-Export: EXTF-Buchungsstapel mit Konten (SKR03), 7/19-%-USt-Split pro Zeile und Pfand auf eigenem Konto" decoding="async" loading="lazy"></div>
          </figure>
          <div class="body">
            <span class="role">Widerstand 3 · Buchhaltung</span>
            <h3>Ein Paket, das der Steuerberater direkt verbuchen kann</h3>
            <p>Der Export ist ein <strong>EXTF-Buchungsstapel</strong> für DATEV Unternehmen Online: USt pro Zeile aus dem Beleg (7/19 %), <strong>Pfand auf eigenem Konto</strong> statt im Wareneinsatz, SKR03 voreingestellt. So wird der Steuerberater vom Datei-Empfänger zum Empfehlungskanal.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5 · INSIGHT / WAS GEPRÜFT IST -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel clabel">Was ich geprüft habe</span>
      <p class="prose" style="max-width:none"><strong>Nutzertests gibt es noch nicht</strong> — das Projekt ist in der Design-Phase. Geprüft wurde gegen Design-System und deutsche Rahmenbedingungen:</p>
      <div class="steps">
        <div class="step"><div class="no">Schritt 1</div><h4>Design-System</h4><p>Kontrast nach WCAG AA: 51 von 51 Kombinationen bestanden. Tabellenziffern für Geldwerte, Farbe nie als einziger Bedeutungsträger.</p></div>
        <div class="step"><div class="no">Schritt 2</div><h4>Auf Deutsch ausgelegt</h4><p>15–30 % Layout-Reserve für deutsche Stringlängen, DD.MM.YYYY, Dezimalkomma — dafür liefen die Screens von v1 auf v2.</p></div>
      </div>
    </div>
  </section>

  <!-- 6 · ERFOLGSKRITERIEN -->
  <section class="wrap">
    <div class="result">
      <span class="slabel">Erfolgskriterien</span>
      <div class="big">80<span class="plus">%</span></div>
      <p class="sub">der Belege <b>ohne manuelle Korrektur</b> — die Kennzahl, die das Morgen-Ritual bei fünf Minuten hält statt bei einer halben Stunde.</p>
      <div class="facts">
        <div class="f"><div class="fk">Reichweite (Ziel)</div><div class="fv">30 zahlende Restaurants</div></div>
        <div class="f"><div class="fk">Extraktion (Ziel)</div><div class="fv">80 % ohne Korrektur</div></div>
        <div class="f"><div class="fk">Conversion (Ziel)</div><div class="fv">25 % Trial → Paid</div></div>
      </div>
      <p class="note"><b>Ziel-Werte, kein gemessenes Ergebnis</b> — das Produkt ist in der Design-Phase, öffentliche Benchmarks für deutsches Gastro-SaaS fehlen. Fällt die Quote ohne Korrektur, brechen Bindung und Umwandlung nach.</p>
    </div>
  </section>

  <!-- ROLLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Rolle &amp; Prozess</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Rolle</span>
          <p>Als <strong>alleiniger Designer</strong> verantwortete ich die gesamte Kette: Research → PRD → Informationsarchitektur → Design-Tokens → Figma (Desktop + Mobile, 21 + 21 Screens). Das Frontend baue ich anschließend selbst mit <strong>Claude Code</strong>.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Prozess</span>
          <p>Die deutschen Domänenregeln (GoBD, DATEV-EXTF, Pfand, USt) wurden bewusst früh modelliert — sie bestimmen das Interface, nicht umgekehrt.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact wrap">
    <span class="slabel" style="justify-content:center">Kontakt</span>
    <h2>Nächste Fallstudie oder ein Gespräch?</h2>
    <p>Offen für Senior-Product/UI-UX-Design-Rollen im Raum Köln / Bonn und remote.</p>
    <div class="cta">
      <a class="btn solid" href="mailto:granici.design@gmail.com">granici.design@gmail.com</a>
      <a class="btn ghost" href="/de/#arbeiten">Alle Arbeiten</a>
      <a class="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
    </div>
  </section>

</main>

<footer class="site">
  <div class="wrap row">
    <span>© 2026 Serghei Granici — Senior UI/UX Designer</span>
    <span class="links">
      <a href="mailto:granici.design@gmail.com">E-Mail</a>
      <a href="https://linkedin.com/in/serghei-granici" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      <a href="/de/impressum">Impressum</a>
      <a href="/de/datenschutz">Datenschutz</a>
      <button type="button" class="cc-link" data-cookie-settings>Cookies</button>
    </span>
  </div>
</footer>

`;
