import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Missing required fields (name, email, message)" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const targetEmail =
      process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL || "sahajpal1905@gmail.com";
    let fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    if (fromEmail === "onboarding@resend.dev") {
      fromEmail = "ShjPortfolio <onboarding@resend.dev>";
    } else if (!fromEmail.includes("<")) {
      fromEmail = `ShjPortfolio <${fromEmail}>`;
    }

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return res.status(500).json({
        error: "Resend API key is not configured on the server.",
      });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [targetEmail],
        reply_to: email,
        subject: `Portfolio Inquiry from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #7B61FF; border-bottom: 2px solid #00E5FF; padding-bottom: 10px; margin-top: 0;">New Portfolio Message</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #4b5563; font-weight: bold; width: 100px;">Sender Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #4b5563; font-weight: bold;">Sender Email:</td>
                <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #00E5FF; text-decoration: none;">${email}</a></td>
              </tr>
            </table>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #7B61FF;">
              <p style="margin: 0; color: #1e293b; font-weight: bold; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; font-family: monospace;">Message Body:</p>
              <p style="margin: 0; color: #374151; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">${message}</p>
            </div>
            <footer style="margin-top: 25px; padding-top: 15px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 11px; color: #9ca3af;">
              This message was delivered automatically from your Portfolio contact portal.
            </footer>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API responded with error:", data);
      return res
        .status(response.status)
        .json({ error: data.message || "Failed to deliver message via Resend." });
    }

    return res.status(200).json({ success: true, messageId: data.id });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ error: error.message || "An internal error occurred." });
  }
}
