"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A restrained scroll cue: a small label above a thin line that drifts
 * downward on a loop. Static under reduced motion.
 */
export function ScrollCue({
  label = "Scroll",
  className,
}: {
  label?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <span className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-bone-white/60">
        {label}
      </span>
      <span className="relative block h-12 w-px overflow-hidden bg-bone-white/20">
        <motion.span
          className="absolute inset-x-0 top-0 block h-4 bg-warm-brown"
          initial={{ y: -16 }}
          animate={reduce ? { y: 0 } : { y: 48 }}
          transition={
            reduce
              ? undefined
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </span>
    </div>
  );
}
