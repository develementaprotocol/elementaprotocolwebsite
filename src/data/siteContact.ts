/** Public contact email shown across the marketing site and legal pages. */
export const SITE_CONTACT_EMAIL = "info@elementaprotocol.com";

/** Opens Gmail compose in a new tab (falls back to mailto where Gmail is unavailable). */
export function gmailComposeHref(
  email: string = SITE_CONTACT_EMAIL,
  subject?: string,
): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: email,
  });
  if (subject?.trim()) {
    params.set("su", subject.trim());
  }
  return `https://mail.google.com/mail/?${params.toString()}`;
}
