import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/Section";
import { ProjectTile } from "@/components/ProjectCard";
import { CATEGORIES, CATEGORY_LABELS, projects, type Category } from "@/content/projects";
import { ui } from "@/content/site";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ayrick Architecture" },
      {
        name: "description",
        content:
          "Civic, commercial, hospitality, residential and mixed-use projects delivered by Ayrick Architecture across twenty-six countries.",
      },
      { property: "og:title", content: "Portfolio — Ayrick Architecture" },
      {
        property: "og:description",
        content: "The complete project archive, filterable by sector.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ayrick-architects-forge.lovable.app/portfolio" },
    ],
    links: [{ rel: "canonical", href: "https://ayrick-architects-forge.lovable.app/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Category | "All">("All");

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        eyebrow={t({ en: "Portfolio", fr: "Réalisations" })}
        title={t({ en: "Every project, on the record.", fr: "Chaque projet, consigné." })}
        lead={t({
          en: "Twelve selected commissions from an archive of more than four hundred delivered buildings, masterplans and civic works.",
          fr: "Douze missions sélectionnées parmi plus de quatre cents bâtiments, plans directeurs et ouvrages civiques livrés.",
        })}
      />

      <div className="border-b border-rule">
        <div className="container-wide flex flex-wrap items-center gap-x-8 gap-y-3 py-5">
          <span className="label-meta">{t(ui.filter)}</span>
          {(["All", ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors",
                filter === c ? "text-accent" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t(CATEGORY_LABELS[c])}
            </button>
          ))}
          <span className="ml-auto label-meta">
            {String(list.length).padStart(2, "0")} {t({ en: "results", fr: "résultats" })}
          </span>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="container-wide grid gap-x-10 gap-y-16 md:grid-cols-2">
          {list.map((p, i) => (
            <ProjectTile
              key={p.slug}
              project={p}
              ratio={i % 3 === 0 ? "wide" : "landscape"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
