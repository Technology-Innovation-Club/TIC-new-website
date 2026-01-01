import { BriefcaseBusiness, CheckCircle2, Rocket, Wrench } from "lucide-react";

export function Mission() {
  const pillars = [
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Build Sprints",
      desc: "CodeSpark sprints, hackathons, and ship weeks that produce portfolio-grade deliverables.",
    },
    {
      icon: <BriefcaseBusiness className="w-5 h-5" />,
      title: "Career Outcomes",
      desc: "Internship pathways, mentor feedback loops, and practical product experience employers value.",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Launch Culture",
      desc: "From prototypes to pilots, students learn distribution, iteration, and real user impact.",
    },
  ];

  const checks = [
    "Hackathons + judged demos (execution pressure)",
    "MakerSpace labs + prototyping support",
    "Cross-department teams (engineering × design × business)",
    "A standards-driven community (review, feedback, iteration)",
  ];

  return (
    <section
      id="about"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
              Mission
            </p>
            <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
              Bridge theory and practice at scale
            </h2>
            <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
              Tech Innovation Club (TIC) is PAU’s builder ecosystem: where
              students turn classroom knowledge into real software, real
              prototypes, and real outcomes through sprints, labs, and
              competitions.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="font-poppins font-normal rounded-2xl border border-border bg-white p-5 tic-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/25 grid place-items-center text-primary">
                    {p.icon}
                  </div>
                  <h3 className="mt-4 font-extrabold text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#streams"
                className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors text-center"
              >
                Explore tech streams
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-extrabold hover:brightness-[0.98] transition-colors text-center"
              >
                Partner with TIC
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8 tic-shadow">
            <p className="text-xs font-bold tracking-widest uppercase text-foreground/60">
              How we execute
            </p>
            <h3 className="mt-3 text-2xl font-semibold font-poppins text-primary">
              An ecosystem designed for results
            </h3>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              The goal is not “activity.” The goal is capability: students who
              can build, test, and communicate under real constraints.
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

            <div className="mt-8 rounded-xl border border-secondary/25 bg-secondary/10 p-5">
              <p className="text-sm font-extrabold text-primary">
                Partner value
              </p>
              <p className="mt-1 text-sm text-foreground/70 leading-relaxed">
                Sponsors get early access to top student talent, demo-day
                visibility, and the chance to shape what gets built next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
