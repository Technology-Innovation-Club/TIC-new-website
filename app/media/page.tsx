import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl sm:text-6xl text-balance">Media</h1>
        <p className="mt-5 text-lg text-foreground/70 leading-relaxed max-w-3xl">
          TIC Insights, impact reports, and a gallery will live here.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-border bg-white p-7 tic-shadow">
            <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
              Research
            </p>
            <p className="mt-2 text-foreground/70 leading-relaxed">
              TIC Insights: short, practical reports on student building and
              emerging tech.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7 tic-shadow">
            <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
              Impact
            </p>
            <p className="mt-2 text-foreground/70 leading-relaxed">
              Impact reports that summarize outcomes, placements, and projects.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-7 tic-shadow">
            <p className="text-sm font-extrabold tracking-widest uppercase text-primary">
              Gallery
            </p>
            <p className="mt-2 text-foreground/70 leading-relaxed">
              Photos from demos, hackathons, and community events.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
