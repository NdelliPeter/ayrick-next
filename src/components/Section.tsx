import type { StaticImageData } from "next/image";
import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  dark,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={cn(
        "border-b border-rule py-20 md:py-28",
        dark && "border-primary-foreground/12 bg-navy-deep text-primary-foreground",
        className,
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-lg mt-4">{title}</h2>
      {lead ? <p className="mt-6 text-lg leading-relaxed opacity-70">{lead}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  image?: StaticImageData;
}) {
  return (
    <section className="relative overflow-hidden border-b border-primary-foreground/12 bg-navy-deep py-24 text-primary-foreground md:py-32">
      {image ? (
        <>
          <Image src={image} alt="" fill priority className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-navy-deep/18" />
        </>
      ) : null}
      <div className="container-wide relative z-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-xl mt-5">{title}</h1>
        </div>
        {lead ? (
          <p className="max-w-xl text-lg leading-relaxed text-primary-foreground">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
