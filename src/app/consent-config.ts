// Shared between the inline Consent Mode script in the layout and the banner
// component, so the storage key and the signal payloads cannot drift apart.

export const CONSENT_STORAGE_KEY = "sg-consent";

// Consent Mode v2 requires all four signals to be declared. The banner only
// asks about measurement, so the three advertising signals stay denied even
// after a visitor agrees — the site runs no ad tags to use them.
export const CONSENT_DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;

export const CONSENT_GRANTED = {
  ...CONSENT_DENIED,
  analytics_storage: "granted",
} as const;

// gtag.js must already know the defaults when it starts, so this runs from a
// beforeInteractive script — the ordering the Consent Mode guide insists on.
// wait_for_update gives a first-time visitor's answer a window to arrive
// before the tag decides how to behave.
export const consentDefaultScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', ${JSON.stringify({
  ...CONSENT_DENIED,
  wait_for_update: 500,
})});
gtag('set', 'ads_data_redaction', true);
gtag('set', 'url_passthrough', true);
try {
  if (localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted') {
    gtag('consent', 'update', ${JSON.stringify(CONSENT_GRANTED)});
  }
} catch (e) {}
`;
