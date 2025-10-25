import type { NextApiRequest, NextApiResponse } from "next";
import { sendEnquiryMail } from "@/lib/mailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  try {
    const { hp = "", material_code = "", material_name = "", name = "", email = "", phone = "", message = "", page_url = "" } = req.body || {};
    if (hp) return res.status(200).json({ ok: true });
    if (!name || !email || !message) return res.status(400).json({ ok: false, error: "Missing required fields." });

    await sendEnquiryMail({ material_code, material_name, name, email, phone, message, page_url });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("Enquiry API error:", e);
    return res.status(500).json({ ok: false, error: "Failed to process request." });
  }
}