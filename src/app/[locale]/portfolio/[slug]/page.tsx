import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { ASPECT_RATIOS } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { CATEGORY_LABELS, projects } from "@/content/projects";
import { ui } from "@/content/site";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return { title: "Project not found — Ayrick Makers Group", robots: { index: false } };

  const description = pick(locale, project.description).slice(0, 155);
  const path = `/${locale}/portfolio/${slug}`;
  return {
    title: `${project.name} — Ayrick Makers Group`,
    description,
    openGraph: {
      title: `${project.name} — Ayrick Makers Group`,
      description,
      type: "article",
      url: `${SITE_URL}${path}`,
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: { en: `${SITE_URL}/en/portfolio/${slug}`, fr: `${SITE_URL}/fr/portfolio/${slug}` },
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = idx < projects.length - 1 ? projects[idx + 1] : undefined;
  const previous = idx > 0 ? projects[idx - 1] : undefined;

  const facts: { label: string; value: string }[] = [
    { label: t(ui.category), value: t(CATEGORY_LABELS[project.category]) },
    { label: t(ui.location), value: project.location },
    { label: t(ui.year), value: project.year },
    { label: t(ui.clientType), value: project.clientType },
    { label: t(ui.scope), value: t(project.scope) },
    { label: t(ui.size), value: project.size },
    { label: t(ui.materials), value: t(project.materials) },
  ];

  return (
    <>
      <section className="border-b border-primary-foreground/12 bg-navy-deep pt-20 text-primary-foreground md:pt-24">
        <div className="container-wide">
          <Link
            href="/portfolio"
            className="label-meta text-primary-foreground/50 hover:text-primary-foreground"
          >
            ← {t(ui.backTo)}
          </Link>
          <p className="eyebrow mt-8">{t(CATEGORY_LABELS[project.category])}</p>
          <h1 className="display-xl mt-4">{project.name}</h1>
          <p className="mt-5 pb-14 text-lg text-primary-foreground/65">
            {project.location} · {project.year}
          </p>
        </div>
        <Image
          src={project.heroImage}
          alt={project.name}
          className={cn(ASPECT_RATIOS.wide, "w-full object-cover")}
        />
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xl leading-relaxed">{t(project.description)}</p>
            <h2 className="display-lg mt-14 text-2xl md:text-3xl">{t(ui.highlights)}</h2>
            <ul className="mt-6 border-t border-rule">
              {t(project.highlights).map((h) => (
                <li key={h} className="border-b border-rule py-4 text-base leading-relaxed">
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-meta">{t(ui.factsheet)}</p>
            <dl className="mt-5 border-t border-rule">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[10rem_1fr]"
                >
                  <dt className="label-meta">{f.label}</dt>
                  <dd className="text-sm leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <p className="label-meta">{t(ui.gallery)}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {project.gallery.map((img, i) => (
            <Image
              key={img.src}
              src={img}
              alt={`${project.name} — ${i + 1}`}
              className={cn(
                i % 5 === 0 ? ASPECT_RATIOS.wide : ASPECT_RATIOS.landscape,
                "w-full object-cover",
                i % 5 === 0 && "md:col-span-2",
              )}
            />
          ))}
        </div>
      </Section>

      {previous || next ? (
        <section className="bg-navy-deep py-16 text-primary-foreground">
          <div className="container-wide grid gap-10 sm:grid-cols-2">
            {previous ? (
              <Link href={`/portfolio/${previous.slug}`} className="group">
                <p className="label-meta text-primary-foreground/45">← {t(ui.previous)}</p>
                <span className="display-lg mt-4 block transition-colors group-hover:text-primary">
                  {previous.name}
                </span>
                <span className="mt-2 block text-sm text-primary-foreground/60">
                  {previous.location} · {previous.year}
                </span>
              </Link>
            ) : null}
            {next ? (
              <Link href={`/portfolio/${next.slug}`} className="group sm:col-start-2 sm:text-right">
                <p className="label-meta text-primary-foreground/45">{t(ui.next)} →</p>
                <span className="display-lg mt-4 block transition-colors group-hover:text-primary">
                  {next.name}
                </span>
                <span className="mt-2 block text-sm text-primary-foreground/60">
                  {next.location} · {next.year}
                </span>
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
