import { NextResponse } from "next/server";
import {
  SMTP_REQUIRED_ENV_KEYS,
  getMissingSmtpEnvKeys,
} from "@/lib/smtp";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/** Safe production check — reports missing keys only, never secret values. */
export async function GET() {
  const missing = getMissingSmtpEnvKeys();
  return NextResponse.json({
    configured: missing.length === 0,
    missing,
    required: [...SMTP_REQUIRED_ENV_KEYS],
    optional: ["EMAIL_PORT", "EMAIL_FROM", "EMAIL_FROM_NAME"],
  });
}
