"use client";

import { useState } from "react";

import { contact } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { pick } from "@/lib/content";

const inputClass =
  "mt-2 w-full border border-input bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-primary";

export function ContactForm({ locale }: { locale: Locale }) {
  const t = <T,>(v: { en: T; fr: T }) => pick(locale, v);
  const [sent, setSent] = useState(false);

  return (
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
          <p className="mt-5 border-l-2 border-primary pl-4 text-sm text-muted-foreground">
            {t(contact.thankYou)}
          </p>
        ) : null}
      </form>
    </div>
  );
}
