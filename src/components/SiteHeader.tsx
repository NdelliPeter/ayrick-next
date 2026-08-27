import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { LogoWordmark } from "@/components/Placeholder";
import { nav, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/95 backdrop-blur">
      <div className="container-wide flex h-[72px] items-center justify-between gap-8">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Ayrick Architecture — home">
          <LogoWordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="link-underline text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors hover:text-foreground"
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 text-[0.75rem] font-semibold uppercase tracking-[0.14em]">
            {(["en", "fr"] as const).map((code, i) => (
              <span key={code} className="flex items-center gap-1">
                {i === 1 && <span className="text-rule">/</span>}
                <button
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={cn(
                    "px-0.5 transition-colors",
                    lang === code ? "text-accent" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {code.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden bg-primary px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-navy md:inline-flex"
          >
            {t(ui.contactUs)}
          </Link>

          <button
            type="button"
            className="lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-rule bg-background lg:hidden">
          <nav className="container-wide flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 font-display text-2xl"
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
