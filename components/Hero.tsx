"use client";

import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  institution: string;
  tagline: string;
}

export default function Hero({ name, title, institution, tagline }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-indigo-deep">
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid-light" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-light/30 rounded-full blur-3xl" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-white/5" />
      <div className="absolute top-0 left-2/4 w-px h-full bg-white/5" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-white/5" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="inline-block mb-6">
            <span className="text-amber-light font-medium text-sm tracking-[0.2em] uppercase">
              Quantitative Marketing Research
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {name || "Soniya Gupta-Rawal"}
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg md:text-xl mb-4 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title || "Researcher"}{institution ? ` — ${institution}` : ""}
        </motion.p>

        <motion.p
          className="text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {tagline ||
            "Finding potential in percentages. Identifying narratives behind numbers."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#publications"
            className="px-6 py-3 bg-amber text-white font-medium rounded-full hover:bg-amber-light transition-colors text-sm"
          >
            View Research
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 text-white/80 font-medium rounded-full hover:bg-white/10 transition-colors text-sm"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
