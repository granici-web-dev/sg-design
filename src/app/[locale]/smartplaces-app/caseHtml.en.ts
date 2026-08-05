export const caseHtmlEn = `

<header class="site">
  <div class="wrap"><div class="row">
    <a class="brand" href="/en"><img src="/granici-logo.svg" alt="Gránici Design" width="112" height="31" /></a>
    <nav class="nav">
      <a class="hide-sm" href="/en/#arbeiten">Work</a>
      <a class="hide-sm" href="/en/#ueber">About</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      <div class="langtog"><a href="/de/smartplaces-app" hreflang="de" aria-label="Auf Deutsch anzeigen">DE</a><a href="/en/smartplaces-app" class="on">EN</a></div>
      <a class="btn solid" href="/en/#kontakt">Contact</a>
    </nav>
  </div>
  </div>
</header>

<main>

  <div class="wrap back"><a href="/en/#arbeiten"><span class="arw">←</span> All work</a></div>

  <!-- 1 · HERO -->
  <section class="chero wrap">
    <div class="hcenter">
      <span class="hlabel">Web3 · Geo-Social · AR</span>
      <h1>The real world as<br>a <span class="mk">social map.</span></h1>
      <p class="subt">Design concept for the <span class="hl">SmartPlaces mobile app</span>: a location-based Web3 network — map, broadcasts, AR rewards and tokens — as one app you can use without any crypto knowledge. 107 screens, one design system.</p>
      <div class="pill"><a class="btn solid" href="#kontext">Read the case study <span class="arw">↓</span></a></div>
    </div>

    <div class="appcast">
      <video autoplay loop muted playsinline preload="auto" width="2480" height="1680" poster="/screens/sp-app-hero-light-poster.jpg"
        aria-label="Screencast: three app screens of the SmartPlaces app — the map with cluster cells on the left, the geo feed on the right; the centre phone runs through the core loop from AR mode to the claimed reward and the balance">
        <source src="/screens/sp-app-hero-light.mp4" type="video/mp4">
        <source src="/screens/sp-app-hero-light.webm" type="video/webm">
      </video>
    </div>

    <div class="meta">
      <div class="c"><div class="k">Role</div><div class="v">Sole UI/UX Designer<br><span style="color:var(--ink-3)">+ art direction, with a PM</span></div></div>
      <div class="c"><div class="k">Timeframe</div><div class="v">2024 – 2025</div></div>
      <div class="c"><div class="k">Platform</div><div class="v">iOS &amp; Android<br><span style="color:var(--ink-3)">Native app</span></div></div>
      <div class="c"><div class="k">Domain</div><div class="v">Web3 · Geo-Social · AR</div></div>
      <div class="c"><div class="k">Scope</div><div class="v">107 screens + UI Kit</div></div>
      <div class="c"><div class="k">Status</div><div class="v">Design concept<br><span style="color:var(--ink-3)">not released</span></div></div>
    </div>
  </section>

  <!-- 2 · CONTEXT + PROBLEM -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">Context &amp; problem</span>
      <div class="prose cols">
        <p><strong>SmartPlaces</strong> is a location-based Web3 network: the real world is split into hexagonal places, people meet at actual locations, own their data, and earn from their activity (<strong>Connect2Earn</strong>). A counter-model to extractive, algorithmic social media that puts virtual reach above real encounters.</p>
        <p>The app is the portal into this ecosystem — and that was the design challenge: map, radius- and time-based broadcasts, chat, a feed, <strong>AR</strong>, NFTs, tokens, placements, governance — an enormous, crypto-heavy feature set had to fit into <strong>one</strong> app.</p>
        <p>The task wasn't "more features" but the opposite: design this Web3 maximalism so an <strong>ordinary person with no crypto knowledge</strong> can use it from the very first screen.</p>
      </div>
      <div class="cardfacts">
        <div><div class="cfn">Web3 maximalism</div><div class="cfc">Map + AR + tokens + social + placements + governance — all in one consumer app.</div></div>
        <div><div class="cfn">The crypto barrier</div><div class="cfc">Wallets, tokens and NFTs scare off mainstream users before they see the value.</div></div>
        <div><div class="cfn accent">Goal</div><div class="cfc">Make the complex usable — real encounters &amp; rewards instead of crypto jargon.</div></div>
      </div>
    </div>
  </section>

  <!-- 4 · CONCEPT + DECISIONS -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Concept &amp; design decisions</span>
      <p class="prose" style="max-width:none">One core loop holds it together: <strong>discover on the map → meet &amp; post in real space → claim via AR at real locations → get rewarded through Connect2Earn.</strong> Three decisions carried the design.</p>
      <div class="hyps">
          <div class="hyp"><span class="tag">01</span><div class="txt"><b>The map must make dense activity legible,</b> not just depict it. Hence hexagonal clusters with a count, a selectable radius and content filters instead of a wall of pins.</div></div>
          <div class="hyp"><span class="tag">02</span><div class="txt"><b>Reward is tied to real presence.</b> The AR object to collect only appears at the actual location — the app guides you there with a push and a visible path.</div></div>
          <div class="hyp"><span class="tag">03</span><div class="txt"><b>Tokens stay in the background.</b> The user sees "−10% at McDonald's" and a balance — not wallet addresses and gas. Web3 economy under the hood, Web2 clarity on the surface.</div></div>
      </div>
    </div>
  </section>

  <!-- 5 · CORE LOOPS -->
  <section class="wrap">
    <span class="slabel clabel">Core loops</span>
    <div class="wtiles">

      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Onboarding &amp; map</span>
            <h3>From first tap to a legible map</h3>
            <p>The entry asks about interests in short steps (no crypto word), then the user is on the map. <strong>Hexagonal clusters</strong> bundle activity with a count; a <strong>radius slider</strong> (100 m → unlimited) and <strong>content filters</strong> (POIs, NFTs, events, broadcasts) make the dense world legible.</p>
          </div>
          <div class="fig">
            <div class="phrow">
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-onboarding.png" width="347" height="750" alt="Map with hexagonal clusters, location markers and user avatars" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-radius.png" width="347" height="750" alt="Radius selection: green radius circle on the map with a slider 100 m / 300 m / 800 m / unlimited" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-filter.png" width="347" height="750" alt="Content filters: All, POIs, NFTs, Events, Broadcasts as switches" decoding="async" loading="lazy"></div></figure>
            </div>
          </div>
        </div>
      </div>

      <div class="bigcard light wtile">
        <div class="row2">
          <div class="fig">
            <div class="phrow">
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-broadcast.png" width="347" height="750" alt="Setting a meeting point for a broadcast on the map" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-feed.png" width="347" height="750" alt="Geo feed: posts from nearby users with distance and comments" decoding="async" loading="lazy"></div></figure>
            </div>
          </div>
          <div class="body">
            <span class="role">Broadcast &amp; social</span>
            <h3>A post becomes a meetup</h3>
            <p>Posts are <strong>radius- and time-based</strong> (24 h) — anchored to a place instead of a global feed. A broadcast can be tied to a <strong>meeting point on the map</strong>; the geo feed shows who's active nearby. Chat with auto-expiry protects privacy.</p>
          </div>
        </div>
      </div>

      <div class="bigcard dark wtile">
        <span class="slabel g clabel">AR reward · centrepiece</span>
        <p class="prose" style="max-width:none">The most demanding loop — and the one that ties digital value to the physical world: <strong>push "Switch to AR" on approach → camera → collect the object at the real location → reward.</strong> The collected item is an NFT, a discount or a ticket — here a −10% McDonald's voucher placed as hyperlocal AR advertising.</p>
        <div class="phrow" style="margin-top:clamp(24px,3vw,36px)">
          <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-ar-notify.png" width="750" height="1624" alt="Map with notification ‚Switch to AR — you are close'" decoding="async" loading="lazy"></div><figcaption>Push on approach: "Switch to AR".</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-ar-mode.png" width="750" height="1624" alt="AR camera with a floating object (−10%) and a green path on the ground" decoding="async" loading="lazy"></div><figcaption>AR mode: object at the real place, path leads to it.</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-ar-detected.png" width="750" height="1624" alt="Alert: object detected, ready to collect" decoding="async" loading="lazy"></div><figcaption>Detected — ready to collect.</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-claimed.png" width="750" height="1624" alt="Reward claimed: McDonald's −10%, valid until, ‚Join chat' button" decoding="async" loading="lazy"></div><figcaption>Claimed: discount in the wallet + invite to the chat.</figcaption></figure>
        </div>
      </div>

      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Rewards &amp; tokens · centrepiece</span>
            <h3>Tokens that don't scare anyone off</h3>
            <p>The second crux: making the economy tangible. The user sees two calm balances — <strong>SmartPoints</strong> (from activity) and <strong>$SPXT</strong> — plus a list of claimed rewards (discounts, NFTs). The source is a <strong>hyperlocal placement</strong> by a business; for the user it stays a clear benefit, not a crypto product.</p>
          </div>
          <div class="fig">
            <div class="phrow">
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-spxt.png" width="750" height="1624" alt="My SPXT balance and rewards balance as calm balance cards" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-app-placement.png" width="347" height="750" alt="Placement detail: hyperlocal McDonald's offer −10%, cost in points, location and distance" decoding="async" loading="lazy"></div></figure>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 6 · DESIGN SYSTEM -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Design system</span>
      <div class="duo">
        <figure class="fig hoverable">
          <div class="shot lightcard"><img src="/screens/sp-app-uikit.png" width="1333" height="1780" alt="UI Kit: documented color styles — green-shade tokens (60–99), white shades, grey shades for the dark theme" decoding="async" loading="lazy"></div>
          <figcaption><b>UI Kit:</b> named color tokens (green/white/grey shades 60–99), dark theme with a lime accent.</figcaption>
        </figure>
        <div class="body">
          <h2 class="lead-h">107 screens need a system.</h2>
          <p>Alongside the screens I built a <strong>UI Kit</strong>: documented color tokens (green, white, grey shades as named scales), a dark theme with a <strong>lime accent</strong>, plus icon sets (32 / 46 px), inputs, buttons and PIN fields as components.</p>
          <p>That kept 107 screens across every state — empty, filled, skeleton, alert, no connection — <strong>consistent</strong>, and new screens could be assembled quickly from building blocks.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 7 · RESULT -->
  <section class="wrap">
    <div class="result">
      <span class="slabel">Result</span>
      <div class="big">107</div>
      <p class="sub">screens designed for a location-based Web3 app — from onboarding through map, social and AR to rewards, carried by <b>one design system</b>.</p>
      <div class="facts">
        <div class="f"><div class="fk">Scope</div><div class="fv">107 screens · all states</div></div>
        <div class="f"><div class="fk">Core loops</div><div class="fv">Onboarding · Map · Social · AR · Rewards</div></div>
        <div class="f"><div class="fk">System</div><div class="fv">UI Kit: tokens · components · icons</div></div>
      </div>
      <p class="note"><b>Honest framing:</b> this is a <b>design concept</b>. I left the company before the design was 100% finished; it did not go into production. So what's shown is the design and system work itself — no launch or usage numbers.</p>
    </div>
  </section>

  <!-- ROLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Role &amp; process</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Role</span>
          <p>As <strong>sole UI/UX designer</strong> I owned concept, user flows, all screens and the UI Kit — in close coordination with a <strong>PM</strong>. I also led a graphic and a motion designer via <strong>art direction</strong>.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Process</span>
          <p>From the whitepaper spec through competitive analysis and stakeholder workshops to flows, screens and the design system growing <strong>in parallel</strong>. For the SmartPlaces web side, see the <a href="/en/smartplaces" style="color:#EDEEEF;text-decoration:underline">SmartPlaces web case study</a>.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact wrap">
    <span class="slabel" style="justify-content:center">Contact</span>
    <h2>Next case study or a conversation?</h2>
    <p>Open to senior product / UI-UX design roles in the Cologne / Bonn area and remote.</p>
    <div class="cta">
      <a class="btn solid" href="mailto:granici.design@gmail.com">granici.design@gmail.com</a>
      <a class="btn ghost" href="/en/#arbeiten">All work</a>
      <a class="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
    </div>
  </section>

</main>

<footer class="site">
  <div class="wrap row">
    <span>© 2026 Serghei Granici — Senior UI/UX Designer</span>
    <span class="links">
      <a href="mailto:granici.design@gmail.com">Email</a>
      <a href="https://linkedin.com/in/serghei-granici" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      <button type="button" class="cc-link" data-cookie-settings>Cookies</button>
    </span>
  </div>
</footer>

`;
