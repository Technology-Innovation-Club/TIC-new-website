"use client";

import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { CountUp, SlideIn, StaggerContainer, StaggerItem } from "./ui/motion";

export function Cta() {
  const stats = [
    { value: 500, suffix: "+", label: "members across faculties" },
    { value: 7, suffix: "", label: "structured tech streams" },
    { value: 3, suffix: "", label: "major competition results" },
  ];

  const partnerOptions = [
    {
      t: "Sponsor hackathons & build sprints",
      d: "Fund prizes, tooling, mentors, and judging, directly tied to shipped output.",
    },
    {
      t: "Support MakerSpace labs",
      d: "Hardware, kits, and build materials for robotics/embedded prototyping.",
    },
    {
      t: "Host challenges & internships",
      d: "Bring real company problems; identify top performers for roles and internships.",
    },
    {
      t: "Back demo days & showcases",
      d: "Get first look at projects, founders, and high-performing student teams.",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white relative overflow-hidden"
    >
      {/* Ambient backgrounds */}
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-gold/10 blur-3xl animate-blob-slow" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl animate-blob" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <SlideIn direction="left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-extrabold tracking-widest uppercase">
                  Partner-ready
                </span>
              </div>

              <h2 className="mt-6 text-5xl sm:text-6xl font-semibold text-white text-balance">
                Help fund the next wave of builders in Africa.
              </h2>
              <p className="mt-6 text-white/80 text-lg leading-relaxed">
                Whether you are a company, foundation, VC, or ecosystem partner,
                TIC is a high-signal pipeline for talent and real product
                execution at PAU.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:tic@pau.edu.ng"
                  className="px-7 py-3 rounded-xl bg-white text-primary font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 font-poppins"
                >
                  Email TIC <Mail size={18} />
                </a>
                <Link
                  href="/contact"
                  className="px-7 py-3 rounded-xl border-2 border-white/70 text-white font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Join the Community <ArrowRight size={18} />
                </Link>
              </div>

              <StaggerContainer
                className="mt-10 grid sm:grid-cols-3 gap-4"
                staggerDelay={0.08}
              >
                {stats.map((stat) => (
                  <StaggerItem key={stat.label}>
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm hover:bg-white/15 transition-colors">
                      <p className="text-3xl font-extrabold text-white">
                        <CountUp target={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="mt-1 text-sm text-white/80">{stat.label}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.1}>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white font-poppins">
                Ways to partner
              </h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                Pick a lane (or combine them). We will tailor packages and
                visibility around outcomes.
              </p>

              <div className="mt-8 space-y-4">
                {partnerOptions.map((x) => (
                  <div
                    key={x.t}
                    className="rounded-xl border border-white/10 bg-black/10 p-5 hover:bg-black/20 transition-colors"
                  >
                    <p className="font-semibold text-white font-poppins">
                      {x.t}
                    </p>
                    <p className="mt-1 text-sm text-white/80 leading-relaxed">
                      {x.d}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-secondary/35 bg-secondary/80 p-5">
                <p className="text-sm font-semibold text-white font-poppins">
                  Fast path
                </p>
                <p className="mt-1 text-sm text-white/90 leading-relaxed">
                  Email us what you want to support (sprints, labs, demo day,
                  internships) and we will respond with a clear scope +
                  outcomes.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
