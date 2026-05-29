import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const gmailUser = process.env.GMAIL_USER;
const gmailPass = process.env.GMAIL_APP_PASSWORD;

const transporter =
  gmailUser && gmailPass
    ? nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass
        }
      })
    : null;

let verifyPromise: Promise<void> | null = null;

async function ensureTransportReady() {
  if (!transporter) {
    throw new Error("Email service is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD.");
  }
  if (!verifyPromise) {
    verifyPromise = transporter.verify().then(() => undefined);
  }
  return verifyPromise;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const budget = String(body?.budget ?? "").trim();
    const websiteType = String(body?.websiteType ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const template = String(body?.template ?? "General Inquiry").trim();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    await ensureTransportReady();

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeBudget = escapeHtml(budget || "Not specified");
    const safeWebsiteType = escapeHtml(websiteType || "Not specified");
    const safeTemplate = escapeHtml(template || "General Inquiry");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const subject = `New Inquiry: ${name} - ${websiteType || "General"}`;

    const html = `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;background:#f9fafb;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb">
        <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:28px 32px">
          <h1 style="color:#fff;font-size:22px;margin:0;font-weight:800">New Client Inquiry</h1>
          <p style="color:rgba(255,255,255,.85);font-size:14px;margin:8px 0 0">Via Forge Layer - ${new Date().toLocaleDateString("en-IN", { dateStyle: "full" })}</p>
        </div>
        <div style="padding:28px 32px">
          <table style="width:100%;border-collapse:collapse">
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600;width:140px">Name</td>
              <td style="padding:12px 0;color:#111827;font-size:15px;font-weight:500">${safeName}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Email</td>
              <td style="padding:12px 0;color:#111827;font-size:15px"><a href="mailto:${safeEmail}" style="color:#6366f1;text-decoration:none">${safeEmail}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Phone</td>
              <td style="padding:12px 0;color:#111827;font-size:15px"><a href="tel:${safePhone}" style="color:#6366f1;text-decoration:none">${safePhone}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Budget</td>
              <td style="padding:12px 0;color:#111827;font-size:15px;font-weight:600">${safeBudget}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Website Type</td>
              <td style="padding:12px 0;color:#111827;font-size:15px">${safeWebsiteType}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6">
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600">Template</td>
              <td style="padding:12px 0;color:#111827;font-size:15px">${safeTemplate}</td>
            </tr>
            ${message
              ? `<tr>
              <td style="padding:12px 0;color:#6b7280;font-size:13px;font-weight:600;vertical-align:top">Message</td>
              <td style="padding:12px 0;color:#111827;font-size:15px;line-height:1.6">${safeMessage}</td>
            </tr>`
              : ""}
          </table>
        </div>
      </div>
    `;

    await transporter!.sendMail({
      from: `"Forge Layer" <${gmailUser}>`,
      to: gmailUser!,
      replyTo: email,
      subject,
      html
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
