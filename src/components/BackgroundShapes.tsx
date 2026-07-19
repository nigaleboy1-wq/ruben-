/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MousePosition } from "../types";
import { BgSettings } from "./BackgroundControls";
import heroBg from "../assets/images/hero_background_1784203627132.jpg";

interface BackgroundShapesProps {
  mousePos: MousePosition;
  settings: BgSettings;
  activePage?: string;
}

const REALISATIONS_BG = "https://chatgpt.com/backend-api/estuary/content?id=file_0000000095a872468816cce3a4ab68e6&ts=495666&p=fs&cid=1&sig=1f13ee53295807d24f8583de04f5ae26a8bf19afd718b23741e6c10fe866cc72&v=0";
const HERO_BG_NEW = "https://res-console.cloudinary.com/ninbubwq/thumbnails/transform/v1/image/upload/Y19maWxsLGhfMjAwLHdfMjAw/v1/Q2hhdEdQVF9JbWFnZV8xOV9qdWlsLl8yMDI2XzAyXzI5XzM3X2d2dmhpZg==/template_primary";

export default function BackgroundShapes({ mousePos, settings, activePage }: BackgroundShapesProps) {
  // If we are on the home page, render a completely clean, static background with no effects, noise or glow overlays
  if (activePage === "home") {
    return (
      <div className="fixed inset-0 overflow-hidden bg-[#080c16] -z-10 pointer-events-none select-none" />
    );
  }

  // Parallax offsets (subtle multipliers to create depths)
  const bgImg = activePage === "realisations" ? REALISATIONS_BG : HERO_BG_NEW;
  const isBgVisible = activePage === "realisations";

  const bgX = mousePos.x * -15;
  const bgY = mousePos.y * -10;

  const glowX = mousePos.x * 20;
  const glowY = mousePos.y * 12;

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#080c16] -z-10 pointer-events-none select-none">
      {/* 1. High-end exact background image from user reference with interactive parallax (rendered via CSS background-image) */}
      {isBgVisible && (
        <div 
          className="absolute top-0 left-0 right-0 w-full overflow-hidden transition-all duration-300" 
          style={{ height: `${settings.height !== undefined ? settings.height : 60}vh` }}
        >
          <motion.div
            style={{ 
              x: bgX, 
              y: bgY,
              backgroundImage: `url(${bgImg})`,
              backgroundSize: settings.scale ? `${settings.scale}%` : "cover",
              backgroundPosition: `${settings.xPosition !== undefined ? settings.xPosition : 50}% ${settings.yPosition !== undefined ? settings.yPosition : 50}%`,
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "scroll",
              opacity: settings.opacity / 100,
              filter: `brightness(${settings.brightness}%) blur(${settings.blur}px)`,
            }}
            transition={{ type: "spring", stiffness: 15, damping: 12 }}
            className="absolute inset-0 w-[104%] h-[104%] -left-[2%] -top-[2%] z-0 select-none pointer-events-none transition-all duration-150"
          />
          {/* Transition gradient at the bottom of the image to blend into the pure black background */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080c16] via-[#080c16]/80 to-transparent z-[1]" />
        </div>
      )}

      {/* 2. Soft vignette and dark grain overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay mix-blend-overlay z-[3]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080c16]/40 to-[#080c16] z-[2]" />

      {/* 3. Interactive glowing horizon light overlay */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        transition={{ type: "spring", stiffness: 12, damping: 10 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160vw] md:w-[110vw] h-[350px] md:h-[500px] z-[1] pointer-events-none"
      >
        <motion.div
          className="w-full h-full rounded-[100%] bg-zinc-600/10 md:bg-zinc-700/12 blur-[80px] md:blur-[120px] origin-bottom"
          animate={{
            scaleY: [1, 1.05, 0.95, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] md:w-[50vw] h-[100px] md:h-[180px] bg-zinc-500/15 rounded-full blur-[40px] md:blur-[70px]" />
      </motion.div>
    </div>
  );
}
