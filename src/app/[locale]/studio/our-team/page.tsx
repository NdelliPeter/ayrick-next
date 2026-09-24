import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { setRequestLocale } from "next-intl/server";

import { ASPECT_RATIOS, ImagePlaceholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { studio } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { cn } from "@/lib/utils";
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
    title: "Our Team — Ayrick Makers Group",
    description: isEn
      ? "Meet the people behind Ayrick Makers Group — architecture, 3D visualization and interior design expertise."
      : "Découvrez les personnes derrière Ayrick Makers Group — architecture, visualisation 3D et design d'intérieur.",
    openGraph: {
      title: "Our Team — Ayrick Makers Group",
      description: isEn ? "The people behind the work." : "Les personnes derrière le travail.",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function OurTeamPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);

  return (
    <>
      <section className="border-b border-primary-foreground/12 bg-navy-deep py-20 text-primary-foreground md:py-24">
        <div className="container-wide">
          <p className="eyebrow">{t(studio.leadershipTitle)}</p>
          <h1 className="display-xl mt-4">
            {t({ en: "The minds shaping Ayrick.", fr: "Les esprits qui façonnent Ayrick." })}
          </h1>
        </div>
      </section>

      <Section>
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
