import { Link } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/Placeholder";
import { CATEGORY_LABELS, type Project } from "@/content/projects";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { t } = useLang();

  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className="group grid gap-6 border-b border-rule py-8 md:grid-cols-[6rem_1.1fr_1fr_auto] md:items-center"
    >
      <span className="label-meta">{String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3 className="font-display text-2xl transition-colors group-hover:text-accent md:text-3xl">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted-foreground">
        <span>{t(CATEGORY_LABELS[project.category])}</span>
        <span>{project.year}</span>
        <span>{project.size}</span>
      </div>
      <span className="label-meta text-accent opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}

export function ProjectTile({
  project,
  ratio = "landscape",
  className,
}: {
  project: Project;
  ratio?: "landscape" | "wide" | "portrait" | "square";
  className?: string;
}) {
  const { t } = useLang();

  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: project.slug }}
      className={cn("group block", className)}
    >
      <ImagePlaceholder
        label={project.heroLabel}
        ratio={ratio}
        className="transition-opacity group-hover:opacity-85"
      />
      <div className="mt-5 flex items-start justify-between gap-6 border-t border-rule pt-4">
        <div>
          <h3 className="font-display text-xl transition-colors group-hover:text-accent md:text-2xl">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.location}</p>
        </div>
        <span className="label-meta whitespace-nowrap">
          {t(CATEGORY_LABELS[project.category])} · {project.year}
        </span>
      </div>
    </Link>
  );
}
