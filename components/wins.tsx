"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./ui/motion";
import { StackedCards } from "./ui/stacked-cards";

export function Wins() {
  const wins = [
    {
      eyebrow: "Zenith Bank Zecathon",
      title: "₦10M",
      description:
        "A national-stage performance that proved our teams can deliver under pressure.",
      pills: [
        "National stage",
        "High-signal judging",
        "Execution under pressure",
      ],
      metrics: [
        { k: "Prize", v: "₦10M" },
        { k: "Partner", v: "Zenith Bank" },
        { k: "Result", v: "Top finish" },
      ],
      featured: true,
      image: {
        src: "/wins/zenith-zecathon.jpg",
        alt: "Zenith Bank Zecathon win placeholder",
      },
    },
    {
      eyebrow: "Payaza Hackathon",
      title: "$5,000",
      description:
        "A cash prize win that shows our builders can compete and execute with speed.",
      pills: ["Product delivery", "Pitch clarity", "Competitive execution"],
      metrics: [
        { k: "Prize", v: "$5,000" },
        { k: "Partner", v: "Payaza" },
        { k: "Result", v: "Win" },
      ],
      image: {
        src: "/wins/payaza-5000.jpg",
        alt: "Payaza hackathon win placeholder",
      },
    },
    {
      eyebrow: "Lagos Impact Hackathon",
      title: "SupaMart",
      description:
        "Built SupaMart, an offline-first POS and inventory system designed for real retail conditions.",
      pills: ["Offline-first", "POS and Inventory", "Built for SMBs"],
      metrics: [
        { k: "Result", v: "Impact" },
        { k: "Product", v: "SupaMart" },
        { k: "Signal", v: "Real constraints" },
      ],
      image: {
        src: "/wins/lagos-impact-supamart.jpg",
        alt: "Lagos Impact SupaMart placeholder",
      },
    },
    {
      eyebrow: "PowerTech Hackathon",
      title: "Pius",
      description:
        "A build that demonstrates our ability to prototype and ship under competition timelines.",
      pills: ["Prototyping", "Team execution", "Demo-ready delivery"],
      metrics: [
        { k: "Product", v: "Pius" },
        { k: "Result", v: "Recognition" },
        { k: "Signal", v: "Repeatable output" },
      ],
      image: {
        src: "/wins/powertech-pius.jpg",
        alt: "PowerTech Pius placeholder",
      },
    },
  ];

  return (
    <section
      id="wins"
      className="w-full bg-primary dark:bg-background text-white dark:text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold tracking-widest text-white/80 dark:text-foreground/80 uppercase">
              Credibility, demonstrated
            </p>
            <h2 className="mt-4 text-5xl sm:text-6xl text-balance text-white dark:text-foreground">
              From campus builds to competitive wins
            </h2>
            <p className="mt-5 text-lg text-white/80 dark:text-foreground/80 leading-relaxed">
              These wins are proof points judged under real pressure, by real
              evaluators.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <StackedCards
        items={wins}
        className="px-4 sm:px-6 lg:px-8"
        stageClassName="max-w-5xl mx-auto"
        topOffset={96}
        peek={18}
        vhPerCard={95}
        renderCard={(win) => (
          <article
            className={[
              "relative rounded-2xl border border-white/20 dark:border-border bg-[#1a0a5c] dark:bg-card p-8 tic-shadow",
              "hover:bg-[#1f0d66] dark:hover:bg-accent/5 transition-colors",
              win.featured ? "ring-1 ring-white/20 dark:ring-border" : "",
            ].join(" ")}
          >
            <div
              className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gold/90"
              aria-hidden="true"
            />

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-white/70 dark:text-foreground/70">
                  {win.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white dark:text-primary font-poppins">
                  {win.title}
                </h3>
                <p className="mt-4 text-white/80 dark:text-foreground/80 leading-relaxed">
                  {win.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {win.pills.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center rounded-full border border-white/15 dark:border-border bg-black/10 dark:bg-muted px-3 py-1 text-xs font-semibold text-white/75 dark:text-foreground/70"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <div className="mt-7 pt-6 border-t border-white/15 dark:border-border grid grid-cols-3 gap-4">
                  {win.metrics.map((m) => (
                    <div key={m.k}>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 dark:text-foreground/60">
                        {m.k}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white dark:text-foreground font-poppins">
                        {m.v}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white dark:text-primary hover:underline group"
                >
                  Sponsor the next cohort{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 dark:border-border bg-black/10 dark:bg-muted">
                <div className="aspect-4/3 w-full relative">
                  <Image
                    src={win.image.src}
                    alt={win.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </div>
          </article>
        )}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection>
          <div className="rounded-2xl border border-white/15 dark:border-border bg-white/10 dark:bg-muted/50 p-8 hover:bg-white/12 dark:hover:bg-muted transition-colors">
            <p className="text-white dark:text-primary font-semibold font-poppins text-lg">
              For partners and global leaders:
            </p>
            <p className="mt-2 text-white/80 dark:text-foreground/80 leading-relaxed">
              TIC delivers a reliable pipeline of student innovators who build,
              present, and succeed in competitive, real-world environments.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
