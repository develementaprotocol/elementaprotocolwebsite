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

/**
 * Read env at request time. Bracket access stops Next.js from inlining
 * `undefined` at build time when Vercel vars were added after the last deploy.
 */
function readEnv(key: string): string | undefined {
  const value = process.env[key];
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

/** Password may contain leading/trailing spaces — do not trim. */
function readEnvSecret(key: string): string | undefined {
  const value = process.env[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

export function getMissingSmtpEnvKeys(): string[] {
  const missing: string[] = [];
  if (!readEnv("EMAIL_HOST")) missing.push("EMAIL_HOST");
  if (!readEnv("EMAIL_USER")) missing.push("EMAIL_USER");
  if (!readEnvSecret("EMAIL_PASS")) missing.push("EMAIL_PASS");
  if (!readEnv("EMAIL_TO")) missing.push("EMAIL_TO");
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

  const host = readEnv("EMAIL_HOST")!;
  const user = readEnv("EMAIL_USER")!;
  const pass = readEnvSecret("EMAIL_PASS")!;
  const to = readEnv("EMAIL_TO")!;

  const port = Number(readEnv("EMAIL_PORT") ?? "465");
  const fromEmail = readEnv("EMAIL_FROM") || user;
  const fromName = readEnv("EMAIL_FROM_NAME") || "Elementa Protocol";

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
