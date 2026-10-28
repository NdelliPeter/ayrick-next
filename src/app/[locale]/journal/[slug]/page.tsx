import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { ASPECT_RATIOS, ImagePlaceholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { journal, ui } from "@/content/site";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";
import journalMinimalismVillaDesign from "@/assets/journal-minimalism-villa-design.jpg";
import journalDesigningWithTheClimate from "@/assets/journal-designing-with-the-climate.jpg";

// Real lead photography is only available for some articles so far; the rest
// keep the placeholder until matching images are sourced.
const JOURNAL_LEAD_IMAGES: Record<string, StaticImageData> = {
  "minimalism-in-villa-design": journalMinimalismVillaDesign,
  "designing-with-the-climate": journalDesigningWithTheClimate,
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
  const formatDate = (iso: string, options: Intl.DateTimeFormatOptions) =>
    new Date(iso).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", options);

  const index = journal.findIndex((e) => e.slug === entry.slug);
  const previous = index > 0 ? journal[index - 1] : undefined;
  const next = index < journal.length - 1 ? journal[index + 1] : undefined;

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
        <div className="container-wide">
          <Link
            href="/journal"
            className="label-meta text-primary-foreground/50 hover:text-primary-foreground"
          >
            ← {t({ en: "Back to journal", fr: "Retour au journal" })}
          </Link>
          <p className="eyebrow mt-8">{t(entry.category)}</p>
          <h1 className="display-lg mt-4">{t(entry.title)}</h1>
          <p className="mt-6 text-sm text-primary-foreground/55">
            {formatDate(entry.date, { day: "2-digit", month: "long", year: "numeric" })}
          </p>
        </div>
      </section>

      <Section>
        {leadImage ? (
          <Image
            src={leadImage}
            alt={entry.title.en}
            sizes="100vw"
            className={cn(
              // Full-bleed lead image, cropped from the centre of the frame.
              "w-full object-cover object-center",
              leadImage.height > leadImage.width ? "h-[55vh] md:h-[75vh]" : ASPECT_RATIOS.wide,
            )}
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
      </Section>

      {previous || next ? (
        <section className="bg-navy-deep py-16 text-primary-foreground">
          <div className="container-wide grid gap-10 sm:grid-cols-2">
            {previous ? (
              <Link href={`/journal/${previous.slug}`} className="group">
                <p className="label-meta text-primary-foreground/45">← {t(ui.previousArticle)}</p>
                <span className="display-lg mt-4 block transition-colors group-hover:text-primary">
                  {t(previous.title)}
                </span>
                <span className="mt-2 block text-sm text-primary-foreground/60">
                  {t(previous.category)} ·{" "}
                  {formatDate(previous.date, { day: "2-digit", month: "short", year: "numeric" })}
                </span>
              </Link>
            ) : null}
            {next ? (
              <Link href={`/journal/${next.slug}`} className="group sm:col-start-2 sm:text-right">
                <p className="label-meta text-primary-foreground/45">{t(ui.nextArticle)} →</p>
                <span className="display-lg mt-4 block transition-colors group-hover:text-primary">
                  {t(next.title)}
                </span>
                <span className="mt-2 block text-sm text-primary-foreground/60">
                  {t(next.category)} ·{" "}
                  {formatDate(next.date, { day: "2-digit", month: "short", year: "numeric" })}
                </span>
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
