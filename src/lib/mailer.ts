import  nodemailer  from 'nodemailer';
import "server-only";

const host = process.env.MAIL_HOST!;
const port = Number(process.env.MAIL_PORT || 587);
const user = process.env.MAIL_USERNAME!;
const pass = process.env.MAIL_PASSWORD!;
const from = process.env.MAIL_FROM || process.env.MAIL_USERNAME!;
const to = process.env.MAIL_TO || process.env.MAIL_USERNAME!;

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure: port === 465, // 465 = SSL, 587 = STARTTLS
  auth: { user, pass },
});

if (process.env.NODE_ENV !== "production") {
  transporter.verify().then(() => {
    console.log("[mailer] SMTP connection OK");
  }).catch(err => {
    console.error("[mailer] SMTP verify failed:", err);
  });
}

export async function sendEnquiryMail(payload: {
  material_code: string;
  material_name: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  page_url?: string;
}) {
  const subject = `New Enquiry: ${payload.material_name} (${payload.material_code || "No Code"})`;

  const text = `
New enquiry:

Material Code: ${payload.material_code}
Material Name: ${payload.material_name}

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone}

Message:
${payload.message}

Page: ${payload.page_url || "-"}
  `.trim();

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
    <h2 style="margin:0 0 8px">New Enquiry</h2>
    <p><b>Material Code:</b> ${escapeHtml(payload.material_code)}</p>
    <p><b>Material Name:</b> ${escapeHtml(payload.material_name)}</p>
    <hr />
    <p><b>Name:</b> ${escapeHtml(payload.name)}</p>
    <p><b>Email:</b> ${escapeHtml(payload.email)}</p>
    <p><b>Phone:</b> ${escapeHtml(payload.phone)}</p>
    <p><b>Message:</b><br/>${nl2br(escapeHtml(payload.message))}</p>
    <hr />
    <p><b>Page:</b> ${escapeHtml(payload.page_url || "-")}</p>
  </div>
  `;

  await transporter.sendMail({
    from, //sangeeswty
    to, //sangeedev
    subject,
    text,
    html,
    replyTo: payload.email,
  });
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function nl2br(s: string) {
  return s.replace(/\n/g, "<br/>");
}

// Contact Form starts

export async function sendContactMail(payload: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  page_url?: string;
}) {
  const subject = `Website Contact: ${payload.name}`;

  const text = `
New contact message:

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone || "-"}

Message:
${payload.message}

Page: ${payload.page_url || "-"}
  `.trim();

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
    <h2 style="margin:0 0 8px">New Contact Message</h2>
    <p><b>Name:</b> ${escapeHtml(payload.name)}</p>
    <p><b>Email:</b> ${escapeHtml(payload.email)}</p>
    <p><b>Phone:</b> ${escapeHtml(payload.phone || "-")}</p>
    <p><b>Message:</b><br/>${nl2br(escapeHtml(payload.message))}</p>
    <hr />
    <p><b>Page:</b> ${escapeHtml(payload.page_url || "-")}</p>
  </div>
  `;

  return transporter.sendMail({
    from,
    to: process.env.MAIL_TO || from, // admin inbox
    subject,
    text,
    html,
    replyTo: payload.email, // reply goes to the user
  });
}
