"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle premium backdrop (still a white page) */}
      <div className="absolute inset-0 tic-grid opacity-[0.35]" />
      <div
        className={cn(
          "absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full",
          "bg-[radial-gradient(circle,rgba(250,173,42,0.18)_0%,rgba(250,173,42,0)_55%)]",
        )}
        aria-hidden="true"
      />

      <div
        className={cn(
          "absolute -bottom-64 -right-30 w-175 h-175 rounded-full",
          "bg-[radial-gradient(circle,rgba(16,1,76,0.10)_0%,rgba(16,1,76,0)_60%)]",
        )}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-14 sm:pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-secondary/10 px-4 py-2">
            <span
              className="w-2 h-2 rounded-full bg-secondary"
              aria-hidden="true"
            />
            <span className="text-xs font-bold tracking-widest uppercase text-primary">
              Africa’s student innovation hub
            </span>
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Building real-world tech products with measurable impact
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-foreground/75 leading-relaxed text-pretty">
            Tech Innovation Club (TIC) at Pan-Atlantic University empowers
            students to bridge theory and practice, delivering solutions for
            real users, and driving innovation at scale. Our members ship
            portfolio-grade products, compete in national challenges, and launch
            initiatives that matter.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-secondary font-poppins text-secondary-foreground font-normal tracking-tight hover:brightness-[0.98] active:translate-y-px transition-all inline-flex items-center justify-center gap-2"
            >
              Partner with TIC
              <ArrowRight size={18} />
            </a>
            <a
              href="#wins"
              className="w-full sm:w-auto px-7 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors inline-flex items-center justify-center"
            >
              See the wins
            </a>
          </div>

          {/* Credibility strip */}
          <div className="mt-10 rounded-2xl border border-border bg-white/80 backdrop-blur tic-shadow">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                  Recent momentum
                </p>
                <p className="mt-2 text-3xl font-extrabold text-primary">3</p>
                <p className="mt-1 text-sm text-foreground/70">
                  major competition results in 3 months
                </p>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                  Flagship prize
                </p>
                <p className="mt-2 text-3xl font-extrabold text-primary">
                  $2,000
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  Lagos Impact Hackathon (UNILAG)
                </p>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                  Community scale
                </p>
                <p className="mt-2 text-3xl font-extrabold text-primary">
                  500+
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  builders across 7 tech streams
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-foreground/60">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> UNILAG
              Impact Hackathon
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Zenith
              Bank Zecathon
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" /> Venture
              Garden Group Hackathon
            </span>
          </div>

          <button
            onClick={() => scrollTo("wins")}
            className="mt-12 inline-flex items-center justify-center w-11 h-11 rounded-full border border-border bg-white hover:bg-muted transition-colors text-primary"
            aria-label="Scroll to wins section"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
