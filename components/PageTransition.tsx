"use client";

import { motion, useReducedMotion } from "framer-motion";
import { editorialEase } from "@/lib/motion";

/**
 * Route transition. `template.tsx` remounts this on every navigation, so a
 * warm-brown panel wipes down and away to reveal the incoming page, while the
 * content itself fades and rises. No-op under reduced motion.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9998] origin-top bg-warm-brown"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.7, ease: editorialEase }}
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: editorialEase, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </>
  );
}
