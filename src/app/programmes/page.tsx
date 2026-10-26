import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BookOpen, GraduationCap, Award, ArrowRight } from "lucide-react";

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-emerald-800 font-bold text-sm uppercase bg-emerald-100 px-3 py-1 rounded-md">
            Offre Pédagogique
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900">Programmes & Sections d'Enseignement</h1>
          <p className="text-slate-600">Un cursus complet conforme au programme national de la RDC avec un niveau d'exigence élevé.</p>
        </div>

        {/* Grille des programmes avec transitions fluides et hover */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Maternelle", desc: "Éveil intellectuel, motricité et socialisation dans un environnement chaleureux." },
            { title: "Primaire", desc: "Acquisition solide de la lecture, du calcul, des sciences et des valeurs morales civiques." },
            { title: "Humanités (Secondaire)", desc: "Sections Scientifiques et Techniques préparant aux études supérieures et universitaires." }
          ].map((prog, i) => (
            <div 
              key={i} 
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 space-y-4 group"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                0{i+1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {prog.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{prog.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center space-x-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-6 py-3.5 rounded-xl shadow transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Demander une admission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <footer className="bg-emerald-950 text-slate-400 py-6 text-center text-xs border-t border-emerald-900">
        © 2026 Complexe Scolaire SHUKRANI • Likasi
      </footer>
    </div>
  );
}