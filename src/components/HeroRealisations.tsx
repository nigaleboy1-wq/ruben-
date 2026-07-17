/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Code2, Globe, ShieldCheck, Heart, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  description: string;
  results: string;
}

export default function HeroRealisations() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "artisan",
      title: "L'Artisan Parisien",
      category: "E-Commerce Premium",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "WooCommerce", "Tailwind CSS", "SEO Premium"],
      description: "Une boutique en ligne sur-mesure pour une boulangerie-pâtisserie haut de gamme parisienne. Nous avons conçu une expérience utilisateur fluide, un parcours d'achat ultra-rapide et un design qui met en valeur l'artisanat français.",
      results: "+140% de commandes en ligne en 3 mois, temps de chargement divisé par 3."
    },
    {
      id: "nova",
      title: "Nova Architecture",
      category: "Portfolio d'Exception",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress FSE", "Gutenberg blocks", "Framer Motion", "Vitesse de Page A+"],
      description: "Un portfolio immersif et hautement esthétique pour un cabinet d'architecture internationale. Chaque transition a été pensée pour refléter le minimalisme et la précision des structures conçues par l'agence.",
      results: "Score SEO de 100/100, récompensé sur Awwwards pour sa direction artistique."
    },
    {
      id: "horizon",
      title: "Horizon Ventures",
      category: "Plateforme SaaS & Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React / Next.js", "WordPress Headless", "GraphQL", "Tailwind CSS"],
      description: "La vitrine technologique d'un fonds d'investissement mondial. Intégration transparente entre un backend WordPress sécurisé pour l'équipe éditoriale et un frontend React ultrarapide à l'esthétique minimaliste.",
      results: "Génération de leads qualifiés en hausse de 68%, site entièrement sécurisé."
    },
    {
      id: "sud",
      title: "Le Sud Traiteur",
      category: "Site Vitrine Gastronomique",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress Sur-Mesure", "SEO local", "Réservations en ligne"],
      description: "Présentation de la haute gastronomie provençale pour un traiteur événementiel haut de gamme. Conception de formulaires internes intelligents et de galeries photos interactives.",
      results: "Top 3 Google sur 15 mots-clés stratégiques locaux, +85% de demandes de devis."
    },
    {
      id: "alpha",
      title: "Alpha Tech Solutions",
      category: "Portail SaaS B2B",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress custom application", "Tailwind CSS", "Interactivités Lottie"],
      description: "Création d'un portail client sécurisé et de la vitrine d'une solution de cybersécurité. Structure de page moderne inspirée des standards de design de Stripe et de Linear.",
      results: "Taux de rebond réduit de 42%, conversion de la page de tarification en hausse de 22%."
    },
    {
      id: "legendre",
      title: "Cabinet Legendre",
      category: "Corporate & Droit",
      image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "Design Minimaliste", "Framer Motion", "Accessibilité"],
      description: "Identité de marque digitale et vitrine d'un cabinet d'avocats d'affaires de premier plan. Un design sobre et rassurant alliant rigueur technique et clarté esthétique.",
      results: "Temps moyen de session +55%, engagement accru sur les articles d'expertise juridique."
    },
    {
      id: "racine",
      title: "Atelier Racine",
      category: "Architecture d'Intérieur",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress FSE", "Grid Layouts", "SEO Local", "Performance A+"],
      description: "Mise en avant de projets de rénovation haut de gamme d'espaces de vie éco-conçus. Des images très haute définition servies de manière optimisée pour un rendu époustouflant.",
      results: "Vitesse de chargement mobile inférieure à 1.2s, taux de conversion des demandes d'estimation +35%."
    },
    {
      id: "sommet",
      title: "Sommet Altitude",
      category: "Hôtellerie de Luxe",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "WordPress Headless", "GraphQL", "Interactive Maps"],
      description: "Plateforme de réservation et de conciergerie haut de gamme pour un chalet d'exception dans les Alpes. Intégration d'un moteur de réservation performant et sécurisé.",
      results: "Augmentation des réservations directes de +48%, économies de frais de plateforme tierce."
    },
    {
      id: "mirabelle",
      title: "Villa Mirabelle",
      category: "Domaine Viticole",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "SEO International", "Visual Storytelling"],
      description: "Une invitation à la découverte des terroirs et des crus de prestige d'un domaine provençal historique. Conception d'un parcours immersif et bilingue.",
      results: "Trafic international en hausse de 92%, forte visibilité sur les requêtes cibles anglophones."
    },
    {
      id: "eclipse",
      title: "Éclipse Studio",
      category: "Production Audiovisuelle",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "Video Streaming Integration", "Tailwind CSS"],
      description: "Une vitrine dynamique pour un studio créatif spécialisé dans la production publicitaire de luxe. Chargement asynchrone des bandes démo et des portfolios d'artistes.",
      results: "Lecture fluide des médias sans impact de performance, design entièrement primé."
    }
  ];

  return (
    <div
      id="hero-realisations"
      className="relative w-full pt-4 pb-20 overflow-visible z-10 flex flex-col items-center justify-center min-h-[440px] sm:min-h-[580px]"
    >
      {/* 3D Curved Perspective Carousel forming a beautiful rotating circle */}
      <div 
        className="relative w-full flex items-center justify-center [perspective:1400px] overflow-visible py-10"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)"
        }}
      >
        {/* Soft elegant radial background ring behind the 3D circle */}
        <div className="absolute w-[360px] sm:w-[580px] h-[100px] sm:h-[150px] rounded-full bg-white/[0.01] border border-white/[0.03] blur-lg pointer-events-none -z-10 transform -rotate-x-[75deg] translate-y-[80px] sm:translate-y-[120px]" />

        <div 
          className="relative w-[240px] sm:w-[340px] h-[150px] sm:h-[212px] [transform-style:preserve-3d] spin-cylinder cursor-grab active:cursor-grabbing"
          style={{ transformOrigin: "center center" }}
        >
          {projects.map((project, idx) => {
            const angle = idx * (360 / projects.length);
            return (
              <div
                id={`hero-project-card-${idx}`}
                key={`${project.id}-${idx}`}
                onClick={() => setSelectedProject(project)}
                className="absolute w-[240px] sm:w-[340px] h-[150px] sm:h-[212px] left-1/2 top-1/2 -ml-[120px] sm:-ml-[170px] -mt-[75px] sm:-mt-[106px] rounded-2xl bg-[#090909]/95 border border-white/[0.08] overflow-hidden cursor-pointer group/card flex flex-col justify-between p-4 sm:p-5 shadow-2xl transition-all duration-300 hover:border-white/20"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(var(--translate-z))`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Monochromatic Elegant Overlay on Hover */}
                <div className="absolute inset-0 bg-white/[0.04] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                
                {/* Project Image */}
                <div className="absolute inset-0 w-full h-full -z-10 bg-[#0d0d0d] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-35 group-hover/card:scale-105 group-hover/card:opacity-55 transition-all duration-700 ease-out"
                  />
                </div>

                {/* Card Content gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/50 to-transparent opacity-95" />

                {/* Top Row: Simple minimalist Link Icon */}
                <div className="z-10 flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest text-zinc-300 font-semibold uppercase bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded">
                    PROJET {idx + 1}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/card:translate-y-0">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Row: Text content */}
                <div className="z-10">
                  <span className="text-[10px] font-mono text-zinc-200 font-bold uppercase tracking-widest mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight group-hover/card:text-white transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Styled text to introduce the showcase smoothly */}
      <div className="mt-16 flex items-center gap-2 text-zinc-200 font-semibold text-xs font-mono select-none">
        <Sparkles className="w-3.5 h-3.5 text-zinc-300 animate-pulse" />
        <span>Survolez pour figer • Cliquez sur un projet pour explorer</span>
      </div>

      {/* CSS Styles for Infinite 3D Carousel and Responsive variables */}
      <style>{`
        #hero-realisations {
          --translate-z: 390px;
        }
        @media (min-width: 640px) {
          #hero-realisations {
            --translate-z: 560px;
          }
        }
        @keyframes spin3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(-360deg); }
        }
        .spin-cylinder {
          animation: spin3d 50s linear infinite;
        }
        .spin-cylinder:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Project Details Modal - Pure aesthetic, no blue theme */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-colors"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Left Side: Image Card */}
              <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto min-h-[200px] bg-black flex flex-col justify-end p-5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="relative z-10">
                  <span className="text-[10px] font-mono text-white/70 font-semibold uppercase tracking-wider bg-white/10 border border-white/10 px-2 py-0.5 rounded">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-extrabold text-white mt-2 leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-between gap-5 max-h-[80vh] md:max-h-[500px] overflow-y-auto">
                <div>
                  <div className="flex items-center gap-1.5 mb-3.5">
                    <Code2 className="w-3.5 h-3.5 text-zinc-300 font-medium" />
                    <span className="text-[10px] font-mono tracking-wider text-zinc-300 font-bold uppercase">
                      Projet Agence
                    </span>
                  </div>

                  <p className="text-white font-medium text-sm leading-relaxed mb-5 font-sans">
                    {selectedProject.description}
                  </p>

                  <div className="mb-5">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 font-bold mb-1.5 flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono text-white bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-100 mb-1 flex items-center gap-1 font-bold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Impact & Performance
                    </h4>
                    <p className="text-xs text-white font-medium">
                      {selectedProject.results}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/[0.06] pt-3.5 mt-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-300 font-medium">
                    <Heart className="w-3 h-3 text-zinc-400" />
                    <span>Création Sur-Mesure</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[10px] font-bold text-white hover:text-white/80 transition-colors flex items-center gap-0.5"
                  >
                    Demander conseil
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
