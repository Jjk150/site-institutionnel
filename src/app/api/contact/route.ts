import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nom, email, telephone, sujet, message } = await req.json();

    // Log côté serveur pour enregistrer les demandes d'inscription
    console.log("Nouveau message reçu pour C.S. SHUKRANI :", { nom, email, telephone, sujet, message });

    /* 
      Ici, tu peux connecter un service comme Resend, Nodemailer ou SendGrid.
      Exemple de réponse automatique envoyée à l'utilisateur :
      Subject: "Accusé de réception - Complexe Scolaire SHUKRANI"
      Body: "Bonjour " + nom + ", Nous avons bien reçu votre message concernant : " + sujet + "..."
    */

    return NextResponse.json({
      success: true,
      message: "Message enregistré et accusé de réception généré.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Erreur lors du traitement" },
      { status: 500 }
    );
  }
}