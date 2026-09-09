import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { ASPECT_RATIOS, ImagePlaceholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { journal } from "@/content/site";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import journalMinimalismVillaDesign from "@/assets/journal-minimalism-villa-design.jpg";

// Real lead photography is only available for some articles so far; the rest
// keep the placeholder until matching images are sourced.
const JOURNAL_LEAD_IMAGES: Record<string, StaticImageData> = {
  "minimalism-in-villa-design": journalMinimalismVillaDesign,
};

export function generateStaticParams() {
  return journal.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = journal.find((e) => e.slug === slug);
  if (!entry) return { title: "Article not found — Ayrick Makers Group", robots: { index: false } };

  const description = entry.excerpt.en.slice(0, 155);
  const path = `/${locale}/journal/${slug}`;
  return {
    title: `${entry.title.en} — Ayrick Makers Group`,
    description,
    openGraph: {
      title: entry.title.en,
      description,
      type: "article",
      url: `${SITE_URL}${path}`,
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: { en: `${SITE_URL}/en/journal/${slug}`, fr: `${SITE_URL}/fr/journal/${slug}` },
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const entry = journal.find((e) => e.slug === slug);
  if (!entry) notFound();

  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);
  const leadImage = JOURNAL_LEAD_IMAGES[slug];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: entry.title.en,
    datePublished: entry.date,
    author: { "@type": "Organization", name: "Ayrick Makers Group" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-primary-foreground/12 bg-navy-deep py-20 text-primary-foreground md:py-24">
        <div className="container-wide max-w-4xl">
          <Link
            href="/journal"
            className="label-meta text-primary-foreground/50 hover:text-primary-foreground"
          >
            ← {t({ en: "Back to journal", fr: "Retour au journal" })}
          </Link>
          <p className="eyebrow mt-8">{t(entry.category)}</p>
          <h1 className="display-lg mt-4">{t(entry.title)}</h1>
          <p className="mt-6 text-sm text-primary-foreground/55">
            {new Date(entry.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-[80%]">
          {leadImage ? (
            <Image
              src={leadImage}
              alt={entry.title.en}
              className={cn(ASPECT_RATIOS.wide, "w-full object-cover")}
            />
          ) : (
            <ImagePlaceholder label={`${entry.title.en} — Lead image`} ratio="wide" />
          )}
          <p className="mt-10 text-xl leading-relaxed">{t(entry.excerpt)}</p>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            {t(entry.body).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
