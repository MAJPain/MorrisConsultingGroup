"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { editorialEase } from "@/lib/motion";

type PortraitProps = {
  src?: string;
  alt: string;
  /** Initials shown in the designed fallback panel (e.g. "KD"). */
  initials?: string;
  /** Monospace label beneath the fallback mark. */
  placeholderLabel?: string;
  /** When no initials are given, show this serif mark instead (e.g. "&"). */
  placeholderMark?: string;
  duotone?: boolean;
  /** Feather the photo's edges so it blends into the page background. */
  feather?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * Renders a portrait photograph if the file loads, otherwise a designed
 * bone-white placeholder panel — never a broken image. The placeholder is
 * intentional: initials or a serif mark, with a monospace status label.
 */
export function Portrait({
  src,
  alt,
  initials,
  placeholderLabel = "PORTRAIT FORTHCOMING",
  placeholderMark,
  duotone = false,
  feather = false,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 45vw",
}: PortraitProps) {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;
  // Feathering only applies to a real photo; the placeholder keeps its panel.
  const feathered = feather && showImage;

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full",
        feathered ? "feather-edges" : "overflow-hidden bg-bone-white",
        className
      )}
    >
      {showImage ? (
        <motion.div
          className="absolute inset-0"
          initial={reduce ? undefined : { opacity: 0, scale: 1.06 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 1.1, ease: editorialEase }}
        >
          <Image
            src={src as string}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(
              "object-cover object-center",
              duotone && "duotone-warm"
            )}
            onError={() => setFailed(true)}
          />
        </motion.div>
      ) : (
        <PlaceholderPanel
          initials={initials}
          label={placeholderLabel}
          mark={placeholderMark}
        />
      )}
    </div>
  );
}

function PlaceholderPanel({
  initials,
  label,
  mark,
}: {
  initials?: string;
  label: string;
  mark?: string;
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-bone-white">
      <span className="font-display text-6xl font-medium text-deep-blue md:text-7xl">
        {initials ?? mark ?? "·"}
      </span>
      <span className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-fog">
        — {label}
      </span>
    </div>
  );
}
