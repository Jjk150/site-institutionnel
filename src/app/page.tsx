import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { 
  ArrowRight, 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  Download, 
  ChevronRight,
  PlayCircle,
  Image as ImageIcon
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
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
                  Notre devise : <strong className="text-red-300 font-semibold">TRAVAIL • PROPRETÉ • DISCIPLINE</strong>. Nous formons l'élite de demain dans un cadre académique rigoureux, innovant et motivant.
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
                    href="/contact"
                    className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5"
                  >
                    <span>Nous contacter</span>
                  </Link>
                </div>
              </div>

              {/* Blason Officiel avec effet de zoom subtil */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white/10 p-6 rounded-3xl border-2 border-emerald-500/30 backdrop-blur-md shadow-2xl flex items-center justify-center overflow-hidden group">
                  <Image
                    src="/Logo.png"
                    alt="Blason CS Shukrani"
                    fill
                    className="object-contain p-4 drop-shadow-xl transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
            {[
              { icon: Users, count: "1,500+", label: "Élèves & Encadreurs" },
              { icon: GraduationCap, count: "98%", label: "Taux de Réussite" },
              { icon: BookOpen, count: "Sections", label: "Maternelle, Primaire, Secondaire" },
              { icon: Award, count: "Excellence", label: "Discipline & Qualité" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center space-x-4 p-2 transition-transform duration-300 hover:scale-102">
                <div className="p-3.5 bg-emerald-50 text-emerald-800 rounded-xl flex-shrink-0">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">{stat.count}</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PRÉSENTATION & VALEURS */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-red-800 font-bold tracking-wider text-sm uppercase bg-red-50 px-3 py-1 rounded-md">
                Présentation Institutionnelle
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Un cadre d'apprentissage moderne à Likasi
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Le Complexe Scolaire SHUKRANI s'engage à offrir un enseignement de qualité supérieure dans la province du Haut-Katanga. Notre pédagogie repose sur la rigueur, l'épanouissement de l'élève et la maîtrise des compétences d'avenir.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Enseignement et encadrement pédagogique de premier ordre",
                  "Maternelle, Primaire et Humanités scientifiques & techniques",
                  "Discipline rigoureuse et valeurs morales fortes",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center space-x-2 text-emerald-900 font-semibold hover:text-emerald-700 transition-colors"
                >
                  <span>En savoir plus sur notre histoire</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-tr from-emerald-900 to-emerald-800 rounded-3xl p-8 border border-emerald-700 shadow-xl text-white relative min-h-[380px] flex flex-col justify-between overflow-hidden">
              <div className="relative w-16 h-16">
                <Image src="/Logo.png" alt="Logo Shukrani" fill className="object-contain brightness-200 opacity-90" />
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 mt-6 transition-transform duration-500 hover:scale-[1.02]">
                <p className="text-emerald-100 italic text-sm mb-4">
                  « Notre engagement absolu est de fournir aux jeunes générations les compétences académiques et les valeurs morales indispensables pour bâtir un avenir radieux. »
                </p>
                <div className="font-bold text-white">La Direction Générale</div>
                <div className="text-xs text-emerald-300 font-medium">C.S. SHUKRANI • Likasi</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION GALERIE PHOTOS & VIDÉOS AVEC TRANSITIONS FLUIDES */}
        <section className="py-20 bg-slate-100 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-emerald-800 font-bold tracking-wider text-sm uppercase bg-emerald-100 px-3 py-1 rounded-md">
                Espace Multimédia
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">La Vie Scolaire en Photos & Vidéos</h2>
              <p className="text-slate-600">Découvrez l'ambiance, nos infrastructures et les événements marquants du complexe.</p>
            </div>

            {/* Photos Grid avec effet hover sur les cartes et images */}
            <div className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                  <ImageIcon className="w-5 h-5 text-emerald-700" />
                  <span>Galerie Photos</span>
                </h3>
                <Link href="/galerie" className="text-sm font-semibold text-emerald-800 hover:underline flex items-center space-x-1">
                  <span>Voir toute la galerie</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Bâtiment Principal & Salles de Classe", desc: "Nos salles de cours spacieuses et équipées." },
                  { title: "Activités & Cérémonies Scolaires", desc: "Moments forts de rassemblement et festivités." },
                  { title: "Laboratoires & Travaux Pratiques", desc: "Espaces dédiés à l'apprentissage scientifique." },
                ].map((photo, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                    <div className="h-52 bg-slate-200 relative overflow-hidden flex items-center justify-center text-slate-400 group-hover:bg-slate-300 transition-colors">
                      {/* Conteneur image sécurisé avec zoom fluide au survol */}
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 transition-transform duration-500 group-hover:scale-105">
                        Photo {idx + 1} • Infrastructure
                      </span>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">{photo.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{photo.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Espace Vidéo */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                <PlayCircle className="w-5 h-5 text-red-700" />
                <span>Présentation Vidéo</span>
              </h3>
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-slate-800 transition-all duration-300 hover:shadow-emerald-900/20">
                <div className="aspect-video w-full max-h-[450px] bg-slate-800/80 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">
                  <PlayCircle className="w-16 h-16 text-emerald-400 mb-4 animate-bounce transition-transform duration-300 group-hover:scale-110" />
                  <h4 className="text-lg font-bold">Vidéo Institutionnelle du C.S. SHUKRANI</h4>
                  <p className="text-xs text-slate-400 max-w-md mt-2">
                    L'intégration des reportages, présentations et cérémonies d'ouverture s'affichera directement ici.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* DOCUMENTS ET RESSOURCES */}
        <section className="py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Documents Officiels & Communiqués</h2>
                <p className="text-slate-600 mt-2">Téléchargez directement les guides, règlements et formulaires administratifs.</p>
              </div>
              <Link
                href="/documents"
                className="mt-4 md:mt-0 text-sm font-semibold text-emerald-900 hover:underline flex items-center space-x-1"
              >
                <span>Voir tous les documents</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Règlement Intérieur 2026-2027", cat: "Administratif", date: "Octobre 2026", size: "1.8 MB" },
                { title: "Calendrier Académique Officiel", cat: "Planning", date: "Septembre 2026", size: "1.2 MB" },
                { title: "Fiche d'Inscription & Admission", cat: "Formulaire", date: "Août 2026", size: "900 KB" },
              ].map((doc, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="bg-emerald-100 text-emerald-800 font-semibold px-2.5 py-1 rounded">{doc.cat}</span>
                      <span>{doc.date}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-start space-x-2">
                      <FileText className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
                      <span>{doc.title}</span>
                    </h3>
                  </div>
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 mt-4">
                    <span>PDF • {doc.size}</span>
                    <button className="inline-flex items-center space-x-1 font-semibold text-emerald-800 hover:text-emerald-700 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Télécharger</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACTUALITÉS RÉCENTES */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-emerald-800 font-bold tracking-wider text-sm uppercase bg-emerald-50 px-3 py-1 rounded-md">
                Actualités
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-3">Dernières Nouvelles & Événements</h2>
            </div>
            <Link
              href="/actualites"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-emerald-800 font-semibold hover:underline"
            >
              <span>Toutes les actualités</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rentrée des classes pour l'année 2026-2027",
                desc: "Accueil chaleureux des élèves et présentation des nouvelles directives pour la nouvelle année.",
                date: "15 Octobre 2026",
                tag: "Événement",
              },
              {
                title: "Remise des prix d'excellence académique",
                desc: "Célébration des meilleurs élèves s'étant distingués par leur travail et leur discipline.",
                date: "02 Octobre 2026",
                tag: "Distinction",
              },
              {
                title: "Renforcement des équipements pédagogiques",
                desc: "Arrivée de nouveaux matériels pour soutenir l'apprentissage pratique de nos apprenants.",
                date: "20 Septembre 2026",
                tag: "Infrastructure",
              },
            ].map((news, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group">
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{news.date}</span>
                    <span>•</span>
                    <span className="font-semibold text-emerald-800">{news.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors cursor-pointer">
                    {news.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{news.desc}</p>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link href="/actualites" className="text-xs font-bold text-emerald-800 hover:underline flex items-center space-x-1">
                    <span>Lire la suite</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER INSTITUTIONNEL */}
      <footer className="bg-emerald-950 text-slate-300 border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <div className="relative w-10 h-10">
                  <Image src="/Logo.png" alt="Logo Shukrani" fill className="object-contain" />
                </div>
                <span className="text-lg font-bold tracking-tight">C.S. SHUKRANI</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Complexe Scolaire de référence situé à Likasi. Devise : <strong className="text-white">Travail - Propreté - Discipline</strong>.
              </p>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Accès Rapides</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link href="/programmes" className="hover:text-white transition-colors">Programmes & Sections</Link></li>
                <li><Link href="/documents" className="hover:text-white transition-colors">Documents Officiels</Link></li>
                <li><Link href="/actualites" className="hover:text-white transition-colors">Actualités</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Informations</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/galerie" className="hover:text-white transition-colors">Galerie Photos & Vidéos</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Inscriptions & Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Contact Officiel</h4>
              <address className="not-italic space-y-2 text-sm text-slate-400">
                <p>Likasi, Province du Haut-Katanga</p>
                <p>République Démocratique du Congo</p>
                <p className="text-white font-medium pt-1">Complexe Scolaire SHUKRANI</p>
              </address>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-emerald-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
            <p>© 2026 Complexe Scolaire SHUKRANI. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link>
              <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}