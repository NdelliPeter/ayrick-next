import Image from "next/image";

import { CATEGORY_LABELS, type Project } from "@/content/projects";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProjectRow({
  project,
  index,
  locale,
}: {
  project: Project;
  index: number;
  locale: Locale;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group grid gap-6 border-b border-rule py-8 md:grid-cols-[6rem_1.1fr_1fr_auto] md:items-center"
    >
      <span className="label-meta">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 className="font-display text-2xl transition-colors group-hover:text-primary md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted-foreground">
        <span>{pick(locale, CATEGORY_LABELS[project.category])}</span>
        <span>{project.year}</span>
        <span>{project.size}</span>
      </div>
      <span className="label-meta text-primary opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}

export function ProjectTile({
  project,
  locale,
  className,
}: {
  project: Project;
  locale: Locale;
  className?: string;
}) {
  return (
    <Link href={`/portfolio/${project.slug}`} className={cn("group block", className)}>
      <div className="relative h-[280px] overflow-hidden md:h-[420px]">
        <Image
          src={project.heroImage}
          alt={project.name}
          fill
          className="object-cover transition-opacity group-hover:opacity-85"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-6 border-t border-rule pt-4">
        <div>
          <h3 className="font-display text-xl transition-colors group-hover:text-primary md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
        </div>
        <span className="label-meta whitespace-nowrap">
          {pick(locale, CATEGORY_LABELS[project.category])} · {project.year}
        </span>
      </div>
    </Link>
  );
}
