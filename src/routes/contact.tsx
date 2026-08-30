import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero, Section } from "@/components/Section";
import { contact } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ayrick Makers Group, Accra" },
      {
        name: "description",
        content:
          "Studio in West Legon, Accra, Ghana. Send your project brief and we will get back to you shortly — phone, WhatsApp and email available.",
      },
      { property: "og:title", content: "Contact — Ayrick Makers Group" },
      { property: "og:description", content: "Studio address, phone, WhatsApp, email and project enquiry form." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ayrick-architects-forge.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://ayrick-architects-forge.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const inputClass =
  "mt-2 w-full border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-accent";

function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const d = contact.details;

  return (
    <>
      <PageHero
        eyebrow={t(contact.heroEyebrow)}
        title={t(contact.heroTitle)}
        lead={t(contact.heroLead)}
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="label-meta">{t(contact.formTitle)}</p>
            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="label-meta">{t(contact.fields.name)}</span>
                  <input required name="name" className={inputClass} />
                </label>
                <label className="block text-sm">
                  <span className="label-meta">{t(contact.fields.email)}</span>
                  <input required type="email" name="email" className={inputClass} />
                </label>
                <label className="block text-sm">
                  <span className="label-meta">{t(contact.fields.phone)}</span>
                  <input name="phone" type="tel" className={inputClass} />
                </label>
                <label className="block text-sm">
                  <span className="label-meta">{t(contact.fields.location)}</span>
                  <input name="location" className={inputClass} />
                </label>
                <label className="block text-sm">
                  <span className="label-meta">{t(contact.fields.type)}</span>
                  <select name="type" className={inputClass}>
                    {contact.enquiryTypes.map((o) => (
                      <option key={o.en} value={o.en}>
                        {t(o)}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="label-meta">{t(contact.fields.budget)}</span>
                  <select name="budget" className={inputClass}>
                    {contact.budgetRanges.map((o) => (
                      <option key={o.en} value={o.en}>
                        {t(o)}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-6 block text-sm">
                <span className="label-meta">{t(contact.fields.message)}</span>
                <textarea required name="message" rows={6} className={inputClass} />
              </label>

              <button
                type="submit"
                className="mt-8 bg-primary px-7 py-3.5 text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-navy"
              >
                {t(contact.fields.submit)}
              </button>

              {sent ? (
                <p className="mt-5 border-l-2 border-accent pl-4 text-sm text-muted-foreground">
                  {t(contact.thankYou)}
                </p>
              ) : null}
            </form>
          </div>

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
                  <a href={d.instagramUrl} className="link-underline" rel="noreferrer" target="_blank">
                    @{d.instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <section className="border-b border-rule">
        <div
          data-image-placeholder
          className="relative flex aspect-[21/9] items-end bg-concrete-dark"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, transparent 0 22px, color-mix(in oklab, var(--steel) 22%, transparent) 22px 23px)",
            }}
          />
          <div className="container-wide relative z-10 pb-8">
            <span className="label-meta text-foreground/60">{t(contact.mapLabel)}</span>
          </div>
        </div>
      </section>
    </>
  );
}
