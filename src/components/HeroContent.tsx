/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroContentProps {
  onCtaClick: () => void;
}

export default function HeroContent({ onCtaClick }: HeroContentProps) {
  // Cascading animation states
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom premium cubic bezier
      },
    }),
  };

  return (
    <div
      id="hero-content-wrapper"
      className="flex flex-col items-center justify-center text-center max-w-4xl px-4 z-10"
    >
      {/* 1. Small rounded category badge (Top badge -> Title: 24px) */}
      <motion.div
        id="category-badge"
        custom={0.2}
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.15)] backdrop-blur-sm group hover:border-zinc-500/30 transition-all duration-300 cursor-default"
      >
        <Sparkles className="w-3.5 h-3.5 text-zinc-300 group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-xs md:text-sm font-medium tracking-wide text-white font-semibold">
          Agence Web WordPress & SEO
        </span>
        <span className="relative flex h-2 w-2 ml-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300"></span>
        </span>
      </motion.div>

      {/* 2. Large centered headline (Title -> Paragraph: 30px) */}
      <motion.h1
        id="hero-headline"
        custom={0.4}
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        className="mb-6 md:mb-7.5 max-w-[1100px] font-display font-extrabold text-white tracking-[-0.02em] leading-[1.1] sm:leading-[1.05] text-[32px] xs:text-[36px] sm:text-[56px] md:text-[76px] lg:text-[80px] select-none"
      >
        <span className="md:whitespace-nowrap">Votre site web sur-mesure</span>
        <br className="hidden sm:inline" />
        qui attire des clients
      </motion.h1>

      {/* 3. Supporting paragraph (Paragraph -> Button: 35px) */}
      <motion.p
        id="hero-paragraph"
        custom={0.6}
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        className="mb-9 max-w-[720px] font-sans font-medium text-zinc-100 leading-[1.7] text-base sm:text-lg md:text-[20px] select-text"
      >
        Nous réalisons des sites WordPress performants, optimisés pour le référencement SEO et pensés pour{" "}
        <span className="text-white font-bold underline decoration-white/50 underline-offset-4 hover:decoration-white transition-colors cursor-pointer">
          générer des conversions
        </span>
        .
      </motion.p>

      {/* 4. Primary CTA Button (Button -> Logos: 55px) */}
      <motion.div
        id="cta-button-container"
        custom={0.8}
        initial="hidden"
        animate="visible"
        variants={fadeInUpVariants}
        className="mb-6"
      >
        <motion.button
          id="primary-cta-btn"
          onClick={onCtaClick}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center justify-center gap-2 h-[54px] px-[34px] font-sans font-semibold text-white rounded-full bg-gradient-to-r from-zinc-700 to-zinc-500 shadow-[0_4px_20px_rgba(113,113,122,0.3)] hover:shadow-[0_4px_30px_rgba(161,161,170,0.5)] transition-shadow duration-300 group border-none cursor-pointer"
        >
          {/* Subtle reflection overlay on hover */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          Réservez votre appel gratuit
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
}
