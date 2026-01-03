"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/motion";

export function Partners() {
  const partners = [
    "NVIDIA",
    "ServiceNow",
    "Cloudplexo",
    "AWS",
    "Zenith Bank",
    "NoOnes",
  ];

  return (
    <section
      id="partners"
      className="w-full bg-primary dark:bg-background text-white dark:text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold tracking-widest uppercase text-white/80 dark:text-foreground/80">
                Partners
              </p>
              <h2 className="mt-4 text-5xl sm:text-6xl text-balance text-white dark:text-foreground">
                Backed by leaders who value execution
              </h2>
              <p className="mt-5 text-lg text-white/80 dark:text-foreground/80 leading-relaxed">
                Here are some top Companies and organizations currently
                supporting our mission:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/partners"
                className="px-6 py-3 rounded-xl bg-white dark:bg-card text-primary dark:text-card-foreground font-semibold hover:bg-white/90 dark:hover:bg-card/90 transition-colors text-center"
              >
                View full partner list
              </a>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          staggerDelay={0.06}
        >
          {partners.map((name) => (
            <StaggerItem key={name}>
              <div className="rounded-2xl border border-white/15 bg-white/10 dark:bg-muted p-5 text-center hover:bg-white/15 dark:hover:bg-muted/80 transition-colors">
                <p className="text-sm font-semibold text-white/90 dark:text-foreground/90">
                  {name}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 rounded-2xl border border-white/15 bg-white/10 dark:bg-muted p-8">
          <p className="text-white/85 dark:text-foreground/85 font-semibold">
            Partner value
          </p>
          <p className="mt-2 text-white/80 dark:text-foreground/80 leading-relaxed">
            Access top 1% student builders, showcase your brand to a high-signal
            campus audience, and align your support with measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
