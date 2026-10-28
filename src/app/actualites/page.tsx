import Link from "next/link";
import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { news } from "@/data/news";
export const metadata: Metadata = { title: "Actualités et découvertes | C.S. Shukrani" };
export default function ActualitesPage() {return <main id="contenu" className="wrap section"><section className="page-heading compact"><span className="eyebrow">LA VIE DE SHUKRANI</span><h1>Actualités et découvertes.</h1><p>Découvrez les lieux et les activités de l’école. Les communiqués datés seront ajoutés après validation par l’établissement.</p></section><div className="article-grid">{news.map(item=><article className="article-card" key={item.slug}><Link href={`/actualites/${item.slug}`}><Photo id={item.photoId}/></Link><div><span className="eyebrow">{item.category} · Découverte</span><h2><Link href={`/actualites/${item.slug}`}>{item.title}</Link></h2><p>{item.summary}</p><Link href={`/actualites/${item.slug}`} className="text-link">Lire l’article →</Link></div></article>)}</div></main>;}
