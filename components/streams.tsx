"use client";

import {
  ArrowRight,
  BarChart3,
  Code2,
  Cpu,
  Gamepad2,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/motion";
import { Modal } from "./ui/modal";

interface Stream {
  name: string;
  head: string;
  description: string;
  icon: React.ReactNode;
  details: {
    overview: string;
    topics: string[];
    outcomes: string[];
  };
}

export function Streams() {
  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);

  const streams: Stream[] = [
    {
      name: "Web Development",
      head: "Oghenetejirin Owumi",
      description:
        "Modern web apps with React/Next.js, performance, and product-quality UI.",
      icon: <Code2 className="w-6 h-6" />,
      details: {
        overview:
          "The Web Development stream focuses on building scalable, performant, and accessible web applications. Members learn modern frontend frameworks, backend integration, and deployment pipelines.",
        topics: [
          "React & Next.js Ecosystem",
          "TypeScript & Type Safety",
          "Tailwind CSS & Design Systems",
          "API Integration & State Management",
          "Performance Optimization",
        ],
        outcomes: [
          "Build production-ready web applications",
          "Contribute to open-source projects",
          "Develop a portfolio of deployed sites",
        ],
      },
    },
    {
      name: "Data Science and AI",
      head: "Kenechukwu Justin-Ijeh and Ameerah Adisa",
      description:
        "Analytics, ML foundations, and applied AI projects that solve real problems.",
      icon: <BarChart3 className="w-6 h-6" />,
      details: {
        overview:
          "From data visualization to deploying machine learning models, this stream equips members with the skills to extract insights from data and build intelligent systems.",
        topics: [
          "Python for Data Science",
          "Exploratory Data Analysis",
          "Machine Learning Algorithms",
          "Deep Learning Foundations",
          "Model Deployment",
        ],
        outcomes: [
          "Analyze complex datasets",
          "Build and deploy ML models",
          "Participate in Kaggle competitions",
        ],
      },
    },
    {
      name: "Cybersecurity",
      head: "Kanayochukwu Onukwu",
      description:
        "Security fundamentals, secure engineering, and ethical hacking workflows.",
      icon: <Shield className="w-6 h-6" />,
      details: {
        overview:
          "Understanding how to protect systems is crucial. This stream covers offensive and defensive security, cryptography, and secure coding practices.",
        topics: [
          "Network Security",
          "Web Application Security",
          "Ethical Hacking & CTFs",
          "Cryptography Basics",
          "Security Compliance",
        ],
        outcomes: [
          "Identify and patch vulnerabilities",
          "Participate in CTF competitions",
          "Conduct security audits",
        ],
      },
    },
    {
      name: "Game Development",
      head: "Fawaz Salimanu",
      description:
        "Lively, production-ready, and well-crafted game experiences.",
      icon: <Gamepad2 className="w-6 h-6" />,
      details: {
        overview:
          "Game Dev stream members learn the art and science of game creation. We cover game engines, physics, graphics, and gameplay mechanics.",
        topics: [
          "Unity & C# Scripting",
          "Game Physics & Mechanics",
          "2D & 3D Asset Integration",
          "Level Design Principles",
          "Game Optimization",
        ],
        outcomes: [
          "Create playable game prototypes",
          "Publish games on itch.io",
          "Participate in Game Jams",
        ],
      },
    },
    {
      name: "Embedded Systems & Robotics",
      head: "Victor Braimah and Uchechukwu Nwafor",
      description: "IoT, automation, and practical robotics prototyping.",
      icon: <Cpu className="w-6 h-6" />,
      details: {
        overview:
          "Bridging software and hardware. Members design circuits, program microcontrollers, and build robots that interact with the physical world.",
        topics: [
          "Arduino & C++",
          "Circuit Design & PCB",
          "Sensors & Actuators",
          "IoT Communication Protocols",
          "Robotics Kinematics",
        ],
        outcomes: [
          "Build functional IoT devices",
          "Prototype autonomous robots",
          "Showcase hardware projects",
        ],
      },
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
              <article className="group rounded-2xl border border-border bg-white dark:bg-card p-8 tic-shadow h-full hover:-translate-y-1 transition-transform duration-200 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 grid place-items-center text-primary">
                    {stream.icon}
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-primary font-poppins">
                  {stream.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed flex-grow">
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
                  <button
                    onClick={() => setSelectedStream(stream)}
                    className="inline-flex items-center gap-1.5 text-primary font-bold text-sm cursor-pointer whitespace-nowrap hover:opacity-80 transition-opacity"
                  >
                    Learn more <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      <Modal
        isOpen={!!selectedStream}
        onClose={() => setSelectedStream(null)}
        title={selectedStream?.name}
      >
        {selectedStream && (
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              {selectedStream.details.overview}
            </p>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                What you'll learn
              </h4>
              <ul className="space-y-2">
                {selectedStream.details.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">
                Expected Outcomes
              </h4>
              <ul className="space-y-2">
                {selectedStream.details.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                Stream Lead
              </p>
              <p className="text-sm font-semibold text-primary font-poppins mt-1">
                {selectedStream.head}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
