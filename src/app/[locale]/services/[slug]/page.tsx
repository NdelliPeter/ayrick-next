import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { ProjectTile } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/content/projects";
import { services, ui } from "@/content/site";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service)
    return { title: "Service not found — Ayrick Makers Group", robots: { index: false } };

  const description = pick(locale, service.body);
  const path = `/${locale}/services/${slug}`;
  return {
    title: `${service.title.en} — Ayrick Makers Group`,
    description,
    openGraph: {
      title: `${service.title.en} — Ayrick Makers Group`,
      description,
      type: "website",
      url: `${SITE_URL}${path}`,
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: {
        en: `${SITE_URL}/en/services/${slug}`,
        fr: `${SITE_URL}/fr/services/${slug}`,
      },
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const serviceIndex = services.findIndex((s) => s.slug === service.slug);
  const related = Array.from(
    { length: 4 },
    (_, i) => projects[(serviceIndex * 4 + i) % projects.length]!,
  );

  return (
    <>
      <section className="border-b border-primary-foreground/12 bg-navy-deep pt-20 text-primary-foreground md:pt-24">
        <div className="container-wide pb-14">
          <Link
            href="/services"
            className="label-meta text-primary-foreground/50 hover:text-primary-foreground"
          >
            ← {t(ui.backToServices)}
          </Link>
          <p className="eyebrow mt-8">
            {service.number} — {t({ en: "Service", fr: "Service" })}
          </p>
          <h1 className="display-xl mt-4">{t(service.title)}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">
            {t(service.body)}
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6">
            {t(service.detail.paragraphs).map((p) => (
              <p key={p} className="text-lg leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <div>
            <p className="label-meta">{t({ en: "Deliverables", fr: "Livrables" })}</p>
            <ul className="mt-5 border-t border-rule">
              {t(service.deliverables).map((d, i) => (
                <li key={d} className="flex gap-4 border-b border-rule py-4">
                  <span className="label-meta text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm leading-relaxed">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tint>
        <p className="label-meta">{t(ui.relatedProjects)}</p>
        <div className="mt-8 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProjectTile key={p.slug} project={p} locale={locale} />
          ))}
        </div>
      </Section>

      <section className="bg-navy-deep py-16 text-primary-foreground md:py-20">
        <div className="container-wide">
          <p className="label-meta text-primary-foreground/50">{t(ui.otherServices)}</p>
          <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group border-t border-primary-foreground/12 pt-6"
              >
                <span className="label-meta text-primary">{s.number}</span>
                <h3 className="mt-3 font-display text-2xl transition-colors group-hover:text-primary md:text-3xl">
                  {t(s.title)}
                </h3>
                <span className="mt-3 inline-block text-primary-foreground/50 transition-transform group-hover:translate-x-1 group-hover:text-primary">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
