/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SlidersHorizontal, RotateCcw, X, Eye, EyeOff, Sliders } from "lucide-react";

export interface BgSettings {
  brightness: number;
  opacity: number;
  yPosition: number;
  xPosition: number;
  blur: number;
  scale: number;
  height: number;
}

interface BackgroundControlsProps {
  settings: BgSettings;
  onChange: (settings: BgSettings) => void;
  onReset: () => void;
}

export default function BackgroundControls({
  settings,
  onChange,
  onReset,
}: BackgroundControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showImageOnly, setShowImageOnly] = useState(false);

  const handleSliderChange = (key: keyof BgSettings, value: number) => {
    onChange({
      ...settings,
      [key]: value,
    });
  };

  // Toggle a temporary preview mode where we hide all elements except background
  const togglePreviewMode = () => {
    const isCurrentlyPreview = !showImageOnly;
    setShowImageOnly(isCurrentlyPreview);
    
    // Find all main container children except the background container and controls
    const mainWrapper = document.getElementById("root-container");
    if (mainWrapper) {
      Array.from(mainWrapper.children).forEach((child) => {
        const id = child.id;
        // Don't hide the background or the controls panel
        if (id !== "bg-controls-panel" && !child.classList.contains("pointer-events-none")) {
          if (isCurrentlyPreview) {
            child.classList.add("transition-opacity", "duration-500", "opacity-0", "pointer-events-none");
          } else {
            child.classList.remove("opacity-0", "pointer-events-none");
          }
        }
      });
    }
  };

  return (
    <div
      id="bg-controls-panel"
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 font-sans select-none"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-72 md:w-80 p-5 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-5 text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-zinc-300" />
                <span className="text-sm font-semibold tracking-wide">
                  Réglages de l'arrière-plan
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors border-none bg-transparent cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4">
              {/* Opacity */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-zinc-300 font-medium">
                  <span>Opacité</span>
                  <span>{settings.opacity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.opacity}
                  onChange={(e) => handleSliderChange("opacity", parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white [&::-webkit-slider-runnable-track]:bg-zinc-800 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>

              {/* Brightness */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-zinc-300 font-medium">
                  <span>Luminosité</span>
                  <span>{settings.brightness}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={settings.brightness}
                  onChange={(e) => handleSliderChange("brightness", parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white [&::-webkit-slider-runnable-track]:bg-zinc-800 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>

              {/* Y Position */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-zinc-300 font-medium">
                  <span>Position Y (Verticale)</span>
                  <span>{settings.yPosition}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.yPosition}
                  onChange={(e) => handleSliderChange("yPosition", parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white [&::-webkit-slider-runnable-track]:bg-zinc-800 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>

              {/* X Position */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-zinc-300 font-medium">
                  <span>Position X (Horizontale)</span>
                  <span>{settings.xPosition}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={settings.xPosition}
                  onChange={(e) => handleSliderChange("xPosition", parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white [&::-webkit-slider-runnable-track]:bg-zinc-800 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>

              {/* Scale / Zoom */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-zinc-300 font-medium">
                  <span>Taille de l'image (Zoom)</span>
                  <span>{settings.scale === 100 ? "Ajusté (Cover)" : `${settings.scale}%`}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="300"
                  value={settings.scale}
                  onChange={(e) => handleSliderChange("scale", parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white [&::-webkit-slider-runnable-track]:bg-zinc-800 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>

              {/* Height / Hauteur */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-zinc-300 font-medium">
                  <span>Hauteur d'arrière-plan (Haut)</span>
                  <span>{settings.height}vh</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={settings.height}
                  onChange={(e) => handleSliderChange("height", parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white [&::-webkit-slider-runnable-track]:bg-zinc-800 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>

              {/* Blur */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-zinc-300 font-medium">
                  <span>Effet de Flou (Blur)</span>
                  <span>{settings.blur}px</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={settings.blur}
                  onChange={(e) => handleSliderChange("blur", parseInt(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white [&::-webkit-slider-runnable-track]:bg-zinc-800 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                />
              </div>
            </div>

            {/* Actions Footer */}
            <div className="flex gap-2 border-t border-white/10 pt-3 mt-1">
              <button
                onClick={togglePreviewMode}
                className="flex-1 flex items-center justify-center gap-1.5 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-all border-none cursor-pointer"
                title={showImageOnly ? "Afficher le contenu" : "Masquer tout sauf l'arrière-plan"}
              >
                {showImageOnly ? (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>Voir Contenu</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>Mode Solo</span>
                  </>
                )}
              </button>

              <button
                onClick={onReset}
                className="flex items-center justify-center gap-1.5 h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-all border-none cursor-pointer"
                title="Réinitialiser"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => {
          if (showImageOnly) {
            togglePreviewMode();
          }
          setIsOpen(!isOpen);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 h-11 px-4 rounded-full border shadow-lg cursor-pointer transition-all ${
          isOpen
            ? "bg-white text-black border-white"
            : "bg-[#0d0d0d]/85 text-white border-white/10 hover:border-white/30 backdrop-blur-xl"
        }`}
        aria-label="Ajuster l'arrière-plan"
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="text-xs font-semibold tracking-wide">
          {isOpen ? "Fermer" : "Ajuster l'image"}
        </span>
      </motion.button>
    </div>
  );
}
