"use server";

import { Resend } from "resend";
import { LeadSchema, type LeadInput } from "@/lib/schemas";

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Partial<Record<keyof LeadInput, string>> };

const escapeHtml = (raw: string) =>
  raw
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

function buildEmailHtml(lead: LeadInput) {
  const rows: [string, string][] = [
    ["שם", lead.name],
    ["טלפון", lead.phone],
    ["אימייל", lead.email],
    ["הודעה", lead.message.replace(/\n/g, "<br />")],
  ];

  return `<!doctype html>
<html lang="he" dir="rtl">
  <body style="font-family: 'Heebo','Rubik',Arial,sans-serif; background:#0a0a0a; color:#ffffff; margin:0; padding:24px;">
    <div style="max-width:560px; margin:0 auto; background:#111827; border:1px solid #1f2937; border-radius:16px; padding:28px;">
      <h1 style="margin:0 0 4px; font-size:20px; color:#00f5d4;">ליד חדש מהאתר 🎯</h1>
      <p style="margin:0 0 20px; color:#94a3b8; font-size:13px;">התקבל ב-${new Date().toLocaleString("he-IL")}</p>
      <table style="width:100%; border-collapse:collapse;">
        ${rows
          .map(
            ([label, value]) => `<tr>
              <td style="padding:10px 0; color:#94a3b8; font-size:13px; width:100px; vertical-align:top;">${escapeHtml(label)}</td>
              <td style="padding:10px 0; color:#ffffff; font-size:15px;">${typeof value === "string" && label !== "הודעה" ? escapeHtml(value) : value}</td>
            </tr>`,
          )
          .join("")}
      </table>
    </div>
  </body>
</html>`;
}

export async function submitLead(
  input: LeadInput,
): Promise<SubmitLeadResult> {
  const parsed = LeadSchema.safeParse(input);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof LeadInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof LeadInput | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, error: "נתוני הטופס לא תקינים", fieldErrors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEAD_TO_EMAIL;
  const fromEmail = process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.warn(
      "[submitLead] RESEND_API_KEY or LEAD_TO_EMAIL not configured. Lead received (dev mode):",
      parsed.data,
    );
    return {
      ok: false,
      error:
        "שליחת הטפסים עדיין לא מחוברת. הליד נשמר ב-console של השרת (מצב פיתוח).",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const sent = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: parsed.data.email,
      subject: `ליד חדש מהאתר — ${parsed.data.name}`,
      html: buildEmailHtml(parsed.data),
    });

    if (sent.error) {
      console.error("[submitLead] Resend error:", sent.error);
      return { ok: false, error: "שליחת המייל נכשלה. נסו שוב בעוד רגע." };
    }
    return { ok: true };
  } catch (err) {
    console.error("[submitLead] Unexpected error:", err);
    return { ok: false, error: "שגיאה לא צפויה. נסו שוב או שלחו לי במייל." };
  }
}
