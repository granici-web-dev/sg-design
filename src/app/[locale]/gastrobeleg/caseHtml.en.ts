export const caseHtmlEn = `

<header class="site">
  <div class="wrap"><div class="row">
    <a class="brand" href="/en"><img src="/granici-logo.svg" alt="Gránici Design" width="112" height="31" /></a>
    <nav class="nav">
      <a class="hide-sm" href="/en/#arbeiten">Work</a>
      <a class="hide-sm" href="/en/#ueber">About</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">CV</a>
      <div class="langtog"><a href="/de/gastrobeleg" hreflang="de" aria-label="Auf Deutsch anzeigen">DE</a><a href="/en/gastrobeleg" class="on">EN</a></div>
      <a class="btn solid" href="/en/#kontakt">Contact</a>
    </nav>
  </div>
  </div>
</header>

<main>

  <!-- BACK -->
  <div class="wrap back"><a href="/en/#arbeiten"><span class="arw">←</span> All work</a></div>

  <!-- 1 · HERO -->
  <section class="chero wrap">
    <div class="hcenter">
      <span class="hlabel">Own product concept · Design phase</span>
      <h1>GastroBeleg — photograph<br>the <span class="mk">delivery note. Done.</span></h1>
      <p class="subt">Purchasing is up 15 % — <span class="hl">which item, which supplier?</span> Written down nowhere. The prices sit in paper delivery notes.</p>
      <div class="pill"><a class="btn solid" href="#kontext">Read the case study <span class="arw">↓</span></a></div>
    </div>

    <div class="dashwrap">
      <video class="dashimg" autoplay loop muted playsinline preload="auto"
        width="1920" height="1366" poster="/screens/gb-uebersicht-poster.jpg"
        aria-label="Screencast: the GastroBeleg overview dashboard (German UI) assembles panel by panel — KPIs, charts and the document list appear one after another">
        <source src="/screens/gb-uebersicht-cast.mp4" type="video/mp4">
        <source src="/screens/gb-uebersicht-cast.webm" type="video/webm">
      </video>
    </div>

    <div class="meta">
      <div class="c"><div class="k">Role</div><div class="v">Sole UI/UX + Product Design</div></div>
      <div class="c"><div class="k">Timeframe</div><div class="v">2025</div></div>
      <div class="c"><div class="k">Platform</div><div class="v">Web app · PWA scan<br><span style="color:var(--ink-3)">Mobile intake</span></div></div>
      <div class="c"><div class="k">Market</div><div class="v">Independent hospitality<br><span style="color:var(--ink-3)">Germany · 1–3 locations</span></div></div>
      <div class="c"><div class="k">Domain</div><div class="v">Invoice capture · Food cost · DATEV</div></div>
      <div class="c"><div class="k">Status</div><div class="v">Concept · Design phase<br><span style="color:var(--ink-3)">Next step: development</span></div></div>
    </div>
  </section>

  <!-- 2 · CHARACTER + SETTING -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">The owner and his blind spot</span>
      <p class="prose" style="max-width:none">An owner with one to three locations and a mixed supplier pool: Metro self-pickup, the butcher, the baker, the drinks wholesaler. A POS, no inventory system, a tax advisor working in DATEV. <strong>His purchasing invoices have climbed 15 % in six months — but he cannot say which item, from which supplier, got more expensive.</strong> Photographing the documents through <strong>DATEV Upload mobil</strong> carries only document headers and totals — no articles, no price per kilo. The books balance, purchasing stays blind.</p>
      <div class="cardfacts">
        <div><div class="cfn">Price blindness</div><div class="cfc">Purchasing +15 % in six months. Which item, which supplier? Written down nowhere.</div></div>
        <div><div class="cfn">Gap € 25 ↔ € 175</div><div class="cfc">Cheap capture sees no line items; expensive platforms demand recipes and months of onboarding.</div></div>
        <div><div class="cfn accent">Goal</div><div class="cfc">Purchasing transparent, bookkeeping done — no inventory system, no switch of tools, from € 39.</div></div>
      </div>
    </div>
  </section>

  <!-- 3 · APPROACH + THE BET -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel g clabel">The approach</span>
      <div class="duo">
        <figure class="fig hoverable">
          <div class="shot"><img src="/screens/gb-pruefen.png" width="1440" height="1024" alt="Verify a document (German UI): scanned delivery note on the left, recognised line items with quantity, price and VAT on the right, one field flagged ‚VAT?'" decoding="async" loading="lazy"></div>
          <figcaption><b>Verify:</b> document on the left, recognised line items on the right. Uncertain fields highlighted, the original beside them — confirm in one tap.</figcaption>
        </figure>
        <div class="body">
          <h2 class="lead-h">Photo → verify → done.</h2>
          <p>The kitchen photographs the delivery note on receiving goods. The AI recognises supplier, line items, quantities, prices and VAT rates; in the morning the owner only confirms what the system was not sure it read.</p>
          <p><strong>The bet behind it:</strong> if price jumps surface on their own, the owner reacts before the next order — instead of noticing months later and only roughly. Automation is not what decides this; visibility at line-item level is.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 4 · THREE OBSTACLES -->
  <section class="wrap">
    <span class="slabel clabel">Three obstacles</span>
    <div class="wtiles">
      <div class="bigcard light wtile">
        <div class="row2">
          <figure class="fig hoverable" style="max-width:250px;width:100%;margin-inline:auto">
            <div class="shot" style="border-radius:28px"><img src="/screens/gb-scan.png" width="750" height="1624" alt="Kitchen intake as a PWA (German UI): camera view, delivery note in the frame, ‚document recognised', capture happens automatically" decoding="async" loading="lazy"></div>
          </figure>
          <div class="body">
            <span class="role">Obstacle 1 · Kitchen</span>
            <h3>15 seconds at the goods entrance</h3>
            <p>At the back door, hands full, with staff turnover every couple of months — store installs and passwords do not survive that. So intake is a <strong>PWA with a per-location PIN</strong>, plus an offline queue and an on-device sharpness check while the document is still in hand. Five minutes later it is in the bin.</p>
          </div>
        </div>
      </div>
      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Obstacle 2 · Cold start</span>
            <h3>The first Metro note with 60 lines must not kill onboarding</h3>
            <p>Manual mapping from zero is the most common drop-off point for the platform competition. So the product ships a <strong>pre-filled catalog</strong> of typical German hospitality products: the AI proposes “supplier line → catalog item”, the owner confirms in batches — once. After that the mapping, including unit conversion (“1 crate = 24 × 0.33 l”), applies automatically.</p>
          </div>
          <figure class="fig hoverable">
            <div class="shot"><img src="/screens/gb-katalog-mapping.png" width="1440" height="1024" alt="Catalog mapping (German UI): ‚assign article' modal with AI suggestions from the catalog and match confidence in percent (96 %)" decoding="async" loading="lazy"></div>
          </figure>
        </div>
      </div>
      <div class="bigcard light wtile">
        <div class="row2">
          <figure class="fig hoverable">
            <div class="shot"><img src="/screens/gb-datev.png" width="1440" height="1024" alt="DATEV export (German UI): EXTF booking batch with accounts (SKR03), 7/19 % VAT split per line and deposit on its own account" decoding="async" loading="lazy"></div>
          </figure>
          <div class="body">
            <span class="role">Obstacle 3 · Bookkeeping</span>
            <h3>A package the tax advisor can post directly</h3>
            <p>The export is an <strong>EXTF booking batch</strong> for DATEV Unternehmen Online: VAT per line from the document (7/19 %), <strong>deposit on its own account</strong> instead of cost of goods, SKR03 preset. That turns the tax advisor from a file recipient into a referral channel.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5 · INSIGHT / WHAT IS VERIFIED -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel clabel">What I verified</span>
      <p class="prose" style="max-width:none"><strong>There are no user tests yet</strong> — the project is in the design phase. Validation ran against the design system and the German constraints:</p>
      <div class="steps">
        <div class="step"><div class="no">Step 1</div><h4>Design system</h4><p>Contrast to WCAG AA: 51 of 51 combinations passed. Tabular figures for money, colour never the only carrier of meaning.</p></div>
        <div class="step"><div class="no">Step 2</div><h4>Built for German</h4><p>15–30 % layout headroom for German string lengths, DD.MM.YYYY, decimal comma — which took the screens from v1 to v2.</p></div>
      </div>
    </div>
  </section>

  <!-- 6 · SUCCESS CRITERIA -->
  <section class="wrap">
    <div class="result">
      <span class="slabel">Success criteria</span>
      <div class="big">80<span class="plus">%</span></div>
      <p class="sub">of documents <b>without manual correction</b> — the metric that keeps the morning ritual at five minutes instead of half an hour.</p>
      <div class="facts">
        <div class="f"><div class="fk">Reach (target)</div><div class="fv">30 paying restaurants</div></div>
        <div class="f"><div class="fk">Extraction (target)</div><div class="fv">80 % without correction</div></div>
        <div class="f"><div class="fk">Conversion (target)</div><div class="fv">25 % trial → paid</div></div>
      </div>
      <p class="note"><b>Target values, not a measured result</b> — the product is in the design phase and public benchmarks for German hospitality SaaS do not exist. If the no-correction rate drops, retention and conversion fall with it.</p>
    </div>
  </section>

  <!-- ROLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Role &amp; process</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Role</span>
          <p>As <strong>sole designer</strong> I owned the whole chain: research → PRD → information architecture → design tokens → Figma (desktop + mobile, 21 + 21 screens). I build the frontend myself afterwards with <strong>Claude Code</strong>.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Process</span>
          <p>The German domain rules (GoBD, DATEV EXTF, deposit, VAT) were modelled deliberately early — they shape the interface, not the other way around.</p>
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
      <a href="/en/impressum">Legal notice</a>
      <a href="/en/datenschutz">Privacy</a>
      <button type="button" class="cc-link" data-cookie-settings>Cookies</button>
    </span>
  </div>
</footer>

`;
