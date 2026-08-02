import "../site.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content, hasLocale, type Locale } from "./content";
import LeadCard from "./LeadCard";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const t = content[locale];
  const other: Locale = locale === "de" ? "en" : "de";

  return (
    <>
      <header className="site" id="top">
        <div className="wrap row">
          <a className="brand" href="#top"><span className="mk"></span>Serghei Granici</a>
          <nav className="nav">
            <a className="hide-sm" href="#arbeiten">{t.nav.work}</a>
            <a className="hide-sm" href="#ueber">{t.nav.about}</a>
            <a href="/Lebenslauf_Serghei_Granici_2026.pdf">{t.nav.cv}</a>
            <Link className="btn ghost" href={`/${other}`} hrefLang={other} aria-label={t.nav.switch}>{other.toUpperCase()}</Link>
            <a className="btn solid" href="#kontakt">{t.nav.contact}</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="chero wrap">
          <div className="herocard">
            <div className="htext">
              <span className="hlabel"><span className="dot"></span> {t.hero.label}</span>
              <h1>{t.hero.h1}</h1>
              <p className="subt">{t.hero.subPre}<span className="hl">{t.hero.subHl}</span>{t.hero.subPost}</p>
              <div className="pill">
                <a className="btn light" href="#arbeiten">{t.hero.ctaWork} <span className="arw">↓</span></a>
                <a className="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf" style={{ borderColor: "rgba(255,255,255,.22)", color: "#EDEEEF" }}>{t.hero.ctaCv}</a>
              </div>
            </div>
            <div className="himg">
              <img className="slotimg" src="/screens/gen-portrait-blur.jpg" width={2304} height={1856} alt="Serghei Granici" decoding="async" />
            </div>
          </div>
          <div className="meta">
            {t.meta.map(([k, v]) => (<div className="c" key={k}><div className="k">{k}</div><div className="v">{v}</div></div>))}
          </div>
        </section>

        <section id="arbeiten" className="wrap">
          <div className="shead">
            <span className="slabel">{t.work.label}</span>
            <h2>{t.work.h2}</h2>
            <p className="sub">{t.work.sub}</p>
          </div>
          <div className="work">
            <LeadCard href={`/${locale}/smartplaces`} tag={t.lead.tag} title={t.lead.title} desc={t.lead.desc} more={t.lead.more} />
            <div className="projgrid">
              {t.projs.map((p) => (
                <a className="proj" href={"slug" in p ? `/${locale}/${p.slug}` : "#kontakt"} key={p.title}>
                  <div className="pcover"><img className="slotimg" src={`/screens/${p.img}`} width={2304} height={1856} alt={p.alt} decoding="async" loading="lazy" /><span className="corner">↗</span></div>
                  <div className="pbody">
                    <span className="ptag2">{p.tag}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <span className="pmore">{"slug" in p ? t.lead.more : t.projMore} <span className="arw">→</span></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="ueber" className="wrap">
          <div className="bigcard dark">
            <div className="about2">
              <div>
                <span className="slabel g clabel">{t.about.label}</span>
                <h2>{t.about.h2}</h2>
                <div className="prose"><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
              </div>
              <div className="aimg"><img className="slotimg" src="/screens/gen-hero.jpg" width={1856} height={2304} alt="Editorial 3D sculpture with lime light" decoding="async" loading="lazy" /></div>
            </div>
            <div className="kvgrid">
              {t.about.kv.map(([k, v]) => (<div className="kvtile" key={k}><div className="kk">{k}</div><div className="kvv">{v}</div></div>))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="contact wrap">
          <span className="slabel" style={{ justifyContent: "center" }}>{t.contact.label}</span>
          <h2>{t.contact.h2}</h2>
          <p>{t.contact.p}</p>
          <div className="cta">
            <a className="btn solid" href="mailto:granici.design@gmail.com">granici.design@gmail.com</a>
            <a className="btn ghost" href="https://linkedin.com/in/serghei-granici">LinkedIn</a>
            <a className="btn ghost" href="/Lebenslauf_Serghei_Granici_2026.pdf">{t.contact.cv}</a>
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap row">
          <span>{t.footer}</span>
          <span className="links">
            <a href="mailto:granici.design@gmail.com">E-Mail</a>
            <a href="https://linkedin.com/in/serghei-granici">LinkedIn</a>
            <a href="/Lebenslauf_Serghei_Granici_2026.pdf">CV</a>
          </span>
        </div>
      </footer>
    </>
  );
}
