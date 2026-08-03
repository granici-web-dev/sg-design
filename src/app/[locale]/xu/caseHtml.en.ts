export const caseHtmlEn = `

<header class="site">
  <div class="wrap row">
    <a class="brand" href="/en"><span class="mk"></span>Serghei Granici</a>
    <nav class="nav">
      <a class="hide-sm" href="/en/#arbeiten">Work</a>
      <a class="hide-sm" href="/en/#ueber">About</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
      <a class="btn ghost" href="/de/xu" hreflang="de" aria-label="Auf Deutsch ansehen">DE</a>
      <a class="btn solid" href="/en/#kontakt">Contact</a>
    </nav>
  </div>
</header>

<main>

  <div class="wrap back"><a href="/en/#arbeiten"><span class="arw">←</span> All work</a></div>

  <!-- 1 · HERO -->
  <section class="chero wrap">
    <div class="hcenter">
      <span class="hlabel">EdTech · Design system · White-label</span>
      <h1>One platform,<br><span class="mk">every brand.</span></h1>
      <p class="subt">A targeted redesign of <span class="hl">XU – School of Sustainability</span>, a B2B learning platform: a semantic <span class="hl">colour architecture</span> that adapts to any client's brand — plus consistent content components and a focused checkout. Agency-side, 2021–2022.</p>
      <div class="pill"><a class="btn solid" href="#kontext">Read case study <span class="arw">↓</span></a></div>
    </div>

    <div class="appcast">
      <video autoplay loop muted playsinline preload="auto" width="2400" height="1500" poster="/screens/xu-hero-poster.jpg"
        aria-label="Screencast: the same XU learning platform switching, one after another, into different clients' brand colours — green, red, blue — proof of one colour-token architecture">
        <source src="/screens/xu-hero.mp4" type="video/mp4">
        <source src="/screens/xu-hero.webm" type="video/webm">
      </video>
    </div>

    <div class="meta">
      <div class="c"><div class="k">Role</div><div class="v">Senior UI/UX Designer<br><span style="color:var(--ink-3)">+ Art direction, with PM</span></div></div>
      <div class="c"><div class="k">Timeframe</div><div class="v">2021 – 2022</div></div>
      <div class="c"><div class="k">Context</div><div class="v">Agency-side<br><span style="color:var(--ink-3)">Client: XU</span></div></div>
      <div class="c"><div class="k">Domain</div><div class="v">EdTech · Design system</div></div>
      <div class="c"><div class="k">Scope</div><div class="v">Targeted redesign<br><span style="color:var(--ink-3)">Colour system · Checkout · Components</span></div></div>
      <div class="c"><div class="k">Status</div><div class="v">Shipped<br><span style="color:var(--ink-3)">built client-side</span></div></div>
    </div>
  </section>

  <!-- 2 · CONTEXT + PROBLEM -->
  <section class="wrap" id="kontext">
    <div class="bigcard dark">
      <span class="slabel c clabel">Context &amp; problem</span>
      <div class="prose cols">
        <p><strong>XU – School of Sustainability</strong> is a B2B learning platform: companies book it to train their staff on sustainability — with courses, live sessions, articles and an expert channel. I joined agency-side: XU was our client, brought tasks based on their own data and testing, and I delivered the design back.</p>
        <p>The product already existed — the brief was never „from scratch", but to <strong>fix, precisely, the parts that were sticking</strong>. And it stuck on three fronts: the UI had grown <strong>fragmented</strong> over the years, the <strong>checkout</strong> was losing users, and every deployment had to ship in the <strong>respective client's corporate identity</strong>.</p>
        <p>That last point was the real challenge: <strong>one</strong> platform, but each corporate client sees it in their own brand colours — and it still has to look good, not just be „tinted" by a script.</p>
      </div>
      <div class="cardfacts">
        <div><div class="cfn">Fragmented UI</div><div class="cfc">Course, podcast, article and live cards were built inconsistently — icons on the left here, on the right there.</div></div>
        <div><div class="cfn">Checkout friction</div><div class="cfc">Licence count via a dropdown, no standard pattern, a split screen — users had to puzzle rather than pay.</div></div>
        <div><div class="cfn accent">White-label as a must</div><div class="cfc">The same platform in every client's CI — predictable and good-looking, not just re-coloured somehow.</div></div>
      </div>
    </div>
  </section>

  <!-- 3 · RESEARCH -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Research &amp; audit</span>
      <p class="prose" style="max-width:none">Honestly framed: the <strong>quantitative basis sat with XU</strong> — they ran usability tests and analytics and came to me with data-driven tasks. My contribution was the design work in front of that: understanding <em>why</em> something stuck, and taking the existing product apart systematically.</p>
      <div class="sources">
          <div class="source"><div class="no">01</div><h4>Heuristic audit</h4><p>Reviewed existing screens for inconsistencies and UX breaks</p></div>
          <div class="source"><div class="no">02</div><h4>Component inventory</h4><p>Collected and compared every variant of the content cards</p></div>
          <div class="source"><div class="no">03</div><h4>Checkout-flow analysis</h4><p>Broke the old purchase flow into steps — where does trust break?</p></div>
          <div class="source"><div class="no">04</div><h4>Pattern benchmark</h4><p>Established checkout and form patterns as reference</p></div>
      </div>
      <div class="pull">
        <div class="q">The through-line: not new features, but <span class="g">predictability</span> — one system in which cards, colours and purchase steps behave the same, whichever client gets the platform.</div>
        <div class="src">Attribution: usability tests &amp; usage data were owned by XU. What's shown here is the design and system work, not their measurements.</div>
      </div>
    </div>
  </section>

  <!-- 4 · CONCEPT & DECISIONS -->
  <section class="wrap">
    <div class="bigcard light">
      <span class="slabel clabel">Concept &amp; design decisions</span>
      <p class="prose" style="max-width:none">Three decisions carried the redesign — one of them is the core, and it's what makes the others scale.</p>
      <div class="hyps">
          <div class="hyp"><span class="tag">01</span><div class="txt"><b>Colour becomes tokens, not values.</b> A semantic system (Primary, Secondary, Surface, Background, Text, Accent). The client supplies three to four brand colours; neutrals and contrast rules stay fixed — so any CI themes predictably.</div></div>
          <div class="hyp"><span class="tag">02</span><div class="txt"><b>Four content types, four clean components.</b> Courses, podcasts, articles and live sessions got a single card anatomy instead of four bespoke ones — consistent for users, maintainable for engineering.</div></div>
          <div class="hyp"><span class="tag">03</span><div class="txt"><b>The checkout gets focused.</b> The split screen goes, the dropdown becomes a stepper, familiar patterns replace the bespoke flow — the number of steps stays, the confidence while filling it in goes up.</div></div>
      </div>
    </div>
  </section>

  <!-- 5 · CORE WORK -->
  <section class="wrap">
    <span class="slabel clabel">Core work</span>
    <div class="wtiles">

      <!-- STAR: Colour architecture -->
      <div class="bigcard dark wtile">
        <span class="slabel p clabel">Colour architecture · core</span>
        <div class="duo">
          <div class="body">
            <h2 class="lead-h">A colour system that can carry any brand.</h2>
            <p>Instead of fixed colour values I defined <strong>semantic tokens</strong> — Primary, Secondary, Surface, Background, Text, Accent. A corporate client brings three to four CI colours; those are set through a <strong>back office</strong> and cascade across the whole platform.</p>
            <p>So the result never tips over, <strong>neutrals and contrast rules stay fixed</strong> — the brand tints without breaking legibility or balance. I tested this in a dedicated Figma file with colour styles before the values moved into the portal.</p>
            <p>The proof is on the right: <strong>one and the same screen</strong> across four CIs — green, red, and two anonymised clients. No redesign per client, just the same system, re-coloured.</p>
          </div>
          <div class="fig">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(10px,1.4vw,16px)">
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-sustain.jpg" width="1280" height="784" alt="XU platform in the green sustainability theme" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-standard.jpg" width="1280" height="784" alt="The same platform in the red standard theme" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-client-a.jpg" width="1280" height="784" alt="The same platform in a blue automotive client CI, logo anonymised" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-client-b.jpg" width="1280" height="784" alt="The same platform in an education provider's CI, logo anonymised" decoding="async" loading="lazy"></div></figure>
            </div>
          </div>
        </div>
      </div>

      <!-- Checkout -->
      <div class="bigcard light wtile">
        <div class="row2">
          <div class="body">
            <span class="role">Checkout redesign</span>
            <h3>From puzzling to paying</h3>
            <p>The old checkout <strong>split the screen in two</strong> and chose the licence count via a <strong>dropdown</strong> — no familiar pattern, a lot of gaze-jumping. I <strong>centred and calmed</strong> the screen, replaced the dropdown with a <strong>+/−&nbsp;stepper</strong>, and moved the flow onto known checkout patterns.</p>
            <p>Deliberately honest: the structure stayed at <strong>three steps</strong> — the win isn't fewer steps, it's that users know what to do rather than having to work it out.</p>
          </div>
          <div class="fig">
            <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-before.jpg" width="1280" height="720" alt="Old checkout: split screen, summary on the left, large image on the right, licence count via dropdown" decoding="async" loading="lazy"></div><figcaption><b>Before:</b> split screen, licences via dropdown.</figcaption></figure>
          </div>
        </div>
        <div class="phrow" style="margin-top:clamp(20px,2.6vw,32px)">
          <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-after-1.jpg" width="1280" height="910" alt="New checkout: centred card, licence count via a minus-three-plus stepper" decoding="async" loading="lazy"></div><figcaption>After 1: focused card, +/−&nbsp;stepper.</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-after-2.jpg" width="1280" height="910" alt="New checkout: payment method via radio buttons, invoice or credit card, with card icons" decoding="async" loading="lazy"></div><figcaption>After 2: standard payment pattern.</figcaption></figure>
          <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-after-3.jpg" width="1280" height="910" alt="New checkout: confirmation page with a green check, purchase successful" decoding="async" loading="lazy"></div><figcaption>After 3: clear confirmation.</figcaption></figure>
        </div>
      </div>

      <!-- Consistency -->
      <div class="bigcard light wtile">
        <div class="row2 flip">
          <div class="fig">
            <figure class="hoverable"><div class="shot"><img src="/screens/xu-cards.jpg" width="1280" height="691" alt="Unified content cards: courses, live sessions, articles and expert channel with the same anatomy and consistent language badges" decoding="async" loading="lazy"></div><figcaption><b>Result:</b> four content types, one shared card anatomy.</figcaption></figure>
          </div>
          <div class="body">
            <span class="role peri">Consistency &amp; components</span>
            <h3>Four bespoke paths become one system</h3>
            <p>The content cards had grown inconsistent over the years — the same element (the language icon, say) sat on the left of one card and the right of another. I inventoried the variants and consolidated them into <strong>four clean components</strong>: <strong>courses, podcasts, articles and live sessions</strong>.</p>
            <p>One shared anatomy, fixed positions, clear states — consistent for users, and quick to reuse for engineering. That's exactly what later drew positive feedback from the developer team.</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 7 · RESULT -->
  <section class="wrap">
    <div class="result">
      <span class="slabel">Result</span>
      <div class="big" style="font-size:clamp(2.3rem,5.2vw,4rem);line-height:1.02">One&nbsp;system.<br>Every&nbsp;brand.</div>
      <p class="sub">Fragmented screens became a <b>token-based colour system</b> that adapts to any client's CI — carried by consistent components and a focused checkout.</p>
      <div class="facts">
        <div class="f"><div class="fk">White-label</div><div class="fv">Semantic colour tokens · per client CI</div></div>
        <div class="f"><div class="fk">Consistency</div><div class="fv">4 unified content components</div></div>
        <div class="f"><div class="fk">Checkout</div><div class="fv">Focused 3-step flow · standard patterns</div></div>
      </div>
      <p class="note"><b>Honest framing:</b> I worked <b>agency-side</b> for XU as the client and <b>deliberately</b> redesigned problem areas — I didn't build the platform from scratch. Usability tests and usage data were owned by XU — so <b>no conversion or usage numbers</b> here. Validation: the client and the developer team were happy with the colour architecture and components; the redesign was shipped.</p>
    </div>
  </section>

  <!-- ROLE -->
  <section class="wrap">
    <div class="bigcard dark">
      <span class="slabel p clabel">Role &amp; process</span>
      <div class="rolegrid">
        <div class="rcard">
          <span class="role">Role</span>
          <p>As <strong>Senior UI/UX Designer</strong> I owned the colour architecture, the components and the checkout redesign. Through <strong>art direction</strong> I led a graphic/illustration designer (icons, illustrations, photo sourcing) and a motion designer (onboarding videos); a <strong>PM</strong> was on the team.</p>
        </div>
        <div class="rcard">
          <span class="role peri">Process</span>
          <p>Agency-side for the client XU: from data-driven tasks through heuristic audit and pattern benchmark to tokens, components and the checkout flow — tested in a Figma colour-styles file, then adopted client-side into the portal and built by the developer team.</p>
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
