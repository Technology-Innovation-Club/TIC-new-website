"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Globe, Rocket, Users } from "lucide-react";
import { SlideIn, StaggerContainer, StaggerItem } from "./ui/motion";

interface Objective {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Objectives() {
  const objectives: Objective[] = [
    {
      title: "Experiential learning",
      description:
        "Students apply classroom knowledge to real builds. Projects are scoped, shipped, reviewed, and demoed.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Career readiness",
      description:
        "Portfolios, mentorship, and product experience that translates directly to internships and roles.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "Global positioning",
      description:
        "Compete nationally and internationally. Build confidence and proof points that travel globally.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Multidisciplinary community",
      description:
        "Teams blend engineering, design, and business. This is how the best products are actually built.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="outcomes"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-muted/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SlideIn direction="left">
            <div>
              <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
                Outcomes
              </p>
              <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
                What members gain
              </h2>
              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                Career readiness, credible portfolios, and the confidence that
                comes from building under real constraints.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-[0.98] transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  Join the Community <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors text-center"
                >
                  Explore our Streams
                </Link>
              </div>

              <div className="mt-8 rounded-2xl border border-secondary/25 bg-secondary/10 p-7">
                <p className="text-sm font-semibold text-primary font-poppins">
                  Leaders & partners care about one thing:
                </p>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  can the team deliver outcomes repeatedly? TICs structure
                  optimizes for repeatable execution.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:underline group"
                >
                  Support the pipeline{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </SlideIn>

          <StaggerContainer
            className="grid sm:grid-cols-2 gap-5"
            staggerDelay={0.08}
          >
            {objectives.map((objective) => (
              <StaggerItem key={objective.title}>
                <div className="rounded-2xl border border-border bg-white dark:bg-card p-7 tic-shadow h-full hover:-translate-y-1 transition-transform duration-200">
                  <div className="w-11 h-11 rounded-2xl bg-primary/5 border border-border grid place-items-center text-primary">
                    {objective.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary font-poppins">
                    {objective.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
