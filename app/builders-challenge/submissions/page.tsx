import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AdminConsole } from "@/components/builders-challenge/admin-console";

export const metadata = {
  title: "Submissions | Builders Challenge | Tech Innovation Club",
  description: "Password-gated reviewer view of Builders Challenge submissions.",
  robots: "noindex, nofollow",
};

export default function SubmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main">
        <section className="w-full bg-primary py-14 text-white dark:bg-background dark:text-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-extrabold uppercase tracking-widest text-white/70 dark:text-foreground/60">
              Builders Challenge · Reviewers only
            </p>
            <h1 className="mt-3 font-poppins text-4xl font-semibold text-white sm:text-5xl dark:text-foreground">
              Submissions
            </h1>
            <p className="mt-3 max-w-2xl text-white/75 dark:text-foreground/70">
              Every prototype link, process brief, and writeup in one place.
              This page is not indexed and requires the reviewer password.
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <AdminConsole />
        </section>
      </main>
      <Footer />
    </div>
  );
}
