import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion easing — an editorial, unhurried ease-out.
 */
export const editorialEase = [0.22, 1, 0.36, 1] as const;

/**
 * Fade + slight rise, used for section blocks entering the viewport.
 */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: editorialEase },
  },
};

/**
 * Stagger container for word-by-word or line-by-line reveals.
 */
export const staggerContainer = (stagger = 0.06, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/**
 * A single word rising from below with its blur clearing.
 */
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: editorialEase },
  },
};

/**
 * Image fade + subtle scale on load / entry.
 */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: editorialEase },
  },
};
