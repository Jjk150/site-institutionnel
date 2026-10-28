import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Documents | C.S. Shukrani" };
export default function DocumentsPage() {
 return <main id="contenu" className="wrap section"><section className="page-heading compact"><span className="eyebrow">RESSOURCES DE L’ÉCOLE</span><h1>Documents et démarches.</h1><p>Les documents administratifs seront disponibles ici après leur validation et leur publication par l’école.</p></section><div className="empty-state"><span className="eyebrow">PUBLICATION À VENIR</span><h2>Les fichiers officiels se préparent.</h2><p>Aucun document n’est actuellement proposé au téléchargement. Pour le règlement, les conditions d’admission ou les tarifs, renseignez-vous auprès du secrétariat.</p><Link href="/contact" className="button button-primary">Contacter le secrétariat →</Link></div><div className="three-grid section-action">{["Règlement intérieur","Informations d’inscription","Calendrier et communiqués"].map(title=><div className="plain-card" key={title}><h3>{title}</h3><p>À publier après validation par l’établissement.</p></div>)}</div></main>;
}
