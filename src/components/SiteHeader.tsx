"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { LogoWordmark } from "@/components/Placeholder";
import { nav, ui } from "@/content/site";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";

const STUDIO_SUBPAGES = [
  { to: "/studio/about-us", label: { en: "About Us", fr: "À propos" } },
  { to: "/studio/our-team", label: { en: "Our Team", fr: "Notre équipe" } },
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);
  const studioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!studioOpen) return;
    const closeOnOutsideOrEscape = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent) {
        if (e.key === "Escape") setStudioOpen(false);
        return;
      }
      if (studioRef.current && !studioRef.current.contains(e.target as Node)) {
        setStudioOpen(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutsideOrEscape);
    document.addEventListener("keydown", closeOnOutsideOrEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideOrEscape);
      document.removeEventListener("keydown", closeOnOutsideOrEscape);
    };
  }, [studioOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/95 backdrop-blur">
      <div className="container-wide flex h-[72px] items-center justify-between gap-8">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Ayrick Makers Group — home">
          <LogoWordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            const hasSubpages = item.to === "/studio";

            if (!hasSubpages) {
              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={cn(
                    "link-underline text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors hover:text-foreground",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {pick(locale, item.label)}
                </Link>
              );
            }

            return (
              <div
                key={item.to}
                ref={studioRef}
                className="relative"
                onMouseEnter={() => setStudioOpen(true)}
                onMouseLeave={() => setStudioOpen(false)}
              >
                <Link
                  href={item.to}
                  onClick={() => setStudioOpen(false)}
                  onFocus={() => setStudioOpen(true)}
                  aria-expanded={studioOpen}
                  className={cn(
                    "link-underline inline-flex items-center gap-1 text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors hover:text-foreground",
                    active ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {pick(locale, item.label)}
                  <ChevronDown
                    className={cn(
                      "size-3 transition-transform duration-200",
                      studioOpen && "rotate-180",
                    )}
                  />
                </Link>
                <div
                  className={cn(
                    "absolute left-0 top-full pt-3 transition-all duration-200 ease-out",
                    studioOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0",
                  )}
                >
                  <div className="min-w-[10rem] border border-rule bg-background py-2 shadow-lg">
                    {STUDIO_SUBPAGES.map((sub) => (
                      <Link
                        key={sub.to}
                        href={sub.to}
                        onClick={() => setStudioOpen(false)}
                        className="block px-4 py-2.5 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        {pick(locale, sub.label)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 text-[0.75rem] font-semibold uppercase tracking-[0.14em]">
            {(["en", "fr"] as const).map((code, i) => (
              <span key={code} className="flex items-center gap-1">
                {i === 1 && <span className="text-rule">/</span>}
                <button
                  type="button"
                  onClick={() => router.replace(pathname, { locale: code })}
                  aria-pressed={locale === code}
                  className={cn(
                    "px-0.5 transition-colors",
                    locale === code
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {code.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden bg-primary px-5 py-2.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-navy md:inline-flex"
          >
            {pick(locale, ui.contactUs)}
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
              <div key={item.to} className="border-b border-rule">
                <Link
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl"
                >
                  {pick(locale, item.label)}
                </Link>
                {item.to === "/studio" ? (
                  <div className="flex flex-col pb-4">
                    {STUDIO_SUBPAGES.map((sub) => (
                      <Link
                        key={sub.to}
                        href={sub.to}
                        onClick={() => setOpen(false)}
                        className="label-meta py-2 text-muted-foreground"
                      >
                        {pick(locale, sub.label)}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
