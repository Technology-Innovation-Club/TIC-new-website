"use client";

import { useEffect, useState } from "react";
import { DEADLINE_ISO } from "@/lib/builders-challenge";

function parts(now: number, target: number) {
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1000);
  return { days, hours, mins, secs, done: diff <= 0 };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const kick = setTimeout(() => setNow(Date.now()), 0);
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearTimeout(kick);
      clearInterval(t);
    };
  }, []);
  const target = new Date(DEADLINE_ISO).getTime();
  const p = parts(now ?? target, target);
  const cells = [
    { v: p.days, label: "days" },
    { v: p.hours, label: "hrs" },
    { v: p.mins, label: "min" },
    { v: p.secs, label: "sec" },
  ];
  return (
    <div
      className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
      role="timer"
      aria-live="off"
      aria-label={p.done ? "Submissions closed" : "Time left to submit"}
    >
      <span className="mr-1 hidden text-xs font-bold uppercase tracking-widest text-white/70 sm:inline">
        {p.done ? "Closed" : "Closes in"}
      </span>
      {cells.map((c) => (
        <span key={c.label} className="text-center">
          <span className="block min-w-10 rounded-lg bg-white/10 px-2 py-1 text-xl font-extrabold tabular-nums text-white">
            {now === null ? "--" : String(c.v).padStart(2, "0")}
          </span>
          <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-white/60">
            {c.label}
          </span>
        </span>
      ))}
    </div>
  );
}
