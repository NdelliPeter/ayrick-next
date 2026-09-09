import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { routing, type Locale } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

import "../globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    metadataBase: new URL(SITE_URL),
    title: isEn
      ? "Ayrick Makers Group — Architecture & Construction"
      : "Ayrick Makers Group — Architecture et construction",
    description: isEn
      ? "Ayrick Makers Group creates spaces that combine innovation, function and timeless design — architecture, interiors, visualization and construction from Accra, Ghana."
      : "Ayrick Makers Group crée des espaces qui allient innovation, fonction et design intemporel — architecture, intérieurs, visualisation et construction depuis Accra, au Ghana.",
    authors: [{ name: "Ayrick Makers Group" }],
    openGraph: {
      title: isEn
        ? "Ayrick Makers Group — Architecture & Construction"
        : "Ayrick Makers Group — Architecture et construction",
      description: isEn
        ? "Civic, commercial and residential architecture delivered across four continents since 1988."
        : "Architecture civique, commerciale et résidentielle livrée sur quatre continents depuis 1988.",
      type: "website",
      locale: isEn ? "en_US" : "fr_FR",
    },
    twitter: { card: "summary_large_image" },
    icons: { icon: "/favicon.ico" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${roboto.variable} ${inter.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={{}}>
          <div className="flex min-h-screen flex-col">
            <SiteHeader locale={locale as Locale} />
            <main className="flex-1">{children}</main>
            <SiteFooter locale={locale as Locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
