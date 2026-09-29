import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { ProjectRow } from "@/components/ProjectCard";
import { PageHero, Section, SectionHead } from "@/components/Section";
import { projects } from "@/content/projects";
import { home, services } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service — Ayrick Makers Group" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const title = `${service.title.en} — Services | Ayrick Makers Group`;
    return {
      meta: [
        { title },
        { name: "description", content: service.body.en },
        { property: "og:title", content: title },
        { property: "og:description", content: service.body.en },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const { t } = useLang();

  const related = projects.filter((p) => p.services?.includes(service.slug));
  const idx = services.findIndex((s) => s.slug === service.slug);
  const next = services[(idx + 1) % services.length];
  const paragraphs = t(service.long);

  return (
    <>
      <PageHero
        eyebrow={`${service.number} — ${t({ en: "Service", fr: "Prestation" })}`}
        title={t(service.title)}
        lead={t(service.body)}
      />

      {/* Long description + deliverables */}
      <section className="border-b border-rule py-20 md:py-28">
        <div className="container-wide grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-xl leading-relaxed md:text-2xl"
                    : "mt-6 text-lg leading-relaxed text-muted-foreground"
                }
              >
                {p}
              </p>
            ))}
            <Link
              to="/services"
              className="link-underline label-meta mt-10 inline-block text-foreground"
            >
              {t({ en: "How a project runs", fr: "Le déroulement d'un projet" })} →
            </Link>
          </div>
          <aside className="lg:border-l lg:border-rule lg:pl-12">
            <p className="eyebrow">{t({ en: "Deliverables", fr: "Livrables" })}</p>
            <ul className="mt-6 border-t border-rule">
              {t(service.deliverables).map((d, i) => (
                <li key={d} className="flex gap-4 border-b border-rule py-3.5 text-sm">
                  <span className="label-meta shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 ? (
        <Section>
          <SectionHead
            eyebrow={t({ en: "Selected work", fr: "Projets sélectionnés" })}
            title={t({ en: "Related projects", fr: "Projets liés" })}
            lead={t({
              en: "Commissions from the archive where this service played a central role.",
              fr: "Missions de nos archives où cette prestation a joué un rôle central.",
            })}
          />
          <div className="mt-14 border-t border-rule">
            {related.map((p, i) => (
              <ProjectRow key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Section>
      ) : null}

      {/* Next service */}
      <section className="border-b border-rule">
        <div className="container-wide">
          <Link
            to="/services/$slug"
            params={{ slug: next.slug }}
            className="group grid gap-4 border-b border-rule py-14 md:grid-cols-[10rem_1fr_auto] md:items-center"
          >
            <span className="label-meta">
              {t({ en: "Next service", fr: "Prestation suivante" })}
            </span>
            <h2 className="font-display text-3xl transition-colors group-hover:text-accent md:text-4xl">
              {t(next.title)}
            </h2>
            <span className="label-meta text-accent opacity-0 transition-opacity group-hover:opacity-100">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <Section dark>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h2 className="display-lg">{t(home.ctaTitle)}</h2>
          <div>
            <p className="text-lg text-primary-foreground/65">{t(home.ctaBody)}</p>
            <Link
              to="/contact"
              className="mt-8 inline-block bg-accent px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent-foreground"
            >
              {t({ en: "Discuss your project", fr: "Parler de votre projet" })}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
