import { Link, createFileRoute } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/Placeholder";
import { ProjectTile } from "@/components/ProjectCard";
import { Section, SectionHead } from "@/components/Section";
import { featuredProjects } from "@/content/projects";
import { home, services, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayrick Architecture — Buildings Built to Last a Century" },
      {
        name: "description",
        content:
          "International architecture practice delivering civic, commercial and residential projects across 26 countries with structural rigour and material discipline.",
      },
      { property: "og:title", content: "Ayrick Architecture — Buildings Built to Last a Century" },
      {
        property: "og:description",
        content: "Civic, commercial and residential architecture delivered across four continents since 1988.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLang();
  const featured = featuredProjects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-deep text-primary-foreground">
        <ImagePlaceholder
          ratio="fill"
          tone="steel"
          label="Homepage Hero — full-bleed flagship building photograph"
          className="absolute inset-0 opacity-30"
        />
        <div className="container-wide relative z-10 grid gap-12 py-28 md:py-40 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">{t(home.heroEyebrow)}</p>
            <h1 className="display-xl mt-6 max-w-4xl">{t(home.heroTitle)}</h1>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-primary-foreground/70">{t(home.heroLead)}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="bg-accent px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                {t(ui.allProjects)}
              </Link>
              <Link
                to="/contact"
                className="border border-primary-foreground/30 px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-primary-foreground/10"
              >
                {t(ui.contactUs)}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-primary-foreground/12">
          <div className="container-wide grid grid-cols-2 lg:grid-cols-4">
            {home.stats.map((s, i) => (
              <div
                key={s.value}
                className={`py-8 ${i > 0 ? "lg:border-l lg:border-primary-foreground/12 lg:pl-8" : ""}`}
              >
                <p className="font-display text-4xl font-semibold md:text-5xl">{s.value}</p>
                <p className="label-meta mt-2 text-primary-foreground/50">{t(s.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead eyebrow={t(home.featuredEyebrow)} title={t(home.featuredTitle)} />
          <Link to="/portfolio" className="link-underline label-meta text-foreground">
            {t(ui.allProjects)} →
          </Link>
        </div>
        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectTile key={p.slug} project={p} ratio={i % 3 === 0 ? "wide" : "landscape"} />
          ))}
        </div>
      </Section>

      {/* Positioning */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <ImagePlaceholder
            ratio="portrait"
            label="Practice — site visit / team on a construction platform"
          />
          <div>
            <p className="eyebrow">{t(home.positionEyebrow)}</p>
            <h2 className="display-lg mt-4">{t(home.positionTitle)}</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t(home.positionBody)}
            </p>
            <Link to="/studio" className="link-underline label-meta mt-8 inline-block text-foreground">
              {t({ en: "About the studio", fr: "À propos du studio" })} →
            </Link>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section>
        <SectionHead eyebrow={t(home.servicesEyebrow)} title={t(home.servicesTitle)} />
        <div className="mt-14 grid border-t border-rule md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.number} className="border-b border-rule px-0 py-10 md:pr-10 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:pl-10">
              <span className="label-meta text-accent">{s.number}</span>
              <h3 className="mt-4 font-display text-2xl">{t(s.title)}</h3>
              <p className="mt-3 text-muted-foreground">{t(s.body)}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="link-underline label-meta mt-10 inline-block text-foreground">
          {t({ en: "All services", fr: "Tous les services" })} →
        </Link>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h2 className="display-lg max-w-3xl">{t(home.ctaTitle)}</h2>
          <div>
            <p className="text-lg text-primary-foreground/65">{t(home.ctaBody)}</p>
            <Link
              to="/contact"
              className="mt-8 inline-block bg-accent px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent-foreground"
            >
              {t(ui.contactUs)}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
