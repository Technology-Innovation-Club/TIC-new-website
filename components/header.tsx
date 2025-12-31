"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Wins", href: "#wins" },
  { label: "Streams", href: "#streams" },
  { label: "Calendar", href: "#calendar" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = useMemo(
    () =>
      navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      )),
    [],
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#main" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-secondary/25 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-10 h-10 rounded-xl border border-border bg-white grid place-items-center">
                {/* Placeholder/logo slot */}
                <img
                  src="/tech-innovation-club-logo.jpg"
                  alt="Tech Innovation Club (TIC) logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
            </div>

            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">TIC</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Pan-Atlantic University
                </span>
              </div>
              <p className="text-xs text-foreground/60">Lagos, Nigeria</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-10">{links}</nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#wins"
              className="px-4 py-2 rounded-lg border border-border text-primary font-semibold hover:bg-muted transition-colors"
            >
              Explore wins
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-bold hover:brightness-[0.98] active:translate-y-px transition-all inline-flex items-center gap-2"
            >
              Partner / Join
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-primary hover:bg-muted transition-colors"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="rounded-xl border border-border bg-white tic-shadow animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-4 flex flex-col gap-4">{links}</div>
              <div className="px-4 pb-4 grid gap-3">
                <a
                  href="#wins"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-2 rounded-lg border border-border text-primary font-semibold hover:bg-muted transition-colors text-center"
                >
                  Explore wins
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-bold hover:brightness-[0.98] transition-colors text-center"
                >
                  Partner / Join
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
