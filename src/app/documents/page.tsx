"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { FileText, Download, Search, Filter, Calendar } from "lucide-react";

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Administratif", "Académique", "Formulaires", "Communiqués"];

  const documents = [
    {
      id: 1,
      title: "Règlement Intérieur & Charte de l'Usager 2026-2027",
      category: "Administratif",
      date: "10 Octobre 2026",
      size: "2.4 MB",
      description: "Document officiel fixant les règles de fonctionnement, droits et devoirs au sein de l'institution.",
    },
    {
      id: 2,
      title: "Calendrier Académique Officiel 2026-2027",
      category: "Académique",
      date: "15 Septembre 2026",
      size: "1.2 MB",
      description: "Planning annuel des activités, périodes d'évaluations et congés officiels.",
    },
    {
      id: 3,
      title: "Formulaire d'Inscription & Fiche de Renseignements",
      category: "Formulaires",
      date: "01 Août 2026",
      size: "850 KB",
      description: "Formulaire officiel à remplir pour toute nouvelle demande d'admission ou de réinscription.",
    },
    {
      id: 4,
      title: "Communiqué Officiel concernant les Modalités d'Admission",
      category: "Communiqués",
      date: "20 Juillet 2026",
      size: "500 KB",
      description: "Directives et conditions requises pour le dépôt des dossiers de candidature.",
    },
    {
      id: 5,
      title: "Guide de la Recherche & Normes de Rédaction",
      category: "Académique",
      date: "05 Mai 2026",
      size: "3.1 MB",
      description: "Directives méthodologiques pour la présentation des travaux et rapports.",
    },
  ];

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header de la page */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-emerald-800 font-bold tracking-wider text-sm uppercase bg-emerald-50 px-3 py-1 rounded-md border border-emerald-100">
            Ressources Officielles • C.S. SHUKRANI
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Centre de Téléchargement & Documents
          </h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Retrouvez et téléchargez en libre accès l'ensemble des documents administratifs, formulaires et règlements officiels.
          </p>
        </div>

        {/* Barre de Recherche et Filtres */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Recherche */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher un document..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all"
            />
          </div>

          {/* Filtres par Catégorie */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
            <Filter className="w-4 h-4 text-slate-400 mr-1 hidden sm:inline-block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-800 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des Documents */}
        <div className="space-y-4">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-50 text-emerald-900 rounded-xl flex-shrink-0 mt-1">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 text-xs text-slate-500 mb-1">
                      <span className="bg-emerald-50 font-semibold px-2.5 py-0.5 rounded text-emerald-800 border border-emerald-100">
                        {doc.category}
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{doc.date}</span>
                      </span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{doc.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{doc.description}</p>
                  </div>
                </div>

                <div className="flex-shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Téléchargement simulation: ${doc.title}`);
                    }}
                    className="inline-flex items-center justify-center space-x-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all text-sm w-full md:w-auto"
                  >
                    <Download className="w-4 h-4" />
                    <span>Télécharger</span>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-500">
              Aucun document ne correspond à votre recherche.
            </div>
          )}
        </div>
      </main>

      {/* Footer Institutionnel */}
      <footer className="bg-emerald-950 text-slate-400 py-8 text-center text-xs border-t border-emerald-900 mt-12">
        <p>© 2026 Complexe Scolaire SHUKRANI • Likasi, RDC. Tous droits réservés.</p>
      </footer>
    </div>
  );
}