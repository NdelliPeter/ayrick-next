import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { PageHero } from "@/components/Section";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import portfolioHero from "@/assets/portfolio-hero.jpg";

import { PortfolioGrid } from "./PortfolioGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const path = `/${locale}/portfolio`;
  return {
    title: "Portfolio — Ayrick Makers Group",
    description: isEn
      ? "Residential, commercial, hospitality, public and mixed-use projects designed and delivered by Ayrick Makers Group."
      : "Projets résidentiels, commerciaux, hôteliers, publics et mixtes conçus et livrés par Ayrick Makers Group.",
    openGraph: {
      title: "Portfolio — Ayrick Makers Group",
      description: isEn
        ? "The complete project archive, filterable by sector."
        : "L'archive complète des projets, filtrable par secteur.",
      type: "website",
      url: `${SITE_URL}${path}`,
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: { en: `${SITE_URL}/en/portfolio`, fr: `${SITE_URL}/fr/portfolio` },
    },
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);

  return (
    <>
      <PageHero
        eyebrow={t({ en: "Portfolio", fr: "Réalisations" })}
        title={t({ en: "Every project, on the record.", fr: "Chaque projet, consigné." })}
        lead={t({
          en: "Twenty-four selected commissions from Ayrick's project archive, spanning residential, civic and mixed-use work.",
          fr: "Twenty-four selected commissions from Ayrick's project archive, spanning residential, civic and mixed-use work.",
        })}
        image={portfolioHero}
      />

      <PortfolioGrid locale={locale} />
    </>
  );
}
