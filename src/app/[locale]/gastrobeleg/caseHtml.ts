export const caseHtmlDe = `

<header class="site">
  <div class="wrap row">
    <a class="brand" href="/de"><span class="mk"></span>Serghei Granici</a>
    <nav class="nav">
      <a class="hide-sm" href="/de/#arbeiten">Arbeiten</a>
      <a class="hide-sm" href="/de/#ueber">Über mich</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
      <div class="langtog"><a href="/de/gastrobeleg" class="on">DE</a><a href="/en/gastrobeleg" hreflang="en" aria-label="Switch to English">EN</a></div>
      <a class="btn solid" href="/de/#kontakt">Kontakt</a>
    </nav>
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
      <p class="subt">Die Küche fotografiert den Lieferschein, die KI liest die Positionen, der Inhaber prüft in Sekunden. Heraus kommt <span class="hl">Preiskontrolle für den Einkauf</span> und ein fertiger DATEV-Export für den Steuerberater — ohne Warenwirtschaft, ohne Systemwechsel.</p>
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
      <div class="c"><div class="k">Rolle</div><div class="v">Solo UI/UX + Product Design</div></div>
      <div class="c"><div class="k">Zeitraum</div><div class="v">2025</div></div>
      <div class="c"><div class="k">Plattform</div><div class="v">Web-App · PWA-Scan<br><span style="color:var(--ink-3)">Mobile-Intake</span></div></div>
      <div class="c"><div class="k">Markt</div><div class="v">Unabhängige Gastronomie<br><span style="color:var(--ink-3)">Deutschland · 1–3 Standorte</span></div></div>
      <div class="c"><div class="k">Domäne</div><div class="v">Belegerfassung · Food-Cost · DATEV</div></div>
      <div class="c"><div class="k">Status</div><div class="v">Konzept · Design-Phase<br><span style="color:var(--ink-3)">Nächster Schritt: Entwicklung</span></div></div>
    </div>
  </section>

  <!-- 2 · KONTEXT + PROBLEM -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">Kontext &amp; Problem</span>
      <div class="prose cols">
        <p><strong>GastroBeleg</strong> richtet sich an unabhängige Restaurants, Cafés und Bars in Deutschland — ein bis drei Standorte, gemischter Lieferantenpool: Metro-Selbstabholung, Metzger, Bäcker, Gemüsebasis, Getränkehändler. Sie haben eine Kasse, aber keine Warenwirtschaft — und einen Steuerberater, der in DATEV arbeitet.</p>
        <p>Der Schmerz ist <strong>finanziell, nicht organisatorisch</strong>. Die Rechnungen für den Wareneinkauf sind über ein halbes Jahr um 15 % gestiegen — aber der Inhaber kann nicht sagen, welche Position bei welchem Lieferanten teurer wurde. Die Preise stecken in Papier-Lieferscheinen, die einmal im Monat zum Steuerberater wandern.</p>
        <p>Die Buchhaltung ist bei vielen längst halb gelöst: Sie fotografieren Belege über die kostenlose App <strong>DATEV Upload mobil</strong>. Aber dieser Kanal überträgt nur Beträge und Belegköpfe — keine Artikel, Einheiten oder Kilopreise. Ergebnis: Die Buchhaltung stimmt, der Einkauf bleibt blind.</p>
      </div>
      <div class="cardfacts">
        <div><div class="cfn">Preis-Blindheit</div><div class="cfc">Einkauf +15 % in sechs Monaten. Welche Position, welcher Lieferant? Steht nirgends.</div></div>
        <div><div class="cfn">Lücke 25 € ↔ 175 €</div><div class="cfc">Billige Belegerfassung sieht keine Positionen; teure Plattformen verlangen Rezepturen und Monate Einführung.</div></div>
        <div><div class="cfn accent">Ziel</div><div class="cfc">Einkauf transparent, Buchhaltung fertig — ohne WaWi, ohne Systemwechsel, ab 39 €.</div></div>
      </div>
    </div>
  </section>

  <!-- 4 · HYPOTHESEN -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Hypothesen</span>
      <p class="prose" style="max-width:none">Drei prüfbare Annahmen bestimmten den Entwurf — die Wette, dass Vertrauen und Positions-Transparenz wichtiger sind als reine Automatisierung.</p>
      <div class="hyps">
          <div class="hyp"><span class="tag">H1</span><div class="txt"><b>Wenn der Beleg in Sekunden geprüft statt manuell getippt wird, dann bleibt das Morgen-Ritual bei Minuten,</b> weil die KI die Positionen liest und der Mensch nur bestätigt.</div></div>
          <div class="hyp"><span class="tag">H2</span><div class="txt"><b>Wenn Preis-Sprünge automatisch auffallen, dann reagiert der Inhaber vor der nächsten Bestellung,</b> statt es Monate später ungefähr zu bemerken.</div></div>
          <div class="hyp"><span class="tag">H3</span><div class="txt"><b>Wenn der Export DATEV-fertig ist (SKR, 7/19 %, Pfand getrennt), dann empfiehlt der Steuerberater das Produkt weiter,</b> weil es ihm Arbeit abnimmt statt sie zu machen.</div></div>
      </div>
    </div>
  </section>

  <!-- 5 · LÖSUNG -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel g clabel">Lösung</span>
      <div class="duo">
        <figure class="fig hoverable">
          <div class="shot"><img src="/screens/gb-pruefen.png" width="1440" height="1024" alt="Beleg prüfen: gescannter Lieferschein links, erkannte Positionen mit Menge, Preis und USt rechts, ein Feld als ‚USt?' markiert" decoding="async" loading="lazy"></div>
          <figcaption><b>Prüfen:</b> Beleg links, erkannte Positionen rechts. Unsichere Felder sind hervorgehoben, das Original liegt daneben — Bestätigen in einem Tap.</figcaption>
        </figure>
        <div class="body">
          <h2 class="lead-h">Foto → Prüfen → Fertig.</h2>
          <p>Die Küche fotografiert den Lieferschein bei der Warenannahme. Die KI erkennt Lieferant, Positionen, Mengen, Preise und USt-Sätze — und markiert <strong>Pfand separat</strong>. Der Inhaber bestätigt morgens nur, was das System nicht sicher gelesen hat.</p>
          <p>Heraus kommen zwei Dinge: ein <strong>Food-Cost-Dashboard</strong> (wer, was, wie teuer, wo gestiegen) und ein <strong>fertiger DATEV-Export</strong>. Die erste Zuordnung eines Lieferanten-Artikels wird dauerhaft gemerkt — danach erkennt das System „seine" Produkte selbst.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5b · KERNFLÄCHEN -->
  <section class="wrap">
    <span class="slabel clabel">Kernflächen</span>
    <div class="wtiles">
      <div class="bigcard light wtile">
        <div class="row2">
          <figure class="fig hoverable" style="max-width:330px;width:100%;margin-inline:auto">
            <div class="shot" style="border-radius:28px"><img src="/screens/gb-scan.png" width="750" height="1624" alt="Küchen-Intake als PWA: Kamera-Ansicht, Lieferschein im Rahmen, ‚Beleg erkannt', Aufnahme erfolgt automatisch" decoding="async" loading="lazy"></div>
          </figure>
          <div class="body">
            <span class="role">Erfassung · Küche</span>
            <h3>15 Sekunden am Wareneingang</h3>
            <p>Am Hintereingang, bei der Warenannahme, mit vollen Händen — dafür ist der Intake eine <strong>PWA mit PIN pro Standort</strong>, keine native App. Personalwechsel bricht Store-Installationen und Passwörter alle zwei Monate; ein Lesezeichen-Link und ein Standort-PIN überstehen das.</p>
            <p>Zwei Dinge sind Pflicht: eine <strong>Offline-Warteschlange</strong> — das Foto geht raus, sobald Netz da ist — und eine <strong>Qualitätsprüfung auf dem Gerät</strong> („unscharf", „Rand abgeschnitten"), solange der Beleg noch in der Hand ist. Fünf Minuten später liegt er im Müll.</p>
          </div>
        </div>
      </div>
      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Kaltstart</span>
            <h3>Der erste Metro-Beleg mit 60 Zeilen darf das Onboarding nicht töten</h3>
            <p>Deshalb liefert das Produkt einen <strong>vorbefüllten Katalog</strong> typischer deutscher Gastro-Produkte. Die KI schlägt die Zuordnung „Lieferanten-Zeile → Katalog-Position" vor, der Inhaber bestätigt — auch im Stapel.</p>
            <p>Einmal bestätigt, gilt die Zuordnung samt <strong>Einheiten-Umrechnung</strong> automatisch weiter — „1 Kiste = 24 × 0,33 l". Manuelles Mapping bei Null ist der häufigste Absprungpunkt der Plattform-Konkurrenz; hier fällt er weg.</p>
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
            <span class="role">Buchhaltung</span>
            <h3>Ein Paket, das der Steuerberater direkt verbuchen kann</h3>
            <p>Einmal im Monat exportiert der Inhaber einen <strong>EXTF-Buchungsstapel</strong> für DATEV Unternehmen Online. Die USt wird <strong>pro Zeile</strong> aus dem Beleg übernommen (7/19 %), <strong>Pfand läuft auf ein eigenes Konto</strong> und nicht in den Wareneinsatz.</p>
            <p>SKR03 ist voreingestellt (SKR04 optional), ein <strong>Testexport</strong> läuft vor dem ersten echten. So wird der Steuerberater vom Datei-Empfänger zum Empfehlungskanal.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6 · TEST & STAND -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel clabel">Test &amp; Stand</span>
      <p class="prose" style="max-width:none"><strong>Nutzertests gibt es noch nicht</strong> — das Projekt ist in der Design-Phase. Validiert wurde bisher intern, gegen das Design-System und die deutschen Rahmenbedingungen.</p>
      <div class="steps">
        <div class="step"><div class="no">Schritt 1</div><h4>Design-System geprüft</h4><p>Forest-&amp;-Lime-Tokens, Kontrast nach WCAG AA (51/51 Kombinationen bestanden), Tabellenziffern für Geldwerte, Farbe nie als einziger Bedeutungsträger.</p></div>
        <div class="step"><div class="no">Schritt 2</div><h4>Auf Deutsch ausgelegt</h4><p>Layouts mit 15–30 % Reserve für deutsche Stringlängen, DD.MM.YYYY, Dezimalkomma; die Screens liefen von v1 auf v2.</p></div>
      </div>
      <p class="prose" style="max-width:none;margin-top:clamp(20px,2.4vw,28px)">Die eigentliche Nutzer-Validierung — hält das 80-%-Ziel dem Küchenalltag stand? — folgt nach dem ersten lauffähigen Build.</p>
    </div>
  </section>

  <!-- 7 · ERFOLGSKRITERIEN -->
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
      <p class="note"><b>Ziel-Werte, kein gemessenes Ergebnis.</b> Das Produkt ist in der Design-Phase; öffentliche Benchmarks für deutsches Gastro-SaaS fehlen. Die Zahlen sind als Zielkorridor drei Monate nach Launch gesetzt — nicht als Marktnorm. Extraktions-Genauigkeit und Conversion hängen kausal zusammen: Fällt die Quote ohne Korrektur, brechen Bindung und Umwandlung nach.</p>
    </div>
  </section>

  <!-- ROLLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Rolle &amp; Prozess</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Rolle</span>
          <p>Als <strong>Solo-Designer</strong> verantwortete ich die gesamte Kette: Research → PRD → Informationsarchitektur → Design-Tokens → Figma (Desktop + Mobile, 21 + 21 Screens). Das Frontend baue ich anschließend selbst mit <strong>Claude Code</strong>.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Prozess</span>
          <p>Der Research lief als <strong>KI-gestützter Workflow</strong> zu Wettbewerbssynthese und PRD; das visuelle System als Forest-&amp;-Lime-Token-Set in Figma. Die deutschen Domänenregeln (GoBD, DATEV-EXTF, Pfand, USt) wurden bewusst früh modelliert — sie bestimmen das Interface, nicht umgekehrt.</p>
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
      <a class="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf">CV (PDF)</a>
    </div>
  </section>

</main>

<footer class="site">
  <div class="wrap row">
    <span>© 2026 Serghei Granici — Senior UI/UX Designer</span>
    <span class="links">
      <a href="mailto:granici.design@gmail.com">E-Mail</a>
      <a href="https://linkedin.com/in/serghei-granici">LinkedIn</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
    </span>
  </div>
</footer>

`;
