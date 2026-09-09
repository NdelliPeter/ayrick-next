import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/Section";
import { journal, journalMeta } from "@/content/site";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import journalHero from "@/assets/journal-hero.jpg";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const path = `/${locale}/journal`;
  return {
    title: "Journal — Ayrick Makers Group",
    description: isEn
      ? "Thoughts, insights and stories on architecture, design approaches, project experience and the future of the built environment."
      : "Réflexions, analyses et récits sur l'architecture, les approches de conception, l'expérience de projet et l'avenir du cadre bâti.",
    openGraph: {
      title: "Journal — Ayrick Makers Group",
      description: isEn
        ? "News and insight from the practice."
        : "Actualités et regards de l'agence.",
      type: "website",
      url: `${SITE_URL}${path}`,
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: { en: `${SITE_URL}/en/journal`, fr: `${SITE_URL}/fr/journal` },
    },
  };
}

export default async function JournalPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);

  return (
    <>
      <PageHero
        eyebrow={t(journalMeta.title)}
        title={t({ en: "Notes from the practice.", fr: "Notes de l'agence." })}
        lead={t(journalMeta.intro)}
        image={journalHero}
      />

      <section className="py-4">
        <div className="container-wide">
          {journal.map((entry) => (
            <Link
              key={entry.slug}
              href={`/journal/${entry.slug}`}
              className="group grid gap-4 border-b border-rule py-10 md:grid-cols-[12rem_1fr] md:gap-10"
            >
              <div>
                <p className="label-meta">
                  {new Date(entry.date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <p className="mt-2 text-sm text-primary">{t(entry.category)}</p>
              </div>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl transition-colors group-hover:text-primary md:text-3xl">
                  {t(entry.title)}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {t(entry.excerpt)}
                </p>
              </div>
            </Link>
          ))}
          <p className="max-w-3xl py-10 text-sm leading-relaxed text-muted-foreground">
            {t(journalMeta.author)}
          </p>
        </div>
      </section>
    </>
  );
}
