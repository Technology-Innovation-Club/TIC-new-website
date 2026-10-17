import { CRITERIA, type JudgedEntry } from "@/lib/builders-challenge-judging";

export function ScoreBar({ entry, className = "" }: { entry: JudgedEntry; className?: string }) {
  return (
    <div
      className={`flex h-2.5 gap-0.5 ${className}`}
      role="img"
      aria-label={CRITERIA.map((c) => `${c.name} ${entry.scores[c.id].score} of ${c.max}`).join(", ")}
    >
      {CRITERIA.map((c) => {
        const score = entry.scores[c.id].score;
        return (
          <div
            key={c.id}
            title={`${c.name}: ${score}/${c.max}`}
            className="h-full overflow-hidden rounded-[3px] bg-secondary/15"
            style={{ flexGrow: c.max, flexBasis: 0 }}
          >
            <div className="h-full bg-secondary" style={{ width: `${(100 * score) / c.max}%` }} />
          </div>
        );
      })}
    </div>
  );
}

export function MeterRow({
  label,
  value,
  max,
  className = "",
}: {
  label: string;
  value: number;
  max: number;
  className?: string;
}) {
  return (
    <div
      className={`h-1.5 w-full overflow-hidden rounded-full bg-secondary/15 ${className}`}
      role="img"
      aria-label={`${label} ${value} of ${max}`}
    >
      <div className="h-full rounded-full bg-secondary" style={{ width: `${(100 * value) / max}%` }} />
    </div>
  );
}
