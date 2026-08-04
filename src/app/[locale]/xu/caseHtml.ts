export const caseHtmlDe = `

<header class="site">
  <div class="wrap"><div class="row">
    <a class="brand" href="/de"><img src="/granici-logo.svg" alt="Gránici Design" width="112" height="31" /></a>
    <nav class="nav">
      <a class="hide-sm" href="/de/#arbeiten">Arbeiten</a>
      <a class="hide-sm" href="/de/#ueber">Über mich</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      <div class="langtog"><a href="/de/xu" class="on">DE</a><a href="/en/xu" hreflang="en" aria-label="Switch to English">EN</a></div>
      <a class="btn solid" href="/de/#kontakt">Kontakt</a>
    </nav>
  </div>
  </div>
</header>

<main>

  <div class="wrap back"><a href="/de/#arbeiten"><span class="arw">←</span> Alle Arbeiten</a></div>

  <!-- 1 · HERO -->
  <section class="chero wrap">
    <div class="hcenter">
      <span class="hlabel">EdTech · Design-System · White-label</span>
      <h1>Eine Plattform,<br><span class="mk">jede Marke.</span></h1>
      <p class="subt">Punktueller Redesign der <span class="hl">XU – School of Sustainability</span>, einer B2B-Lernplattform: eine semantische <span class="hl">Farb-Architektur</span>, die sich in jede Kunden-CI einfügt — dazu konsistente Content-Komponenten und ein fokussierter Checkout. Agentur-seitig, 2021–2022.</p>
      <div class="pill"><a class="btn solid" href="#kontext">Fallstudie lesen <span class="arw">↓</span></a></div>
    </div>

    <div class="appcast">
      <video autoplay loop muted playsinline preload="auto" width="2400" height="1500" poster="/screens/xu-hero-poster.jpg"
        aria-label="Screencast: dieselbe XU-Lernplattform schaltet nacheinander in die Marken-Farben verschiedener Kunden um — grün, rot, blau — als Beleg der einen Farb-Token-Architektur">
        <source src="/screens/xu-hero.mp4" type="video/mp4">
        <source src="/screens/xu-hero.webm" type="video/webm">
      </video>
    </div>

    <div class="meta">
      <div class="c"><div class="k">Rolle</div><div class="v">Senior UI/UX Designer<br><span style="color:var(--ink-3)">+ Art Direction, mit PM</span></div></div>
      <div class="c"><div class="k">Zeitraum</div><div class="v">2021 – 2022</div></div>
      <div class="c"><div class="k">Kontext</div><div class="v">Agentur-seitig<br><span style="color:var(--ink-3)">Kunde: XU</span></div></div>
      <div class="c"><div class="k">Domäne</div><div class="v">EdTech · Design-System</div></div>
      <div class="c"><div class="k">Umfang</div><div class="v">Punktueller Redesign<br><span style="color:var(--ink-3)">Farbsystem · Checkout · Komponenten</span></div></div>
      <div class="c"><div class="k">Status</div><div class="v">Umgesetzt<br><span style="color:var(--ink-3)">client-seitig eingebaut</span></div></div>
    </div>
  </section>

  <!-- 2 · KONTEXT + PROBLEM -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark" data-reveal-auto>
      <span class="slabel c clabel">Kontext &amp; Problem</span>
      <div class="prose cols">
        <p><strong>XU – School of Sustainability</strong> ist eine B2B-Lernplattform: Unternehmen buchen sie, um ihre Mitarbeitenden zu Nachhaltigkeit weiterzubilden — mit Kursen, Live-Sessions, Artikeln und einem Expert-Channel. Ich kam agentur-seitig dazu: XU war unser Kunde, brachte Aufgaben auf Basis eigener Daten und Tests, ich lieferte das Design zurück.</p>
        <p>Das Produkt existierte bereits — die Aufgabe war nicht „von null", sondern <strong>gezielt die Stellen reparieren, die klemmten</strong>. Und es klemmte an drei Fronten: das UI war über die Jahre <strong>fragmentiert</strong>, der <strong>Checkout</strong> verlor Nutzer, und jede Plattform musste in der <strong>Corporate Identity des jeweiligen Kunden</strong> ausgeliefert werden.</p>
        <p>Genau dieser letzte Punkt war die eigentliche Härte: <strong>eine</strong> Plattform, aber jeder Firmenkunde sieht sie in seinen eigenen Marken-Farben — und es muss trotzdem gut aussehen, nicht nur „technisch eingefärbt".</p>
      </div>
    </div>
  </section>

  <!-- 4 · VORGEHEN: PROBLEM -> METHODE -> LÖSUNG (Kern des Cases) -->
  <section class="wrap">
    <span class="slabel clabel" data-reveal>Vorgehen · Problem → Methode → Lösung</span>
    <p class="prose" style="max-width:none" data-reveal>Drei Baustellen, drei gezielte Vorgehen. Kein „von null" — jede Entscheidung folgt aus dem, was das Audit zutage gebracht hat. Eine davon ist das Herzstück und macht die anderen erst skalierbar.</p>

    <div class="stiles" data-reveal-auto>

      <div class="bigcard light stile">
        <div class="strow">
          <div class="body">
            <div class="snum-row"><span class="pnum">1</span><span class="peyebrow">Konsistenz &amp; Komponenten</span></div>
            <h3 class="pstep-h">Vier Sonderwege werden ein System</h3>
            <div class="ps">
              <div><span class="plabel prob">Problem</span><p class="pstep-p">Kurse, Podcasts, Artikel und Live-Sessions waren über die Jahre uneinheitlich gebaut — dasselbe Element (etwa das Sprach-Icon) saß mal links, mal rechts.</p></div>
              <div><span class="plabel solu">Lösung</span><p class="pstep-p">Alle Varianten inventarisiert und auf <strong>vier saubere, wiederverwendbare Komponenten</strong> mit gemeinsamer Anatomie zusammengeführt — konsistent für Nutzer, wartbar für die Entwicklung.</p></div>
            </div>
          </div>
          <div class="fig"><figure class="hoverable"><div class="shot"><img src="/screens/xu-cards.jpg" width="1280" height="691" alt="Vereinheitlichte Content-Karten mit gemeinsamer Anatomie" decoding="async" loading="lazy"></div></figure></div>
        </div>
      </div>

      <div class="bigcard light stile">
        <div class="strow">
          <div class="body">
            <div class="snum-row"><span class="pnum">2</span><span class="peyebrow">Checkout-Redesign</span></div>
            <h3 class="pstep-h">Aus Rätseln wird Bezahlen</h3>
            <div class="ps">
              <div><span class="plabel prob">Problem</span><p class="pstep-p">Geteilter Screen, Lizenzanzahl per Dropdown — kein vertrautes Muster, viel Blick-Springen.</p></div>
              <div><span class="plabel solu">Lösung</span><p class="pstep-p">Nach <strong>Flow-Analyse</strong> und <strong>Pattern-Benchmark</strong>: zentrierter Screen, <strong>+/−&nbsp;Stepper</strong> statt Dropdown, Standard-Zahlungsmuster. Gleiche drei Schritte — aber die Nutzer wissen, was zu tun ist.</p></div>
            </div>
          </div>
          <div class="fig">
            <figure class="hoverable" style="margin-bottom:clamp(10px,1.4vw,14px)"><div class="shot"><img src="/screens/xu-checkout-before.jpg" width="1280" height="720" alt="Alter Checkout: geteilter Screen, Lizenzanzahl per Dropdown" decoding="async" loading="lazy"></div><figcaption><b>Vorher:</b> geteilter Screen, Dropdown.</figcaption></figure>
            <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-after-1.jpg" width="1280" height="910" alt="Neuer Checkout: zentrierte Karte mit +/− Stepper" decoding="async" loading="lazy"></div><figcaption><b>Nachher:</b> Fokus-Screen + Stepper.</figcaption></figure>
          </div>
        </div>
      </div>

      <div class="bigcard light stile">
        <div class="strow">
          <div class="body">
            <div class="snum-row"><span class="pnum">3</span><span class="peyebrow">Farb-Architektur</span></div>
            <h3 class="pstep-h">Ein Farbsystem, das jede Marke tragen kann</h3>
            <div class="ps">
              <div><span class="plabel prob">Problem</span><p class="pstep-p">Eine Plattform, aber jeder Firmenkunde sieht sie in seinen eigenen Marken-Farben — und sie muss trotzdem schön bleiben, nicht nur „technisch eingefärbt".</p></div>
              <div><span class="plabel solu">Lösung</span><p class="pstep-p">Über ein heuristisches Audit <strong>semantische Farb-Tokens</strong> gebaut (Primary, Secondary, Surface, Background, Text, Accent). Der Kunde setzt 3–4 CI-Farben im Backoffice, Neutrale und Kontrast-Regeln bleiben fix — jeder Kunde themt sich vorhersagbar.</p></div>
            </div>
          </div>
          <div class="fig">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(8px,1vw,12px)">
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-sustain.jpg" width="1280" height="784" alt="XU-Plattform im grünen Sustainability-Theme" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-standard.jpg" width="1280" height="784" alt="Dieselbe Plattform im roten Standard-Theme" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-client-a.jpg" width="1280" height="784" alt="Dieselbe Plattform in blauer Automotive-Kunden-CI" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-client-b.jpg" width="1280" height="784" alt="Dieselbe Plattform in der CI eines Bildungsanbieters" decoding="async" loading="lazy"></div></figure>
            </div>
            <div style="margin-top:10px;font-size:.82rem;color:var(--ink-3)">Ein Screen, vier Kunden-CIs — dasselbe System, neu eingefärbt.</div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 5 · ERGEBNIS -->
  <section class="wrap">
    <div class="result" data-reveal-auto>
      <span class="slabel">Ergebnis</span>
      <div class="big" style="font-size:clamp(2.3rem,5.2vw,4rem);line-height:1.02">Ein&nbsp;System.<br>Jede&nbsp;Marke.</div>
      <p class="sub">Aus fragmentierten Screens wurde ein <b>token-basiertes Farbsystem</b>, das sich in jede Kunden-CI einfügt — getragen von konsistenten Komponenten und einem fokussierten Checkout.</p>
      <div class="facts">
        <div class="f"><div class="fk">White-label</div><div class="fv">Semantische Farb-Tokens · pro Kunden-CI</div></div>
        <div class="f"><div class="fk">Konsistenz</div><div class="fv">4 vereinheitlichte Content-Komponenten</div></div>
        <div class="f"><div class="fk">Checkout</div><div class="fv">Fokussierter 3-Schritt-Flow · Standard-Muster</div></div>
      </div>
      <p class="note"><b>Ehrliche Einordnung:</b> Ich arbeitete <b>agentur-seitig</b> für XU als Kunden und habe <b>gezielt</b> problematische Bereiche neu gestaltet, nicht die Plattform von null gebaut. Usability-Tests und Nutzungsdaten lagen bei XU — daher hier <b>keine Conversion- oder Nutzungszahlen</b>. Validierung: Kunde und Entwickler-Team waren mit Farb-Architektur und Komponenten zufrieden; der Redesign wurde umgesetzt.</p>
    </div>
  </section>

  <!-- ROLLE -->
  <section class="wrap">
    <div class="bigcard dark" data-reveal-auto>
      <span class="slabel p clabel">Rolle &amp; Prozess</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Rolle</span>
          <p>Als <strong>Senior UI/UX Designer</strong> verantwortete ich Farb-Architektur, Komponenten und den Checkout-Redesign. Per <strong>Art Direction</strong> führte ich einen Grafik-/Illustrations-Designer (Icons, Illustrationen, Bildauswahl) und einen Motion-Designer (Onboarding-Videos); im Team war ein <strong>PM</strong>.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Prozess</span>
          <p>Agentur-seitig für den Kunden XU: von datenbasierten Tasks über heuristisches Audit und Pattern-Benchmark zu Tokens, Komponenten und Checkout-Flow — getestet in einer Figma-Color-Styles-Datei, dann client-seitig ins Portal übernommen und vom Entwickler-Team eingebaut.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact wrap" data-reveal-auto>
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
    </span>
  </div>
</footer>

`;
