import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl sm:text-6xl text-balance">Partners</h1>
        <p className="mt-5 text-lg text-foreground/70 leading-relaxed max-w-3xl">
          This page is a placeholder. We will publish partner logos after we
          have written permission.
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-gray-50 p-8">
          <p className="font-semibold text-primary font-poppins">Pitch</p>
          <p className="mt-2 text-foreground/70 leading-relaxed">
            Partners get access to a high-signal talent pipeline and measurable
            execution outcomes. We also provide structured visibility through
            showcases and community programming.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
