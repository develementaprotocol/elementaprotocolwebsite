import { NextResponse } from "next/server";
import {
  createMailTransporter,
  escapeHtml,
  formatFrom,
  getSmtpConfig,
  smtpErrorHint,
} from "@/lib/smtp";

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      email?: string;
    };

    const email = body.email?.trim() ?? "";
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    const smtp = getSmtpConfig();
    if (!smtp.ok) {
      console.error(
        "Subscribe SMTP config error:",
        smtp.error,
        "(set these in Vercel → Settings → Environment Variables → Production)",
      );
      return NextResponse.json(
        {
          error:
            "Email service is not configured on the server. Add EMAIL_HOST, EMAIL_USER, EMAIL_PASS, and EMAIL_TO in Vercel environment variables, then redeploy.",
        },
        { status: 500 },
      );
    }

    const { config } = smtp;
    const transporter = createMailTransporter(config);

    await transporter.sendMail({
      from: formatFrom(config),
      to: config.to,
      replyTo: email,
      subject: `Subscribe: ${email}`,
      text: [
        "New newsletter / community signup",
        "",
        `Email: ${email}`,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #15202f; margin-top: 0;">New Newsletter Signup</h2>
          <p>Someone subscribed from the community section on the website.</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Community subscribe error:", error);
    return NextResponse.json(
      { error: smtpErrorHint(error) },
      { status: 500 },
    );
  }
}
