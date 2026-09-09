"use client";

import { useState } from "react";

import { ProjectTile } from "@/components/ProjectCard";
import { CATEGORIES, CATEGORY_LABELS, projects, type Category } from "@/content/projects";
import { ui } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PortfolioGrid({ locale }: { locale: Locale }) {
  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);
  const [filter, setFilter] = useState<Category | "All">("All");

  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
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
                filter === c ? "text-primary" : "text-muted-foreground hover:text-foreground",
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
          {list.map((p) => (
            <ProjectTile key={p.slug} project={p} locale={locale} />
          ))}
        </div>
      </section>
    </>
  );
}
