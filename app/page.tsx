import { Calendar } from "@/components/calendar";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Mission } from "@/components/mission";
import { Objectives } from "@/components/objectives";
import { Streams } from "@/components/streams";
import { Values } from "@/components/values";
import { Wins } from "@/components/wins";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <Hero />
        <Wins />
        <Mission />
        <Values />
        <Objectives />
        <Calendar />
        <Streams />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
