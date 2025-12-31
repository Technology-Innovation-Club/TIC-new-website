import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function Cta() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-primary text-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(250,173,42,0.55) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs font-extrabold tracking-widest uppercase">
                Partner-ready
              </span>
            </div>

            <h2 className="mt-6 text-5xl sm:text-6xl font-semibold text-white text-balance">
              Help fund the next wave of builders in Africa.
            </h2>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Whether you’re a company, foundation, VC, or ecosystem partner—TIC
              is a high-signal pipeline for talent and real product execution at
              PAU.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:tic@pau.edu.ng"
                className="px-7 py-3 rounded-xl bg-secondary text-secondary-foreground font-extrabold hover:brightness-[0.98] transition-colors inline-flex items-center justify-center gap-2"
              >
                Email TIC <Mail size={18} />
              </a>
              <a
                href="#wins"
                className="px-7 py-3 rounded-xl border-2 border-white/70 text-white font-bold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                See proof of execution <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-3xl font-extrabold text-white">500+</p>
                <p className="mt-1 text-sm text-white/80">
                  members across faculties
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-3xl font-extrabold text-white">7</p>
                <p className="mt-1 text-sm text-white/80">
                  structured tech streams
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
                <p className="text-3xl font-extrabold text-white">3</p>
                <p className="mt-1 text-sm text-white/80">
                  major competition results
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-8">
            <h3 className="text-2xl font-extrabold text-white">
              Ways to partner
            </h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Pick a lane (or combine them). We’ll tailor packages and
              visibility around outcomes.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  t: "Sponsor hackathons & build sprints",
                  d: "Fund prizes, tooling, mentors, and judging—directly tied to shipped output.",
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
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-xl border border-white/10 bg-black/10 p-5"
                >
                  <p className="font-extrabold text-white">{x.t}</p>
                  <p className="mt-1 text-sm text-white/80 leading-relaxed">
                    {x.d}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-secondary/35 bg-secondary/15 p-5">
              <p className="text-sm font-extrabold text-white">Fast path</p>
              <p className="mt-1 text-sm text-white/90 leading-relaxed">
                Email us what you want to support (sprints, labs, demo day,
                internships) and we’ll respond with a clear scope + outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
