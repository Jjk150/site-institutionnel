"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header de la page */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase bg-blue-50 px-3 py-1 rounded-md">
            Prise de contact
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Contactez notre Institution
          </h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Notre équipe est à votre disposition pour répondre à toutes vos interrogations et vous accompagner dans vos démarches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bloc Coordonnées & Horaires */}
          <div className="space-y-6">
            <div className="bg-blue-950 text-white p-8 rounded-2xl shadow-md space-y-6">
              <h2 className="text-xl font-bold border-b border-blue-800 pb-4">
                Informations Officielle
              </h2>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-blue-800/60 rounded-lg text-blue-200 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-blue-300">Adresse Physique</h3>
                    <p className="text-sm font-medium mt-1">
                      Avenue Principale, Quarier Administratif<br />
                      Rép. Démocratique du Congo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-blue-800/60 rounded-lg text-blue-200 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-blue-300">Téléphone</h3>
                    <p className="text-sm font-medium mt-1">+243 000 000 000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-blue-800/60 rounded-lg text-blue-200 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-blue-300">E-mail Officiel</h3>
                    <p className="text-sm font-medium mt-1">contact@institution.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-blue-800/60 rounded-lg text-blue-200 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-semibold text-blue-300">Heures d'ouverture</h3>
                    <p className="text-sm font-medium mt-1">Lundi - Vendredi : 08h00 - 16h00</p>
                    <p className="text-xs text-blue-300 mt-0.5">Samedi : 08h00 - 12h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Envoyer un message
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl flex items-center space-x-4">
                <CheckCircle className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-emerald-900">Message envoyé avec succès !</h3>
                  <p className="text-sm mt-1">
                    Merci d'avoir contacté notre institution. Notre service administratif vous répondra dans les plus brefs délais.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Mukendi"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Adresse E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: jean.mukendi@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Sujet de la demande *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Demande de renseignements pour inscription"
                    value={formData.sujet}
                    onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Rédigez votre message ici..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}