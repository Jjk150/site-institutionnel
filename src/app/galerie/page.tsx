import Navbar from "@/components/Navbar";


export default function GaleriePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-emerald-800 font-bold text-sm uppercase bg-emerald-100 px-3 py-1 rounded-md">
            Médiathèque
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900">Galerie Photos & Vidéos</h1>
          <p className="text-slate-600">Explorez les locaux, les événements et les moments forts de notre communauté.</p>
        </div>

        {/* Grille de la galerie avec transitions fluides et zoom sécurisé */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div 
              key={img} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div className="h-48 bg-emerald-100/60 relative overflow-hidden flex items-center justify-center text-emerald-900 font-semibold text-xs uppercase tracking-wider">
                {/* Effet de zoom fluide sur le contenu/image au survol sans casser le cadre */}
                <span className="transition-transform duration-500 ease-out group-hover:scale-105">
                  Photo à publier
                </span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                  Emplacement photo {img}
                </h4>
                <p className="text-xs text-slate-500 mt-1">Complexe Scolaire SHUKRANI • Likasi</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-emerald-950 text-slate-400 py-6 text-center text-xs border-t border-emerald-900">
        © 2026 Complexe Scolaire SHUKRANI • Likasi
      </footer>
    </div>
  );
}