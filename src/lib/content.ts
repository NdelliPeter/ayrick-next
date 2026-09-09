import type { Locale } from "@/i18n/routing";

/** A bilingual value: every piece of copy is authored as `{ en, fr }`. */
export type L<T = string> = { en: T; fr: T };

/** Resolve a bilingual value for the given locale. */
export function pick<T>(locale: Locale, value: L<T>): T {
  return value[locale];
}
