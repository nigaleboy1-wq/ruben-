/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MousePosition } from "../types";

interface BackgroundShapesProps {
  mousePos: MousePosition;
}

export default function BackgroundShapes({ mousePos }: BackgroundShapesProps) {
  // Parallax offsets (subtle multipliers to create depths)
  const glowX = mousePos.x * 20;
  const glowY = mousePos.y * 12;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#090909] -z-10 pointer-events-none select-none">
      {/* 1. Soft vignette and dark grain overlay */}
      <div className="absolute inset-0 noise-overlay mix-blend-overlay z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#090909]/40 to-[#090909] z-[1]" />

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
