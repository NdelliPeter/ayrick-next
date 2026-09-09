import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { setRequestLocale } from "next-intl/server";

import { ASPECT_RATIOS, ImagePlaceholder } from "@/components/Placeholder";
import { PageHero, Section, SectionHead } from "@/components/Section";
import { studio } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";
import studioHero from "@/assets/studio-hero.jpg";
import studioAccraWorkspace from "@/assets/studio-accra-workspace.jpg";
import studioDesignReview from "@/assets/studio-design-review.jpg";
import studioSiteSupervision from "@/assets/studio-site-supervision.jpg";
import portraitMostafaAhadiPour from "@/assets/portrait-mostafa-ahadi-pour.png";
import portraitSusanSajadian from "@/assets/portrait-susan-sajadian.jpg";
import portraitAlirezaEmtehani from "@/assets/portrait-alireza-emtehani.png";

// Real headshots are only available for some team members so far; the rest
// keep the placeholder until matching photos are sourced.
const LEADERSHIP_PORTRAITS: Record<string, StaticImageData> = {
  "Mostafa Ahadi Pour": portraitMostafaAhadiPour,
  "Susan Sajadian": portraitSusanSajadian,
  "Alireza Emtehani": portraitAlirezaEmtehani,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "Studio — Ayrick Makers Group" : "Studio — Ayrick Makers Group",
    description: isEn
      ? "Established in Ghana in 2023 with roots in over 18 years of architectural practice, Ayrick Makers Group improves quality of life through better architecture."
      : "Fondé au Ghana en 2023 et fort de plus de 18 ans de pratique architecturale, Ayrick Makers Group améliore la qualité de vie par une meilleure architecture.",
    openGraph: {
      title: "Studio — Ayrick Makers Group",
      description: isEn
        ? "Our story, design philosophy, team, credentials and where we work."
        : "Notre histoire, notre philosophie de design, notre équipe, nos références et nos implantations.",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function StudioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);

  return (
    <>
      <PageHero
        eyebrow={t(studio.heroEyebrow)}
        title={t(studio.heroTitle)}
        lead={t(studio.presenceBody)}
        image={studioHero}
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
          <Image
            src={studioSiteSupervision}
            alt="Site supervision on a residential construction platform"
            className={cn(ASPECT_RATIOS.landscape, "w-full object-cover")}
          />
          <Image
            src={studioDesignReview}
            alt="Design review of a residential interior"
            className={cn(ASPECT_RATIOS.landscape, "w-full object-cover")}
          />
          <Image
            src={studioAccraWorkspace}
            alt="Ayrick Makers Group — Accra workspace"
            className={cn(ASPECT_RATIOS.landscape, "w-full object-cover")}
          />
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
              {LEADERSHIP_PORTRAITS[person.name] ? (
                <Image
                  src={LEADERSHIP_PORTRAITS[person.name]}
                  alt={person.name}
                  className={cn(ASPECT_RATIOS.portrait, "w-full object-cover")}
                />
              ) : (
                <ImagePlaceholder ratio="portrait" label={`Portrait — ${person.name}`} />
              )}
              <div className="mt-4 border-t border-rule pt-4">
                <h3 className="font-display text-lg">{person.name}</h3>
                <p className="label-meta mt-1">{t(person.role)}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(person.bio)}
                </p>
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
