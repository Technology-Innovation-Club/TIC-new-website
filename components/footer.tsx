"use client";

import { Linkedin, Mail, Twitter } from "lucide-react";
import { ImageLogo } from "./image-logo";
import { AnimatedSection } from "./ui/motion";

export function Footer() {
  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Wins", href: "#wins" },
    { label: "Programmes", href: "/programmes" },
    { label: "Partners", href: "/partners" },
  ];

  const communityLinks = [
    { label: "Partner / Sponsor", href: "#contact" },
    { label: "Mentor with TIC", href: "#contact" },
    { label: "Join TIC", href: "#contact" },
    { label: "Email", href: "mailto:tic@pau.edu.ng" },
  ];

  const socialLinks = [
    {
      icon: <Mail size={18} />,
      href: "mailto:tic@pau.edu.ng",
      label: "Email TIC",
    },
    { icon: <Linkedin size={18} />, href: "#", label: "TIC LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "TIC Twitter/X" },
  ];

  return (
    <footer className="w-full bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2">
                <ImageLogo />
                <div>
                  <p className="font-semibold text-primary font-poppins">
                    Tech Innovation Club
                  </p>
                  <p className="text-xs text-foreground/60">
                    Pan-Atlantic University • Lagos
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                Building Africa’s next generation of world-class tech leaders
                through real products, real wins, and real impact.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4 font-poppins">
                Quick links
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4 font-poppins">
                Community
              </h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                {communityLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4 font-poppins">
                Connect
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-xl border border-border bg-muted grid place-items-center text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-secondary/25 bg-secondary/10 p-4">
                <p className="text-xs font-semibold uppercase text-primary font-poppins">
                  Partner inbox
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  tic@pau.edu.ng
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/55">
            © 2025 Tech Innovation Club, Pan-Atlantic University. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/55">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
