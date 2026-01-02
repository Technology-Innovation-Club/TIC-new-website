import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ProgrammesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl sm:text-6xl text-balance">Programmes</h1>
        <p className="mt-5 text-lg text-foreground/70 leading-relaxed max-w-3xl">
          Explore our structured programmes designed to help students build real
          projects, gain hands-on experience, and develop world-class technical skills.
        </p>
      </main>
      <Footer />
    </div>
  );
}
