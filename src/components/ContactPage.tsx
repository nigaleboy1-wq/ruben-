/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Check, Copy, Sparkles, Send, Clock, Calendar, ShieldCheck, Mail, Phone, MapPin, Zap } from "lucide-react";

export default function ContactPage() {
  // Form modes: "brief" (Natural Interactive Form) vs "classic" (Standard elegant form)
  const [formMode, setFormMode] = useState<"brief" | "classic">("brief");

  // Brief Builder State
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [siteType, setSiteType] = useState("un Site E-Commerce");
  const [budget, setBudget] = useState("5k€ - 15k€");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Budget Inclusion text dynamic calculation
  const [budgetInclusions, setBudgetInclusions] = useState<string[]>([]);

  useEffect(() => {
    switch (budget) {
      case "< 5k€":
        setBudgetInclusions([
          "Design d'auteur exclusif, zéro template",
          "Structure sémantique SEO local d'autorité",
          "Optimisation Lighthouse > 95% mobile",
          "Intégration d'outils d'analyses RGPD"
        ]);
        break;
      case "5k€ - 15k€":
        setBudgetInclusions([
          "Tous les livrables de l'offre initiale",
          "Parcours d'achat ou e-commerce complexe",
          "Animations interactives avancées (Motion)",
          "Système d'administration WordPress FSE",
          "Intégration APIs tierces & Stripe sécurisé"
        ]);
        break;
      case "15k€ - 30k€":
        setBudgetInclusions([
          "Architecture Headless (Next.js / GraphQL)",
          "Performance d'élite (temps de réponse < 300ms)",
          "Stratégie SEO sémantique internationale",
          "Atelier d'idéation & prototypage Figma complet",
          "Support prioritaire & optimisation continue"
        ]);
        break;
      case "30k€+":
        setBudgetInclusions([
          "Solutions de classe entreprise personnalisées",
          "Base de données sur mesure, Cloud SQL ou Firestore",
          "Architecture de sécurité renforcée",
          "Direction artistique de niveau international",
          "Accompagnement VIP & stratégie marketing"
        ]);
        break;
      default:
        setBudgetInclusions([
          "Tous les livrables de l'offre initiale",
          "Parcours d'achat ou e-commerce complexe",
          "Animations interactives avancées (Motion)",
          "Système d'administration WordPress FSE"
        ]);
    }
  }, [budget]);

  // Custom status state
  const [isCopied, setIsCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("hello@capitainesite.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Veuillez renseigner au moins votre nom et votre adresse email.");
      return;
    }

    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1800);
  };

  return (
    <div id="contact-page" className="w-full min-h-screen py-24 md:py-36 px-6 md:px-12 bg-black selection:bg-zinc-500/30 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        
        <AnimatePresence mode="wait">
          {formStatus !== "success" ? (
            <motion.div
              key="contact-layout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
            >
              
              {/* Left Column: Context, direct action cards & active status */}
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-300 font-semibold uppercase mb-4 block">
                    [ CONSTRUIRE L'AVENIR ENSEMBLE ]
                  </span>
                  <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tighter leading-[0.95] mb-6">
                    Bâtissons votre projet.
                  </h1>
                  <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-sans font-medium max-w-md">
                    Nous concevons des plateformes d'élite pour les marques d'exception. Remplissez notre formulaire interactif ou contactez-nous directement pour convenir d'un rendez-vous.
                  </p>
                </div>

                {/* Team Live Availability Status */}
                <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/[0.04] flex items-center gap-4 max-w-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
                  <span className="relative flex h-3.5 w-3.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white font-sans flex items-center gap-1.5">
                      <span>L'Atelier est ouvert</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full">LIVE</span>
                    </div>
                    <div className="text-[10px] font-mono text-zinc-300 font-medium">Échanges libres • Réponse sous 2h garantie</div>
                  </div>
                </div>

                {/* Direct Action Contacts */}
                <div className="flex flex-col gap-4 max-w-md border-t border-white/[0.06] pt-10">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#0c0c0c]/80 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-zinc-500/10 border border-zinc-500/20 flex items-center justify-center text-zinc-300">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 font-medium block">EMAIL DIRECT</span>
                        <span className="text-xs sm:text-sm font-semibold text-white font-sans">hello@capitainesite.com</span>
                      </div>
                    </div>
                    <button
                      id="copy-email-btn"
                      onClick={copyEmailToClipboard}
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all active:scale-95 text-white cursor-pointer"
                      title="Copier l'adresse email"
                    >
                      {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-[#0c0c0c]/80 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300">
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-zinc-500/10 border border-zinc-500/20 flex items-center justify-center text-zinc-300">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 font-medium block">RÉSERVER UN CRÉNEAU</span>
                        <span className="text-xs sm:text-sm font-semibold text-white font-sans">Session d'idéation (15 min)</span>
                      </div>
                    </div>
                    <a
                      href="tel:+33100000000"
                      className="flex items-center justify-center w-10 h-10 rounded-lg bg-white text-black hover:bg-white/90 transition-all active:scale-95"
                    >
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Form Module */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                
                {/* Form Mode Selector Toggles */}
                <div className="flex bg-[#0d0d0d] p-1 rounded-full border border-white/[0.06] max-w-[340px]">
                  <button
                    onClick={() => setFormMode("brief")}
                    className={`flex-1 py-2 text-[10px] font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                      formMode === "brief"
                        ? "bg-white text-black font-bold"
                        : "text-zinc-300 font-medium hover:text-white"
                    }`}
                  >
                    Brief Interactif
                  </button>
                  <button
                    onClick={() => setFormMode("classic")}
                    className={`flex-1 py-2 text-[10px] font-mono uppercase tracking-wider rounded-full transition-all cursor-pointer ${
                      formMode === "classic"
                        ? "bg-white text-black font-bold"
                        : "text-zinc-300 font-medium hover:text-white"
                    }`}
                  >
                    Message Classique
                  </button>
                </div>

                {/* Form Container */}
                <form
                  id="contact-interactive-form"
                  onSubmit={handleSubmit}
                  className="p-8 sm:p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#0c0c0c] to-[#060606] border border-white/[0.06] relative flex flex-col justify-between min-h-[460px]"
                >
                  <div className="absolute top-0 right-0 w-44 h-44 bg-zinc-500/5 rounded-full blur-3xl pointer-events-none" />

                  <AnimatePresence mode="wait">
                    {formMode === "brief" ? (
                      /* Natural Mad-Libs Brief Builder */
                      <motion.div
                        key="brief-form"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-widest mb-8 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                          <span>CONCEVOIR MON BRIEF INTERACTIF</span>
                        </h3>

                        <div className="text-lg sm:text-2xl font-display font-medium text-white leading-[1.8] sm:leading-[2] tracking-tight mb-10">
                          Bonjour, je m'appelle{" "}
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Votre Nom"
                            required
                            className="inline-block bg-white/5 border-b border-white/40 focus:border-white focus:outline-none px-2 py-0.5 text-white font-sans font-bold placeholder-white/45 w-[150px] text-center rounded"
                          />
                          {" "}et je représente l'entité{" "}
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Mon Entreprise"
                            className="inline-block bg-white/5 border-b border-white/40 focus:border-white focus:outline-none px-2 py-0.5 text-white font-sans font-bold placeholder-white/45 w-[170px] text-center rounded"
                          />
                          . <br className="hidden sm:inline" />
                          Je souhaite collaborer avec l'Atelier pour bâtir{" "}
                          <select
                            value={siteType}
                            onChange={(e) => setSiteType(e.target.value)}
                            className="inline-block bg-[#0f0f0f] border-b border-white/30 focus:border-white focus:outline-none px-2 py-1 text-white font-sans font-bold cursor-pointer rounded-lg text-sm sm:text-lg"
                          >
                            <option value="un Site E-Commerce">un Site E-Commerce Premium</option>
                            <option value="un Portfolio d'Exception">un Portfolio d'Exception</option>
                            <option value="un Site Vitrine">un Site Vitrine Haut de Gamme</option>
                            <option value="un Portail SaaS / Tech">un Portail SaaS / Tech</option>
                          </select>
                          {" "}avec un budget estimé à{" "}
                          <select
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="inline-block bg-[#0f0f0f] border-b border-white/30 focus:border-white focus:outline-none px-2 py-1 text-white font-sans font-bold cursor-pointer rounded-lg text-sm sm:text-lg"
                          >
                            <option value="< 5k€">&lt; 5 000 €</option>
                            <option value="5k€ - 15k€">5 000 € – 15 000 €</option>
                            <option value="15k€ - 30k€">15 000 € – 30 000 €</option>
                            <option value="30k€+">30 000 € +</option>
                          </select>
                          . <br className="hidden sm:inline" />
                          Vous pouvez me joindre directement par email à{" "}
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="votre@email.com"
                            required
                            className="inline-block bg-white/5 border-b border-white/40 focus:border-white focus:outline-none px-2 py-0.5 text-white font-sans font-bold placeholder-white/45 w-[210px] text-center rounded"
                          />
                          {" "}pour caler notre premier atelier gratuit.
                        </div>
                      </motion.div>
                    ) : (
                      /* Classic Elegant Form Layout */
                      <motion.div
                        key="classic-form"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col gap-6"
                      >
                        <h3 className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-zinc-300" />
                          <span>ENVOYER UN MESSAGE CLASSIQUE</span>
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-widest">Votre nom complet</label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Jean Dupont"
                              required
                              className="w-full h-12 px-4 bg-white/[0.02] border border-white/[0.12] focus:border-white focus:bg-white/[0.05] rounded-xl text-white text-sm outline-none transition-all placeholder-white/30 font-medium"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-widest">Adresse email</label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="jean@entreprise.com"
                              required
                              className="w-full h-12 px-4 bg-white/[0.02] border border-white/[0.12] focus:border-white focus:bg-white/[0.05] rounded-xl text-white text-sm outline-none transition-all placeholder-white/30 font-medium"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-widest">Entreprise / Projet</label>
                            <input
                              type="text"
                              value={company}
                              onChange={(e) => setCompany(e.target.value)}
                              placeholder="Optionnel"
                              className="w-full h-12 px-4 bg-white/[0.02] border border-white/[0.12] focus:border-white focus:bg-white/[0.05] rounded-xl text-white text-sm outline-none transition-all placeholder-white/30 font-medium"
                            />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-widest">Enveloppe budgétaire</label>
                            <select
                              value={budget}
                              onChange={(e) => setBudget(e.target.value)}
                              className="w-full h-12 px-4 bg-[#0d0d0d] border border-white/[0.12] focus:border-white rounded-xl text-white text-sm outline-none transition-all cursor-pointer font-medium"
                            >
                              <option value="< 5k€">&lt; 5 000 €</option>
                              <option value="5k€ - 15k€">5 000 € – 15 000 €</option>
                              <option value="15k€ - 30k€">15 000 € – 30 000 €</option>
                              <option value="30k€+">30 000 € +</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-mono text-zinc-300 font-bold uppercase tracking-widest">Décrivez votre vision</label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Expliquez-nous les contours, objectifs et contraintes de votre projet..."
                            rows={4}
                            className="w-full p-4 bg-white/[0.02] border border-white/[0.12] focus:border-white focus:bg-white/[0.05] rounded-xl text-white text-sm outline-none transition-all resize-none placeholder-white/30 font-medium"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Dynamic Budget inclusion visual highlights */}
                  <div className="mt-8 p-5 rounded-2xl bg-white/[0.01] border border-white/[0.04]">
                    <span className="text-[9px] font-mono text-zinc-300 font-bold uppercase tracking-[0.15em] block mb-3">
                      LIVRABLES D'ÉLITE INCLUS ({budget}) :
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {budgetInclusions.map((inclusion, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-zinc-200 font-medium">
                          <Check className="w-3.5 h-3.5 text-zinc-300 shrink-0 mt-0.5" />
                          <span>{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-brief-btn"
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full h-14 bg-white hover:bg-white/95 text-black font-semibold text-sm rounded-full shadow-xl flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-50 mt-8 cursor-pointer"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Clock className="w-5 h-5 animate-spin" />
                        <span>Transmission sécurisée...</span>
                      </>
                    ) : (
                      <>
                        <span>Envoyer mon brief stratégique</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            /* Immersive Success Screen with interactive step roadmap */
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl mx-auto p-10 md:p-12 rounded-3xl bg-[#0c0c0c] border border-white/[0.08] text-center flex flex-col items-center relative overflow-hidden"
            >
              <div className="absolute -top-12 -left-12 w-44 h-44 bg-zinc-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-8 shrink-0">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mb-4 tracking-tight">
                Brief Transmis !
              </h2>
              <p className="text-zinc-200 text-sm leading-relaxed mb-8 max-w-sm font-medium">
                Merci {name}. Votre brief stratégique a été chiffré et sécurisé. Notre équipe l'analyse immédiatement.
              </p>

              {/* Action item checklist list */}
              <div className="w-full text-left bg-white/[0.01] border border-white/[0.04] rounded-2xl p-6 mb-8">
                <span className="text-[9px] font-mono text-zinc-300 font-bold uppercase tracking-widest block mb-4 border-b border-white/[0.04] pb-2">
                  LES PROCHAINES ÉTAPES :
                </span>
                <ul className="flex flex-col gap-5 text-xs font-sans text-white/90">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-500/15 border border-zinc-500/30 flex items-center justify-center text-zinc-300 font-mono text-[9px] font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <span className="font-bold text-white block">Audit de faisabilité technique</span>
                      <span className="text-zinc-300">Vérification de la structure et des APIs nécessaires (sous 1h)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-500/15 border border-zinc-500/30 flex items-center justify-center text-zinc-300 font-mono text-[9px] font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <span className="font-bold text-white block">Invitation à un appel de 15 min</span>
                      <span className="text-zinc-300">Proposition de rendez-vous pour alignement artistique (sous 2h)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-zinc-500/15 border border-zinc-500/30 flex items-center justify-center text-zinc-300 font-mono text-[9px] font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <span className="font-bold text-white block">Envoi d'un devis sur-mesure</span>
                      <span className="text-zinc-300">Cahier des charges complet et maquettes initiales de l'Atelier</span>
                    </div>
                  </li>
                </ul>
              </div>

              <button
                id="reset-form-btn"
                onClick={() => {
                  setFormStatus("idle");
                  setName("");
                  setCompany("");
                  setEmail("");
                  setMessage("");
                }}
                className="text-xs font-mono text-zinc-300 font-semibold hover:text-white underline decoration-dotted underline-offset-4 cursor-pointer"
              >
                Soumettre un autre brief d'idéation
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
