/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, Sparkles, Award, Star, BarChart3, Cpu, Activity, Clock, ShieldCheck, Zap } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  description: string;
  results: string;
  year: string;
  role: string;
  metrics: {
    seo: number;
    speed: string;
    conversion: string;
  };
  clientFeedback?: {
    author: string;
    text: string;
    position: string;
  };
}

export default function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { label: "TOUS", count: 6 },
    { label: "E-COMMERCE", count: 2 },
    { label: "SAAS & TECH", count: 1 },
    { label: "ARCHITECTURE & IMMOBILIER", count: 2 },
    { label: "LUXE & ART DE VIVRE", count: 1 }
  ];

  const projects: Project[] = [
    {
      id: "artisan",
      title: "L'Artisan Parisien",
      category: "E-COMMERCE",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=90",
      technologies: ["WordPress", "WooCommerce", "Tailwind CSS", "SEO Premium", "Stripe API"],
      description: "Une boutique de e-commerce d'exception conçue pour une boulangerie-pâtisserie haut de gamme parisienne. Nous avons sculpté une expérience utilisateur sans couture, un parcours d'achat épuré et une esthétique qui célèbre l'excellence pâtissière française.",
      results: "+140% de ventes directes en ligne en 3 mois.",
      year: "2025",
      role: "Stratégie, UI/UX, Développement WordPress",
      metrics: {
        seo: 100,
        speed: "450ms",
        conversion: "+140%"
      },
      clientFeedback: {
        author: "Jean-Roch Giraud",
        position: "Fondateur de L'Artisan Parisien",
        text: "L'équipe a métamorphosé notre présence en ligne. Nos ventes ont décollé et nos clients sont fascinés par la vitesse et l'élégance du site.",
      },
    },
    {
      id: "nova",
      title: "Nova Architecture",
      category: "ARCHITECTURE & IMMOBILIER",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=90",
      technologies: ["WordPress FSE", "Framer Motion", "Vitesse A+", "Figma Prototype"],
      description: "Un portfolio immersif et hautement contemplatif pour un cabinet d'architecture internationale à Paris. Chaque transition, chaque zoom et chaque espace blanc ont été calibrés pour refléter le minimalisme rigoureux et la poésie des structures construites par l'agence.",
      results: "Score Google Lighthouse parfait de 100/100 globale.",
      year: "2026",
      role: "Direction Artistique, Intégration FSE, SEO",
      metrics: {
        seo: 100,
        speed: "380ms",
        conversion: "+85% Leads"
      },
      clientFeedback: {
        author: "Marie-Sophie Legendre",
        position: "Directrice Associée",
        text: "Un site web qui se comporte comme un livre d'architecture de luxe. La fluidité est absolument magique.",
      },
    },
    {
      id: "horizon",
      title: "Horizon Ventures",
      category: "SAAS & TECH",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90",
      technologies: ["Next.js", "WordPress Headless", "GraphQL", "Tailwind CSS"],
      description: "La vitrine numérique d'un fonds d'investissement mondial de capital-risque. Une intégration fluide et ultrasécurisée entre un backend d'administration de contenu moderne pour l'équipe éditoriale et un frontend React d'une rapidité fulgurante à l'allure futuriste et soignée.",
      results: "+68% de prises de contact qualifiées sur la plateforme.",
      year: "2025",
      role: "Développement React, WordPress Headless, API",
      metrics: {
        seo: 98,
        speed: "290ms",
        conversion: "+68%"
      },
    },
    {
      id: "sommet",
      title: "Chalet Sommet Altitude",
      category: "LUXE & ART DE VIVRE",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=90",
      technologies: ["Next.js", "WordPress API", "Engine de Réservation", "GSAP Scroll"],
      description: "Plateforme de réservation directe et d'expérience de conciergerie haut de gamme pour un chalet privé d'exception situé dans les Alpes françaises. Intégration d'un calendrier en temps réel et de micro-animations interactives.",
      results: "+48% de réservations en direct (sans commission OTA).",
      year: "2026",
      role: "Ingénierie Frontend, Intégration de Réservations",
      metrics: {
        seo: 100,
        speed: "510ms",
        conversion: "+48% Direct"
      },
    },
    {
      id: "mirabelle",
      title: "Villa Mirabelle",
      category: "LUXE & ART DE VIVRE",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=90",
      technologies: ["WordPress", "Sémantique SEO", "Photographie Optimisée"],
      description: "La vitrine immersive pour un domaine viticole provençal réputé. Une navigation sensorielle rythmée par de magnifiques images haute définition entièrement compressées pour un chargement instantané sur mobile.",
      results: "+55% de visites physiques réservées via le site web, numéro 1 local.",
      year: "2025",
      role: "UX Strategy, Développement WordPress, SEO",
      metrics: {
        seo: 100,
        speed: "420ms",
        conversion: "+55%"
      },
    },
    {
      id: "racine",
      title: "Atelier Racine",
      category: "ARCHITECTURE & IMMOBILIER",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=90",
      technologies: ["WordPress FSE", "CSS Grid", "Optimisation Images", "UX mobile"],
      description: "Mise en scène numérique pour un studio renommé de rénovation d'espaces intérieurs de grand standing. Présentation des projets avant/après par un curseur interactif haute performance.",
      results: "Taux de rebond de seulement 18% et LCP réduit à 1.1s sur mobile.",
      year: "2025",
      role: "Architecture Technique, Design d'Interactions",
      metrics: {
        seo: 99,
        speed: "490ms",
        conversion: "-40% Rebond"
      },
    },
  ];

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeFilter.toUpperCase());

  return (
    <div id="realisations-page" className="w-full min-h-screen py-24 md:py-36 px-6 md:px-12 bg-transparent selection:bg-zinc-500/30">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Editorial Page Header */}
        <div className="relative mb-20 md:mb-28">
          <div className="absolute top-0 left-0 w-32 h-32 bg-zinc-500/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/[0.06] pb-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-300 font-semibold uppercase mb-4 block">
                [ HAUTE COUTURE NUMÉRIQUE ]
              </span>
              <h1 className="text-5xl sm:text-7xl font-display font-extrabold text-white tracking-tighter leading-[0.95] mb-6">
                Œuvres & <br />
                Performances.
              </h1>
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-sans font-medium max-w-xl">
                Chaque création de l'Atelier est sculptée selon des standards de performance d'élite : une vitesse fulgurante, un référencement sémantique d'autorité et une élégance visuelle indélébile.
              </p>
            </div>
            
            {/* Meta statistics showcase */}
            <div className="flex gap-8 md:gap-12 shrink-0">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-400 font-medium uppercase tracking-widest mb-1">PROJETS LIVRÉS</span>
                <span className="text-3xl font-display font-black text-white">42+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-400 font-medium uppercase tracking-widest mb-1">MOYENNE LIGHTHOUSE</span>
                <span className="text-3xl font-display font-black text-zinc-300">99.4%</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-400 font-medium uppercase tracking-widest mb-1">PAYS TOUCHÉS</span>
                <span className="text-3xl font-display font-black text-white">4</span>
              </div>
            </div>
          </div>
        </div>

        {/* High-End Monospaced Filter Bar */}
        <div id="portfolio-filters" className="flex flex-wrap gap-2 md:gap-3 items-center mb-16 overflow-x-auto pb-4 scrollbar-none border-b border-white/[0.03]">
          {filters.map((f) => {
            const isSelected = activeFilter.toUpperCase() === f.label;
            return (
              <button
                id={`filter-${f.label.toLowerCase().replace(/\s+/g, "-")}`}
                key={f.label}
                onClick={() => setActiveFilter(f.label === "TOUS" ? "Tous" : f.label)}
                className={`relative px-5 py-3 text-[10px] font-mono uppercase tracking-[0.15em] rounded-full border transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-white text-black border-white font-semibold"
                    : "bg-white/[0.01] text-zinc-300 font-medium border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
              >
                <span>{f.label}</span>
                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full ${
                  isSelected ? "bg-black/10 text-black font-bold" : "bg-white/5 text-zinc-300 font-medium"
                }`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Boutique Bento Grid */}
        <div id="portfolio-grid" className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => {
            // High design-variance bento layout algorithm
            let colSpan = "md:col-span-6"; // Default halves
            if (index === 0) colSpan = "md:col-span-8"; // First is wider
            if (index === 1) colSpan = "md:col-span-4"; // Second is narrow
            if (index === 4) colSpan = "md:col-span-4"; 
            if (index === 5) colSpan = "md:col-span-8";

            return (
              <motion.div
                id={`project-card-${project.id}`}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
                className={`group relative cursor-pointer bg-[#0c0c0c]/45 border border-white/[0.05] hover:border-zinc-500/20 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-500 ${colSpan}`}
              >
                {/* Floating Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/0 via-zinc-500/0 to-zinc-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image Canvas */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#0d0d0d]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 flex gap-1.5">
                    <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md border border-white/[0.08] text-[9px] font-mono uppercase tracking-widest rounded text-white/95 font-bold">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 bg-zinc-500/10 backdrop-blur-md border border-zinc-500/20 text-[9px] font-mono uppercase tracking-widest rounded text-zinc-300 font-bold">
                      SEO {project.metrics.seo}%
                    </span>
                  </div>

                  <span className="absolute top-4 right-4 font-mono text-[10px] text-zinc-300 tracking-widest font-bold">
                    // {project.year}
                  </span>

                  {/* Micro Performance Panel Overlay (Absolute Bottom Right) */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded border border-white/[0.05] flex items-center gap-1">
                      <Zap className="w-2.5 h-2.5 text-amber-400" />
                      <span className="text-[9px] font-mono text-white/70">{project.metrics.speed}</span>
                    </div>
                    <div className="px-2 py-1 bg-black/60 backdrop-blur-sm rounded border border-white/[0.05] flex items-center gap-1">
                      <Activity className="w-2.5 h-2.5 text-emerald-400" />
                      <span className="text-[9px] font-mono text-white/70">{project.metrics.conversion}</span>
                    </div>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 sm:p-8 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-2 tracking-tight group-hover:text-zinc-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-zinc-200 text-xs sm:text-sm font-sans font-medium line-clamp-2 max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/[0.02] border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Immersive Right-Side Slider Case Study Panel */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop Blur overlay */}
            <motion.div
              id="case-study-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            />

            {/* Sliding Panel */}
            <motion.div
              id="case-study-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 180 }}
              className="fixed top-0 right-0 h-full w-full max-w-2xl z-50 bg-[#060606] border-l border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-y-auto flex flex-col justify-between"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-white/[0.06] flex items-center justify-between bg-[#090909]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-zinc-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300 font-semibold">ÉTUDE DE CAS PREMIUM</span>
                </div>
                <button
                  id="close-case-study"
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-8 sm:p-10 flex-grow flex flex-col gap-10">
                
                {/* Meta details */}
                <div>
                  <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-bold block mb-1">
                    {selectedProject.category} • {selectedProject.year}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight leading-none mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-zinc-300 text-xs font-mono uppercase tracking-wider font-semibold">
                    RÔLE : {selectedProject.role}
                  </p>
                </div>

                {/* Hero image with performance badges overlaid */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060606] to-transparent opacity-40" />
                </div>

                {/* Creative Dynamic Metrics Gauges */}
                <div className="grid grid-cols-3 gap-4">
                  
                  {/* SEO Circle Gauge */}
                  <div className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.04] flex flex-col items-center justify-center text-center">
                    <div className="relative w-16 h-16 flex items-center justify-center mb-3">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle cx="32" cy="32" r="28" className="stroke-white/[0.05] stroke-[4] fill-none" />
                        <circle 
                          cx="32" cy="32" r="28" 
                          className="stroke-zinc-400 stroke-[4] fill-none" 
                          strokeDasharray={175} 
                          strokeDashoffset={175 - (175 * selectedProject.metrics.seo) / 100}
                        />
                      </svg>
                      <span className="absolute text-[11px] font-mono font-bold text-white">{selectedProject.metrics.seo}%</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-300 font-medium uppercase tracking-widest">SCORE SEO</span>
                  </div>

                  {/* SPEED Metric */}
                  <div className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.04] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#10b981]/5 border border-[#10b981]/15 flex items-center justify-center text-[#10b981] mb-3">
                      <Zap className="w-6 h-6 fill-current" />
                    </div>
                    <span className="text-sm font-bold text-white font-sans mb-1">{selectedProject.metrics.speed}</span>
                    <span className="text-[10px] font-mono text-zinc-300 font-medium uppercase tracking-widest">TEMPS CHARGE</span>
                  </div>

                  {/* CONVERSION Metric */}
                  <div className="p-5 rounded-xl bg-white/[0.01] border border-white/[0.04] flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#71717a]/10 border border-[#71717a]/20 flex items-center justify-center text-zinc-300 mb-3">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-bold text-white font-sans mb-1">{selectedProject.metrics.conversion}</span>
                    <span className="text-[10px] font-mono text-zinc-300 font-medium uppercase tracking-widest">OPTIMISATION</span>
                  </div>

                </div>

                {/* Editorial text specifications */}
                <div className="flex flex-col gap-6">
                  <div className="p-6 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                    <h4 className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-widest border-b border-white/[0.08] pb-3 mb-4 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>STRATÉGIE TECHNIQUE</span>
                    </h4>
                    <p className="text-white font-medium text-sm leading-relaxed mb-6 font-sans">
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Results Statement */}
                  <div className="p-6 rounded-xl bg-[#090909] border border-white/[0.08] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-zinc-500/5 rounded-full blur-2xl pointer-events-none" />
                    
                    <h4 className="text-xs font-mono text-zinc-300 font-bold uppercase tracking-widest border-b border-white/[0.08] pb-3 mb-3 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5" />
                      <span>RÉSULTATS VALIDÉS</span>
                    </h4>

                    <p className="text-white text-base font-display font-black leading-snug tracking-tight">
                      {selectedProject.results}
                    </p>
                  </div>

                  {/* Client Testimonial if present */}
                  {selectedProject.clientFeedback && (
                    <div className="p-6 rounded-xl bg-white/[0.01] border border-white/[0.04]">
                      <Star className="w-4 h-4 text-amber-400 mb-4 fill-amber-400" />
                      <p className="text-zinc-100 font-medium text-xs sm:text-sm italic leading-relaxed mb-4 font-sans">
                        "{selectedProject.clientFeedback.text}"
                      </p>
                      <div>
                        <div className="text-xs font-bold text-white">{selectedProject.clientFeedback.author}</div>
                        <div className="text-[9px] font-mono text-zinc-300 font-bold">{selectedProject.clientFeedback.position}</div>
                      </div>
                    </div>
                  )}
                </div>

              </div>

              {/* Drawer Footer Call To Action */}
              <div className="p-6 border-t border-white/[0.06] bg-[#090909] flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono text-zinc-300 font-medium uppercase">PROJET REPRODUCTIBLE</span>
                  <span className="text-xs text-white/80 font-bold">Parlons de votre projet</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center justify-between gap-3 h-12 px-6 bg-white text-black font-semibold text-xs rounded-full shadow-lg hover:bg-white/90 transition-all duration-300"
                >
                  <span>Lancer un projet similaire</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
