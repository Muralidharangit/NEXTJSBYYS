import { NextResponse } from "next/server";
import { sendEnquiryMail } from "@/lib/mailer";

// Nodemailer needs Node runtime (NOT Edge)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    if (String(form.get("hp") || "")) return NextResponse.json({ ok: true });

    const data = {
      material_code: String(form.get("material_code") || ""),
      material_name: String(form.get("material_name") || ""),
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
      page_url: String(form.get("page_url") || ""),
    };

    if (!data.name || !data.email || !data.message)
      return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });

    // Fire & forget email (non-blocking)
    sendEnquiryMail(data).catch((err) => console.error("Mail error:", err));

    // Respond immediately
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Enquiry API error:", err);
    return NextResponse.json({ ok: false, error: "Failed to process request." }, { status: 500 });
  }
}
