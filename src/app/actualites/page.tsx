import Navbar from "@/components/Navbar";
import { Calendar, ChevronRight } from "lucide-react";

export default function ActualitesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-12">
          <span className="text-emerald-800 font-bold text-sm uppercase bg-emerald-100 px-3 py-1 rounded-md">
            Journal Scolaire
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 mt-3">Actualités & Communiqués Officiels</h1>
          <p className="text-slate-600 mt-2">Restez informés de la vie scolaire et des événements au C.S. SHUKRANI.</p>
        </div>

        {/* Grille des actualités avec transitions fluides et effet hover */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Rentrée Solennelle 2026-2027", date: "15 Octobre 2026", cat: "Événement", desc: "Accueil des nouveaux élèves et réunion d'orientation avec les parents." },
            { title: "Résultats des Évaluations du 1er Trimestre", date: "02 Novembre 2026", cat: "Académique", desc: "Remise des bulletins d'notes au secrétariat de l'établissement." }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 space-y-3 group"
            >
              <div className="flex items-center space-x-2 text-xs text-slate-500">
                <Calendar className="w-4 h-4 text-emerald-700" />
                <span>{item.date}</span>
                <span>•</span>
                <span className="font-bold text-emerald-800">{item.cat}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-emerald-950 text-slate-400 py-6 text-center text-xs border-t border-emerald-900">
        © 2026 Complexe Scolaire SHUKRANI • Likasi, RDC. Tous droits réservés.
      </footer>
    </div>
  );
}