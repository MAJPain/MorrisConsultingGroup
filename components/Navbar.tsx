"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Monogram } from "@/components/Monogram";
import { Magnetic } from "@/components/Magnetic";
import { nav, contactNav } from "@/content/site";
import { editorialEase } from "@/lib/motion";

/** Routes that render a dark full-bleed hero the navbar sits over. */
const HERO_ROUTES = new Set(["/"]);

export function Navbar() {
  const pathname = usePathname();
  const overHero = HERO_ROUTES.has(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Solid unless we're over a hero and haven't scrolled yet.
  const solid = scrolled || !overHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[60] transition-colors duration-500 ease-editorial",
        solid
          ? "border-b border-warm-brown/15 bg-bone-white/95 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <Monogram
          href="/"
          className={cn(
            "transition-colors duration-500",
            solid ? "text-ink" : "text-bone-white"
          )}
        />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "link-underline font-body text-sm transition-colors duration-500",
                      solid ? "text-ink" : "text-bone-white",
                      active && "after:scale-x-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Magnetic strength={3}>
            <Link
              href={contactNav.href}
              className={cn(
                "group inline-flex items-center gap-2 font-body text-sm transition-colors duration-500",
                solid ? "text-ink" : "text-bone-white"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-warm-brown transition-transform duration-300 group-hover:scale-125" />
              {contactNav.label}
            </Link>
          </Magnetic>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={cn(
            "-mr-2 inline-flex h-10 w-10 items-center justify-center transition-colors duration-500 md:hidden",
            solid || menuOpen ? "text-ink" : "text-bone-white"
          )}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <MobileMenu open={menuOpen} />
    </header>
  );
}

function MobileMenu({ open }: { open: boolean }) {
  const pathname = usePathname();
  const items = [...nav, contactNav];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: editorialEase }}
          className="overflow-hidden border-t border-warm-brown/15 bg-bone-white md:hidden"
        >
          <ul className="container flex flex-col py-4">
            {items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 py-4 font-display text-2xl font-medium text-ink",
                      active && "text-warm-brown"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
