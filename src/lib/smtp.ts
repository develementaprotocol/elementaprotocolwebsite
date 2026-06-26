import nodemailer from "nodemailer";

export type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
  fromName: string;
  fromEmail: string;
};

/** Env keys required at runtime (API routes on Vercel — .env is not deployed). */
export const SMTP_REQUIRED_ENV_KEYS = [
  "EMAIL_HOST",
  "EMAIL_USER",
  "EMAIL_PASS",
  "EMAIL_TO",
] as const;

export function getMissingSmtpEnvKeys(): string[] {
  const missing: string[] = [];
  if (!process.env.EMAIL_HOST?.trim()) missing.push("EMAIL_HOST");
  if (!process.env.EMAIL_USER?.trim()) missing.push("EMAIL_USER");
  if (!process.env.EMAIL_PASS) missing.push("EMAIL_PASS");
  if (!process.env.EMAIL_TO?.trim()) missing.push("EMAIL_TO");
  return missing;
}

export function getSmtpConfig():
  | { ok: true; config: SmtpConfig }
  | { ok: false; error: string; missing: string[] } {
  const missing = getMissingSmtpEnvKeys();
  if (missing.length > 0) {
    return {
      ok: false,
      error: `Missing: ${missing.join(", ")}`,
      missing,
    };
  }

  const host = process.env.EMAIL_HOST!.trim();
  const user = process.env.EMAIL_USER!.trim();
  const pass = process.env.EMAIL_PASS!;
  const to = process.env.EMAIL_TO!.trim();

  const port = Number(process.env.EMAIL_PORT ?? "465");
  const fromEmail = process.env.EMAIL_FROM?.trim() || user;
  const fromName =
    process.env.EMAIL_FROM_NAME?.trim() || "Elementa Protocol";

  return {
    ok: true,
    config: { host, port, user, pass, to, fromName, fromEmail },
  };
}

export function createMailTransporter(config: SmtpConfig) {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.pass,
    },
    ...(config.port === 587 ? { requireTLS: true } : {}),
  });
}

export function formatFrom(config: SmtpConfig) {
  return `"${config.fromName}" <${config.fromEmail}>`;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Map nodemailer / DNS errors to a short user-facing hint. */
export function smtpErrorHint(error: unknown): string {
  if (!(error instanceof Error)) {
    return "Failed to send email. Check SMTP settings in .env.local";
  }

  const msg = error.message;
  if (msg.includes("ENOTFOUND") || msg.includes("EDNS")) {
    return "SMTP host not found. Check EMAIL_HOST in .env — mail.elementaprotocol.com may need a DNS record in GoDaddy.";
  }
  if (msg.includes("EAUTH") || msg.includes("Invalid login")) {
    return "SMTP login failed. Check EMAIL_USER and EMAIL_PASS in .env.";
  }
  if (msg.includes("ETIMEDOUT") || msg.includes("ECONNREFUSED")) {
    return "Could not connect to SMTP server. Try EMAIL_PORT=587 or check your firewall.";
  }

  return process.env.NODE_ENV === "development"
    ? `Failed to send email: ${msg}`
    : "Failed to send email. Please try again later.";
}
