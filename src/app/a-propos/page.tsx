import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { CheckCircle2, Award, Users, BookOpen, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* En-tête de la page */}
        <section className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <span className="bg-red-800 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
              Province du Haut-Katanga • Likasi
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              À propos du Complexe Scolaire <span className="text-emerald-300">SHUKRANI</span>
            </h1>
            <p className="text-emerald-100 max-w-2xl mx-auto text-base sm:text-lg">
              Découvrez notre histoire, notre vision pédagogique et notre engagement indéfectible pour l'excellence académique.
            </p>
          </div>
        </section>

        {/* Corps de la page : Histoire & Valeurs */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Colonne visuelle / Blason avec zoom fluide sécurisé */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-white p-6 rounded-3xl border-2 border-emerald-200 shadow-xl flex items-center justify-center overflow-hidden group">
                <Image
                  src="/Logo.png"
                  alt="Blason C.S. SHUKRANI"
                  fill
                  className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Colonne Texte */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-red-800 font-bold tracking-wider text-sm uppercase bg-red-50 px-3 py-1 rounded-md">
                Notre Identité
              </span>
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                Une institution ancrée dans les valeurs d'excellence
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Situé au cœur de la ville de Likasi, le <strong>Complexe Scolaire SHUKRANI</strong> s'est imposé au fil des années comme une référence incontournable en matière d'éducation de qualité. Notre devise, <strong className="text-red-800">« Travail - Propreté - Discipline »</strong>, guide chacun de nos pas dans l'encadrement quotidien de la jeunesse.
              </p>
              <p className="text-slate-600 leading-relaxed">
                De la maternelle aux humanités, nous mettons un point d'honneur à offrir un environnement propice à l'épanouissement intellectuel, moral et civique de nos élèves, préparant ainsi les cadres et leaders de demain pour la province du Haut-Katanga et toute la République Démocratique du Congo.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="text-emerald-800 font-bold text-lg mb-1">Encadrement Rigoureux</div>
                  <p className="text-xs text-slate-500">Un corps professoral qualifié et dévoué à la réussite de chaque élève.</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                  <div className="text-emerald-800 font-bold text-lg mb-1">Infrastructures Adaptées</div>
                  <p className="text-xs text-slate-500">Des salles de classe modernes et un cadre propice à l'étude.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section Pôles d'enseignement */}
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Nos Cycles d'Enseignement</h2>
              <p className="text-slate-600 text-sm">Un parcours complet de la petite enfance jusqu'aux humanités.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Cycle Maternel", desc: "Éveil, socialisation et premiers apprentissages dans un cadre sécurisant et ludique." },
                { title: "Cycle Primaire", desc: "Maîtrise des fondamentaux (lecture, écriture, calcul) et construction de la citoyenneté." },
                { title: "Cycle Secondaire (Humanités)", desc: "Formations scientifiques et littéraires rigoureuses ouvrant la voie aux études supérieures." }
              ].map((cycle, i) => (
                <div 
                  key={i} 
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mb-4 transition-transform duration-300 group-hover:scale-110">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">{cycle.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cycle.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appel à l'action vers l'étape suivante */}
        <section className="py-16 bg-slate-50 text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Consultez nos documents officiels</h2>
            <p className="text-slate-600 text-sm">
              Prenez connaissance du règlement intérieur, du calendrier académique et des formulaires d'admission.
            </p>
            <Link
              href="/documents"
              className="inline-flex items-center space-x-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-6 py-3.5 rounded-xl shadow transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Accéder aux documents</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer minimaliste ou complet */}
      <footer className="bg-emerald-950 text-slate-400 py-8 text-center text-xs border-t border-emerald-900">
        <p>© 2026 Complexe Scolaire SHUKRANI • Likasi, RDC. Tous droits réservés.</p>
      </footer>
    </div>
  );
}