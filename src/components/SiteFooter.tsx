import { Link } from "@tanstack/react-router";

import { LogoWordmark } from "@/components/Placeholder";
import { contact, footer, nav } from "@/content/site";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  const d = contact.details;

  return (
    <footer className="mt-0 bg-navy-deep text-primary-foreground">
      <div className="container-wide grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr_1.6fr]">
        <div>
          <LogoWordmark variant="light" />
          <p className="mt-6 max-w-sm text-sm text-primary-foreground/60">{t(footer.tagline)}</p>
          <p className="mt-4 max-w-sm text-xs leading-relaxed text-primary-foreground/40">
            {t(footer.privacy)}
          </p>
        </div>

        <div>
          <p className="label-meta text-primary-foreground/45">
            {t({ en: "Navigate", fr: "Navigation" })}
          </p>
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-underline text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="label-meta text-primary-foreground/45">{t(contact.officesTitle)}</p>
          <ul className="mt-5 space-y-2.5 text-sm text-primary-foreground/70">
            {d.address.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>
              <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="link-underline">
                {d.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${d.email}`} className="link-underline">
                {d.email}
              </a>
            </li>
            <li>
              <a href={d.instagramUrl} className="link-underline" rel="noreferrer" target="_blank">
                @{d.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/12">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} Ayrick Makers Group.{" "}
            {t({ en: "All rights reserved.", fr: "Tous droits réservés." })}
          </span>
          <span className="label-meta text-primary-foreground/35">
            {t({ en: "West Legon · Accra · Ghana", fr: "West Legon · Accra · Ghana" })}
          </span>
        </div>
      </div>
    </footer>
  );
}
