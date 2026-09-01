import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero, Section } from "@/components/Section";
import { contact } from "@/content/site";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ayrick Architecture" },
      {
        name: "description",
        content:
          "Six studios in Rotterdam, London, Douala, Singapore, Montréal and Marrakech. Send a brief and a partner will respond within two working days.",
      },
      { property: "og:title", content: "Contact — Ayrick Architecture" },
      { property: "og:description", content: "Office locations and project enquiries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://ayrick-architects-forge.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://ayrick-architects-forge.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const inputClass =
  "mt-2 w-full border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

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
                  <span className="label-meta">{t(contact.fields.organisation)}</span>
                  <input name="organisation" className={inputClass} />
                </label>
                <label className="block text-sm">
                  <span className="label-meta">{t(contact.fields.location)}</span>
                  <input name="location" className={inputClass} />
                </label>
              </div>

              <label className="mt-6 block text-sm">
                <span className="label-meta">{t(contact.fields.type)}</span>
                <select name="type" className={inputClass}>
                  {contact.enquiryTypes.map((o) => (
                    <option key={o.en} value={o.en}>
                      {t(o)}
                    </option>
                  ))}
                </select>
              </label>

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
                  {t({
                    en: "Thank you — your enquiry has been recorded. A partner will respond within two working days.",
                    fr: "Merci — votre demande a été enregistrée. Un associé vous répondra sous deux jours ouvrés.",
                  })}
                </p>
              ) : null}
            </form>
          </div>

          <div>
            <p className="label-meta">{t(contact.officesTitle)}</p>
            <ul className="mt-8 border-t border-rule">
              {contact.offices.map((office) => (
                <li
                  key={office.city}
                  className="grid gap-1 border-b border-rule py-5 sm:grid-cols-[9rem_1fr]"
                >
                  <span className="font-display text-lg font-semibold">{office.city}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {office.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                </li>
              ))}
            </ul>
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
