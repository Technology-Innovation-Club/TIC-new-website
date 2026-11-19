import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, BookOpen, ChevronDown, MapPin } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedSection } from "@/components/ui/motion";
import {
  BOOK_GROUPS,
  KIND_LABELS,
  LEVEL_GUIDE,
  LEVEL_RULES,
  PHASES,
  dateLabel,
  dayParts,
  isHappening,
  isPast,
  lagosToday,
  nextEvent,
  shortDate,
  type ClubEvent,
  type EventKind,
  type Level,
  type LevelName,
  type Phase,
} from "@/lib/club-calendar";

export const metadata: Metadata = {
  title: "Calendar | Tech Innovation Club",
  description:
    "Mini hackathons, weekly Drops, showcases and talks at the Tech Innovation Club, Pan-Atlantic University, from November 2026 to April 2027.",
};

export const revalidate = 3600;

const KIND_STYLES: Record<EventKind, string> = {
  hackathon: "bg-gold/15 text-[#7a4d00] border-gold/50 dark:text-gold",
  drop: "bg-secondary/10 text-secondary border-secondary/25 dark:bg-secondary/30 dark:text-[#cfc4ff] dark:border-secondary/60",
  review: "bg-rose-500/10 text-rose-700 border-rose-500/25 dark:text-rose-300",
  meeting: "bg-primary/10 text-primary border-primary/20 dark:bg-white/10 dark:text-foreground dark:border-white/15",
  chat: "bg-emerald-500/10 text-emerald-700 border-emerald-500/25 dark:text-emerald-300",
  visit: "bg-sky-500/10 text-sky-700 border-sky-500/25 dark:text-sky-300",
  track: "bg-fuchsia-500/10 text-fuchsia-700 border-fuchsia-500/25 dark:text-fuchsia-300",
  study: "bg-teal-500/10 text-teal-700 border-teal-500/25 dark:text-teal-300",
  pause: "bg-muted text-foreground/60 border-border",
};

const LEVEL_STYLES: Record<LevelName, string> = {
  Mild: "bg-amber-50 border-amber-200 text-amber-950 dark:bg-amber-400/10 dark:border-amber-400/25 dark:text-amber-100",
  Hot: "bg-orange-50 border-orange-200 text-orange-950 dark:bg-orange-500/10 dark:border-orange-500/25 dark:text-orange-100",
  Fire: "bg-red-50 border-red-200 text-red-950 dark:bg-red-500/10 dark:border-red-500/25 dark:text-red-100",
};

const LEVEL_HEAT: Record<LevelName, string> = { Mild: "🌶️", Hot: "🌶️🌶️", Fire: "🌶️🌶️🌶️" };

export default function CalendarPage() {
  const today = lagosToday();
  const upNext = nextEvent(PHASES, today);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section className="w-full bg-primary dark:bg-background text-white dark:text-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
            <AnimatedSection>
              <p className="text-sm font-extrabold tracking-widest uppercase text-white/80 dark:text-foreground/80">
                Calendar
              </p>
              <h1 className="mt-4 text-5xl sm:text-6xl text-balance text-white dark:text-foreground">
                What&apos;s on at TIC
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/80 dark:text-foreground/80 leading-relaxed">
                Mini hackathons, weekly Drops, showcases and honest talks, from now to April 2027.
                Dates marked &ldquo;to be confirmed&rdquo; can change.
              </p>
              <nav aria-label="Jump to" className="mt-8 flex flex-wrap gap-3">
                {PHASES.map((phase) => (
                  <a
                    key={phase.id}
                    href={`#${phase.id}`}
                    className="rounded-full border border-white/25 dark:border-border px-4 py-2 text-sm font-semibold text-white/90 dark:text-foreground/80 hover:bg-white/10 dark:hover:bg-muted transition-colors"
                  >
                    {phase.title}
                  </a>
                ))}
                <a
                  href="#drops"
                  className="rounded-full border border-white/25 dark:border-border px-4 py-2 text-sm font-semibold text-white/90 dark:text-foreground/80 hover:bg-white/10 dark:hover:bg-muted transition-colors"
                >
                  How Drops work
                </a>
                <a
                  href="#books"
                  className="rounded-full border border-white/25 dark:border-border px-4 py-2 text-sm font-semibold text-white/90 dark:text-foreground/80 hover:bg-white/10 dark:hover:bg-muted transition-colors"
                >
                  Book list
                </a>
              </nav>
            </AnimatedSection>
            {upNext && <NextUp event={upNext} today={today} />}
          </div>
        </section>

        {PHASES.map((phase) => (
          <PhaseSection key={phase.id} phase={phase} today={today} />
        ))}

        <DropsGuide />
        <BookShelf />

        <section className="w-full py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-2xl bg-primary dark:bg-card dark:border dark:border-border p-10 sm:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold text-white dark:text-foreground font-poppins">
                Want to build with us?
              </h2>
              <p className="mt-3 text-white/80 dark:text-foreground/70 leading-relaxed">
                Most of these activities are for TIC members. Talk to us to join, partner or mentor.
              </p>
            </div>
            <Link
              href="/contact"
              className="self-start lg:self-auto px-6 py-3 rounded-xl bg-gold text-primary font-bold inline-flex items-center gap-2 font-poppins hover:brightness-95 transition-all"
            >
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function NextUp({ event, today }: { event: ClubEvent; today: string }) {
  const { day, weekday, month } = dayParts(event.start);
  const happening = isHappening(event, today);

  return (
    <AnimatedSection delay={0.1}>
      <a
        href={`#${event.id}`}
        className="block rounded-2xl border border-white/20 dark:border-border bg-white/10 dark:bg-card p-7 backdrop-blur hover:bg-white/15 dark:hover:bg-muted transition-colors"
      >
        <p className="text-xs font-extrabold tracking-widest uppercase text-gold">
          {happening ? "Happening now" : "Next up"}
        </p>
        <div className="mt-5 flex items-start gap-5">
          <div className="shrink-0 w-20 rounded-xl bg-white text-primary text-center py-3">
            <p className="text-xs font-bold uppercase tracking-widest">{weekday}</p>
            <p className="text-4xl font-semibold font-poppins leading-none mt-1">{day}</p>
            <p className="text-xs font-bold uppercase tracking-widest mt-1">{month}</p>
          </div>
          <div>
            <p className="text-xl font-semibold font-poppins text-white dark:text-foreground text-balance">
              {event.title}
            </p>
            <p className="mt-2 text-sm text-white/75 dark:text-foreground/70">
              {dateLabel(event)}
              {event.place ? ` · ${event.place}` : ""}
              {event.tentative ? " · to be confirmed" : ""}
            </p>
          </div>
        </div>
      </a>
    </AnimatedSection>
  );
}

function PhaseSection({ phase, today }: { phase: Phase; today: string }) {
  return (
    <section id={phase.id} className="w-full py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20 even:bg-muted/60">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-extrabold tracking-widest uppercase text-primary/70 dark:text-foreground/60">
            {phase.range}
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl text-balance">{phase.title}</h2>
          <p className="mt-3 text-lg text-foreground/70">{phase.intro}</p>
        </AnimatedSection>
        <ol className="mt-10 space-y-4">
          {phase.events.map((event) => (
            <EventRow key={event.id} event={event} today={today} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function EventRow({ event, today }: { event: ClubEvent; today: string }) {
  if (event.kind === "pause") return <PauseRow event={event} today={today} />;

  const { day, weekday, month } = dayParts(event.start);
  const past = isPast(event, today);
  const happening = isHappening(event, today);
  const hasDetails = Boolean(event.groups?.length || event.levels?.length || event.resources?.length);

  return (
    <li id={event.id} className={`scroll-mt-24 grid sm:grid-cols-[5.5rem_1fr] gap-4 sm:gap-6 ${past ? "opacity-55" : ""}`}>
      <div className="hidden sm:block pt-1 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-foreground/55">{weekday}</p>
        <p className="text-4xl sm:text-5xl font-semibold font-poppins text-primary dark:text-foreground leading-none mt-1">
          {day}
        </p>
        <p className="text-xs font-bold uppercase tracking-widest text-foreground/55 mt-1">{month}</p>
        {event.week && (
          <p className="mt-3 text-[11px] font-semibold text-foreground/50">Week {event.week}</p>
        )}
      </div>

      <article
        className={`rounded-2xl border bg-card p-5 sm:p-7 tic-shadow ${
          happening ? "border-gold ring-2 ring-gold/40" : "border-border"
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full border px-3 py-1 text-xs font-bold ${KIND_STYLES[event.kind]}`}>
            {KIND_LABELS[event.kind]}
          </span>
          {event.tentative && (
            <span className="rounded-full border border-dashed border-foreground/30 px-3 py-1 text-xs font-semibold text-foreground/65">
              To be confirmed
            </span>
          )}
          {happening && (
            <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-primary">Happening now</span>
          )}
          {past && <span className="text-xs font-semibold text-foreground/55">Done</span>}
        </div>

        <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-primary dark:text-foreground font-poppins text-balance">
          {event.title}
        </h3>
        <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-foreground/60">
          <span>
            {dateLabel(event)}
            {event.week ? <span className="sm:hidden"> · Week {event.week}</span> : null}
          </span>
          {event.place && (
            <span className="inline-flex items-center gap-1">
              <MapPin size={14} aria-hidden="true" />
              {event.place}
            </span>
          )}
        </p>
        <p className="mt-4 text-foreground/80 leading-relaxed">{event.summary}</p>

        {hasDetails && (
          <details className="group mt-5 border-t border-border pt-4">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-bold text-primary dark:text-foreground [&::-webkit-details-marker]:hidden">
              {event.levels ? "Levels and details" : "Details"}
              <ChevronDown size={16} className="transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <EventDetails event={event} />
          </details>
        )}
      </article>
    </li>
  );
}

function PauseRow({ event, today }: { event: ClubEvent; today: string }) {
  return (
    <li
      id={event.id}
      className={`scroll-mt-24 grid sm:grid-cols-[5.5rem_1fr] gap-4 sm:gap-6 ${
        isPast(event, today) ? "opacity-55" : ""
      }`}
    >
      <div className="hidden sm:block" />
      <div className="rounded-2xl border border-dashed border-foreground/25 px-6 py-4 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="font-semibold text-foreground/80">{event.title}</span>
        <span className="text-sm text-foreground/60">{dateLabel(event)}</span>
        <span className="text-sm text-foreground/60">{event.summary}</span>
      </div>
    </li>
  );
}

function EventDetails({ event }: { event: ClubEvent }) {
  return (
    <div className="mt-5 space-y-6">
      {event.levels && <LevelGrid levels={event.levels} />}
      {event.groups?.map((group) => (
        <div key={group.title}>
          <p className="text-sm font-bold text-foreground">{group.title}</p>
          <ul className="mt-2 space-y-2 text-sm text-foreground/75 leading-relaxed list-disc pl-5">
            {group.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
      {event.resources && (
        <div>
          <p className="text-sm font-bold text-foreground">Read and watch</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {event.resources.map((resource) => (
              <li key={resource.href}>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-primary dark:text-foreground hover:bg-muted transition-colors"
                >
                  {resource.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function LevelGrid({ levels }: { levels: Level[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      {levels.map((level) => (
        <div key={level.name} className={`rounded-xl border p-4 ${LEVEL_STYLES[level.name]}`}>
          <p className="font-bold font-poppins">
            {level.name} <span aria-hidden="true">{LEVEL_HEAT[level.name]}</span>
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed list-disc pl-4">
            {level.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DropsGuide() {
  return (
    <section id="drops" className="w-full py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-extrabold tracking-widest uppercase text-primary/70 dark:text-foreground/60">
            How Drops work
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl text-balance">Pick your heat</h2>
          <p className="mt-4 max-w-3xl text-lg text-foreground/70 leading-relaxed">
            A Drop is a build challenge. It comes out on a Monday, and you have the whole week. Every
            Drop has three levels. Pick the one for how far you want to go this week.
          </p>
        </AnimatedSection>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {LEVEL_GUIDE.map((level) => (
            <div key={level.name} className={`rounded-2xl border p-7 ${LEVEL_STYLES[level.name]}`}>
              <p className="text-3xl" aria-hidden="true">
                {LEVEL_HEAT[level.name]}
              </p>
              <p className="mt-4 text-3xl font-semibold font-poppins">{level.name}</p>
              <p className="mt-2 leading-relaxed">{level.meaning}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-3 text-foreground/80">
          {LEVEL_RULES.map((rule, index) => (
            <li key={rule} className="flex gap-3">
              <span className="font-poppins font-semibold text-primary dark:text-gold">{index + 1}</span>
              <span className="leading-relaxed">{rule}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BookShelf() {
  return (
    <section id="books" className="w-full py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20 bg-muted/60">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-sm font-extrabold tracking-widest uppercase text-primary/70 dark:text-foreground/60">
            Break Tracks · {shortDate("2027-01-04")} to {shortDate("2027-01-15")}
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl text-balance">Pick a book, then practise it</h2>
          <p className="mt-4 max-w-3xl text-lg text-foreground/70 leading-relaxed">
            Two hours a day. Read for about 45 minutes, then build or do something with what you read.
            The goal is not to finish the book. The goal is to understand a few ideas deeply.
          </p>
        </AnimatedSection>
        <div className="mt-12 space-y-12">
          {BOOK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-semibold font-poppins text-primary dark:text-foreground">{group.title}</h3>
              <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.books.map((book) => (
                  <article key={book.title} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
                    <BookOpen size={20} className="text-primary dark:text-gold" aria-hidden="true" />
                    <p className="mt-3 font-semibold font-poppins text-foreground text-balance">{book.title}</p>
                    <p className="mt-1 text-sm text-foreground/60">{book.author}</p>
                    <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{book.learn}</p>
                    <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                      <span className="font-semibold text-foreground">Practise: </span>
                      {book.practice}
                    </p>
                    {book.link && (
                      <a
                        href={book.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary dark:text-gold"
                      >
                        {book.link.label}
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
