import { useEffect, useState } from "react";

const NAV = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Gewinnhebel-System", href: "#gewinnhebel-system" },
  { label: "Für wen wir arbeiten", href: "#fuer-wen" },
  { label: "Warum Ertragsmanufaktur", href: "#warum" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Wie wir arbeiten", href: "#wie-wir-arbeiten" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-navy/95 border-b border-hairline-dark backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell">
        <div className="grid h-[72px] grid-cols-[auto_minmax(0,1fr)] items-center gap-6 lg:h-20">
          <a
            href="#top"
            className="eyebrow shrink-0 whitespace-nowrap text-on-navy transition-colors hover:text-brass"
          >
            Ertragsmanufaktur
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[13.5px] text-on-navy-muted transition-colors hover:text-brass"
              >
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="btn btn-brass px-5 py-3 text-sm">
              Gespräch vereinbaren
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] xl:hidden"
          >
            <span
              className={`h-px w-6 bg-on-navy transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-on-navy transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-navy transition-[max-height,opacity] duration-500 xl:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 pt-4 pb-10">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-hairline-dark py-4 text-xl text-on-navy transition-colors hover:text-brass"
            >
              <span className="eyebrow text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="btn btn-brass mt-6 w-full"
          >
            Gespräch vereinbaren
          </a>
        </div>
      </div>
    </header>
  );
}
