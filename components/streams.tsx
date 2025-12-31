import {
  ArrowRight,
  BarChart3,
  Code2,
  Gamepad2,
  Palette,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

export function Streams() {
  const streams = [
    {
      name: "Web Development",
      head: "Dumebi Duru",
      description:
        "Modern web apps with React/Next.js, performance, and product-quality UI.",
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      name: "Mobile Development",
      head: "Adetona Adegbite",
      description:
        "Cross-platform or native mobile apps built for real usage and distribution.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      name: "Data Science",
      head: "Michael Iloba",
      description:
        "Analytics, ML foundations, and applied AI projects that solve real problems.",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      name: "Cybersecurity",
      head: "Marvelous Edoho",
      description:
        "Security fundamentals, secure engineering, and ethical hacking workflows.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      name: "Game Development",
      head: "Clement Obieke",
      description:
        "Gameplay programming, design loops, and building interactive experiences.",
      icon: <Gamepad2 className="w-6 h-6" />,
    },
    {
      name: "UI/UX Design",
      head: "Omotayo Ayeni",
      description:
        "Research, interaction design, and clean systems that scale with teams.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      name: "Embedded Systems & Robotics",
      head: "Onyedika Igwe & Chima Okwuokei",
      description:
        "IoT, automation, and practical robotics prototyping in MakerSpace labs.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  return (
    <section
      id="streams"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
            Tech streams
          </p>
          <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
            Seven tracks. One standard: execution.
          </h2>
          <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
            Each stream is a community with mentors, projects, and structured
            learning—built to ship.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {streams.map((stream) => (
            <article
              key={stream.name}
              className="group rounded-2xl border border-border bg-white p-8 tic-shadow hover:-translate-y-0.5 transition-transform"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/15 border border-secondary/25 grid place-items-center text-primary">
                  {stream.icon}
                </div>
                <span className="inline-flex items-center rounded-full bg-muted border border-border px-3 py-1 text-xs font-bold text-foreground/70">
                  Stream
                </span>
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-primary">
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
                  <p className="mt-1 text-sm font-extrabold text-primary">
                    {stream.head}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
