"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./ui/motion";
import { StackedCards } from "./ui/stacked-cards";

interface Programme {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  tags: string[];
}

export function Programmes() {
  const programmes: Programme[] = [
    {
      name: "CodeSpark",
      description:
        "Fast-paced build sprints that improve speed, discipline, and product delivery.",
      image: {
        src: "/programmes/codespark.jpg",
        alt: "CodeSpark programme placeholder",
      },
      tags: ["Build sprint", "Mentors", "Demo-ready output"],
    },
    /* {
      name: "MakerSpace",
      description:
        "Hands-on prototyping for embedded systems, robotics, and practical hardware builds.",
      image: {
        src: "/programmes/makerspace.jpg",
        alt: "MakerSpace programme placeholder",
      },
      tags: ["Hardware", "Prototyping", "Robotics"],
    }, */
    {
      name: "Demo Day",
      description:
        "A showcase where teams pitch, demo, and get feedback from operators and partners.",
      image: {
        src: "/programmes/demo-day.jpg",
        alt: "Demo Day programme placeholder",
      },
      tags: ["Showcase", "Feedback", "Partner-facing"],
    },
    {
      name: "AI/ML Lab",
      description:
        "Applied AI learning and project execution focused on real use-cases and portfolios.",
      image: {
        src: "/programmes/ai-ml-lab.jpg",
        alt: "AI/ML Lab programme placeholder",
      },
      tags: ["Applied AI", "Projects", "Portfolio"],
    },
    {
      name: "TIC Week",
      description:
        "A high-energy week of talks, workshops, and builds that expands the community.",
      image: {
        src: "/programmes/tic-week.jpg",
        alt: "TIC Week programme placeholder",
      },
      tags: ["Workshops", "Community", "Momentum"],
    },
  ];

  return (
    <section id="programmes" className="w-full bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold tracking-widest text-primary uppercase">
                Programmes
              </p>
              <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
                Structured for real delivery
              </h2>
              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                Each programme is designed to produce shipped work, stronger
                portfolios, and reliable execution habits.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/programmes"
                className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-[0.98] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                See more programmes <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <StackedCards
        items={programmes}
        className="px-4 sm:px-6 lg:px-8"
        stageClassName="max-w-5xl mx-auto"
        topOffset={96}
        peek={18}
        vhPerCard={95}
        renderCard={(programme) => (
          <article className="relative rounded-2xl border border-border bg-white dark:bg-card p-8 tic-shadow shadow-xl">
            <div
              className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gold/70"
              aria-hidden="true"
            />

            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-primary font-poppins">
                  {programme.name}
                </h3>
                <p className="mt-4 text-foreground/75 leading-relaxed">
                  {programme.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {programme.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/programmes"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group"
                >
                  Explore programme details{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border bg-muted h-full min-h-[300px]">
                <div className="relative h-full w-full min-h-[300px]">
                  <Image
                    src={programme.image.src}
                    alt={programme.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </div>
            </div>
          </article>
        )}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection>
          <div className="rounded-2xl border border-border bg-muted p-8">
            <p className="text-primary font-semibold font-poppins text-lg">
              Built for repeatability
            </p>
            <p className="mt-2 text-foreground/70 leading-relaxed">
              We keep the standard high and the feedback loop tight. Students
              learn to deliver like a product team.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
