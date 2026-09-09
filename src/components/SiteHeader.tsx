"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LogoWordmark } from "@/components/Placeholder";
import { nav, ui } from "@/content/site";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
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
        <Link href="/" onClick={() => setOpen(false)} aria-label="Ayrick Makers Group — home">
          <LogoWordmark />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
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
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-rule py-4 font-display text-2xl"
              >
                {pick(locale, item.label)}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
