import { ArrowRight, Award, TrendingUp, Zap } from "lucide-react";

export function Wins() {
  const wins = [
    {
      icon: <Award className="w-7 h-7" />,
      eyebrow: "Lagos Impact Hackathon (UNILAG)",
      title: "1st place + $2,000",
      description:
        "Built SupaMart — an AI-powered, offline-first POS & inventory system designed for reliability in real-world retail conditions.",
      pills: ["AI + Offline-first", "POS & Inventory", "Built for SMBs"],
      metrics: [
        { k: "Outcome", v: "1st place" },
        { k: "Prize", v: "$2,000" },
        { k: "Product", v: "SupaMart" },
      ],
      featured: true,
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      eyebrow: "Zenith Bank Zecathon",
      title: "Top 5 nationally",
      description:
        "Ranked among Nigeria’s strongest teams—demonstrating PAU’s engineering depth and execution under pressure.",
      pills: ["National stage", "High-signal judging", "Talent spotlight"],
      metrics: [
        { k: "Placement", v: "Top 5" },
        { k: "Scale", v: "200+ teams" },
        { k: "Signal", v: "National recognition" },
      ],
    },
    {
      icon: <Zap className="w-7 h-7" />,
      eyebrow: "Venture Garden Group Hackathon",
      title: "2nd place (TIC-referred team)",
      description:
        "A team referred from TIC placed 2nd—evidence of a repeatable pipeline for strong builders, not one-off luck.",
      pills: ["Fintech solution", "Investor visibility", "Execution focus"],
      metrics: [
        { k: "Placement", v: "2nd" },
        { k: "Network", v: "VC & operator access" },
        { k: "Proof", v: "Pipeline strength" },
      ],
    },
  ];

  return (
    <section id="wins" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold tracking-widest text-primary uppercase">
            Credibility, demonstrated
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
            From campus builds to competitive wins
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            These aren’t generic club achievements—these are results in judged,
            high-competition environments with real deliverables.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {wins.map((win, idx) => (
            <article
              key={idx}
              className={[
                "relative rounded-2xl border border-border bg-white p-8 tic-shadow",
                "hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(16,1,76,0.06),_0_18px_50px_rgba(16,1,76,0.12)] transition-all",
                win.featured ? "lg:col-span-1 ring-1 ring-secondary/35" : "",
              ].join(" ")}
              aria-label={`Win: ${win.title}`}
            >
              {/* top accent */}
              <div
                className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-secondary/80"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 border border-border grid place-items-center text-primary">
                    {win.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-foreground/60">
                      {win.eyebrow}
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-primary">
                      {win.title}
                    </h3>
                  </div>
                </div>

                <span className="inline-flex items-center rounded-full bg-secondary/15 text-primary px-3 py-1 text-xs font-bold border border-secondary/25">
                  Verified result
                </span>
              </div>

              <p className="mt-5 text-foreground/75 leading-relaxed">
                {win.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {win.pills.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground/70"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-border grid grid-cols-3 gap-4">
                {win.metrics.map((m) => (
                  <div key={m.k}>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-foreground/50">
                      {m.k}
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-primary">
                      {m.v}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                Sponsor the next cohort <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/15 bg-primary/[0.03] p-8">
          <p className="text-primary font-extrabold text-lg">
            What this signals to partners:
          </p>
          <p className="mt-2 text-foreground/75 leading-relaxed">
            TIC is building a consistent pipeline of execution—teams that can
            ship, present, and win under real constraints.
          </p>
        </div>
      </div>
    </section>
  );
}
