"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { CountUp } from "./ui/motion";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 tic-grid opacity-[0.10]" />

      <div
        className={cn(
          "absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full animate-blob-slow",
          "bg-[radial-gradient(circle,rgba(250,173,42,0.14)_0%,rgba(250,173,42,0)_55%)]",
        )}
        aria-hidden="true"
      />

      <div
        className={cn(
          "absolute -bottom-64 -right-30 w-175 h-175 rounded-full animate-blob",
          "bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_60%)]",
        )}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2"
          >
            <span
              className="w-2 h-2 rounded-full bg-gold animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs font-bold tracking-widest uppercase text-white/90">
              Africa’s student innovation hub
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance text-white"
          >
            Building Africa’s Next Generation of World-Class Tech Leaders.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed text-pretty"
          >
            We build elite tech teams for companies and develop student builders
            through real projects, structured programmes, and competitive wins.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 active:translate-y-px transition-all inline-flex items-center justify-center gap-2"
            >
              Join the Community
              <ArrowRight size={18} />
            </a>
            <a
              href="#wins"
              className="w-full sm:w-auto px-7 py-3 rounded-xl border-2 border-white/70 text-white font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              See the wins
            </a>
          </motion.div>

          {/* Credibility strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Active members
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white">
                  <CountUp target={100} suffix="+" />
                </p>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Live projects
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white">
                  <CountUp target={10} suffix="+" />
                </p>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                  Won in prizes
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white">
                  $<CountUp target={14000} suffix="+" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Competition badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/70"
          >
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 100+ Active
              Members
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> 10+ Live
              Projects
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" /> $14,000+ Won
              in Prizes
            </span>
          </motion.div>

          {/* Scroll button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            onClick={() => scrollTo("wins")}
            className="mt-12 inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/20 bg-white/10 hover:bg-white/15 transition-colors text-white"
            aria-label="Scroll to wins section"
          >
            <ChevronDown size={20} className="animate-bounce" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
