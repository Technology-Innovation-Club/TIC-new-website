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

function currentFragment() {
  try {
    return decodeURIComponent(window.location.hash.slice(1));
  } catch {
    return "";
  }
}

function anchorFragment(anchor: HTMLAnchorElement) {
  try {
    return decodeURIComponent((anchor.getAttribute("href") ?? "").slice(1));
  } catch {
    return "";
  }
}

function dropFragment() {
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

function openEntry(id: string) {
  const target = document.getElementById(id);
  if (target instanceof HTMLDetailsElement) {
    target.open = true;
    target.scrollIntoView({ block: "start" });
  }
}

function isVisible(entries: RankedEntry[], streamId: string, tid: string) {
  return streamId === ALL || entries.some((entry) => entry.tid === tid && entry.track === streamId);
}

export function LeaderboardList({ entries, groups }: { entries: RankedEntry[]; groups: StreamGroup[] }) {
  const [active, setActive] = useState(ALL);

  useEffect(() => {
    const showFragmentEntry = () => {
      setActive(ALL);
      requestAnimationFrame(() => openEntry(currentFragment()));
    };
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = anchor ? anchorFragment(anchor) : "";
      if (id && id === currentFragment()) showFragmentEntry();
    };
    showFragmentEntry();
    window.addEventListener("hashchange", showFragmentEntry);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", showFragmentEntry);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const options = [{ id: ALL, label: "All streams", count: entries.length }, ...groups];
  const visible = active === ALL ? entries : entries.filter((entry) => entry.track === active);

  function selectStream(streamId: string) {
    const open = currentFragment();
    if (open && !isVisible(entries, streamId, open)) dropFragment();
    setActive(streamId);
  }

  return (
    <div>
      <div role="group" aria-label="Filter by stream" className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            aria-pressed={active === option.id}
            aria-label={`${option.label}, ${option.count} entries`}
            onClick={() => selectStream(option.id)}
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
