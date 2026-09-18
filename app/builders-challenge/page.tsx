import Link from "next/link";
import {
  ArrowRight,
  BookOpenText,
  CalendarClock,
  Eye,
  Gamepad2,
  Hammer,
  Lightbulb,
  Lock,
  Megaphone,
  ShieldAlert,
  Sprout,
  Stethoscope,
  Trophy,
  Zap,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { Countdown } from "@/components/builders-challenge/countdown";
import { DEADLINE_LABEL, TRACKS } from "@/lib/builders-challenge";

export const metadata = {
  title: "The Builders Challenge | Tech Innovation Club",
  description:
    "A 3-day rapid prototyping sprint to join TIC's Builders Cohort. Six real Nigerian challenge streams, with submissions now closed after the Sept 17th midnight deadline.",
};

const TRACK_ICONS: Record<string, React.ReactNode> = {
  cybersecurity: <ShieldAlert size={22} />,
  "game-dev": <Gamepad2 size={22} />,
  web: <Sprout size={22} />,
  embedded: <Zap size={22} />,
  media: <Megaphone size={22} />,
  "data-ai": <Stethoscope size={22} />,
};

const STEPS = [
  {
    icon: <Eye size={20} />,
    title: "Understand",
    text: "Dive deep into one of the 6 problem statements below.",
  },
  {
    icon: <BookOpenText size={20} />,
    title: "Research",
    text: "Look at the data, the local context, and the existing gaps.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Ideate",
    text: "Design a practical, locally relevant solution.",
  },
  {
    icon: <Hammer size={20} />,
    title: "Prototype",
    text: "Build a functional representation. Code from scratch or use rapid AI tools like Lovable, v0, or Glide.",
  },
];

const FAQS = [
  {
    q: "Who can take part?",
    a: "Any driven student ready to commit. We are selecting the next 20 members of the Builders Cohort, and exceptional talent always finds a seat beyond the soft cap.",
  },
  {
    q: "Do I need to write thousands of lines of code?",
    a: "No. Your goal is to prove you can solve problems: understand, research, ideate, and execute a working prototype by any legitimate means.",
  },
  {
    q: "Can I use AI builders?",
    a: "Yes. Lovable, v0, Glide, or code from scratch are all welcome. What matters is a real, locally relevant solution to your chosen stream.",
  },
  {
    q: "What do winners get?",
    a: "The top 5 solutions are promoted across TIC social channels and featured on our website for a full week. The most committed builders get onboarded into the club.",
  },
];

export default function BuildersChallengePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        {/* HERO */}
        <section className="relative overflow-hidden bg-primary text-white dark:bg-background dark:text-foreground">
          <div className="absolute inset-0 tic-grid opacity-10" aria-hidden="true" />
          <div
            className="absolute -top-40 left-1/2 h-225 w-225 -translate-x-1/2 rounded-full animate-blob-slow bg-[radial-gradient(circle,rgba(250,173,42,0.16)_0%,rgba(250,173,42,0)_55%)]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-gold" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/90 dark:text-foreground/80">
                    Builders Challenge · 3-day sprint
                  </span>
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.08}>
                <h1 className="mt-6 text-4xl leading-[1.05] text-balance text-white sm:text-6xl dark:text-foreground">
                  Build the future. Prove your commitment.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.16}>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80 dark:text-foreground/70">
                  At TIC we value one thing above all else: commitment. Take
                  on one of 6 real Nigerian challenge streams, ship a working
                  prototype in 3 days, and earn your seat in the Builders
                  Cohort.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.24}>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <Countdown />
                  <p className="text-sm font-semibold text-white/70 dark:text-foreground/60">
                    Deadline: {DEADLINE_LABEL}
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#streams"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 font-poppins text-base font-bold text-primary transition hover:brightness-105 active:translate-y-px sm:w-auto"
                  >
                    Explore the 6 streams <ArrowRight size={18} />
                  </a>
                  <a
                    href="#submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/70 px-8 py-4 font-poppins text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto dark:border-white/20 dark:text-foreground"
                  >
                    <Lock size={16} /> Submissions are closed
                  </a>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.36}>
                <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 backdrop-blur sm:grid-cols-4">
                  {[
                    { v: "6", l: "challenge streams" },
                    { v: "3", l: "days to ship" },
                    { v: "20", l: "cohort seats" },
                    { v: "Top 5", l: "featured for a week" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/5 px-4 py-5">
                      <p className="text-2xl font-extrabold text-white sm:text-3xl dark:text-foreground">
                        {s.v}
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70 dark:text-foreground/60">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-extrabold uppercase tracking-widest text-primary/70">
              The process
            </p>
            <h2 className="mt-2 font-poppins text-3xl font-semibold text-primary sm:text-4xl">
              Not lines of code. Proof you can solve problems.
            </h2>
          </AnimatedSection>
          <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.07}>
            {STEPS.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 tic-shadow">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/10 text-primary">
                      {s.icon}
                    </span>
                    <span className="font-mono text-sm font-bold text-foreground/30">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-poppins text-lg font-semibold text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {s.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* STREAMS */}
        <section id="streams" className="border-y border-border bg-muted scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-sm font-extrabold uppercase tracking-widest text-primary/70">
                6 problem statements
              </p>
              <h2 className="mt-2 max-w-2xl font-poppins text-3xl font-semibold text-primary sm:text-4xl">
                Pick one stream. Go deep. Ship something real.
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/70">
                Real, data-driven challenges facing Nigeria and Africa. Choose
                the one you can research best and prototype fastest.
              </p>
            </AnimatedSection>
            <StaggerContainer className="mt-8 grid gap-5 md:grid-cols-2" staggerDelay={0.06}>
              {TRACKS.map((t) => (
                <StaggerItem key={t.id}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 tic-shadow transition hover:-translate-y-1 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-white">
                        {TRACK_ICONS[t.id]}
                      </span>
                      <div>
                        <p className="font-mono text-xs font-bold text-gold">
                          STREAM {t.index}
                        </p>
                        <h3 className="font-poppins text-lg font-bold text-primary">
                          {t.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-foreground/80">
                      {t.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      <span className="font-bold text-primary">The problem: </span>
                      {t.problem}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      <span className="font-bold text-primary">Your challenge: </span>
                      {t.challenge}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* TIMELINE + REWARDS */}
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            <AnimatedSection>
              <div className="h-full rounded-2xl bg-primary p-7 text-white sm:p-9 dark:bg-card dark:text-foreground dark:border dark:border-border">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                    <CalendarClock size={22} className="text-gold" />
                  </span>
                  <h2 className="font-poppins text-2xl font-semibold text-white dark:text-foreground">
                    Timeline
                  </h2>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    { t: "The sprint: 3 days", d: "Today, tomorrow, and Thursday. Understand, research, ideate, prototype." },
                    { t: `Deadline: ${DEADLINE_LABEL}`, d: "Submissions closed strictly at midnight. Late entries are flagged for reviewers." },
                    { t: "Evaluation: one week", d: "Every submission is reviewed and graded over the following week." },
                  ].map((r) => (
                    <li key={r.t} className="rounded-xl border border-white/15 bg-white/5 p-4 dark:border-border dark:bg-muted">
                      <p className="font-poppins font-bold text-white dark:text-foreground">{r.t}</p>
                      <p className="mt-1 text-sm text-white/75 dark:text-foreground/70">{r.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 tic-shadow sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15">
                    <Trophy size={22} className="text-primary" />
                  </span>
                  <h2 className="font-poppins text-2xl font-semibold text-primary">
                    Rewards
                  </h2>
                </div>
                <ul className="mt-6 space-y-4">
                  {[
                    { t: "Top 5 heavily promoted", d: "Featured across TIC social media channels for maximum visibility." },
                    { t: "Featured on our website", d: "Top solutions stay on the TIC site for an entire week." },
                    { t: "Join the Builders Cohort", d: "The most committed builders get onboarded. Soft cap of 20 seats, but exceptional talent always finds a seat." },
                  ].map((r) => (
                    <li key={r.t} className="rounded-xl border border-border bg-muted p-4">
                      <p className="font-poppins font-bold text-primary">{r.t}</p>
                      <p className="mt-1 text-sm text-foreground/70">{r.d}</p>
                    </li>
                  ))}
                </ul>
                <a
                  href="#submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-muted px-6 py-3.5 font-poppins font-bold text-foreground/60"
                >
                  <Lock size={18} /> Submissions are closed
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="rounded-2xl border border-secondary/25 bg-secondary/5 p-7 sm:p-9">
              <p className="text-sm font-extrabold uppercase tracking-widest text-primary/70">
                Submission requirements
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold text-primary sm:text-3xl">
                What you must provide
              </h2>
              <ol className="mt-6 grid gap-4 md:grid-cols-2">
                {[
                  { t: "1. The prototype (link)", d: "Hosted prototype, code repository, or AI-generated app. This is the heart of your entry." },
                  { t: "2. Process brief (document)", d: "A document showing how you worked: research, decisions, iterations. Upload the file or paste a doc link." },
                  { t: "3. Portfolio (optional link)", d: "Previous work, GitHub, or design files if you have them." },
                  { t: "4. Statement of purpose", d: "A short paragraph on why you want to join TIC and what you hope to build here." },
                ].map((r) => (
                  <li key={r.t} className="rounded-xl border border-border bg-card p-5">
                    <p className="font-poppins font-bold text-primary">{r.t}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{r.d}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm text-foreground/70">
                Plus the 3 mandatory TIC agreements: activity liability,
                participation commitment, and conduct pledge.
              </p>
            </div>
          </AnimatedSection>
        </section>

        {/* SUBMIT — closed */}
        <section id="submit" className="border-t border-border bg-muted scroll-mt-20">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-card p-8 text-center tic-shadow sm:p-12">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-secondary/10 text-primary">
                  <Lock size={26} />
                </span>
                <p className="mt-5 text-sm font-extrabold uppercase tracking-widest text-primary/70">
                  The Builders Challenge
                </p>
                <h2 className="mt-2 font-poppins text-3xl font-semibold text-primary sm:text-4xl">
                  Submissions are closed
                </h2>
                <p className="mx-auto mt-4 max-w-xl leading-relaxed text-foreground/70">
                  The 3-day sprint ended on {DEADLINE_LABEL}. Thank you to
                  everyone who built and shipped. Our reviewers are now grading
                  every entry, and the top 5 solutions will be featured across
                  TIC channels.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-secondary px-7 py-3.5 font-poppins font-bold text-secondary-foreground transition hover:brightness-110"
                >
                  Questions? Contact TIC <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-center font-poppins text-2xl font-semibold text-primary sm:text-3xl">
              Quick answers
            </h2>
          </AnimatedSection>
          <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2" staggerDelay={0.06}>
            {FAQS.map((f) => (
              <StaggerItem key={f.q}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-poppins font-bold text-primary">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {f.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <AnimatedSection delay={0.1}>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="text-sm font-semibold text-primary underline underline-offset-4"
              >
                Questions? Contact TIC
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
}
