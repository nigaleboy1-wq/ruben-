/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X, ArrowUpRight, Compass, Home, FolderKanban } from "lucide-react";

interface NavigationProps {
  activePage: "home" | "realisations" | "contact";
  setActivePage: (page: "home" | "realisations" | "contact") => void;
}

export default function Navigation({ activePage, setActivePage }: NavigationProps) {
  const menuItems = [
    { label: "Accueil", value: "home" as const },
    { label: "Réalisations", value: "realisations" as const },
    { label: "Contact", value: "contact" as const },
  ];

  return (
    <>
      {/* Desktop Sticky Navigation (Hidden on Mobile) */}
      <motion.nav
        id="navbar"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-[90px] hidden md:flex items-center border-b border-white/[0.04] bg-[#090909]/40 backdrop-blur-md px-12 transition-all"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <button
            id="nav-logo"
            onClick={() => setActivePage("home")}
            className="flex items-center gap-2.5 group focus:outline-none bg-transparent border-none p-0 cursor-pointer text-left"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-zinc-400/50 group-hover:bg-zinc-500/[0.03] transition-all duration-300">
              <Compass className="w-5 h-5 text-white group-hover:text-zinc-200 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-xl bg-zinc-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <span className="text-lg font-bold font-sans tracking-tight text-white group-hover:text-zinc-200 transition-colors">
              Capitaine<span className="text-zinc-400">Site</span>
            </span>
          </button>

          {/* Center: Desktop Menu */}
          <div className="flex items-center gap-8">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                id={`nav-link-${idx}`}
                onClick={() => setActivePage(item.value)}
                className={`flex items-center gap-1 text-[15px] font-medium py-2 bg-transparent border-none cursor-pointer transition-colors duration-200 ${
                  activePage === item.value ? "text-white font-semibold" : "text-white/50 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: Primary CTA Button */}
          <div className="flex items-center gap-4">
            <motion.button
              id="nav-cta-desktop"
              onClick={() => setActivePage("contact")}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-1.5 h-10 px-5 bg-white text-black font-semibold text-sm rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 cursor-pointer"
            >
              Devis Gratuit
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Floating Bottom Bar (Uncluttered, modern, essential only) */}
      <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center md:hidden px-5 pointer-events-none">
        <motion.div
          initial={{ y: 35, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[320px] h-[52px] rounded-full bg-[#0d0d0d]/85 border border-white/[0.08] backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.6)] flex items-center justify-between px-3 pointer-events-auto"
        >
          {/* Home Shortcut */}
          <button
            onClick={() => setActivePage("home")}
            className={`flex items-center justify-center w-11 h-11 rounded-full bg-transparent border-none cursor-pointer active:scale-95 transition-all ${
              activePage === "home" ? "text-white" : "text-white/55 hover:text-white"
            }`}
            aria-label="Accueil"
          >
            <Compass className="w-5.5 h-5.5" />
          </button>

          {/* Realisations Shortcut */}
          <button
            onClick={() => setActivePage("realisations")}
            className={`flex items-center justify-center gap-1.5 px-3 h-11 rounded-full bg-transparent border-none cursor-pointer active:scale-95 transition-all text-xs font-mono uppercase tracking-wider ${
              activePage === "realisations" ? "text-white font-bold" : "text-white/55 hover:text-white"
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>Projets</span>
          </button>

          {/* Contact Highlighted Button */}
          <button
            onClick={() => setActivePage("contact")}
            className={`flex items-center justify-center gap-1 h-9.5 px-4.5 rounded-full border-none cursor-pointer shadow-lg active:scale-95 transition-all text-xs font-bold ${
              activePage === "contact"
                ? "bg-zinc-200 text-black"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
          </button>
        </motion.div>
      </div>
    </>
  );
}
