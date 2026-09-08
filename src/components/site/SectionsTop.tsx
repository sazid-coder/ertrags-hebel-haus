import { useEffect, useRef, useState } from "react";
import industryImage from "@/assets/industry.jpg";
import { Reveal, useInView } from "./Reveal";

/* ------------------------------------------------------------------ */
/* Section 2 — Was wir tun                                            */
/* ------------------------------------------------------------------ */

const LEVERS = [
  {
    n: "01",
    title: "Preis & Marge",
    text: "Wo Leistung besser ist als der erzielte Preis – und wo Marge im Tagesgeschäft verloren geht.",
  },
  {
    n: "02",
    title: "Kosten & Einkauf",
    text: "Kostenstrukturen, Materialeinsatz und Einkaufskonditionen als wirtschaftlicher Hebel, nicht als Sparprogramm.",
  },
  {
    n: "03",
    title: "Liquidität & gebundenes Kapital",
    text: "Kapital, das in Beständen, Forderungen und Vorleistungen gebunden ist – und wieder verfügbar werden kann.",
  },
  {
    n: "04",
    title: "Prozesse & Unternehmerzeit",
    text: "Abläufe, die Ergebnis kosten, und Entscheidungen, die heute noch am Unternehmer hängen.",
  },
  {
    n: "05",
    title: "Positionierung & Kundenstruktur",
    text: "Welche Kunden, Leistungen und Segmente wirtschaftlich tragen – und welche nur Auslastung erzeugen.",
  },
];

export function WasWirTun() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-background py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Was wir tun</p>
              <h2 className="display-2 mt-6">
                Wir suchen nicht nach mehr Arbeit.
                <br />
                Wir suchen nach mehr <span className="text-brass">Ertrag</span>.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <p className="lead text-muted-foreground">
                Wir betrachten das Unternehmen aus wirtschaftlicher Perspektive: Wo
                entsteht Wert, wo bleibt Wert liegen und welcher Eingriff verändert das
                Ergebnis messbar?
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-muted-foreground">
                Dafür betrachten wir fünf zentrale wirtschaftliche Hebel.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 border-t border-hairline lg:mt-24">
          <ul>
            {LEVERS.map((lever, i) => {
              const isActive = active === i;
              return (
                <li
                  key={lever.n}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  tabIndex={0}
                  className={`group border-b border-hairline transition-colors duration-500 focus:outline-none ${
                    isActive ? "bg-secondary" : "bg-transparent"
                  }`}
                >
                  <div className="grid items-start gap-4 px-4 py-7 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-9">
                    <span
                      className={`eyebrow lg:col-span-1 ${isActive ? "text-brass" : "text-muted-foreground"} transition-all duration-500 ${isActive ? "lg:translate-x-1" : ""}`}
                    >
                      {lever.n}
                    </span>
                    <h3
                      className={`display-3 lg:col-span-5 ${isActive ? "text-navy" : "text-navy/80"} transition-colors duration-500`}
                    >
                      {lever.title}
                    </h3>
                    <div className="lg:col-span-6">
                      <div
                        className={`h-px bg-brass transition-all duration-700 ${isActive ? "w-16 opacity-100" : "w-0 opacity-0"}`}
                      />
                      <p
                        className={`text-base leading-relaxed text-muted-foreground transition-all duration-500 ${isActive ? "mt-4 opacity-100" : "mt-0 opacity-60"}`}
                      >
                        {lever.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="display-3 text-navy">
              Welcher Hebel bringt jetzt den größten wirtschaftlichen Effekt?
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <div className="border-l-2 border-brass pl-6 lg:pl-8">
              <p className="text-2xl leading-tight font-semibold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Erst verstehen.
                <br />
                Dann belegen.
                <br />
                Dann verbessern.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="mt-20 border-t border-hairline pt-12 lg:mt-28 lg:pt-16">
            <p className="display-2 max-w-5xl">
              Umsatz macht beschäftigt. <span className="text-brass">Gewinn macht frei.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Das Gewinnhebel-System                                 */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    n: "01",
    title: "Symptome erkennen",
    text: "Was im Unternehmen spürbar ist: enge Liquidität, Preisdruck, Hektik, Ergebnis unter Erwartung.",
  },
  {
    n: "02",
    title: "Gewinnhebel einordnen",
    text: "Das Symptom wird einem wirtschaftlichen Hebel zugeordnet – aus einer Beobachtung wird eine Hypothese.",
  },
  {
    n: "03",
    title: "Evidenz prüfen",
    text: "Vorhandene Zahlen, Prozesse und Daten belegen oder widerlegen die Hypothese. Meinung ersetzt keinen Nachweis.",
  },
  {
    n: "04",
    title: "Wirkung priorisieren",
    text: "Nicht alles gleichzeitig: zuerst die Hebel mit der größten wirtschaftlichen Wirkung und realistischer Umsetzbarkeit.",
  },
  {
    n: "05",
    title: "Umsetzung",
    text: "Begleitung in der Umsetzung – im laufenden Geschäft, mit den Menschen im Unternehmen, bis die Wirkung messbar ist.",
  },
];

function Step({
  step,
  index,
  onActive,
  isActive,
}: {
  step: (typeof STEPS)[number];
  index: number;
  onActive: (i: number) => void;
  isActive: boolean;
}) {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) onActive(index);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [index, onActive]);

  return (
    <li ref={ref} className="relative pb-14 pl-10 last:pb-0 sm:pl-16">
      <span
        className={`absolute top-2 left-0 block h-2 w-2 -translate-x-1/2 transition-all duration-500 sm:left-0 ${
          isActive ? "scale-125 bg-brass" : "bg-on-navy/25"
        }`}
        style={{ left: "1px" }}
      />
      <p
        className={`eyebrow transition-colors duration-500 ${isActive ? "text-brass" : "text-on-navy/40"}`}
      >
        {step.n}
      </p>
      <h3
        className={`mt-3 text-2xl font-semibold tracking-tight uppercase transition-colors duration-500 sm:text-3xl ${
          isActive ? "text-on-navy" : "text-on-navy/40"
        }`}
      >
        {step.title}
      </h3>
      <p
        className={`mt-4 max-w-xl leading-relaxed transition-opacity duration-500 ${
          isActive ? "text-on-navy-muted opacity-100" : "text-on-navy-muted/60 opacity-70"
        }`}
      >
        {step.text}
      </p>
    </li>
  );
}

export function GewinnhebelSystem() {
  const [active, setActive] = useState(0);
  const progress = ((active + 1) / STEPS.length) * 100;

  return (
    <section id="gewinnhebel-system" className="bg-navy py-24 lg:py-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-brass">Das Gewinnhebel-System</p>
              <h2 className="display-2 mt-6 text-on-navy">
                Vom Symptom zum wirtschaftlichen Hebel.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="lead text-on-navy-muted">
              Das Gewinnhebel-System ist keine Methode auf dem Papier, sondern eine
              Reihenfolge. Sie führt von dem, was im Unternehmen spürbar ist, zu dem, was
              wirtschaftlich wirkt.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-7">
            <div className="absolute top-2 bottom-0 left-[1px] w-px bg-on-navy/15">
              <div
                className="w-px bg-brass transition-[height] duration-700 ease-out"
                style={{ height: `${progress}%` }}
              />
            </div>
            <ol className="relative">
              {STEPS.map((step, i) => (
                <Step
                  key={step.n}
                  step={step}
                  index={i}
                  isActive={active === i}
                  onActive={setActive}
                />
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="sticky top-28 border-t border-hairline-dark pt-8">
              <p className="eyebrow text-brass">Ertragsmanufaktur Methodik</p>
              <ul className="mt-8 space-y-4">
                {["Symptom", "Hypothese", "Evidenz", "Priorität", "Umsetzung"].map(
                  (word, i) => (
                    <li
                      key={word}
                      className={`text-2xl font-semibold tracking-tight transition-colors duration-500 sm:text-[2rem] ${
                        i <= active ? "text-on-navy" : "text-on-navy/25"
                      }`}
                    >
                      <span
                        className={`mr-3 text-base ${i <= active ? "text-brass" : "text-on-navy/20"}`}
                      >
                        →
                      </span>
                      {word}
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-10 border-l-2 border-brass pl-5 text-2xl leading-tight font-semibold text-on-navy">
                Der Rückspiegel ist kein Lenkrad.
              </p>
            </div>
          </div>
        </div>

        <Reveal>
          <div className="mt-20 border-y border-hairline-dark py-10 lg:mt-28 lg:py-12">
            <div className="grid gap-7 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-3">
                <p className="eyebrow text-brass">Fünf wirtschaftliche Hebel</p>
                <p className="mt-4 text-sm leading-relaxed text-on-navy-muted">
                  Jeder Befund wird dort eingeordnet, wo wirtschaftliche Wirkung entsteht.
                </p>
              </div>
              <ol className="grid gap-px bg-hairline-dark sm:grid-cols-2 lg:col-span-9 lg:grid-cols-5">
                {["Preis & Marge", "Kosten & Einkauf", "Liquidität", "Prozesse & Unternehmerzeit", "Positionierung & Kundenstruktur"].map((lever, i) => (
                  <li key={lever} className="bg-navy px-5 py-6">
                    <span className="eyebrow text-brass">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-3 text-base leading-snug font-semibold text-on-navy">{lever}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-20 border-t border-hairline-dark pt-12 lg:mt-28">
            <blockquote className="max-w-4xl text-2xl leading-tight font-semibold tracking-tight text-on-navy sm:text-3xl lg:text-[2.75rem]">
              Ein Unternehmen wird nicht besser, weil jemand mehr Probleme findet.
              <span className="text-brass">
                {" "}
                Es wird besser, wenn die richtigen Probleme zuerst gelöst werden.
              </span>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — Unsere Leistungen                                      */
/* ------------------------------------------------------------------ */

const SERVICES = [
  {
    n: "01",
    name: "Gewinnhebel-Scan",
    benefit: "Wirtschaftliche Ansatzpunkte schnell erkennen.",
    when: "Wenn eine erste Standortbestimmung und klare Orientierung gebraucht werden.",
  },
  {
    n: "02",
    name: "Ertrags-Audit",
    benefit: "Potenziale belegen und nach Wirkung priorisieren.",
    when: "Wenn Vermutungen durch Zahlen und Prozesse geprüft werden sollen.",
  },
  {
    n: "03",
    name: "Gewinnhebel-Sprint",
    benefit: "Einen priorisierten Hebel konsequent umsetzen.",
    when: "Wenn aus einer belegten Priorität konkrete Wirkung werden soll.",
  },
  {
    n: "04",
    name: "Unternehmens-Beirat",
    benefit: "Wirtschaftliche Disziplin dauerhaft verankern.",
    when: "Wenn die Unternehmensführung kontinuierliche Begleitung auf Augenhöhe sucht.",
  },
];

export function Leistungen() {
  return (
    <section id="leistungen" className="bg-background py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <div className="grid items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-muted-foreground">Unsere Leistungen</p>
              <h2 className="display-2 mt-6">
                Von der ersten Standortbestimmung bis zur Umsetzung.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 border-t border-hairline lg:mt-20">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <a
                href="#kontakt"
                className="group block border-b border-hairline transition-colors duration-500 hover:bg-secondary"
              >
                <div className="grid gap-5 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:py-14">
                  <span className="num-xl text-navy/15 transition-colors duration-500 group-hover:text-brass lg:col-span-2">
                    {s.n}
                  </span>
                  <div className="lg:col-span-5">
                    <h3 className="text-xl font-semibold tracking-tight uppercase lg:text-2xl">
                      {s.name}
                    </h3>
                    <p className="mt-3 text-lg leading-snug font-semibold text-navy/70 lg:text-xl">
                      {s.benefit}
                    </p>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="eyebrow text-muted-foreground">Wann es sinnvoll ist</p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{s.when}</p>
                    <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-navy transition-colors group-hover:text-brass">
                      Mehr erfahren
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-20 border-l-2 border-brass pl-6 text-3xl leading-tight font-semibold lg:mt-28 lg:text-5xl">
            Nicht jeder Umsatz ist guter Umsatz.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-12">
            <p className="display-3 lg:col-span-6">
              Ein System statt einzelner <span className="text-brass">Beratungsprodukte</span>.
            </p>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-6">
                {["Orientieren.", "Analysieren.", "Umsetzen.", "Begleiten."].map((w) => (
                  <span key={w} className="text-lg font-semibold text-navy">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 5 — Für wen wir arbeiten                                   */
/* ------------------------------------------------------------------ */

const SITUATIONS = [
  "Viel Umsatz. Zu wenig Ergebnis.",
  "Wachstum macht das Unternehmen voller, aber nicht leichter.",
  "Das Geschäft ist profitabel – aber die Liquidität bleibt eng.",
  "Der Unternehmer ist noch immer das wichtigste Betriebssystem.",
  "Gute Leistung trifft auf zu viel Preisdruck.",
  "Es gibt viele mögliche Baustellen – aber keine klare Priorität.",
];

const BRANCHEN = [
  "Produzierende und technische Unternehmen",
  "Handwerks- und Baubetriebe",
  "Technische Dienstleister",
  "Professionelle Dienstleistungen",
  "IT- und Software-Dienstleister",
  "Handelsunternehmen",
  "Logistik- und serviceorientierte Unternehmen",
];

export function FuerWen() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="fuer-wen" className="bg-secondary py-24 lg:py-36">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-navy/60">Für wen wir arbeiten</p>
          <h2 className="display-2 mt-6 max-w-4xl">
            Für Unternehmer, deren Unternehmen funktioniert – aber schwerer läuft, als es
            müsste.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="lead mt-8 max-w-2xl text-navy/70">
            Wir arbeiten mit inhabergeführten mittelständischen Unternehmen, in denen
            Entscheidungen noch am Tisch des Unternehmers getroffen werden – und in denen
            wirtschaftliches Potenzial vorhanden ist, aber nicht vollständig gehoben wird.
          </p>
        </Reveal>

        <div ref={ref} className="mt-16 grid gap-px border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {SITUATIONS.map((s, i) => (
            <div
              key={s}
              className={`reveal ${inView ? "reveal-in" : ""} group bg-background p-8 transition-colors duration-500 hover:bg-navy lg:p-10`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="text-3xl leading-none text-brass">„</span>
              <p className="mt-4 text-xl leading-snug font-semibold tracking-tight text-navy transition-colors duration-500 group-hover:text-on-navy lg:text-[1.6rem]">
                {s}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12">
          <Reveal className="lg:col-span-12">
            <p className="eyebrow text-navy/60">Typische Branchen</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {BRANCHEN.map((b) => (
                <li
                  key={b}
                  className="border border-navy/15 px-3 py-2 text-xs font-semibold text-navy/65"
                >
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8 lg:col-start-5">
            <div className="h-full bg-navy p-8 lg:p-12">
              <p className="eyebrow text-brass">Klarheit</p>
              <h3 className="display-3 mt-5 text-on-navy">
                Für wen wir nicht die Richtigen sind
              </h3>
              <p className="mt-6 leading-relaxed text-on-navy-muted">
                Wir sind keine Restrukturierungsberatung für Unternehmen in akuter
                Insolvenzgefahr. Und wir verkaufen weder Motivation noch
                Wunderversprechen.
              </p>
              <p className="mt-4 leading-relaxed text-on-navy-muted">
                Unsere Arbeit setzt ein grundsätzlich funktionierendes Geschäftsmodell
                voraus – und die Bereitschaft, wirtschaftliche Wirkung an Zahlen zu
                messen.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 overflow-hidden">
            <img
              src={industryImage}
              alt="Präzisionsbearbeitung in einem mittelständischen Produktionsbetrieb"
              loading="lazy"
              width={1408}
              height={912}
              className="h-[240px] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03] sm:h-[360px] lg:h-[460px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
