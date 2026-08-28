import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { journal } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const entry = journal.find((e) => e.slug === params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found — Ayrick Architecture" }, { name: "robots", content: "noindex" }],
      };
    }
    const e = loaderData.entry;
    const url = `https://ayrick-architects-forge.lovable.app/journal/${params.slug}`;
    return {
      meta: [
        { title: `${e.title.en} — Ayrick Architecture` },
        { name: "description", content: e.excerpt.en.slice(0, 155) },
        { property: "og:title", content: e.title.en },
        { property: "og:description", content: e.excerpt.en.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: e.title.en,
            datePublished: e.date,
            author: { "@type": "Organization", name: "Ayrick Architecture" },
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <Section>
      <h1 className="display-lg">Article not found</h1>
      <Link to="/journal" className="eyebrow mt-6 inline-block">
        Back to journal
      </Link>
    </Section>
  );
}

function ArticlePage() {
  const { entry } = Route.useLoaderData();
  const { t, lang } = useLang();

  return (
    <>
      <section className="border-b border-primary-foreground/12 bg-navy-deep py-20 text-primary-foreground md:py-24">
        <div className="container-wide max-w-4xl">
          <Link to="/journal" className="label-meta text-primary-foreground/50 hover:text-primary-foreground">
            ← {t({ en: "Back to journal", fr: "Retour au journal" })}
          </Link>
          <p className="eyebrow mt-8">{t(entry.category)}</p>
          <h1 className="display-lg mt-4">{t(entry.title)}</h1>
          <p className="mt-6 text-sm text-primary-foreground/55">
            {new Date(entry.date).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <ImagePlaceholder label={`${entry.title.en} — Lead image`} ratio="wide" />
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
