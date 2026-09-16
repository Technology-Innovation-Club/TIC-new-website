"use client";

import { useMemo, useState } from "react";
import { TRACKS, trackTitle } from "@/lib/builders-challenge";

interface StoredDoc {
  originalName: string;
  storedName: string;
  size: number;
  mime: string;
}

interface Submission {
  id: string;
  createdAt: string;
  late: boolean;
  fullName: string;
  email: string;
  phone: string;
  track: string;
  projectTitle: string;
  prototypeUrl: string;
  processDocLink: string;
  processDocFile: StoredDoc | null;
  portfolioUrl: string;
  statement: string;
}

const GATE_KEY = "bc-admin-password";

function toCsv(rows: Submission[]): string {
  const head = [
    "id",
    "createdAt",
    "late",
    "fullName",
    "email",
    "phone",
    "track",
    "projectTitle",
    "prototypeUrl",
    "processDocLink",
    "processDocFile",
    "portfolioUrl",
    "statement",
  ];
  const esc = (v: string | boolean) => {
    let s = String(v ?? "").replace(/"/g, '""');
    if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
    return `"${s}"`;
  };
  const lines = [head.join(",")];
  for (const r of rows) {
    lines.push(
      [
        esc(r.id),
        esc(r.createdAt),
        esc(r.late),
        esc(r.fullName),
        esc(r.email),
        esc(r.phone),
        esc(r.track),
        esc(r.projectTitle),
        esc(r.prototypeUrl),
        esc(r.processDocLink),
        esc(r.processDocFile ? r.processDocFile.originalName : ""),
        esc(r.portfolioUrl),
        esc(r.statement.replace(/\s+/g, " ")),
      ].join(","),
    );
  }
  return lines.join("\n");
}

export function AdminConsole() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [gateError, setGateError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<Submission[]>([]);
  const [query, setQuery] = useState("");
  const [trackFilter, setTrackFilter] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rows.filter((r) => {
      if (trackFilter && r.track !== trackFilter) return false;
      if (!q) return true;
      return [r.fullName, r.email, r.projectTitle, r.id, r.statement]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [rows, query, trackFilter]);

  async function unlock(e?: React.FormEvent) {
    e?.preventDefault();
    setGateError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/builders-challenge/submissions", {
        headers: { "x-admin-password": password },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setGateError(
          res.status === 401 ? "Wrong password. Try again." : "Could not load submissions.",
        );
        setAuthed(false);
        setLoading(false);
        return;
      }
      sessionStorage.setItem(GATE_KEY, password);
      setRows(data.submissions ?? []);
      setAuthed(true);
    } catch {
      setGateError("Network error. Try again.");
    }
    setLoading(false);
  }

  function logout() {
    sessionStorage.removeItem(GATE_KEY);
    setPassword("");
    setAuthed(false);
    setRows([]);
  }

  async function downloadDoc(s: Submission) {
    if (!s.processDocFile) return;
    setDownloading(s.id);
    try {
      const pw = sessionStorage.getItem(GATE_KEY) ?? password;
      const res = await fetch(
        `/api/builders-challenge/submissions/${s.id}/file`,
        { headers: { "x-admin-password": pw } },
      );
      if (!res.ok) {
        setGateError("Could not download that document.");
        setDownloading(null);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = s.processDocFile.originalName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      setGateError("Could not download that document.");
    }
    setDownloading(null);
  }

  function exportCsv() {
    const csv = toCsv(filtered);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `builders-challenge-submissions-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  if (!authed) {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-border bg-card p-8 tic-shadow">
        <h2 className="font-poppins text-xl font-semibold text-primary">
          Reviewer access
        </h2>
        <p className="mt-2 text-sm text-foreground/60">
          Enter the submissions password to view every entry.
        </p>
        <form onSubmit={unlock} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="bc-admin-pw"
              className="mb-1.5 block text-sm font-semibold text-primary font-poppins"
            >
              Password
            </label>
            <input
              id="bc-admin-pw"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
          {gateError && (
            <p role="alert" className="text-sm font-semibold text-destructive">
              {gateError}
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !password}
            className="w-full rounded-xl bg-secondary px-5 py-3 font-poppins text-sm font-bold text-secondary-foreground hover:brightness-110 disabled:opacity-60"
          >
            {loading ? "Checking..." : "View submissions"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-4 tic-shadow">
        <div className="mr-auto">
          <p className="font-poppins text-lg font-bold text-primary">
            {filtered.length} of {rows.length} submissions
          </p>
          <p className="text-xs text-foreground/55">
            Newest first. Password stays in this tab only.
          </p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search name, email, title, ID..."
          aria-label="Search submissions"
          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-64"
        />
        <select
          value={trackFilter}
          onChange={(e) => setTrackFilter(e.target.value)}
          aria-label="Filter by stream"
          className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        >
          <option value="">All streams</option>
          {TRACKS.map((t) => (
            <option key={t.id} value={t.id}>
              {t.title}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={exportCsv}
          className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-muted"
        >
          Export CSV
        </button>
        <button
          type="button"
          onClick={logout}
          className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground/60 hover:bg-muted"
        >
          Lock
        </button>
      </div>

      {gateError && (
        <p role="alert" className="mt-4 text-sm font-semibold text-destructive">
          {gateError}
        </p>
      )}

      <div className="mt-6 grid gap-4">
        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-foreground/60">
            No submissions match. Try clearing the search or filter.
          </div>
        )}
        {filtered.map((s) => {
          const open = openId === s.id;
          return (
            <article
              key={s.id}
              className="rounded-2xl border border-border bg-card p-5 tic-shadow sm:p-6"
            >
              <div className="flex flex-wrap items-start gap-3">
                <div className="mr-auto min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-poppins text-base font-bold text-primary">
                      {s.projectTitle}
                    </h3>
                    {s.late && (
                      <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                        Late
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-foreground/70">
                    {s.fullName} · {s.email}
                    {s.phone ? ` · ${s.phone}` : ""} · {trackTitle(s.track)}
                  </p>
                  <p className="mt-1 font-mono text-xs text-foreground/50">
                    {s.id} · {new Date(s.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : s.id)}
                  aria-expanded={open}
                  className="rounded-xl border border-border px-4 py-2 text-sm font-semibold text-primary hover:bg-muted"
                >
                  {open ? "Hide details" : "View details"}
                </button>
              </div>

              {open && (
                <div className="mt-4 space-y-4 border-t border-border pt-4 text-sm">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                      Statement of purpose
                    </p>
                    <p className="mt-1 whitespace-pre-wrap leading-relaxed text-foreground/85">
                      {s.statement}
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-muted p-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Prototype
                      </p>
                      <a
                        href={s.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block break-all font-semibold text-primary underline underline-offset-4"
                      >
                        {s.prototypeUrl}
                      </a>
                    </div>
                    <div className="rounded-xl bg-muted p-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Process brief
                      </p>
                      {s.processDocLink && (
                        <a
                          href={s.processDocLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 block break-all font-semibold text-primary underline underline-offset-4"
                        >
                          {s.processDocLink}
                        </a>
                      )}
                      {s.processDocFile ? (
                        <button
                          type="button"
                          onClick={() => downloadDoc(s)}
                          disabled={downloading === s.id}
                          className="mt-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-bold text-white hover:brightness-110 disabled:opacity-60"
                        >
                          {downloading === s.id
                            ? "Downloading..."
                            : `Download ${s.processDocFile.originalName} (${(s.processDocFile.size / 1024).toFixed(0)} KB)`}
                        </button>
                      ) : (
                        !s.processDocLink && (
                          <p className="mt-1 text-foreground/60">None attached.</p>
                        )
                      )}
                    </div>
                  </div>
                  {s.portfolioUrl && (
                    <p>
                      <span className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                        Portfolio:{" "}
                      </span>
                      <a
                        href={s.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-all font-semibold text-primary underline underline-offset-4"
                      >
                        {s.portfolioUrl}
                      </a>
                    </p>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
