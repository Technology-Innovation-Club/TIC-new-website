"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, ArrowRight } from "lucide-react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

export default function ContactPage() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/company/technology-innovation-club/",
      description: "Connect with us professionally",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter size={24} />,
      href: "https://x.com/tic_pau/",
      description: "Follow our latest updates",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={24} />,
      href: "https://www.instagram.com/tic_pau/",
      description: "See our community in action",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      href: "https://github.com/Technology-Innovation-Club/",
      description: "Explore our open source projects",
    },
  ];

  const contactOptions = [
    {
      title: "Partner with TIC",
      description:
        "Sponsor hackathons, support MakerSpace labs, or host internship challenges with access to our talent pipeline.",
      cta: "Email partnerships",
      href: "mailto:tic@pau.edu.ng?subject=Partnership%20Inquiry",
    },
    {
      title: "Join as a Member",
      description:
        "PAU students can join any of our five technical streams to build real projects and compete in hackathons.",
      cta: "Apply to join",
      href: "mailto:tic@pau.edu.ng?subject=Membership%20Application",
    },
    {
      title: "Mentor with Us",
      description:
        "Industry professionals can mentor our student builders and share expertise in structured programmes.",
      cta: "Become a mentor",
      href: "mailto:tic@pau.edu.ng?subject=Mentorship%20Inquiry",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section className="w-full bg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-3xl">
                <p className="text-sm font-extrabold tracking-widest uppercase text-white/80">
                  Get in Touch
                </p>
                <h1 className="mt-4 text-5xl sm:text-6xl text-balance text-white">
                  Connect with TIC
                </h1>
                <p className="mt-5 text-lg text-white/80 leading-relaxed">
                  Whether you want to partner, join our community, or mentor the
                  next generation of tech builders, we would love to hear from
                  you.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl border border-secondary/25 bg-secondary/5 p-8 mb-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 grid place-items-center text-primary">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-primary/70">
                          Primary Contact
                        </p>
                        <p className="text-xl font-semibold text-primary font-poppins">
                          tic@pau.edu.ng
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-foreground/70 leading-relaxed max-w-xl">
                      For general inquiries, partnership proposals, or
                      membership applications, email us directly. We typically
                      respond within 48 hours.
                    </p>
                  </div>
                  <a
                    href="mailto:tic@pau.edu.ng"
                    className="px-7 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-[0.98] transition-colors inline-flex items-center justify-center gap-2 font-poppins shrink-0"
                  >
                    Send Email <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid md:grid-cols-3 gap-6 mb-12"
              staggerDelay={0.08}
            >
              {contactOptions.map((option) => (
                <StaggerItem key={option.title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-8 tic-shadow hover:-translate-y-1 transition-transform duration-200">
                    <h3 className="text-xl font-semibold text-primary font-poppins">
                      {option.title}
                    </h3>
                    <p className="mt-3 text-foreground/70 leading-relaxed">
                      {option.description}
                    </p>
                    <a
                      href={option.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group"
                    >
                      {option.cta}{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-card p-8 tic-shadow">
                <h2 className="text-2xl font-semibold text-primary font-poppins mb-6">
                  Follow Us
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-muted hover:bg-primary/5 hover:border-primary/20 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-background border border-border grid place-items-center text-foreground/70 group-hover:text-primary transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-primary font-poppins">
                          {social.name}
                        </p>
                        <p className="text-sm text-foreground/60">
                          {social.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-12 rounded-2xl border border-border bg-muted p-8">
                <p className="text-primary font-semibold font-poppins text-lg">
                  Visit Us
                </p>
                <p className="mt-2 text-foreground/70 leading-relaxed">
                  Tech Innovation Club operates from Pan-Atlantic University, Km
                  52 Lekki-Epe Expressway, Ibeju-Lekki, Lagos, Nigeria. Drop by
                  during our weekly sessions or reach out to schedule a visit.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
