"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AnimatedSection } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MediaEvent {
  id: string;
  title: string;
  category: "hackathon" | "event" | "workshop";
  description: string;
  date: string;
  image: { src: string; alt: string };
  highlights?: string[];
  prize?: string;
}

export default function MediaPage() {
  const hackathonWins: MediaEvent[] = [
    {
      id: "zenith-zecathon",
      title: "Zenith Bank Zecathon",
      category: "hackathon",
      description:
        "TIC representatives secured a top finish at the prestigious Zenith Bank Zecathon, demonstrating exceptional problem-solving abilities and product delivery under intense competition pressure.",
      date: "2025",
      prize: "N10M",
      image: {
        src: "/wins/zenith-zecathon.jpg",
        alt: "Zenith Zecathon team presentation",
      },
      highlights: [
        "National stage competition",
        "High-signal judging panel",
        "Top finish",
      ],
    },
    {
      id: "payaza-hackathon",
      title: "Payaza Hackathon",
      category: "hackathon",
      description:
        "Our team won $5,000 at the Payaza Hackathon by building a fintech solution that impressed judges with its practical approach to real-world payment challenges.",
      date: "2024",
      prize: "$5,000",
      image: {
        src: "/wins/payaza-5000.jpg",
        alt: "Payaza Hackathon winning team",
      },
      highlights: [
        "$5,000 cash prize",
        "Fintech innovation",
        "Pitch excellence",
      ],
    },
    {
      id: "lagos-impact",
      title: "Lagos Impact Hackathon",
      category: "hackathon",
      description:
        "TIC's representatives won $2,000 at the Lagos Impact Hackathon by building SupaMart, an offline-first POS and inventory system designed for small retailers in areas with unreliable internet connectivity.",
      date: "2025",
      prize: "$2,000",
      image: {
        src: "/wins/lagos-impact-supamart.jpg",
        alt: "Lagos Impact Hackathon team building",
      },
      highlights: [
        "Offline-first architecture",
        "Real retail constraints",
        "Impact-driven solution",
      ],
    },
    {
      id: "powertech",
      title: "PowerTech Hackathon",
      category: "hackathon",
      description:
        "Our team built Kriitor, a prototype that earned recognition at the PowerTech Hackathon, showcasing our ability to ship demo-ready products under tight competition timelines.",
      date: "2025",
      image: {
        src: "/wins/powertech-pius.jpg",
        alt: "PowerTech Hackathon team",
      },
      highlights: [
        "Rapid prototyping",
        "Team execution",
        "Demo-ready delivery",
      ],
    },
  ];

  // TODO: Update ServiceNow Image when ready
  const communityEvents: MediaEvent[] = [
    {
      id: "servicenow-session",
      title: "Insightful Session with ServiceNow",
      category: "workshop",
      description:
        "An enriching session where ServiceNow professionals shared industry insights on enterprise software, career pathways, and the future of workflow automation with TIC members.",
      date: "2025",
      image: {
        src: "/media/servicenow-session-1.jpg",
        alt: "ServiceNow session presentation",
      },
      highlights: [
        "Industry mentorship",
        "Career guidance",
        "Enterprise tech insights",
      ],
    },
    {
      id: "codespark-tech-fair",
      title: "CodeSpark and TIC Tech Fair",
      category: "event",
      description:
        "A vibrant showcase where student builders demonstrated their CodeSpark projects to peers, faculty, and industry partners. The Tech Fair highlighted the practical outcomes of our intensive build sprints.",
      date: "2025",
      image: {
        src: "/programmes/codespark.jpg",
        alt: "CodeSpark project demonstrations",
      },
      highlights: [
        "Project showcases",
        "Industry networking",
        "Student demonstrations",
      ],
    },
    {
      id: "tic-hackathon-2",
      title: "TIC Hackathon 2.0",
      category: "hackathon",
      description:
        "Our flagship internal hackathon brought together student builders from all streams for 48 hours of intensive building, mentorship, and innovation. Teams tackled real-world challenges and shipped working prototypes.",
      date: "2025",
      image: {
        src: "/programmes/tic-hackathon.jpg",
        alt: "TIC Hackathon 2.0 opening ceremony",
      },
      highlights: [
        "48-hour build sprint",
        "Cross-stream collaboration",
        "Mentor-guided development",
      ],
    },
  ];

  const categoryIcons = {
    hackathon: <Trophy className="w-5 h-5" />,
    event: <Users className="w-5 h-5" />,
    workshop: <Sparkles className="w-5 h-5" />,
  };

  const categoryColors = {
    hackathon: "bg-gold/10 text-gold border-gold/20",
    event: "bg-secondary/10 text-secondary border-secondary/20",
    workshop: "bg-primary/10 text-primary border-primary/20",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        {/* Hero Section */}
        <section className="w-full bg-primary dark:bg-background text-white dark:text-foreground py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="max-w-3xl">
                <p className="text-sm font-extrabold tracking-widest uppercase text-white/80 dark:text-foreground/80">
                  Media Gallery
                </p>
                <h1 className="mt-4 text-5xl sm:text-6xl text-balance text-white dark:text-foreground">
                  Our Wins and Events
                </h1>
                <p className="mt-5 text-lg text-white/80 dark:text-foreground/80 leading-relaxed">
                  From national hackathon stages to campus workshops, explore
                  the moments that define TIC's journey of building world-class
                  tech talent.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Hackathon Wins Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 grid place-items-center text-gold">
                  <Trophy className="w-5 h-5" />
                </div>
                <h2 className="text-3xl font-semibold text-primary font-poppins">
                  Hackathon Wins
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              {hackathonWins.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-background p-8 tic-shadow"
                >
                  <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${
                            categoryColors[event.category]
                          }`}
                        >
                          {categoryIcons[event.category]}
                          {event.category.charAt(0).toUpperCase() +
                            event.category.slice(1)}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-foreground/60">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold text-primary font-poppins">
                        {event.title}
                      </h3>

                      {event.prize && (
                        <p className="mt-2 text-3xl font-bold text-gold">
                          {event.prize}
                        </p>
                      )}

                      <p className="mt-4 text-foreground/70 leading-relaxed">
                        {event.description}
                      </p>

                      {event.highlights && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {event.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground/70"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="rounded-xl overflow-hidden border border-border bg-muted relative aspect-video">
                      <Image
                        src={event.image.src}
                        alt={event.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Placeholder overlay - remove when images are added */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                        <p className="text-xs text-foreground/40 text-center px-4">
                          {event.image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Community Events Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 grid place-items-center text-secondary">
                  <Users className="w-5 h-5" />
                </div>
                <h2 className="text-3xl font-semibold text-primary font-poppins">
                  Community Events
                </h2>
              </div>
            </AnimatedSection>

            <div className="space-y-12">
              {communityEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8 tic-shadow"
                >
                  <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${
                            categoryColors[event.category]
                          }`}
                        >
                          {categoryIcons[event.category]}
                          {event.category.charAt(0).toUpperCase() +
                            event.category.slice(1)}
                        </span>
                        <span className="flex items-center gap-1 text-sm text-foreground/60">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold text-primary font-poppins">
                        {event.title}
                      </h3>

                      <p className="mt-4 text-foreground/70 leading-relaxed">
                        {event.description}
                      </p>

                      {event.highlights && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {event.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground/70"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="rounded-xl overflow-hidden border border-border bg-muted relative aspect-video">
                      <Image
                        src={event.image.src}
                        alt={event.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Placeholder overlay - remove when images are added */}
                      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                        <p className="text-xs text-foreground/40 text-center px-4">
                          {event.image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-background text-white dark:text-foreground">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl border border-white/15 dark:border-border bg-white/10 dark:bg-muted/50 p-8 text-center">
                <h2 className="text-3xl font-semibold text-white dark:text-foreground font-poppins">
                  Want to be part of our next win?
                </h2>
                <p className="mt-4 text-white/80 dark:text-foreground/80 max-w-2xl mx-auto">
                  Join TIC to compete in hackathons, build real projects, and
                  develop your skills alongside a community of driven student
                  builders.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-7 py-3 rounded-xl bg-white dark:bg-primary text-primary dark:text-primary-foreground font-semibold hover:bg-white/90 dark:hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                  >
                    Join TIC <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/programmes"
                    className="px-7 py-3 rounded-xl border-2 border-white/70 dark:border-white/20 text-white dark:text-foreground font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                  >
                    Explore Programmes
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
