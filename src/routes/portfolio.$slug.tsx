import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { CATEGORY_LABELS, projects } from "@/content/projects";
import { ui } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found — Ayrick Architecture" }, { name: "robots", content: "noindex" }],
      };
    }
    const p = loaderData.project;
    const description = p.description.en.slice(0, 155);
    const url = `https://ayrick-architects-forge.lovable.app/portfolio/${params.slug}`;
    return {
      meta: [
        { title: `${p.name} — Ayrick Architecture` },
        { name: "description", content: description },
        { property: "og:title", content: `${p.name} — Ayrick Architecture` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <Section>
      <h1 className="display-lg">Project not found</h1>
      <Link to="/portfolio" className="eyebrow mt-6 inline-block">
        Back to portfolio
      </Link>
    </Section>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const { t } = useLang();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length]!;

  const facts: { label: string; value: string }[] = [
    { label: t(ui.category), value: t(CATEGORY_LABELS[project.category]) },
    { label: t(ui.location), value: project.location },
    { label: t(ui.year), value: project.year },
    { label: t(ui.clientType), value: project.clientType },
    { label: t(ui.scope), value: t(project.scope) },
    { label: t(ui.size), value: project.size },
    { label: t(ui.materials), value: t(project.materials) },
  ];

  return (
    <>
      <section className="border-b border-primary-foreground/12 bg-navy-deep pt-20 text-primary-foreground md:pt-24">
        <div className="container-wide">
          <Link to="/portfolio" className="label-meta text-primary-foreground/50 hover:text-primary-foreground">
            ← {t(ui.backTo)}
          </Link>
          <p className="eyebrow mt-8">{t(CATEGORY_LABELS[project.category])}</p>
          <h1 className="display-xl mt-4">{project.name}</h1>
          <p className="mt-5 pb-14 text-lg text-primary-foreground/65">
            {project.location} · {project.year}
          </p>
        </div>
        <ImagePlaceholder label={project.heroLabel} ratio="wide" tone="steel" />
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xl leading-relaxed">{t(project.description)}</p>
            <h2 className="display-lg mt-14 text-2xl md:text-3xl">{t(ui.highlights)}</h2>
            <ul className="mt-6 border-t border-rule">
              {t(project.highlights).map((h) => (
                <li key={h} className="border-b border-rule py-4 text-base leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-meta">{t(ui.factsheet)}</p>
            <dl className="mt-5 border-t border-rule">
              {facts.map((f) => (
                <div key={f.label} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[10rem_1fr]">
                  <dt className="label-meta">{f.label}</dt>
                  <dd className="text-sm leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <p className="label-meta">{t(ui.gallery)}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {project.gallery.map((label, i) => (
            <ImagePlaceholder
              key={label}
              label={label}
              ratio={i % 5 === 0 ? "wide" : "landscape"}
              {...(i % 5 === 0 ? { className: "md:col-span-2" } : {})}
            />
          ))}
        </div>
      </Section>

      <section className="bg-navy-deep py-16 text-primary-foreground">
        <div className="container-wide">
          <p className="label-meta text-primary-foreground/45">{t(ui.next)}</p>
          <Link
            to="/portfolio/$slug"
            params={{ slug: next.slug }}
            className="group mt-4 flex flex-wrap items-end justify-between gap-6"
          >
            <span className="display-lg transition-colors group-hover:text-accent">{next.name}</span>
            <span className="text-sm text-primary-foreground/60">
              {next.location} · {next.year}
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
