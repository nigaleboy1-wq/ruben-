/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function ClientLogos() {
  const logos = [
    {
      name: "Stripe",
      svg: (
        <svg className="h-6 w-auto fill-current" viewBox="0 0 80 33" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.4 14.3c0-3-2.1-4.8-5.8-4.8-3.9 0-6.1 2-6.1 5.3 0 5 6.9 4.2 6.9 6.8 0 1-.9 1.6-2.2 1.6-1.8 0-3.3-.8-3.3-2.3h-4.9c0 3.8 2.9 5.8 8.1 5.8 4.1 0 7.2-1.9 7.2-5.4.1-5-6.9-4-6.9-6.7 0-.9.8-1.5 2.1-1.5 1.5 0 2.9.6 2.9 1.9l4.1.3zm12.3-4.5c-2.4 0-4 1.3-4.8 2.6V10H44v18.2h5V16.1c0-1.8 1.1-2.9 2.8-2.9.2 0 .5 0 .7.1V9.9c-.3-.1-.7-.1-1.1-.1zM11.6 14.3c0-3-2.1-4.8-5.8-4.8C1.9 9.5-.3 11.5-.3 14.8c0 5 6.9 4.2 6.9 6.8 0 1-.9 1.6-2.2 1.6-1.8 0-3.3-.8-3.3-2.3H-3.8c0 3.8 2.9 5.8 8.1 5.8 4.1 0 7.2-1.9 7.2-5.4.1-5-6.9-4-6.9-6.7 0-.9.8-1.5 2.1-1.5 1.5 0 2.9.6 2.9 1.9l4.1.3zm13.1-9.9L19.8 6v4h-3.1v3.9h3.1v8.8c0 3.5 1.9 5.1 5.3 5.1 1.2 0 2.1-.2 2.7-.4V23c-.4.2-1 .3-1.6.3-1.5 0-2.2-.7-2.2-2.5V13.9h3.8V10h-3.8V4.4zM56.4 4.5c-1.6 0-2.8 1.2-2.8 2.8 0 1.6 1.2 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8.1-1.6-1.1-2.8-2.8-2.8zm-2.5 5.5h5V28.2h-5V10zM68.5 9.5c-2.7 0-4.6 1.4-5.3 2.9h-.1V10H58.2v24.2h5V23.7c.7 1.3 2.6 2.5 5.3 2.5 4.5 0 8.1-3.6 8.1-8.3s-3.6-8.4-8.1-8.4zm-.9 12.8c-2.5 0-4.4-1.9-4.4-4.5s1.9-4.5 4.4-4.5c2.5 0 4.4 1.9 4.4 4.5s-1.9 4.5-4.4 4.5z" />
        </svg>
      ),
    },
    {
      name: "Linear",
      svg: (
        <svg className="h-5 w-auto fill-current" viewBox="0 0 100 22" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.5 2.5C6.98 2.5 2.5 6.98 2.5 12.5S6.98 22.5 12.5 22.5 22.5 18.02 22.5 12.5 18.02 2.5 12.5 2.5zm0 17c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm22.5-13.5h-9v13h9v-2h-7V8h7V6zm14.5 13V6h-2v13h2zm12.5-13h-4.5V19h2V11.5c0-1.93 1.57-3.5 3.5-3.5.25 0 .5.03.75.09l.25-1.94c-.33-.1-.66-.15-1-.15zm16 4.5c-2.48 0-4.5 2.02-4.5 4.5V19h2v-3.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V19h2v-4.5c0-2.48-2.02-4.5-4.5-4.5z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      svg: (
        <svg className="h-[18px] w-auto fill-current" viewBox="0 0 116 26" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.2 2l12.2 21H0L12.2 2zm25.8 4.3h3.4l3.5 10.6 3.5-10.6h3.4l-5.3 15.1h-3.2l-5.3-15.1zm22.2 5.5c0-3.5 2.6-5.8 6-5.8 3.3 0 5.8 2.2 5.8 5.6v1h-8.8c.2 2.2 1.7 3.4 3.7 3.4 1.4 0 2.5-.6 2.9-1.5h3c-.7 2.4-2.8 3.8-5.9 3.8-4 0-6.7-2.7-6.7-6.5zm8.8-1.2c0-1.7-1-2.7-2.8-2.7s-2.8 1-3 2.7h5.8zm11 1.2c0-3.5 2.1-5.8 5-5.8 1.7 0 2.9.8 3.4 1.8V6.5h3v15.1h-3v-1.1c-.5 1-1.7 1.8-3.4 1.8-2.9 0-5-2.3-5-5.8zm8.4 0c0-2.2-1.3-3.6-3.2-3.6s-3.2 1.4-3.2 3.6 1.3 3.6 3.2 3.6 3.2-1.4 3.2-3.6zm13.1-5.5h3v1.6c.7-1.1 2.1-1.9 3.8-1.9 1 0 1.8.2 2.4.7l-1.1 2.7c-.5-.4-1.1-.6-1.9-.6-2.1 0-3.2 1.5-3.2 3.6v9h-3V6.5z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      svg: (
        <svg className="h-[22px] w-auto fill-current" viewBox="0 0 72 26" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 0C4.36 0 1 3.36 1 7.5s3.36 7.5 7.5 7.5c2.1 0 4-.86 5.37-2.26L13.87 23.5c0 4.14-3.36 7.5-7.5 7.5S-1.13 27.64-1.13 23.5H3.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5V14.13c-1.37 1.4-3.27 2.26-5.37 2.26C4.36 16.39 1 13.03 1 8.89s3.36-7.5 7.5-7.5c2.1 0 4 .86 5.37 2.26V2.26C12.5.86 10.6 0 8.5 0z M22.5 0h-9v15h9V0zm13.5 0h-9v15h9V0zm13.5 0h-9v15h9V0z" />
          <span className="ml-1 text-[13px] font-bold tracking-widest uppercase">FIGMA</span>
        </svg>
      ),
    },
    {
      name: "Framer",
      svg: (
        <svg className="h-5 w-auto fill-current" viewBox="0 0 100 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0h12v12H12zm0 12h12v12l-12-12zM0 12h12v12H0zm0 0l12-12v12z" />
          <span className="ml-[14px] text-[14px] font-bold tracking-widest uppercase">FRAMER</span>
        </svg>
      ),
    },
  ];

  // Duplicate the logos to ensure seamless continuous scrolling
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <motion.div
      id="logos-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.0,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col items-center justify-center gap-5 w-full overflow-hidden"
    >
      {/* Small subtle label */}
      <span className="text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase text-center px-4">
        Fidélisé par les leaders de l'industrie
      </span>

      {/* Logos Infinite Marquee Wrapper */}
      <div className="relative w-full overflow-hidden py-3 select-none">
        {/* Soft fade gradients on left and right edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080c16] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080c16] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee gap-16 md:gap-24 items-center">
          {marqueeLogos.map((logo, idx) => (
            <div
              id={`logo-item-${idx}`}
              key={idx}
              className="flex items-center text-white/40 hover:text-white transition-colors duration-300 cursor-pointer shrink-0"
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </motion.div>
  );
}
