import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // 🔐 Configuration SMTP (Hostinger)
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "timetodrive@romain-poulain.fr",
        pass: "FuCeLfP@1012", // ⚠️ on déplacera ça dans .env après !
      },
    });

    // 📩 Construire le contenu du mail
    const htmlContent = `
      <h2>📝 Nouvelle demande via le formulaire TimeToDrive</h2>
      <h3>👤 Informations personnelles</h3>
      <p><b>Nom :</b> ${data.first_name}</p>
      <p><b>Prénom :</b> ${data.last_name}</p>
      <p><b>Téléphone :</b> ${data.phone}</p>
      <p><b>Email :</b> ${data.email}</p>

      <h3>🚗 Détails du véhicule</h3>
      <p><b>Marque :</b> ${data.marque}</p>
      <p><b>Modèle :</b> ${data.modele}</p>
      <p><b>Finition :</b> ${data.finition}</p>
      <p><b>Boîte :</b> ${data.boite}</p>
      <p><b>Carburant :</b> ${data.carburant}</p>
      <p><b>Immatriculation :</b> ${data.immatriculation}</p>
      <p><b>Année :</b> ${data.annee}</p>
      <p><b>Kilométrage :</b> ${data.kilometrage}</p>
      <p><b>Prix espéré :</b> ${data.prix}</p>

      <p><b>Conditions acceptées :</b> ${data.agreeTerms ? "✅ Oui" : "❌ Non"}</p>
    `;

    // ✉️ Config du mail
    const mailOptions = {
      from: `"TimeToDrive" <timetodrive@romain-poulain.fr>`,
      to: "contact@time-to-drive.com",
      subject: `Nouvelle demande de rachat - ${data.first_name} ${data.last_name}`,
      html: htmlContent,
    };

    // 🚀 Envoi
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail :", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
