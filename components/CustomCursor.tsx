"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A small warm-brown dot cursor that scales up over interactive elements.
 * Pointer devices only; disabled under reduced motion, leaving the native
 * cursor in place.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { stiffness: 500, damping: 40, mass: 0.4 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor");

    const interactiveSelector =
      'a, button, input, textarea, select, label, [role="button"], [data-cursor="hover"]';

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest(interactiveSelector)));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full bg-warm-brown mix-blend-multiply"
      style={{
        x: smoothX,
        y: smoothY,
        height: 12,
        width: 12,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: hovering ? 2.6 : 1,
        opacity: visible ? (hovering ? 0.5 : 0.9) : 0,
      }}
      transition={{ scale: { duration: 0.25 }, opacity: { duration: 0.2 } }}
    />
  );
}
