"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { editorialEase } from "@/lib/motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Vertical distance the block rises from, in pixels. */
  y?: number;
  once?: boolean;
};

/**
 * Wraps content and fades + rises it into view on scroll.
 * A no-op (renders statically) under prefers-reduced-motion.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: editorialEase, delay },
    },
  };

  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}
