export const caseHtmlEn = `

<header class="site">
  <div class="wrap row">
    <a class="brand" href="/en"><span class="mk"></span>Serghei Granici</a>
    <nav class="nav">
      <a class="hide-sm" href="/en/#arbeiten">Work</a>
      <a class="hide-sm" href="/en/#ueber">About</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
      <a class="btn ghost" href="/de/gastrobeleg" hreflang="de" aria-label="Auf Deutsch anzeigen">DE</a>
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
      <span class="hlabel">Own product concept · Design phase</span>
      <h1>GastroBeleg — photograph<br>the <span class="mk">delivery note. Done.</span></h1>
      <p class="subt">The kitchen photographs the delivery note, the AI reads the line items, the owner verifies in seconds. Out come <span class="hl">purchase-price control</span> and a ready DATEV export for the tax advisor — no inventory system, no switch of tools.</p>
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
      <div class="c"><div class="k">Role</div><div class="v">Solo UI/UX + Product Design</div></div>
      <div class="c"><div class="k">Timeframe</div><div class="v">2025</div></div>
      <div class="c"><div class="k">Platform</div><div class="v">Web app · PWA scan<br><span style="color:var(--ink-3)">Mobile intake</span></div></div>
      <div class="c"><div class="k">Market</div><div class="v">Independent hospitality<br><span style="color:var(--ink-3)">Germany · 1–3 locations</span></div></div>
      <div class="c"><div class="k">Domain</div><div class="v">Invoice capture · Food cost · DATEV</div></div>
      <div class="c"><div class="k">Status</div><div class="v">Concept · Design phase<br><span style="color:var(--ink-3)">Next step: development</span></div></div>
    </div>
  </section>

  <!-- 2 · CONTEXT + PROBLEM -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">Context &amp; problem</span>
      <div class="prose cols">
        <p><strong>GastroBeleg</strong> is for independent restaurants, cafés and bars in Germany — one to three locations, a mixed supplier pool: Metro self-pickup, the butcher, the baker, the greengrocer, the drinks wholesaler. They have a POS but no inventory system — and a tax advisor who works in DATEV.</p>
        <p>The pain is <strong>financial, not procedural</strong>. Purchasing invoices have climbed 15 % over half a year — but the owner cannot say which item, from which supplier, got more expensive. The prices sit in paper delivery notes that travel to the tax advisor once a month.</p>
        <p>For many, the bookkeeping is already half solved: they photograph documents through the free <strong>DATEV Upload mobil</strong> app. But that channel carries only totals and document headers — no articles, units or price-per-kilo. The result: the books balance, purchasing stays blind.</p>
      </div>
      <div class="cardfacts">
        <div><div class="cfn">Price blindness</div><div class="cfc">Purchasing +15 % in six months. Which item, which supplier? Written down nowhere.</div></div>
        <div><div class="cfn">Gap € 25 ↔ € 175</div><div class="cfc">Cheap capture sees no line items; expensive platforms demand recipes and months of onboarding.</div></div>
        <div><div class="cfn accent">Goal</div><div class="cfc">Purchasing transparent, bookkeeping done — no inventory system, no switch of tools, from € 39.</div></div>
      </div>
    </div>
  </section>

  <!-- 4 · HYPOTHESES -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Hypotheses</span>
      <p class="prose" style="max-width:none">Three testable assumptions shaped the design — the bet that trust and line-item transparency matter more than raw automation.</p>
      <div class="hyps">
          <div class="hyp"><span class="tag">H1</span><div class="txt"><b>If the document is verified in seconds instead of typed by hand, the morning ritual stays a matter of minutes,</b> because the AI reads the line items and the human only confirms.</div></div>
          <div class="hyp"><span class="tag">H2</span><div class="txt"><b>If price jumps surface automatically, the owner reacts before the next order,</b> instead of noticing months later and only roughly.</div></div>
          <div class="hyp"><span class="tag">H3</span><div class="txt"><b>If the export is DATEV-ready (SKR, 7/19 %, deposit split out), the tax advisor recommends the product,</b> because it takes work off their desk instead of adding it.</div></div>
      </div>
    </div>
  </section>

  <!-- 5 · SOLUTION -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel g clabel">Solution</span>
      <div class="duo">
        <figure class="fig hoverable">
          <div class="shot"><img src="/screens/gb-pruefen.png" width="1440" height="1024" alt="Verify a document (German UI): scanned delivery note on the left, recognised line items with quantity, price and VAT on the right, one field flagged ‚VAT?'" decoding="async" loading="lazy"></div>
          <figcaption><b>Verify:</b> document on the left, recognised line items on the right. Uncertain fields are highlighted, the original sits beside them — confirm in one tap.</figcaption>
        </figure>
        <div class="body">
          <h2 class="lead-h">Photo → verify → done.</h2>
          <p>The kitchen photographs the delivery note on receiving goods. The AI recognises supplier, line items, quantities, prices and VAT rates — and flags the <strong>deposit separately</strong>. In the morning the owner only confirms what the system was not sure it read.</p>
          <p>Two things come out: a <strong>food-cost dashboard</strong> (who, what, how expensive, where it rose) and a <strong>ready DATEV export</strong>. The first mapping of a supplier article is remembered for good — after that the system recognises “its” products on its own.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 5b · CORE SURFACES -->
  <section class="wrap">
    <span class="slabel clabel">Core surfaces</span>
    <div class="wtiles">
      <div class="bigcard light wtile">
        <div class="row2">
          <figure class="fig hoverable" style="max-width:330px;width:100%;margin-inline:auto">
            <div class="shot" style="border-radius:28px"><img src="/screens/gb-scan.png" width="750" height="1624" alt="Kitchen intake as a PWA (German UI): camera view, delivery note in the frame, ‚document recognised', capture happens automatically" decoding="async" loading="lazy"></div>
          </figure>
          <div class="body">
            <span class="role">Capture · kitchen</span>
            <h3>15 seconds at the goods entrance</h3>
            <p>At the back door, receiving goods, hands full — that is why intake is a <strong>PWA with a per-location PIN</strong>, not a native app. Staff turnover breaks store installs and passwords every couple of months; a bookmarked link and one location PIN survive it.</p>
            <p>Two things are mandatory: an <strong>offline queue</strong> — the photo goes out the moment there is signal — and an <strong>on-device quality check</strong> (“blurry”, “edge cut off”) while the document is still in hand. Five minutes later it is in the bin.</p>
          </div>
        </div>
      </div>
      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Cold start</span>
            <h3>The first Metro note with 60 lines must not kill onboarding</h3>
            <p>So the product ships a <strong>pre-filled catalog</strong> of typical German hospitality products. The AI proposes the mapping “supplier line → catalog item”, the owner confirms — in batches too.</p>
            <p>Once confirmed, the mapping — including <strong>unit conversion</strong> — applies automatically from then on: “1 crate = 24 × 0.33 l”. Manual mapping from zero is the most common drop-off point for the platform competition; here it disappears.</p>
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
            <span class="role">Bookkeeping</span>
            <h3>A package the tax advisor can post directly</h3>
            <p>Once a month the owner exports an <strong>EXTF booking batch</strong> for DATEV Unternehmen Online. VAT is taken <strong>per line</strong> from the document (7/19 %), the <strong>deposit runs to its own account</strong> and not into cost of goods.</p>
            <p>SKR03 is preset (SKR04 optional), a <strong>test export</strong> runs before the first real one. That turns the tax advisor from a file recipient into a referral channel.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 6 · TEST & STATUS -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel clabel">Test &amp; status</span>
      <p class="prose" style="max-width:none"><strong>There are no user tests yet</strong> — the project is in the design phase. So far validation has been internal, against the design system and the German constraints.</p>
      <div class="steps">
        <div class="step"><div class="no">Step 1</div><h4>Design system checked</h4><p>Forest-&amp;-Lime tokens, contrast to WCAG AA (51/51 combinations passed), tabular figures for money, colour never the only carrier of meaning.</p></div>
        <div class="step"><div class="no">Step 2</div><h4>Built for German</h4><p>Layouts with 15–30 % headroom for German string lengths, DD.MM.YYYY, decimal comma; the screens went from v1 to v2.</p></div>
      </div>
      <p class="prose" style="max-width:none;margin-top:clamp(20px,2.4vw,28px)">The actual user validation — does the 80 % target hold up in a real kitchen? — follows the first working build.</p>
    </div>
  </section>

  <!-- 7 · SUCCESS CRITERIA -->
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
      <p class="note"><b>Target values, not a measured result.</b> The product is in the design phase; public benchmarks for German hospitality SaaS do not exist. The numbers are set as a target corridor three months after launch — not as a market norm. Extraction accuracy and conversion are causally linked: if the no-correction rate drops, retention and conversion fall with it.</p>
    </div>
  </section>

  <!-- ROLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Role &amp; process</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Role</span>
          <p>As <strong>solo designer</strong> I owned the whole chain: research → PRD → information architecture → design tokens → Figma (desktop + mobile, 21 + 21 screens). I build the frontend myself afterwards with <strong>Claude Code</strong>.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Process</span>
          <p>Research ran as an <strong>AI-assisted workflow</strong> toward a competitive synthesis and the PRD; the visual system as a Forest-&amp;-Lime token set in Figma. The German domain rules (GoBD, DATEV EXTF, deposit, VAT) were modelled deliberately early — they shape the interface, not the other way around.</p>
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
