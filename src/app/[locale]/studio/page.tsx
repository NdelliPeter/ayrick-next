import { redirect } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export default async function StudioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  redirect({ href: "/studio/about-us", locale });
}
