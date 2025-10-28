import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // SMTP configuration — same as existing send-email route. Move to env later.
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "timetodrive@romain-poulain.fr",
        pass: "FuCeLfP@1012",
      },
    });

    const htmlContent = `
      <h2>📝 Nouveau message via le formulaire Contact</h2>
      <h3>👤 Informations</h3>
      <p><b>Nom :</b> ${data.first_name || "-"}</p>
      <p><b>Prénom :</b> ${data.last_name || "-"}</p>
      <p><b>Entreprise :</b> ${data.company || "-"}</p>
      <p><b>Pays :</b> ${data.country || "-"}</p>
      <p><b>Téléphone :</b> ${data.phone || "-"}</p>
      <p><b>Email :</b> ${data.email || "-"}</p>

      <h3>💬 Message</h3>
      <p>${data.message ? data.message.replace(/\n/g, '<br/>') : "-"}</p>

      <p><b>Conditions acceptées :</b> ${data.agreeToPolicies ? "✅ Oui" : "❌ Non"}</p>
    `;

    const mailOptions = {
      from: `"TimeToDrive" <timetodrive@romain-poulain.fr>`,
      to: "contact@time-to-drive.com",
      subject: `Nouveau message contact - ${data.first_name || ""} ${data.last_name || ""}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur envoi contact:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
