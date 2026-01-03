"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Calendar, Clock, Users } from "lucide-react";
import {
  AnimatedSection,
  // StaggerContainer,
  // StaggerItem,
} from "@/components/ui/motion";

interface Programme {
  name: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  schedule?: string;
  duration?: string;
  capacity?: string;
}

export default function ProgrammesPage() {
  const programmes: Programme[] = [
    {
      name: "CodeSpark",
      description:
        "Fast-paced build sprints that improve speed, discipline, and product delivery.",
      longDescription:
        "CodeSpark is our flagship build sprint programme where teams tackle real-world problems in intensive sessions. Participants learn to ship under pressure, iterate quickly, and present demo-ready products to mentors and peers.",
      image: "/programmes/codespark.jpg",
      tags: ["Build sprint", "Mentorship", "Demo-ready output"],
      schedule: "Monthly",
      duration: "1-2 weeks",
      capacity: "20-30 participants",
    },
    /* {
      name: "MakerSpace",
      description:
        "Hands-on prototyping for embedded systems, robotics, and practical hardware builds.",
      longDescription:
        "Our MakerSpace lab provides the equipment, mentorship, and structure for students to build physical products. From IoT devices to robotics prototypes, members gain hands-on experience with hardware development.",
      image: "/programmes/makerspace.jpg",
      tags: ["Hardware", "Prototyping", "Robotics", "IoT"],
      schedule: "Ongoing",
      duration: "Semester-long",
      capacity: "15-20 members",
    }, */
    {
      name: "Demo Day",
      description:
        "A showcase where teams pitch, demo, and get feedback from operators and partners.",
      longDescription:
        "Demo Day is the culmination of our build programmes. Teams present their projects to industry partners, faculty, and fellow students. This is where our members practice pitch skills and receive critical feedback.",
      image: "/programmes/demo-day.jpg",
      tags: ["Showcase", "Feedback", "Partner-facing", "Pitching"],
      schedule: "End of each semester",
      duration: "Full day event",
      capacity: "All active teams",
    },
    {
      name: "AI/ML Lab",
      description:
        "Applied AI learning and project execution focused on real use-cases and portfolios.",
      longDescription:
        "The AI/ML Lab bridges theoretical knowledge and practical application. Members work on projects ranging from data analysis to machine learning models, building portfolios that demonstrate genuine AI capability.",
      image: "/programmes/ai-ml-lab.jpg",
      tags: ["Applied AI", "Machine Learning", "Data Science", "Portfolio"],
      schedule: "Weekly sessions",
      duration: "Semester-long",
      capacity: "25-30 members",
    },
    {
      name: "TIC Week",
      description:
        "A high-energy week of talks, workshops, and builds that expands the community.",
      longDescription:
        "TIC Week is our annual flagship event featuring industry speakers, hands-on workshops, hackathons, and networking opportunities. It is the biggest gathering of tech enthusiasts at Pan-Atlantic University.",
      image: "/programmes/tic-week.jpg",
      tags: ["Workshops", "Community", "Networking", "Annual event"],
      schedule: "Once per year",
      duration: "5 days",
      capacity: "100+ participants",
    },
  ];

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
                  Programmes
                </p>
                <h1 className="mt-4 text-5xl sm:text-6xl text-balance text-white dark:text-foreground">
                  Structured for Real Delivery
                </h1>
                <p className="mt-5 text-lg text-white/80 dark:text-foreground/80 leading-relaxed">
                  Each programme is designed to produce shipped work, stronger
                  portfolios, and reliable execution habits. Join a programme
                  and start building.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Programmes Grid */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {programmes.map((programme, index) => (
                <motion.article
                  key={programme.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8 tic-shadow"
                >
                  <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
                    <div>
                      <h2 className="text-3xl font-semibold text-primary font-poppins">
                        {programme.name}
                      </h2>
                      <p className="mt-4 text-foreground/70 leading-relaxed">
                        {programme.longDescription}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {programme.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 grid sm:grid-cols-3 gap-4">
                        {programme.schedule && (
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 grid place-items-center text-primary shrink-0">
                              <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                                Schedule
                              </p>
                              <p className="mt-1 text-sm font-semibold text-primary">
                                {programme.schedule}
                              </p>
                            </div>
                          </div>
                        )}
                        {programme.duration && (
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 grid place-items-center text-primary shrink-0">
                              <Clock className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                                Duration
                              </p>
                              <p className="mt-1 text-sm font-semibold text-primary">
                                {programme.duration}
                              </p>
                            </div>
                          </div>
                        )}
                        {programme.capacity && (
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 grid place-items-center text-primary shrink-0">
                              <Users className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-widest text-foreground/50">
                                Capacity
                              </p>
                              <p className="mt-1 text-sm font-semibold text-primary">
                                {programme.capacity}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-border bg-muted relative aspect-video lg:aspect-auto">
                      <Image
                        src={programme.image}
                        alt={programme.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-background p-8 tic-shadow">
                <h2 className="text-2xl font-semibold text-primary font-poppins">
                  Built for Repeatability
                </h2>
                <p className="mt-4 text-foreground/70 leading-relaxed">
                  We keep the standard high and the feedback loop tight.
                  Students learn to deliver like a product team. Each programme
                  cycle builds on lessons from previous cohorts, continuously
                  improving our approach to developing tech talent.
                </p>
                <div className="mt-6 grid sm:grid-cols-3 gap-6">
                  <div>
                    <p className="text-3xl font-bold text-primary">10+</p>
                    <p className="text-sm text-foreground/70">
                      Programmes completed
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">100+</p>
                    <p className="text-sm text-foreground/70">
                      Students trained
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">20+</p>
                    <p className="text-sm text-foreground/70">
                      Projects shipped
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-background text-white dark:text-foreground">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-white dark:text-foreground font-poppins">
                  Ready to Join a Programme?
                </h2>
                <p className="mt-4 text-white/80 dark:text-foreground/80 max-w-2xl mx-auto">
                  Whether you are a beginner or experienced builder, there is a
                  programme for you. Reach out to join the next cohort.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-7 py-3 rounded-xl bg-white dark:bg-primary text-primary dark:text-primary-foreground font-semibold hover:bg-white/90 dark:hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                  >
                    Get Started <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/about"
                    className="px-7 py-3 rounded-xl border-2 border-white/70 dark:border-white/20 text-white dark:text-foreground font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-colors"
                  >
                    Learn About TIC
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
