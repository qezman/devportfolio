import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};
    if (!name || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const to = process.env.TO_EMAIL || "contactqossim@gmail.com";
    const fromAddress = process.env.RESEND_FROM || "onboarding@resend.dev";
    const result = await resend.emails.send({
      from: `Portfolio Contact <${fromAddress}>`,
      to,
      replyTo: email ? email : undefined,
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email ? email : "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (result.error) {
      return res.status(500).json({ ok: false, error: result.error.message || "Failed to send" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ ok: false, error: error.message || "Failed to send message" });
  }
}
