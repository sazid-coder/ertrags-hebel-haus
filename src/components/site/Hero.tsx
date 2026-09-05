import heroImage from "@/assets/hero-system.jpg";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-32 pb-0 lg:pt-40">
      <div className="shell relative">
        <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow flex items-center gap-4 text-brass">
                <span className="h-px w-10 bg-brass" />
                Ertragsmanufaktur
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="display-1 mt-8 text-on-navy">
                Wir machen Unternehmen
                <br />
                <span className="text-brass">profitabler</span>, liquider
                <br />
                und wertvoller.
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="lead mt-9 max-w-xl text-on-navy-muted">
                Wir arbeiten mit inhabergeführten mittelständischen Unternehmen daran,
                mehr aus dem Unternehmen herauszuholen, das sie bereits aufgebaut haben.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-11 flex flex-col gap-3 sm:flex-row">
                <a href="#leistungen" className="btn btn-brass">
                  Unsere Leistungen
                </a>
                <a href="#gewinnhebel-system" className="btn btn-outline-light">
                  Das Gewinnhebel-System
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="relative">
                <img
                  src={heroImage}
                  alt="Abstrakte Darstellung eines wirtschaftlichen Hebels innerhalb eines strukturierten Systems"
                  width={1408}
                  height={1200}
                  className="w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-16 border-t border-hairline-dark pt-12 pb-20 lg:mt-24 lg:pb-28">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-4">
                <p className="eyebrow text-brass">Das Gewinnhebel-System</p>
                <h2 className="display-3 mt-4 text-on-navy">
                  Vom Symptom zum wirtschaftlichen Hebel.
                </h2>
              </div>
              <p className="text-[17px] leading-relaxed text-on-navy-muted lg:col-span-6 lg:col-start-7 lg:text-lg">
                Wir identifizieren, wo wirtschaftliches Potenzial liegt, priorisieren die
                Hebel mit der größten Wirkung und begleiten die Umsetzung dort, wo sie
                sich rechnet.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
