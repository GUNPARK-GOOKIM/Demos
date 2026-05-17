import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ── Gmail SMTP Transport ─────────────────────────────────────────── */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

/* ── POST /api/inquiry ────────────────────────────────────────────── */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, budget, websiteType, message, template } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const subject = `🔥 New Inquiry: ${name} — ${websiteType || "General"}`;

    const html = `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
        <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:28px 32px">
          <h1 style="color:#fff;font-size:22px;margin:0;font-weight:800">New Client Inquiry</h1>
          <p style="color:rgba(255,255,255,.8);font-size:14px;margin:8px 0 0">Via Forge Layer — ${new Date().toLocaleDateString("en-IN", { dateStyle: "full" })}</p>
        </div>
        <div style="padding:28px 32px">
          <table style="width:100%;border-collapse:collapse">
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600;width:140px">Name</td>
              <td style="padding:12px 0;color:#111827;font-size:15px;font-weight:500">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Email</td>
              <td style="padding:12px 0;color:#111827;font-size:15px"><a href="mailto:${email}" style="color:#6366f1;text-decoration:none">${email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Phone</td>
              <td style="padding:12px 0;color:#111827;font-size:15px"><a href="tel:${phone}" style="color:#6366f1;text-decoration:none">${phone}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Budget</td>
              <td style="padding:12px 0;color:#111827;font-size:15px;font-weight:600">${budget || "Not specified"}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Website Type</td>
              <td style="padding:12px 0;color:#111827;font-size:15px">${websiteType || "Not specified"}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Template</td>
              <td style="padding:12px 0;color:#111827;font-size:15px">${template || "General Inquiry"}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top">Message</td>
              <td style="padding:12px 0;color:#111827;font-size:15px;line-height:1.6">${message.replace(/\n/g, "<br>")}</td>
            </tr>` : ""}
          </table>
        </div>
        <div style="background:#f3f4f6;padding:16px 32px;text-align:center">
          <p style="margin:0;color:#9ca3af;font-size:12px">Forge Layer — forgelayer.com</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Forge Layer" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER!,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Inquiry email error:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry email." },
      { status: 500 }
    );
  }
}
