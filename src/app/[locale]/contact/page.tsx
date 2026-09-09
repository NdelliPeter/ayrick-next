import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { PageHero, Section } from "@/components/Section";
import { contact } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import contactHero from "@/assets/contact-hero.jpg";

import { ContactForm } from "./ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const path = `/${locale}/contact`;
  return {
    title: "Contact — Ayrick Makers Group, Accra",
    description: isEn
      ? "Studio in West Legon, Accra, Ghana. Send your project brief and we will get back to you shortly — phone, WhatsApp and email available."
      : "Studio à West Legon, Accra, au Ghana. Envoyez-nous votre brief de projet et nous vous répondrons rapidement — téléphone, WhatsApp et e-mail disponibles.",
    openGraph: {
      title: "Contact — Ayrick Makers Group",
      description: isEn
        ? "Studio address, phone, WhatsApp, email and project enquiry form."
        : "Adresse du studio, téléphone, WhatsApp, e-mail et formulaire de demande de projet.",
      type: "website",
      url: `${SITE_URL}${path}`,
    },
    twitter: { card: "summary_large_image" },
    alternates: {
      canonical: `${SITE_URL}${path}`,
      languages: { en: `${SITE_URL}/en/contact`, fr: `${SITE_URL}/fr/contact` },
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);
  const d = contact.details;

  return (
    <>
      <PageHero
        eyebrow={t(contact.heroEyebrow)}
        title={t(contact.heroTitle)}
        lead={t(contact.heroLead)}
        image={contactHero}
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <ContactForm locale={locale} />

          <div>
            <p className="label-meta">{t(contact.officesTitle)}</p>
            <dl className="mt-8 border-t border-rule">
              <div className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="label-meta">{t(d.addressLabel)}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  {d.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="label-meta">{t(d.phoneLabel)}</dt>
                <dd className="text-sm">
                  <a href={`tel:${d.phone.replace(/\s/g, "")}`} className="link-underline">
                    {d.phone}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="label-meta">{t(d.whatsappLabel)}</dt>
                <dd className="text-sm">
                  <a
                    href={`https://wa.me/${d.whatsapp.replace(/\D/g, "")}`}
                    className="link-underline"
                  >
                    {d.whatsapp}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="label-meta">{t(d.emailLabel)}</dt>
                <dd className="text-sm">
                  <a href={`mailto:${d.email}`} className="link-underline">
                    {d.email}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="label-meta">{t(d.principalEmailLabel)}</dt>
                <dd className="text-sm">
                  <a href={`mailto:${d.principalEmail}`} className="link-underline">
                    {d.principalEmail}
                  </a>
                </dd>
              </div>
              <div className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="label-meta">{t(d.hoursLabel)}</dt>
                <dd className="text-sm text-muted-foreground">{t(d.hours)}</dd>
              </div>
              <div className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_1fr]">
                <dt className="label-meta">{t(d.instagramLabel)}</dt>
                <dd className="text-sm">
                  <a
                    href={d.instagramUrl}
                    className="link-underline"
                    rel="noreferrer"
                    target="_blank"
                  >
                    @{d.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <section className="border-b border-rule">
        <div className="relative aspect-[21/9]">
          <iframe
            title="Studio location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(d.address.join(", "))}&output=embed`}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
