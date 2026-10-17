"use client";

import { useEffect, useState } from "react";
import type { RankedEntry } from "@/lib/builders-challenge-judging";
import { LeaderboardEntry } from "@/components/builders-challenge/leaderboard-entry";

export interface StreamGroup {
  id: string;
  label: string;
  count: number;
}

const ALL = "all";

function openFromHash() {
  const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
  if (target instanceof HTMLDetailsElement) {
    target.open = true;
    target.scrollIntoView({ block: "start" });
  }
}

export function LeaderboardList({ entries, groups }: { entries: RankedEntry[]; groups: StreamGroup[] }) {
  const [active, setActive] = useState(ALL);

  useEffect(() => {
    const onHashChange = () => {
      setActive(ALL);
      requestAnimationFrame(openFromHash);
    };
    openFromHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const options = [{ id: ALL, label: "All streams", count: entries.length }, ...groups];
  const visible = active === ALL ? entries : entries.filter((entry) => entry.track === active);

  return (
    <div>
      <div role="group" aria-label="Filter by stream" className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={active === option.id}
            aria-label={`${option.label}, ${option.count} entries`}
            onClick={() => setActive(option.id)}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground/75 transition hover:border-secondary/50 aria-pressed:border-secondary aria-pressed:bg-secondary aria-pressed:text-secondary-foreground"
          >
            {option.label}
            <span className="ml-1.5 font-mono text-xs opacity-70">{option.count}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {visible.map((entry) => (
          <LeaderboardEntry key={entry.tid} entry={entry} />
        ))}
      </div>
    </div>
  );
}
