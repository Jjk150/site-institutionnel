"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import SchoolLogo from "./SchoolLogo";
const links = [ ["Accueil", "/"], ["À propos", "/a-propos"], ["Cycles & options", "/programmes"], ["Actualités", "/actualites"], ["Documents", "/documents"], ["Galerie", "/galerie"], ["Contact", "/contact"] ];
export default function Navbar() {
 const [open, setOpen] = useState(false); const pathname = usePathname();
 const current = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);
 return <header className="site-header"><div className="wrap header-inner"><Link href="/" className="brand" aria-label="Shukrani, accueil"><SchoolLogo width={46} height={46} preload /><span><strong>C.S. SHUKRANI</strong><small>Likasi · Haut-Katanga</small></span></Link>
 <nav className="desktop-nav" aria-label="Navigation principale">{links.map(([label,href])=><Link key={href} href={href} aria-current={current(href)?"page":undefined}>{label}</Link>)}</nav>
 <Link className="button button-primary header-cta" href="/contact?demande=inscription#inscription">Inscription <span aria-hidden="true">↗</span></Link>
 <button className="menu-toggle" type="button" aria-label={open?"Fermer le menu":"Ouvrir le menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
 {open && <nav id="mobile-navigation" className="mobile-nav wrap" aria-label="Navigation mobile">{links.map(([label,href])=><Link key={href} href={href} aria-current={current(href)?"page":undefined} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="button button-primary" href="/contact?demande=inscription#inscription" onClick={()=>setOpen(false)}>Demander une inscription</Link></nav>}
 </header>;
}
