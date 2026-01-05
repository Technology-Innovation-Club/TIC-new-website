"use client";

import { Lightbulb, Star, Target, Users, Zap } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/motion";

interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Values() {
  const values: Value[] = [
    {
      title: "Innovation",
      description: "Build, experiment, break boundaries.",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      title: "Collaboration",
      description: "Multidisciplinary teamwork across faculties.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Excellence",
      description: "High standards in craft, delivery, and integrity.",
      icon: <Star className="w-5 h-5" />,
    },
    {
      title: "Ownership",
      description: "Everyone leads something meaningful.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Impact",
      description: "Real solutions for real users, measured by outcomes.",
      icon: <Zap className="w-5 h-5" />,
    },
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
              Core Principles
            </p>
            <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
              What drives our impact
            </h2>
            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
              These principles guide our approach to innovation, collaboration,
              and leadership, ensuring every project delivers real value and
              measurable outcomes.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="mt-14 grid md:grid-cols-5 gap-5"
          staggerDelay={0.06}
        >
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <div className="rounded-2xl border border-border bg-white dark:bg-card p-7 text-center tic-shadow font-poppins h-full hover:-translate-y-1 transition-transform duration-200">
                <div className="mx-auto w-12 h-12 rounded-2xl bg-secondary/15 border border-secondary/25 grid place-items-center text-primary">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-lg font-normal text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
