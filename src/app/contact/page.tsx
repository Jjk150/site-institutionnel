"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Appel à notre API d'envoi de mail / réponse automatique
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok || result.success !== true) {
        throw new Error(result.error || "Le message n’a pas pu être envoyé. Réessayez plus tard.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Connexion impossible. Vérifiez votre réseau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <span className="text-red-800 font-bold tracking-wider text-sm uppercase bg-red-50 px-3 py-1 rounded-md border border-red-100">
            Secrétariat & Admissions • Likasi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Contactez le Complexe Scolaire SHUKRANI
          </h1>
          <p className="text-slate-600 mt-2 max-w-2xl">
            Posez vos questions sur nos programmes, les inscriptions ou les tarifs. Notre équipe administrative vous répondra directement par email ou téléphone.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bloc Coordonnées de l'École */}
          <div className="space-y-6">
            <div className="bg-emerald-950 text-white p-8 rounded-3xl shadow-lg space-y-6 border border-emerald-900">
              <h2 className="text-xl font-bold border-b border-emerald-800/80 pb-4 flex items-center justify-between">
                <span>Coordonnées de l’école</span>
                <span className="text-xs font-normal text-emerald-400 bg-emerald-900 px-2 py-0.5 rounded">Likasi</span>
              </h2>

              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-emerald-800/60 rounded-xl text-emerald-200 mt-1 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-emerald-300 tracking-wider">Adresse Directe</h3>
                    <p className="text-sm font-medium mt-1 leading-relaxed">
                      Complexe Scolaire SHUKRANI<br />
                      Ville de Likasi, Province du Haut-Katanga<br />
                      République Démocratique du Congo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-emerald-800/60 rounded-xl text-emerald-200 mt-1 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-emerald-300 tracking-wider">Téléphone / WhatsApp</h3>
                    <p className="text-sm font-medium mt-1">Numéro à confirmer auprès du secrétariat</p>
                    <p className="text-xs text-emerald-400 mt-0.5">Ligne directe du secrétariat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-emerald-800/60 rounded-xl text-emerald-200 mt-1 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-emerald-300 tracking-wider">E-mail Administratif</h3>
                    <p className="text-sm font-medium mt-1">Adresse e-mail à confirmer</p>
                    <p className="text-xs text-emerald-400 mt-0.5">Renseignez-vous auprès du secrétariat</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-emerald-800/60 rounded-xl text-emerald-200 mt-1 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-emerald-300 tracking-wider">Heures de Réception</h3>
                    <p className="text-sm font-medium mt-1">Lun - Ven : 07h30 - 15h30</p>
                    <p className="text-xs text-emerald-300 mt-0.5">Samedi : 08h00 - 12h00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de Contact avec Réponse Automatique */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Envoyer un message au secrétariat
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Le formulaire sera disponible après activation de la réception des messages par le secrétariat.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-8 rounded-2xl space-y-4">
                <div className="flex items-center space-x-3 text-emerald-700">
                  <CheckCircle className="w-8 h-8 flex-shrink-0" />
                  <h3 className="text-lg font-bold">Message transmis au Complexe Scolaire SHUKRANI !</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Merci <strong>{formData.nom}</strong>. Votre demande concernant <em>« {formData.sujet} »</em> a bien été enregistrée. 
                  Le secrétariat pourra vous répondre à <strong>{formData.email}</strong>.
                </p>
                <div className="bg-white p-4 rounded-xl border border-emerald-200 text-xs text-slate-600 space-y-1">
                  <p className="font-semibold text-emerald-900">Que va-t-il se passer maintenant ?</p>
                  <p>1. Le secrétariat examine votre demande.</p>
                  <p>2. Vous recevrez une réponse personnalisée par email ou via le numéro d'urgence indiqué.</p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" }); }}
                  className="text-xs font-bold text-emerald-800 hover:underline pt-2 block"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">{error}</div>}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nom" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Mukendi"
                      id="nom"
                      name="nom"
                      maxLength={200}
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Adresse E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: jean.mukendi@gmail.com"
                      id="email"
                      name="email"
                      maxLength={254}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="telephone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Numéro Téléphone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: +243 990 000 000"
                      id="telephone"
                      name="telephone"
                      maxLength={200}
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Sujet de la demande *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Inscription Année 2026-2027"
                      id="sujet"
                      name="sujet"
                      maxLength={200}
                      value={formData.sujet}
                      onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Posez votre question ou detaillez votre demande d'admission ici..."
                    id="message"
                      name="message"
                      maxLength={5000}
                      value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900/20 focus:border-emerald-900 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md transition-all text-sm w-full sm:w-auto disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmission en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer au Secrétariat</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-emerald-950 text-slate-400 py-8 text-center text-xs border-t border-emerald-900 mt-12">
        <p>© 2026 Complexe Scolaire SHUKRANI • Likasi, RDC. Tous droits réservés.</p>
      </footer>
    </div>
  );
}