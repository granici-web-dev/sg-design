export const caseHtmlEn = `

<header class="site">
  <div class="wrap row">
    <a class="brand" href="/en"><span class="mk"></span>Serghei Granici</a>
    <nav class="nav">
      <a class="hide-sm" href="/en/#arbeiten">Work</a>
      <a class="hide-sm" href="/en/#ueber">About</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
      <div class="langtog"><a href="/de/smartplaces" hreflang="de" aria-label="Auf Deutsch anzeigen">DE</a><a href="/en/smartplaces" class="on">EN</a></div>
      <a class="btn solid" href="/en/#kontakt">Contact</a>
    </nav>
  </div>
</header>

<main>

  <!-- BACK -->
  <div class="wrap back"><a href="/en/#arbeiten"><span class="arw">←</span> All work</a></div>

  <!-- 1 · HERO -->
  <section class="chero wrap">
    <div class="hcenter">
      <span class="hlabel">Web3 · Geo-SocialFi</span>
      <h1>SmartPlaces — A Web3 network built from<br><span class="mk">digital land.</span></h1>
      <p class="subt">SmartPlaces divides the real world into hexagonal <span class="hl">land plots</span> on the Cardano blockchain. Whoever owns a plot becomes a “Pioneer” and earns from the activity on location — posts, events, businesses and ads.</p>
      <div class="pill"><a class="btn solid" href="#kontext">Read case study <span class="arw">↓</span></a></div>
    </div>

    <!-- real product dashboard with highlight callouts -->
    <div class="dashwrap">
      <video class="dashimg" autoplay loop muted playsinline preload="metadata"
        width="3840" height="2400" poster="/screens/sp-hero-poster.jpg"
        aria-label="Screencast: the SmartPlaces interface builds up, a land plot is selected on the map and the Buy button is clicked">
        <source src="/screens/sp-screencast.mp4" type="video/mp4">
        <source src="/screens/sp-screencast.webm" type="video/webm">
      </video>
    </div>

    <div class="meta">
      <div class="c"><div class="k">Role</div><div class="v">Sole UI/UX Designer</div></div>
      <div class="c"><div class="k">Team</div><div class="v">Art direction: 1 graphic, 1 motion designer</div></div>
      <div class="c"><div class="k">Timeframe</div><div class="v">2023 – 2025</div></div>
      <div class="c"><div class="k">Platform</div><div class="v">Web app · Mobile<br><span style="color:var(--ink-3)">Cardano blockchain</span></div></div>
      <div class="c"><div class="k">Domain</div><div class="v">Web3 · Location-based SocialFi</div></div>
      <div class="c"><div class="k">Contribution</div><div class="v">UX research · User flows · UI system · Prototype</div></div>
    </div>
  </section>


  <!-- 2 · CONTEXT + PROBLEM -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">Context &amp; Problem</span>
      <div class="prose cols">
        <p><strong>SmartPlaces</strong> is a location-based SocialFi network on the Cardano blockchain: a mobile app that divides the real world into hexagonal <strong>land plots</strong>. Whoever owns a plot becomes a “Pioneer” and earns from the activity at that location — posts, events, ads and businesses running there.</p>
        <p>The engine of the network: plots sold. And that was exactly the problem: <strong>buying required a crypto wallet</strong> — users had to hold $ADA, understand a wallet flow and accept price swings between decision and payment. Doable for a Web3 audience; a wall for everyone else.</p>
        <p>The business goal was clear: <strong>sell more land plots</strong> — by making the purchase work for people without crypto experience, too.</p>
      </div>
      <div class="cardfacts">
        <div><div class="cfn">Wallet-only</div><div class="cfc">Purchase only with a crypto wallet and $ADA — the most common drop-off point before payment.</div></div>
        <div><div class="cfn">Price risk</div><div class="cfc">The price fluctuated with the token rate between selection and payment.</div></div>
        <div><div class="cfn accent">Goal</div><div class="cfc">More plot sales without giving up the Web3 economy behind it.</div></div>
      </div>
    </div>
  </section>

  <!-- 4 · HYPOTHESES -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Hypotheses</span>
      <p class="prose" style="max-width:none">Three testable assumptions led to an internal credit system for the purchase — <strong>Land Plot Credits</strong> — instead of buying the plot directly by card.</p>
      <div class="hyps">
          <div class="hyp"><span class="tag">H1</span><div class="txt"><b>If buying by card in euros is possible, then users without crypto experience will complete too,</b> because the wallet hurdle — the biggest drop-off point — is removed.</div></div>
          <div class="hyp"><span class="tag">H2</span><div class="txt"><b>If credits are bought in advance, then repeat purchases rise,</b> because the next plot is a one-click step at a stable euro price.</div></div>
          <div class="hyp"><span class="tag">H3</span><div class="txt"><b>If an intermediate currency separates the fiat purchase from the NFT mint, then payment and legal risks drop,</b> because card providers accept vouchers but often block direct NFT sales.</div></div>
      </div>
      <figure class="hoverable" style="margin-top:clamp(26px,3.4vw,42px)">
        <div class="shot lightcard"><img src="/screens/sp-userflow-credits.png" width="1931" height="1324" alt="User flow “Buy Credits”: entry point → promo code? (yes/no) → choose number of credits → buy credits → Stripe page" decoding="async" loading="lazy"></div>
        <figcaption><b>User flow “Buy Credits”:</b> from entry through the promo-code branch to payment — the fiat transaction itself runs via <b>Stripe</b>. Built as an interactive Figma prototype.</figcaption>
      </figure>
    </div>
  </section>

  <!-- 5 · SOLUTION -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel g clabel">Solution</span>
      <div class="duo">
        <figure class="fig hoverable">
          <div class="shot"><img src="/screens/green-05-smartcredits.png" width="1440" height="900" alt="Purchase dialog for Land Plot Credits: fiat currency choice (EUR), fixed euro price, payment by card or token" decoding="async" loading="lazy"></div>
          <figcaption><b>Land Plot Credits:</b> choose currency (EUR), set the amount, fixed price — buy by card, without a Cardano wallet.</figcaption>
        </figure>
        <div class="body">
          <h2 class="lead-h">Card → Credits → Plot.</h2>
          <p>The core of the work: a <strong>fiat-purchasable intermediate currency</strong> built specifically for buying land. The user buys credits in euros by bank card — without ever touching a wallet, $ADA or the Cardano mechanics.</p>
          <p>With the balance, the plot is bought in <strong>one step</strong>. The price is fixed in euros before payment — token volatility stays invisible to the buyer. Web3 economy under the hood, Web2 simplicity on the surface.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5b · BREADTH -->
  <section class="wrap">
    <span class="slabel clabel">Further work</span>
    <div class="wtiles">
      <div class="bigcard light wtile">

        <!-- Business -->
        <div class="bizblock">
          <div class="bizhead">
            <span class="role">Business onboarding</span>
            <div class="bizh3"><h3>Hyperlocal advertising without crypto knowledge</h3><span class="vbadge">V1</span></div>
            <p>Local businesses wanted reach exactly where people physically are right now — at the level of individual places and time windows instead of coarse radius targeting. Until now, the path there ran through crypto. <strong>I designed a self-service dashboard following the logic of a familiar ad manager:</strong> build a campaign, place it on the map at a location and time window, pay in euros, see results in real time — without a single crypto word in the interface.</p>
            <p class="vnote">Shown is V1 of the ad manager. A redesign was planned but was no longer implemented before I left.</p>
          </div>
          <div class="adshots">
            <figure class="hoverable">
              <div class="shot"><img src="/screens/sp-ads-myads.png" width="1440" height="920" alt="Ad manager “My placements”: campaign list with total clicks, clicks per day, claims, status and “Create new Ads”" decoding="async" loading="lazy"></div>
              <figcaption>Ad manager (V1): all campaigns with status, clicks and claims at a glance.</figcaption>
            </figure>
            <figure class="hoverable">
              <div class="shot"><img src="/screens/sp-ads-create.png" width="1440" height="989" alt="Create campaign: image, title, description, tags, network and price in euros" decoding="async" loading="lazy"></div>
              <figcaption>Build a campaign (V1): image, text, tags, network, price in € — no crypto word.</figcaption>
            </figure>
          </div>
        </div>

      </div>
      <div class="bigcard light wtile">

        <!-- Plot card -->
        <div class="row2 flip">
          <div class="body">
            <span class="role">Purchase decision</span>
            <h3>Making a plot's value readable</h3>
            <p>The map holds thousands of hexagons. A buyer decides not by coordinates, but by <strong>what&nbsp;is&nbsp;really&nbsp;at&nbsp;that&nbsp;place</strong>: which shops, cafés and landmarks sit on it — the more life, the higher the earning potential.</p>
            <p>That's why the plot card shows real context — <strong>color-coding by status, filters by content and availability</strong> — instead of a data desert. The decision becomes the question “What's going on here?”.</p>
          </div>
          <figure class="fig hoverable">
            <div class="shot"><img src="/screens/01-smartplaces-landplots.png" width="1440" height="900" alt="Map view with color-coded plots (occupied, for sale, owned) and content filters" decoding="async" loading="lazy"></div>
            <figcaption>Color-coded plots and content filters (NFTs, ads, events, posts) make the dense map readable.</figcaption>
          </figure>
        </div>

      </div>
      <div class="bigcard light wtile">

        <!-- AR -->
        <div class="row2">
          <div class="body">
            <span class="role">AR mechanic</span>
            <h3>Making the invisible visible</h3>
            <p>AR objects sit at real locations — but without a cue, no one knows there's something to grab nearby. The&nbsp;feature&nbsp;went&nbsp;undiscovered.</p>
            <p><strong>My solution: a proximity push “Switch to AR — You are close!” → camera → collect the object at the real location.</strong> Reward: NFT, discount, ticket or SmartPoints. The user now knows when it's worth looking through the camera.</p>
          </div>
          <div class="fig">
            <div class="phones">
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-ar-1.png" width="750" height="1624" alt="Push “Switch to AR — You are close!” and event card with claim progress at the trade-fair booth" decoding="async" loading="lazy"></div><figcaption>Proximity push + event detail: what's on offer, where and until when — including scarcity (108/150 claimed).</figcaption></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/sp-ar-2.png" width="768" height="1624" alt="AR camera view at the real trade-fair booth with a 3D object and “Swipe to claim”" decoding="async" loading="lazy"></div><figcaption>AR view: object at the real location — swipe to claim.</figcaption></figure>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- 6 · VALIDATION -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel clabel">Validation</span>
      <p class="prose" style="max-width:none">The fiat path was validated as a <strong>hypothesis</strong> — the community survey before, the numbers after. It was rolled out in two steps, so each part works on its own:</p>
      <div class="steps">
        <div class="step"><div class="no">Step 1</div><h4>Make credits purchasable</h4><p>First the fiat purchase of the Land Plot Credits themselves — the new Web2 entry into the ecosystem.</p></div>
        <div class="step"><div class="no">Step 2</div><h4>Buy a plot with credits</h4><p>Then the plot purchase via balance in one step — confirmed by the sales figures afterwards.</p></div>
      </div>
    </div>
  </section>

  <!-- 7 · RESULT -->
  <section class="wrap">
    <div class="result">
      <span class="slabel">Result</span>
      <div class="big"><span class="plus">+</span>771</div>
      <p class="sub">land plots sold in the <b>first week</b> after the fiat rollout.</p>
      <div class="facts">
        <div class="f"><div class="fk">Base before rollout</div><div class="fv">≈ 11,000 plots sold</div></div>
        <div class="f"><div class="fk">First week</div><div class="fv">+771 plots · +7%</div></div>
        <div class="f"><div class="fk">New entry point</div><div class="fv">Purchase by bank card instead of wallet</div></div>
      </div>
      <p class="note"><b>For context:</b> +771 is the first-week increase over the existing base of around 11,000 plots. The feature went live that week — the temporal correlation is strong; I don't claim an isolated causal proof against other effects. H2 (repeat purchases) and H3 (payment and legal risk) could no longer be measured in isolation within the observation window.</p>
    </div>
  </section>

  <!-- ROLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Role &amp; System</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Role</span>
          <p>As <strong>Sole UI/UX Designer</strong>, I owned research, user flows, UI and prototype. The visual system lives in <strong>Figma Styles</strong> (components &amp; tokens); the flows ran as an interactive prototype.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Art Direction</span>
          <p>In addition, I led <strong>a graphic/illustration designer and a motion designer</strong> — art direction so that icons, illustrations and motion speak the same language as the interface.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact wrap">
    <span class="slabel" style="justify-content:center">Contact</span>
    <h2>Another case study or a conversation?</h2>
    <p>Open to senior product / UI-UX design roles in the Cologne / Bonn area and remote.</p>
    <div class="cta">
      <a class="btn solid" href="mailto:granici.design@gmail.com">granici.design@gmail.com</a>
      <a class="btn ghost" href="/en/#arbeiten">All work</a>
      <a class="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf">CV (PDF)</a>
    </div>
  </section>

</main>

<footer class="site">
  <div class="wrap row">
    <span>© 2026 Serghei Granici — Senior UI/UX Designer</span>
    <span class="links">
      <a href="mailto:granici.design@gmail.com">Email</a>
      <a href="https://linkedin.com/in/serghei-granici">LinkedIn</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
    </span>
  </div>
</footer>

`;
