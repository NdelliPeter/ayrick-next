import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { setRequestLocale } from "next-intl/server";

import { PageHero, Section, SectionHead } from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs, home, process, services, servicesIntro, ui } from "@/content/site";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import servicesHero from "@/assets/services-hero.jpg";
import serviceConceptDesign from "@/assets/service-concept-design.jpg";
import serviceLayoutPlans from "@/assets/service-layout-plans.jpg";
import service3dVisualization from "@/assets/service-3d-visualization.jpg";
import serviceProjectSupervision from "@/assets/service-project-supervision.jpg";
import serviceContractManagement from "@/assets/service-contract-management.jpg";

const SERVICE_IMAGES: Record<string, StaticImageData> = {
  "01": serviceConceptDesign,
  "02": serviceLayoutPlans,
  "03": service3dVisualization,
  "04": serviceProjectSupervision,
  "05": serviceContractManagement,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Services — Design, Visualization & Supervision"
      : "Services — Design, visualisation et supervision",
    description: isEn
      ? "Concept design, layouts and plans, 3D visualization and walkthroughs, project supervision and contract management — from vision to reality."
      : "Design de concept, plans et agencements, visualisation 3D, supervision de chantier et gestion de contrats — de la vision à la réalité.",
    openGraph: {
      title: "Services — Ayrick Makers Group",
      description: isEn
        ? "Five service lines, a clear five-stage process, and answers to common questions."
        : "Cinq domaines de service, un processus clair en cinq étapes, et les réponses aux questions courantes.",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);

  return (
    <>
      <PageHero title={t(servicesIntro.title)} lead={t(servicesIntro.body)} image={servicesHero} />

      {services.map((s, i) => (
        <Section key={s.number}>
          <div
            className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <Image
              src={SERVICE_IMAGES[s.number]!}
              alt={s.title.en}
              className="aspect-[4/3] w-full object-cover"
            />
            <div>
              <span className="label-meta text-primary">{s.number}</span>
              <h2 className="display-lg mt-4">{t(s.title)}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t(s.body)}</p>
              <ul className="mt-8 border-t border-rule">
                {t(s.deliverables).map((d) => (
                  <li key={d} className="border-b border-rule py-3.5 text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <SectionHead
          eyebrow={t({ en: "Process", fr: "Processus" })}
          title={t({ en: "How a project runs", fr: "Le déroulement d'un projet" })}
        />
        <div className="mt-14 grid border-t border-rule md:grid-cols-2 lg:grid-cols-5">
          {process.map((p) => (
            <div
              key={p.step}
              className="border-b border-rule py-10 pr-8 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8"
            >
              <span className="label-meta text-primary">{p.step}</span>
              <h3 className="mt-4 font-display text-xl">{t(p.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(p.body)}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow={t({ en: "FAQ", fr: "FAQ" })}
          title={t({ en: "Questions clients ask", fr: "Les questions fréquentes" })}
        />
        <Accordion type="single" collapsible className="mt-14 border-t border-rule">
          {faqs.map((f) => (
            <AccordionItem key={f.q.en} value={f.q.en} className="border-rule py-2">
              <AccordionTrigger className="font-display text-xl hover:no-underline">
                {t(f.q)}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl leading-relaxed text-muted-foreground">
                {t(f.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section dark>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <h2 className="display-lg">{t(home.ctaTitle)}</h2>
          <div>
            <p className="text-lg text-primary-foreground/65">{t(home.ctaBody)}</p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-primary px-6 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground"
            >
              {t(ui.contactUs)}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
