export const caseHtmlDe = `

<header class="site">
  <div class="wrap row">
    <a class="brand" href="/de"><span class="mk"></span>Serghei Granici</a>
    <nav class="nav">
      <a class="hide-sm" href="/de/#arbeiten">Arbeiten</a>
      <a class="hide-sm" href="/de/#ueber">Über mich</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
      <a class="btn ghost" href="/en/xu" hreflang="en" aria-label="Switch to English">EN</a>
      <a class="btn solid" href="/de/#kontakt">Kontakt</a>
    </nav>
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
    <div class="bigcard dark">
      <span class="slabel c clabel">Kontext &amp; Problem</span>
      <div class="prose cols">
        <p><strong>XU – School of Sustainability</strong> ist eine B2B-Lernplattform: Unternehmen buchen sie, um ihre Mitarbeitenden zu Nachhaltigkeit weiterzubilden — mit Kursen, Live-Sessions, Artikeln und einem Expert-Channel. Ich kam agentur-seitig dazu: XU war unser Kunde, brachte Aufgaben auf Basis eigener Daten und Tests, ich lieferte das Design zurück.</p>
        <p>Das Produkt existierte bereits — die Aufgabe war nicht „von null", sondern <strong>gezielt die Stellen reparieren, die klemmten</strong>. Und es klemmte an drei Fronten: das UI war über die Jahre <strong>fragmentiert</strong>, der <strong>Checkout</strong> verlor Nutzer, und jede Plattform musste in der <strong>Corporate Identity des jeweiligen Kunden</strong> ausgeliefert werden.</p>
        <p>Genau dieser letzte Punkt war die eigentliche Härte: <strong>eine</strong> Plattform, aber jeder Firmenkunde sieht sie in seinen eigenen Marken-Farben — und es muss trotzdem gut aussehen, nicht nur „technisch eingefärbt".</p>
      </div>
      <div class="cardfacts">
        <div><div class="cfn">Fragmentiertes UI</div><div class="cfc">Kurs-, Podcast-, Artikel- und Live-Karten waren uneinheitlich gebaut — Icons mal links, mal rechts.</div></div>
        <div><div class="cfn">Checkout mit Reibung</div><div class="cfc">Lizenzanzahl per Dropdown, kein Standard-Muster, geteilter Screen — Nutzer mussten rätseln statt bezahlen.</div></div>
        <div><div class="cfn accent">White-label als Pflicht</div><div class="cfc">Dieselbe Plattform in jeder Kunden-CI — vorhersagbar und schön, nicht nur irgendwie umgefärbt.</div></div>
      </div>
    </div>
  </section>

  <!-- 3 · RECHERCHE -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Recherche &amp; Audit</span>
      <p class="prose" style="max-width:none">Ehrlich eingeordnet: Die <strong>quantitative Grundlage lag bei XU</strong> — sie führten Usability-Tests und Analytics und kamen mit datenbasierten Tasks zu mir. Mein Beitrag war die Design-Seite davor: verstehen, <em>warum</em> etwas klemmt, und das Bestehende systematisch auseinandernehmen.</p>
      <div class="sources">
          <div class="source"><div class="no">01</div><h4>Heuristisches Audit</h4><p>Bestehende Screens auf Inkonsistenzen und UX-Brüche durchgesehen</p></div>
          <div class="source"><div class="no">02</div><h4>Komponenten-Inventar</h4><p>Alle Varianten der Content-Karten gesammelt und verglichen</p></div>
          <div class="source"><div class="no">03</div><h4>Checkout-Flow-Analyse</h4><p>Jeden Schritt des alten Kaufprozesses zerlegt — wo bricht Vertrauen?</p></div>
          <div class="source"><div class="no">04</div><h4>Pattern-Benchmark</h4><p>Etablierte Checkout- und Formular-Muster als Referenz</p></div>
      </div>
      <div class="pull">
        <div class="q">Der rote Faden: nicht neue Features, sondern <span class="g">Vorhersagbarkeit</span> — ein System, in dem Karten, Farben und Kaufschritte sich gleich verhalten, egal welcher Kunde die Plattform bekommt.</div>
        <div class="src">Attribution: Usability-Tests &amp; Nutzungsdaten lagen bei XU. Hier gezeigt wird die Design- und System-Arbeit, nicht deren Messungen.</div>
      </div>
    </div>
  </section>

  <!-- 4 · KONZEPT & ENTSCHEIDUNGEN -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Konzept &amp; Design-Entscheidungen</span>
      <p class="prose" style="max-width:none">Drei Entscheidungen trugen den Redesign — eine davon ist das Herzstück und macht die anderen erst skalierbar.</p>
      <div class="hyps">
          <div class="hyp"><span class="tag">01</span><div class="txt"><b>Farbe wird zu Tokens, nicht zu Werten.</b> Ein semantisches System (Primary, Secondary, Surface, Background, Text, Accent). Der Kunde gibt drei bis vier Marken-Farben vor; Neutrale und Kontrast-Regeln bleiben fix — so themt sich jede CI vorhersagbar.</div></div>
          <div class="hyp"><span class="tag">02</span><div class="txt"><b>Vier Content-Typen, vier saubere Komponenten.</b> Kurse, Podcasts, Artikel und Live-Sessions bekamen eine einheitliche Karten-Anatomie statt vier Sonderwege — konsistent für Nutzer, wartbar für die Entwicklung.</div></div>
          <div class="hyp"><span class="tag">03</span><div class="txt"><b>Der Checkout wird fokussiert.</b> Der geteilte Screen fliegt raus, das Dropdown wird ein Stepper, vertraute Muster ersetzen Selbstgebautes — die Zahl der Schritte bleibt, die Sicherheit beim Ausfüllen steigt.</div></div>
      </div>
    </div>
  </section>

  <!-- 5 · KERN-ARBEIT -->
  <section class="wrap">
    <span class="slabel clabel">Kern-Arbeit</span>
    <div class="wtiles">

      <!-- STAR: Farb-Architektur -->
      <div class="bigcard dark wtile">
        <span class="slabel p clabel">Farb-Architektur · Kernstück</span>
        <div class="duo">
          <div class="body">
            <h2 class="lead-h">Ein Farbsystem, das jede Marke tragen kann.</h2>
            <p>Statt fester Farbwerte definierte ich <strong>semantische Tokens</strong> — Primary, Secondary, Surface, Background, Text, Accent. Ein Firmenkunde bringt drei bis vier CI-Farben mit; die werden über ein <strong>Backoffice</strong> gesetzt und schlagen auf die ganze Plattform durch.</p>
            <p>Damit das Ergebnis nicht kippt, bleiben <strong>Neutrale und Kontrast-Regeln fixiert</strong> — die Marke färbt, ohne Lesbarkeit oder Balance zu brechen. Getestet habe ich das in einer eigenen Figma-Datei mit Color Styles, bevor die Werte ins Portal wanderten.</p>
            <p>Das Resultat ist rechts zu sehen: <strong>ein und derselbe Screen</strong> in vier CIs — grün, rot, und zwei anonymisierte Kunden. Kein Neu-Design pro Kunde, sondern dasselbe System, neu eingefärbt.</p>
          </div>
          <div class="fig">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(10px,1.4vw,16px)">
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-sustain.jpg" width="1280" height="784" alt="XU-Plattform im grünen Sustainability-Theme" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-standard.jpg" width="1280" height="784" alt="Dieselbe Plattform im roten Standard-Theme" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-client-a.jpg" width="1280" height="784" alt="Dieselbe Plattform in blauer Automotive-Kunden-CI, Logo anonymisiert" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-client-b.jpg" width="1280" height="784" alt="Dieselbe Plattform in der CI eines Bildungsanbieters, Logo anonymisiert" decoding="async" loading="lazy"></div></figure>
            </div>
          </div>
        </div>
      </div>

      <!-- Checkout -->
      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Checkout-Redesign</span>
            <h3>Aus Rätseln wird Bezahlen</h3>
            <p>Der alte Checkout <strong>teilte den Screen in zwei Hälften</strong> und ließ die Lizenzanzahl über ein <strong>Dropdown</strong> wählen — kein vertrautes Muster, viel Blick-Springen. Ich habe den Screen <strong>zentriert und beruhigt</strong>, das Dropdown durch einen <strong>+/−&nbsp;Stepper</strong> ersetzt und den Fluss auf bekannte Checkout-Muster gesetzt.</p>
            <p>Bewusst ehrlich: die Struktur blieb bei <strong>drei Schritten</strong> — der Gewinn liegt nicht in weniger Schritten, sondern darin, dass Nutzer wissen, was zu tun ist, statt es sich zu erschließen.</p>
          </div>
          <div class="fig">
            <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-before.jpg" width="1280" height="720" alt="Alter Checkout: geteilter Screen, Zusammenfassung links, großes Bild rechts, Lizenzanzahl per Dropdown" decoding="async" loading="lazy"></div><figcaption><b>Vorher:</b> geteilter Screen, Lizenzen per Dropdown.</figcaption></figure>
          </div>
        </div>
        <div class="phrow" style="margin-top:clamp(20px,2.6vw,32px)">
          <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-after-1.jpg" width="1280" height="910" alt="Neuer Checkout: zentrierte Karte, Lizenzanzahl per Stepper minus drei plus" decoding="async" loading="lazy"></div><figcaption>Nachher 1: fokussierte Karte, +/−&nbsp;Stepper.</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-after-2.jpg" width="1280" height="910" alt="Neuer Checkout: Zahlungsart per Radio-Button, Rechnung oder Kreditkarte, mit Karten-Icons" decoding="async" loading="lazy"></div><figcaption>Nachher 2: Standard-Zahlungsmuster.</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-after-3.jpg" width="1280" height="910" alt="Neuer Checkout: Bestätigungsseite mit grünem Häkchen, Kauf erfolgreich" decoding="async" loading="lazy"></div><figcaption>Nachher 3: klare Bestätigung.</figcaption></figure>
        </div>
      </div>

      <!-- Konsistenz -->
      <div class="bigcard light wtile">
        <div class="row2 flip">
          <div class="fig">
            <figure class="hoverable"><div class="shot"><img src="/screens/xu-cards.jpg" width="1280" height="691" alt="Vereinheitlichte Content-Karten: Kurse, Live-Sessions, Artikel und Expert-Channel mit gleicher Anatomie und konsistenten Sprach-Badges" decoding="async" loading="lazy"></div><figcaption><b>Ergebnis:</b> vier Content-Typen, eine gemeinsame Karten-Anatomie.</figcaption></figure>
          </div>
          <div class="body">
            <span class="role peri">Konsistenz &amp; Komponenten</span>
            <h3>Vier Sonderwege werden ein System</h3>
            <p>Die Content-Karten waren über die Jahre uneinheitlich gewachsen — dasselbe Element (etwa das Sprach-Icon) saß auf der einen Karte links, auf der anderen rechts. Ich habe die Varianten inventarisiert und auf <strong>vier saubere Komponenten</strong> zusammengeführt: <strong>Kurse, Podcasts, Artikel und Live-Sessions</strong>.</p>
            <p>Eine gemeinsame Anatomie, feste Positionen, klare Zustände — konsistent für Nutzer, und für die Entwicklung schnell wiederverwendbar. Genau dafür kam später auch positives Feedback aus dem Entwickler-Team.</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 7 · ERGEBNIS -->
  <section class="wrap">
    <div class="result">
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
    <div class="bigcard dark">
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
