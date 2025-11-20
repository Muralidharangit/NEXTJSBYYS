// src/pages/api/contact/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { sendContactMail } from "@/lib/mailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { hp = "", name = "", email = "", phone = "", message = "", page_url = "" } = req.body || {};
  if (hp) return res.status(200).json({ ok: true }); // honeypot
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields." });
  }

  const info = await sendContactMail({ name, email, phone, message, page_url });
  return res.status(200).json({ ok: true, id: info.messageId });
}
