"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ImageLogo } from "./image-logo";
import { ModeToggle } from "./mode-toggle";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Media", href: "/media" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = useMemo(
    () =>
      navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-sm font-semibold text-foreground/80 font-poppins relative group"
        >
          {item.label}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </Link>
      )),
    [],
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`sticky top-0 z-50 w-full backdrop-blur border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/95 border-border shadow-sm"
          : "bg-background/85 border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-secondary/25 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
              <ImageLogo className="w-10 h-10" />
            </div>

            <div className="leading-tight">
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary font-poppins">TIC</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
                  Pan-Atlantic University
                </span>
              </div>
              <p className="text-xs text-foreground/60">Lagos, Nigeria</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">{links}</nav>

          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <Link
              href="/media"
              className="px-4 py-2 rounded-lg border border-border text-primary font-semibold hover:bg-muted transition-colors"
            >
              Explore wins
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:brightness-[0.98] active:translate-y-px transition-all inline-flex items-center gap-2 font-poppins"
            >
              Partner / Join
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <button
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border text-primary hover:bg-muted transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="rounded-xl border border-border bg-card tic-shadow">
                <div className="px-4 py-4 flex flex-col gap-4">{links}</div>
                <div className="px-4 pb-4 grid gap-3">
                  <Link
                    href="/media"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-2 rounded-lg border border-border text-primary font-semibold hover:bg-muted transition-colors text-center"
                  >
                    Explore wins
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-bold hover:brightness-[0.98] transition-colors text-center"
                  >
                    Partner / Join
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
