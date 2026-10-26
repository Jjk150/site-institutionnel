import Link from "next/link";
import Navbar from "@/components/Navbar";
import { 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  Download, 
  ChevronRight 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-800/60 border border-blue-700/50 rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Portail Officiel du Complexe Scolaire SHUKRANI</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Bâtir l'avenir par l'Excellence et le Savoir
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed">
                Notre institution s'engage à former les leaders de demain et à fournir un cadre académique et professionnel rigoureux, innovant et ouvert sur le monde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  <span>Découvrir nos programmes</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl border border-white/20 transition-all backdrop-blur-sm"
                >
                  <span>Nous contacter</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CHIFFRES CLÉS */}
        <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-100">
            {[
              { icon: Users, count: "5,000+", label: "Étudiants & Membres" },
              { icon: GraduationCap, count: "98%", label: "Taux de Réussite" },
              { icon: BookOpen, count: "25+", label: "Programmes & Pôles" },
              { icon: Award, count: "15+", label: "Années d'Excellence" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center space-x-4 p-2">
                <div className="p-3.5 bg-blue-50 text-blue-900 rounded-xl">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.count}</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MOT DU DIRIGEANT / PRÉSENTATION */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase bg-blue-50 px-3 py-1 rounded-md">
                Présentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Complexe Scolaire SHUKRANI
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Fondée avec la mission d'offrir une formation et des services de haute qualité, notre institution s'impose aujourd'hui comme un acteur majeur de développement régional et international.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Enseignement et encadrement de qualité supérieure",
                  "Infrastructures modernes et équipements de pointe",
                  "Partenariats stratégiques et ouverture internationale",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  href="/a-propos"
                  className="inline-flex items-center space-x-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
                >
                  <span>En savoir plus sur notre histoire</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-tr from-slate-200 to-blue-100 rounded-3xl p-8 border border-slate-200/60 shadow-lg relative min-h-[380px] flex flex-col justify-end">
              <div className="bg-white/95 backdrop-blur p-6 rounded-2xl shadow-md border border-slate-100">
                <p className="text-slate-700 italic text-sm mb-4">
                  « Notre engagement absolu est de fournir aux générations futures les compétences et valeurs nécessaires pour faire face aux défis mondiaux. »
                </p>
                <div className="font-bold text-slate-900">M. le Directeur Général</div>
                <div className="text-xs text-slate-500 font-medium">Direction Générale</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION DOCUMENTS ET RESSOURCES RAPIDES */}
        <section className="py-16 bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Documents Officiels & Communiqués</h2>
                <p className="text-slate-600 mt-2">Téléchargez directement les guides, règlements et formulaires administratifs.</p>
              </div>
              <Link
                href="/documents"
                className="mt-4 md:mt-0 text-sm font-semibold text-blue-900 hover:underline flex items-center space-x-1"
              >
                <span>Voir tous les documents</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Guide de l'usager & Règlement 2026", cat: "Administratif", date: "Octobre 2026", size: "2.4 MB" },
                { title: "Calendrier Officiel des Activités", cat: "Planning", date: "Septembre 2026", size: "1.1 MB" },
                { title: "Formulaire d'Inscription & Admission", cat: "Formulaire", date: "Août 2026", size: "850 KB" },
              ].map((doc, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="bg-blue-50 text-blue-800 font-semibold px-2.5 py-1 rounded">{doc.cat}</span>
                      <span>{doc.date}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2 flex items-start space-x-2">
                      <FileText className="w-5 h-5 text-blue-900 flex-shrink-0 mt-0.5" />
                      <span>{doc.title}</span>
                    </h3>
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-4">
                    <span>PDF • {doc.size}</span>
                    <button className="inline-flex items-center space-x-1 font-semibold text-blue-900 hover:text-blue-700">
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
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase bg-blue-50 px-3 py-1 rounded-md">
                Actualités
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-3">Dernières Nouvelles & Événements</h2>
            </div>
            <Link
              href="/actualites"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-blue-900 font-semibold hover:underline"
            >
              <span>Toutes les actualités</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lancement de la rentrée solennelle 2026-2027",
                desc: "Découvrez les grandes orientations et les nouveautés prévues pour cette nouvelle année académique.",
                date: "15 Octobre 2026",
                tag: "Événement",
              },
              {
                title: "Signature d'un partenariat académique international",
                desc: "Un accord stratégique favorisant les échanges, les recherches conjointes et la mobilité.",
                date: "02 Octobre 2026",
                tag: "Partenariat",
              },
              {
                title: "Inauguration du nouveau complexe technologique",
                desc: "Mise en service d'infrastructures modernes destinées aux travaux pratiques et à la recherche.",
                date: "20 Septembre 2026",
                tag: "Infrastructure",
              },
            ].map((news, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-slate-500 mb-3">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>{news.date}</span>
                    <span>•</span>
                    <span className="font-semibold text-blue-900">{news.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 hover:text-blue-900 transition-colors cursor-pointer">
                    {news.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{news.desc}</p>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link href="/actualites" className="text-xs font-bold text-blue-900 hover:underline flex items-center space-x-1">
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
      <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <Building2 className="h-6 w-6" />
                </div>
                <span className="text-lg font-bold tracking-tight">INSTITUTION</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Institution de référence dédiée à la qualité de l'enseignement, au développement des compétences et au service de la société.
              </p>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Accès Rapides</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link href="/programmes" className="hover:text-white transition-colors">Programmes & Services</Link></li>
                <li><Link href="/documents" className="hover:text-white transition-colors">Documents Officiels</Link></li>
                <li><Link href="/actualites" className="hover:text-white transition-colors">Actualités & Communiqués</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Informations</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/galerie" className="hover:text-white transition-colors">Galerie Photos</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">Foire Aux Questions</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact & Localisation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Contact Officiel</h4>
              <address className="not-italic space-y-2 text-sm text-slate-400">
                <p>Adresse officielle, Ville, Pays</p>
                <p>Tél: +243 000 000 000</p>
                <p>Email: contact@institution.org</p>
              </address>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
            <p>© 2026 Institution. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="hover:text-slate-400">Mentions Légales</Link>
              <Link href="#" className="hover:text-slate-400">Confidentialité</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}