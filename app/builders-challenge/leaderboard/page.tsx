import Link from "next/link";
import { ArrowLeft, Scale, TriangleAlert } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";
import { ScoreBar } from "@/components/builders-challenge/score-bar";
import { LeaderboardList } from "@/components/builders-challenge/leaderboard-list";
import { CRITERIA, LATE_PENALTY, TOP_COUNT, cohortGaps } from "@/lib/builders-challenge-judging";
import { INSIGHTS, JUDGED_AT, LEADERBOARD } from "@/lib/builders-challenge-leaderboard";
import { TRACKS, trackTitle } from "@/lib/builders-challenge";

export const metadata = {
  title: "Builders Challenge results | Tech Innovation Club",
  description:
    "Every Builders Challenge entry scored out of 100, with the ranking, what the judges saw, and what would raise each score.",
};

const judgedLabel = new Date(JUDGED_AT).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

const top = LEADERBOARD.slice(0, TOP_COUNT);
const gaps = cohortGaps(LEADERBOARD);
const average = Math.round(LEADERBOARD.reduce((sum, e) => sum + e.total, 0) / LEADERBOARD.length);

const groups = TRACKS.map((t) => ({
  id: t.id,
  label: t.title,
  count: LEADERBOARD.filter((e) => e.track === t.id).length,
})).filter((g) => g.count > 0);

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-primary text-white dark:bg-background dark:text-foreground">
          <div className="absolute inset-0 tic-grid opacity-10" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 sm:pt-16 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <AnimatedSection>
                <Link
                  href="/builders-challenge"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/90 transition hover:bg-white/15 dark:text-foreground/80"
                >
                  <ArrowLeft size={14} aria-hidden="true" /> Builders Challenge · Results
                </Link>
              </AnimatedSection>
              <AnimatedSection delay={0.08}>
                <h1 className="mt-6 text-4xl leading-[1.05] text-balance text-white sm:text-6xl dark:text-foreground">
                  Builders Challenge results.
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.16}>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80 dark:text-foreground/70">
                  Every entry was scored on the same 100-point rubric. Open
                  any entry below to read what the judges saw, what it lost
                  points for, and the steps that would raise the score.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.24}>
                <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 backdrop-blur sm:grid-cols-4">
                  {[
                    { v: String(LEADERBOARD.length), l: "entries judged" },
                    { v: String(groups.length), l: "streams entered" },
                    { v: String(LEADERBOARD[0].total), l: "top score" },
                    { v: String(average), l: "average score" },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/5 px-4 py-5">
                      <p className="text-2xl font-extrabold text-white sm:text-3xl dark:text-foreground">{s.v}</p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/70 dark:text-foreground/60">
                        {s.l}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-white/60 dark:text-foreground/50">Judged {judgedLabel}</p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-extrabold uppercase tracking-widest text-primary/70">Top {TOP_COUNT}</p>
            <h2 className="mt-2 font-poppins text-3xl font-semibold text-primary sm:text-4xl">
              The five highest scores.
            </h2>
          </AnimatedSection>
          <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5" staggerDelay={0.06}>
            {top.map((entry) => (
              <StaggerItem key={entry.tid} className={entry.rank === 1 ? "md:col-span-2 lg:col-span-1" : ""}>
                <a
                  href={`#${entry.tid}`}
                  className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 tic-shadow transition hover:-translate-y-1"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-sm font-bold text-gold">#{entry.rank}</span>
                    <span className="font-poppins text-3xl font-extrabold text-primary">{entry.total}</span>
                  </div>
                  <p className="mt-3 font-poppins text-base font-bold text-primary">{entry.name}</p>
                  <p className="text-sm text-foreground/70">{entry.title}</p>
                  <p className="mt-1 text-xs font-semibold text-foreground/50">{trackTitle(entry.track)}</p>
                  <ScoreBar entry={entry} className="mt-4" />
                  <p className="mt-auto pt-4 text-sm font-semibold text-primary underline underline-offset-4">
                    Read the feedback
                  </p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        <section className="border-y border-border bg-muted">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-sm font-extrabold uppercase tracking-widest text-primary/70">Across all entries</p>
              <h2 className="mt-2 max-w-3xl font-poppins text-3xl font-semibold text-primary sm:text-4xl">
                Where the entries fell short.
              </h2>
              <p className="mt-3 max-w-2xl text-foreground/70">
                Average points won on each criterion, weakest first. The
                number under each bar counts the entries that scored less
                than half.
              </p>
            </AnimatedSection>
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <AnimatedSection>
                <ul className="space-y-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
                  {gaps.map((g) => (
                    <li key={g.criterion.id}>
                      <div className="flex items-baseline justify-between gap-3 text-sm">
                        <span className="font-semibold text-primary">{g.criterion.name}</span>
                        <span className="font-mono font-bold text-primary">{g.averagePercent}%</span>
                      </div>
                      <div
                        className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-secondary/15"
                        role="img"
                        aria-label={`${g.criterion.name}: average ${g.averagePercent}%`}
                      >
                        <div className="h-full rounded-full bg-secondary" style={{ width: `${g.averagePercent}%` }} />
                      </div>
                      <p className="mt-1 text-xs text-foreground/60">
                        {g.belowHalf} of {LEADERBOARD.length} entries scored below half
                      </p>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <StaggerContainer className="space-y-3" staggerDelay={0.06}>
                {INSIGHTS.map((insight) => (
                  <StaggerItem key={insight.title}>
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <p className="flex items-center gap-2 font-poppins font-bold text-primary">
                        <TriangleAlert size={16} className="shrink-0 text-gold" aria-hidden="true" />
                        {insight.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{insight.detail}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        <section id="leaderboard" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-sm font-extrabold uppercase tracking-widest text-primary/70">Full ranking</p>
            <h2 className="mt-2 font-poppins text-3xl font-semibold text-primary sm:text-4xl">
              Find your entry, and read what cost points.
            </h2>
            <p className="mt-3 max-w-2xl text-foreground/70">
              Each bar has six segments, one per criterion and sized by its
              weight. The light part of a segment is the points the entry
              did not score.
            </p>
          </AnimatedSection>
          <div className="mt-8">
            <LeaderboardList entries={LEADERBOARD} groups={groups} />
          </div>
        </section>

        <section className="border-t border-border bg-muted">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-widest text-primary/70">
                <Scale size={16} aria-hidden="true" /> How we judged
              </p>
              <h2 className="mt-2 max-w-3xl font-poppins text-3xl font-semibold text-primary sm:text-4xl">
                Six criteria, taken from the challenge brief.
              </h2>
              <p className="mt-3 max-w-3xl text-foreground/70">
                The challenge asked you to understand, research, ideate, and
                prototype, and called the prototype the heart of the entry.
                So the prototype carries the most weight, and we scored what
                a reviewer could open and use, not what the brief claimed. AI
                builders were allowed and never cost points. A late entry lost{" "}
                {LATE_PENALTY} points. When two totals tie, the higher
                prototype score ranks first.
              </p>
            </AnimatedSection>
            <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.05}>
              {CRITERIA.map((c) => (
                <StaggerItem key={c.id}>
                  <div className="h-full rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-poppins font-bold text-primary">{c.name}</h3>
                      <span className="font-mono text-sm font-bold text-primary">{c.max} pts</span>
                    </div>
                    <p className="mt-1 text-sm text-foreground/70">{c.question}</p>
                    <ul className="mt-4 space-y-1.5">
                      {c.bands.map((b) => (
                        <li key={b.range} className="grid grid-cols-[3.25rem_1fr] gap-2 text-xs leading-relaxed">
                          <span className="font-mono font-bold text-foreground/60">{b.range}</span>
                          <span className="text-foreground/70">{b.meaning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
