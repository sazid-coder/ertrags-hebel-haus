import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  WasWirTun,
  GewinnhebelSystem,
  Leistungen,
  FuerWen,
} from "@/components/site/SectionsTop";
import {
  Warum,
  Founder,
  WieWirArbeiten,
  Ergebnisse,
  FinalCta,
  Footer,
} from "@/components/site/SectionsBottom";

const TITLE = "Ertragsmanufaktur – Profitabler, liquider, wertvoller";
const DESCRIPTION =
  "Private-Equity-Disziplin. Mittelstandsrealität. Umsetzungskraft. Wir arbeiten mit inhabergeführten Mittelstandsunternehmen an Gewinn, Liquidität und Unternehmenswert.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <WasWirTun />
        <GewinnhebelSystem />
        <Leistungen />
        <FuerWen />
        <Warum />
        <Founder />
        <WieWirArbeiten />
        <Ergebnisse />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
