import { createFileRoute } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/Placeholder";
import { PageHero, Section, SectionHead } from "@/components/Section";
import { studio } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Ayrick Architecture" },
      {
        name: "description",
        content:
          "Founded in 1988, Ayrick Architecture is a 240-person practice with six studios worldwide, built around delivery, structural honesty and material restraint.",
      },
      { property: "og:title", content: "Studio — Ayrick Architecture" },
      {
        property: "og:description",
        content: "Our story, mission, values, leadership and international presence.",
      },
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
          <ImagePlaceholder ratio="landscape" label="Studio — Rotterdam workspace" />
          <ImagePlaceholder ratio="landscape" label="Studio — model workshop" />
          <ImagePlaceholder ratio="landscape" label="Studio — site review meeting" />
        </div>
      </Section>

      <Section dark>
        <SectionHead
          eyebrow={t(studio.missionTitle)}
          title={t(studio.mission)}
          className="max-w-4xl"
        />
      </Section>

      <Section>
        <SectionHead eyebrow={t(studio.valuesTitle)} title={t({ en: "How we work", fr: "Notre manière de travailler" })} />
        <div className="mt-14 grid border-t border-rule md:grid-cols-2 lg:grid-cols-4">
          {studio.values.map((v) => (
            <div
              key={v.title.en}
              className="border-b border-rule py-10 pr-8 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8"
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
          title={t({ en: "Partners and directors", fr: "Associés et directeurs" })}
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {studio.leadership.map((person) => (
            <div key={person.name}>
              <ImagePlaceholder ratio="portrait" label={`Portrait — ${person.name}`} />
              <div className="mt-4 border-t border-rule pt-4">
                <h3 className="font-display text-lg">{person.name}</h3>
                <p className="label-meta mt-1">{t(person.role)}</p>
              </div>
            </div>
          ))}
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
