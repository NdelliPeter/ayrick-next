import { Link, createFileRoute } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/Placeholder";
import { PageHero, Section, SectionHead } from "@/components/Section";
import { faqs, home, process, services, servicesIntro, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Design, Visualization & Supervision | Ayrick Makers Group" },
      {
        name: "description",
        content:
          "Concept design, layouts and plans, 3D visualization and walkthroughs, project supervision and contract management — from vision to reality.",
      },
      { property: "og:title", content: "Services — Ayrick Makers Group" },
      {
        property: "og:description",
        content: "Five service lines, a clear five-stage process, and answers to common questions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t(home.servicesEyebrow)}
        title={t(servicesIntro.title)}
        lead={t(servicesIntro.body)}
      />

      {services.map((s, i) => (
        <Section key={s.number}>
          <div
            className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <ImagePlaceholder ratio="landscape" label={`Service ${s.number} — ${s.title.en}`} />
            <div>
              <span className="label-meta text-accent">{s.number}</span>
              <h2 className="display-lg mt-4">{t(s.title)}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t(s.body)}</p>
              <ul className="mt-8 border-t border-rule">
                {t(s.deliverables).map((d) => (
                  <li key={d} className="border-b border-rule py-3.5 text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <SectionHead
          eyebrow={t({ en: "Process", fr: "Processus" })}
          title={t({ en: "How a project runs", fr: "Le déroulement d'un projet" })}
        />
        <div className="mt-14 grid border-t border-rule md:grid-cols-2 lg:grid-cols-5">
          {process.map((p) => (
            <div
              key={p.step}
              className="border-b border-rule py-10 pr-8 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8"
            >
              <span className="label-meta text-accent">{p.step}</span>
              <h3 className="mt-4 font-display text-xl">{t(p.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.body)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow={t({ en: "FAQ", fr: "FAQ" })}
          title={t({ en: "Questions clients ask", fr: "Les questions fréquentes" })}
        />
        <div className="mt-14 border-t border-rule">
          {faqs.map((f) => (
            <div
              key={f.q.en}
              className="grid gap-4 border-b border-rule py-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12"
            >
              <h3 className="font-display text-xl">{t(f.q)}</h3>
              <p className="leading-relaxed text-muted-foreground">{t(f.a)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h2 className="display-lg">{t(home.ctaTitle)}</h2>
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
