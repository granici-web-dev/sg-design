export const caseHtmlDe = `

<header class="site">
  <div class="wrap"><div class="row">
    <a class="brand" href="/de"><img src="/granici-logo.svg" alt="Gránici Design" width="112" height="31" /></a>
    <nav class="nav">
      <a class="hide-sm" href="/de/#arbeiten">Arbeiten</a>
      <a class="hide-sm" href="/de/#ueber">Über mich</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      <div class="langtog"><a href="/de/smartplaces" class="on">DE</a><a href="/en/smartplaces" hreflang="en" aria-label="Switch to English">EN</a></div>
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
      <span class="hlabel">Web3 · Geo-SocialFi</span>
      <h1>SmartPlaces — Ein Web3-Netzwerk aus<br><span class="mk">digitalem Land.</span></h1>
      <p class="subt">Digitales Land kaufen — dafür brauchte es eine Krypto-Wallet, $ADA und Nerven für Kursschwankungen. Für alle außerhalb der Web3-Blase: <span class="hl">eine Wand</span>.</p>
      <div class="pill"><a class="btn solid" href="#kontext">Fallstudie lesen <span class="arw">↓</span></a></div>
    </div>

    <!-- real product dashboard with highlight callouts -->
    <div class="dashwrap">
      <video class="dashimg" autoplay loop muted playsinline preload="metadata"
        width="3840" height="2400" poster="/screens/sp-hero-poster.jpg"
        aria-label="Screencast: die SmartPlaces-Oberfläche baut sich auf, ein Land-Plot wird auf der Karte gewählt und die Buy-Schaltfläche geklickt">
        <source src="/screens/sp-screencast.mp4" type="video/mp4">
        <source src="/screens/sp-screencast.webm" type="video/webm">
      </video>
    </div>

    <div class="meta">
      <div class="c"><div class="k">Rolle</div><div class="v">Alleiniger UI/UX Designer</div></div>
      <div class="c"><div class="k">Team</div><div class="v">Art Direction: 1 Grafik-, 1 Motion-Designer</div></div>
      <div class="c"><div class="k">Zeitraum</div><div class="v">2023 – 2025</div></div>
      <div class="c"><div class="k">Plattform</div><div class="v">Web-App · Mobile<br><span style="color:var(--ink-3)">Cardano-Blockchain</span></div></div>
      <div class="c"><div class="k">Domäne</div><div class="v">Web3 · Standortbasiertes SocialFi</div></div>
      <div class="c"><div class="k">Beitrag</div><div class="v">UX-Recherche · User Flows · UI-System · Prototyp</div></div>
    </div>
  </section>


  <!-- 2 · CHARACTER + SETTING -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">Der Käufer vor der Wallet-Wand</span>
      <div class="prose cols">
        <p><strong>SmartPlaces</strong> ist ein standortbasiertes SocialFi-Netzwerk auf der Cardano-Blockchain: eine mobile App, die die reale Welt in hexagonale <strong>Land-Plots</strong> aufteilt. Wer einen Plot besitzt, wird zum „Pioneer“ und verdient an der Aktivität an diesem Ort — Posts, Events, Werbung und Geschäfte, die dort laufen.</p>
        <p>Der Motor des Netzwerks: verkaufte Plots. Und genau da lag das Problem: <strong>Der Kauf setzte eine Krypto-Wallet voraus</strong> — Nutzer mussten $ADA halten, einen Wallet-Flow verstehen und Kursschwankungen zwischen Entscheidung und Zahlung akzeptieren. Das Geschäftsziel war eindeutig: <strong>mehr Land-Plots verkaufen</strong>, indem der Kauf auch für Menschen ohne Krypto-Erfahrung funktioniert.</p>
      </div>
      <div class="cardfacts">
        <div><div class="cfn">Wallet-only</div><div class="cfc">Kauf nur mit Krypto-Wallet und $ADA — der häufigste Absprung&shy;punkt vor der Zahlung.</div></div>
        <div><div class="cfn">Kurs-Risiko</div><div class="cfc">Der Preis schwankte mit dem Token-Kurs zwischen Auswahl und Bezahlung.</div></div>
        <div><div class="cfn accent">Ziel</div><div class="cfc">Mehr Plot-Verkäufe, ohne die Web3-Ökonomie dahinter aufzugeben.</div></div>
      </div>
    </div>
  </section>

  <!-- 3 · HYPOTHESEN -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Hypothesen</span>
      <p class="prose" style="max-width:none">Drei prüfbare Annahmen führten zu einem internen Guthaben-System für den Kauf — <strong>Land Plot Credits</strong> — statt eines direkten Karten-Kaufs des Plots.</p>
      <div class="hyps">
          <div class="hyp"><span class="tag">H1</span><div class="txt"><b>Wenn der Kauf per Karte in Euro möglich ist, dann schließen auch Nutzer ohne Krypto-Erfahrung ab.</b></div></div>
          <div class="hyp"><span class="tag">H2</span><div class="txt"><b>Wenn Credits vorab gekauft werden, dann steigen Wiederkäufe,</b> weil der nächste Plot ein Ein-Klick-Schritt zum stabilen Euro-Preis ist.</div></div>
          <div class="hyp"><span class="tag">H3</span><div class="txt"><b>Wenn eine Zwischenwährung den Fiat-Kauf vom NFT-Mint trennt, dann sinken Zahlungs- und Rechtsrisiken,</b> weil Kartenanbieter Gutscheine akzeptieren, aber direkte NFT-Verkäufe oft blockieren.</div></div>
      </div>
      <figure class="hoverable" style="margin-top:clamp(26px,3.4vw,42px)">
        <div class="shot lightcard"><img src="/screens/sp-userflow-credits.png" width="1931" height="1324" alt="User Flow „Buy Credits“: Entry Point → Promo-Code? (Ja/Nein) → Anzahl Credits wählen → Buy credits → Stripe-Seite" decoding="async" loading="lazy"></div>
        <figcaption><b>User Flow „Buy Credits“:</b> Vom Einstieg über die Promo-Code-Abzweigung bis zur Zahlung — die Fiat-Transaktion selbst läuft über <b>Stripe</b>. Als interaktiver Figma-Prototyp aufgebaut.</figcaption>
      </figure>
    </div>
  </section>

  <!-- 4 · LÖSUNG -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel g clabel">Lösung</span>
      <div class="duo">
        <figure class="fig hoverable">
          <div class="shot"><img src="/screens/green-05-smartcredits.png" width="1440" height="900" alt="Kauf-Dialog für Land Plot Credits: Fiat-Währungswahl (EUR), fester Euro-Preis, Bezahlung per Karte oder Token" decoding="async" loading="lazy"></div>
          <figcaption><b>Land Plot Credits:</b> Währung wählen (EUR), Menge festlegen, fester Preis — Kauf per Karte, ohne Cardano-Wallet.</figcaption>
        </figure>
        <div class="body">
          <h2 class="lead-h">Karte → Credits → Plot.</h2>
          <p>Der Kern der Arbeit: eine <strong>fiat-kaufbare Zwischenwährung</strong> speziell für den Land-Kauf. Der Nutzer kauft Credits in Euro per Bankkarte — ohne je eine Wallet, $ADA oder die Cardano-Mechanik zu berühren.</p>
          <p>Mit dem Guthaben wird der Plot in <strong>einem Schritt</strong> gekauft. Der Preis steht in Euro fest, bevor bezahlt wird — die Token-Volatilität bleibt für den Käufer unsichtbar. Web3-Ökonomie unter der Haube, Web2-Einfachheit an der Oberfläche.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5 · VALIDIERUNG -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel clabel">Validierung</span>
      <p class="prose" style="max-width:none">Der Fiat-Weg wurde als <strong>Hypothese validiert</strong> — Community-Umfrage davor, Zahlen danach. Ausgerollt in zwei Schritten, damit jeder Teil für sich funktioniert:</p>
      <div class="steps">
        <div class="step"><div class="no">Schritt 1</div><h4>Credits kaufbar machen</h4><p>Zuerst der Fiat-Kauf der Credits selbst — der neue Web2-Eingang ins Ökosystem.</p></div>
        <div class="step"><div class="no">Schritt 2</div><h4>Plot mit Credits kaufen</h4><p>Danach der Plot-Kauf per Guthaben in einem Schritt.</p></div>
      </div>
    </div>
  </section>

  <!-- 6 · ERGEBNIS -->
  <section class="wrap">
    <div class="result">
      <span class="slabel">Ergebnis</span>
      <div class="big"><span class="plus">+</span>771</div>
      <p class="sub">verkaufte Land-Plots in der <b>ersten Woche</b> nach dem Fiat-Rollout.</p>
      <div class="facts">
        <div class="f"><div class="fk">Basis vor Rollout</div><div class="fv">≈ 11.000 verkaufte Plots</div></div>
        <div class="f"><div class="fk">Erste Woche</div><div class="fv">+771 Plots · +7 %</div></div>
        <div class="f"><div class="fk">Neuer Eingang</div><div class="fv">Kauf per Bankkarte statt Wallet</div></div>
      </div>
      <p class="note"><b>Zur Einordnung:</b> +771 ist der Zuwachs der ersten Woche gegenüber der bestehenden Basis von rund 11.000 Plots. Das Feature ging in dieser Woche live — der zeitliche Zusammenhang ist stark; einen isolierten Kausalnachweis gegen andere Effekte beanspruche ich nicht. H2 (Wiederkäufe) und H3 (Zahlungs- und Rechtsrisiken) ließen sich im Beobachtungszeitraum nicht mehr isoliert messen.</p>
    </div>
  </section>

  <!-- 7 · BREADTH -->
  <section class="wrap">
    <span class="slabel clabel">Was ich außerdem verantwortet habe</span>
    <div class="wtiles">
      <div class="bigcard light wtile">

        <!-- Business -->
        <div class="bizblock">
          <div class="bizhead">
            <span class="role">Business-Onboarding</span>
            <div class="bizh3"><h3>Hyperlokale Werbung ohne Krypto-Wissen</h3><span class="vbadge">V1</span></div>
            <p>Lokale Geschäfte wollten Reichweite genau dort, wo Menschen gerade physisch sind — auf Ebene einzelner Orte und Zeitfenster statt grobem Radius-Targeting. Der Weg dahin führte bisher über Krypto. <strong>Ich habe ein Self-Service-Dashboard in der Logik eines vertrauten Werbe-Managers entworfen:</strong> Kampagne bauen, auf der Karte an Ort und Zeitfenster platzieren, in Euro bezahlen, Ergebnis in Echtzeit sehen — ohne ein einziges Krypto-Wort im Interface.</p>
            <p class="vnote">Gezeigt ist die V1 des Ad-Managers. Ein Redesign war geplant, wurde aber vor meinem Ausscheiden nicht mehr umgesetzt.</p>
          </div>
          <div class="adshots">
            <figure class="hoverable">
              <div class="shot"><img src="/screens/sp-ads-myads.png" width="1440" height="920" alt="Ad-Manager „My placements“: Kampagnenliste mit Klicks gesamt, Klicks pro Tag, Claims, Status und „Create new Ads“" decoding="async" loading="lazy"></div>
              <figcaption>Ad-Manager (V1): alle Kampagnen mit Status, Klicks und Claims auf einen Blick.</figcaption>
            </figure>
            <figure class="hoverable">
              <div class="shot"><img src="/screens/sp-ads-create.png" width="1440" height="989" alt="Kampagne erstellen: Bild, Titel, Beschreibung, Tags, Netzwerk und Preis in Euro" decoding="async" loading="lazy"></div>
              <figcaption>Kampagne bauen (V1): Bild, Text, Tags, Netzwerk, Preis in € — kein Krypto-Wort.</figcaption>
            </figure>
          </div>
        </div>

      </div>
      <div class="bigcard light wtile">

        <!-- Plot card -->
        <div class="row2 flip">
          <div class="body">
            <span class="role">Kauf-Entscheidung</span>
            <h3>Den Wert eines Plots lesbar machen</h3>
            <p>Auf der Karte liegen tausende Hexagone. Ein Käufer entscheidet nicht nach Koordinaten, sondern nach dem, <strong>was&nbsp;real&nbsp;an&nbsp;diesem&nbsp;Ort&nbsp;ist</strong>: welche Geschäfte, Cafés und Sehenswürdigkeiten darauf liegen — je mehr Leben, desto höher das Verdienst&shy;potenzial. Deshalb zeigt die Plot-Karte realen Kontext statt einer Datenwüste; die Entscheidung wird zur Frage „Was ist hier los?“.</p>
          </div>
          <figure class="fig hoverable">
            <div class="shot"><img src="/screens/01-smartplaces-landplots.png" width="1440" height="900" alt="Kartenansicht mit farbcodierten Plots (belegt, zu verkaufen, im Besitz) und Inhaltsfiltern" decoding="async" loading="lazy"></div>
            <figcaption>Farbcodierte Plots und Inhalts&shy;filter (NFTs, Ads, Events, Posts) machen die dichte Karte lesbar.</figcaption>
          </figure>
        </div>

      </div>
      <div class="bigcard light wtile">

        <!-- AR -->
        <div class="row2">
          <div class="body">
            <span class="role">AR-Mechanik</span>
            <h3>Das Unsichtbare sichtbar machen</h3>
            <p>AR-Objekte liegen an realen Orten — aber ohne Hinweis weiß niemand, dass nebenan etwas zu holen ist. Das&nbsp;Feature&nbsp;blieb&nbsp;unentdeckt.</p>
            <p><strong>Meine Lösung: ein Push bei Annäherung</strong>, der genau den Moment markiert, in dem sich der Blick durch die Kamera lohnt — aus einer unsichtbaren Mechanik wird ein Anlass. Den vollständigen AR-Loop zeige ich in der <a href="/de/smartplaces-app" style="color:inherit;text-decoration:underline">SmartPlaces-App-Fallstudie</a>.</p>
          </div>
          <div class="fig">
            <div class="phones">
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-ar-1.png" width="750" height="1624" alt="Push „Switch to AR — You are close!“ und Event-Karte mit Claim-Fortschritt am Messestand" decoding="async" loading="lazy"></div><figcaption>Push bei Annäherung + Event-Detail: was es zu holen gibt, wo und bis wann — inklusive Verknappung (108/150 claimed).</figcaption></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-ar-2.png" width="768" height="1624" alt="AR-Kameraansicht am realen Messestand mit 3D-Objekt und „Swipe to claim“" decoding="async" loading="lazy"></div><figcaption>AR-Ansicht: Objekt am realen Ort — Swipe to claim.</figcaption></figure>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ROLLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Rolle &amp; System</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Rolle</span>
          <p>Als <strong>alleiniger UI/UX Designer</strong> verantwortete ich Recherche, User Flows, UI und Prototyp. Das visuelle System lebt in <strong>Figma Styles</strong> (Komponenten &amp; Tokens); die Flows liefen als interaktiver Prototyp.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Art Direction</span>
          <p>Zusätzlich führte ich <strong>einen Grafik-/Illustrations- und einen Motion-Designer</strong> — Art Direction dafür, dass Icons, Illustrationen und Bewegung dieselbe Sprache sprechen wie das Interface.</p>
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
