import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Streams } from "@/components/streams";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <Streams />
      </main>
      <Footer />
    </div>
  );
}
