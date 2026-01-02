"use client";

import {
  ArrowRight,
  BarChart3,
  Code2,
  Cpu,
  Gamepad2,
  Shield,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/motion";

interface Stream {
  name: string;
  head: string;
  description: string;
  icon: React.ReactNode;
}

export function Streams() {
  const streams: Stream[] = [
    {
      name: "Web Development",
      head: "Oghenetejirin Owumi",
      description:
        "Modern web apps with React/Next.js, performance, and product-quality UI.",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      name: "Data Science and AI",
      head: "Kenechukwu Justin-Ijeh and Ameerah Adisa",
      description:
        "Analytics, ML foundations, and applied AI projects that solve real problems.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      name: "Cybersecurity",
      head: "Kanayochukwu Onukwu",
      description:
        "Security fundamentals, secure engineering, and ethical hacking workflows.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: "Game Development",
      head: "Fawaz Salimanu",
      description:
        "Lively, production-ready, and well-crafted game experiences.",
      icon: <Gamepad2 className="w-6 h-6" />,
    },
    {
      name: "Embedded Systems & Robotics",
      head: "Victor Braimah and Uchechukwu Nwafor",
      description:
        "IoT, automation, and practical robotics prototyping in MakerSpace labs.",
      icon: <Cpu className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="streams"
      className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
              About
            </p>
            <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
              Streams built for execution
            </h2>
            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
              Streams are where members grow their craft through projects,
              mentorship, and standards-driven delivery.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.06}
        >
          {streams.map((stream) => (
            <StaggerItem key={stream.name}>
              <article className="group rounded-2xl border border-border bg-card p-8 tic-shadow h-full hover:-translate-y-1 transition-transform duration-200">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 grid place-items-center text-primary">
                    {stream.icon}
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-primary font-poppins">
                  {stream.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {stream.description}
                </p>

                <div className="mt-7 pt-6 border-t border-border flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-foreground/50">
                      Stream lead
                    </p>
                    <p className="mt-1 text-sm font-semibold text-primary font-poppins">
                      {stream.head}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={16} />
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
