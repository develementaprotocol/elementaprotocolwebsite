import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  isAllowedPublicEmailDomain,
  PUBLIC_EMAIL_DOMAIN_MESSAGE,
} from "@/utils/emailProviders";

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
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    const emailHost = process.env.EMAIL_HOST;
    const emailPort = Number(process.env.EMAIL_PORT ?? "465");
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO;

    if (!emailHost || !emailUser || !emailPass || !emailTo) {
      return NextResponse.json(
        { error: "Email service is not configured correctly" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"Community Signup" <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: "New Community Signup",
      text: `A new email subscribed from the community section.\n\nEmail: ${email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 6px;">
          <h2 style="margin-top: 0;">New Community Signup</h2>
          <p>A new email subscribed from the community section.</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Community subscribe error:", error);
    return NextResponse.json({ error: "Failed to process subscription" }, { status: 500 });
  }
}

