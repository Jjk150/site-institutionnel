import Link from "next/link";
import SchoolLogo from "@/components/SchoolLogo";
import { ArrowRight } from "lucide-react";
import VideoSection from "@/components/VideoSection";
import PeopleSection from "@/components/PeopleSection";
import Photo from "@/components/Photo";
import AdsterraBanner from "@/components/AdsterraBanner";
import { school } from "@/data/school";
import { news } from "@/data/news";
export default function Home() {
 return <main id="contenu">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Contenu Texte */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center space-x-2 bg-emerald-800/60 border border-emerald-700/50 rounded-full px-4 py-1.5 text-sm font-medium text-emerald-200 backdrop-blur-md">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Portail Officiel • Ville de Likasi</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Complexe Scolaire <span className="text-emerald-300">SHUKRANI</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed">
                  Notre devise : <strong className="text-red-300 font-semibold">TRAVAIL • DISCIPLINE • PROPRETÉ</strong>. De la maternelle au secondaire, nous accompagnons les apprenants dans leur parcours à Likasi.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/programmes"
                    className="inline-flex items-center justify-center space-x-3 bg-red-800 hover:bg-red-900 text-white font-semibold px-7 py-4 rounded-xl shadow-lg hover:shadow-red-900/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Découvrir nos programmes</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/contact?demande=inscription#inscription"
                    className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
                  >
                    <span>Demander une inscription</span>
                  </Link>
                </div>
              </div>

              {/* Blason Officiel avec effet de zoom subtil */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white/10 p-6 rounded-3xl border-2 border-emerald-500/30 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden group">
                  <SchoolLogo
                    alt="Blason CS Shukrani"
                    fill
                  sizes="(max-width: 640px) 256px, 320px"
                    className="object-contain p-4 drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
                    preload
                  />
                </div>
              </div>

            </div>
          </div>
        </section>


  <div className="wrap facts"><div><span>Depuis</span><strong>{school.founded}</strong></div><div><span>Un parcours complet</span><strong>Maternelle → Humanités</strong></div><div><span>Notre ancrage</span><strong>Likasi · Shituru</strong></div></div>
  <section className="section wrap split"><div className="photo-stack"><Photo id={3} className="rounded-photo"/><span className="photo-label">La vie de notre école</span></div><div><span className="eyebrow">BIENVENUE CHEZ NOUS</span><h2>Une école, des parcours,<br/>une communauté.</h2><p>Créé durant l’année scolaire 2019–2020, le Complexe Scolaire Shukrani organise les sections maternelle, primaire et secondaire, avec les 7e et 8e de l’éducation de base.</p><p>Sciences, pédagogie, commerce et formations techniques : chaque parcours a sa place dans notre établissement.</p><Link href="/a-propos" className="text-link">Découvrir notre école →</Link></div></section>
  <section className="section soft-section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">LES ÉTAPES POUR GRANDIR</span><h2>Un parcours à chaque âge.</h2></div><Link className="text-link" href="/programmes">Tous les cycles et options →</Link></div><div className="cycle-grid">{[{id:"maternelle",n:"01",title:"Maternelle",desc:"Éveil, expression et premiers apprentissages."},{id:"primaire",n:"02",title:"Primaire",desc:"Développer les bases de la lecture, de l’écriture et du calcul."},{id:"education-base",n:"03",title:"Éducation de base",desc:"7e et 8e EB : poursuivre les apprentissages de base."},{id:"humanites",n:"04",title:"Secondaire",desc:"De la 1re à la 4e des humanités, huit options pour s’orienter."}].map(c=><Link key={c.id} href={`/programmes#${c.id}`} className="cycle-card"><span>{c.n}</span><h3>{c.title}</h3><p>{c.desc}</p><b>Explorer <span aria-hidden="true">↗</span></b></Link>)}</div></div></section>
  <section className="section wrap"><div className="section-heading"><div><span className="eyebrow">L’ÉCOLE EN IMAGES</span><h2>Des lieux. Des apprentissages.<br/>Des moments partagés.</h2></div><Link href="/galerie" className="text-link">Ouvrir la galerie →</Link></div><div className="feature-grid"><Link href="/galerie?categorie=Informatique" className="feature-photo"><Photo id={44}/><span>La salle informatique ↗</span></Link><Link href="/galerie?categorie=Ateliers" className="feature-photo"><Photo id={36}/><span>Les activités à l’atelier ↗</span></Link><Link href="/galerie?categorie=Établissement" className="feature-photo"><Photo id={51}/><span>Le cadre scolaire ↗</span></Link></div></section>
  <section className="section soft-section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">À DÉCOUVRIR</span><h2>Une fenêtre sur Shukrani.</h2></div><Link href="/actualites" className="text-link">Toutes les découvertes →</Link></div><div className="article-grid">{news.map(item=><article key={item.slug} className="article-card"><Link href={`/actualites/${item.slug}`}><Photo id={item.photoId}/></Link><div><span className="eyebrow">{item.category}</span><h3><Link href={`/actualites/${item.slug}`}>{item.title}</Link></h3><p>{item.summary}</p><Link href={`/actualites/${item.slug}`} className="text-link">Lire l’article →</Link></div></article>)}</div></div></section>
  <section className="wrap section"><div className="admission-panel"><div><span className="eyebrow light">FAISONS CONNAISSANCE</span><h2>Préparer la prochaine étape.</h2><p>Cycles, options, documents ou visite : le secrétariat vous renseigne sur les démarches auprès de l’école.</p></div><div className="actions"><Link href="/contact?demande=inscription#inscription" className="button button-white">Contact et inscriptions →</Link><Link href="/documents" className="text-link light">Consulter les documents</Link></div></div></section>
  <VideoSection />
  <PeopleSection />
  <AdsterraBanner />
 </main>;
}
