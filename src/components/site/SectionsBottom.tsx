import { useEffect, useState } from "react";
import founderImage from "@/assets/founder.jpg";
import { Reveal, useInView } from "./Reveal";

/* ------------------------------------------------------------------ */
/* Section 6 — Warum Ertragsmanufaktur                                */
/* ------------------------------------------------------------------ */

const PRINCIPLES = [
  {
    n: "01",
    title: "Private-Equity-Disziplin",
    text: "Wir betrachten das Unternehmen wie einen Wert, der gesteuert wird: Ergebnis, Liquidität und Unternehmenswert stehen im Mittelpunkt.",
  },
  {
    n: "02",
    title: "Operative Erfahrung",
    text: "Wir kennen die Realität im Unternehmen aus der Verantwortung heraus – nicht aus der Beobachtung.",
  },
  {
    n: "03",
    title: "Evidenz vor Meinung",
    text: "Was wir empfehlen, muss belegbar sein. Vorhandene Zahlen zählen mehr als Erfahrungssätze.",
  },
  {
    n: "04",
    title: "Priorität statt Maßnahmenfriedhof",
    text: "Wenige Hebel mit großer Wirkung, statt langer Listen, die niemand umsetzt.",
  },
  {
    n: "05",
    title: "Umsetzung statt Übergabe",
    text: "Unsere Arbeit endet nicht mit einer Präsentation. Wir begleiten die Umsetzung und machen die Wirkung, wo möglich, messbar.",
  },
  {
    n: "06",
    title: "Skin in the Game",
    text: "Wo Wirkung sauber messbar ist, kann ein Teil unserer Vergütung an den tatsächlich realisierten Erfolg gekoppelt werden.",
  },
];

export function Warum() {
  return (
    <section id="warum" className="bg-navy py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-brass">Warum Ertragsmanufaktur</p>
            <h2 className="display-2 mt-6 text-on-navy">
              Gute Ratschläge verändern noch keine Zahlen.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border-t border-hairline-dark md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 70}>
              <div className="group h-full border-b border-hairline-dark px-0 py-10 transition-colors duration-500 md:px-8 md:odd:border-r md:odd:border-hairline-dark lg:px-10 lg:py-12">
                <span className="eyebrow text-brass">{p.n}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight uppercase text-on-navy lg:text-2xl">
                  {p.title}
                </h3>
                <div className="mt-5 h-px w-8 bg-brass transition-all duration-700 group-hover:w-16" />
                <p className="mt-5 leading-relaxed text-on-navy-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="display-3 text-on-navy">
                Es zählt:
                <br />
                <span className="text-brass">Was verändert das Ergebnis?</span>
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow text-on-navy-muted">Unser Unterschied in einem Satz</p>
              <blockquote className="mt-6 border-l-2 border-brass pl-6 text-2xl leading-tight font-semibold tracking-tight text-on-navy sm:text-3xl lg:pl-8 lg:text-[2.75rem]">
                Private-Equity-Disziplin.
                <br />
                Mittelstandsrealität.
                <br />
                Umsetzungskraft.
              </blockquote>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 7 — Wer dahinter steht                                     */
/* ------------------------------------------------------------------ */

export function Founder() {
  return (
    <section id="ueber-uns" className="bg-background py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-muted-foreground">
            Wer hinter der Ertragsmanufaktur steht
          </p>
          <h2 className="display-2 mt-6 max-w-3xl">
            Aus Unternehmenspraxis entstanden. Nicht am Whiteboard erfunden.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden bg-secondary">
              <img
                src={founderImage}
                alt="Eric Voigt, Gründer der Ertragsmanufaktur"
                loading="lazy"
                width={1104}
                height={1408}
                className="w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.02]"
              />
            </div>
            <div className="mt-6 flex items-baseline justify-between border-t border-hairline pt-5">
              <p className="text-xl font-semibold tracking-tight">Eric Voigt</p>
              <p className="eyebrow text-brass">Gründer</p>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <p className="lead text-muted-foreground">Die Methode folgt Erfahrung aus operativer Verantwortung – nicht einer theoretischen Beratungslogik.</p>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-10">
                {[
                  "Operative Führung",
                  "Transformation",
                  "Turnaround",
                  "Post-Merger-Integration",
                  "Private Equity",
                ].map((item, i) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-5 border-b border-hairline py-4"
                  >
                    <span className="eyebrow text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold tracking-tight text-navy">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={240}>
              <blockquote className="mt-10 border-l-2 border-brass pl-6 text-2xl leading-tight font-semibold tracking-tight text-navy sm:text-3xl">
                Private-Equity-Disziplin. Mittelstandsrealität. Umsetzungskraft.
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 8 — Wie wir arbeiten                                       */
/* ------------------------------------------------------------------ */

const WORK = [
  "Unternehmen verstehen",
  "Evidenz prüfen",
  "Prioritäten setzen",
  "Umsetzung begleiten",
];

export function WieWirArbeiten() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="wie-wir-arbeiten" className="bg-secondary py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-navy/60">Wie wir arbeiten</p>
            <h2 className="display-2 mt-6">
              Klar in der Analyse.
              <br />
              Pragmatisch in der Umsetzung.
              <br />
              <span className="text-brass">Auf Augenhöhe</span> im Unternehmen.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-16 border-t border-navy/15 lg:mt-24">
          {WORK.map((item, i) => {
            const isActive = active === i;
            return (
              <li
                key={item}
                onMouseEnter={() => setActive(i)}
                className="border-b border-navy/15"
              >
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-5 py-7 sm:gap-10 lg:py-8">
                  <span
                    className={`eyebrow transition-colors duration-500 ${isActive ? "text-brass" : "text-navy/40"}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className={`text-xl leading-snug font-semibold tracking-tight transition-all duration-500 sm:text-2xl lg:text-[2rem] ${
                      isActive ? "translate-x-1 text-navy" : "text-navy/55"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <Reveal>
          <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12">
            <p className="display-3 lg:col-span-4">Nicht alles verändern. <span className="text-brass">Das Richtige verändern.</span></p>
            <p className="text-2xl leading-tight font-semibold tracking-tight text-navy sm:text-3xl lg:col-span-7 lg:col-start-6 lg:text-[2.75rem]">
              Empathie öffnet die Tür.
              <br />
              Evidenz trägt die Empfehlung.
              <br />
              <span className="text-brass">Umsetzung schafft Vertrauen.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 9 — Ergebnisse & Belege                                    */
/* ------------------------------------------------------------------ */

const RESULTS = [
  { value: "€4,7 Mio.", label: "jährliche Kostensenkung" },
  { value: "€2,4 Mio.", label: "Working Capital freigesetzt" },
  { value: "65 → 95 %", label: "Liefertreue" },
  { value: "1 Mio. → 11,5 Mio.", label: "Produktionskapazität ausgebaut" },
];

export function Ergebnisse() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="ergebnisse" className="bg-background py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-muted-foreground">Ergebnisse, die sich messen lassen</p>
            <h2 className="display-2 mt-6">
              Wertsteigerung zeigt sich nicht in Folien.
              <br />
              Sondern in <span className="text-brass">Zahlen</span>.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <p className="leading-relaxed text-muted-foreground">
              Die folgenden Größenordnungen stammen aus früheren Mandaten von Eric Voigt in
              operativer Führung, Transformation und Wertsteigerung. Sie sind Belege für
              Erfahrung – keine zugesicherten Ergebnisse für Mandate der Ertragsmanufaktur.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="mt-16 border-t border-hairline lg:mt-24">
          <div className="grid md:grid-cols-2">
            {RESULTS.map((r, i) => (
              <div
                key={r.label}
                className={`reveal ${inView ? "reveal-in" : ""} border-b border-hairline py-12 pr-6 md:border-r md:nth-[2n]:border-r-0 lg:py-20 lg:pr-10`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] font-semibold text-navy tabular-nums">{r.value}</p>
                <p className="mt-4 text-lg font-semibold tracking-tight text-navy/80">
                  {r.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Die Größenordnungen sind nicht auf jedes mittelständische Unternehmen
                übertragbar.
              </p>
              <p className="mt-3 text-lg font-semibold tracking-tight text-navy">
                Wir versprechen keine pauschalen Prozentsätze.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border-l-2 border-brass pl-6 lg:pl-8">
                <p className="text-xl leading-snug font-semibold tracking-tight text-navy sm:text-2xl lg:text-[1.9rem]">
                  Wo entsteht wirtschaftlicher Wert?
                  <br />
                  Wo bleibt davon heute etwas liegen?
                  <br />
                  Und welcher Hebel verändert das Ergebnis am stärksten?
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Final CTA + Footer                                                 */
/* ------------------------------------------------------------------ */

export function FinalCta() {
  return (
    <section id="kontakt" className="bg-navy py-24 lg:py-40">
      <div className="shell">
        <Reveal>
          <p className="eyebrow flex items-center gap-4 text-brass">
            <span className="h-px w-10 bg-brass" />
             Kontakt
          </p>
          <h2 className="display-2 mt-8 max-w-4xl text-on-navy">
             Lassen Sie uns über Ihr Unternehmen sprechen.
          </h2>
          <p className="lead mt-8 max-w-2xl text-on-navy-muted">
            Klar, vertraulich und auf Augenhöhe.
          </p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:kontakt@ertragsmanufaktur.de" className="btn btn-brass">
              Kontakt aufnehmen
            </a>
            <a href="#gewinnhebel-system" className="btn btn-outline-light">
              Gewinnhebel-Scan kennenlernen
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FOOTER_NAV = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Gewinnhebel-System", href: "#gewinnhebel-system" },
  { label: "Für wen wir arbeiten", href: "#fuer-wen" },
  { label: "Warum Ertragsmanufaktur", href: "#warum" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Wie wir arbeiten", href: "#wie-wir-arbeiten" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="bg-navy pb-12">
      <div className="shell">
        <div className="h-px w-full bg-gradient-to-r from-brass via-brass/30 to-transparent" />
        <div className="grid gap-12 pt-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-on-navy">Ertragsmanufaktur</p>
            <p className="mt-6 text-xl leading-tight font-semibold tracking-tight text-on-navy-muted">
              Private-Equity-Disziplin.
              <br />
              Mittelstandsrealität.
              <br />
              Umsetzungskraft.
            </p>
          </div>
          <nav className="lg:col-span-4 lg:col-start-7">
            <ul className="grid gap-3 sm:grid-cols-2">
              {FOOTER_NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-on-navy-muted transition-colors hover:text-brass"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-2 lg:col-start-11">
            <ul className="flex gap-6 lg:flex-col lg:gap-3">
              {["Impressum", "Datenschutz"].map((l) => (
                <li key={l}>
                  <a
                    href="#kontakt"
                    className="text-sm text-on-navy-muted transition-colors hover:text-brass"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rule-dark mt-14" />
        <p className="mt-6 text-xs tracking-[0.08em] uppercase text-on-navy-muted/70">
          © {year ?? ""} Ertragsmanufaktur
        </p>
      </div>
    </footer>
  );
}
