import "server-only";

/* ---------------------------------------------------------------------------
   Legal pages: Impressum (§ 5 DDG) and Datenschutzerklärung.

   The privacy text describes what this site actually does — verified against
   the code: fonts are self-hosted by next/font (no request ever reaches Google
   Fonts), the only cookie set without consent is the locale cookie from
   proxy.ts, and GA4 runs in Consent Mode v2 advanced, which sends cookieless
   pings before an answer. Change the tracking setup and this text has to
   change with it.

   Everything a person has to supply is collected in `owner` below.
--------------------------------------------------------------------------- */

export const owner = {
  name: "Serghei Granici",
  street: "Wacholderweg 6",
  city: "53757 Sankt Augustin",
  country: "Deutschland",
  email: "granici.design@gmail.com",
  updatedDe: "Stand: August 2026",
  updatedEn: "Last updated: August 2026",
} as const;

export type LegalSection = {
  h: string;
  p?: string[];
  lines?: string[];
};

export type LegalPage = {
  title: string;
  lead: string;
  sections: LegalSection[];
  updated: string;
};

/* ------------------------------- Impressum ------------------------------- */

export const impressum: Record<"de" | "en", LegalPage> = {
  de: {
    title: "Impressum",
    lead: "Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
    sections: [
      {
        h: "Diensteanbieter",
        lines: [owner.name, owner.street, `${owner.city}`, owner.country],
      },
      {
        h: "Kontakt",
        lines: [`E-Mail: ${owner.email}`],
      },
      {
        h: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
        lines: [owner.name, owner.street, owner.city],
      },
      {
        h: "Verbraucherstreitbeilegung",
        p: [
          "Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
        ],
      },
      {
        h: "Haftung für Inhalte",
        p: [
          "Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Ich bin jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
          "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen entferne ich diese Inhalte umgehend.",
        ],
      },
      {
        h: "Haftung für Links",
        p: [
          "Dieses Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",
          "Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen entferne ich derartige Links umgehend.",
        ],
      },
      {
        h: "Urheberrecht",
        p: [
          "Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.",
          "Die auf dieser Website gezeigten Projekte entstanden teils in Anstellung oder im Auftrag von Kunden und Agenturen. Marken-, Bild- und Produktrechte liegen bei den jeweiligen Rechteinhabern; die Darstellung erfolgt ausschließlich zu Referenzzwecken.",
        ],
      },
    ],
    updated: owner.updatedDe,
  },
  en: {
    title: "Legal notice",
    lead: "Information pursuant to § 5 of the German Digital Services Act (DDG).",
    sections: [
      {
        h: "Service provider",
        lines: [owner.name, owner.street, `${owner.city}`, "Germany"],
      },
      {
        h: "Contact",
        lines: [`Email: ${owner.email}`],
      },
      {
        h: "Responsible for content under § 18 (2) MStV",
        lines: [owner.name, owner.street, owner.city],
      },
      {
        h: "Consumer dispute resolution",
        p: [
          "I am neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.",
        ],
      },
      {
        h: "Liability for content",
        p: [
          "As a service provider I am responsible for my own content on these pages under general law. However, I am not obliged to monitor transmitted or stored third-party information, or to investigate circumstances that indicate unlawful activity.",
          "Obligations to remove or block the use of information under general law remain unaffected. Liability in this respect is only possible from the point in time at which a concrete infringement becomes known. Upon becoming aware of such infringements, I will remove the content immediately.",
        ],
      },
      {
        h: "Liability for links",
        p: [
          "This site contains links to external third-party websites over whose content I have no control. I therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",
          "The linked pages were checked for possible legal violations at the time of linking; unlawful content was not recognisable. Permanent monitoring of the content of linked pages is not reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations, I will remove such links immediately.",
        ],
      },
      {
        h: "Copyright",
        p: [
          "The content and works created by me on these pages are subject to German copyright law. Reproduction, editing, distribution and any kind of use beyond the limits of copyright law require my written consent.",
          "Some projects shown on this website were created in employment or on behalf of clients and agencies. Trademark, image and product rights remain with the respective rights holders; the presentation serves reference purposes only.",
        ],
      },
    ],
    updated: owner.updatedEn,
  },
};

/* -------------------------- Datenschutzerklärung -------------------------- */

export const privacy: Record<"de" | "en", LegalPage> = {
  de: {
    title: "Datenschutzerklärung",
    lead: "Diese Website ist ein Design-Portfolio. Sie hat keine Registrierung, kein Kontaktformular und keinen Login — die einzige Datenverarbeitung, die über den Betrieb der Seite hinausgeht, ist die Reichweitenmessung, und die läuft nur mit Ihrer Einwilligung.",
    sections: [
      {
        h: "1. Verantwortlicher",
        p: [
          "Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:",
        ],
        lines: [
          owner.name,
          owner.street,
          owner.city,
          owner.country,
          `E-Mail: ${owner.email}`,
        ],
      },
      {
        h: "2. Hosting",
        p: [
          "Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet. Die Auslieferung erfolgt über das europäische Rechenzentrum in Frankfurt am Main. Vercel verarbeitet die Daten als Auftragsverarbeiter auf Grundlage eines Vertrags nach Art. 28 DSGVO.",
          "Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO: Mein berechtigtes Interesse besteht darin, diese Website technisch zuverlässig und sicher bereitzustellen.",
        ],
      },
      {
        h: "3. Server-Logfiles",
        p: [
          "Beim Aufruf dieser Website werden automatisch Informationen übermittelt, die Ihr Browser sendet, und die für den Betrieb technisch erforderlich sind:",
        ],
        lines: [
          "IP-Adresse des anfragenden Geräts",
          "Datum und Uhrzeit des Zugriffs",
          "aufgerufene Seite oder Datei",
          "übertragene Datenmenge und Statuscode",
          "Referrer-URL (die zuvor besuchte Seite)",
          "Browsertyp, Browserversion und Betriebssystem",
        ],
      },
      {
        h: "4. Cookies und lokale Speicherung",
        p: [
          "Ohne Ihre Einwilligung setzt diese Website genau ein Cookie, und zwar ein technisch notwendiges: „NEXT_LOCALE“ speichert Ihre Sprachwahl (Deutsch oder Englisch), damit Sie beim nächsten Besuch nicht wieder auf der falschen Sprachfassung landen. Laufzeit: ein Jahr. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG in Verbindung mit Art. 6 Abs. 1 lit. f DSGVO.",
          "Ihre Cookie-Entscheidung selbst wird nicht in einem Cookie, sondern im lokalen Speicher Ihres Browsers unter dem Schlüssel „sg-consent“ abgelegt. Sie verlässt Ihr Gerät nicht.",
          "Alle weiteren Cookies — die der Reichweitenmessung — werden erst gesetzt, nachdem Sie im Banner zugestimmt haben.",
        ],
      },
      {
        h: "5. Einwilligung und Widerruf",
        p: [
          "Beim ersten Besuch erscheint ein Banner, mit dem Sie der Reichweitenmessung zustimmen oder sie ablehnen können. Ohne Zustimmung werden keine Analyse-Cookies gesetzt und keine Sitzungsaufzeichnungen erstellt.",
          "Ihre Entscheidung können Sie jederzeit ändern: Der Link „Cookies“ im Fußbereich jeder Seite öffnet das Banner erneut. Widerrufen Sie Ihre Einwilligung, werden die gesetzten Analyse-Cookies gelöscht und die Dienste für diesen Browser nicht mehr geladen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.",
        ],
      },
      {
        h: "6. Google Analytics 4",
        p: [
          "Diese Website nutzt Google Analytics 4, einen Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Damit messe ich, welche Projekte gelesen werden und über welche Wege Besucher auf die Seite kommen. Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.",
          "Der Google-Tag wird auf allen Seiten geladen, arbeitet aber im sogenannten Consent Mode: Solange Sie nicht zugestimmt haben, sind alle Speicher-Signale auf „denied“ gesetzt. In diesem Zustand werden keine Cookies gesetzt und keine wiedererkennbaren Kennungen gespeichert; an Google übermittelt werden lediglich cookielose, aggregierte Signale über den Seitenaufruf, technisch bedingt einschließlich Ihrer IP-Adresse und Ihres Browsertyps. Google nutzt diese Signale zur statistischen Modellierung. Erst nach Ihrer Zustimmung setzt Google Analytics die Cookies „_ga“ und „_ga_<Mess-ID>“ (Laufzeit jeweils zwei Jahre) und misst Ihren Besuch vollständig.",
          "Werbebezogene Signale („ad_storage“, „ad_user_data“, „ad_personalization“) bleiben auch nach Ihrer Zustimmung deaktiviert — diese Website schaltet keine Werbung und nutzt keine Remarketing-Funktionen. Die IP-Adresse wird von Google gekürzt und nicht dauerhaft gespeichert.",
          "Eine Übermittlung von Daten in die USA an die Google LLC lässt sich dabei nicht ausschließen. Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert; ergänzend bestehen Standardvertragsklauseln. Weitere Informationen: policies.google.com/privacy",
        ],
      },
      {
        h: "7. Microsoft Clarity",
        p: [
          "Ebenfalls nur nach Ihrer Zustimmung nutze ich Microsoft Clarity, einen Dienst der Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland. Clarity zeichnet Interaktionen auf — Mausbewegungen, Scrollverhalten, Klicks — und stellt sie als Heatmaps und Sitzungswiedergaben dar. Damit erkenne ich, an welchen Stellen einer Fallstudie Leser abbrechen.",
          "Clarity setzt dazu die Cookies „_clck“ und „_clsk“ (Laufzeit ein Jahr bzw. ein Tag) und ruft eine Zählpixel-URL auf, über die Microsoft eine Kennung mit dem Microsoft-Werbenetzwerk (Bing) abgleicht und dabei ein Cookie „MUID“ auf der Domain clarity.ms verwendet. Eingaben in Formularfelder werden von Clarity standardmäßig maskiert; diese Website enthält ohnehin keine Formulare.",
          "Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Ohne Zustimmung wird die Clarity-Bibliothek nicht einmal geladen. Eine Übermittlung in die USA an die Microsoft Corporation ist möglich; Microsoft ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: privacy.microsoft.com",
        ],
      },
      {
        h: "8. Schriftarten",
        p: [
          "Die verwendete Schrift „Onest“ wird beim Erstellen der Seite heruntergeladen und von meinem eigenen Server ausgeliefert. Beim Besuch dieser Website wird keine Verbindung zu Google Fonts oder einem anderen Schriften-Dienst aufgebaut, es werden also auch keine Daten dorthin übertragen.",
        ],
      },
      {
        h: "9. Externe Links und Dateien",
        p: [
          "Diese Website verlinkt auf externe Angebote, insbesondere auf mein LinkedIn-Profil, sowie auf meinen Lebenslauf als PDF. Der Lebenslauf liegt auf demselben Server wie diese Website. Beim Klick auf einen externen Link verlassen Sie diese Seite; ab diesem Zeitpunkt gilt die Datenschutzerklärung des jeweiligen Anbieters. Solange Sie den Link nicht anklicken, werden keine Daten an den Anbieter übertragen.",
        ],
      },
      {
        h: "10. Kontaktaufnahme per E-Mail",
        p: [
          "Wenn Sie mir schreiben, verarbeite ich Ihre E-Mail-Adresse und Ihre Angaben ausschließlich, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei Anfragen zu einer möglichen Zusammenarbeit oder Anstellung, ansonsten Art. 6 Abs. 1 lit. f DSGVO. Ich lösche die Nachrichten, sobald sie nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
        ],
      },
      {
        h: "11. Ihre Rechte",
        p: [
          "Sie haben jederzeit das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16), auf Löschung (Art. 17), auf Einschränkung der Verarbeitung (Art. 18), auf Datenübertragbarkeit (Art. 20) sowie auf Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.",
          "Wenden Sie sich dafür formlos an die oben genannte E-Mail-Adresse.",
          "Unabhängig davon steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu, insbesondere bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Kavalleriestraße 2–4, 40213 Düsseldorf.",
        ],
      },
      {
        h: "12. Änderungen dieser Erklärung",
        p: [
          "Ich passe diese Datenschutzerklärung an, sobald sich die eingesetzte Technik oder die Rechtslage ändert. Es gilt jeweils die hier veröffentlichte Fassung.",
        ],
      },
    ],
    updated: owner.updatedDe,
  },
  en: {
    title: "Privacy policy",
    lead: "This website is a design portfolio. There is no registration, no contact form and no login — the only processing that goes beyond running the site is audience measurement, and that happens only with your consent.",
    sections: [
      {
        h: "1. Controller",
        p: [
          "The controller for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:",
        ],
        lines: [
          owner.name,
          owner.street,
          owner.city,
          "Germany",
          `Email: ${owner.email}`,
        ],
      },
      {
        h: "2. Hosting",
        p: [
          "This website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA, and served from the European data centre in Frankfurt am Main. Vercel processes the data as a processor under a contract pursuant to Art. 28 GDPR.",
          "The legal basis is Art. 6 (1) (f) GDPR: my legitimate interest in providing this website reliably and securely.",
        ],
      },
      {
        h: "3. Server log files",
        p: [
          "When you open this website, your browser automatically transmits information that is technically necessary to deliver it:",
        ],
        lines: [
          "IP address of the requesting device",
          "date and time of access",
          "page or file requested",
          "amount of data transferred and status code",
          "referrer URL (the page visited before)",
          "browser type, browser version and operating system",
        ],
      },
      {
        h: "4. Cookies and local storage",
        p: [
          "Without your consent, this website sets exactly one cookie, and it is a technically necessary one: “NEXT_LOCALE” stores your language choice (German or English) so that your next visit does not start in the wrong language. Lifetime: one year. The legal basis is § 25 (2) no. 2 TDDDG in conjunction with Art. 6 (1) (f) GDPR.",
          "Your cookie decision itself is not stored in a cookie but in your browser's local storage under the key “sg-consent”. It never leaves your device.",
          "All other cookies — those used for audience measurement — are only set after you have agreed in the banner.",
        ],
      },
      {
        h: "5. Consent and withdrawal",
        p: [
          "On your first visit a banner asks whether you accept audience measurement. Without consent, no analytics cookies are set and no sessions are recorded.",
          "You can change your decision at any time: the “Cookies” link in the footer of every page reopens the banner. If you withdraw consent, the analytics cookies that were set are deleted and the services are no longer loaded in this browser. The lawfulness of processing carried out before withdrawal remains unaffected.",
        ],
      },
      {
        h: "6. Google Analytics 4",
        p: [
          "This website uses Google Analytics 4, a service of Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, to measure which projects get read and how visitors arrive. The legal basis is your consent under Art. 6 (1) (a) GDPR and § 25 (1) TDDDG.",
          "The Google tag is loaded on every page but runs in Consent Mode: as long as you have not agreed, all storage signals are set to “denied”. In that state no cookies are set and no recognisable identifiers are stored; what reaches Google is cookieless, aggregated signals about the page view, which for technical reasons include your IP address and browser type. Google uses these signals for statistical modelling. Only after your consent does Google Analytics set the cookies “_ga” and “_ga_<measurement ID>” (two years each) and measure your visit in full.",
          "Advertising signals (“ad_storage”, “ad_user_data”, “ad_personalization”) remain disabled even after your consent — this website runs no advertising and no remarketing. Google truncates the IP address and does not store it permanently.",
          "Transfer of data to Google LLC in the USA cannot be ruled out. Google LLC is certified under the EU-US Data Privacy Framework, complemented by standard contractual clauses. More information: policies.google.com/privacy",
        ],
      },
      {
        h: "7. Microsoft Clarity",
        p: [
          "Also only after your consent, I use Microsoft Clarity, a service of Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Ireland. Clarity records interactions — mouse movement, scrolling, clicks — and presents them as heatmaps and session replays, which shows me where readers drop out of a case study.",
          "Clarity sets the cookies “_clck” and “_clsk” (one year and one day respectively) and calls a tracking pixel through which Microsoft syncs an identifier with the Microsoft advertising network (Bing), using a “MUID” cookie on the clarity.ms domain. Clarity masks form field input by default; this website contains no forms in any case.",
          "The legal basis is your consent under Art. 6 (1) (a) GDPR and § 25 (1) TDDDG. Without consent the Clarity library is not even downloaded. Transfer to Microsoft Corporation in the USA is possible; Microsoft is certified under the EU-US Data Privacy Framework. More information: privacy.microsoft.com",
        ],
      },
      {
        h: "8. Fonts",
        p: [
          "The “Onest” typeface is downloaded when the site is built and served from my own server. Visiting this website establishes no connection to Google Fonts or any other font service, so no data is transmitted there.",
        ],
      },
      {
        h: "9. External links and files",
        p: [
          "This website links to external services, in particular my LinkedIn profile, and to my CV as a PDF. The CV is stored on the same server as this website. Clicking an external link takes you off this site; from that point the privacy policy of the respective provider applies. As long as you do not click, no data is transmitted to that provider.",
        ],
      },
      {
        h: "10. Contact by email",
        p: [
          "If you write to me, I process your email address and the information you provide solely in order to answer your enquiry. The legal basis is Art. 6 (1) (b) GDPR for enquiries about possible collaboration or employment, otherwise Art. 6 (1) (f) GDPR. I delete messages once they are no longer needed and no statutory retention periods apply.",
        ],
      },
      {
        h: "11. Your rights",
        p: [
          "You have the right to information about the personal data concerning you (Art. 15 GDPR), to rectification (Art. 16), to erasure (Art. 17), to restriction of processing (Art. 18), to data portability (Art. 20) and to object to processing based on legitimate interests (Art. 21). You may withdraw consent at any time with effect for the future.",
          "An informal message to the email address above is enough.",
          "You also have the right to lodge a complaint with a data protection supervisory authority, in particular the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia, Kavalleriestraße 2–4, 40213 Düsseldorf, Germany.",
        ],
      },
      {
        h: "12. Changes to this policy",
        p: [
          "I update this privacy policy whenever the technology in use or the legal situation changes. The version published here is the one that applies.",
        ],
      },
    ],
    updated: owner.updatedEn,
  },
};
