"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Building2, Trophy, Users, Zap } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/motion";

interface Partner {
  name: string;
  type: "sponsor" | "technology" | "community";
  description: string;
}

export default function PartnersPage() {
  const partners: Partner[] = [
    {
      name: "NVIDIA",
      type: "technology",
      description:
        "Supporting AI/ML education and compute resources for student projects.",
    },
    {
      name: "ServiceNow",
      type: "sponsor",
      description:
        "Industry mentorship and enterprise technology insights for TIC members.",
    },
    {
      name: "Cloudplexo",
      type: "technology",
      description:
        "Cloud infrastructure and DevOps training for student builders.",
    },
    {
      name: "AWS",
      type: "technology",
      description:
        "Cloud credits and resources for student projects and hackathons.",
    },
    {
      name: "Zenith Bank",
      type: "sponsor",
      description:
        "Major hackathon sponsor enabling national-stage competition opportunities.",
    },
    {
      name: "NoOnes",
      type: "sponsor",
      description:
        "Community partner supporting fintech innovation and student development.",
    },
    {
      name: "Your Company",
      type: "sponsor",
      description:
        "Join these industry leaders in shaping the future of African tech talent.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Talent Pipeline Access",
      description:
        "Connect with top-performing student builders who have demonstrated execution capability through hackathons and real projects.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Measurable Outcomes",
      description:
        "Our structured programmes produce trackable results. See demo days, shipped products, and competition wins from your sponsorship.",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Brand Visibility",
      description:
        "Showcase your brand to a high-signal campus audience of ambitious tech students and faculty at Pan-Atlantic University.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Direct Engagement",
      description:
        "Host challenges, mentor sessions, or internship programmes with direct access to TIC's community of builders.",
    },
  ];

  const partnershipTiers = [
    {
      name: "Hackathon Sponsor",
      description:
        "Fund prizes, tooling, and mentors for our hackathons. Your brand gets visibility at high-energy competitive events where students ship under pressure.",
      highlights: [
        "Prize sponsorship",
        "Judging opportunities",
        "Demo day presence",
      ],
    },
    /* {
      name: "MakerSpace Supporter",
      description:
        "Provide hardware, kits, and equipment for our robotics and embedded systems labs. Enable hands-on prototyping for the next generation of hardware builders.",
      highlights: [
        "Lab naming rights",
        "Hardware showcases",
        "Student project features",
      ],
    }, */
    {
      name: "Programme Partner",
      description:
        "Sponsor specific programmes like CodeSpark, Demo Day, or TIC Week. Get integrated visibility across workshops, showcases, and community events.",
      highlights: ["Speaking slots", "Branded content", "Recruitment access"],
    },
    {
      name: "Internship Partner",
      description:
        "Access our talent pipeline directly. Post opportunities, host technical challenges, and identify high-performing students for roles at your company.",
      highlights: [
        "Early talent access",
        "Technical challenges",
        "Interview prioritization",
      ],
    },
  ];

  const typeColors = {
    sponsor: "bg-gold/10 text-gold border-gold/20",
    technology: "bg-secondary/10 text-secondary border-secondary/20",
    community: "bg-primary/10 text-primary border-primary/20",
  };

  const typeLabels = {
    sponsor: "Sponsor",
    technology: "Technology Partner",
    community: "Community Partner",
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
                  Partners
                </p>
                <h1 className="mt-4 text-5xl sm:text-6xl text-balance text-white dark:text-foreground">
                  Backed by Leaders Who Value Execution
                </h1>
                <p className="mt-5 text-lg text-white/80 dark:text-foreground/80 leading-relaxed">
                  Top companies and organizations support TIC because they
                  believe in developing Africa's next generation of world-class
                  tech talent.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Current Partners Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-semibold text-primary font-poppins mb-8">
                Our Partners
              </h2>
            </AnimatedSection>

            <StaggerContainer
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              staggerDelay={0.08}
            >
              {partners.map((partner) => (
                <StaggerItem key={partner.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full rounded-2xl border border-border bg-card p-8 tic-shadow transition-shadow hover:shadow-lg"
                  >
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${typeColors[partner.type]}`}
                    >
                      {typeLabels[partner.type]}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-primary font-poppins">
                      {partner.name}
                    </h3>
                    <p className="mt-3 text-foreground/70 leading-relaxed">
                      {partner.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Partnership Benefits Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-semibold text-primary font-poppins">
                  Why Partner with TIC?
                </h2>
                <p className="mt-4 text-foreground/70 leading-relaxed">
                  Partners get access to a high-signal talent pipeline and
                  measurable execution outcomes. We provide structured
                  visibility through showcases and community programming.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid sm:grid-cols-2 gap-6"
              staggerDelay={0.08}
            >
              {partnershipBenefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="h-full rounded-2xl border border-border bg-background p-8 tic-shadow">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 grid place-items-center text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-primary font-poppins">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-foreground/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Partnership Tiers Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-semibold text-primary font-poppins">
                  Ways to Partner
                </h2>
                <p className="mt-4 text-foreground/70 leading-relaxed">
                  Choose the partnership model that aligns with your goals. We
                  tailor packages and visibility around measurable outcomes.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer
              className="grid sm:grid-cols-2 gap-6"
              staggerDelay={0.08}
            >
              {partnershipTiers.map((tier) => (
                <StaggerItem key={tier.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full rounded-2xl border border-border bg-card p-8 tic-shadow transition-shadow hover:shadow-lg"
                  >
                    <h3 className="text-xl font-semibold text-primary font-poppins">
                      {tier.name}
                    </h3>
                    <p className="mt-3 text-foreground/70 leading-relaxed">
                      {tier.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {tier.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-foreground/70"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-primary dark:bg-background text-white dark:text-foreground">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="rounded-2xl border border-white/15 dark:border-border bg-white/10 dark:bg-muted/50 p-8 md:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl font-semibold text-white dark:text-foreground font-poppins">
                      Want to Partner with Us?
                    </h2>
                    <p className="mt-4 text-white/80 dark:text-foreground/80 leading-relaxed">
                      Email us what you want to support and we will respond with
                      a clear scope and outcomes. Whether it is hackathons,
                      labs, demo days, or internships, we make partnership
                      straightforward.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                    <Link
                      href="/contact"
                      className="px-7 py-3 rounded-xl bg-white dark:bg-primary text-primary dark:text-primary-foreground font-semibold hover:bg-white/90 dark:hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      Contact Us <ArrowRight size={18} />
                    </Link>
                    <a
                      href="mailto:tic@pau.edu.ng?subject=Partnership%20Inquiry"
                      className="px-7 py-3 rounded-xl border-2 border-white/70 dark:border-white/20 text-white dark:text-foreground font-semibold hover:bg-white/10 dark:hover:bg-white/5 transition-colors inline-flex items-center justify-center"
                    >
                      Email Directly
                    </a>
                  </div>
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
