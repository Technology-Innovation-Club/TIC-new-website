import { ArrowRight, BookOpen, Globe, Rocket, Users } from "lucide-react";

interface Objective {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Objectives() {
  const objectives: Objective[] = [
    {
      title: "Experiential learning",
      description:
        "Students apply classroom knowledge to real builds. Projects are scoped, shipped, reviewed, and demoed.",
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Career readiness",
      description:
        "Portfolios, mentorship, and product experience that translates directly to internships and roles.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "Global positioning",
      description:
        "Compete nationally and internationally. Build confidence and proof points that travel globally.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Multidisciplinary community",
      description:
        "Teams blend engineering, design, and business. This is how the best products are actually built.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
              Outcomes
            </p>
            <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
              What members gain
            </h2>
            <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
              TIC is designed to produce builders. People who can execute,
              communicate, and iterate with discipline.
            </p>

            <div className="mt-8 rounded-2xl border border-secondary/25 bg-secondary/10 p-7">
              <p className="text-sm font-semibold text-primary font-poppins">
                Leaders & partners care about one thing:
              </p>
              <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                can the team deliver outcomes repeatedly? TIC’s structure
                optimizes for repeatable execution.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:underline"
              >
                Support the pipeline <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {objectives.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-border bg-white p-7 tic-shadow"
              >
                <div className="w-11 h-11 rounded-2xl bg-primary/5 border border-border grid place-items-center text-primary">
                  {o.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary font-poppins">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {o.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
