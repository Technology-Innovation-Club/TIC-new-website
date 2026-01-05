"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { ImageLogo } from "./image-logo";
import { AnimatedSection } from "./ui/motion";

export function Footer() {
  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Media", href: "/media" },
    { label: "Programmes", href: "/programmes" },
    { label: "Partners", href: "/partners" },
  ];

  const communityLinks = [
    { label: "Partner / Sponsor", href: "/contact" },
    { label: "Mentor with TIC", href: "/contact" },
    { label: "Join TIC", href: "/contact" },
    { label: "Email", href: "mailto:tech.innovation.club@pau.edu.ng" },
  ];

  const socialLinks = [
    {
      icon: <Mail size={18} />,
      href: "mailto:tech.innovation.club@pau.edu.ng",
      label: "Email TIC",
    },
    {
      icon: <FaLinkedin size={18} />,
      href: "https://www.linkedin.com/company/technology-innovation-club/",
      label: "TIC LinkedIn",
    },
    {
      icon: <FaXTwitter size={18} />,
      href: "https://x.com/tic_pau/",
      label: "TIC Twitter/X",
    },
    {
      icon: <FaInstagram size={18} />,
      href: "https://www.instagram.com/tic_pau/",
      label: "TIC Instagram",
    },
    {
      icon: <FaGithub size={18} />,
      href: "https://github.com/Technology-Innovation-Club/",
      label: "TIC GitHub",
    },
  ];

  return (
    <footer className="w-full bg-card border-t border-border">
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
                    Pan-Atlantic University
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                Building Africa's next generation of world-class tech leaders
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
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
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
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4 font-poppins">
                Connect
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  tech.innovation.club@pau.edu.ng
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/55">
            {new Date().getFullYear()} Tech Innovation Club, Pan-Atlantic
            University. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/55">
            <Link
              href="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/partners"
              className="hover:text-primary transition-colors"
            >
              Partners
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
