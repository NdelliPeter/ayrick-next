import { Link } from "@tanstack/react-router";

import { LogoWordmark } from "@/components/Placeholder";
import { nav } from "@/content/site";
import { contact } from "@/content/site";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-0 bg-navy-deep text-primary-foreground">
      <div className="container-wide grid gap-12 py-20 lg:grid-cols-[1.4fr_1fr_1.6fr]">
        <div>
          <LogoWordmark />
          <p className="mt-6 max-w-sm text-sm text-primary-foreground/60">
            {t({
              en: "International architecture practice. Civic, commercial and residential work delivered across twenty-six countries since 1988.",
              fr: "Agence d'architecture internationale. Projets civiques, commerciaux et résidentiels livrés dans vingt-six pays depuis 1988.",
            })}
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
          <ul className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {contact.offices.map((office) => (
              <li key={office.city} className="text-sm">
                <span className="block font-display font-semibold">{office.city}</span>
                <span className="mt-1 block text-primary-foreground/55">{office.lines[1]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/12">
        <div className="container-wide flex flex-col gap-2 py-6 text-xs text-primary-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Ayrick Architecture. {t({ en: "All rights reserved.", fr: "Tous droits réservés." })}</span>
          <span className="label-meta text-primary-foreground/35">
            {t({ en: "Rotterdam · London · Douala · Singapore · Montréal · Marrakech", fr: "Rotterdam · Londres · Douala · Singapour · Montréal · Marrakech" })}
          </span>
        </div>
      </div>
    </footer>
  );
}
