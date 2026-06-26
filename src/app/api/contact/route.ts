import { NextResponse } from "next/server";
import {
  createMailTransporter,
  escapeHtml,
  formatFrom,
  getSmtpConfig,
  smtpErrorHint,
} from "@/lib/smtp";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request: Request) {
  try {
    const { name, email, message, subject } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 },
      );
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
        "Contact SMTP config error:",
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

    const safeName = name.trim();
    const safeEmail = email.trim();
    const safeSubject = subject?.trim() || "General inquiry";
    const safeMessage = message.trim();

    await transporter.sendMail({
      from: formatFrom(config),
      to: config.to,
      replyTo: `"${safeName}" <${safeEmail}>`,
      subject: `Contact: ${safeSubject}`,
      text: [
        `Name: ${safeName}`,
        `Email: ${safeEmail}`,
        `Subject: ${safeSubject}`,
        "",
        "Message:",
        safeMessage,
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #15202f; margin-top: 0;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(safeSubject)}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #24bace;">
            ${escapeHtml(safeMessage).replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: smtpErrorHint(error) },
      { status: 500 },
    );
  }
}
