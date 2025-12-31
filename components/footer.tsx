import { Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl border border-border bg-white grid place-items-center">
                <img
                  src="/tech-innovation-club-logo.jpg"
                  alt="TIC logo"
                  className="w-9 h-9 object-contain"
                />
              </div>
              <div>
                <p className="font-extrabold text-primary">
                  Tech Innovation Club
                </p>
                <p className="text-xs text-foreground/60">
                  Pan-Atlantic University • Lagos
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
              Building Africa’s next generation of world-class tech leaders
              through real products, real wins, and real impact.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold text-primary mb-4">Quick links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#wins"
                  className="hover:text-primary transition-colors"
                >
                  Wins
                </a>
              </li>
              <li>
                <a
                  href="#streams"
                  className="hover:text-primary transition-colors"
                >
                  Streams
                </a>
              </li>
              <li>
                <a
                  href="#calendar"
                  className="hover:text-primary transition-colors"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-primary mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Partner / Sponsor
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Mentor with TIC
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Join TIC
                </a>
              </li>
              <li>
                <a
                  href="mailto:tic@pau.edu.ng"
                  className="hover:text-primary transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-primary mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="mailto:tic@pau.edu.ng"
                className="w-11 h-11 rounded-xl border border-border bg-muted grid place-items-center text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="Email TIC"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl border border-border bg-muted grid place-items-center text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="TIC LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl border border-border bg-muted grid place-items-center text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="TIC Twitter/X"
              >
                <Twitter size={18} />
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-secondary/25 bg-secondary/10 p-4">
              <p className="text-xs font-extrabold tracking-widest uppercase text-primary">
                Partner inbox
              </p>
              <p className="mt-1 text-sm text-foreground/70">tic@pau.edu.ng</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/55">
            © 2025 Tech Innovation Club, Pan-Atlantic University. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-foreground/55">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
