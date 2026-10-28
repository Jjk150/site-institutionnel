import Link from "next/link";
import { notFound } from "next/navigation";
import Photo from "@/components/Photo";
import { news } from "@/data/news";
export default function NewsArticle({ slug }: { slug: string }) { const item = news.find(entry => entry.slug === slug); if (!item) notFound();
 return <main id="contenu" className="wrap section"><Link href="/actualites" className="text-link">← Actualités et découvertes</Link><article className="article-detail"><header className="page-heading compact"><span className="eyebrow">{item.category} · Découverte</span><h1>{item.title}</h1><p>{item.summary}</p></header><Photo id={item.photoId} className="rounded-photo"/><div className="article-body">{item.paragraphs.map(p=><p key={p}>{p}</p>)}<div className="actions"><Link href="/galerie" className="button button-primary">Voir la galerie →</Link><Link href="/contact" className="text-link">Contacter l’école</Link></div></div></article></main>;
}
