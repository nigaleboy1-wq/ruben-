/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "./components/Navigation";
import BackgroundShapes from "./components/BackgroundShapes";
import BackgroundControls, { BgSettings } from "./components/BackgroundControls";
import HeroContent from "./components/HeroContent";
import ClientLogos from "./components/ClientLogos";
import HeroRealisations from "./components/HeroRealisations";
import RealisationsPage from "./components/RealisationsPage";
import ContactPage from "./components/ContactPage";
import { MousePosition } from "./types";
import { Compass, ArrowUpRight } from "lucide-react";
import heroBg from "./assets/images/hero_background_1784203627132.jpg";

const DEFAULT_BG_SETTINGS: BgSettings = {
  brightness: 100,
  opacity: 85,
  yPosition: 50,
  xPosition: 50,
  blur: 0,
  scale: 100,
  height: 60,
};

export default function App() {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [activePage, setActivePage] = useState<"home" | "realisations" | "contact" >("home");
  const [bgSettings, setBgSettings] = useState<BgSettings>(() => {
    try {
      const saved = localStorage.getItem("capitainesite_bg_settings");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return DEFAULT_BG_SETTINGS;
  });

  const handleBgSettingsChange = (newSettings: BgSettings) => {
    setBgSettings(newSettings);
    try {
      localStorage.setItem("capitainesite_bg_settings", JSON.stringify(newSettings));
    } catch (e) {
      console.error(e);
    }
  };

  const handleBgSettingsReset = () => {
    setBgSettings(DEFAULT_BG_SETTINGS);
    try {
      localStorage.setItem("capitainesite_bg_settings", JSON.stringify(DEFAULT_BG_SETTINGS));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized coordinates from -0.5 to 0.5 with center at (0, 0)
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Force scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  return (
    <div
      id="root-container"
      className="relative min-h-screen w-full text-white font-sans overflow-x-hidden flex flex-col justify-between"
    >
      {/* Global Dynamic Background with SVG Shapes and Parallax Glow (Fixed behind all content) */}
      <BackgroundShapes mousePos={mousePos} settings={bgSettings} activePage={activePage} />

      {/* Transparent Sticky Navigation */}
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Router with Smooth Framer Motion Crossfade */}
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {activePage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col"
            >
              {/* Main Hero Column: Badge, Title, Paragraph, CTA */}
              <main
                id="hero-main"
                className="relative flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen w-full pt-[120px] pb-16 overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${heroBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "scroll",
                }}
              >
                <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 md:gap-16 px-6 md:px-12">
                  <HeroContent onCtaClick={() => setActivePage("contact")} />
                  <ClientLogos />
                </div>
              </main>

              {/* Integrated Monochromatic Projects Slideshow below the main hero section */}
              <div id="projects-slideshow-container" className="w-full -mt-16 md:-mt-28 pb-16 md:pb-32 bg-transparent z-10">
                <HeroRealisations />
              </div>

              {/* Seamless Home Page Mini-CTA Footer to Route to dedicated Contact page */}
              <section className="relative w-full py-24 bg-transparent z-10 flex flex-col items-center justify-center px-6 border-t border-white/[0.04]">
                <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
                  <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-300 font-semibold uppercase">
                    ATELIER DIGITAL
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                    Commençons un projet d'envergure
                  </h2>
                  <p className="text-zinc-100 text-sm max-w-md leading-relaxed font-medium">
                    Découvrez comment nous pouvons transformer votre présence en ligne avec l'excellence de WordPress et d'un SEO premium.
                  </p>
                  <button
                    onClick={() => setActivePage("contact")}
                    className="flex items-center gap-2 h-12 px-6 rounded-full bg-white text-black text-xs font-bold shadow-lg hover:bg-white/90 transition-all border-none cursor-pointer"
                  >
                    Bâtir mon brief projet
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === "realisations" && (
            <motion.div
              key="realisations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <RealisationsPage />
            </motion.div>
          )}

          {activePage === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <ContactPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Global Bottom Footer (Clean, elegant, low visual noise) */}
      <footer id="global-footer" className="w-full py-8 border-t border-white/[0.03] bg-black/[0.15] z-20 px-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-zinc-400" />
            <span className="text-xs font-mono text-zinc-300 font-medium">
              © 2026 CapitaineSite. Tous droits réservés.
            </span>
          </div>
          <div className="flex gap-6 text-[11px] font-mono text-zinc-300 font-medium">
            <button onClick={() => setActivePage("home")} className="hover:text-white bg-transparent border-none cursor-pointer">Accueil</button>
            <button onClick={() => setActivePage("realisations")} className="hover:text-white bg-transparent border-none cursor-pointer">Réalisations</button>
            <button onClick={() => setActivePage("contact")} className="hover:text-white bg-transparent border-none cursor-pointer">Contact</button>
          </div>
        </div>
      </footer>

      {/* Floating control panel to adjust background image dynamically */}
      {activePage === "realisations" && (
        <BackgroundControls
          settings={bgSettings}
          onChange={handleBgSettingsChange}
          onReset={handleBgSettingsReset}
        />
      )}
    </div>
  );
}

