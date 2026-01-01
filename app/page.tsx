import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { Objectives } from "@/components/objectives";
import { Partners } from "@/components/partners";
import { Programmes } from "@/components/programmes";
import { Wins } from "@/components/wins";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <Hero />
        <Mission />
        <Wins />
        <Programmes />
        <Objectives />
        <Partners />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
