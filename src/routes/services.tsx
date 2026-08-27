import { Link, createFileRoute } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/Placeholder";
import { PageHero, Section } from "@/components/Section";
import { home, services, ui } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Architecture, Masterplanning & Delivery | Ayrick" },
      {
        name: "description",
        content:
          "Architecture, masterplanning, adaptive reuse, interiors, sustainability and site supervision — delivered by permanent partner-led teams.",
      },
      { property: "og:title", content: "Services — Architecture, Masterplanning & Delivery | Ayrick" },
      {
        property: "og:description",
        content: "Six capabilities, from concept design to resident site supervision.",
      },
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
        title={t(home.servicesTitle)}
        lead={t({
          en: "Six capabilities, run by the same permanent teams. Clients appoint us for one and usually keep us through the rest.",
          fr: "Six compétences, portées par les mêmes équipes permanentes. Nos clients nous confient l'une d'elles et nous gardent généralement pour les autres.",
        })}
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
