import Link from "next/link";
import SchoolLogo from "./SchoolLogo";
import { school } from "@/data/school";
export default function SiteFooter() {
 return <footer className="site-footer"><div className="wrap footer-grid">
  <div><div className="brand"><SchoolLogo width={52} height={52} alt="Logo Shukrani" /><strong>{school.name}</strong></div><p>De la maternelle aux humanités, un parcours d’apprentissage à Likasi.</p><p className="footer-motto">{school.motto}</p></div>
  <div><h2>Explorer</h2><Link href="/a-propos">Notre école</Link><Link href="/programmes">Cycles et options</Link><Link href="/galerie">Galerie photos</Link><Link href="/actualites">Actualités et découvertes</Link></div>
  <div><h2>Préparer votre visite</h2><p>{school.address}</p><Link href="/contact">Contact et inscriptions →</Link><Link href="/documents">Documents</Link></div>
 </div><div className="wrap footer-bottom"><span>© 2026 Complexe Scolaire Shukrani · Likasi, RDC</span><Link href="/#equipe">Conception : JJK_SERVICE</Link><Link href="/confidentialite">Confidentialité</Link></div></footer>;
}
