"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { editorialEase } from "@/lib/motion";

type RevealTextProps = {
  text: string;
  className?: string;
  /** Delay before the first word begins, in seconds. */
  delay?: number;
  /** Stagger between words, in seconds. */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Trigger once on entry (default) or every time it enters. */
  once?: boolean;
};

/**
 * Reveals a heading word-by-word from below, with a slight upward translate
 * and a blur that clears. Respects prefers-reduced-motion.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  as = "h2",
  once = true,
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  // Cast resolves the union-of-components JSX call-signature issue.
  const MotionTag = motion[as] as typeof motion.h2;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: "0.45em", filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: editorialEase },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          className="inline-block will-change-[transform,filter]"
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
