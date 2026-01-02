"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalIcon, ChevronDown } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/motion";

type EventType = "hackathon" | "workshop" | "event" | "program" | "conference";

interface CalendarEvent {
  date: string;
  title: string;
  description: string;
  type: EventType;
}

export function Calendar() {
  const upcomingEvents: CalendarEvent[] = useMemo(
    () => [
      {
        date: "Jan 15, 2025",
        title: "CodeSpark Sprint #1",
        description:
          "Build a complete project in 48 hours with mentors, prizes, and industry judges.",
        type: "hackathon",
      },
      {
        date: "Jan 22, 2025",
        title: "Web Development Workshop",
        description:
          "Modern Next.js patterns, performance, and shipping like a product team.",
        type: "workshop",
      },
      {
        date: "Feb 5, 2025",
        title: "TIC Demo Day",
        description:
          "Showcase projects to operators, investors, and industry leaders. Build your network.",
        type: "event",
      },
      {
        date: "Feb 19, 2025",
        title: "AI & ML Labs Launch",
        description:
          "Hands-on intro to ML workflows and building with LLMs (responsibly) in real apps.",
        type: "workshop",
      },
      {
        date: "Mar 5, 2025",
        title: "Startup Bootcamp",
        description:
          "10-week builder program: validate, ship MVPs, and learn distribution and iteration.",
        type: "program",
      },
      {
        date: "Mar 20, 2025",
        title: "Annual TIC Conference",
        description:
          "3 days of keynotes, workshops, and partner sessions focused on real execution.",
        type: "conference",
      },
    ],
    [],
  );

  const [showAll, setShowAll] = useState(false);
  const [openEvent, setOpenEvent] = useState<string | null>(null);

  const displayedEvents = showAll ? upcomingEvents : upcomingEvents.slice(0, 4);

  return (
    <section
      id="calendar"
      className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
                Calendar
              </p>
              <h2 className="mt-4 text-5xl sm:text-6xl text-balance">
                Upcoming activities
              </h2>
              <p className="mt-5 text-lg text-foreground/70 leading-relaxed">
                Workshops, sprints, demo days, and partner-facing events
                designed around tangible output.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 text-sm font-semibold text-foreground/75">
                <CalIcon className="w-4 h-4 text-primary" />
                Mock schedule (editable)
              </span>
            </div>
          </div>
        </AnimatedSection>

        <StaggerContainer
          className="mt-12 grid md:grid-cols-2 gap-6"
          staggerDelay={0.08}
        >
          {displayedEvents.map((event) => (
            <StaggerItem key={event.title}>
              <div
                className="group rounded-2xl border border-border bg-white p-7 tic-shadow cursor-pointer hover:-translate-y-1 transition-transform duration-200"
                onClick={() =>
                  setOpenEvent(openEvent === event.title ? null : event.title)
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-foreground/55">
                      {event.date}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-primary font-poppins">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <span
                    className={`mt-1 inline-flex items-center justify-center w-9 h-9 rounded-xl border border-border bg-muted text-primary transition-transform duration-200 ${
                      openEvent === event.title ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </div>

                <AnimatePresence>
                  {openEvent === event.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-border">
                        <p className="text-sm font-bold text-primary">
                          Details (placeholder)
                        </p>
                        <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                          Add location, speakers, registration, and partner
                          slots here. This expandable layout keeps the section
                          clean while still letting leaders scan quickly.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                          <a
                            href="/#contact"
                            className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-bold hover:brightness-[0.98] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Sponsor this event
                          </a>
                          <a
                            href="/#contact"
                            className="px-4 py-2 rounded-lg border border-border text-primary font-semibold hover:bg-muted transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Become a guest mentor
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-colors font-poppins"
          >
            {showAll ? "Show fewer events" : "View all events"}
          </button>
        </div>
      </div>
    </section>
  );
}
