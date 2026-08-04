export const caseHtmlEn = `

<header class="site">
  <div class="wrap row">
    <a class="brand" href="/en"><span class="mk"></span>Serghei Granici</a>
    <nav class="nav">
      <a class="hide-sm" href="/en/#arbeiten">Work</a>
      <a class="hide-sm" href="/en/#ueber">About</a>
      <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
      <div class="langtog"><a href="/de/xu" hreflang="de" aria-label="Auf Deutsch ansehen">DE</a><a href="/en/xu" class="on">EN</a></div>
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
    <div class="bigcard dark" data-reveal-auto>
      <span class="slabel c clabel">Context &amp; problem</span>
      <div class="prose cols">
        <p><strong>XU – School of Sustainability</strong> is a B2B learning platform: companies book it to train their staff on sustainability — with courses, live sessions, articles and an expert channel. I joined agency-side: XU was our client, brought tasks based on their own data and testing, and I delivered the design back.</p>
        <p>The product already existed — the brief was never „from scratch", but to <strong>fix, precisely, the parts that were sticking</strong>. And it stuck on three fronts: the UI had grown <strong>fragmented</strong> over the years, the <strong>checkout</strong> was losing users, and every deployment had to ship in the <strong>respective client's corporate identity</strong>.</p>
        <p>That last point was the real challenge: <strong>one</strong> platform, but each corporate client sees it in their own brand colours — and it still has to look good, not just be „tinted" by a script.</p>
      </div>
    </div>
  </section>

  <!-- 4 · APPROACH: PROBLEM -> METHOD -> SOLUTION (core of the case) -->
  <section class="wrap">
    <span class="slabel clabel" data-reveal>Approach · Problem → Method → Solution</span>
    <p class="prose" style="max-width:none" data-reveal>Three problem areas, three deliberate approaches. Not „from scratch" — every decision follows from what the audit surfaced. One of them is the core, and it's what makes the others scale.</p>

    <div class="stiles" data-reveal-auto>

      <div class="bigcard light stile">
        <div class="strow">
          <div class="body">
            <div class="snum-row"><span class="pnum">1</span><span class="peyebrow">Consistency &amp; components</span></div>
            <h3 class="pstep-h">Four bespoke paths become one system</h3>
            <div class="ps">
              <div><span class="plabel prob">Problem</span><p class="pstep-p">Courses, podcasts, articles and live sessions had grown apart over the years — the same element (the language icon, say) sat left on one card, right on another.</p></div>
              <div><span class="plabel solu">Solution</span><p class="pstep-p">Inventoried every variant and consolidated them into <strong>four clean, reusable components</strong> sharing one anatomy — consistent for users, maintainable for engineering.</p></div>
            </div>
          </div>
          <div class="fig"><figure class="hoverable"><div class="shot"><img src="/screens/xu-cards.jpg" width="1280" height="691" alt="Unified content cards sharing one anatomy" decoding="async" loading="lazy"></div></figure></div>
        </div>
      </div>

      <div class="bigcard light stile">
        <div class="strow">
          <div class="body">
            <div class="snum-row"><span class="pnum">2</span><span class="peyebrow">Checkout redesign</span></div>
            <h3 class="pstep-h">From puzzling to paying</h3>
            <div class="ps">
              <div><span class="plabel prob">Problem</span><p class="pstep-p">Split screen, licence count via a dropdown — no familiar pattern, a lot of gaze-jumping.</p></div>
              <div><span class="plabel solu">Solution</span><p class="pstep-p">After a <strong>flow analysis</strong> and a <strong>pattern benchmark</strong>: a centred screen, a <strong>+/−&nbsp;stepper</strong> instead of the dropdown, standard payment patterns. Same three steps — but users know what to do.</p></div>
            </div>
          </div>
          <div class="fig">
            <figure class="hoverable" style="margin-bottom:clamp(10px,1.4vw,14px)"><div class="shot"><img src="/screens/xu-checkout-before.jpg" width="1280" height="720" alt="Old checkout: split screen, licence count via dropdown" decoding="async" loading="lazy"></div><figcaption><b>Before:</b> split screen, dropdown.</figcaption></figure>
            <figure class="hoverable"><div class="shot"><img src="/screens/xu-checkout-after-1.jpg" width="1280" height="910" alt="New checkout: a centred card with a +/− stepper" decoding="async" loading="lazy"></div><figcaption><b>After:</b> focused screen + stepper.</figcaption></figure>
          </div>
        </div>
      </div>

      <div class="bigcard light stile">
        <div class="strow">
          <div class="body">
            <div class="snum-row"><span class="pnum">3</span><span class="peyebrow">Colour architecture</span></div>
            <h3 class="pstep-h">A colour system that can carry any brand</h3>
            <div class="ps">
              <div><span class="plabel prob">Problem</span><p class="pstep-p">One platform, but every corporate client sees it in their own brand colours — and it still has to look good, not just be „technically recoloured".</p></div>
              <div><span class="plabel solu">Solution</span><p class="pstep-p">Through a heuristic audit, <strong>semantic colour tokens</strong> (Primary, Secondary, Surface, Background, Text, Accent). The client sets 3–4 CI colours in the back office, neutrals and contrast rules stay fixed — every client themes predictably.</p></div>
            </div>
          </div>
          <div class="fig">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(8px,1vw,12px)">
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-sustain.jpg" width="1280" height="784" alt="XU platform in the green sustainability theme" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-standard.jpg" width="1280" height="784" alt="The same platform in the red standard theme" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-client-a.jpg" width="1280" height="784" alt="The same platform in a blue automotive client CI" decoding="async" loading="lazy"></div></figure>
              <figure class="hoverable"><div class="shot"><img src="/screens/xu-theme-client-b.jpg" width="1280" height="784" alt="The same platform in an education provider's CI" decoding="async" loading="lazy"></div></figure>
            </div>
            <div style="margin-top:10px;font-size:.82rem;color:var(--ink-3)">One screen, four client CIs — the same system, re-coloured.</div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- 5 · RESULT -->
  <section class="wrap">
    <div class="result" data-reveal-auto>
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
    <div class="bigcard dark" data-reveal-auto>
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
  <section class="contact wrap" data-reveal-auto>
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
