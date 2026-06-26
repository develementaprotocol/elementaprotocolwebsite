/**
 * Test SMTP credentials from .env / .env.local
 *
 * Usage:
 *   npm run test:email
 *   npm run test:email -- --verify-only   (connection check only, no send)
 *   npm run test:email -- --subscribe     (send subscribe-style test email)
 */

import fs from "node:fs";
import path from "node:path";
import dns from "node:dns/promises";
import { fileURLToPath } from "node:url";
import nodemailer from "nodemailer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;

    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function loadEnv() {
  loadEnvFile(path.join(root, ".env"));
  loadEnvFile(path.join(root, ".env.local"));
}

function maskEmail(email) {
  const [local, domain] = email?.split("@") ?? [];
  if (!local || !domain) return "(not set)";
  const visible = local.length <= 2 ? local[0] ?? "*" : local.slice(0, 2);
  return `${visible}***@${domain}`;
}

function getConfig() {
  const host = process.env.EMAIL_HOST?.trim();
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO?.trim();
  const port = Number(process.env.EMAIL_PORT ?? "465");
  const fromEmail = process.env.EMAIL_FROM?.trim() || user;
  const fromName = process.env.EMAIL_FROM_NAME?.trim() || "Elementa Protocol";

  const missing = [];
  if (!host) missing.push("EMAIL_HOST");
  if (!user) missing.push("EMAIL_USER");
  if (!pass) missing.push("EMAIL_PASS");
  if (!to) missing.push("EMAIL_TO");

  return { host, user, pass, to, port, fromEmail, fromName, missing };
}

async function checkDns(host) {
  try {
    await dns.lookup(host);
    return { ok: true };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : String(error),
    };
  }
}

function createTransporter(config) {
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

function printHeader(title) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(title);
  console.log("=".repeat(60));
}

async function main() {
  const verifyOnly = process.argv.includes("--verify-only");
  const subscribeTest = process.argv.includes("--subscribe");

  loadEnv();
  const config = getConfig();

  printHeader("SMTP config (from .env / .env.local)");
  console.log(`EMAIL_HOST:      ${config.host ?? "(missing)"}`);
  console.log(`EMAIL_PORT:      ${config.port}`);
  console.log(`EMAIL_USER:      ${maskEmail(config.user)}`);
  console.log(`EMAIL_PASS:      ${config.pass ? "******** (set)" : "(missing)"}`);
  console.log(`EMAIL_FROM:      ${maskEmail(config.fromEmail)}`);
  console.log(`EMAIL_FROM_NAME: ${config.fromName}`);
  console.log(`EMAIL_TO:        ${maskEmail(config.to)}`);

  if (config.missing.length > 0) {
    console.error(`\n❌ Missing: ${config.missing.join(", ")}`);
    process.exit(1);
  }

  printHeader("Step 1 — DNS lookup for SMTP host");
  const dnsResult = await checkDns(config.host);
  if (!dnsResult.ok) {
    console.error(`❌ Cannot resolve ${config.host}`);
    console.error(`   ${dnsResult.message}`);
    console.error("\n   Fix EMAIL_HOST in .env or add DNS records in GoDaddy.");
    process.exit(1);
  }
  console.log(`✅ ${config.host} resolves OK`);

  printHeader("Step 2 — SMTP login (verify)");
  const transporter = createTransporter(config);

  try {
    await transporter.verify();
    console.log("✅ SMTP authentication successful");
  } catch (error) {
    console.error("❌ SMTP verify failed");
    console.error(`   ${error instanceof Error ? error.message : error}`);
    if (config.host.includes("gmail")) {
      console.error("\n   Gmail tips:");
      console.error("   - EMAIL_USER must be your @gmail.com address");
      console.error("   - Use an App Password, not your normal password");
      console.error("   - https://support.google.com/accounts/answer/185833");
    }
    process.exit(1);
  }

  if (verifyOnly) {
    console.log("\n✅ Verify-only mode — no test email sent.");
    process.exit(0);
  }

  printHeader(
    subscribeTest ? "Step 3 — Send subscribe test email" : "Step 3 — Send test email",
  );
  const testSubscriber = "test@example.com";
  try {
    const info = await transporter.sendMail(
      subscribeTest
        ? {
            from: `"${config.fromName}" <${config.fromEmail}>`,
            to: config.to,
            replyTo: testSubscriber,
            subject: `Subscribe: ${testSubscriber}`,
            text: [
              "New newsletter / community signup",
              "",
              `Email: ${testSubscriber}`,
              "",
              "(Test from scripts/test-email.mjs --subscribe)",
            ].join("\n"),
            html: `
        <div style="font-family:sans-serif;padding:16px">
          <h2>New Newsletter Signup (test)</h2>
          <p><strong>Email:</strong> ${testSubscriber}</p>
          <p><em>Test from scripts/test-email.mjs --subscribe</em></p>
        </div>
      `,
          }
        : {
            from: `"${config.fromName}" <${config.fromEmail}>`,
            to: config.to,
            subject: "Elementa contact form — SMTP test",
            text: [
              "This is a test email from scripts/test-email.mjs",
              "",
              `Sent at: ${new Date().toISOString()}`,
              `SMTP host: ${config.host}`,
              `Delivered to: ${config.to}`,
            ].join("\n"),
            html: `
        <div style="font-family:sans-serif;padding:16px">
          <h2>SMTP test successful</h2>
          <p>This is a test email from <code>scripts/test-email.mjs</code>.</p>
          <p><strong>Sent at:</strong> ${new Date().toISOString()}</p>
          <p><strong>SMTP host:</strong> ${config.host}</p>
          <p><strong>Delivered to:</strong> ${config.to}</p>
        </div>
      `,
          },
    );

    console.log("✅ Test email accepted by SMTP server");
    console.log(`   Message ID: ${info.messageId ?? "(none)"}`);
    console.log(`   Check inbox: ${maskEmail(config.to)} (also check Spam)`);

    if (config.to?.endsWith("@elementaprotocol.com")) {
      console.log("\n⚠️  Note: elementaprotocol.com has no MX records yet.");
      console.log("   Mail to @elementaprotocol.com may not arrive until DNS is set up.");
      console.log("   Use a Gmail address in EMAIL_TO for testing.");
    }
  } catch (error) {
    console.error("❌ Failed to send test email");
    console.error(`   ${error instanceof Error ? error.message : error}`);
    process.exit(1);
  }

  console.log("\n✅ All checks passed.\n");
}

main().catch((error) => {
  console.error("Unexpected error:", error);
  process.exit(1);
});
