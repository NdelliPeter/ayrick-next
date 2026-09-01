import { createFileRoute } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/Placeholder";
import { PageHero, Section, SectionHead } from "@/components/Section";
import { studio } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Ayrick Makers Group" },
      {
        name: "description",
        content:
          "Established in Ghana in 2023 with roots in over 18 years of architectural practice, Ayrick Makers Group improves quality of life through better architecture.",
      },
      { property: "og:title", content: "Studio — Ayrick Makers Group" },
      {
        property: "og:description",
        content: "Our story, design philosophy, team, credentials and where we work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StudioPage,
});

function StudioPage() {
  const { t } = useLang();

  return (
    <>
      <PageHero
        eyebrow={t(studio.heroEyebrow)}
        title={t(studio.heroTitle)}
        lead={t(studio.presenceBody)}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="display-lg">{t(studio.storyTitle)}</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            {t(studio.story)
              .split("\n\n")
              .map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
          </div>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <ImagePlaceholder ratio="landscape" label="Studio — Accra workspace" />
          <ImagePlaceholder ratio="landscape" label="Studio — design review" />
          <ImagePlaceholder ratio="landscape" label="Studio — site supervision" />
        </div>
      </Section>

      <Section dark>
        <SectionHead
          eyebrow={t(studio.missionTitle)}
          title={t(studio.mission)}
          className="max-w-4xl"
        />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/65">
          {t(studio.missionBody)}
        </p>
      </Section>

      <Section>
        <SectionHead
          eyebrow={t(studio.valuesTitle)}
          title={t({ en: "Our capabilities", fr: "Nos compétences" })}
        />
        <div className="mt-14 grid border-t border-rule md:grid-cols-2 lg:grid-cols-4">
          {studio.values.map((v) => (
            <div
              key={v.title.en}
              className="border-b border-rule py-10 pr-8 lg:[&:not(:nth-child(4n+1))]:border-l lg:[&:not(:nth-child(4n+1))]:pl-8"
            >
              <h3 className="font-display text-xl">{t(v.title)}</h3>
              <p className="mt-3 text-muted-foreground">{t(v.body)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow={t(studio.leadershipTitle)}
          title={t({ en: "The people behind the work", fr: "Les personnes derrière le travail" })}
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {studio.leadership.map((person) => (
            <div key={person.name}>
              <ImagePlaceholder ratio="portrait" label={`Portrait — ${person.name}`} />
              <div className="mt-4 border-t border-rule pt-4">
                <h3 className="font-display text-lg">{person.name}</h3>
                <p className="label-meta mt-1">{t(person.role)}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(person.bio)}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="label-meta">{t(studio.credentialsTitle)}</p>
            <div className="mt-8 border-t border-rule">
              {studio.credentials.map((c) => (
                <div
                  key={c.label.en}
                  className="grid gap-1 border-b border-rule py-5 sm:grid-cols-2 sm:items-baseline"
                >
                  <span className="label-meta">{t(c.label)}</span>
                  <span className="font-display text-xl">{t(c.value)}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="label-meta">{t(studio.certificationsTitle)}</p>
            <ul className="mt-8 border-t border-rule">
              {studio.certifications.map((c) => (
                <li key={c} className="border-b border-rule py-3.5 text-sm">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow={t(studio.presenceTitle)} title={t(studio.presenceBody)} />
        <div className="mt-12 border-t border-rule">
          {studio.offices.map((o) => (
            <div
              key={o.city}
              className="grid gap-2 border-b border-rule py-6 sm:grid-cols-4 sm:items-center"
            >
              <span className="font-display text-2xl">{o.city}</span>
              <span className="text-muted-foreground">{t(o.country)}</span>
              <span className="text-muted-foreground">{t(o.role)}</span>
              <span className="label-meta sm:text-right">
                {t({ en: "Since", fr: "Depuis" })} {o.since}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
