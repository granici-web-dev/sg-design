export const caseHtmlDe = `

<header class="site">
  <div class="wrap row">
    <a class="brand" href="/de"><span class="mk"></span>Serghei Granici</a>
    <nav class="nav">
      <a class="hide-sm" href="/de/#arbeiten">Arbeiten</a>
      <a class="hide-sm" href="/de/#ueber">Über mich</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
      <a class="btn ghost" href="/en/smartplaces-app" hreflang="en" aria-label="Switch to English">EN</a>
      <a class="btn solid" href="/de/#kontakt">Kontakt</a>
    </nav>
  </div>
</header>

<main>

  <div class="wrap back"><a href="/de/#arbeiten"><span class="arw">←</span> Alle Arbeiten</a></div>

  <!-- 1 · HERO -->
  <section class="chero wrap">
    <div class="hcenter">
      <span class="hlabel">Web3 · Geo-Social · AR</span>
      <h1>Die reale Welt als<br><span class="mk">soziale Karte.</span></h1>
      <p class="subt">Design-Konzept der <span class="hl">SmartPlaces-Mobile-App</span>: ein geolokales Web3-Netzwerk — Karte, Broadcasts, AR-Belohnungen und Token — als eine App, die auch ohne Krypto-Wissen bedienbar ist. 107 Screens, ein Design-System.</p>
      <div class="pill"><a class="btn solid" href="#kontext">Fallstudie lesen <span class="arw">↓</span></a></div>
    </div>

    <div class="appcast">
      <video autoplay loop muted playsinline preload="auto" width="2480" height="1680" poster="/screens/sp-app-hero-light-poster.jpg"
        aria-label="Screencast: drei App-Screens der SmartPlaces-App — links die Karte mit Waben-Clustern, rechts der Geo-Feed; das mittlere Telefon durchläuft den Kern-Loop von AR-Modus über die eingelöste Belohnung bis zum Guthaben">
        <source src="/screens/sp-app-hero-light.mp4" type="video/mp4">
        <source src="/screens/sp-app-hero-light.webm" type="video/webm">
      </video>
    </div>

    <div class="meta">
      <div class="c"><div class="k">Rolle</div><div class="v">Sole UI/UX Designer<br><span style="color:var(--ink-3)">+ Art Direction, mit PM</span></div></div>
      <div class="c"><div class="k">Zeitraum</div><div class="v">2024 – 2025</div></div>
      <div class="c"><div class="k">Plattform</div><div class="v">iOS &amp; Android<br><span style="color:var(--ink-3)">Native App</span></div></div>
      <div class="c"><div class="k">Domäne</div><div class="v">Web3 · Geo-Social · AR</div></div>
      <div class="c"><div class="k">Umfang</div><div class="v">107 Screens + UI Kit</div></div>
      <div class="c"><div class="k">Status</div><div class="v">Design-Konzept<br><span style="color:var(--ink-3)">nicht veröffentlicht</span></div></div>
    </div>
  </section>

  <!-- 2 · KONTEXT + PROBLEM -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">Kontext &amp; Problem</span>
      <div class="prose cols">
        <p><strong>SmartPlaces</strong> ist ein geolokales Web3-Netzwerk: Die reale Welt wird in hexagonale Orte aufgeteilt, Menschen treffen sich an echten Plätzen, besitzen ihre Daten selbst und verdienen an ihrer Aktivität mit (<strong>Connect2Earn</strong>). Gegenentwurf zur extraktiven, algorithmischen Social-Media, die virtuelle Reichweite über echte Begegnungen stellt.</p>
        <p>Die App ist das Portal in dieses Ökosystem — und genau da lag die Design-Herausforderung: Karte, radius- und zeitbasierte Broadcasts, Chat, ein Feed, <strong>AR</strong>, NFTs, Token, Placements, Governance — ein enormer, krypto-lastiger Funktionsumfang sollte in <strong>eine</strong> App.</p>
        <p>Die Aufgabe war nicht „mehr Features", sondern das Gegenteil: diesen Web3-Maximalismus so gestalten, dass ihn ein <strong>ganz normaler Mensch ohne Krypto-Wissen</strong> vom ersten Screen an bedienen kann.</p>
      </div>
      <div class="cardfacts">
        <div><div class="cfn">Web3-Maximalismus</div><div class="cfc">Karte + AR + Token + Social + Placements + Governance — alles in einer Consumer-App.</div></div>
        <div><div class="cfn">Krypto-Hürde</div><div class="cfc">Wallets, Token, NFTs schrecken Mainstream-Nutzer ab, bevor sie den Wert sehen.</div></div>
        <div><div class="cfn accent">Ziel</div><div class="cfc">Komplexes bedienbar machen — echte Begegnungen &amp; Belohnungen statt Krypto-Jargon.</div></div>
      </div>
    </div>
  </section>

  <!-- 4 · KONZEPT & ENTSCHEIDUNGEN -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Konzept &amp; Design-Entscheidungen</span>
      <p class="prose" style="max-width:none">Ein Kern-Loop hält alles zusammen: <strong>auf der Karte entdecken → im echten Raum treffen &amp; posten → per AR an realen Orten einlösen → über Connect2Earn belohnt werden.</strong> Drei Entscheidungen trugen den Entwurf.</p>
      <div class="hyps">
          <div class="hyp"><span class="tag">01</span><div class="txt"><b>Die Karte muss dichte Aktivität lesbar machen,</b> nicht abbilden. Deshalb hexagonale Cluster mit Anzahl, wählbarer Radius und Inhaltsfilter statt einer Pin-Wüste.</div></div>
          <div class="hyp"><span class="tag">02</span><div class="txt"><b>Belohnung wird an echte Präsenz gebunden.</b> Erst am realen Ort erscheint das AR-Objekt zum Einsammeln — die App führt mit einem Push und einem sichtbaren Weg dorthin.</div></div>
          <div class="hyp"><span class="tag">03</span><div class="txt"><b>Token bleiben im Hintergrund.</b> Der Nutzer sieht „−10 % bei McDonald's" und ein Guthaben — nicht Wallet-Adressen und Gas. Web3-Ökonomie unter der Haube, Web2-Klarheit an der Oberfläche.</div></div>
      </div>
    </div>
  </section>

  <!-- 5 · KERN-LOOPS -->
  <section class="wrap">
    <span class="slabel clabel">Kern-Loops</span>
    <div class="wtiles">

      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Onboarding &amp; Karte</span>
            <h3>Vom ersten Tap zur lesbaren Karte</h3>
            <p>Der Einstieg fragt in kurzen Schritten nach Interessen (kein Krypto-Wort), dann steht der Nutzer auf der Karte. <strong>Hexagonale Cluster</strong> bündeln Aktivität mit Anzahl; ein <strong>Radius-Regler</strong> (100 m → unbegrenzt) und <strong>Inhaltsfilter</strong> (POIs, NFTs, Events, Broadcasts) machen die dichte Welt lesbar.</p>
          </div>
          <div class="fig">
            <div class="phrow">
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-onboarding.png" width="347" height="750" alt="Karte mit hexagonalen Clustern, Ortsmarkern und Nutzer-Avataren" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-radius.png" width="347" height="750" alt="Radius-Auswahl: grüner Radius-Kreis auf der Karte mit Slider 100 m / 300 m / 800 m / unbegrenzt" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-filter.png" width="347" height="750" alt="Inhaltsfilter: All, POIs, NFTs, Events, Broadcasts als Schalter" decoding="async" loading="lazy"></div></figure>
            </div>
          </div>
        </div>
      </div>

      <div class="bigcard light wtile">
        <div class="row2">
          <div class="fig">
            <div class="phrow">
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-broadcast.png" width="347" height="750" alt="Treffpunkt für einen Broadcast auf der Karte setzen" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-feed.png" width="347" height="750" alt="Geo-Feed: Beiträge von Nutzern in der Nähe mit Entfernung und Kommentaren" decoding="async" loading="lazy"></div></figure>
            </div>
          </div>
          <div class="body">
            <span class="role">Broadcast &amp; Social</span>
            <h3>Aus einem Post wird ein Treffen</h3>
            <p>Beiträge sind <strong>radius- und zeitbasiert</strong> (24 h) — verankert an einem Ort statt in einem globalen Feed. Ein Broadcast lässt sich mit einem <strong>Treffpunkt auf der Karte</strong> verknüpfen; der Geo-Feed zeigt, wer gerade in der Nähe aktiv ist. Chat mit Auto-Ablauf schützt die Privatsphäre.</p>
          </div>
        </div>
      </div>

      <div class="bigcard dark wtile">
        <span class="slabel g clabel">AR-Belohnung · Kernstück</span>
        <p class="prose" style="max-width:none">Die anspruchsvollste Schleife — und die, die den digitalen Wert an die physische Welt bindet: <strong>Push „Switch to AR" bei Annäherung → Kamera → Objekt am realen Ort einsammeln → Belohnung.</strong> Der eingesammelte Gegenstand ist ein NFT, ein Rabatt oder ein Ticket — hier ein −10 %-Gutschein bei McDonald's, platziert als hyperlokale AR-Werbung.</p>
        <div class="phrow" style="margin-top:clamp(24px,3vw,36px)">
          <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-ar-notify.png" width="750" height="1624" alt="Karte mit Benachrichtigung ‚Switch to AR — you are close'" decoding="async" loading="lazy"></div><figcaption>Push bei Annäherung: „Switch to AR".</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-ar-mode.png" width="750" height="1624" alt="AR-Kamera mit schwebendem Objekt (−10 %) und grünem Weg am Boden" decoding="async" loading="lazy"></div><figcaption>AR-Modus: Objekt am realen Ort, Weg führt hin.</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-ar-detected.png" width="750" height="1624" alt="Alert: Objekt erkannt, bereit zum Einsammeln" decoding="async" loading="lazy"></div><figcaption>Erkannt — bereit zum Einsammeln.</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-claimed.png" width="750" height="1624" alt="Reward claimed: McDonald's −10 %, gültig bis, Button ‚Join chat'" decoding="async" loading="lazy"></div><figcaption>Eingelöst: Rabatt im Wallet + Einladung in den Chat.</figcaption></figure>
        </div>
      </div>

      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Rewards &amp; Token · Kernstück</span>
            <h3>Token, die niemanden abschrecken</h3>
            <p>Die zweite Krux: die Ökonomie greifbar machen. Der Nutzer sieht zwei ruhige Guthaben — <strong>SmartPoints</strong> (durch Aktivität) und <strong>$SPXT</strong> — plus eine Liste eingelöster Belohnungen (Rabatte, NFTs). Die Herkunft ist eine <strong>hyperlokale Placement</strong> eines Unternehmens; für den Nutzer bleibt es ein klarer Vorteil, kein Krypto-Produkt.</p>
          </div>
          <div class="fig">
            <div class="phrow">
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-spxt.png" width="750" height="1624" alt="My SPXT Balance und Rewards-Balance als ruhige Guthaben-Karten" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-placement.png" width="347" height="750" alt="Placement-Detail: hyperlokales McDonald's-Angebot −10 %, Kosten in Punkten, Ort und Entfernung" decoding="async" loading="lazy"></div></figure>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 6 · DESIGN-SYSTEM -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Design-System</span>
      <div class="duo">
        <figure class="fig hoverable">
          <div class="shot lightcard"><img src="/screens/sp-app-uikit.png" width="1333" height="1780" alt="UI-Kit: dokumentierte Color Styles — Green-Shades-Tokens (60–99), White-Shades, Grey-Shades für das dunkle Theme" decoding="async" loading="lazy"></div>
          <figcaption><b>UI Kit:</b> benannte Farb-Tokens (Green/White/Grey-Shades 60–99), dunkles Theme mit Lime-Akzent.</figcaption>
        </figure>
        <div class="body">
          <h2 class="lead-h">107 Screens brauchen ein System.</h2>
          <p>Parallel zu den Screens entstand ein <strong>UI Kit</strong>: dokumentierte Farb-Tokens (Green-, White-, Grey-Shades als benannte Skalen), ein dunkles Theme mit <strong>Lime-Akzent</strong>, dazu Icon-Sets (32 / 46 px), Inputs, Buttons und PIN-Felder als Komponenten.</p>
          <p>So blieben 107 Screens über alle Zustände — leer, gefüllt, Skeleton, Alert, kein Netz — <strong>konsistent</strong>, und neue Screens ließen sich schnell aus Bausteinen zusammensetzen.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7 · ERGEBNIS -->
  <section class="wrap">
    <div class="result">
      <span class="slabel">Ergebnis</span>
      <div class="big">107</div>
      <p class="sub">gestaltete Screens für eine geolokale Web3-App — vom Onboarding über Karte, Social und AR bis zu Rewards, getragen von <b>einem Design-System</b>.</p>
      <div class="facts">
        <div class="f"><div class="fk">Umfang</div><div class="fv">107 Screens · alle Zustände</div></div>
        <div class="f"><div class="fk">Kern-Loops</div><div class="fv">Onboarding · Karte · Social · AR · Rewards</div></div>
        <div class="f"><div class="fk">System</div><div class="fv">UI Kit: Tokens · Komponenten · Icons</div></div>
      </div>
      <p class="note"><b>Ehrliche Einordnung:</b> Dies ist ein <b>Design-Konzept</b>. Ich habe die Firma verlassen, bevor das Design zu 100 % fertig war; es ging nicht in Produktion. Gezeigt wird also die Design- und System-Arbeit selbst — keine Launch- oder Nutzungszahlen.</p>
    </div>
  </section>

  <!-- ROLLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Rolle &amp; Prozess</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Rolle</span>
          <p>Als <strong>Sole UI/UX Designer</strong> verantwortete ich Konzept, User Flows, alle Screens und das UI Kit — in enger Abstimmung mit einem <strong>PM</strong>. Zusätzlich führte ich per <strong>Art Direction</strong> einen Grafik- und einen Motion-Designer.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Prozess</span>
          <p>Von der Whitepaper-Spec über Wettbewerbsanalyse und Stakeholder-Workshops zu Flows, Screens und dem <strong>parallel</strong> wachsenden Design-System. Bezug zur Web-Seite von SmartPlaces: siehe die <a href="/de/smartplaces" style="color:#EDEEEF;text-decoration:underline">SmartPlaces-Web-Fallstudie</a>.</p>
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
