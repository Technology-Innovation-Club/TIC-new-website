"use client";

import Link from "next/link";
import { BriefcaseBusiness, CheckCircle2, Rocket, Wrench } from "lucide-react";
import { SlideIn, StaggerContainer, StaggerItem } from "./ui/motion";

export function Mission() {
  const pillars = [
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Experiential learning, structured",
      desc: "Projects, sprints, and labs that turn classroom knowledge into real builds and demos.",
    },
    {
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      title: "Industry skill-building",
      desc: "We teach the habits of reliable delivery: reviews, feedback loops, and product thinking.",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Results you can verify",
      desc: "Our students win and place in global competitions, and those results fund confidence.",
    },
  ];

  const checks = [
    "40% experiential learning mandate, executed through projects",
    "Bridge academic theory with industry-ready skill-building",
    "Students learn by shipping, presenting, and iterating",
    "Wins validate outcomes under real judging and pressure",
  ];

  return (
    <section
      id="about"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-muted dark:bg-muted/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SlideIn direction="left">
            <div>
              <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
                The mandate
              </p>
              <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
                40% experiential learning, made real
              </h2>
              <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
                TIC bridges academic theory with industry skill-building. The
                goal is simple: students graduate with real proof of execution,
                not just coursework.
              </p>

              <StaggerContainer
                className="mt-10 grid sm:grid-cols-3 gap-4"
                staggerDelay={0.1}
              >
                {pillars.map((p) => (
                  <StaggerItem key={p.title}>
                    <div className="font-poppins font-normal rounded-2xl border border-border bg-card p-5 tic-shadow h-full hover:-translate-y-1 transition-transform duration-200">
                      <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/25 grid place-items-center text-primary">
                        {p.icon}
                      </div>
                      <h3 className="mt-4 font-semibold font-poppins text-primary">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/media"
                  className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors text-center"
                >
                  See the wins
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold hover:brightness-[0.98] transition-colors text-center"
                >
                  Join the Community
                </Link>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15}>
            <div className="rounded-2xl border border-border bg-card p-8 tic-shadow hover:shadow-[0_1px_0_rgba(16,1,76,0.06),0_18px_50px_rgba(16,1,76,0.12)] transition-shadow duration-300">
              <p className="text-xs font-bold tracking-widest uppercase text-foreground/60">
                How it works
              </p>
              <h3 className="mt-3 text-2xl font-semibold font-poppins text-primary">
                Theory, applied through delivery
              </h3>
              <p className="mt-4 text-foreground/70 leading-relaxed">
                We run a repeatable system that helps students build, test, and
                present under real constraints. The proof shows up in shipped
                work and competition results.
              </p>

              <ul className="mt-6 space-y-4">
                {checks.map((c) => (
                  <li key={c} className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-primary/5 border border-border grid place-items-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-sm text-foreground/75 leading-relaxed">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-[color:var(--gold)]/25 bg-[color:var(--gold)]/10 p-5">
                <p className="text-sm font-semibold text-primary">
                  Proven by wins
                </p>
                <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                  Our results are proven by students winning global competitions
                  and delivering under judging, timelines, and real
                  expectations.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
