"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Streams } from "@/components/streams";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

interface Executive {
  name: string;
  role: string;
  linkedin: string;
  image: string;
}

export default function AboutPage() {
  // TODO: Add Kenechuckwu's images when ready
  const executives: Executive[] = [
    {
      name: "Prosperity Olorunfemi",
      role: "President",
      linkedin: "https://www.linkedin.com/in/prosperityolorunfemi/",
      image: "/excos/prosperity-olorunfemi.webp",
    },
    {
      name: "Omotayo Ayeni",
      role: "Vice President",
      linkedin: "https://www.linkedin.com/in/omotayo-ayeni-803a30294/",
      image: "/excos/omotayo-ayeni.webp",
    },
    {
      name: "Bernice Awodeyi",
      role: "Project Manager",
      linkedin: "https://www.linkedin.com/in/bernice-awodeyi/",
      image: "/excos/bernice-awodeyi.webp",
    },
    {
      name: "Louisa Ememandu",
      role: "Deputy Project Manager",
      linkedin: "https://www.linkedin.com/in/louisa-ememandu/",
      image: "/excos/louisa-ememandu.webp",
    },
    {
      name: "Jason Nwaeze",
      role: "External Relations & Partnerships Manager",
      linkedin: "https://www.linkedin.com/in/jacey77n/",
      image: "/excos/jason-nwaeze.webp",
    },
    {
      name: "Munachiso Henry Chika-Ekweghariri",
      role: "Protocol Officer",
      linkedin: "https://www.linkedin.com/in/munachisoekweghariri/",
      image: "/excos/munachim.webp",
    },
    {
      name: "Kamdilichukwu Bobby-Umeano",
      role: "Media Lead",
      linkedin: "https://www.linkedin.com/in/kamdilichukwu-b-77b6a4335/",
      image: "/excos/kamdi.webp",
    },
    {
      name: "Abasiono Mbat",
      role: "Software Lead",
      linkedin: "https://www.linkedin.com/in/abasionombat/",
      image: "/excos/abasiono-mbat.webp",
    },
    {
      name: "Tobani Esan-George",
      role: "Software Advisory/Consultant",
      linkedin: "https://www.linkedin.com/in/tobani-esan-george/",
      image: "/excos/tobani-esan-george.webp",
    },
    {
      name: "Ameerah Adisa",
      role: "Data Science and AI Co-Lead",
      linkedin: "https://www.linkedin.com/in/ameerah-adisa-oladapo/",
      image: "/excos/ameerah-adisa.webp",
    },
    {
      name: "Kanayochukwu Onukwu",
      role: "Cyber-Security Stream Lead",
      linkedin: "https://www.linkedin.com/in/kanayochukwu-onukwu-14b409320/",
      image: "/excos/kanayochukwu-onukwu.webp",
    },
    {
      name: "Fawaz Salimanu",
      role: "Game Dev Stream Lead",
      linkedin: "https://www.linkedin.com/in/fawaz-salimanu-12a147386/",
      image: "/excos/fawaz-salimanu.webp",
    },
    {
      name: "Uchechukwu Nwafor",
      role: "Robotics & Embedded Systems Co-Lead",
      linkedin: "https://www.linkedin.com/in/uchechukwu-nwafor-264160331/",
      image: "/excos/uchechukwu-nwafor.webp",
    },
    {
      name: "Owumi Oghenetejirin",
      role: "Web Dev Stream Lead",
      linkedin: "https://www.linkedin.com/in/owumi-o-0b586233a/",
      image: "/excos/oghenetejirin-owumi.webp",
    },
    {
      name: "Victor Braimah",
      role: "Robotics & Embedded Systems Co-Lead",
      linkedin: "https://www.linkedin.com/in/victor-braimah-874a4b289/",
      image: "/excos/victor-braimah.webp",
    },
    // TODO: Verify and update Kenechukwu's Linkedin profile URL
    {
      name: "Kenechukwu Justin-Ijeh",
      role: "Data Science and AI Co-Lead",
      linkedin: "https://www.linkedin.com/in/kenechukwu-justin-ijeh/",
      image: "/excos/kenechukwu-justin-ijeh.webp",
    },
  ];

  const leadershipTeam = executives.slice(0, 7);
  const streamLeads = executives.slice(7);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        {/* Hero Section */}
        <section className="w-full bg-primary dark:bg-background text-white dark:text-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-3xl">
                <p className="text-sm font-extrabold tracking-widest uppercase text-white/80 dark:text-foreground/80">
                  About TIC
                </p>
                <h1 className="mt-4 text-5xl sm:text-6xl text-balance text-white dark:text-foreground">
                  Building Africa's Tech Future
                </h1>
                <p className="mt-5 text-lg text-white/80 dark:text-foreground/80 leading-relaxed">
                  Tech Innovation Club (TIC) is Pan-Atlantic University's
                  student-led innovation hub. We develop world-class tech talent
                  through hands-on projects, competitive hackathons, and
                  structured mentorship.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-semibold text-primary font-poppins">
                    Our Mission
                  </h2>
                  <p className="mt-4 text-foreground/70 leading-relaxed">
                    We exist to bridge the gap between academic learning and
                    industry-ready execution. Through our five technical
                    streams, students gain practical experience building real
                    products that solve real problems.
                  </p>
                  <p className="mt-4 text-foreground/70 leading-relaxed">
                    Our members do not just learn theory; they ship code, win
                    hackathons, and develop portfolios that demonstrate genuine
                    capability.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-8 tic-shadow">
                  <h3 className="text-xl font-semibold text-primary font-poppins">
                    By the Numbers
                  </h3>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl font-bold text-primary">100+</p>
                      <p className="text-sm text-foreground/70">
                        Active members
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">5</p>
                      <p className="text-sm text-foreground/70">
                        Technical streams
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">
                        $14,000+
                      </p>
                      <p className="text-sm text-foreground/70">
                        Won in prizes
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">10+</p>
                      <p className="text-sm text-foreground/70">
                        Live projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Streams Section */}
        <Streams />

        {/* Executive Team Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="max-w-3xl mb-12">
                <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
                  Leadership
                </p>
                <h2 className="mt-4 text-4xl sm:text-5xl text-balance font-semibold text-primary font-poppins">
                  Meet Our Executive Team
                </h2>
                <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                  The student leaders driving TIC's mission to build world-class
                  tech talent at Pan-Atlantic University.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h3 className="text-xl font-semibold text-primary font-poppins mb-6">
                Core Leadership
              </h3>
            </AnimatedSection>

            <StaggerContainer
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              staggerDelay={0.06}
            >
              {leadershipTeam.map((exec) => (
                <StaggerItem key={exec.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border bg-background p-6 tic-shadow transition-shadow hover:shadow-lg h-full flex flex-col"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border bg-muted relative mx-auto shrink-0">
                      <Image
                        src={exec.image}
                        alt={exec.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="mt-4 text-center flex-1 flex flex-col">
                      <p className="font-semibold text-primary font-poppins min-h-[3rem] flex items-center justify-center">
                        {exec.name}
                      </p>
                      <p className="mt-1 text-sm text-foreground/70 min-h-[2.5rem]">
                        {exec.role}
                      </p>
                      <div className="mt-auto pt-3">
                        <a
                          href={exec.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border bg-muted text-foreground/60 hover:text-primary hover:bg-primary/5 transition-colors"
                          aria-label={`${exec.name}'s LinkedIn`}
                        >
                          <FaLinkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.2}>
              <h3 className="text-xl font-semibold text-primary font-poppins mb-6">
                Stream Leads and Technical Team
              </h3>
            </AnimatedSection>

            <StaggerContainer
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              staggerDelay={0.06}
            >
              {streamLeads.map((exec) => (
                <StaggerItem key={exec.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border bg-background p-6 tic-shadow transition-shadow hover:shadow-lg h-full flex flex-col"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border bg-muted relative mx-auto shrink-0">
                      <Image
                        src={exec.image}
                        alt={exec.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="mt-4 text-center flex-1 flex flex-col">
                      <p className="font-semibold text-primary font-poppins min-h-[3rem] flex items-center justify-center">
                        {exec.name}
                      </p>
                      <p className="mt-1 text-sm text-foreground/70 min-h-[2.5rem]">
                        {exec.role}
                      </p>
                      <div className="mt-auto pt-3">
                        <a
                          href={exec.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border bg-muted text-foreground/60 hover:text-primary hover:bg-primary/5 transition-colors"
                          aria-label={`${exec.name}'s LinkedIn`}
                        >
                          <FaLinkedin size={16} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-background text-white dark:text-foreground">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-white dark:text-foreground font-poppins">
                  Ready to Join TIC?
                </h2>
                <p className="mt-4 text-white/80 dark:text-foreground/80 max-w-2xl mx-auto">
                  Whether you want to build projects, compete in hackathons, or
                  develop your technical skills, TIC is the place to grow.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-7 py-3 rounded-xl bg-white dark:bg-primary text-primary dark:text-primary-foreground font-semibold hover:bg-white/90 dark:hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                  >
                    Get in Touch <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/programmes"
                    className="px-7 py-3 rounded-xl border-2 border-white/70 dark:border-white/20 text-white dark:text-foreground font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                  >
                    Explore Programmes
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
