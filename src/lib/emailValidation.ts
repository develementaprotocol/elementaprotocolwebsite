const EMAIL_FORMAT_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Common disposable / temporary email providers — lowercase domains only. */
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  "0-mail.com",
  "0815.ru",
  "10minutemail.com",
  "10minutemail.net",
  "20minutemail.com",
  "33mail.com",
  "anonbox.net",
  "anonymbox.com",
  "binkmail.com",
  "bobmail.info",
  "burnermail.io",
  "byom.de",
  "discard.email",
  "discardmail.com",
  "discardmail.de",
  "disposable.com",
  "disposableemailaddresses.com",
  "dispostable.com",
  "dropmail.me",
  "duck.com",
  "emailondeck.com",
  "emailtemporario.com.br",
  "fakeinbox.com",
  "fakeinbox.info",
  "fakemail.net",
  "fakemailgenerator.com",
  "filzmail.com",
  "getairmail.com",
  "getnada.com",
  "guerrillamail.com",
  "guerrillamail.net",
  "guerrillamail.org",
  "guerrillamailblock.com",
  "harakirimail.com",
  "inboxbear.com",
  "inboxkitten.com",
  "jetable.org",
  "mail-temporaire.fr",
  "mailcatch.com",
  "maildrop.cc",
  "mailinator.com",
  "mailinator.net",
  "mailinator.org",
  "mailinator2.com",
  "mailnesia.com",
  "mailnull.com",
  "mailpoof.com",
  "mailscrap.com",
  "mailtemp.net",
  "mailtemporaire.com",
  "mailtothis.com",
  "mintemail.com",
  "moakt.com",
  "mohmal.com",
  "mytemp.email",
  "nada.email",
  "nada.ltd",
  "nospamfor.us",
  "nowmymail.com",
  "pokemail.net",
  "sharklasers.com",
  "spam4.me",
  "spamgourmet.com",
  "spamherelots.com",
  "spamhereplease.com",
  "spambox.us",
  "temp-mail.org",
  "temp-mail.ru",
  "tempail.com",
  "tempinbox.com",
  "tempmail.com",
  "tempmail.net",
  "tempmail.ninja",
  "tempmailo.com",
  "tempmailaddress.com",
  "tempm.com",
  "tempomail.fr",
  "temporarymail.com",
  "throwaway.email",
  "throwawaymail.com",
  "trashmail.com",
  "trashmail.net",
  "trashmail.org",
  "trashmailer.com",
  "trbvm.com",
  "yopmail.com",
  "yopmail.fr",
  "yopmail.net",
]);

export function isValidEmailFormat(value: string) {
  return EMAIL_FORMAT_RE.test(value.trim());
}

export function getEmailDomain(email: string) {
  const at = email.trim().lastIndexOf("@");
  if (at < 0) return "";
  return email.slice(at + 1).trim().toLowerCase();
}

export function isDisposableEmail(email: string) {
  const domain = getEmailDomain(email);
  if (!domain) return false;
  return DISPOSABLE_EMAIL_DOMAINS.has(domain);
}

/** Accepts Gmail, Google Workspace, and organization emails; blocks disposable providers. */
export function isAllowedEmail(email: string) {
  const trimmed = email.trim();
  if (!isValidEmailFormat(trimmed)) return false;
  return !isDisposableEmail(trimmed);
}

export const DISALLOWED_EMAIL_MESSAGE =
  "Please use a Gmail or organization email address. Temporary email providers are not allowed.";

export const INVALID_EMAIL_MESSAGE = "Please enter a valid email address.";
