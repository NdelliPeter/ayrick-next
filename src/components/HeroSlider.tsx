"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 6000;

export function HeroSlider({ images }: { images: StaticImageData[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <>
      {images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt=""
          fill
          priority={i === 0}
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            i === index ? "opacity-30" : "opacity-0",
          )}
        />
      ))}
    </>
  );
}
