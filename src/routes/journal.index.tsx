import { Link, createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/Section";
import { journal } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — Ayrick Architecture" },
      {
        name: "description",
        content:
          "Project news, practice updates and technical insight from Ayrick Architecture's six studios.",
      },
      { property: "og:title", content: "Journal — Ayrick Architecture" },
      { property: "og:description", content: "News and insight from the practice." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ayrick-architects-forge.lovable.app/journal" },
    ],
    links: [{ rel: "canonical", href: "https://ayrick-architects-forge.lovable.app/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  const { t, lang } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t({ en: "Journal", fr: "Journal" })}
        title={t({ en: "Notes from the practice.", fr: "Notes de l'agence." })}
        lead={t({
          en: "Site reports, material research and studio news — written by the people doing the work.",
          fr: "Comptes rendus de chantier, recherche matérielle et actualités des studios — écrits par ceux qui font le travail.",
        })}
      />

      <section className="py-4">
        <div className="container-wide">
          {journal.map((entry) => (
            <Link
              key={entry.slug}
              to="/journal/$slug"
              params={{ slug: entry.slug }}
              className="group grid gap-4 border-b border-rule py-10 md:grid-cols-[12rem_1fr] md:gap-10"
            >
              <div>
                <p className="label-meta">
                  {new Date(entry.date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p className="mt-2 text-sm text-primary">{t(entry.category)}</p>
              </div>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl transition-colors group-hover:text-primary md:text-3xl">
                  {t(entry.title)}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {t(entry.excerpt)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
