import Link from "next/link";
import { content, type Locale } from "./content";
import type { LegalPage } from "./legalContent";

// Shared chrome for Impressum and Datenschutzerklärung: the same header and
// footer as the case pages, wrapped around a single column of running text.
export default function LegalPageView({
  locale,
  page,
}: {
  locale: Locale;
  page: LegalPage;
}) {
  const t = content[locale];
  const back = locale === "de" ? "Startseite" : "Home";

  return (
    <>
      <header className="site">
        <div className="wrap">
          <div className="row">
            <Link className="brand" href={`/${locale}`}>
              <img src="/granici-logo.svg" alt="Gránici Design" width={112} height={31} />
            </Link>
            <nav className="nav">
              <a className="hide-sm" href={`/${locale}/#arbeiten`}>{t.nav.work}</a>
              <a className="hide-sm" href={`/${locale}/#ueber`}>{t.nav.about}</a>
              <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">{t.nav.cv}</a>
              <div className="langtog" role="group" aria-label={t.nav.switch}>
                <Link href="/de" hrefLang="de" className={locale === "de" ? "on" : ""}>DE</Link>
                <Link href="/en" hrefLang="en" className={locale === "en" ? "on" : ""}>EN</Link>
              </div>
              <a className="btn solid" href={`/${locale}/#kontakt`}>{t.nav.contact}</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="wrap back">
          <Link href={`/${locale}`}><span className="arw">←</span> {back}</Link>
        </div>

        <section className="wrap legal">
          <h1>{page.title}</h1>
          <p className="legal-lead">{page.lead}</p>

          {page.sections.map((s) => (
            <section key={s.h} className="legal-sec">
              <h2>{s.h}</h2>
              {s.p?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {s.lines && (
                <p className="legal-lines">
                  {s.lines.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < s.lines!.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              )}
            </section>
          ))}

          <p className="legal-updated">{page.updated}</p>
        </section>
      </main>

      <footer className="site">
        <div className="wrap row">
          <span>{t.footer}</span>
          <span className="links">
            <a href="mailto:granici.design@gmail.com">E-Mail</a>
            <a href="https://linkedin.com/in/serghei-granici" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/Lebenslauf_Serghei_Granici_2026.pdf" target="_blank" rel="noopener noreferrer">{t.nav.cv}</a>
            <Link href={`/${locale}/impressum`}>{t.legalNav.impressum}</Link>
            <Link href={`/${locale}/datenschutz`}>{t.legalNav.privacy}</Link>
            <button type="button" className="cc-link" data-cookie-settings>{t.consent.manage}</button>
          </span>
        </div>
      </footer>
    </>
  );
}
