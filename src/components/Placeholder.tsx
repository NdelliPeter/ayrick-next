import Image from "next/image";

import { cn } from "@/lib/utils";
import ayrickLogo from "@/assets/ayrick-logo.png";

/** Aspect-ratio classes shared by ImagePlaceholder and any component rendering real project images. */
export const ASPECT_RATIOS: Record<string, string> = {
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  fill: "h-full w-full",
};

/**
 * PLACEHOLDER IMAGE BLOCK
 * Real photography is not yet delivered for every route. Every block below is
 * sized and positioned exactly where the final image will sit.
 */
export function ImagePlaceholder({
  label,
  ratio = "landscape",
  className,
  tone = "concrete",
}: {
  label?: string;
  ratio?: "landscape" | "wide" | "portrait" | "square" | "fill";
  className?: string;
  tone?: "concrete" | "steel";
}) {
  return (
    <div
      data-image-placeholder
      className={cn(
        "relative flex items-end overflow-hidden",
        tone === "concrete" ? "bg-concrete-dark" : "bg-steel/25",
        ASPECT_RATIOS[ratio],
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 22px, color-mix(in oklab, var(--steel) 22%, transparent) 22px 23px)",
        }}
      />
      <div className="relative z-10 flex w-full items-end justify-between gap-4 p-4">
        <span className="label-meta text-foreground/60">Image Placeholder</span>
        {label ? (
          <span className="max-w-[60%] text-right text-xs font-medium tracking-wide text-foreground/50">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}

/** Ayrick logo mark. Transparent background — renders correctly on both light and dark sections. */
export function LogoWordmark({ className }: { className?: string }) {
  return (
    <Image
      src={ayrickLogo}
      alt="Ayrick Architecture"
      className={cn("h-14 w-auto", className)}
      priority
    />
  );
}
