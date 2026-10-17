import { ArrowUpRight, ChevronDown, Clock, Crosshair, ThumbsUp } from "lucide-react";
import {
  CRITERIA,
  LATE_PENALTY,
  pointLosses,
  type RankedEntry,
} from "@/lib/builders-challenge-judging";
import { trackTitle } from "@/lib/builders-challenge";
import { MeterRow, ScoreBar } from "@/components/builders-challenge/score-bar";

export function LeaderboardEntry({ entry }: { entry: RankedEntry }) {
  const losses = pointLosses(entry);

  return (
    <details
      id={entry.tid}
      className="group scroll-mt-24 rounded-2xl border border-border bg-card tic-shadow open:ring-2 open:ring-secondary/30"
    >
      <summary className="grid cursor-pointer list-none grid-cols-[2.75rem_1fr_auto] items-center gap-x-4 gap-y-3 p-4 sm:grid-cols-[3rem_minmax(0,1fr)_14rem_4.5rem_1.25rem] sm:p-5 [&::-webkit-details-marker]:hidden">
        <span className="font-mono text-2xl font-extrabold text-primary/40">
          {String(entry.rank).padStart(2, "0")}
        </span>
        <div className="min-w-0">
          <p className="truncate font-poppins text-base font-bold text-primary">{entry.name}</p>
          <p className="truncate text-sm text-foreground/70">{entry.title}</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-foreground/70">
              {trackTitle(entry.track)}
            </span>
            {entry.late && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-semibold text-foreground/80">
                <Clock size={12} aria-hidden="true" /> Late, -{LATE_PENALTY}
              </span>
            )}
          </div>
        </div>
        <ScoreBar entry={entry} className="col-span-3 row-start-2 sm:col-span-1 sm:row-start-1 sm:col-start-3" />
        <p className="text-right font-poppins text-2xl font-extrabold text-primary sm:col-start-4">
          {entry.total}
          <span className="text-sm font-semibold text-foreground/50">/100</span>
        </p>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className="hidden text-foreground/50 transition group-open:rotate-180 sm:block"
        />
      </summary>

      <div className="border-t border-border p-4 sm:p-6">
        <p className="text-base leading-relaxed text-foreground/85">{entry.verdict}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-foreground/70">Points lost:</span>
          {losses.map(({ criterion, lost }) => (
            <span key={criterion.id} className="rounded-full border border-border px-2.5 py-0.5 text-foreground/80">
              {criterion.name} <span className="font-mono font-bold text-primary">-{lost}</span>
            </span>
          ))}
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-muted p-4">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary/70">
              <ThumbsUp size={14} aria-hidden="true" /> Strongest point
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{entry.strongestPoint}</p>
          </div>
          <div className="rounded-xl border border-gold/50 bg-gold/10 p-4">
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-primary/70">
              <Crosshair size={14} aria-hidden="true" /> Biggest gap
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{entry.biggestGap}</p>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-secondary/25 bg-secondary/5 p-4 sm:p-5">
          <p className="text-xs font-extrabold uppercase tracking-widest text-primary/70">
            Do these next
          </p>
          <ol className="mt-3 space-y-2.5">
            {entry.improvements.map((step, i) => (
              <li key={step} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary font-mono text-xs font-bold text-secondary-foreground">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-2">
          {CRITERIA.map((c) => {
            const s = entry.scores[c.id];
            return (
              <section key={c.id} className="rounded-xl border border-border p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-poppins text-sm font-bold text-primary">
                    {c.name}
                    <span className="ml-2 text-xs font-semibold text-foreground/50">{c.step}</span>
                  </h4>
                  <p className="font-mono text-sm font-bold text-primary">
                    {s.score}
                    <span className="text-foreground/50">/{c.max}</span>
                  </p>
                </div>
                <MeterRow label={c.name} value={s.score} max={c.max} className="mt-2" />
                <dl className="mt-3 space-y-2 text-sm leading-relaxed">
                  <div>
                    <dt className="inline font-bold text-foreground/80">What we saw. </dt>
                    <dd className="inline text-foreground/70">{s.evidence}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold text-foreground/80">The gap. </dt>
                    <dd className="inline text-foreground/70">{s.gap}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold text-foreground/80">Close it. </dt>
                    <dd className="inline text-foreground/70">{s.action}</dd>
                  </div>
                </dl>
              </section>
            );
          })}
        </div>

        <a
          href={entry.prototypeUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline underline-offset-4"
        >
          Open the prototype <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </details>
  );
}
