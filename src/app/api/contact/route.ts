import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Requête JSON invalide." }, { status: 400 });
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return NextResponse.json({ success: false, error: "Formulaire invalide." }, { status: 400 });
  }
  const fields = data as Record<string, unknown>;
  const limits = { nom: 200, email: 254, telephone: 200, sujet: 200, message: 5000 };
  for (const [key, limit] of Object.entries(limits)) {
    const value = fields[key];
    if ((key !== "telephone" && (typeof value !== "string" || !value.trim())) ||
        (value !== undefined && (typeof value !== "string" || value.length > limit))) {
      return NextResponse.json({ success: false, error: "Vérifiez les champs du formulaire." }, { status: 400 });
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(fields.email).trim())) {
    return NextResponse.json({ success: false, error: "Adresse e-mail invalide." }, { status: 400 });
  }
  // Aucun fournisseur de messagerie ni stockage n'est configuré dans le projet fourni.
  // Ne jamais confirmer une réception avant la réussite d'une transmission réelle.
  return NextResponse.json({ success: false, error: "L’envoi en ligne n’est pas encore activé. Veuillez contacter directement le secrétariat de l’école." }, { status: 503 });
}
